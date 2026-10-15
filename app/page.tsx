"use client";

import React from "react";
import { Header } from "@/components/shared/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ProcessSection } from "@/components/sections/process-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { TeamSection } from "@/components/sections/team-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/shared/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#131311] flex flex-col font-sans">
      {/* Navigation Header */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <GallerySection />
        <TeamSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
