import React from "react";
import Link from "next/link";
import NavLink from "../ui/navlink";
import ContactButton from "../ui/contactbutton";
import ThemeButton from "../ui/themebutton";

const Header = () => {
  return (
    <header className="p-5">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-3">
          <li>
            <NavLink href="/"> Home</NavLink>
          </li>
          <li>
            <NavLink href="/about"> About </NavLink>
          </li>
          <li>
            <NavLink href="/posts">Blog</NavLink>
          </li>
          <li>
            <NavLink href="/todos">Todos</NavLink>
          </li>
        </ul>
        <ThemeButton />
      </nav>
    </header>
  );
};

export default Header;
