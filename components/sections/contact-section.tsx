"use client";

import React, { useState } from "react";
import { companyConfig } from "@/data/company";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#1d1d1a] text-[#f4f1ea] py-28" id="contact">
      <div className="w-[min(1240px,92%)] mx-auto">
       
        
        <h2 className="display text-[clamp(2rem,5vw,4rem)] max-w-[15ch] text-white">
          Let's build something <span className="serif-it text-secondary">great</span> together.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-18 mt-16">
          {/* Left Column Contact Details */}
          <div>
            <div className="flex justify-between gap-5 py-5 border-b border-[#f4f1ea]/15 text-sm sm:text-base">
              <span className="text-[#9a978d]">Visit</span>
              <div className="text-right">
                Dillibazar, Kathmandu 44600<br />Bagmati, Nepal
              </div>
            </div>

            <div className="flex justify-between gap-5 py-5 border-b border-[#f4f1ea]/15 text-sm sm:text-base">
              <span className="text-[#9a978d]">Call</span>
              <div className="text-right">
                <a href={`tel:${companyConfig.contact.phone}`} className="text-[#f4f1ea] hover:text-[#0943c2] transition-colors">
                  {companyConfig.contact.phone}
                </a>
                <br />
                <a href={`tel:${companyConfig.contact.mobilePhone}`} className="text-[#f4f1ea] hover:text-[#0943c2] transition-colors">
                  {companyConfig.contact.mobilePhone}
                </a>
              </div>
            </div>

            <div className="flex justify-between gap-5 py-5 border-b border-[#f4f1ea]/15 text-sm sm:text-base">
              <span className="text-[#9a978d]">Write</span>
              <a href={`mailto:${companyConfig.contact.email}`} className="text-[#f4f1ea] hover:text-[#0943c2] transition-colors">
                {companyConfig.contact.email}
              </a>
            </div>

            <div className="flex justify-between gap-5 py-5 border-b border-[#f4f1ea]/15 text-sm sm:text-base">
              <span className="text-[#9a978d]">Hours</span>
              <div className="text-right">
                {companyConfig.contact.hours}
              </div>
            </div>

            <div className="mt-9 flex gap-3 flex-wrap">
              <a
                href={companyConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="pill border border-[#f4f1ea]/25 bg-transparent text-[#f4f1ea] hover:bg-[#0943c2] hover:border-[#0943c2]"
              >
                Facebook ↗
              </a>
              <a
                href={companyConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="pill border border-[#f4f1ea]/25 bg-transparent text-[#f4f1ea] hover:bg-[#0943c2] hover:border-[#0943c2]"
              >
                LinkedIn ↗
              </a>
              <a
                href={companyConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="pill border border-[#f4f1ea]/25 bg-transparent text-[#f4f1ea] hover:bg-[#0943c2] hover:border-[#0943c2]"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          {/* Right Column Form */}
          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#131311] border border-[#0943c2]/40 text-center space-y-4 my-auto">
              <div className="w-14 h-14 rounded-full bg-[#0943c2]/20 text-[#0943c2] flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                Message Received!
              </h3>
              <p className="text-sm text-[#9a978d]">
                Thank you for reaching out to SV Technologies. We will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-send mt-4"
              >
                Send Another Message ↗
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.12em] text-[#9a978d] mb-2 font-semibold">
                  Your name *
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  className="w-full bg-transparent border-b border-[#f4f1ea]/30 text-[#f4f1ea] py-3 px-0.5 text-base focus:outline-none focus:border-[#0943c2] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.12em] text-[#9a978d] mb-2 font-semibold">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full bg-transparent border-b border-[#f4f1ea]/30 text-[#f4f1ea] py-3 px-0.5 text-base focus:outline-none focus:border-[#0943c2] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.12em] text-[#9a978d] mb-2 font-semibold">
                  What do you need?
                </label>
                <div className="relative">
                  <select className="w-full appearance-none rounded-xl border-b border-[#f4f1ea]/20 bg-[#000] px-4 py-3 pr-11 text-base text-[#f4f1ea] shadow-sm transition-colors focus:border-[#0943c2] focus:outline-none focus:ring-2 focus:ring-[#0943c2]/30">
                    <option className="bg-[#131311] text-[#f4f1ea]">Website Development</option>
                    <option className="bg-[#131311] text-[#f4f1ea]">Mobile App Development</option>
                    <option className="bg-[#131311] text-[#f4f1ea]">POS / Business System</option>
                    <option className="bg-[#131311] text-[#f4f1ea]">E-commerce Store</option>
                    <option className="bg-[#131311] text-[#f4f1ea]">UI/UX Design</option>
                    <option className="bg-[#131311] text-[#f4f1ea]">Cloud, Hosting &amp; Support</option>
                    <option className="bg-[#131311] text-[#f4f1ea]">Something else</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#9a978d]">
                    ▾
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.12em] text-[#9a978d] mb-2 font-semibold">
                  Tell us about it *
                </label>
                <textarea
                  rows={4}
                  placeholder="A few sentences about your project..."
                  required
                  className="w-full bg-transparent border-b border-[#f4f1ea]/30 text-[#f4f1ea] py-3 px-0.5 text-base focus:outline-none focus:border-[#0943c2] transition-colors resize-y"
                />
              </div>

              <button type="submit" className="btn-send">
                Send message ↗
              </button>
            </form>
          )}
        </div>

        {/* Google Map Section */}
        <div className="mt-20 rounded-2xl overflow-hidden border border-[#f4f1ea]/15">
          <iframe
            src={companyConfig.contact.mapEmbedUrl}
            allowFullScreen
            loading="lazy"
            title="SV Technologies — Dillibazar, Kathmandu"
            className="w-full h-[400px] border-0 block contrast-[1.05]"
          />
        </div>
        <div className="flex justify-between items-center pt-4 px-1 text-white text-sm flex-wrap gap-2">
          <span>SV Technologies — Dillibazar, Kathmandu</span>
          <a
            href={companyConfig.contact.mapQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            Open in Google Maps ↗
          </a>
        </div>
      </div>
    </section>
  );
};
