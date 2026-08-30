"use client";

import React, { useState } from "react";
import { 
  Building2, 
  GraduationCap, 
  Home, 
  Compass, 
  FileCheck, 
  Calculator, 
  MapPin, 
  CheckCircle2, 
  Briefcase,
  Layers,
  Search
} from "lucide-react";
import { PROJECTS_DATA, CATEGORIES, ProjectCategory, Project } from "@/data/projects";

function getProjectIcon(project: Project) {
  if (project.projectType === "Institutional") {
    return GraduationCap;
  }
  const servicesStr = project.services.join(" ").toLowerCase();
  if (servicesStr.includes("audit") || servicesStr.includes("quantity")) {
    return Calculator;
  }
  if (servicesStr.includes("architectural")) {
    return Compass;
  }
  if (servicesStr.includes("pmc") || servicesStr.includes("management")) {
    return Briefcase;
  }
  if (servicesStr.includes("nirman")) {
    return FileCheck;
  }
  return Home;
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.categories.includes(activeCategory);
    
    const matchesSearch =
      searchQuery.trim() === "" ||
      project.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.projectType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.location && project.location.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      {/* 1. Header Banner */}
      <section className="relative bg-primary text-white py-20 border-b border-primary/50 overflow-hidden">
        {/* Background Image with Luminosity blend */}
        <div className="absolute inset-0 bg-[url('/images/blueprint_bg.png')] bg-cover bg-center bg-no-repeat mix-blend-luminosity opacity-40"></div>
        {/* Color Grading Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-emerald-900/40"></div>
        {/* AutoCAD Gridlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-accent text-xs font-bold uppercase tracking-wider">
            Verified Portfolio ({PROJECTS_DATA.length} Projects)
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Our Completed Projects</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore our engineering consultancies, architectural designs, municipal approvals, bill audits, and project management across the Kathmandu Valley.
          </p>
        </div>
      </section>

      {/* 2. Filter Tabs, Search & Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Controls Bar: Search & Category Tabs */}
          <div className="flex flex-col gap-6 items-center">
            
            {/* Search Input */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by project name, location, or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none shadow-xs ${
                      isActive
                        ? "bg-slate-950 text-accent shadow-md ring-2 ring-accent/30"
                        : "bg-white text-slate-600 hover:text-slate-950 border border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-3">
            <span>
              Showing <strong className="text-slate-900">{filteredProjects.length}</strong> of{" "}
              <strong className="text-slate-900">{PROJECTS_DATA.length}</strong> projects
            </span>
            {activeCategory !== "All" && (
              <span className="bg-accent/20 text-slate-900 font-medium px-2.5 py-0.5 rounded-full">
                Filter: {activeCategory}
              </span>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const IconComp = getProjectIcon(project);

              return (
                <div
                  key={project.id}
                  className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div>
                    {/* Header Image/Icon Graphic */}
                    <div className="bg-slate-950 h-48 flex items-center justify-center relative border-b border-slate-200 overflow-hidden">
                      {/* Grid Pattern Overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20"></div>
                      
                      {/* Subtle Ambient Radial Glow */}
                      <div className="absolute w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all"></div>
                      
                      {/* Icon */}
                      <IconComp className="w-16 h-16 text-accent relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                      
                      {/* Project Type Badge (Top Right) */}
                      <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md text-accent text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border border-slate-700 shadow-sm">
                        {project.projectType}
                      </div>

                      {/* Status Badge (Top Left) */}
                      {project.status && (
                        <div className="absolute top-4 left-4 bg-emerald-950/80 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-emerald-800/60 shadow-sm">
                          {project.status}
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      
                      {/* Location Tag if available */}
                      {project.location && (
                        <div className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md text-[11px] font-semibold border border-emerald-100">
                          <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{project.location}</span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="font-bold text-slate-950 text-lg leading-snug group-hover:text-primary transition-colors">
                        {project.projectName}
                      </h3>

                      {/* Quantity / Special Spec Tag if available */}
                      {project.quantity && (
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-700 bg-slate-100 p-2.5 rounded-lg border border-slate-200">
                          <Layers className="w-4 h-4 text-accent shrink-0" />
                          <span>{project.quantity}</span>
                        </div>
                      )}

                      {/* Services List */}
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          Services Delivered:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.services.map((srv, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 bg-slate-100/90 text-slate-800 text-[11px] font-medium px-2.5 py-1 rounded-md border border-slate-200/80"
                            >
                              <CheckCircle2 className="w-3 h-3 text-accent shrink-0" />
                              {srv}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer indicator */}
                  <div className="px-6 pb-6 pt-0">
                    <div className="w-full h-1 bg-slate-100 group-hover:bg-accent rounded-full transition-colors duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
              <Building2 className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">No projects found</h3>
              <p className="text-slate-500 text-sm max-w-sm mx-auto">
                No project entries match your current filter or search criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-2 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
