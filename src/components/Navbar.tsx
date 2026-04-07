"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GiBellPepper } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFacebook, FaPhone } from "react-icons/fa";
import { IoMdBeer } from "react-icons/io";

const navLinks = [
  { href: "/#about", label: "Our Story" },
  { href: "/#drinks", label: "Drinks" },
  { href: "/#atmosphere", label: "Atmosphere" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/menu", label: "Menu" },
  { href: "/#contact", label: "Find Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <IoMdBeer className="text-3xl lg:text-4xl text-primary transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-glow" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl lg:text-2xl font-bold text-gradient tracking-tight">
                  BELL BAR
                </span>
                <span className="text-[10px] lg:text-xs text-muted-foreground tracking-[0.2em] uppercase">
                  Est. 1950 &bull; Bay City
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+19898938381"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <FaPhone className="text-xs" />
                (989) 893-8381
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100057384051622"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaFacebook className="text-lg" />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg pt-20 lg:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-light text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="section-divider w-32 my-4" />
              <a
                href="tel:+19898938381"
                className="flex items-center gap-3 text-lg text-primary"
              >
                <FaPhone />
                (989) 893-8381
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
