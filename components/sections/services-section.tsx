"use client";

import React from "react";
import Link from "next/link";
import { servicesList } from "@/data/services";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-8 z-9 bg-[#f4f1ea] sm:py-10">
      <div className="w-[min(1240px,92%)] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16">
        {/* Sticky Left Column */}
        <div className="lg:sticky lg:top-28 align-self-start">
          <span className="eyebrow">What we do</span>
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-[#131311]">
            Capabilities, end to end.
          </h2>
          <p className="text-[#6d6a61] my-4 mb-7 max-w-[340px] text-base">
            From the first sketch to launch day and beyond — one team for your entire product journey.
          </p>
        </div>

        {/* Services List Rows */}
        <div className="flex flex-col">
          {servicesList.map((service) => (
            <Link
              key={service.num}
              href="#contact"
              className="group grid grid-cols-[48px_1fr_auto] sm:grid-cols-[56px_1fr_auto] items-center gap-4 sm:gap-5 py-7 px-2 sm:px-3 border-b border-[#131311]/15 first:border-t hover:bg-white hover:px-5 transition-all duration-250 rounded-lg no-underline text-[#131311]"
            >
              <span className="font-heading text-[#6d6a61] text-sm sm:text-base">
                {service.num}
              </span>
              <div>
                <h3 className="font-heading text-lg sm:text-2xl font-semibold text-[#131311]">
                  {service.title}
                </h3>
                <small className="block text-[#6d6a61] text-xs sm:text-sm font-normal mt-0.5">
                  {service.subtitle}
                </small>
              </div>
              <span className="text-xl sm:text-2xl transition-transform duration-250 group-hover:translate-x-2 group-hover:text-[#0943c2]">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
