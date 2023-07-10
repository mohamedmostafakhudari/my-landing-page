import React from "react";
import NavItem from "./NavItem";
const navItems = ["header link one", "header link two", "header link three"];
export default function Navbar() {
  return (
    <nav className="flex | flex-col gap-4 items-center | sm:gap-0 md:flex-row">
      <div className="text-center">
        <div className="logo | font-extrabold text-2xl pt-6 md:pt-0">
          Header Logo
        </div>
      </div>
      <ul className="flex | flex-col gap-4 items-center | sm:gap-6 sm:flex-row md:ml-auto">
        {navItems.map((navItem, i) => (
          <NavItem key={i} title={navItem} />
        ))}
      </ul>
    </nav>
  );
}
