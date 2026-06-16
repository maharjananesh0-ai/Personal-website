import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Griha Sansar Pvt. Ltd. | Civil Engineering & Interior Design Kathmandu",
    template: "%s | Griha Sansar Pvt. Ltd."
  },
  description: "Professional Civil Engineering and Interior Design company based in Sohrakhutte, Kathmandu. Over 10 years of experience in Architectural & Structural Design, Naksa Pass approval, Layout Approval, Sampanna Certificate, Abhilekhikaran, Property Valuation, Turnkey Construction and Construction Supervision across Kathmandu Valley.",
  keywords: [
    "Civil Engineering Kathmandu",
    "Interior Design Kathmandu",
    "Naksa Pass Kathmandu",
    "Structural Design Nepal",
    "Property Valuation Kathmandu",
    "Sampanna Certificate Nepal",
    "Abhilekhikaran Nepal",
    "Turnkey Construction Kathmandu",
    "Griha Sansar Pvt. Ltd."
  ],
  authors: [{ name: "Griha Sansar Pvt. Ltd." }],
  creator: "Griha Sansar Pvt. Ltd.",
  openGraph: {
    title: "Griha Sansar Pvt. Ltd. | Civil Engineering & Interior Design",
    description: "Design. Approve. Build. Professional Civil Engineering & Interior Design services in Kathmandu Valley with 10+ years experience.",
    url: "https://grihasansar.com.np",
    siteName: "Griha Sansar",
    locale: "en_NP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-accent selection:text-slate-950">
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
