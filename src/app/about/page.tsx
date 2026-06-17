import React from "react";
import { Users, Clock, CheckCircle2, Shield } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: "Learn about Griha Sansar Pvt. Ltd., Kathmandu's trusted civil engineering & interior design firm. Serving Kathmandu Valley with 10+ years of structural expertise."
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <section className="relative bg-primary text-white py-20 border-b border-primary/50 overflow-hidden">
        {/* Background Image with Luminosity blend to adopt brand colors */}
        <div className="absolute inset-0 bg-[url('/images/blueprint_bg.png')] bg-cover bg-center bg-no-repeat mix-blend-luminosity opacity-40"></div>
        {/* Color Grading Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-emerald-900/40"></div>
        {/* AutoCAD Gridlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About Griha Sansar</h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            A trusted civil engineering and interior design company based in Sohrakhutte, Kathmandu, serving Kathmandu Valley for over a decade.
          </p>
        </div>
      </section>

      {/* 2. Intro and Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Story Left */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-emerald-600 drop-shadow-sm font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4" /> Established Over 10 Years
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Building Safe and Beautiful Spaces in Kathmandu Valley
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Griha Sansar Pvt. Ltd. was founded with a clear objective: to combine technical excellence in civil engineering with high-end creative interior design. Over the last 10+ years, we have designed, legalized, and constructed over 10 residential, commercial, and structural projects across the Kathmandu Valley.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                We handle the complex municipal building code compliance (bye-laws) for municipal drawings and approvals, saving our clients time and guaranteeing structural safety. From our corporate headquarters in Sohrakhutte, Kathmandu, we oversee structural designs that are robust, aesthetic, and fully legal.
              </p>

              {/* Core Values Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 drop-shadow-sm flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-slate-950">100% Compliant</h4>
                    <p className="text-xs text-slate-500">Strict adherence to Kathmandu building bye-laws.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 drop-shadow-sm flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-slate-950">Earthquake Safe</h4>
                    <p className="text-xs text-slate-500">Advanced structural software modeling.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Box Right */}
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-sm space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full filter blur-xl"></div>
              
              <div className="flex items-center gap-3">
                <div className="bg-slate-900 p-3 rounded-lg text-accent">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-950">Why Choose Us?</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm">
                  <span className="text-emerald-600 drop-shadow-sm font-bold">01.</span>
                  <div>
                    <strong className="text-slate-950 block">End-to-End Processing</strong>
                    <span className="text-slate-600">We do the design, handle municipal Naksa Pass approvals, secure the Sampanna Certificate, and manage construction.</span>
                  </div>
                </li>
                <li className="flex gap-3 text-sm">
                  <span className="text-emerald-600 drop-shadow-sm font-bold">02.</span>
                  <div>
                    <strong className="text-slate-950 block">Qualified Engineering Team</strong>
                    <span className="text-slate-600">Managed by 4 registered civil engineers with decades of combined structural design and construction experience.</span>
                  </div>
                </li>
                <li className="flex gap-3 text-sm">
                  <span className="text-emerald-600 drop-shadow-sm font-bold">03.</span>
                  <div>
                    <strong className="text-slate-950 block">Transparent Pricing</strong>
                    <span className="text-slate-600">No hidden costs. Detailed material lists, timelines, and municipal fee structures are provided upfront.</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Team Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-[0.2em] text-emerald-600 drop-shadow-sm font-bold">Our Engineering Strength</h2>
            <p className="text-3xl font-bold tracking-tight text-slate-900">Led by Certified Professionals</p>
            <p className="text-slate-600 text-sm">
              Our engineering team is registered with the Nepal Engineering Council and specializes in seismic engineering, architectural drafting, interior planning, and property valuation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            
            {/* Engineer 1 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center space-y-4 group hover:border-accent transition-colors">
              <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto border border-slate-200 group-hover:bg-slate-900 group-hover:text-accent transition-colors">
                <Users className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-bold text-slate-950 text-base">Er. Anesh Maharjan</h3>
                <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider mt-1">Senior Structural Engineer</p>
                <p className="text-xs text-slate-500 mt-2">12+ years experience in earthquake resistant concrete & steel design.</p>
              </div>
            </div>

            {/* Engineer 2 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center space-y-4 group hover:border-accent transition-colors">
              <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto border border-slate-200 group-hover:bg-slate-900 group-hover:text-accent transition-colors">
                <Users className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-bold text-slate-950 text-base">Er. Siddhartha Dev Manandhar</h3>
                <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider mt-1">Municipal Approvals Lead</p>
                <p className="text-xs text-slate-500 mt-2">Expert in Kathmandu Valley bye-laws, Naksa Pass processing, & Abhilekhikaran.</p>
              </div>
            </div>

            {/* Engineer 3 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center space-y-4 group hover:border-accent transition-colors">
              <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto border border-slate-200 group-hover:bg-slate-900 group-hover:text-accent transition-colors">
                <Users className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-bold text-slate-950 text-base">Er. Chitiz Pradhan</h3>
                <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider mt-1">Site Supervision & QA</p>
                <p className="text-xs text-slate-500 mt-2">Oversees turnkey structural masonry, steel works, and material testing audits.</p>
              </div>
            </div>

            {/* Engineer 4 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center space-y-4 group hover:border-accent transition-colors">
              <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto border border-slate-200 group-hover:bg-slate-900 group-hover:text-accent transition-colors">
                <Users className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-bold text-slate-950 text-base">Ar. Aayesha Maharjan</h3>
                <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider mt-1">Interior & Architectural Planner</p>
                <p className="text-xs text-slate-500 mt-2">Specialized in layout planning, luxury furnishings, 3D modeling, and finishes.</p>
              </div>
            </div>

            {/* Designer 5 */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center space-y-4 group hover:border-accent transition-colors">
              <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto border border-slate-200 group-hover:bg-slate-900 group-hover:text-accent transition-colors">
                <Users className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-bold text-slate-950 text-base">Aashish Bista</h3>
                <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider mt-1">Interior Designer</p>
                <p className="text-xs text-slate-500 mt-2">Creative vision and technical expertise in crafting bespoke interior spaces.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Core Values Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4">
              <h3 className="text-lg font-bold text-slate-950">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To build safe, compliant, and luxury architectural spaces in the Kathmandu Valley through rigorous engineering calculations, transparent customer service, and innovative design craftsmanship.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4">
              <h3 className="text-lg font-bold text-slate-950">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be the top choice engineering partner in Nepal for property development, municipal legalization, and interior customization, setting standard compliance blueprints for urban architecture.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4">
              <h3 className="text-lg font-bold text-slate-950">Our Integrity</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We believe in ethical building. We ensure that every structural design complies with official building safety regulations and bye-laws, keeping your family and investment secure.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
