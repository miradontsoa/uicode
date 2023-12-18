import SwitchA from "./switch-a";

export default function Example() {
  return (
    <div>
      <div className="flex flex-col gap-4 mx-auto">
        <div>
          <p>Color: default</p>
          <SwitchA variant={"default"} initialChecked={true} />
        </div>
        <div>
          <p>Color: green</p>
          <SwitchA variant={"green"} initialChecked={true} />
        </div>
        <div>
          <p>Color: ios</p>
          <SwitchA variant={"ios"} initialChecked={true} />
        </div>
        <div>
          <p>Color: m3</p>
          <SwitchA variant={"m3"} initialChecked={true} />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 mt-4 mx-auto">
        <div>
          <SwitchA variant={"blue"} initialChecked={false}>
            <h6 className="mb-1">Switch on this toggle</h6>
            <p>This is a sample label for a switch</p>
          </SwitchA>
        </div>
      </div>
    </div>
  );
}
