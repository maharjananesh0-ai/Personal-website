"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Compass, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Architectural Design",
    message: ""
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.message) {
      setStatus({ submitting: false, success: false, error: "Please fill in all required fields (Name, Phone, Message)." });
      return;
    }

    setStatus({ submitting: true, success: false, error: "" });

    // Simulate lead submission API call
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: ""
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "Architectural Design",
        message: ""
      });
    }, 1200);
  };

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
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Get in touch with our civil engineers to discuss municipal Naksa Pass filings, property valuations, or structural designs.
          </p>
        </div>
      </section>

      {/* 2. Contact details and Form Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Contact Information Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-950">Let&apos;s Discuss Your Project</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our corporate headquarters is located at Sohrakhutte, Kathmandu. Drop by our office or reach out via phone, email, or WhatsApp. We offer services across the entire Kathmandu Valley.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 border border-slate-200 p-3.5 rounded-xl shadow-sm text-emerald-600 drop-shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950 text-sm">Our Address</h3>
                    <p className="text-xs text-slate-600 mt-1">Sohrakhutte, Kathmandu, Nepal</p>
                    <span className="text-[11px] text-slate-400 font-semibold block uppercase mt-0.5">Service Area: Kathmandu Valley</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 border border-slate-200 p-3.5 rounded-xl shadow-sm text-emerald-600 drop-shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950 text-sm">Call/WhatsApp</h3>
                    <p className="text-xs text-slate-600 mt-1">Phone: <a href="tel:9849277960" className="hover:underline font-bold">+977-9849277960</a></p>
                    <p className="text-xs text-slate-600">WhatsApp: <a href="https://wa.me/9779849277960" target="_blank" rel="noreferrer" className="hover:underline font-bold">+977-9849277960</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 border border-slate-200 p-3.5 rounded-xl shadow-sm text-emerald-600 drop-shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950 text-sm">Email Address</h3>
                    <p className="text-xs text-slate-600 mt-1"><a href="mailto:grihasansar@gmail.com" className="hover:underline font-bold">grihasansar@gmail.com</a></p>
                    <span className="text-[11px] text-slate-400 font-semibold block uppercase mt-0.5">Inquiries answered in 24 hours</span>
                  </div>
                </div>

              </div>

              {/* Map Placeholder Graphic */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white p-6 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-mono flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-emerald-600 drop-shadow-sm animate-spin-slow" /> OFFICE LOCATION MAP
                  </span>
                  <span className="bg-slate-200 text-slate-700 px-2.5 py-0.5 rounded text-[11px] font-bold">Sohrakhutte</span>
                </div>
                {/* Visual Representation of Map layout */}
                <div className="bg-slate-100 h-64 rounded-xl overflow-hidden relative">
                  <iframe
                    src="https://maps.google.com/maps?q=27%C2%B043'23.3%22N%2085%C2%B018'34.8%22E&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 drop-shadow-sm flex-shrink-0" />
                  <span>Located next to the central bus terminal road, Sohrakhutte.</span>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="font-bold text-slate-950 text-lg">Send an Inquiry</h3>
                  <p className="text-xs text-slate-500 mt-1">Provide your project blueprints details or layout requirements, and our engineers will call you back.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-sm">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-slate-900 placeholder-slate-400"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+977-9849277960"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-slate-900 placeholder-slate-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-slate-900 placeholder-slate-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Required Service</label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-slate-900"
                      >
                        <option value="Architectural Design">Architectural Design</option>
                        <option value="Structural Design">Structural Design</option>
                        <option value="Naksa Pass">Naksa Pass Approval</option>
                        <option value="Layout Approval">Layout Approval</option>
                        <option value="Sampanna Certificate">Sampanna Certificate</option>
                        <option value="Abhilekhikaran">Abhilekhikaran</option>
                        <option value="Property Valuation">Property Valuation</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Construction Supervision">Construction Supervision</option>
                        <option value="Turnkey Construction">Turnkey Construction</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Project Description <span className="text-red-500">*</span></label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your land dimensions, building type (residential/commercial), or interior requirements..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-slate-900 placeholder-slate-400 resize-none"
                      required
                    ></textarea>
                  </div>

                  {status.error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-xs font-medium">
                      {status.error}
                    </div>
                  )}

                  {status.success && (
                    <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-xs font-medium space-y-1">
                      <p className="font-bold text-sm">Thank You!</p>
                      <p>Your inquiry has been successfully sent. Er. Anesh Maharjan will contact you within 24 hours.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full bg-slate-900 text-accent font-bold py-3.5 px-4 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 border border-transparent hover:shadow-lg disabled:opacity-50"
                  >
                    {status.submitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
