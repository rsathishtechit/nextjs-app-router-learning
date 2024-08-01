import React from "react";
import Link from "next/link";
import NavLink from "../ui/navlink";
import ContactButton from "../ui/contactbutton";

const Header = () => {
  return (
    <header className="bg-gray-100 p-5">
      <nav className="container">
        <ul className="flex gap-3">
          <li>
            <NavLink href="/"> Home</NavLink>
          </li>
          <li>
            <NavLink href="/about"> About </NavLink>
          </li>
          <ContactButton />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
