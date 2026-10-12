"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/SVTechnologies-2.png";
import { companyConfig } from "@/data/company";

interface HeaderProps {
  onOpenModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4.5 ${
        scrolled
          ? "bg-[#f4f1ea]/90 backdrop-blur-md border-b border-[#131311]/15 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-[min(1240px,92%)] mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-heading font-bold text-lg text-[#131311] no-underline flex items-center gap-2.5"
          >
            <Image
              src={logo}
              alt="SV Technologies Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span>SV TECHNOLOGIES</span>
          </a>

          {/* Nav Links */}
          <ul
            className={`flex list-none gap-8 transition-transform duration-300 max-md:fixed max-md:top-[64px] max-md:left-0 max-md:right-0 max-md:bg-[#f4f1ea] max-md:flex-col max-md:p-7 max-md:gap-5 max-md:border-b max-md:border-[#131311]/15 ${
              mobileOpen ? "max-md:translate-y-0" : "max-md:-translate-y-[160%]"
            }`}
          >
            {[
              { name: "Services", href: "#services" },
              // { name: "Work", href: "#work" },
              { name: "Studio", href: "#gallery" },
              { name: "Team", href: "#team" },
              // { name: "Careers", href: "#careers" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="no-underline color-[#131311] text-sm font-medium relative group hover:text-[#0943c2] transition-colors"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0943c2] transition-all duration-250 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            {/* <a
              href="#contact"
              onClick={onOpenModal}
              className="pill hidden sm:inline-block cursor-pointer"
            >
              Start a project ↗
            </a> */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden bg-transparent border-none text-2xl cursor-pointer text-[#131311] p-1"
              aria-label="Menu"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
