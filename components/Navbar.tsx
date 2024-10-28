"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const currentPath = usePathname();

  return (
    <nav className="fixed top-0 min-w-full bg-black/70 z-40 shadow-lg shadow-white/50">
      <div className="max-w-screen-sm mx-auto flex gap-10 justify-center items-center">
        <Link
          href="/"
          className={
            currentPath === "/"
              ? "text-black font-semibold bg-cyan-400 px-4 py-2"
              : "text-white text-lg px-4 py-2"
          }
        >
          Forside
        </Link>
        <Link
          href="/games"
          className={
            currentPath === "/games"
              ? "text-black font-semibold bg-cyan-400 px-4 py-2"
              : "text-white text-lg px-4 py-2"
          }
        >
          Spil
        </Link>
        <Link
          href="/reviews"
          className={
            currentPath === "/reviews"
              ? "text-black font-semibold bg-cyan-400 px-4 py-2"
              : "text-white text-lg px-4 py-2"
          }
        >
          Anmeldelser
        </Link>
        <Link
          href="/contact"
          className={
            currentPath === "/contact"
              ? "text-black font-semibold bg-cyan-400 px-4 py-2"
              : "text-white text-lg px-4 py-2"
          }
        >
          Kontakt
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
