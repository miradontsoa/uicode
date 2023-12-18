import CategoryTextB from "./category-text-b";

export default function Example() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <CategoryTextB
          initialCategorySlug="burger"
          categories={[
            {
              slug: "all",
              title: "All",
              imageSrc: "/placeholder/img-food-square-3.jpg",
            },
            {
              slug: "burger",
              title: "Burger",
              imageSrc: "/placeholder/img-food-square-1.jpg",
            },
            {
              slug: "vegan",
              title: "Vegan",
              imageSrc: "/placeholder/img-food-square-2.jpg",
            },
            {
              slug: "street",
              title: "Street food",
              imageSrc: "/placeholder/img-food-square-4.jpg",
            },
          ]}
        />
      </div>
      <div>
        <CategoryTextB
          rounded="small"
          size="small"
          variant="red"
          initialCategorySlug="burger"
          categories={[
            {
              slug: "all",
              title: "All",
              imageSrc: "/placeholder/img-food-square-3.jpg",
            },
            {
              slug: "burger",
              title: "Burger",
              imageSrc: "/placeholder/img-food-square-1.jpg",
            },
            {
              slug: "vegan",
              title: "Vegan",
              imageSrc: "/placeholder/img-food-square-2.jpg",
            },
            {
              slug: "street",
              title: "Street food",
              imageSrc: "/placeholder/img-food-square-4.jpg",
            },
          ]}
        />
      </div>
    </div>
  );
}
