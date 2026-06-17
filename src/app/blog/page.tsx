import React from "react";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";

export const metadata = {
  title: "Expert Engineering & Interior Blog",
  description: "Read technical articles on Kathmandu building bye-laws, municipal Naksa Pass approvals, structural safety, interior decoration, and property valuation in Nepal."
};

const BLOG_POSTS = [
  {
    id: "kathmandu-building-bye-laws-naksa-pass",
    title: "Understanding Kathmandu Valley Building Bye-Laws: A Complete Guide to Naksa Pass",
    summary: "Getting a building permit (Naksa Pass) can be complicated. We explain the setbacks, ground coverage ratio (FAR), row-of-ways, and standard legal documents required by Kathmandu Municipalities.",
    date: "June 12, 2026",
    readTime: "7 min read",
    author: "Er. Anesh Maharjan",
    category: "Municipal Codes",
    bulletPoints: [
      "Submit core documents: Lalpurja, Citizenship, and Cadastral Map.",
      "Hire an NEC registered engineer/architect for architectural and structural plans.",
      "Apply through the Electronic Building Permit System (eBPS).",
      "Comply with setbacks (usually 1.5-2m) and Floor Area Ratios (FAR).",
      "Verify seismic safety using the National Building Code (NBC)."
    ]
  },
  {
    id: "earthquake-resistant-construction-nepal",
    title: "Earthquake-Resistant Concrete House Construction in Nepal: Core Engineering Principles",
    summary: "Nepal lies in a high seismic activity zone. Learn how proper rebar styling, ductile detailing, column-beam joint reinforcement, and concrete mix ratios keep your home structurally sound.",
    date: "June 05, 2026",
    readTime: "9 min read",
    author: "Er. Anesh Maharjan",
    category: "Structural Safety",
    bulletPoints: [
      "Ensure a symmetrical building design to evenly distribute seismic forces.",
      "Use closely spaced stirrups and 135-degree hooks for ductile detailing.",
      "Maintain a proper Box Effect by correctly placing plinth, sill, lintel, and roof bands.",
      "Avoid building on unstable ground or steep slopes to prevent soil liquefaction.",
      "Follow the Nepal National Building Code (NBC) strictly during construction."
    ]
  },
  {
    id: "interior-design-small-spaces-kathmandu",
    title: "Maximizing Small Residential Spaces: Modern Interior Design Tips for Kathmandu Apartments",
    summary: "Urban apartments in Kathmandu Valley often have restricted square footage. Discover modular furniture design, light reflection methods, custom false ceiling layouts, and spatial storage.",
    date: "May 28, 2026",
    readTime: "5 min read",
    author: "Er. Pooja Sharma",
    category: "Interior Decor",
    bulletPoints: [
      "Adopt a minimalist approach and declutter frequently.",
      "Use multi-functional furniture like sofa-beds and storage ottomans.",
      "Maximize vertical space with floor-to-ceiling cabinets and shelves.",
      "Strategically place mirrors to reflect light and visually double the space.",
      "Stick to light and neutral color palettes (beige, off-white, greige)."
    ]
  },
  {
    id: "property-valuation-process-nepal",
    title: "The Property Valuation Process in Nepal: Key Factors for Bank Collateral & Valuations",
    summary: "What parameters do engineers assess during home and land valuations? We detail access road width, land configuration, locality market trends, and construction depreciation math.",
    date: "May 18, 2026",
    readTime: "6 min read",
    author: "Er. Rajesh Thapa",
    category: "Property Audit",
    bulletPoints: [
      "Differentiate between Government Valuation (for tax) and Fair Market Value.",
      "Banks use a weighted average (e.g., 70% Market Value + 30% Government Value).",
      "Critical factors include road access, location, and infrastructure (water/electricity).",
      "Necessary documents: Lalpurja, Survey map, Citizenship, and Tax receipts.",
      "Valuations must be done by engineers registered with the Nepal Valuers' Association (NVA)."
    ]
  }
];

export default function BlogPage() {
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
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Griha Sansar Insights</h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Professional civil engineering guides, municipal bylaws tutorials, and interior design wisdom written by our engineering team.
          </p>
        </div>
      </section>

      {/* 2. Blog Posts List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:border-accent transition-colors space-y-6"
              >
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-400" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-slate-400" />
                    By {post.author}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 leading-snug">
                  {post.title}
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {post.summary}
                </p>

                <details className="group w-full border-t border-slate-100 pt-4 mt-2 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex justify-between items-center list-none cursor-pointer outline-none">
                    <span className="text-xs text-slate-400 font-medium">Professional Engineering Counsel</span>
                    <div className="text-sm font-bold bg-primary text-white shadow-md hover:shadow-lg hover:bg-slate-800 transition-all px-5 py-2.5 rounded-xl inline-flex items-center gap-2">
                      <span className="group-open:hidden">Read Article</span>
                      <span className="hidden group-open:inline">Close Article</span>
                      <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                    </div>
                  </summary>
                  <div className="mt-6 p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-inner">
                    <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Key Takeaways</h3>
                    <ul className="space-y-3">
                      {post.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex gap-3 text-slate-700 text-sm">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
