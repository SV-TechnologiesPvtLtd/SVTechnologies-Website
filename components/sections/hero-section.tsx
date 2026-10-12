"use client";

import React from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import Image from "next/image";

const MARQUEE_ITEMS = [
  "Website Development",
  "Mobile Apps",
  "POS Systems",
  "E-commerce",
  "UI/UX Design",
  "Cloud & Hosting",
  "Custom Software",
];

export const HeroSection: React.FC = () => {
  // Split the headline into words so each one can animate in.
  const headlineWords = companyConfig.heroHeadline.split(" ").filter(Boolean);
  const italicWords = companyConfig.heroItalic.split(" ").filter(Boolean);
  let wordIndex = 0;

  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-36 pb-0"
      id="home"
    >
      {/* ---------- Background: grid + drifting glows ----------
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#131311_1px,transparent_1px),linear-gradient(to_bottom,#131311_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.045] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="blob absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-[#0943c2]/20 blur-[110px]" />
        <div className="blob absolute -left-32 bottom-20 h-[360px] w-[360px] rounded-full bg-[#e8b04a]/20 blur-[110px] [animation-delay:-6s]" />
      </div> */}

      <div className="relative z-10 mx-auto w-[min(1240px,92%)]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          {/* ---------- Left: copy ---------- */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-2 backdrop-blur">
              <span className="eyebrow !m-0">{companyConfig.locationTagline}</span>
            </div>

            <h1 className="display max-w-[16ch] text-[clamp(2.6rem,6vw,5.6rem)] text-[#131311]">
              {headlineWords.map((word) => (
                <React.Fragment key={`${word}-${wordIndex}`}>
                  <span className="word" style={{ ["--i" as string]: wordIndex++ }}>
                    {word}
                  </span>{" "}
                </React.Fragment>
              ))}
              {italicWords.map((word) => (
                <React.Fragment key={`it-${word}-${wordIndex}`}>
                  <span
                    className="word serif-it text-[1.05em] text-[#0943c2]"
                    style={{ ["--i" as string]: wordIndex++ }}
                  >
                    {word}
                  </span>{" "}
                </React.Fragment>
              ))}
            </h1>

            <p className="mt-8 max-w-[460px] text-base text-[#6d6a61] sm:text-lg">
              {companyConfig.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#131311] px-7 py-4 text-sm font-medium text-white no-underline transition-all duration-300 hover:bg-[#0943c2] hover:shadow-[0_12px_30px_-8px_rgba(9,67,194,0.6)]"
              >
                Start a project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
             
            </div>
          </div>

          {/* ---------- Right: floating product cards ---------- */}
          <div
            aria-hidden="true"
            className="relative hidden h-[460px] lg:block"
          >
            {/* Chat → invoice */}
            <div className="float-a absolute right-0 top-0 w-[290px] rounded-2xl border border-white/60 bg-white/75 p-4 shadow-[0_24px_60px_-20px_rgba(19,19,17,0.25)] backdrop-blur-xl">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-heading text-xs font-semibold text-[#131311]">
                  Invoice Studio
                </span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                  Sent
                </span>
              </div>
              <div className="space-y-2 text-[13px] leading-snug">
                <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-[#131311] px-3 py-2 text-white">
                  Invoice for 15-days Pattaya Trip
                </p>
                <p className="w-fit max-w-[90%] rounded-2xl rounded-bl-sm bg-[#f4f1ea] px-3 py-2 text-[#131311]">
                  Done. Your invoice is ready to share.
                </p>
              </div>
            </div>

            {/* POS ticket */}
            <div className="float-b absolute left-0 top-[170px] w-[230px] rounded-2xl bg-[#131311] p-5 text-white shadow-[0_24px_60px_-20px_rgba(19,19,17,0.5)]">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-heading text-xs font-semibold text-white/70">
                  POS · Order
                </span>
                <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] text-white">
                  Paid
                </span>
              </div>
              <div className="space-y-2.5">
                {[70, 55, 40].map((w, i) => (
                  <div key={i} className="flex items-center justify-between gap-4">
                    <span
                      className="h-2 rounded-full bg-white/25"
                      style={{ width: `${w}%` }}
                    />
                    <span className="h-2 w-8 rounded-full bg-white/15" />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-[11px] text-white/50">Total</span>
                <span className="h-2.5 w-14 rounded-full bg-[#0943c2]" />
              </div>
            </div>

            {/* Website preview */}
            <div className="float-c absolute bottom-0 right-6 w-[270px] overflow-hidden rounded-2xl border border-[#131311]/10 bg-white shadow-[0_24px_60px_-20px_rgba(19,19,17,0.25)]">
              <div className="flex items-center gap-1.5 border-b border-[#131311]/10 px-3 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#131311]/15" />
                <span className="h-2 w-2 rounded-full bg-[#131311]/15" />
                <span className="h-2 w-2 rounded-full bg-[#131311]/15" />
                <span className="ml-2 h-2 flex-1 rounded-full bg-[#f4f1ea]" />
              </div>
              <div className="space-y-2.5 p-4">
                <span>
                  <Image
                    src="/projects/NepaliCoffeeWebsite.png"
                    alt="Our Nepali Coffee website preview"
                    width={250}
                    height={500}
                    className="h-auto w-full rounded-lg object-cover"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* ---------- Marquee ---------- */}
      <div
        className="relative z-100 my-20 -rotate-[1.2deg] scale-[1.02] overflow-hidden bg-[#131311] py-4 text-[#f4f1ea] shadow-md"
        aria-hidden="true"
      >
        <div className="animate-marquee flex gap-12 whitespace-nowrap font-heading text-base font-medium">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex items-center gap-12">
              {MARQUEE_ITEMS.map((item) => (
                <React.Fragment key={item}>
                  {item} <i className="not-italic text-[#0943c2]">●</i>
                </React.Fragment>
              ))}
              &nbsp;
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .word {
          display: inline-block;
          opacity: 0;
          animation: rise 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) forwards;
          animation-delay: calc(var(--i) * 70ms + 100ms);
        }
        @keyframes rise {
          from {
            opacity: 0;
            transform: translateY(28px);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        .float-a {
          animation: float 7s ease-in-out infinite;
        }
        .float-b {
          animation: float 9s ease-in-out -2s infinite;
        }
        .float-c {
          animation: float 8s ease-in-out -4s infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-14px);
          }
        }
        .blob {
          animation: drift 14s ease-in-out infinite;
        }
        @keyframes drift {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, -30px) scale(1.15);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .word {
            opacity: 1;
            animation: none;
          }
          .float-a,
          .float-b,
          .float-c,
          .blob {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};