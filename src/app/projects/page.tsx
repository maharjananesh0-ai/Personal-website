"use client";

import React, { useState } from "react";
import { Building2, Paintbrush, FileCheck, Compass, Layers, CheckCircle2 } from "lucide-react";

// Mock Project Database
const PROJECTS_DATA = [
  {
    id: 1,
    title: "Modern 3-Story Residential Villa",
    location: "Baluwatar, Kathmandu",
    category: "Residential",
    services: ["Architectural Design", "Structural Modeling", "Naksa Pass Approval", "Turnkey Construction"],
    icon: Building2,
    specs: "3200 Sq. Ft. RCC Structure, Earthquake Resistant"
  },
  {
    id: 2,
    title: "Executive Corporate Office Interior",
    location: "Lazimpat, Kathmandu",
    category: "Interior",
    services: ["Space Planning", "Custom Modular Desk Manufacturing", "Lighting & Acoustic Ceilings"],
    icon: Paintbrush,
    specs: "Premium Glassmorphism partition styling, Gold/Dark Theme"
  },
  {
    id: 3,
    title: "Commercial Shopping Complex",
    location: "Tinkune, Kathmandu",
    category: "Commercial",
    services: ["Structural Safety Audit", "e-BPS Naksa Pass processing", "Layout Approval"],
    icon: Compass,
    specs: "5-Story RCC Frame with double basement parking"
  },
  {
    id: 4,
    title: "Luxury Residential House Interiors",
    location: "Baneshwor, Kathmandu",
    category: "Interior",
    services: ["Modular Kitchen Setup", "Gypsum Board False Ceiling", "Master Bedroom Makeover"],
    icon: Paintbrush,
    specs: "Warm color aesthetics, custom wardrobes, indirect LED lighting"
  },
  {
    id: 5,
    title: "Apartment Housing Layout approval",
    location: "Kapan, Kathmandu",
    category: "Municipal",
    services: ["Layout Approval", "Sampanna Certificate processing", "KVDA Clearances"],
    icon: FileCheck,
    specs: "Zoning regulations compliance check & layout division planning"
  },
  {
    id: 6,
    title: "Seismic Retrofitting & Structural Design",
    location: "Sohrakhutte, Kathmandu",
    category: "Commercial",
    services: ["Structural Retrofitting Design", "Abhilekhikaran Regularization"],
    icon: Layers,
    specs: "Retrofitting of brick masonry structures with steel jackets"
  }
];

const CATEGORIES = ["All", "Residential", "Commercial", "Interior", "Municipal"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Header Banner */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our Completed Projects</h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Take a look at our engineering blueprints, legal approvals, and completed design works across the Kathmandu Valley.
          </p>
        </div>
      </section>

      {/* 2. Filter Tabs & Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none ${
                  activeCategory === cat
                    ? "bg-slate-900 text-accent shadow-sm"
                    : "bg-white text-slate-600 hover:text-slate-950 border border-slate-200"
                }`}
              >
                {cat === "Interior" ? "Interior Design" : cat === "Municipal" ? "Municipal/Valuation" : cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const IconComp = project.icon;
              return (
                <div
                  key={project.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover-lift group flex flex-col justify-between"
                >
                  <div>
                    {/* Placeholder Icon Graphic to represent the project beautifully */}
                    <div className="bg-slate-900 h-52 flex items-center justify-center relative border-b border-slate-200">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10"></div>
                      <IconComp className="w-16 h-16 text-accent group-hover:scale-110 transition-transform duration-300" />
                      
                      <div className="absolute top-4 right-4 bg-slate-950/80 text-accent text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded border border-slate-800">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">{project.location}</span>
                        <h3 className="font-bold text-slate-950 text-lg mt-1">{project.title}</h3>
                      </div>
                      
                      {/* Specs */}
                      <p className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-100 font-mono">
                        {project.specs}
                      </p>

                      {/* Services list */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Services Delivered:</span>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.services.map((srv, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 text-[10px] px-2 py-1 rounded">
                              <CheckCircle2 className="w-2.5 h-2.5 text-accent" />
                              {srv}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500">No projects found for this category.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
