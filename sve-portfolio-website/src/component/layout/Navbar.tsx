"use client";

import UseScrollFade from "@/hooks/useScrollFade";
import MenuItem from "@/component/menu/elements/MenuItem";

function Navbar() {
  const isAtTop = UseScrollFade();

  return (
    <div
      className={`sticky -mt-14 top-0 z-50 ${
        isAtTop
          ? "opacity-100"
          : "opacity-0 hover:opacity-100 transition-opacity duration-500"
      } flex justify-end items-center h-14 w-full bg-gradient-to-r from-transparent to-black text-white`}
    >
      <div className="flex justify-around text-2x1 w-1/2 items-center">
        <MenuItem title={"About"} />
        <MenuItem title={"Projects"} />
        <MenuItem title={"Services"} />
      </div>
    </div>
  );
}

export default Navbar;
