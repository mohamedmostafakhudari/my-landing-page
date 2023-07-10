import React from "react";

export default function NavItem({ title }) {
  return (
    <li>
      <a href="#" className="block py-5 relative group">
        {title}
        <div className="w-full h-1 origin-left scale-0 bg-neutral-200 absolute duration-300 ease-in-out group-hover:scale-100"></div>
      </a>
    </li>
  );
}
