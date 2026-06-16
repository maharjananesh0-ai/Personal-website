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
    title: "8. Interior Design & Decor",
    icon: Paintbrush,
    description: "Aesthetic space transformations. Custom modular kitchen installations, acoustic suspended ceiling grids, custom furniture, paint palettes, premium lighting styling, and layouts."
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
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
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
      <section className="bg-slate-950 py-16 text-white text-center border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Need Assistance with Kathmandu Municipality Naksa Pass or Construction?</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Get professional engineering consultations today. Our certified civil engineers will review your files and blueprints at our Sohrakhutte office.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="tel:9801226577"
              className="bg-accent hover:bg-accent-hover text-slate-950 font-bold px-6 py-3 rounded-lg text-sm transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Call Er. Sunil: 9801226577
            </a>
            <Link
              href="/contact"
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
