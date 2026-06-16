"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  if (pathname === "/marketing-digital") {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-md py-3"
          : "bg-slate-900/90 backdrop-blur-sm border-b border-slate-800/50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[5rem] py-1">
          {/* Logo and Tagline */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group" title="Return to Homepage">
              <div className="relative w-[16rem] h-16 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1 group-active:scale-95">
                <Image 
                  src="/logo.svg" 
                  alt="Griha Sansar Logo - Return to Homepage" 
                  fill
                  className="object-contain object-left drop-shadow-sm"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center hidden lg:flex transition-opacity duration-300 group-hover:opacity-80">
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
                  Design. Approve. Build.
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-accent bg-slate-800"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Call CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:9801226577"
              className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-200 shadow-sm"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>9801226577</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen border-b border-slate-800 bg-slate-900" : "max-h-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive
                    ? "text-accent bg-slate-800"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 pb-2 border-t border-slate-800 px-3">
            <a
              href="tel:9801226577"
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-slate-950 font-bold py-3 px-4 rounded-lg text-base transition-colors"
            >
              <Phone className="w-5 h-5 fill-slate-950" />
              <span>Call 9801226577</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
