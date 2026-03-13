"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { routes } from "@/app/resources/config";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/40 bg-bg-primary">
        <nav className="max-w-[1080px] mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-white text-[15px] font-bold tracking-[-0.02em] hover:opacity-80 transition-opacity duration-200"
          >
            kevinbpatel.com
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems
              .filter((item) => routes[item.href])
              .map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-md text-[13px] tracking-[-0.01em] transition-all duration-200 hover:bg-white/[0.06] ${
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
          </div>

          {/* Mobile hamburger — pure CSS transitions */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span
              className="block w-4 h-[1px] bg-text-secondary rounded-full absolute transition-all duration-200"
              style={{
                transform: menuOpen ? "rotate(45deg)" : "translateY(-4px)",
              }}
            />
            <span
              className="block w-4 h-[1px] bg-text-secondary rounded-full absolute transition-opacity duration-150"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-4 h-[1px] bg-text-secondary rounded-full absolute transition-all duration-200"
              style={{
                transform: menuOpen ? "rotate(-45deg)" : "translateY(4px)",
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay — CSS animation */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-primary md:hidden flex items-center justify-center animate-lightbox-in">
          <nav className="flex flex-col items-center gap-8">
            {navItems
              .filter((item) => routes[item.href])
              .map((item, i) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <div
                    key={item.href}
                    className="animate-hero-fade-in"
                    style={{ animationDelay: `${50 + i * 60}ms` }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-2xl font-display font-light tracking-[-0.02em] transition-colors ${
                        isActive
                          ? "text-accent"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
          </nav>
        </div>
      )}
    </>
  );
}
