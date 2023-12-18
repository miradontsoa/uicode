import ProgressBarA from "./progress-bar-a";

export default function Example() {
  return (
    <div className="max-w-xs">
      <div>
        <ProgressBarA value={"75"} />
      </div>
      <div className="mt-4">
        <ProgressBarA value={"5"} />
      </div>
      <div className="mt-4">
        <ProgressBarA value={"100"} />
      </div>
      <div className="mt-4">
        <ProgressBarA value={"75"}>75%</ProgressBarA>
      </div>
      <div className="mt-4">
        <ProgressBarA padding="small" value={"75"} />
      </div>
      <div className="mt-4">
        <ProgressBarA border="medium" padding="medium" value={"75"} />
      </div>
      <div className="mt-4">
        <ProgressBarA padding="small" variant="blue-gradient" value={"75"} />
      </div>
    </div>
  );
}
