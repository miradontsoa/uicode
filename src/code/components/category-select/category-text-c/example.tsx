import CategoryTextC from "./category-text-c";

export default function Example() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <CategoryTextC
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
              title: "Food",
              imageSrc: "/placeholder/img-food-square-4.jpg",
            },
          ]}
        />
      </div>
      <div>
        <CategoryTextC
          rounded="small"
          variant="style-2"
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
              title: (
                <>
                  Food
                </>
              ),
              imageSrc: "/placeholder/img-food-square-4.jpg",
            },
          ]}
        />
      </div>
    </div>
  );
}
