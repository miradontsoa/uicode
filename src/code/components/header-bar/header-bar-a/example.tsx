import HeaderBarA from "./header-bar-a";

export default function Example() {
  return (
    <div>
      <div className="lg:hidden" >
        This component it optimized for large screen devices, please use larger
        device (laptop, desktop) to view it.
      </div>
      <div className="hidden lg:block" >
        <HeaderBarA />
      </div>
    </div>
  );
}
