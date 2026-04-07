"use client";

import Link from "next/link";
import { IoMdBeer } from "react-icons/io";
import { FaFacebook, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <IoMdBeer className="text-3xl text-primary" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-gradient">BELL BAR</span>
                <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                  Est. 1950
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Bay City&apos;s beloved corner bar. Cold beer, warm people, and 70+
              years of good times.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/#about", label: "Our Story" },
                { href: "/#drinks", label: "Drinks" },
                { href: "/menu", label: "Full Menu" },
                { href: "/#gallery", label: "Gallery" },
                { href: "/#reviews", label: "Reviews" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <FaMapMarkerAlt className="text-primary flex-shrink-0" />
                1314 Columbus Ave, Bay City, MI 48708
              </li>
              <li>
                <a
                  href="tel:+19898938381"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaPhone className="text-primary flex-shrink-0" />
                  (989) 893-8381
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100057384051622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaFacebook className="text-primary flex-shrink-0" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Mon - Sat</span>
                <span className="font-mono text-foreground">7AM - 2AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-mono text-foreground">12PM - 2AM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bell Bar. All rights reserved.</p>
          <p>
            Corner of Columbus & Lincoln, Bay City, MI
          </p>
        </div>
      </div>
    </footer>
  );
}
