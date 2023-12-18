
import Breadcrumb from "@/app-components/ui/breadcrumb/Breadcrumb";
import SectionA from "@/app-components/ui/sections/SectionA";

const Page = async ({}) => {
  // const works = await getFeaturedWorks();
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
      <h2 className={"title"}>Sections</h2>
      <p>Select a section here</p>
    </SectionA>
  );
};
export default Page;

/* async function getFeaturedWorks() {
  return works;
} */
