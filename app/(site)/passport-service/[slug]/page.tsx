import { buildSectionSubPage } from "@/lib/section-page";

const built = buildSectionSubPage("/passport-service");

export const generateStaticParams = built.generateStaticParams;
export const generateMetadata = built.generateMetadata;
export default built.Page;
