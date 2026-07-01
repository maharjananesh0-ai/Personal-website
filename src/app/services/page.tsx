"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Compass, 
  Layers, 
  Paintbrush, 
  Video, 
  FileText, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  HardHat, 
  FileSpreadsheet, 
  Building, 
  Sparkles, 
  ArrowRight,
  ArrowUpRight,
  LayoutGrid,
  FileCheck,
  Eye,
  Info
} from "lucide-react";

// Category type definition
type CategoryId = "all" | "design" | "visualization" | "construction" | "municipality";

interface Category {
  id: CategoryId;
  label: string;
}

const CATEGORIES: Category[] = [
  { id: "all", label: "All Services" },
  { id: "design", label: "Design & Planning" },
  { id: "visualization", label: "3D & Walkthroughs" },
  { id: "construction", label: "Estimation & Supervision" },
  { id: "municipality", label: "Municipality & Approvals" },
];

interface Service {
  id: string;
  title: string;
  category: CategoryId;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  pricing: string;
  buttonText: string;
  linkUrl: string;
  details?: string[];
}

const SERVICES_DATA: Service[] = [
  {
    id: "architectural-planning",
    title: "Architectural Planning",
    category: "design",
    icon: Compass,
    description: "Floor plans, elevations, sections, façade design, and complete architectural drawings for residential and commercial projects.",
    pricing: "Starting from Rs 25–50 / sq ft",
    buttonText: "Get Consultation",
    linkUrl: "https://wa.me/9849277960?text=Hello%20Griha%20Sansar,%20I%20am%20interested%20in%20Architectural%20Planning%20services.",
  },
  {
    id: "structural-analysis",
    title: "Structural Analysis & Design",
    category: "design",
    icon: Layers,
    description: "Structural calculations, ETABS analysis, foundation design, beam and column design, slab design, reinforcement detailing, and safety-focused engineering solutions.",
    pricing: "Starting from Rs 15–35 / sq ft",
    buttonText: "Book Structural Review",
    linkUrl: "https://wa.me/9849277960?text=Hello%20Griha%20Sansar,%20I%20want%20to%20book%20a%20Structural%20Review.",
  },
  {
    id: "architecture-structure-package",
    title: "Architecture + Structure Package",
    category: "design",
    icon: LayoutGrid,
    description: "Complete package combining architecture and structural engineering for seamless project delivery and optimal cost-safety ratios.",
    pricing: "Starting from Rs 75–120 / sq ft",
    buttonText: "Explore Package",
    linkUrl: "https://wa.me/9849277960?text=Hello%20Griha%20Sansar,%20I%20want%20to%20explore%20the%20Architecture%20%2B%20Structure%20Package.",
  },
  {
    id: "interior-design",
    title: "Interior Design",
    category: "design",
    icon: Paintbrush,
    description: "Space planning, furniture layout, materials selection, lighting design, and premium interior concepts tailored for modern urban living.",
    pricing: "Starting from Rs 40–120 / sq ft",
    buttonText: "View Designs",
    linkUrl: "https://wa.me/9849277960?text=Hello%20Griha%20Sansar,%20I%20am%20interested%20in%20Interior%20Design%20services.",
  },
  {
    id: "3d-exterior-rendering",
    title: "3D Exterior Rendering",
    category: "visualization",
    icon: Building,
    description: "Realistic high-quality visual renderings and building exterior previews to visualize colors, textures, and architectural shapes before construction.",
    pricing: "Rs 3,000–8,000 per view",
    buttonText: "View Samples",
    linkUrl: "https://wa.me/9849277960?text=Hello%20Griha%20Sansar,%20I%20want%20to%20view%20samples%20for%203D%20Exterior%20Rendering.",
  },
  {
    id: "interior-rendering",
    title: "Interior Rendering",
    category: "visualization",
    icon: Eye,
    description: "Photorealistic interior room visualization and presentation images to preview materials, finishes, lighting, and layout spacing.",
    pricing: "Rs 2,500–7,000 per view",
    buttonText: "View Samples",
    linkUrl: "https://wa.me/9849277960?text=Hello%20Griha%20Sansar,%20I%20want%20to%20see%20Interior%20Rendering%20samples.",
  },
  {
    id: "walkthrough-animation",
    title: "Walkthrough Animation",
    category: "visualization",
    icon: Video,
    description: "Premium animated walkthrough videos for immersive project visualization, showcasing internal routes and external perspectives.",
    pricing: "Rs 15,000–60,000",
    buttonText: "Request Quote",
    linkUrl: "https://wa.me/9849277960?text=Hello%20Griha%20Sansar,%20I%20want%20a%20pricing%20quote%20for%20a%20Walkthrough%20Animation%20video.",
  },
  {
    id: "boq-estimation",
    title: "BOQ & Quantity Estimation",
    category: "construction",
    icon: FileText,
    description: "Detailed bill of quantities (BOQ), material cost estimation, rate analysis, and resource planning spreadsheets for financial management.",
    pricing: "Rs 5,000–20,000",
    buttonText: "Get Estimate",
    linkUrl: "https://wa.me/9849277960?text=Hello%20Griha%20Sansar,%20I%20need%20a%20BOQ%20and%20Quantity%20Estimation.",
  },
  {
    id: "site-supervision",
    title: "Site Supervision",
    category: "construction",
    icon: HardHat,
    description: "Professional site visits by certified structural and civil engineers to inspect construction quality, concrete mixes, and structural integrity.",
    pricing: "Rs 5,000–15,000 per visit",
    buttonText: "Schedule Visit",
    linkUrl: "https://wa.me/9849277960?text=Hello%20Griha%20Sansar,%20I%20want%20to%20schedule%20an%20engineering%20Site%20Supervision%20visit.",
  },
  {
    id: "municipality-drawing",
    title: "Municipality Drawing & Approval",
    category: "municipality",
    icon: FileSpreadsheet,
    description: "Municipal drawing preparation, documentation matching local building codes, and coordination through the electronic building permit system (e-BPS).",
    pricing: "Rs 10,000–30,000",
    buttonText: "Contact Us",
    linkUrl: "/contact",
  },
  {
    id: "sampanna-support",
    title: "Sampanna Support (Completion Certificate)",
    category: "municipality",
    icon: FileCheck,
    description: "Professional assistance for building completion documentation, site verification coordination, municipal drawings adjustment, and legal certificate acquisition.",
    pricing: "Rs 15,000–50,000",
    buttonText: "Start Process",
    linkUrl: "https://wa.me/9849277960?text=Hello%20Griha%20Sansar,%20I%20need%20assistance%20obtaining%20a%20Sampanna%20Certificate.",
    details: [
      "Small residential: Rs 15,000–25,000",
      "Medium residential: Rs 25,000–40,000",
      "Large residential/commercial: Rs 40,000–50,000+"
    ]
  },
  {
    id: "abhilekhikaran",
    title: "Abhilekhikaran (Drawing Registration)",
    category: "municipality",
    icon: Sparkles,
    description: "Drafting revision blueprints, documentation for existing houses, regularizing non-approved layouts, and building record registration at local government units.",
    pricing: "Rs 10,000–35,000",
    buttonText: "Request Assistance",
    linkUrl: "https://wa.me/9849277960?text=Hello%20Griha%20Sansar,%20I%20need%20help%20with%20Abhilekhikaran%20registration%20support.",
    details: [
      "Minor revisions: Rs 10,000–15,000",
      "Residential projects: Rs 15,000–25,000",
      "Large/complex projects: Rs 25,000–35,000+"
    ]
  }
];

const PACKAGES_DATA = [
  {
    name: "Starter Package",
    price: "Rs 79",
    unit: "sq ft",
    popular: false,
    description: "Perfect for homeowners looking for core drawings and essential compliance planning.",
    features: [
      "Architectural planning",
      "Structural design",
      "Basic consultation",
      "Basic drawings (Floor plans & elevations)",
    ],
    buttonText: "Start Project",
    linkUrl: "https://wa.me/9849277960?text=Hello%20Griha%20Sansar,%20I%20want%20to%20sign%20up%20for%20the%20Starter%20Package%20(Rs%2079/sqft).",
  },
  {
    name: "Standard Package",
    price: "Rs 99",
    unit: "sq ft",
    popular: true,
    description: "Our most requested package offering complete architectural and structural packages plus 3D previews.",
    features: [
      "Architectural planning & detailing",
      "Structural analysis & safety calculations",
      "Detailed structural drawings (RCC/Rebar)",
      "One realistic exterior 3D view",
      "Basic BOQ & Material Estimation",
    ],
    buttonText: "Choose Package",
    linkUrl: "https://wa.me/9849277960?text=Hello%20Griha%20Sansar,%20I%20want%20to%20choose%20the%20Standard%20Package%20(Rs%2099/sqft).",
  },
  {
    name: "Premium Package",
    price: "Rs 149",
    unit: "sq ft",
    popular: false,
    description: "Elite construction pack offering custom designs, interior concepts, walkthroughs, and legal approval consultations.",
    features: [
      "A-Z Architecture blueprints",
      "Complete Earthquake-Resistant Structural design",
      "Full Interior Design layouts",
      "Comprehensive BOQ & Material takeoff",
      "Multiple Exterior 3D Renders",
      "Walkthrough animation support",
      "Sampanna completion guidance",
      "Abhilekhikaran process assistance",
    ],
    buttonText: "Get Premium",
    linkUrl: "https://wa.me/9849277960?text=Hello%20Griha%20Sansar,%20I%20am%20interested%20in%20the%20Premium%20Package%20(Rs%20149/sqft).",
  }
];

export default function ServicesPage() {
  const [viewMode, setViewMode] = useState<"services" | "packages">("services");
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredServices = SERVICES_DATA.filter(
    (service) => activeCategory === "all" || service.category === activeCategory
  );

  return (
    <div className="flex flex-col w-full bg-[#070F1E] min-h-screen font-sans selection:bg-[#FF6B00] selection:text-white overflow-hidden relative">
      
      {/* 3D Flip card styling & Floating Animations definitions */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        /* Floating keyframe animations */
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        .animate-float-0 {
          animation: float-slow 7s ease-in-out infinite;
        }
        .animate-float-1 {
          animation: float-medium 6s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .animate-float-2 {
          animation: float-fast 8s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}} />

      {/* BACKGROUND BLUEPRINT ARTISTIC EFFECTS (40% Blur Colorful blobs & dynamic drafts) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Subtle dark grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Colorful Blurred Circles set to 40% opacity/effect */}
        <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] bg-[#FF6B00]/12 rounded-full filter blur-[120px] animate-pulse opacity-40"></div>
        <div className="absolute top-[55%] right-[-10%] w-[700px] h-[700px] bg-cyan-550/8 rounded-full filter blur-[140px] animate-pulse opacity-40" style={{ animationDuration: "10s" }}></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[550px] h-[550px] bg-[#FF6B00]/8 rounded-full filter blur-[110px] animate-pulse opacity-30" style={{ animationDuration: "12s" }}></div>

        {/* Blueprint Compass Design Accents (Opacities set to glowing cyan/light blue vector styles) */}
        <div className="absolute top-[25%] left-[5%] opacity-[0.15] filter blur-[0.5px] hidden md:block">
          <svg width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="225" cy="225" r="200" stroke="#00d2ff" strokeWidth="0.8" strokeDasharray="4 4" />
            <circle cx="225" cy="225" r="140" stroke="#00d2ff" strokeWidth="1.2" />
            <circle cx="225" cy="225" r="6" fill="#FF6B00" />
            <line x1="0" y1="225" x2="450" y2="225" stroke="#00d2ff" strokeWidth="0.8" />
            <line x1="225" y1="0" x2="225" y2="450" stroke="#00d2ff" strokeWidth="0.8" />
            <line x1="70" y1="70" x2="380" y2="380" stroke="#00d2ff" strokeWidth="0.5" strokeDasharray="6 6" />
            <text x="240" y="220" fill="#00d2ff" fontSize="9" fontFamily="monospace" letterSpacing="2">ALIGNMENT AXIS</text>
          </svg>
        </div>

        <div className="absolute top-[65%] right-[5%] opacity-[0.12] filter blur-[0.5px] hidden md:block">
          <svg width="350" height="350" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="30" width="240" height="240" stroke="#00d2ff" strokeWidth="1" />
            <circle cx="150" cy="150" r="120" stroke="#FF6B00" strokeWidth="0.8" strokeDasharray="5 5" />
            <line x1="30" y1="30" x2="270" y2="270" stroke="#00d2ff" strokeWidth="0.5" />
            <line x1="270" y1="30" x2="30" y2="270" stroke="#00d2ff" strokeWidth="0.5" />
            <text x="40" y="285" fill="#00d2ff" fontSize="8" fontFamily="monospace">REF_ELEVATION_GRID_B</text>
          </svg>
        </div>
      </div>
      
      {/* 1. HERO SECTION WITH BLUEPRINT ACCENTS */}
      <section className="relative bg-primary text-white py-24 md:py-32 overflow-hidden z-10">
        
        {/* Background Image with Luminosity blend to adopt brand colors */}
        <div className="absolute inset-0 bg-[url('/images/blueprint_bg.png')] bg-cover bg-center bg-no-repeat mix-blend-luminosity opacity-40"></div>
        {/* Color Grading Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-emerald-900/40"></div>
        {/* AutoCAD Gridlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Architectural Wireframe Coordinates Line (SVG Layout) */}
        <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden md:block opacity-20 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 450L450 450M450 450L450 50M450 450L250 250M250 250L50 250M250 250L250 50" stroke="white" strokeWidth="1" strokeDasharray="5 5" />
            <circle cx="250" cy="250" r="8" fill="#FF6B00" />
            <circle cx="450" cy="450" r="6" fill="white" />
            <circle cx="50" cy="450" r="6" fill="white" />
            <line x1="150" y1="50" x2="150" y2="450" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
            <line x1="350" y1="50" x2="350" y2="450" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
            <line x1="50" y1="150" x2="450" y2="150" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
            <line x1="50" y1="350" x2="450" y2="350" stroke="white" strokeWidth="0.5" strokeOpacity="0.5" />
            <text x="265" y="255" fill="white" fontSize="12" fontFamily="monospace">GRID CTR Axis [0.00, 0.00]</text>
            <text x="60" y="440" fill="white" fontSize="10" fontFamily="monospace">X: -45.00m</text>
            <text x="400" y="440" fill="white" fontSize="10" fontFamily="monospace">X: +45.00m</text>
          </svg>
        </div>

        {/* Diagonal architectural accent stripe */}
        <div className="absolute top-0 right-1/4 w-1 bg-gradient-to-b from-[#FF6B00] via-[#FF6B00]/40 to-transparent h-full transform -rotate-12"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#FF6B00]/10 border border-[#FF6B00]/40 text-[#FF6B00] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Estd. in Kathmandu Valley
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight">
            Engineering <span className="text-[#FF6B00]">Services & Pricing</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
            Transparent pricing for architecture, structural design, analysis, construction support, and municipality services across Kathmandu Valley.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a 
              href="tel:9849277960" 
              className="bg-[#FF6B00] hover:bg-[#E05E00] text-white font-bold py-3.5 px-6 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#FF6B00]/20 flex items-center gap-2 text-sm text-shadow-none"
            >
              <Phone className="w-4 h-4" /> Call: 9849277960
            </a>
            <a 
              href="https://wa.me/9849277960" 
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-transparent border border-white/30 hover:border-white/80 hover:bg-white/5 text-white font-bold py-3.5 px-6 rounded-lg transition-all flex items-center gap-2 text-sm text-shadow-none"
            >
              <MessageSquare className="w-4 h-4 text-[#FF6B00]" /> WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Blending overlay to smooth transition from green-emerald to dark blueprint blue */}
        <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-b from-transparent to-[#070F1E] pointer-events-none z-20"></div>

        {/* Housier architectural elements and interior blending spanning the transition zone */}
        <div className="absolute bottom-[-50px] right-[5%] w-[480px] h-[250px] opacity-40 z-30 pointer-events-none hidden lg:block">
          <svg width="100%" height="100%" viewBox="0 0 500 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="house-blend-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.7" /> {/* Emerald Green */}
                <stop offset="60%" stopColor="#00d2ff" stopOpacity="0.5" />  {/* Cyan Blue */}
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.2" /> {/* Accent Orange */}
              </linearGradient>
            </defs>

            {/* Ground line */}
            <line x1="10" y1="210" x2="490" y2="210" stroke="url(#house-blend-grad)" strokeWidth="1.5" />
            
            {/* House Exterior Facade Wireframe */}
            <rect x="30" y="70" width="180" height="140" stroke="url(#house-blend-grad)" strokeWidth="1.5" />
            <path d="M20 70L120 10L220 70Z" stroke="url(#house-blend-grad)" strokeWidth="1.5" />
            <rect x="95" y="130" width="50" height="80" stroke="url(#house-blend-grad)" strokeWidth="1.2" />
            <rect x="50" y="95" width="35" height="35" stroke="url(#house-blend-grad)" strokeWidth="1" />
            <rect x="155" y="95" width="35" height="35" stroke="url(#house-blend-grad)" strokeWidth="1" />
            
            {/* Interior Perspective Room Grid */}
            <rect x="270" y="50" width="160" height="130" stroke="url(#house-blend-grad)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="220" y1="15" x2="270" y2="50" stroke="url(#house-blend-grad)" strokeWidth="1" />
            <line x1="480" y1="15" x2="430" y2="50" stroke="url(#house-blend-grad)" strokeWidth="1" />
            <line x1="220" y1="210" x2="270" y2="180" stroke="url(#house-blend-grad)" strokeWidth="1" />
            <line x1="480" y1="210" x2="430" y2="180" stroke="url(#house-blend-grad)" strokeWidth="1" />
            
            {/* Pendant light wireframe */}
            <line x1="350" y1="50" x2="350" y2="80" stroke="url(#house-blend-grad)" strokeWidth="1" />
            <circle cx="350" cy="85" r="7" stroke="url(#house-blend-grad)" strokeWidth="1" />
            
            {/* Modular sofa wireframe */}
            <rect x="290" y="140" width="120" height="40" stroke="url(#house-blend-grad)" strokeWidth="1.2" />
            <line x1="330" y1="140" x2="330" y2="180" stroke="url(#house-blend-grad)" strokeWidth="1" />
            <line x1="370" y1="140" x2="370" y2="180" stroke="url(#house-blend-grad)" strokeWidth="1" />

            <text x="35" y="230" fill="#10B981" fontSize="8" fontFamily="monospace" opacity="0.8">EXTERIOR ELEVATION_A1</text>
            <text x="275" y="230" fill="#00d2ff" fontSize="8" fontFamily="monospace" opacity="0.8">INTERIOR PERSPECTIVE_I5</text>
          </svg>
        </div>
      </section>

      {/* 2. DUAL VIEW SYSTEM SELECTOR */}
      <section className="py-8 bg-[#091122] border-b border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-slate-900/80 p-1.5 rounded-2xl flex shadow-inner max-w-md w-full border border-slate-800">
              <button
                onClick={() => setViewMode("services")}
                className={`flex-1 py-3.5 px-6 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  viewMode === "services"
                    ? "bg-[#FF6B00] text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Individual Services
              </button>
              <button
                onClick={() => setViewMode("packages")}
                className={`flex-1 py-3.5 px-6 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  viewMode === "packages"
                    ? "bg-[#FF6B00] text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Featured Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC CONTENT SWITCHER */}
      {viewMode === "services" ? (
        /* INDIVIDUAL SERVICES VIEW */
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative animate-appear z-10">
          <div className="text-center space-y-4 mb-20">
            <span className="text-[#FF6B00] font-black text-[10px] uppercase tracking-widest bg-[#FF6B00]/10 border border-[#FF6B00]/25 px-4 py-1.5 rounded-full inline-block">
              Detailed Price Guide
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our <span className="text-[#FF6B00] relative inline-block after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[3px] after:bg-[#FF6B00]/40">Engineering Solutions</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto font-medium">
              Select a category to filter our 12 services and discover estimated rates for each milestone of your structural or design process.
            </p>

            {/* Filtering Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[#FF6B00] text-white border-[#FF6B00] shadow-lg shadow-[#FF6B00]/25 transform scale-105"
                      : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-[#FF6B00] hover:text-[#FF6B00]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* 12 Services Grid (Staggered Floating Order) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pb-12">
            {filteredServices.map((service, idx) => {
              const Icon = service.icon;
              
              // Asymmetrical layout offsets to break straight lines
              const offsets = ["", "md:translate-y-8", "md:translate-y-4"];
              const offsetClass = offsets[idx % 3];
              
              // Floating animation classes
              const animClass = `animate-float-${idx % 3}`;

              return (
                <div 
                  key={service.id} 
                  className={`w-full h-[400px] perspective-1000 ${offsetClass} ${animClass} transition-all duration-500`}
                >
                  <div className={`w-full h-full relative transition-transform duration-750 preserve-3d ${flippedCards[service.id] ? "rotate-y-180" : ""}`}>
                    
                    {/* FRONT FACE */}
                    <div 
                      onClick={() => toggleFlip(service.id)}
                      className="absolute inset-0 w-full h-full backface-hidden cursor-pointer bg-white rounded-2xl border border-slate-200/80 p-8 flex flex-col justify-between hover:shadow-2xl hover:border-[#FF6B00]/50 transition-all duration-300 shadow-sm bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] group"
                    >
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-[#0F1E36] group-hover:bg-[#FF6B00] transition-colors"></div>

                      <div className="absolute right-6 top-6 text-[9px] font-mono text-slate-350 tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-[#FF6B00]/65 transition-all duration-300 pointer-events-none select-none">
                        AXIS-{service.id.substring(0, 4).toUpperCase()}
                      </div>

                      <div>
                        {/* Icon & Title */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-slate-50 border border-slate-200/60 text-[#0F1E36] rounded-2xl flex items-center justify-center group-hover:bg-[#FF6B00] group-hover:text-white group-hover:border-[#FF6B00] group-hover:shadow-lg group-hover:shadow-[#FF6B00]/20 transition-all duration-300">
                            <Icon className="w-5.5 h-5.5" />
                          </div>
                          <h3 className="font-black text-lg text-[#0F1E36] leading-snug group-hover:text-[#FF6B00] transition-colors">
                            {service.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-slate-650 text-xs leading-relaxed font-medium">
                          {service.description}
                        </p>
                      </div>

                      {/* Tap to Reveal Action button */}
                      <div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(service.id);
                          }}
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#0F1E36] hover:bg-[#FF6B00] text-white font-extrabold py-3.5 px-4 rounded-xl text-xs transition-all duration-300 transform hover:scale-102 hover:shadow-lg hover:shadow-[#FF6B00]/20 cursor-pointer"
                        >
                          <Eye className="w-4 h-4 text-[#FF6B00]" />
                          Reveal Price & Action
                        </button>
                      </div>
                    </div>

                    {/* BACK FACE */}
                    <div 
                      className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl border-2 border-[#FF6B00]/40 p-8 flex flex-col justify-between shadow-2xl bg-[radial-gradient(#f8fafc_1px,transparent_1px)] [background-size:16px_16px] group"
                    >
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-[#FF6B00]"></div>

                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[9px] font-mono text-[#FF6B00] font-bold tracking-wider">SEC-PRICING</span>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFlip(service.id);
                            }}
                            className="text-slate-400 hover:text-[#FF6B00] text-xs font-bold transition-colors cursor-pointer"
                          >
                            ✕ Close
                          </button>
                        </div>
                        <h4 className="font-black text-base text-[#0F1E36] mb-4">
                          {service.title}
                        </h4>

                        {/* Pricing Box */}
                        <div className="border-l-4 border-[#FF6B00] bg-slate-50/80 p-4 rounded-r-xl mb-4">
                          <span className="text-[9px] uppercase font-black text-slate-400 block tracking-widest mb-0.5">
                            Estimated Cost
                          </span>
                          <span className="text-base font-black text-[#0F1E36] tracking-tight">
                            {service.pricing}
                          </span>
                        </div>

                        {/* Specific details breakdowns if any */}
                        {service.details && (
                          <div className="space-y-1 border-t border-slate-100 pt-2 mb-2 max-h-[85px] overflow-y-auto">
                            <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider mb-1 flex items-center gap-1">
                              <Info className="w-3 h-3 text-[#FF6B00]" /> Cost Tiers
                            </span>
                            {service.details.map((detail, idx) => (
                              <div key={idx} className="flex justify-between items-center text-[10px] font-semibold text-slate-500">
                                <span>{detail.split(":")[0]}</span>
                                <span className="text-slate-800 font-bold">{detail.split(":")[1]}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Link actions */}
                      <div className="flex flex-col gap-2">
                        {service.linkUrl.startsWith("http") ? (
                          <a
                            href={service.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-full inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white font-extrabold py-3 px-4 rounded-xl text-xs transition-all duration-300 transform hover:scale-102 hover:shadow-lg shadow-md cursor-pointer text-shadow-none"
                          >
                            {service.buttonText}
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <Link
                            href={service.linkUrl}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white font-extrabold py-3 px-4 rounded-xl text-xs transition-all duration-300 transform hover:scale-102 hover:shadow-lg shadow-md cursor-pointer text-shadow-none"
                          >
                            {service.buttonText}
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(service.id);
                          }}
                          className="text-center text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-[#FF6B00] transition-colors cursor-pointer"
                        >
                          ← View Description
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        /* FEATURED PACKAGES VIEW */
        <section className="bg-transparent py-20 relative overflow-hidden animate-appear z-10">
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <span className="text-[#FF6B00] font-bold text-xs uppercase tracking-widest bg-[#FF6B00]/10 border border-[#FF6B00]/20 px-4 py-1.5 rounded-full inline-block">
                Package Solutions
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                Featured Pricing Packages
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto font-medium">
                Our standard bundled rates are designed to offer maximum value with full engineering accountability and structural vetting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pb-12">
              {PACKAGES_DATA.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`rounded-[2rem] p-10 flex flex-col justify-between relative transition-all duration-300 ${
                    pkg.popular
                      ? "bg-[#0b1424] border-2 border-[#FF6B00] md:-translate-y-4 shadow-xl shadow-black/30"
                      : "bg-slate-900/40 border border-slate-800"
                  }`}
                >
                  {/* Popular Ribbon */}
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-[#FF6B00] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  )}

                  <div>
                    <h3 className="text-xl font-bold mb-1 text-white">{pkg.name}</h3>
                    <p className="text-slate-450 text-xs leading-relaxed mb-8">{pkg.description}</p>
                    
                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="text-4xl sm:text-5xl font-black text-white">{pkg.price}</span>
                      <span className="text-slate-400 text-xs font-semibold">/ {pkg.unit}</span>
                    </div>

                    <div className="border-t border-slate-800 pt-8 mb-8">
                      <span className="text-[10px] uppercase font-bold text-[#FF6B00] tracking-widest block mb-4">
                        What's Included:
                      </span>
                      <ul className="space-y-3.5">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3 text-xs text-slate-300 font-medium">
                            <CheckCircle2 className="w-4.5 h-4.5 text-[#FF6B00] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={pkg.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 font-bold py-4 px-6 rounded-xl text-xs transition-all shadow-md text-shadow-none ${
                      pkg.popular
                        ? "bg-[#FF6B00] hover:bg-[#E05E00] text-white shadow-[#FF6B00]/10 hover:scale-105"
                        : "bg-white/10 hover:bg-white/20 text-white hover:scale-102"
                    }`}
                  >
                    {pkg.buttonText}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. BOTTOM CTA & CONTACT DETAILS SECTION */}
      <section className="py-24 relative overflow-hidden bg-[#091122] border-t border-slate-800 z-10">
        
        {/* Subtle grid decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Build Smarter?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Get expert guidance from planning to construction with Griha Sansar. Let our Kathmandu-based structural engineers review your requirements.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="bg-[#FF6B00] hover:bg-[#E05E00] text-white font-extrabold py-4 px-8 rounded-xl transition-all hover:scale-105 text-sm shadow-md shadow-[#FF6B00]/20 text-shadow-none"
            >
              Book Consultation
            </Link>
            <a
              href="https://wa.me/9849277960"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-4 px-8 rounded-xl transition-all hover:scale-105 text-sm shadow-md flex items-center justify-center gap-2 text-shadow-none"
            >
              <MessageSquare className="w-4.5 h-4.5" /> WhatsApp Us
            </a>
            <a
              href="tel:9849277960"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold py-4 px-8 rounded-xl transition-all hover:scale-105 text-sm shadow-md flex items-center justify-center gap-2 text-shadow-none"
            >
              <Phone className="w-4.5 h-4.5" /> Call Now
            </a>
          </div>

          {/* Disclaimer section */}
          <div className="pt-12 border-t border-slate-800 max-w-3xl mx-auto text-[10px] md:text-xs text-slate-500 leading-relaxed text-left font-medium">
            <span className="font-extrabold text-slate-400 uppercase tracking-widest block mb-2">
              Pricing Disclaimer
            </span>
            <p>
              Final pricing may vary depending on project size, complexity, revisions, location, municipality requirements, and scope of work. Municipality charges, government fees, taxes, site verification charges, and third-party costs are excluded and billed separately where applicable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
