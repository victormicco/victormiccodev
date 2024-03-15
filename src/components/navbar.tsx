import Link from "next/link";
import { SetThemeToggle } from "./setThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex h-14 w-full items-center px-4 md:px-6">
      <Link className="flex mr-6" href="#">
        <SetThemeToggle />
      </Link>
      <nav className="hidden md:flex items-center space-x-4 flex-1">
        <Link className="font-medium text-sm leading-none" href="#">
          Home
        </Link>
        <Link className="font-medium text-sm leading-none" href="#">
          About
        </Link>
        <Link className="font-medium text-sm leading-none" href="#">
          Services
        </Link>
        <Link className="font-medium text-sm leading-none" href="#">
          Contact
        </Link>
      </nav>
    </nav>
  );
}
