import Breadcrumb from "@/app-components/ui/breadcrumb/Breadcrumb";
import SectionA from "@/app-components/ui/sections/SectionA";

export default function Page({ params }: { params?: { slug: string } }) {
  const slug = params?.slug;
  return (
    <SectionA className="content-content">
      <Breadcrumb
        className={"breadcrumb"}
        items={[
          {
            title: "Sections",
          },
          {
            title: slug,
          },
        ]}
      />
      <h2 className={"title"}>A section item page</h2>
      <p>
        This is a set of things that we present to help you to do a lot of things.
      </p>
    </SectionA>
  );
}
