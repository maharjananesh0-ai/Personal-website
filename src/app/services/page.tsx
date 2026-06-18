import React from "react";
import { 
  Compass, 
  Layers, 
  FileCheck, 
  CheckSquare, 
  Award, 
  FileText, 
  TrendingUp, 
  Paintbrush, 
  Eye, 
  Wrench,
  PhoneCall
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Services",
  description: "Explore the 10 engineering and interior design services offered by Griha Sansar Pvt. Ltd. in Sohrakhutte, Kathmandu. We provide architectural designs, municipal approvals, and turnkey construction."
};

const SERVICES_DATA = [
  {
    id: "architectural-design",
    title: "1. Architectural Design",
    icon: Compass,
    description: "Spatial plans, functional layouts, elevation drawings, 3D renderings, and floor styling for modern residential houses and commercial spaces, matching Kathmandu Valley requirements."
  },
  {
    id: "structural-design",
    title: "2. Structural Design",
    icon: Layers,
    description: "Earthquake-resistant structural safety analysis, reinforced concrete (RCC) drawings, structural detailing, steel frame calculation modeling, and engineering certificate documentation."
  },
  {
    id: "naksa-pass",
    title: "3. Naksa Pass (Building Permits)",
    icon: FileCheck,
    description: "Preparation of municipal drawings, submission in electronic building permit systems (e-BPS), coordinating with ward/municipality offices, and obtaining building permit approval certificates."
  },
  {
    id: "layout-approval",
    title: "4. Layout Approval (Plannings)",
    icon: CheckSquare,
    description: "Securing approvals for plotting layouts, land division compliance checks, zoning regulations clearance, and securing approvals from Kathmandu Valley Development Authority (KVDA)."
  },
  {
    id: "sampanna-certificate",
    title: "5. Sampanna Certificate (Completion)",
    icon: Award,
    description: "Securing construction completion certificates from municipalities. We inspect the building coordinates, compare with permitted layouts, and secure the legal completion papers."
  },
  {
    id: "abhilekhikaran",
    title: "6. Abhilekhikaran (Regularization)",
    icon: FileText,
    description: "Legalizing older or non-approved building structures through regularizing drawing updates, engineering analysis, building status certification, and processing approvals with authorities."
  },
  {
    id: "property-valuation",
    title: "7. Property Valuation",
    icon: TrendingUp,
    description: "Official property valuation assessments for financial institutions, bank collateral setups, legal inheritances, and real estate audits in Kathmandu, Lalitpur, and Bhaktapur."
  },
  {
    id: "interior-design",
    title: "8. Interior Design, Decor & Renovations",
    icon: Paintbrush,
    description: "Aesthetic space transformations and complete property renovations. Custom modular kitchen installations, acoustic suspended ceiling grids, custom furniture, paint palettes, premium lighting styling, and layouts."
  },
  {
    id: "construction-supervision",
    title: "9. Construction Supervision",
    icon: Eye,
    description: "Daily or periodic site inspections by certified civil engineers, monitoring materials mix audits (concrete tests), verifying rebar styling, and supervising safety specifications."
  },
  {
    id: "turnkey-construction",
    title: "10. Turnkey Construction",
    icon: Wrench,
    description: "End-to-end design-build. We source high-grade construction materials, hire professional masonry contractors, manage site safety, and deliver complete keys of ready move-in houses."
  }
];

export default function ServicesPage() {
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
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our 10 Core Services</h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            From seismic-safe blueprints to municipal legal permits and complete physical turnkey construction, we offer complete building solutions under one roof.
          </p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm scroll-mt-24 hover-lift group"
                >
                  <div className="bg-slate-900 text-accent p-4 rounded-xl w-fit mb-6 group-hover:bg-accent group-hover:text-slate-950 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 mb-3">{service.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Call to Action Banner */}
      <section className="relative py-20 text-center overflow-hidden border-t border-slate-200 bg-transparent">
        {/* Large blurred colorful blobs for vibrancy on light background */}
        <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] bg-accent/30 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-emerald-300/20 rounded-full filter blur-[120px] pointer-events-none" style={{ animationDelay: "3s" }}></div>
        
        {/* AutoCAD Gridlines to keep the engineering theme */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1)" }}>
            Need Assistance with Kathmandu Municipality Naksa Pass or Construction?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
            Get professional engineering consultations today. Our certified civil engineers will review your files and blueprints at our Sohrakhutte office.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="tel:9849277960"
              className="bg-slate-900 text-accent font-extrabold py-4 px-8 rounded-xl hover:scale-105 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" /> Call for Support
            </a>
            <Link
              href="/contact"
              className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-sm"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
