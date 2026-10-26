"use client";

import React from "react";
import Link from "next/link";
import { jobRowsList } from "@/data/careers";
import { companyConfig } from "@/data/company";

export const CareersSection: React.FC = () => {
  return (
    <section className="bg-[#131311] text-[#f4f1ea] py-28" id="careers">
      <div className="w-[min(1240px,92%)] mx-auto">
        <span className="eyebrow text-[#9a978d] before:bg-[#0943c2]">
          Careers
        </span>
        
        <h2 className="display text-[clamp(2rem,4.5vw,3.6rem)] mb-12 text-white">
          Build your craft <span className="serif-it text-[#0943c2]">with us.</span>
        </h2>

        <div className="flex flex-col">
          {jobRowsList.map((job) => (
            <Link
              key={job.title}
              href="#contact"
              className="group grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_auto] gap-6 items-center py-7 border-t border-[#f4f1ea]/15 last-of-type:border-b no-underline text-[#f4f1ea] hover:pl-3.5 transition-all duration-250"
            >
              <h3 className="font-heading text-xl sm:text-2xl font-semibold group-hover:text-[#0943c2] transition-colors">
                {job.title}
              </h3>
              <span className="hidden md:block text-xs sm:text-sm text-[#9a978d] whitespace-nowrap">
                {job.meta}
              </span>
              <span className="text-xl text-[#9a978d] group-hover:text-[#0943c2] group-hover:translate-x-1.5 transition-all duration-250">
                →
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-[#9a978d] text-sm">
          Dont see your role? Send your CV anyway —{" "}
          <a
            href={`mailto:${companyConfig.contact.careersEmail}`}
            className="text-[#0943c2] hover:underline"
          >
            {companyConfig.contact.careersEmail}
          </a>
        </p>
      </div>
    </section>
  );
};
