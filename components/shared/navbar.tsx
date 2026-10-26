"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Solutions", href: "/#solutions" },
    { name: "Industries", href: "/#industries" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "Tech Stack", href: "/#tech-stack" },
    { name: "About", href: "/#about" },
    { name: "Careers", href: "/#careers" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-blue-950/20 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0943c2] to-[#00F0FF] p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950 font-heading font-black text-cyan-400 text-lg tracking-tighter">
              SV
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-white tracking-tight leading-none group-hover:text-cyan-300 transition-colors">
              SV TECHNOLOGIES
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase leading-none mt-1">
              Pvt. Ltd. • SaaS & AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-xs font-semibold rounded-lg transition-colors hover:text-cyan-300 hover:bg-slate-800/50",
                  isActive
                    ? "text-cyan-400 bg-slate-800/60 font-bold"
                    : "text-slate-300"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenConsultation}
            className="text-xs font-semibold gap-1.5"
          >
            <PhoneCall className="h-3.5 w-3.5 text-cyan-400" />
            Schedule Consultation
          </Button>

          <Button
            variant="cyan"
            size="sm"
            asChild
            className="text-xs font-bold gap-1 shadow-md shadow-cyan-500/20"
          >
            <Link href="/#contact">
              Get Started <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl p-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-900 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronDown className="h-4 w-4 text-slate-600 -rotate-90" />
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation?.();
                }}
                className="w-full justify-center h-12 text-sm font-semibold"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="cyan"
                asChild
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center h-12 text-sm font-bold"
              >
                <Link href="/#contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
