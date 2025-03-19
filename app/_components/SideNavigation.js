"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
  },
  {
    name: "Reservations",
    href: "/account/reservations",
  },
  {
    name: "Guest profile",
    href: "/account/profile",
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-primary-900">
      <ul className="flex text-center flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 transition-all  hover:text-primary-100  flex items-center gap-4 font-semibold text-primary-200 
              `}
              href={link.href}
            >
              {link.name === "Home" && (
                <HomeIcon
                  className={`h-5 w-5 ${
                    pathname === link.href
                      ? "text-primary-50"
                      : "text-primary-600"
                  }`}
                />
              )}
              {link.name === "Reservations" && (
                <CalendarDaysIcon
                  className={`h-5 w-5 ${
                    pathname === link.href
                      ? "text-primary-50"
                      : "text-primary-600"
                  }`}
                />
              )}
              {link.name === "Guest profile" && (
                <UserIcon
                  className={`h-5 w-5 ${
                    pathname === link.href
                      ? "text-primary-50"
                      : "text-primary-600"
                  }`}
                />
              )}
              <span className="relative pb-2 block grow ">
                {link.name}

                <span
                  className={`absolute bottom-0 bg-white h-1 left-[0%] right-[0%]  origin-left transition-all duration-500 ${
                    pathname === link.href ? "scale-100" : "scale-0"
                  }`}
                ></span>
              </span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
