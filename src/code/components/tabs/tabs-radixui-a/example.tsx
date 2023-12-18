import {
  ArrowUpIcon, EnvelopeIcon
} from "@heroicons/react/24/solid";
import TabsRadixuiA from "./tabs-radixui-a";

export default function Example() {
  return (
    <div className="grid gap-8 mx-auto">
      <div>
        <TabsRadixuiA
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
        <TabsRadixuiA
          shadow="small"
          variant="blue-outline"
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
        <TabsRadixuiA
          shadow="small"
          variant="gray"
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
        <TabsRadixuiA
          shadow="small"
          rounded="full"
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
        <TabsRadixuiA
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
