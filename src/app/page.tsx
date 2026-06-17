import React from "react";
import Link from "next/link";
import { 
  ArrowUpRight,
  Play,
  ArrowRight,
  Building2,
  Paintbrush,
  FileCheck
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background selection:bg-accent selection:text-primary">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Left: Large Image */}
            <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover"
              />
              {/* Optional subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Hero Right: Content */}
            <div className="flex flex-col justify-center space-y-10 lg:pl-8">
              
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary tracking-tight leading-[1.1]">
                  A new <br /> standard of <br /> excellence
                </h1>
                <p className="text-lg text-slate-600 max-w-md leading-relaxed font-medium">
                  The premier civil engineering and interior design company in the Kathmandu Valley.
                </p>
                
                <div className="pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-4 bg-white border border-slate-200 hover:border-accent text-primary font-bold px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all group"
                  >
                    View All Services
                    <span className="bg-accent text-primary p-2 rounded-full group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Stats & Video block at bottom of right col */}
              <div className="flex flex-wrap items-center gap-8 pt-12 border-t border-slate-200">
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl font-extrabold text-accent">10<span className="text-4xl">+</span></span>
                  <span className="text-sm font-bold text-primary max-w-[80px] leading-tight">years of experiences</span>
                </div>
                
                <button className="flex items-center gap-3 bg-primary text-white pl-4 pr-6 py-3 rounded-full hover:bg-slate-800 transition-colors group">
                  <span className="bg-white/10 p-2 rounded-full group-hover:bg-accent group-hover:text-primary transition-colors">
                    <Play className="w-4 h-4 fill-current" />
                  </span>
                  <span className="text-sm font-semibold">Watch</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. LANDMARK PROJECTS / CARDS SECTION */}
      <section className="py-24 bg-white rounded-t-[3rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <span className="inline-block bg-slate-100 text-slate-500 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full">
                Who We Are
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-primary max-w-2xl leading-tight">
                We developed landmark real estate projects
              </h2>
            </div>
            <p className="text-slate-500 max-w-md font-medium">
              We bridge the gap between creative visual architecture, complex municipal laws, and technical structural construction.
            </p>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            
            {/* Card 1: Dark */}
            <div className="bg-primary text-white p-10 rounded-[2rem] flex flex-col h-[450px] relative group overflow-hidden">
              <FileCheck className="w-8 h-8 text-accent/50 mb-auto" />
              <div className="relative z-10 mt-auto">
                <h3 className="text-3xl font-bold mb-4">What we do</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-[90%]">
                  We maintain this by ensuring transparency and professional conduct in every aspect of municipal Naksa Pass and approvals.
                </p>
                <Link href="/services" className="inline-flex font-bold text-sm hover:text-accent transition-colors underline underline-offset-4 decoration-accent/50">
                  Our Solutions
                </Link>
              </div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>

            {/* Card 2: Lime Green */}
            <div className="bg-accent text-primary p-10 rounded-[2rem] flex flex-col h-[450px] relative group overflow-hidden">
              <Building2 className="w-8 h-8 text-primary/50 mb-auto" />
              <div className="relative z-10 mt-auto">
                <h3 className="text-3xl font-bold mb-4">Our impact</h3>
                <p className="text-primary/80 text-sm leading-relaxed mb-8 max-w-[90%] font-medium">
                  We work with both investors and developers to create landmarks that make a structural impact.
                </p>
                <Link href="/projects" className="inline-flex font-bold text-sm hover:text-primary transition-colors underline underline-offset-4 decoration-primary/50">
                  See Projects
                </Link>
              </div>
              
              {/* Optional inner image cut out for the card, simplified for now */}
              <div className="absolute top-8 right-8 w-32 h-32 rounded-2xl overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Impact" />
              </div>

              <div className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all shadow-lg">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>

            {/* Card 3: Image Background */}
            <div className="bg-slate-200 text-white p-10 rounded-[2rem] flex flex-col h-[450px] relative group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Interior Design" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
              
              <Paintbrush className="w-8 h-8 text-white/50 mb-auto relative z-10" />
              
              <div className="relative z-10 mt-auto">
                <h3 className="text-3xl font-bold mb-4">Core values</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-[90%] font-medium">
                  To empower businesses with cutting-edge interior solutions that enhance their digital presence and growth.
                </p>
                <Link href="/about" className="inline-flex font-bold text-sm hover:text-accent transition-colors underline underline-offset-4 decoration-white/50">
                  Discover More
                </Link>
              </div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>

          </div>



        </div>
      </section>

      {/* 3. DARK STATS SECTION */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        {/* Subtle Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Cityscape" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-accent">
              www.GrihaSansar.com.np
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left items-center">
            
            {/* Stat 1 */}
            <div className="space-y-2">
              <div className="flex justify-center md:justify-start items-baseline gap-1">
                <span className="text-5xl lg:text-7xl font-extrabold">10</span>
                <span className="text-4xl lg:text-5xl font-bold text-accent">+</span>
              </div>
              <p className="text-slate-400 text-sm font-semibold">Completed projects</p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2 md:mt-16">
              <div className="flex justify-center md:justify-start items-baseline gap-1">
                <span className="text-5xl lg:text-7xl font-extrabold">100</span>
                <span className="text-4xl lg:text-5xl font-bold text-accent">%</span>
              </div>
              <p className="text-slate-400 text-sm font-semibold">Naksa Pass Approval</p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2 md:-mt-12">
              <div className="flex justify-center md:justify-start items-baseline gap-1">
                <span className="text-5xl lg:text-7xl font-extrabold">4</span>
                <span className="text-4xl lg:text-5xl font-bold text-accent">+</span>
              </div>
              <p className="text-slate-400 text-sm font-semibold">Civil Engineers</p>
            </div>

            {/* Stat 4 */}
            <div className="space-y-2 md:mt-8">
              <div className="flex justify-center md:justify-start items-baseline gap-1">
                <span className="text-5xl lg:text-7xl font-extrabold">10</span>
                <span className="text-4xl lg:text-5xl font-bold text-accent">+</span>
              </div>
              <p className="text-slate-400 text-sm font-semibold">Years Experience</p>
            </div>

          </div>

          {/* Large CTA Button Overlayed on bottom right (Spaciaz has "Visit site") */}
          <div className="mt-20 flex justify-center">
            <Link href="/contact" className="group relative inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xl font-bold rounded-full px-12 py-6 transition-all shadow-2xl overflow-hidden">
              <div className="absolute inset-0 w-0 bg-accent transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative flex items-center gap-3 group-hover:text-primary transition-colors">
                <ArrowUpRight className="w-6 h-6" /> Work With Us
              </span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
