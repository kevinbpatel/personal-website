"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { person } from "@/app/resources/content";
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
                    className={`relative px-3 py-1.5 text-[13px] tracking-[-0.01em] transition-colors duration-200 ${
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-blue rounded-full" />
                    )}
                  </Link>
                );
              })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 0, position: "absolute" as const }
                  : { rotate: 0, y: -4, position: "absolute" as const }
              }
              transition={{ duration: 0.2 }}
              className="block w-4 h-[1px] bg-text-secondary rounded-full"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-4 h-[1px] bg-text-secondary rounded-full absolute"
            />
            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: 0, position: "absolute" as const }
                  : { rotate: 0, y: 4, position: "absolute" as const }
              }
              transition={{ duration: 0.2 }}
              className="block w-4 h-[1px] bg-text-secondary rounded-full"
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-primary md:hidden flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems
                .filter((item) => routes[item.href])
                .map((item, i) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.06 }}
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
                    </motion.div>
                  );
                })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
