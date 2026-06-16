import React from "react";
import Link from "next/link";
import { 
  Building2, 
  Paintbrush, 
  FileCheck, 
  MapPin, 
  Users, 
  Award,
  ArrowRight,
  Compass,
  Phone
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24 md:py-32 border-b border-slate-800">
        {/* Subtle grid background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        
        {/* Accent light source */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/50 rounded-full px-4 py-1.5 text-xs text-accent font-semibold tracking-wider uppercase">
                <Award className="w-3.5 h-3.5" />
                10+ Years of Structural & Design Excellence
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Design. Approve. <span className="text-accent">Build.</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Griha Sansar Pvt. Ltd. is Kathmandu&apos;s premier Civil Engineering and Interior Design company. 
                We bring together visionary architecture, structural safety, and seamless municipal Naksa Pass approvals to bring your dream spaces to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent-hover text-slate-950 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-accent/15 transition-all text-center flex items-center justify-center gap-2"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold px-8 py-4 rounded-lg transition-all text-center"
                >
                  Our 10 Services
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-accent" /> Kathmandu Valley Service Area
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-accent" /> Team of 4 Civil Engineers
                </span>
              </div>
            </div>

            {/* Hero Right Visual Element */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="w-full max-w-md bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden group hover:border-accent/40 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full filter blur-xl"></div>
                
                {/* Blueprint Drawing Aesthetics */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                    <span className="text-xs text-slate-500 font-mono">SPECIFICATION.01</span>
                    <Compass className="w-6 h-6 text-accent animate-spin-slow" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg text-white">Full-Cycle Project Delivery</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      We offer a complete turnkey experience. From drawing architectural designs to drafting structural models, processing legal municipal files (Naksa Pass), and executing standard construction.
                    </p>
                  </div>
                  
                  <div className="border-t border-slate-800 pt-4 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Design Accuracy:</span>
                      <span className="text-accent font-semibold">100% Precise</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Kathmandu Bye-Laws:</span>
                      <span className="text-accent font-semibold">Fully Compliant</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Project Quality:</span>
                      <span className="text-accent font-semibold">Premium Materials Only</span>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                    <span className="text-xs text-slate-400">Need immediate counseling?</span>
                    <a href="tel:9801226577" className="block text-accent font-bold mt-1 hover:underline text-lg">9801226577</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-slate-950 py-12 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            <div className="p-4 border-r border-slate-900 last:border-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">10+</div>
              <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-2 font-medium">Years Experience</div>
            </div>
            
            <div className="p-4 border-r border-slate-900 last:border-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-accent">4</div>
              <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-2 font-medium">Civil Engineers</div>
            </div>

            <div className="p-4 border-r border-slate-900 last:border-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">150+</div>
              <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-2 font-medium">Projects Completed</div>
            </div>

            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-accent">100%</div>
              <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-2 font-medium">Naksa Pass Approval</div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. KEY SERVICES HIGHLIGHT */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold">What We Do</h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Our Professional Civil Engineering & Interior Design Services</p>
            <p className="text-slate-600 text-sm">
              We specialize in civil design, structural modeling, legal municipal procedures, and luxurious interior decoration for residential, commercial, and institutional projects in the Kathmandu Valley.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Architectural & Structural Design */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover-lift group">
              <div className="bg-slate-900 text-accent p-4 rounded-xl w-fit mb-6 group-hover:bg-accent group-hover:text-slate-950 transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3">Architectural & Structural Design</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Creating earthquake-resistant structural designs and modern, aesthetic architectural plans tailored to your land dimensions and vision.
              </p>
              <Link href="/services#architectural-design" className="text-sm font-semibold text-accent hover:text-accent-hover inline-flex items-center gap-1">
                Read Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Naksa Pass & Layout Approvals */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover-lift group">
              <div className="bg-slate-900 text-accent p-4 rounded-xl w-fit mb-6 group-hover:bg-accent group-hover:text-slate-950 transition-colors">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3">Municipal Naksa Pass</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Complete processing for house design approvals (Naksa Pass), Layout approvals, Sampanna Certificate (Completion) and Abhilekhikaran (regularization) at Kathmandu municipalities.
              </p>
              <Link href="/services#naksa-pass" className="text-sm font-semibold text-accent hover:text-accent-hover inline-flex items-center gap-1">
                Read Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3: Interior Design */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover-lift group">
              <div className="bg-slate-900 text-accent p-4 rounded-xl w-fit mb-6 group-hover:bg-accent group-hover:text-slate-950 transition-colors">
                <Paintbrush className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3">Interior Design & Turnkey</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Bespoke interior design, luxury custom furniture manufacturing, spatial planning, and turnkey construction supervision to bring luxury living to your doorstep.
              </p>
              <Link href="/services#interior-design" className="text-sm font-semibold text-accent hover:text-accent-hover inline-flex items-center gap-1">
                Read Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors text-sm"
            >
              View All 10 Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. COMPANY PHILOSOPHY BANNER */}
      <section className="bg-slate-900 py-16 text-white text-center relative overflow-hidden border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="text-accent font-bold uppercase tracking-widest text-xs">Our Core Tagline</h2>
          <blockquote className="text-2xl sm:text-4xl font-extrabold italic tracking-tight text-white leading-normal">
            &ldquo;Design. Approve. Build.&rdquo;
          </blockquote>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            We bridge the gap between creative visual architecture, complex municipal laws, and technical structural construction. We manage the paperwork, calculations, and masonry so you can enjoy your dream home.
          </p>
        </div>
      </section>

      {/* 5. PORTFOLIO SNAPSHOT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-2">Portfolio Showcase</h2>
              <p className="text-3xl font-bold tracking-tight text-slate-900">Featured Engineering & Design Projects</p>
            </div>
            <Link href="/projects" className="text-sm font-semibold text-accent hover:text-accent-hover inline-flex items-center gap-1">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm group">
              <div className="bg-slate-800 h-64 flex items-center justify-center relative">
                <Building2 className="w-16 h-16 text-slate-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-950/40 flex items-end p-6">
                  <div>
                    <span className="bg-accent text-slate-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Residential</span>
                    <h4 className="text-white font-bold text-lg mt-2">Modern Villa | Baluwatar</h4>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-200">
                <p className="text-xs text-slate-500">Architectural & Structural Design, Naksa Pass, Turnkey Construction</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm group">
              <div className="bg-slate-800 h-64 flex items-center justify-center relative">
                <Paintbrush className="w-16 h-16 text-slate-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-950/40 flex items-end p-6">
                  <div>
                    <span className="bg-accent text-slate-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Interior Design</span>
                    <h4 className="text-white font-bold text-lg mt-2">Corporate Office | Lazimpat</h4>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-200">
                <p className="text-xs text-slate-500">Space Planning, Custom Furnishing, Acoustic Ceiling, Lighting Layout</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm group">
              <div className="bg-slate-800 h-64 flex items-center justify-center relative">
                <Compass className="w-16 h-16 text-slate-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-950/40 flex items-end p-6">
                  <div>
                    <span className="bg-accent text-slate-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">Naksa Pass</span>
                    <h4 className="text-white font-bold text-lg mt-2">Commercial Complex | Tinkune</h4>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-200">
                <p className="text-xs text-slate-500">Structural Analysis, Layout Approval, Abhilekhikaran Regularization</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-2">Testimonials</h2>
            <p className="text-3xl font-bold tracking-tight text-slate-900">What Our Clients in Kathmandu Say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <p className="text-sm text-slate-600 italic leading-relaxed">
                &ldquo;We hired Griha Sansar for the Naksa Pass and Construction of our residential house in Sohrakhutte. Their team of civil engineers handled all municipality drawing audits seamlessly. The house was completed on schedule with top-tier earthquake safety.&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700">RB</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Ramesh Bhandari</h4>
                  <p className="text-xs text-slate-400">Home Owner, Sohrakhutte</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <p className="text-sm text-slate-600 italic leading-relaxed">
                &ldquo;Their interior design work is exceptional. They transformed our old apartment in Lazimpat into a high-end luxury flat. The gold accent finishing and custom layout details are gorgeous. Highly recommended interior engineering team!&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700">SK</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Sadhana Karki</h4>
                  <p className="text-xs text-slate-400">Businesswoman, Lazimpat</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <p className="text-sm text-slate-600 italic leading-relaxed">
                &ldquo;I needed a property valuation and layout approval for bank loan processing. Griha Sansar Pvt. Ltd. delivered the valuation report within 3 days. Their engineers were highly knowledgeable about the municipal bye-laws of Kathmandu Valley.&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700">NS</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Niranjan Shrestha</h4>
                  <p className="text-xs text-slate-400">Real Estate Investor, Tinkune</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. QUICK CONTACT CTA */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Need a Certified Engineer or Design Blueprint?</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Contact us today for a free consultation. Our office is located in Sohrakhutte, Kathmandu, and we serve the entire Kathmandu Valley.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:9801226577"
              className="bg-accent hover:bg-accent-hover text-slate-950 font-bold px-6 py-3 rounded-lg text-sm transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-slate-950" /> Call 9801226577
            </a>
            <Link
              href="/contact"
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Send Online Inquiry
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
