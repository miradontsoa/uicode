import Breadcrumb from "@/app-components/ui/breadcrumb/Breadcrumb";
import SectionA from "@/app-components/ui/sections/SectionA";

const Page = async ({}) => {
  return (
    <SectionA className="content-content">
      <Breadcrumb
        className={"breadcrumb"}
        items={[
          {
            title: "Pages",
          },
        ]}
      />
      <h2 className={"title"}>Pages</h2>
      <p>Select a page here</p>
    </SectionA>
  );
};
export default Page;

