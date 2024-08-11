"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, ...rest }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} {...rest} className={isActive ? "text-cyan-500" : ""} />
  );
};
export default NavLink;
