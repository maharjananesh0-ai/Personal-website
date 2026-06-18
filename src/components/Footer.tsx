"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname === "/marketing-digital") {
    return null;
  }

  return (
    <footer className="relative bg-primary text-slate-400 border-t border-primary overflow-hidden">
      {/* Background Image with Luminosity blend to adopt brand colors */}
      <div className="absolute inset-0 bg-[url('/images/blueprint_bg.png')] bg-cover bg-center bg-no-repeat mix-blend-luminosity opacity-30"></div>
      {/* Color Grading Gradient Overlay (slightly darker for footer) */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-emerald-950/80"></div>
      {/* AutoCAD Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative z-10">
        {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col gap-2">
              <div className="relative w-64 h-20">
                <Image 
                  src="/Grihasansar-light.png" 
                  alt="Griha Sansar Logo" 
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mt-1">
                Design. Approve. Build.
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Griha Sansar Pvt. Ltd. is a premier civil engineering and interior design company based in Kathmandu. 
              We bring 10+ years of structural stability, design excellence, and legal approval expertise to your building projects.
            </p>
            <div className="flex items-center gap-2 text-xs bg-black/40 border border-white/10 backdrop-blur-sm rounded-lg p-3 text-slate-200 w-fit">
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
                <a href="tel:9849277960" className="hover:text-white transition-colors">+977-9849277960</a>
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
      <div className="bg-black/20 border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {currentYear} Griha Sansar Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
