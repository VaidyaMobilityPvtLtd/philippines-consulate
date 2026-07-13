import { buildSectionSubPage } from "@/lib/section-page";

const built = buildSectionSubPage("/traveling-in-philippines");

export const generateStaticParams = built.generateStaticParams;
export const generateMetadata = built.generateMetadata;
export default built.Page;
