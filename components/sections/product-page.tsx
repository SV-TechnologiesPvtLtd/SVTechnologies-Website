import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../shared/header";
import { Footer } from "../shared/footer";

/**
 * Palette:
 *   ink   #131311   page background
 *   cream #f4f1ea   primary text / invoice paper
 *   mute  #131311   secondary text
 *   blue  #0943c2   accent (links, CTA)
 *   navy  #0d2a5c   app brand (chat bubble, table header)
 *   gold  #f4c542   logo accent, used sparingly
 */

const Mark = ({ className = "h-8 w-8" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <path d="M7 3h13l6 6v16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z" fill="#0d2a5c" stroke="#f4f1ea" strokeWidth="1.2" />
    <path d="M7 23l6-6 4 4 7-8" fill="none" stroke="#f4c542" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="mb-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[#131311]">
    <span className="h-px w-8 bg-[#0943c2]" />
    {children}
  </span>
);

/* ---------- Content ---------- */

const features = [
  {
    n: "01",
    title: "Chat, don't type forms",
    body: "Describe the customer, items and tax in plain language. The assistant turns it into a structured draft in seconds.",
  },
  {
    n: "02",
    title: "Live, editable preview",
    body: "See the finished invoice beside the chat. Click any cell to fix a rate, add an item, or toggle VAT, no re-prompting needed.",
  },
  {
    n: "03",
    title: "Saved to your database",
    body: "Every invoice you save is stored and searchable in the Invoice List, with numbering, totals and amount in words handled for you.",
  },
  {
    n: "04",
    title: "Know who created what",
    body: "Add employees as users and see the invoices each person has generated, so nothing slips through unnoticed.",
  },
];

const steps = [
  { title: "Describe", body: "Type or paste the details, or use Prompt Format for a ready-made template." },
  { title: "Review", body: "Check the draft in the preview. Edit cells directly or ask the assistant to adjust." },
  { title: "Save", body: "One click stores it in the database and adds it to your invoice list." },
];

const team = [
  { name: "Shraddha Dongol", role: "Super Admin", count: 48, total: "NRS 6,42,300" },
  { name: "Aarav Shrestha", role: "Accountant", count: 31, total: "NRS 3,98,750" },
  { name: "Sita Karki", role: "Sales", count: 27, total: "NRS 2,71,400" },
  { name: "Bikash Rai", role: "Sales", count: 19, total: "NRS 1,56,900" },
];

/* ---------- Page ---------- */

export default function InvoiceStudioPage() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#131311] flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section id="top" className="pb-20 pt-28 sm:pt-36">
          <div className="mx-auto w-[min(1240px,92%)]">

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 lg:gap-14">
              <div>
                <Eyebrow>Invoice Studio</Eyebrow>
                <h1 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-semibold leading-[1.05] tracking-tight text-[#131311]">
                  Chat with it.{" "}<br/>
                  <span className="font-serif font-normal italic text-[#0943c2]">Invoice Ready!</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5a574f]">
                  Invoice Studio turns a sentence into a finished, editable invoice.
                  Chat on the left, live preview on the right, everything stored and
                  tracked for your whole team.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="rounded-full bg-[#0943c2] px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-[#08369b] hover:shadow-md"
                  >
                    Request a demo
                  </a>
                  <a
                    href="#how"
                    className="text-sm font-medium text-[#131311] transition-colors hover:text-[#0943c2] flex items-center gap-1.5"
                  >
                    See how it works <span>↓</span>
                  </a>
                </div>

                {/* In-page Anchor Nav Tabs */}
                <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-[#131311]/10 pt-4">
                  <span className="text-xs text-[#6d6a61] mr-1">Jump to:</span>
                  {[
                    { label: "Features", href: "#features" },
                    { label: "How it works", href: "#how" },
                    { label: "Team tracking", href: "#team" },
                    { label: "Request demo", href: "#contact" },
                  ].map((tab) => (
                    <a
                      key={tab.label}
                      href={tab.href}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-white text-[#131311] hover:text-[#0943c2] border border-[#131311]/10 transition-colors shadow-xs"
                    >
                      {tab.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#131311]/10 bg-white p-3 shadow-xl shadow-black/5">
                <Image
                  src="/projects/InvoiceStudio.png"
                  alt="Invoice Studio product preview"
                  width={800}
                  height={400}
                  priority
                  className="h-auto w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24">
          <div className="mx-auto w-[min(1240px,92%)]">
            <Eyebrow>Features</Eyebrow>
            <h2 className="mb-12 max-w-2xl text-[clamp(2rem,4.5vw,3.6rem)] font-semibold leading-tight tracking-tight">
              Everything an invoice needs,{" "}
              <span className="font-serif font-normal italic text-[#0943c2]">nothing it doesn't.</span>
            </h2>

            <div className="flex flex-col">
              {features.map((f) => (
                <div
                  key={f.n}
                  className="group grid gap-3 border-t border-[#131311]/15 py-8 transition-all duration-300 last:border-b hover:pl-3.5 md:grid-cols-[80px_1fr_1.2fr] md:items-baseline md:gap-8"
                >
                  <span className="text-sm text-[#131311]">{f.n}</span>
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-[#0943c2] sm:text-2xl">
                    {f.title}
                  </h3>
                  <p className="leading-relaxed text-[#5a574f]">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-y border-[#131311]/10 py-24 bg-white/40">
          <div className="mx-auto w-[min(1240px,92%)]">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mb-14 text-[clamp(2rem,4.5vw,3.6rem)] font-semibold tracking-tight">
              Three steps. <span className="font-serif font-normal italic text-[#0943c2]">Under a minute.</span>
            </h2>
            <ol className="grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl border border-[#131311]/10 bg-white p-7 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4c542] text-sm font-bold text-[#0d2a5c]">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#5a574f]">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Team tracking */}
        <section id="team" className="py-24">
          <div className="mx-auto grid w-[min(1240px,92%)] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow>Team</Eyebrow>
              <h2 className="text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-tight tracking-tight">
                See who generated{" "}
                <span className="font-serif font-normal italic text-[#0943c2]">every invoice.</span>
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-[#5a574f]">
                Invite employees, give them roles, and follow the invoices each one
                creates. Counts and totals per person live in one User List.
              </p>
              <ul className="mt-6 space-y-3">
                {["Role-based users, from Super Admin to staff", "Per-user invoice count and billed totals", "Full Invoice List with search and status"].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f4c542]" />
                    <span className="text-sm sm:text-base text-[#131311]">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#131311]/10 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-[#131311]/10 px-5 py-4">
                <p className="text-sm font-semibold">User List</p>
                <span className="text-xs text-[#6d6a61]">Illustrative data</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[460px] text-left text-sm">
                  <thead className="text-xs uppercase tracking-wider text-[#6d6a61]">
                    <tr>
                      <th className="px-5 py-3 font-semibold">User</th>
                      <th className="px-5 py-3 font-semibold">Invoices</th>
                      <th className="px-5 py-3 text-right font-semibold">Billed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {team.map((u) => (
                      <tr key={u.name} className="border-t border-[#131311]/10">
                        <td className="px-5 py-4">
                          <p className="font-medium text-[#131311]">{u.name}</p>
                          <p className="text-xs text-[#6d6a61]">{u.role}</p>
                        </td>
                        <td className="px-5 py-4 text-[#131311]">{u.count}</td>
                        <td className="px-5 py-4 text-right font-medium text-[#131311]">{u.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="pb-24">
          <div className="mx-auto w-[min(1240px,92%)] rounded-3xl bg-[#131311] text-white px-8 py-16 text-center sm:px-16 shadow-2xl">
            <h2 className="text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-tight tracking-tight">
              Stop filling forms.{" "}
              <span className="font-serif font-normal italic text-[#f4c542]">Start describing.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/75">
              See Invoice Studio on your own invoices. We'll set up a demo for your team.
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <a
                href="mailto:info@svtech.com.np"
                className="inline-block rounded-full bg-[#f4f1ea] px-7 py-3 text-sm font-semibold text-[#131311] no-underline transition hover:bg-white"
              >
                Request a demo ↗
              </a>
              <Link
                href="/"
                className="inline-block rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white no-underline transition hover:bg-white/10"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}