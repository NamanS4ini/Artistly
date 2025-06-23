'use client';

import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const links = [
      { href: "/", label: "Home" },
      { href: "/artists", label: "Explore Artists" },
      { href: "/onboarding", label: "Onboard Artist" },
      { href: "/dashboard", label: "Dashboard" },
    ];

    const pathname = usePathname();
  return (


    <Navbar fluid rounded className="z-50 rounded-none !bg-white fixed w-full top-0 shadow-md">
      <NavbarBrand as={Link} href="/" className="text-xl font-semibold">
        <h1 className="text-2xl font-bold text-blue-600">Artistly</h1>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={` md:no-underline underline-offset-4 mb-2 underline hover:!text-blue-600
              ${pathname === href ? "text-blue-600 font-bold" : "text-gray-700"}`}
          >
            {label}
          </Link>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}


