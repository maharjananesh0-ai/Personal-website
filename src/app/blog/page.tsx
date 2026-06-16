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
    author: "Er. Sunil Shrestha",
    category: "Municipal Codes"
  },
  {
    id: "earthquake-resistant-construction-nepal",
    title: "Earthquake-Resistant Concrete House Construction in Nepal: Core Engineering Principles",
    summary: "Nepal lies in a high seismic activity zone. Learn how proper rebar styling, ductile detailing, column-beam joint reinforcement, and concrete mix ratios keep your home structurally sound.",
    date: "June 05, 2026",
    readTime: "9 min read",
    author: "Er. Anesh Karki",
    category: "Structural Safety"
  },
  {
    id: "interior-design-small-spaces-kathmandu",
    title: "Maximizing Small Residential Spaces: Modern Interior Design Tips for Kathmandu Apartments",
    summary: "Urban apartments in Kathmandu Valley often have restricted square footage. Discover modular furniture design, light reflection methods, custom false ceiling layouts, and spatial storage.",
    date: "May 28, 2026",
    readTime: "5 min read",
    author: "Er. Pooja Sharma",
    category: "Interior Decor"
  },
  {
    id: "property-valuation-process-nepal",
    title: "The Property Valuation Process in Nepal: Key Factors for Bank Collateral & Valuations",
    summary: "What parameters do engineers assess during home and land valuations? We detail access road width, land configuration, locality market trends, and construction depreciation math.",
    date: "May 18, 2026",
    readTime: "6 min read",
    author: "Er. Rajesh Thapa",
    category: "Property Audit"
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
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

                {/* Simulated detail link */}
                <div className="pt-2 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs text-slate-400 font-medium">Professional Engineering Counsel</span>
                  <button className="text-sm font-bold text-accent hover:text-accent-hover inline-flex items-center gap-1.5 cursor-pointer">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
