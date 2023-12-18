import { useState } from "react";
import MenuButtonA from "./menu-button-a";

export default function Example() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-wrap gap-4 mx-auto">
        <MenuButtonA onIsOpen={(isOpen) => setMenuIsOpen(isOpen)}></MenuButtonA>
        <MenuButtonA
          onIsOpen={(isOpen) => setMenuIsOpen(isOpen)}
          variant={"style-a"}
        ></MenuButtonA>
      </div>
      {menuIsOpen ? "opened" : "closed"}
    </div>
  );
}
