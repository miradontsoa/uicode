import ArticleLayout from "@/app-components/blog/ArticleLayout";
import LandingPageFooter from "@/app-components/ui/footer/LandingPageFooter";
import ContentLayout from "@/app-components/ui/layout/ContentLayout";
import SectionA from "@/app-components/ui/sections/SectionA";
import { SOCIALS } from "@/const";
import Link from "next/link";

export const metadata = {
  title: "Support",
  description:
    "Simply browse our collection of React components, choose the one that best fits your needs, and you will immediately access the corresponding code.",
};

export default function SupportPage() {
  return (
    <ContentLayout withXPageMargin={false} withMaxWidth={false}>
      <SectionA
        className="min-h-window"
        paddingTop={"large"}
        paddingBottom={"large"}
        contentWidth="medium"
        withXPageMargin={true}
      >
        <div className="lg:max-w-2xl">
          <ArticleLayout>
            <h2 className={"title-1 text-primary"}>Help</h2>
            <h3>How to use this platform?</h3>
            <p>
              Simply browse our collection of React web components, choose the
              one that best fits your needs, and you will immediately access the
              corresponding code for the React component, which you can then use
              in your React based project. Additionally, you will find the
              associated CSS styles conveniently provided as a CSS module.
            </p>

            <h3 id="license">License &amp; Terms</h3>
            <p>
              Code of components here are provided under MIT license{" "}
              <a href="https://opensource.org/license/mit/">
                (Learn more about MIT license here)
              </a>
              .
            </p>

            <h3>Need assistance or personalized work?</h3>
            <p>
              If you have any questions, need assistance, please don&apos;t
              hesitate to reach out to me at hello(at)mirado.work, or{" "}
              <Link target={"_blank"} href={SOCIALS.TWITTER_MIRA}>
                DM Mirado on X (Twitter)
              </Link>
              . I am here to help and will be more than happy to assist you.
            </p>
          </ArticleLayout>
        </div>
      </SectionA>
      <LandingPageFooter />
    </ContentLayout>
  );
}
