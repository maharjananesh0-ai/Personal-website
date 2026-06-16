"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Compass, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname === "/marketing-digital") {
    return null;
  }

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-accent text-primary p-2 rounded-lg">
                <Compass className="w-6 h-6 stroke-[2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  GRIHA SANSAR
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
                  Design. Approve. Build.
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Griha Sansar Pvt. Ltd. is a premier civil engineering and interior design company based in Kathmandu. 
              We bring 10+ years of structural stability, design excellence, and legal approval expertise to your building projects.
            </p>
            <div className="flex items-center gap-2 text-xs bg-slate-900 border border-slate-800 rounded-lg p-3 text-slate-300 w-fit">
              <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0" />
              <span>Registered Civil Engineering Company</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent transition-colors">Completed Projects</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">Expert Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">Get a Quote</Link>
              </li>
              <li>
                <Link href="/marketing-digital" className="hover:text-accent transition-colors">Guía de Marketing</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services#architectural-design" className="hover:text-accent transition-colors">Architectural & Structural Design</Link>
              </li>
              <li>
                <Link href="/services#naksa-pass" className="hover:text-accent transition-colors">Naksa Pass & Layout Approval</Link>
              </li>
              <li>
                <Link href="/services#sampanna-certificate" className="hover:text-accent transition-colors">Sampanna Certificate & Abhilekhikaran</Link>
              </li>
              <li>
                <Link href="/services#property-valuation" className="hover:text-accent transition-colors">Property Valuation</Link>
              </li>
              <li>
                <Link href="/services#interior-design" className="hover:text-accent transition-colors">Interior Design & Decoration</Link>
              </li>
              <li>
                <Link href="/services#turnkey-construction" className="hover:text-accent transition-colors">Turnkey Construction & Supervision</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Sohrakhutte, Kathmandu<br /><span className="text-xs text-slate-500">Service Area: Kathmandu Valley</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:9801226577" className="hover:text-white transition-colors">9801226577</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:grihasansar@gmail.com" className="hover:text-white transition-colors">grihasansar@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-slate-950 border-t border-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {currentYear} Griha Sansar Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
