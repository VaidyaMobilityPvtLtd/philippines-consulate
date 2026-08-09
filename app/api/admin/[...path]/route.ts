import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  createMockNews,
  deleteMockNews,
  isMockAdminToken,
  listMockContacts,
  listMockFeedback,
  listMockNews,
  updateMockContactStatus,
  updateMockFeedbackStatus,
  updateMockNews,
} from "@/lib/admin-mock";
import { getApiBaseUrl } from "@/lib/api";
import type {
  CreateNewsInput,
  SubmissionStatus,
  UpdateNewsInput,
} from "@/lib/api-types";
import { ADMIN_TOKEN_COOKIE } from "@/lib/auth";
import { isApiEnabled } from "@/lib/config";

type Ctx = { params: Promise<{ path: string[] }> };

function clearAuthCookie(res: NextResponse) {
  res.cookies.set(ADMIN_TOKEN_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res;
}

function mockError(err: unknown) {
  const status =
    typeof err === "object" && err && "status" in err
      ? Number((err as { status: number }).status)
      : 500;
  const message = err instanceof Error ? err.message : "Request failed";
  return NextResponse.json({ error: message }, { status: status || 500 });
}

async function handleMock(request: Request, path: string[]) {
  const jar = await cookies();
  const token = jar.get(ADMIN_TOKEN_COOKIE)?.value;
  if (!isMockAdminToken(token)) {
    return clearAuthCookie(
      NextResponse.json({ error: "Authentication required" }, { status: 401 }),
    );
  }

  const [resource, id] = path;
  const method = request.method.toUpperCase();

  try {
    if (resource === "news" && !id && method === "GET") {
      return NextResponse.json({ items: listMockNews() });
    }

    if (resource === "news" && !id && method === "POST") {
      const body = (await request.json()) as CreateNewsInput;
      const item = createMockNews(body);
      return NextResponse.json({ item }, { status: 201 });
    }

    if (resource === "news" && id && method === "PATCH") {
      const body = (await request.json()) as UpdateNewsInput;
      const item = updateMockNews(id, body);
      return NextResponse.json({ item });
    }

    if (resource === "news" && id && method === "DELETE") {
      deleteMockNews(id);
      return new NextResponse(null, { status: 204 });
    }

    if (resource === "contact" && !id && method === "GET") {
      return NextResponse.json({ items: listMockContacts() });
    }

    if (resource === "contact" && id && method === "PATCH") {
      const body = (await request.json()) as { status?: SubmissionStatus };
      if (!body.status) {
        return NextResponse.json({ error: "status is required" }, { status: 400 });
      }
      const item = updateMockContactStatus(id, body.status);
      return NextResponse.json({ item });
    }

    if (resource === "feedback" && !id && method === "GET") {
      return NextResponse.json({ items: listMockFeedback() });
    }

    if (resource === "feedback" && id && method === "PATCH") {
      const body = (await request.json()) as { status?: SubmissionStatus };
      if (!body.status) {
        return NextResponse.json({ error: "status is required" }, { status: 400 });
      }
      const item = updateMockFeedbackStatus(id, body.status);
      return NextResponse.json({ item });
    }

    return NextResponse.json({ error: "Not found" }, { status: 404 });
  } catch (err) {
    return mockError(err);
  }
}

async function proxyUpstream(request: Request, ctx: Ctx) {
  const { path } = await ctx.params;
  const jar = await cookies();
  const token = jar.get(ADMIN_TOKEN_COOKIE)?.value;
  if (!token) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  const url = new URL(request.url);
  const target = `${getApiBaseUrl()}/api/admin/${path.join("/")}${url.search}`;

  const headers: HeadersInit = {
    Authorization: `Bearer ${token}`,
  };
  const contentType = request.headers.get("content-type");
  if (contentType) headers["Content-Type"] = contentType;

  const init: RequestInit = {
    method: request.method,
    headers,
    cache: "no-store",
  };

  if (request.method !== "GET" && request.method !== "HEAD") {
    const body = await request.text();
    if (body) init.body = body;
  }

  let upstream: Response;
  try {
    upstream = await fetch(target, init);
  } catch {
    return NextResponse.json(
      { error: "Unable to reach the Consulate API" },
      { status: 503 },
    );
  }

  if (upstream.status === 204) {
    return new NextResponse(null, { status: 204 });
  }

  const text = await upstream.text();
  return new NextResponse(text, {
    status: upstream.status,
    headers: {
      "Content-Type": upstream.headers.get("content-type") ?? "application/json",
    },
  });
}

async function handler(request: Request, ctx: Ctx) {
  if (!isApiEnabled()) {
    const { path } = await ctx.params;
    return handleMock(request, path);
  }
  return proxyUpstream(request, ctx);
}

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const DELETE = handler;
