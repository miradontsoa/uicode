import {
  ArrowUpIcon, EnvelopeIcon
} from "@heroicons/react/24/solid";
import TabsRadixuiB from "./tabs-radixui-b";

export default function Example() {
  return (
    <div className="grid gap-8 mx-auto">
      <div>
        <TabsRadixuiB
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
        <TabsRadixuiB
          shadow="small"
          variant="marked-line-b"
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
        <TabsRadixuiB
          shadow="small"
          variant="marked-circle"
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
 
    </div>
  );
}
