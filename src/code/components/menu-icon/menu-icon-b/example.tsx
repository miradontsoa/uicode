import { useState } from "react";
import ButtonA from "../../button/button-a/button-a";
import MenuIconB from "./menu-icon-b";

export default function Example() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <ButtonA
          variant="transparent"
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          <MenuIconB isOpen={menuIsOpen}></MenuIconB>
        </ButtonA>
        <ButtonA
          variant="transparent"
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          <MenuIconB variant={"style-a"} isOpen={menuIsOpen}></MenuIconB>
        </ButtonA>
      </div>
      {menuIsOpen ? "opened" : "closed"}
    </div>
  );
}
