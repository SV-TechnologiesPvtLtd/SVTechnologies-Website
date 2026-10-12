"use client";

import React from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#131311] text-[#9a978d] pt-24 pb-8 overflow-hidden">
      <div className="w-[min(1240px,92%)] mx-auto">
        {/* Sitemap Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h5 className="text-[#f4f1ea] font-heading text-xs font-bold uppercase tracking-[0.12em] mb-4">
              Sitemap
            </h5>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="#services" className="hover:text-[#0943c2] transition-colors">
                Services
              </Link>
              <Link href="#work" className="hover:text-[#0943c2] transition-colors">
                Work
              </Link>
              <Link href="#gallery" className="hover:text-[#0943c2] transition-colors">
                Gallery
              </Link>
            </div>
          </div>

          <div>
            <h5 className="text-[#f4f1ea] font-heading text-xs font-bold uppercase tracking-[0.12em] mb-4">
              Company
            </h5>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="#team" className="hover:text-[#0943c2] transition-colors">
                Team
              </Link>
              <Link href="#careers" className="hover:text-[#0943c2] transition-colors">
                Careers
              </Link>
              <Link href="#contact" className="hover:text-[#0943c2] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h5 className="text-[#f4f1ea] font-heading text-xs font-bold uppercase tracking-[0.12em] mb-4">
              Services
            </h5>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="#services" className="hover:text-[#0943c2] transition-colors">
                Web Development
              </Link>
              <Link href="#services" className="hover:text-[#0943c2] transition-colors">
                App Development
              </Link>
              <Link href="#services" className="hover:text-[#0943c2] transition-colors">
                POS Systems
              </Link>
              <Link href="#services" className="hover:text-[#0943c2] transition-colors">
                E-commerce
              </Link>
            </div>
          </div>

          <div>
            <h5 className="text-[#f4f1ea] font-heading text-xs font-bold uppercase tracking-[0.12em] mb-4">
              Reach us
            </h5>
            <div className="flex flex-col space-y-2 text-sm">
              <a href={`mailto:${companyConfig.contact.email}`} className="hover:text-[#0943c2] transition-colors">
                {companyConfig.contact.email}
              </a>
              <a href={`tel:${companyConfig.contact.phone}`} className="hover:text-[#0943c2] transition-colors">
                {companyConfig.contact.phone}
              </a>
              <a
                href={companyConfig.contact.mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0943c2] transition-colors"
              >
                Dillibazar, Kathmandu ↗
              </a>
            </div>
          </div>
        </div>

        {/* Big Watermark Word */}
        <div className="font-heading font-bold text-[clamp(3rem,11vw,10rem)] leading-none tracking-tighter text-[#f4f1ea]/[0.08] whitespace-nowrap text-center select-none">
          SV TECHNOLOGIES
        </div>

        {/* Foot Bottom */}
        <div className="flex justify-between items-center pt-7 border-t border-[#f4f1ea]/10 mt-10 text-xs text-[#9a978d] flex-wrap gap-2">
          <span>© {new Date().getFullYear()} SV Technologies Pvt. Ltd. All rights reserved.</span>
          <span>Based in Nepal. Building for the world.</span>
        </div>
      </div>
    </footer>
  );
};
