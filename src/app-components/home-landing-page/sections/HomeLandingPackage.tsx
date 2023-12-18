import SectionA from "@/app-components/ui/sections/SectionA";

export default function HomeLandingPackage() {
  return (
    <>
      <SectionA
        withXPageMargin={true}
        paddingTop={"large"}
        paddingBottom={"large"}
        contentWidth={"medium"}
      >
      <div className="grid lg:grid-cols-2 gap-x-8 gap-y-4">
          <div className="col">
            <div className="lg:w-9/12">
              <h3 className={"title-2 text-primary"}>
                Uhh, but there are already plenty of React.js UI libraries out
                there
              </h3>
            </div>
          </div>
          <div className="col">
            <div className="lg:w-9/12">
              <p className="lg:text-lg">
                Yes, we admit that, but our components do not compete with them,
                we complete them. Some of the presented components even use
                them. [REFORMULATE]
              </p>
            </div>
          </div>
        </div>
      </SectionA>
    </>
  );
}
