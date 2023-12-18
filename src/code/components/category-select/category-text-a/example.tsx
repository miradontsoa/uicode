import CategoryTextA from "./category-text-a";

export default function Example() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <CategoryTextA
          initialCategorySlug="gb128"
          categories={[
            {
              slug: "gb64",
              title: "64 GB",
            },
            {
              slug: "gb128",
              title: "128 GB",
            },
            {
              slug: "gb256",
              title: "256 GB",
            },
            {
              slug: "gb512",
              title: "512 GB",
            },
          ]}
        />
      </div>
      <div>
        <CategoryTextA
          rounded="small"
          size="small"
          variant="black"
          categories={[
            {
              slug: "x-small",
              title: "XS",
            },
            {
              slug: "small",
              title: "S",
            },
            {
              slug: "medium",
              title: "M",
            },
            {
              slug: "large",
              title: "L",
            },
            {
              slug: "xl",
              title: "XL",
            },
          ]}
        />
      </div>
    </div>
  );
}
