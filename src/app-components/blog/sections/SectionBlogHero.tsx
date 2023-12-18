import MailchimpRegistration from "@/app-components/ui/form/MailchimpRegistration";
import ListSocials from "@/app-components/ui/list/ListSocials";
import SectionPage from "@/app-components/ui/sections/SectionPage";

type Props = {
  children?: React.ReactNode;
};
export default function SectionBlogHero({ children }: Props) {
  return (
    <SectionPage width="full" marginTop="large">
      <div className="row justify-content-between">
        <div className="col-12 col-lg-6">
          <h1 className="display-1 title-font strong mb-4 mt-title">Blog</h1>
          <p className="">
            <span>
              Here I share news, tutorials, coding techniques and UI design
              tips.
            </span>{" "}
            <span>
              Stay up to date by following me on twitter or on instagram
            </span>
            <span>, or by subscribing to the newsletter email list</span>
            <span>.</span>
          </p>
          <ListSocials className="mt-4" />
        </div>
        <div className="col-12 col-lg-3 d-none d-lg-flex">
          <MailchimpRegistration className="mt-5 mt-lg-0" />
        </div>
      </div>
      {children}
    </SectionPage>
  );
}
