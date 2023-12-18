import ArticleLayout from "@/app-components/blog/ArticleLayout";
import LandingPageFooter from "@/app-components/ui/footer/LandingPageFooter";
import ContentLayout from "@/app-components/ui/layout/ContentLayout";
import SectionA from "@/app-components/ui/sections/SectionA";

export default function TermsPage() {
  return (
    <ContentLayout withXPageMargin={true} withMaxWidth={false}>
      <SectionA
        className="min-h-window"
        paddingTop={"large"}
        paddingBottom={"large"}
        contentWidth="medium"
        withXPageMargin={true}
      >
        <div className="lg:max-w-2xl">
          <ArticleLayout>
            <h2 className={"title-1 text-3xl lg:text-6xl text-primary"}>
              Usage &amp; Terms
            </h2>
            <h3>Usage license</h3>
            <p>
              You can use it with a personal or commercial project.
            </p>
            <p>Alternatively, you can ask us to do it for you.</p>

            <h3 id="paddle">Paddle order</h3>
            <p>
              Checkout and order process is conducted by our online reseller
              Paddle.com. Paddle.com is the Merchant of Record for our orders.
              Paddle provides all customer service inquiries and handles
              returns.
            </p>

            <h3 id="refund">I need a refund</h3>
            <p>
              You do not love the product? no worry, we will refund you as long
              as you accept to not use it ...
            </p>

            <h3>Other question</h3>
            <p>Feel free to ask us via this contact form:</p>
            <div>Contact form here</div>
          </ArticleLayout>
        </div>
      </SectionA>
      <LandingPageFooter />
    </ContentLayout>
  );
}
