import CategoryItemA from "./category-item-a";

export default function Example() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <CategoryItemA>A category</CategoryItemA>
      </div>
      <div>
        <CategoryItemA rounded="small" size="small" variant="primary">
          A category
        </CategoryItemA>
      </div>
    </div>
  );
}
