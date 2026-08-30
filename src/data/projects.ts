export interface Project {
  id: number;
  projectName: string;
  projectType: "Institutional" | "Residential";
  services: string[];
  location?: string;
  quantity?: string;
  description?: string;
  image?: string;
  status?: string;
  categories: string[];
}

export const CATEGORIES = [
  "All",
  "Residential",
  "Institutional",
  "Architectural Design",
  "PMC",
  "Nirman Sampanna",
  "Bill Audit"
] as const;

export type ProjectCategory = typeof CATEGORIES[number];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    projectName: "Times International School – Sitapaila",
    projectType: "Institutional",
    services: ["Project Management Consultancy (PMC)"],
    location: "Sitapaila",
    status: "Completed",
    categories: ["Institutional", "PMC"]
  },
  {
    id: 2,
    projectName: "Gyan Kaji Maharjan Residence – Nagarjun",
    projectType: "Residential",
    services: ["Architectural Design"],
    location: "Nagarjun",
    status: "Completed",
    categories: ["Residential", "Architectural Design"]
  },
  {
    id: 3,
    projectName: "Macha Nani Dongol Residence",
    projectType: "Residential",
    services: ["Architectural Design", "Nirman Sampanna"],
    status: "Completed",
    categories: ["Residential", "Architectural Design", "Nirman Sampanna"]
  },
  {
    id: 4,
    projectName: "Nhuchhe Maharjan Residence",
    projectType: "Residential",
    services: ["Architectural Design", "Nirman Sampanna"],
    status: "Completed",
    categories: ["Residential", "Architectural Design", "Nirman Sampanna"]
  },
  {
    id: 5,
    projectName: "Binod Maharjan Residence",
    projectType: "Residential",
    services: ["Nirman Sampanna"],
    status: "Completed",
    categories: ["Residential", "Nirman Sampanna"]
  },
  {
    id: 6,
    projectName: "Anoj Dongol Residence",
    projectType: "Residential",
    services: ["Nirman Sampanna"],
    status: "Completed",
    categories: ["Residential", "Nirman Sampanna"]
  },
  {
    id: 7,
    projectName: "Sharmila Maharjan Residence",
    projectType: "Residential",
    services: ["Nirman Sampanna"],
    status: "Completed",
    categories: ["Residential", "Nirman Sampanna"]
  },
  {
    id: 8,
    projectName: "Mohan Prajapati Residence",
    projectType: "Residential",
    services: ["Nirman Sampanna"],
    status: "Completed",
    categories: ["Residential", "Nirman Sampanna"]
  },
  {
    id: 9,
    projectName: "Nagar Residence – Nardevi",
    projectType: "Residential",
    services: ["Nirman Sampanna"],
    location: "Nardevi",
    status: "Completed",
    categories: ["Residential", "Nirman Sampanna"]
  },
  {
    id: 10,
    projectName: "Kabin Maharjan Residence",
    projectType: "Residential",
    services: ["Project Management Consultancy (PMC)"],
    status: "Completed",
    categories: ["Residential", "PMC"]
  },
  {
    id: 11,
    projectName: "Residential Buildings – 10 Projects",
    projectType: "Residential",
    services: ["Nirman Sampanna"],
    quantity: "10 Residential Buildings",
    status: "Completed",
    categories: ["Residential", "Nirman Sampanna"]
  },
  {
    id: 12,
    projectName: "Mandikatar Residence – Budhanilkantha",
    projectType: "Residential",
    services: ["Bill Audit & Quantity Verification"],
    location: "Mandikatar, Budhanilkantha",
    status: "Completed",
    categories: ["Residential", "Bill Audit"]
  }
];
