"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home" },
  { href: "/upload", label: "Upload" },
  { href: "/profile", label: "Profile" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="mt-4">
      <ul className="flex items-center justify-center gap-2 sm:gap-4 text-sm">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                className={`px-3 py-1.5 border border-newspaper rounded-sm bg-white/60 hover:bg-white transition-colors ${
                  isActive ? "font-bold underline" : ""
                }`}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}