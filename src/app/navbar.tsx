"use client";

import Link from "next/link";
import SocialIcons from "./social-icons";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-between max-w-2xl px-4 py-4 mx-auto sm:px-8">
      <div className="text-gray-700 dark:text-gray-200">
        <Link
          href="/"
          className={`${pathname === "/" ? "font-bold" : ""} mr-6`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${pathname === "/about" ? "font-bold" : ""} mr-6`}
        >
          About
        </Link>
      </div>
      <SocialIcons />
    </div>
  );
}
