import { ArrowUpIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import TabsRadixuiC from "./tabs-radixui-c";

export default function Example() {
  return (
    <div className="grid gap-8 mx-auto">
      <div>
        <TabsRadixuiC
          shadow="small"
          defaultValue="trending"
          tabs={[
            {
              title: "Trending",
              slug: "trending",
              content: (
                <div>
                  <h3>Trending</h3>
                  <p>Trending content</p>
                </div>
              ),
            },
            {
              title: "Projects",
              slug: "projects",
              content: (
                <div>
                  <h3>Projects</h3>
                  <p>Projects content</p>
                </div>
              ),
            },
            {
              title: "Products",
              slug: "products",
              content: (
                <div>
                  <h3>Products</h3>
                  <p>Products content</p>
                </div>
              ),
            },
          ]}
        />
      </div>
      <div>
        <TabsRadixuiC
          shadow="small"
          variant="style-b"
          defaultValue="trending"
          tabs={[
            {
              title: "Trending",
              slug: "trending",
              content: (
                <div>
                  <h3>Trending</h3>
                  <p>Trending content</p>
                </div>
              ),
            },
            {
              title: "Projects",
              slug: "projects",
              content: (
                <div>
                  <h3>Projects</h3>
                  <p>Projects content</p>
                </div>
              ),
            },
            {
              title: "Products",
              slug: "products",
              content: (
                <div>
                  <h3>Products</h3>
                  <p>Products content</p>
                </div>
              ),
            },
          ]}
        />
      </div>

      <div>
        <TabsRadixuiC
          shadow="small"
          rounded="large"
          defaultValue="trending"
          tabs={[
            {
              title: "Trending",
              slug: "trending",
              content: (
                <div>
                  <h3>Trending</h3>
                  <p>Trending content</p>
                </div>
              ),
            },
            {
              title: "Projects",
              slug: "projects",
              content: (
                <div>
                  <h3>Projects</h3>
                  <p>Projects content</p>
                </div>
              ),
            },
            {
              title: "Products",
              slug: "products",
              content: (
                <div>
                  <h3>Products</h3>
                  <p>Products content</p>
                </div>
              ),
            },
          ]}
        />
      </div>
      <div>
        <TabsRadixuiC
          defaultValue="trending"
          tabs={[
            {
              title: "Trending",
              slug: "trending",
              icon: <ArrowUpIcon />,
              content: (
                <div>
                  <h3>Trending</h3>
                  <p>Trending content</p>
                </div>
              ),
            },
            {
              title: "Projects",
              slug: "projects",
              icon: <EnvelopeIcon />,
              content: (
                <div>
                  <h3>Projects</h3>
                  <p>Projects content</p>
                </div>
              ),
            },
            {
              title: "Products",
              slug: "products",
              icon: <EnvelopeIcon />,
              content: (
                <div>
                  <h3>Products</h3>
                  <p>Products content</p>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
