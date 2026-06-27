"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/freelance", label: "Freelance" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 60], [0, 1]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 h-16">
        <motion.div
          className="absolute inset-0 border-b"
          style={{
            opacity: bgOpacity,
            backgroundColor: "rgba(5,5,10,0.88)",
            backdropFilter: "blur(20px)",
            borderColor: "rgba(255,255,255,0.05)",
          }}
        />

        <nav className="relative h-full max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-lg font-bold tracking-widest"
            style={{ color: "var(--c-primary)" }}
          >
            AD
            <span style={{ color: "var(--c-muted)" }}>.</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8">
            {links.map((link) => (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className="text-sm tracking-wide transition-colors duration-200"
                  style={{
                    color:
                      pathname === link.href
                        ? "var(--c-primary)"
                        : "var(--c-muted)",
                  }}
                  onMouseEnter={(e) =>
                    pathname !== link.href &&
                    ((e.target as HTMLElement).style.color = "var(--c-text)")
                  }
                  onMouseLeave={(e) =>
                    pathname !== link.href &&
                    ((e.target as HTMLElement).style.color = "var(--c-muted)")
                  }
                >
                  {link.label}
                </Link>
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px"
                    style={{ backgroundColor: "var(--c-primary)" }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Hire Me CTA */}
          <Link
            href="/contact"
            className="hidden md:block px-5 py-2 text-sm font-medium rounded-full transition-all duration-200"
            style={{
              border: "1px solid rgba(0,212,255,0.25)",
              color: "var(--c-primary)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "rgba(0,212,255,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "transparent";
            }}
          >
            Hire Me
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 flex flex-col justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px origin-center"
              style={{ backgroundColor: "var(--c-text)" }}
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-5 h-px"
              style={{ backgroundColor: "var(--c-text)" }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px origin-center"
              style={{ backgroundColor: "var(--c-text)" }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden flex items-center justify-center"
            style={{
              backgroundColor: "rgba(5,5,10,0.97)",
              backdropFilter: "blur(24px)",
            }}
          >
            <ul className="flex flex-col items-center gap-10">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-3xl font-bold tracking-tight transition-colors"
                    style={{
                      color:
                        pathname === link.href
                          ? "var(--c-primary)"
                          : "var(--c-text)",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
