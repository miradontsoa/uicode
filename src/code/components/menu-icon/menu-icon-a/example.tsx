import { useState } from "react";
import ButtonA from "../../button/button-a/button-a";
import MenuIconA from "./menu-icon-a";

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
          <MenuIconA isOpen={menuIsOpen}></MenuIconA>
        </ButtonA>
        <ButtonA
          variant="transparent"
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          <MenuIconA variant={"style-a"} isOpen={menuIsOpen}></MenuIconA>
        </ButtonA>
      </div>
      {menuIsOpen ? "opened" : "closed"}
    </div>
  );
}
