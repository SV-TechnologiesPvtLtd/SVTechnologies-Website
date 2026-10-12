"use client";

import React from "react";
import {
  Search,
  Layers,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Circle,
  type LucideIcon,
} from "lucide-react";
import { developmentProcessSteps } from "@/data/process";

// Map the `iconName` strings in the data to actual icons.
const ICONS: Record<string, LucideIcon> = {
  Search,
  Layers,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  ShieldCheck,
};

// ---- Wave geometry (SVG viewBox is 1000 x 200 and renders at 200px tall) ----
const VIEW_W = 1000;
const VIEW_H = 200;
const PEAK_Y = 40;
const TROUGH_Y = 160;

const steps = developmentProcessSteps;
const points = steps.map((_, i) => ({
  x: ((i + 0.5) / steps.length) * VIEW_W,
  y: i % 2 === 0 ? PEAK_Y : TROUGH_Y,
}));

// Smooth S-curve through every node, with a lead-in and lead-out to the edges.
const buildWavePath = () => {
  const first = points[0];
  const last = points[points.length - 1];
  const mid = VIEW_H / 2;

  let d = `M 0 ${mid} C ${first.x / 2} ${mid}, ${first.x / 2} ${first.y}, ${first.x} ${first.y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    const cx = (a.x + b.x) / 2;
    d += ` C ${cx} ${a.y}, ${cx} ${b.y}, ${b.x} ${b.y}`;
  }

  const endMid = (last.x + VIEW_W) / 2;
  d += ` C ${endMid} ${last.y}, ${endMid} ${mid}, ${VIEW_W} ${mid}`;
  return d;
};

const WAVE_PATH = buildWavePath();

const Node: React.FC<{ Icon: LucideIcon }> = ({ Icon }) => (
  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-8 ring-[#f4f1ea] transition-transform duration-300 hover:scale-110">
    <Icon className="h-6 w-6" aria-hidden="true" />
  </div>
);

export const ProcessSection: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-[#f4f1ea]">
      <div className="w-[min(1240px,92%)] mx-auto">
        <span className="eyebrow">From idea to launch</span>

        <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-[#131311] max-w-2xl">
          How We Transform Ideas Into Impact
        </h2>

        {/* ---------- Desktop: wave form ---------- */}
        <div className="relative mt-16 hidden h-[420px] lg:block">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="none"
            className="absolute inset-x-0 top-1/2 h-[200px] w-full -translate-y-1/2"
            fill="none"
            aria-hidden="true"
          >
            {/* soft base wave */}
            <path
              d={WAVE_PATH}
              stroke="currentColor"
              className="text-[var(--cream)]"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />
            {/* flowing dashed wave */}
            <path
              d={WAVE_PATH}
              stroke="currentColor"
              className="text-primary"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 12"
              vectorEffect="non-scaling-stroke"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-36"
                dur="2s"
                repeatCount="indefinite"
              />
            </path>
          </svg>

          <ol>
            {steps.map((step, i) => {
              const Icon = ICONS[step.iconName] ?? Circle;
              const isPeak = i % 2 === 0;
              return (
                <li
                  key={step.stepNumber}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${(points[i].x / VIEW_W) * 100}%`,
                    top: `calc(50% - ${VIEW_H / 2}px + ${points[i].y}px)`,
                  }}
                >
                  <Node Icon={Icon} />

                  <div
                    className={`absolute left-1/2 w-44 -translate-x-1/2 text-center ${
                      isPeak ? "bottom-full mb-4" : "top-full mt-4"
                    }`}
                  >
                    <p className="font-heading text-xs sm:text-sm uppercase tracking-widest text-[#6d6a61]">
                      {step.phase}
                    </p>
                    <h3 className="mt-1 font-heading text-lg font-semibold leading-snug text-[#131311]">
                      {step.title}
                    </h3>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* ---------- Mobile / tablet: simple vertical flow ---------- */}
        <ol className="relative mt-12 space-y-8 lg:hidden">
          <span
            aria-hidden="true"
            className="absolute left-7 top-0 h-full w-px bg-gradient-to-b from-[#131311] via-[#6d6a61]/50 to-transparent"
          />
          {steps.map((step) => {
            const Icon = ICONS[step.iconName] ?? Circle;
            return (
              <li
                key={step.stepNumber}
                className="relative flex items-center gap-5"
              >
                <div className="relative z-10 shrink-0">
                  <Node Icon={Icon} />
                </div>
                <div>
                  <p className="font-heading text-xs sm:text-sm uppercase tracking-widest text-[#6d6a61]">
                    {step.phase}
                  </p>
                  <h3 className="font-heading text-lg sm:text-2xl font-semibold text-[#131311]">
                    {step.title}
                  </h3>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};