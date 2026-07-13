import { buildSectionSubPage } from "@/lib/section-page";

const built = buildSectionSubPage("/registration-service");

export const generateStaticParams = built.generateStaticParams;
export const generateMetadata = built.generateMetadata;
export default built.Page;
