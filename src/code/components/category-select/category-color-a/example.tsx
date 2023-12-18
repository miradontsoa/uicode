import CategoryColorA from "./category-color-a";

export default function Example() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <CategoryColorA
          rounded="full"
          colors={[
            {
              slug: "red",
              rgb: "#f44336",
            },
            {
              slug: "green",
              rgb: "#009688",
            },
            {
              slug: "white",
              rgb: "#ffffff",
            },
            {
              slug: "black",
              rgb: "#2d2d2d",
            },
          ]}
        />
      </div>
      <div>
        <CategoryColorA
          rounded="small"
          size="large"
          initialColorSlug="purple"
          colors={[
            {
              slug: "red",
              rgb: "#FF3894",
            },
            {
              slug: "purple",
              rgb: "#8499ff",
            },
            {
              slug: "white",
              rgb: "#FFFFFF",
            },
            {
              slug: "black",
              rgb: "#2d2d2d",
            },
          ]}
        />
      </div>
    </div>
  );
}
