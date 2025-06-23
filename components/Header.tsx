
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import Link from "next/link";

export default function Header() {
  return (
    <Navbar fluid rounded className="z-50 rounded-none !bg-white fixed w-full top-0 shadow-md">
      <NavbarBrand as={Link} href="/" className="text-xl font-semibold">
        <h1 className="text-2xl font-bold text-blue-600">Artistly</h1>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <Link href="/" className="!text-gray-700 md:no-underline underline-offset-4 mb-2 underline hover:!text-blue-600">Home
        </Link>
        <Link href="/artists" className="!text-gray-700 md:no-underline underline-offset-4 mb-2 underline hover:!text-blue-600">Explore Artists
        </Link>
        <Link href="/onboarding" className="!text-gray-700 md:no-underline underline-offset-4 mb-2 underline hover:!text-blue-600">
          Onboard Artist
        </Link>
        <Link href="/dashboard" className="!text-gray-700 md:no-underline underline-offset-4 mb-2 underline hover:!text-blue-600">
          Dashboard
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}


