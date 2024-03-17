"use client";
import Link from "next/link";
import { SetThemeToggle } from "./setThemeToggle";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ opacity: { duration: 0.8 }, scale: { duration: 0.8 } }}
    >
      <nav className="flex h-14 w-full items-center px-4 md:px-6">
        <Link className="flex mr-6" href="#">
          <SetThemeToggle />
        </Link>
        <nav className="hidden md:flex items-center space-x-4 flex-1">
          <Link
            className="font-medium text-sm leading-none"
            href="/src/app/(application)"
          >
            Home
          </Link>
          <Link className="font-medium text-sm leading-none" href="#experience">
            Experience
          </Link>
          <Link className="font-medium text-sm leading-none" href="#projects">
            Projects
          </Link>
          <Link className="font-medium text-sm leading-none" href="#education">
            Education
          </Link>
          <Link className="font-medium text-sm leading-none" href="#contact">
            Contact
          </Link>
        </nav>
      </nav>
    </motion.div>
  );
}
