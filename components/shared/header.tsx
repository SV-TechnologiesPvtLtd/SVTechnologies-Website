"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/app/assets/SVTechnologies-2.png";

interface HeaderProps {
  onOpenModal?: () => void;
}

interface NavItem {
  name: string;
  id?: string;
  href: string;
  isExternalRoute?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProduct = pathname.startsWith("/product");

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Track scroll for frosted navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to highlight active section on the home page
  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
      return;
    }

    const sectionIds = ["services", "work", "gallery", "team", "contact"];
    const observers: IntersectionObserver[] = [];

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const obs = new IntersectionObserver(handleIntersect, {
          root: null,
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0,
        });
        obs.observe(el);
        observers.push(obs);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [isHome]);

  // Handle cross-page hash scroll when arriving from another page (e.g. from /product to /#services)
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const navItems: NavItem[] = [
    { name: "Services", id: "services", href: isHome ? "#services" : "/#services" },
    { name: "Work", id: "work", href: isHome ? "#work" : "/#work" },
    // { name: "Studio", id: "gallery", href: isHome ? "#gallery" : "/#gallery" },
    { name: "Team", id: "team", href: isHome ? "#team" : "/#team" },
    // { name: "Contact", id: "contact", href: isHome ? "#contact" : "/#contact" },
    { name: "Product", href: "/product", isExternalRoute: true },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    setMobileOpen(false);

    if (item.isExternalRoute) {
      return; // Standard Next.js SPA Link navigation
    }

    if (isHome && item.id) {
      e.preventDefault();
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${item.id}`);
        setActiveSection(item.id);
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileOpen(false);
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
      setActiveSection("");
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f4f1ea]/90 backdrop-blur-md border-b border-[#131311]/15 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-[min(1240px,92%)] mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="font-heading font-bold text-lg text-[#131311] no-underline flex items-center gap-2.5 group"
          >
            <Image
              src={logo}
              alt="SV Technologies Logo"
              width={38}
              height={38}
              className="rounded-full transition-transform duration-300 group-hover:scale-105"
            />
            <span className="tracking-tight">SV TECHNOLOGIES</span>
          </Link>

          {/* Nav Links */}
          <ul
            className={`flex list-none items-center gap-7 transition-all duration-300 max-md:fixed max-md:top-[64px] max-md:left-0 max-md:right-0 max-md:bg-[#f4f1ea] max-md:flex-col max-md:p-7 max-md:gap-5 max-md:border-b max-md:border-[#131311]/15 max-md:shadow-xl ${
              mobileOpen
                ? "max-md:translate-y-0 max-md:opacity-100 pointer-events-auto"
                : "max-md:-translate-y-[160%] max-md:opacity-0 max-md:pointer-events-none md:pointer-events-auto"
            }`}
          >
            {navItems.map((item) => {
              const isItemActive = item.isExternalRoute
                ? isProduct
                : isHome && activeSection === item.id;

              return (
                <li key={item.name} className="relative">
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`no-underline text-sm font-medium transition-colors relative py-1 inline-flex items-center gap-1.5 ${
                      isItemActive
                        ? "text-[#0943c2] font-semibold"
                        : "text-[#131311] hover:text-[#0943c2]"
                    }`}
                  >
                    {item.name}
                    {item.isExternalRoute && (
                      <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded-full bg-[#0943c2]/10 text-[#0943c2] tracking-wide">
                        App
                      </span>
                    )}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[#0943c2] transition-all duration-250 ${
                        isItemActive ? "w-full" : "w-0 hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <Link
              href={isHome ? "#contact" : "/#contact"}
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#131311]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#131311] transition-all duration-300 hover:bg-[#131311] hover:text-white"
            >
              Get in touch ↗
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden bg-transparent border-none text-2xl cursor-pointer text-[#131311] p-1.5 rounded-lg hover:bg-black/5"
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
