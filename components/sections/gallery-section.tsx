"use client";

import React from "react";
import { companyConfig } from "@/data/company";
import Image from "next/image";

export const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-18 pb-24 bg-[#f4f1ea]">
      <div className="w-[min(1240px,92%)] mx-auto">
        <span className="eyebrow">Gallery</span>
        <h2 className="display text-[clamp(2rem,4vw,3.2rem)] mb-12 text-[#131311]">
         Life at SV
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {companyConfig.gallery.map((item) => (
    <div
      key={item.title}
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
    >
      <Image
        src={item.imgUrl}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 p-5 z-10">
        <p className="text-xs uppercase tracking-widest text-white/70">
          {item.label}
        </p>
        <h3 className="text-lg font-semibold text-white">
          {item.title}
        </h3>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};
