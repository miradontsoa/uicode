import { useState } from "react";
import ButtonA from "../../button/button-a/button-a";
import MenuIconC from "./menu-icon-c";

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
          <MenuIconC isOpen={menuIsOpen}></MenuIconC>
        </ButtonA>
        <ButtonA
          variant="transparent"
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          <MenuIconC variant={"style-a"} isOpen={menuIsOpen}></MenuIconC>
        </ButtonA>
      </div>
      {menuIsOpen ? "opened" : "closed"}
    </div>
  );
}
