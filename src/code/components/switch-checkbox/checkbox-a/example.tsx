import CheckboxA from "./checkbox-a";

export default function Example() {
  return (
    <div>
      <div className="flex flex-col gap-4 mx-auto">
        <div>
          <p>Color: default</p>
          <CheckboxA variant={"default"} initialChecked={true} />
        </div>
        <div>
          <p>Color: green & rouded: full</p>
          <CheckboxA variant={"green"} rounded={"full"} initialChecked={true} />
        </div>
        <div>
          <p>Color: ios</p>
          <CheckboxA variant={"ios"} initialChecked={true} />
        </div>
        <div>
          <p>Color: m3</p>
          <CheckboxA variant={"m3"} initialChecked={true} />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 mt-4 mx-auto">
        <div>
          <CheckboxA variant={"blue"} initialChecked={false}>
            <h6 className="mb-1">Switch on this checkbox</h6>
            <p>This is a sample label for a checkbox</p>
          </CheckboxA>
        </div>
      </div>
    </div>
  );
}
