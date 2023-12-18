import HomeLandingFeatures from "@/app-components/home-landing-page/sections/HomeLandingFeatures";
import HomeLandingHero from "@/app-components/home-landing-page/sections/HomeLandingHero";
import HomeLandingThreeImages from "@/app-components/home-landing-page/sections/HomeLandingThreeImages";
import HomeLandingWhy from "@/app-components/home-landing-page/sections/HomeLandingWhy";
import LandingPageFooter from "@/app-components/ui/footer/LandingPageFooter";
import ContentLayout from "@/app-components/ui/layout/ContentLayout";



export default async function Page({}) {
  // const works = await getFeaturedWorks();
  return (
    <ContentLayout withXPageMargin={false} withMaxWidth={false}>
      <HomeLandingHero />
      <HomeLandingWhy />
      <HomeLandingThreeImages />
      <HomeLandingFeatures />
      <LandingPageFooter />
    </ContentLayout>
  );
}

/* async function getFeaturedWorks() {
  return works;
} */
