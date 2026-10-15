"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsList } from "@/data/projects";

export const ProjectsSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const current = projectsList[active];

  return (
    <section id="work" className="bg-[#f4f1ea] py-20">
      <div className="mx-auto w-[min(1240px,92%)]">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Our work</span>
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-[#131311]">
              Software we&apos;ve shipped.
            </h2>
          </div>
          <div className="md:max-w-[340px]">
            <p className="mb-5 text-base text-[#6d6a61]">
              Websites and products built by SV Technologies for real
              businesses.
            </p>
            {/* <Link href="#contact" className="arrow-link">
              Start your project <span className="arr">→</span>
            </Link> */}
          </div>
        </div>

        {/* Desktop: index list + sticky preview */}
        <div className="hidden gap-14 lg:grid lg:grid-cols-[1.15fr_1fr]">
          <ul className="border-t border-[#131311]/15">
            {projectsList.map((project, i) => {
              const isActive = i === active;
              return (
                <li key={project.num} className="border-b border-[#131311]/15">
                  <button
                    type="button"
                    aria-current={isActive}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group flex w-full items-center gap-6 py-7 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#0943c2]"
                  >
                    <span
                      className={`font-heading w-10 text-sm transition-colors duration-300 ${
                        isActive ? "text-[#0943c2]" : "text-[#6d6a61]"
                      }`}
                    >
                      {project.num}
                    </span>

                    <span
                      className={`font-heading flex-1 text-3xl font-semibold transition-all duration-300 xl:text-4xl ${
                        isActive
                          ? "translate-x-2 text-[#131311]"
                          : "text-[#131311]/30 group-hover:text-[#131311]/60"
                      }`}
                    >
                      {project.title}
                    </span>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-300 ${
                        isActive
                          ? "border-[#131311] text-[#131311]"
                          : "border-[#131311]/15 text-[#6d6a61]"
                      }`}
                    >
                      {project.category}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`text-2xl transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-2 opacity-0"
                      }`}
                    >
                      →
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Preview card */}
          <div className="relative">
            <div className="sticky top-28 overflow-hidden rounded-3xl bg-[#131311] p-6 text-white">
              <div
                key={current.num}
                className="animate-[fadeIn_0.4s_ease-out]"
              >
                <div className="relative mb-6 aspect-[5/3] overflow-hidden rounded-2xl bg-white/5">
                  {current.imgUrl ? (
                    <Image
                      src={current.imgUrl}
                      alt={`${current.title} thumbnail`}
                      fill
                      sizes="(min-width: 1024px) 480px, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <span className="font-heading absolute inset-0 flex items-center justify-center text-[9rem] font-semibold text-white/10">
                      {current.num}
                    </span>
                  )}
                </div>

                <p className="text-xs uppercase tracking-widest text-white/50">
                  {current.category}
                </p>
                <h3 className="font-heading mt-2 text-3xl font-semibold">
                  {current.title}
                </h3>
                <p className="mt-3 max-w-md text-sm text-white/65">
                  {current.subtitle}
                </p>

                {current.internalUrl ? (
                  <Link
                    href={current.internalUrl}
                    className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#0943c2] px-5 py-3 text-sm font-medium text-white no-underline transition-all duration-300 hover:bg-[#08369b] hover:shadow-lg"
                  >
                    Explore product <span aria-hidden="true">→</span>
                  </Link>
                ) : current.url ? (
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#131311] no-underline transition-colors duration-300 hover:bg-[#0943c2] hover:text-white"
                  >
                    Visit website <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / tablet: stacked cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:hidden">
          {projectsList.map((project) => (
            <article
              key={project.num}
              className="flex flex-col overflow-hidden rounded-3xl border border-[#131311]/10 bg-white"
            >
              <div className="relative aspect-[5/3] bg-[#131311]">
                {project.imgUrl ? (
                  <Image
                    src={project.imgUrl}
                    alt={`${project.title} thumbnail`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <span className="font-heading absolute inset-0 flex items-center justify-center text-7xl font-semibold text-white/10">
                    {project.num}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-heading text-sm text-[#0943c2]">
                    {project.num}
                  </span>
                  <span className="rounded-full border border-[#131311]/15 px-3 py-1 text-xs font-medium text-[#6d6a61]">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-[#131311]">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-[#6d6a61]">
                  {project.subtitle}
                </p>
                {project.internalUrl ? (
                  <Link
                    href={project.internalUrl}
                    className="arrow-link mt-5 font-semibold text-[#0943c2]"
                  >
                    Explore product <span className="arr">→</span>
                  </Link>
                ) : project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="arrow-link mt-5"
                  >
                    Visit website <span className="arr">↗</span>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};