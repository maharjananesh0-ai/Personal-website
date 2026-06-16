"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Compass, 
  Github, 
  ArrowRight, 
  Mail, 
  Check, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Target, 
  ArrowUpRight,
  Loader2,
  BookOpen
} from "lucide-react";

export default function MarketingDigitalPage() {
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  
  const [status1, setStatus1] = useState({ submitting: false, success: false, error: "" });
  const [status2, setStatus2] = useState({ submitting: false, success: false, error: "" });

  const handleFormSubmit = (e: React.FormEvent, formId: 1 | 2) => {
    e.preventDefault();
    const email = formId === 1 ? email1 : email2;
    const setStatus = formId === 1 ? setStatus1 : setStatus2;
    const setEmail = formId === 1 ? setEmail1 : setEmail2;

    if (!email || !email.includes("@")) {
      setStatus({ submitting: false, success: false, error: "Por favor, introduce un correo electrónico válido." });
      return;
    }

    setStatus({ submitting: true, success: false, error: "" });

    // Simulate lead capture API call
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: ""
      });
      setEmail("");
    }, 1500);
  };

  const pageFontSerif = { fontFamily: "var(--font-dm-serif-display), Georgia, serif" };
  const pageFontSans = { fontFamily: "var(--font-inter), sans-serif" };

  return (
    <div className="selection:bg-[#218362]/20 selection:text-[#218362] min-h-screen pb-16" style={pageFontSans}>
      
      {/* 1. MINIMAL CUSTOM HEADER */}
      <header className="sticky top-0 z-50 bg-[#fdfbf7]/80 backdrop-blur-md border-b border-[#f3ede2] py-4 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="bg-[#218362] text-white p-2 rounded-lg group-hover:bg-[#1fad7e] transition-colors">
              <Compass className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-[#181e26] group-hover:text-[#218362] transition-colors">
                GRIHA SANSAR
              </span>
              <span className="text-[9px] uppercase tracking-[0.15em] text-[#e77e23] font-bold">
                Design. Approve. Build.
              </span>
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://grihasansar.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#5d6b7c] hover:text-[#181e26] flex items-center gap-1 transition-colors"
            >
              grihasansar.com.np
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#181e26] hover:bg-[#2c3540] text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-sm transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#f3ede2]">
        {/* Soft elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0faf7] via-[#fcfaf8] to-[#fbf4ef] -z-10 opacity-70"></div>
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#218362]/5 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-[#e77e23]/5 rounded-full filter blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 bg-[#218362]/10 border border-[#218362]/20 text-[#218362] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#e77e23] fill-[#e77e23]" />
            Guía gratuita para emprendedores
          </span>

          {/* Headline */}
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#181e26] tracking-tight leading-[1.15]" 
            style={pageFontSerif}
          >
            Transforma tus impresiones en Google en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#218362] to-[#22c38e] font-medium">clics que generan clientes</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-[#5d6b7c] max-w-2xl mx-auto leading-relaxed">
            Descubre cómo mejorar tu CTR, optimizar tus snippets y utilizar inteligencia artificial para que tu negocio consiga la visibilidad que merece.
          </p>

          {/* Lead Capture Form */}
          <div className="max-w-md mx-auto pt-4">
            {status1.success ? (
              <div className="bg-[#218362]/5 border border-[#218362]/20 p-6 rounded-2xl text-center space-y-3 shadow-sm animate-fade-in">
                <div className="bg-[#218362] text-white p-3 rounded-full w-fit mx-auto shadow-md">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#181e26]">¡Guía enviada con éxito!</h3>
                <p className="text-xs text-[#5d6b7c]">
                  Hemos enviado la guía digital directamente a tu bandeja de entrada. Revisa tu correo (y tu bandeja de spam si no la ves en unos minutos).
                </p>
              </div>
            ) : (
              <form onSubmit={(e) => handleFormSubmit(e, 1)} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2 bg-white p-2 rounded-xl border border-[#f3ede2] shadow-sm focus-within:ring-2 focus-within:ring-[#218362]/40 focus-within:border-[#218362] transition-all duration-300">
                  <div className="flex items-center gap-2.5 px-3 flex-grow text-[#5d6b7c]">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <input 
                      type="email"
                      required
                      placeholder="tu@email.com"
                      value={email1}
                      onChange={(e) => setEmail1(e.target.value)}
                      className="bg-transparent border-0 outline-none w-full text-sm placeholder-[#a6b1c0] text-[#181e26] py-2.5"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status1.submitting}
                    className="bg-gradient-to-r from-[#218362] to-[#1fad7e] hover:from-[#1fad7e] hover:to-[#218362] text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#218362]/20 hover:shadow-[#218362]/35 disabled:opacity-70 flex-shrink-0 cursor-pointer"
                  >
                    {status1.submitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Quiero la guía</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
                
                {status1.error && (
                  <p className="text-xs text-red-600 text-left px-1 font-medium">{status1.error}</p>
                )}
                
                {/* Form Badges */}
                <div className="flex items-center justify-center gap-6 text-[11px] text-[#5d6b7c] font-medium pt-1">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#218362]" /> 100% gratuita
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#218362]" /> Contenido estratégico
                  </span>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. SECTION 2: EL PROBLEMA REAL */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Column Left (Text Content) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-block bg-[#e77e23]/10 text-[#e77e23] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Aplicable desde el día 1
              </span>
              
              <h2 
                className="text-3xl sm:text-4xl text-[#181e26] font-normal leading-tight"
                style={pageFontSerif}
              >
                Tu web aparece en Google, pero <span className="text-[#e77e23] font-medium">nadie hace clic</span>
              </h2>
              
              <p className="text-sm sm:text-base text-[#5d6b7c] leading-relaxed">
                Miles de emprendedores y negocios online consiguen impresiones en los resultados de búsqueda, pero sus páginas pasan desapercibidas. El problema no siempre es el posicionamiento: es el CTR.
              </p>
              
              <p className="text-sm sm:text-base text-[#5d6b7c] leading-relaxed">
                Títulos genéricos, descripciones sin valor, snippets que no responden a la intención del usuario… Todo esto provoca que los usuarios elijan a la competencia. Resultado: pierdes tráfico cualificado, oportunidades de venta y visibilidad frente a competidores que sí entienden el comportamiento del usuario.
              </p>
            </div>

            {/* Column Right (Stats Cards) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Stat 1 */}
              <div className="bg-[#fdfbf7] border border-[#f3ede2] p-6 rounded-2xl shadow-sm hover:border-[#218362]/40 transition-colors group">
                <div className="flex justify-between items-baseline">
                  <span className="text-4xl font-extrabold text-[#218362]" style={pageFontSerif}>90%</span>
                  <span className="text-[#218362] bg-[#218362]/10 p-1.5 rounded-lg group-hover:scale-110 transition-transform"><TrendingUp className="w-4 h-4" /></span>
                </div>
                <p className="text-xs text-[#5d6b7c] mt-2 font-medium">de los clics se quedan en la primera página de Google</p>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#fdfbf7] border border-[#f3ede2] p-6 rounded-2xl shadow-sm hover:border-[#e77e23]/40 transition-colors group">
                <div className="flex justify-between items-baseline">
                  <span className="text-4xl font-extrabold text-[#e77e23]" style={pageFontSerif}>&lt;3%</span>
                  <span className="text-[#e77e23] bg-[#e77e23]/10 p-1.5 rounded-lg group-hover:scale-110 transition-transform"><Target className="w-4 h-4" /></span>
                </div>
                <p className="text-xs text-[#5d6b7c] mt-2 font-medium">CTR medio en posiciones 5-10 de los resultados orgánicos</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-[#fdfbf7] border border-[#f3ede2] p-6 rounded-2xl shadow-sm hover:border-[#218362]/40 transition-colors group">
                <div className="flex justify-between items-baseline">
                  <span className="text-4xl font-extrabold text-[#218362]" style={pageFontSerif}>2x</span>
                  <span className="text-[#218362] bg-[#218362]/10 p-1.5 rounded-lg group-hover:scale-110 transition-transform"><Check className="w-4 h-4" /></span>
                </div>
                <p className="text-xs text-[#5d6b7c] mt-2 font-medium">más clics directos utilizando snippets optimizados estratégicamente</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. SECTION 3: CUATRO PILARES (QUÉ VAS A DESCUBRIR) */}
      <section className="py-20 bg-[#fdfbf7] border-t border-[#f3ede2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-block bg-[#218362]/10 text-[#218362] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Contenido de la guía
            </span>
            <h2 
              className="text-3xl sm:text-4xl text-[#181e26] font-normal" 
              style={pageFontSerif}
            >
              Qué vas a descubrir
            </h2>
            <p className="text-sm text-[#5d6b7c] leading-relaxed">
              Cuatro pilares estratégicos para transformar la forma en que tus resultados funcionan en Google.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            {/* Card 1 */}
            <div className="bg-white border border-[#f3ede2] p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-[#218362]/35 transition-all group flex gap-5">
              <span className="text-3xl font-extrabold text-[#218362]/20 group-hover:text-[#218362] transition-colors leading-none" style={pageFontSerif}>01</span>
              <div className="space-y-2">
                <h3 className="font-bold text-base text-[#181e26]">Analiza tu CTR real</h3>
                <p className="text-xs text-[#5d6b7c] leading-relaxed">
                  Interpreta los datos que realmente importan para saber si tus resultados funcionan o solo ocupan espacio en la búsqueda.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#f3ede2] p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-[#218362]/35 transition-all group flex gap-5">
              <span className="text-3xl font-extrabold text-[#218362]/20 group-hover:text-[#218362] transition-colors leading-none" style={pageFontSerif}>02</span>
              <div className="space-y-2">
                <h3 className="font-bold text-base text-[#181e26]">Entiende la intención de búsqueda</h3>
                <p className="text-xs text-[#5d6b7c] leading-relaxed">
                  Descubre por qué Google muestra lo que muestra y cómo alinear tu contenido con lo que el usuario necesita resolver.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#f3ede2] p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-[#218362]/35 transition-all group flex gap-5">
              <span className="text-3xl font-extrabold text-[#218362]/20 group-hover:text-[#218362] transition-colors leading-none" style={pageFontSerif}>03</span>
              <div className="space-y-2">
                <h3 className="font-bold text-base text-[#181e26]">Usa IA para optimizar snippets</h3>
                <p className="text-xs text-[#5d6b7c] leading-relaxed">
                  Estrategias prácticas para crear títulos y descripciones magnéticas que capten la atención del usuario sin clickbait.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-[#f3ede2] p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-[#218362]/35 transition-all group flex gap-5">
              <span className="text-3xl font-extrabold text-[#218362]/20 group-hover:text-[#218362] transition-colors leading-none" style={pageFontSerif}>04</span>
              <div className="space-y-2">
                <h3 className="font-bold text-base text-[#181e26]">Genera señales de comportamiento</h3>
                <p className="text-xs text-[#5d6b7c] leading-relaxed">
                  Comprende cómo la interacción del usuario una vez que entra influye en tu posicionamiento y CTR de forma orgánica y natural.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SECTION 4: ¿PARA QUIÉN ES ESTA GUÍA? */}
      <section className="py-20 bg-white border-t border-[#f3ede2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="inline-block bg-[#e77e23]/10 text-[#e77e23] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Público objetivo
            </span>
            <h2 
              className="text-3xl sm:text-4xl text-[#181e26] font-normal" 
              style={pageFontSerif}
            >
              ¿Para quién es esta guía?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Audience 1 */}
            <div className="bg-[#fdfbf7] border border-[#f3ede2] p-6 rounded-2xl text-left hover:border-[#e77e23]/30 transition-all shadow-sm flex flex-col justify-between group">
              <div className="space-y-4">
                <span className="text-3xl block group-hover:scale-110 transition-transform w-fit">🚀</span>
                <h3 className="font-bold text-base text-[#181e26]">Emprendedores</h3>
                <p className="text-xs text-[#5d6b7c] leading-relaxed">
                  Acabas de lanzar tu proyecto online y necesitas visibilidad y tráfico cualificado desde el primer día sin presupuestos masivos.
                </p>
              </div>
            </div>

            {/* Audience 2 */}
            <div className="bg-[#fdfbf7] border border-[#f3ede2] p-6 rounded-2xl text-left hover:border-[#e77e23]/30 transition-all shadow-sm flex flex-col justify-between group">
              <div className="space-y-4">
                <span className="text-3xl block group-hover:scale-110 transition-transform w-fit">📍</span>
                <h3 className="font-bold text-base text-[#181e26]">Negocios locales</h3>
                <p className="text-xs text-[#5d6b7c] leading-relaxed">
                  Quieres que los clientes de tu zona geográfica te encuentren fácilmente en Google cuando buscan exactamente los servicios que ofreces.
                </p>
              </div>
            </div>

            {/* Audience 3 */}
            <div className="bg-[#fdfbf7] border border-[#f3ede2] p-6 rounded-2xl text-left hover:border-[#e77e23]/30 transition-all shadow-sm flex flex-col justify-between group">
              <div className="space-y-4">
                <span className="text-3xl block group-hover:scale-110 transition-transform w-fit">🛒</span>
                <h3 className="font-bold text-base text-[#181e26]">Ecommerce</h3>
                <p className="text-xs text-[#5d6b7c] leading-relaxed">
                  Necesitas que tus fichas de producto destaquen visualmente entre la marea de competencia en los resultados de búsqueda de Google.
                </p>
              </div>
            </div>

            {/* Audience 4 */}
            <div className="bg-[#fdfbf7] border border-[#f3ede2] p-6 rounded-2xl text-left hover:border-[#e77e23]/30 transition-all shadow-sm flex flex-col justify-between group">
              <div className="space-y-4">
                <span className="text-3xl block group-hover:scale-110 transition-transform w-fit">💼</span>
                <h3 className="font-bold text-base text-[#181e26]">Freelancers y agencias</h3>
                <p className="text-xs text-[#5d6b7c] leading-relaxed">
                  Ofreces servicios y consultoría de visibilidad y quieres aplicar tácticas basadas en datos reales para multiplicar los resultados.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SECTION 5: POR QUÉ CONFIAR */}
      <section className="py-20 bg-[#fdfbf7] border-t border-[#f3ede2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Column Left */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-block bg-[#218362]/10 text-[#218362] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Por qué confiar en esta guía
              </span>
              
              <h2 
                className="text-3xl sm:text-4xl text-[#181e26] font-normal leading-tight"
                style={pageFontSerif}
              >
                Basada en experiencia real, <span className="text-[#218362] font-medium">no en teoría</span>
              </h2>
              
              <p className="text-sm sm:text-base text-[#5d6b7c] leading-relaxed">
                Esta guía nace de experiencia directa trabajando estrategias de CTR y comportamiento de usuario en proyectos reales. Hemos analizado cómo los usuarios interactúan con los resultados de búsqueda y qué marca la diferencia entre un clic y un scroll.
              </p>
              
              <p className="text-sm sm:text-base text-[#5d6b7c] leading-relaxed">
                No encontrarás cifras infladas ni promesas mágicas. Sí encontrarás un enfoque honesto, estratégico y aplicable desde el primer día, pensado para emprendedores que quieren tomar decisiones informadas sobre su visibilidad en Google.
              </p>
            </div>

            {/* Column Right */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Badge item 1 */}
              <div className="flex items-center gap-4 bg-white border border-[#f3ede2] p-5 rounded-2xl shadow-sm">
                <div className="bg-[#218362] text-white p-2.5 rounded-xl">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#181e26]">Enfoque práctico</h4>
                  <p className="text-[11px] text-[#5d6b7c] mt-0.5">Tácticas directas y listas para aplicar.</p>
                </div>
              </div>

              {/* Badge item 2 */}
              <div className="flex items-center gap-4 bg-white border border-[#f3ede2] p-5 rounded-2xl shadow-sm">
                <div className="bg-[#218362] text-white p-2.5 rounded-xl">
                  <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#181e26]">Sin humo</h4>
                  <p className="text-[11px] text-[#5d6b7c] mt-0.5">Basado en datos de comportamiento real de usuarios.</p>
                </div>
              </div>

              {/* Badge item 3 */}
              <div className="flex items-center gap-4 bg-white border border-[#f3ede2] p-5 rounded-2xl shadow-sm">
                <div className="bg-[#218362] text-white p-2.5 rounded-xl">
                  <TrendingUp className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#181e26]">Resultados medibles</h4>
                  <p className="text-[11px] text-[#5d6b7c] mt-0.5">Evalúa tu crecimiento mediante analítica de Google.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. SECTION 6: FINAL CTA FORM */}
      <section className="py-16 md:py-24 bg-white border-t border-b border-[#f3ede2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[#fdfbf7] border border-[#f3ede2] p-8 md:p-12 rounded-3xl text-center space-y-6 shadow-sm relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#218362]/5 rounded-full filter blur-xl"></div>
            
            <h2 
              className="text-3xl md:text-4xl text-[#181e26] font-normal" 
              style={pageFontSerif}
            >
              Recibe la guía ahora
            </h2>
            
            <p className="text-sm text-[#5d6b7c] max-w-lg mx-auto leading-relaxed">
              Introduce tu email y te enviaremos la guía directamente a tu bandeja de entrada. Solo contenido que te ayudará a mejorar tu visibilidad en Google.
            </p>

            {/* Email form 2 */}
            <div className="max-w-md mx-auto pt-2">
              {status2.success ? (
                <div className="bg-[#218362]/5 border border-[#218362]/20 p-6 rounded-2xl text-center space-y-3">
                  <div className="bg-[#218362] text-white p-2.5 rounded-full w-fit mx-auto shadow-md">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="text-base font-bold text-[#181e26]">¡Registro Completado!</h4>
                  <p className="text-xs text-[#5d6b7c]">
                    En breve recibirás un email con el acceso a la guía de marketing. ¡Gracias por confiar en nosotros!
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => handleFormSubmit(e, 2)} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2 bg-white p-2 rounded-xl border border-[#f3ede2] shadow-inner focus-within:ring-2 focus-within:ring-[#218362]/40 focus-within:border-[#218362] transition-all duration-300">
                    <div className="flex items-center gap-2.5 px-3 flex-grow text-[#5d6b7c]">
                      <Mail className="w-5 h-5 flex-shrink-0" />
                      <input 
                        type="email"
                        required
                        placeholder="tu@email.com"
                        value={email2}
                        onChange={(e) => setEmail2(e.target.value)}
                        className="bg-transparent border-0 outline-none w-full text-sm placeholder-[#a6b1c0] text-[#181e26] py-2.5"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status2.submitting}
                      className="bg-gradient-to-r from-[#218362] to-[#1fad7e] hover:from-[#1fad7e] hover:to-[#218362] text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#218362]/20 flex-shrink-0 cursor-pointer"
                    >
                      {status2.submitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <span>Enviar guía</span>
                      )}
                    </button>
                  </div>
                  
                  {status2.error && (
                    <p className="text-xs text-red-600 text-left px-1 font-medium">{status2.error}</p>
                  )}
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="pt-12 text-center space-y-4">
        <p className="text-xs text-[#a6b1c0] font-medium leading-relaxed">
          © 2026 · Todos los derechos reservados · Guía estratégica para mejorar tu visibilidad en Google
        </p>
        
        <div className="flex items-center justify-center gap-4 text-xs font-semibold text-[#5d6b7c]">
          <Link href="/" className="hover:text-[#218362] transition-colors">
            Inicio Griha Sansar
          </Link>
          <span className="text-[#f3ede2]">•</span>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#218362] flex items-center gap-1 transition-colors">
            Código en GitHub <Github className="w-3 h-3" />
          </a>
        </div>
      </footer>

    </div>
  );
}
