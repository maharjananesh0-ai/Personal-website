import { DM_Serif_Display, Inter } from "next/font/google";
import { Metadata } from "next";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marketing Digital | Guía Gratuita para Emprendedores",
  description: "Transforma tus impresiones en Google en clics que generan clientes. Descubre cómo mejorar tu CTR, optimizar tus snippets y utilizar inteligencia artificial.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${dmSerifDisplay.variable} ${inter.variable} min-h-screen bg-[#fdfbf7] text-[#181e26]`}>
      {children}
    </div>
  );
}
