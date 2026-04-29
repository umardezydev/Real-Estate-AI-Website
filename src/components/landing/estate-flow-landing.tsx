import {
  capabilities,
  faqs,
  heroStats,
  integrations,
  navItems,
  pricingPlans,
  testimonials,
  useCases,
  workflow,
} from "./data";
import { AiChatDemo } from "./demos/ai-chat-demo";
import { AiCombinedDemo } from "./demos/ai-combined-demo";
import { AiVoiceDemo } from "./demos/ai-voice-demo";
import { FAQAccordion } from "./faq-accordion";
import { StaticDashboardDemo } from "./demos/static-dashboard-demo";
import { Header } from "./header";
import { HeroParallaxBackdrop } from "./hero-parallax-backdrop";
import { Icon, type IconName } from "./icons";
import { ScrollReveal } from "./scroll-reveal";
import type { CSSProperties } from "react";

const heroDemos = {
  chat: AiChatDemo,
  combined: AiCombinedDemo,
  voice: AiVoiceDemo,
  dashboard: StaticDashboardDemo,
};

const ActiveHeroDemo = heroDemos.combined;

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "AI lead intake", href: "#platform" },
      { label: "Qualification", href: "#workflow" },
      { label: "CRM handoff", href: "#results" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="section-eyebrow accent-text font-semibold uppercase">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="accent-section-gradient relative isolate min-h-screen overflow-hidden px-4 pt-28 sm:px-6 lg:pt-30">
      <HeroParallaxBackdrop />
      <div className="mx-auto grid max-w-7xl items-start gap-8 pb-10 lg:grid-cols-[0.86fr_1.14fr] lg:pb-12">
        <div className="scroll-reveal" data-reveal="left">
          <div className="accent-border accent-text accent-soft-shadow inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-2 text-sm backdrop-blur">
            <Icon name="spark" className="size-4" />
            AI intake and follow-up for modern real estate teams
          </div>
          <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-slate-950 sm:text-6xl lg:text-6xl">
            Turn{" "}
            <span className="accent-text">property inquiries</span>
            {" "}into{" "}
            <span className="bg-[linear-gradient(90deg,var(--accent-primary),var(--accent-secondary))] bg-clip-text text-transparent">
              qualified leads.
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg font-medium leading-8 text-slate-600">
            EstateFlow AI helps real estate teams respond faster, qualify intent, route opportunities, and keep every handoff organized.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              className="hover-accent-strong magnetic group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-bold text-white shadow-xl shadow-slate-300/70 transition"
              href="#pricing"
            >
              Automate My Leads
              <Icon name="arrow" className="size-4 transition group-hover:translate-x-1" />
            </a>
            <a
              className="hover-accent-border hover-accent-soft inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 text-sm font-semibold text-slate-800 shadow-lg shadow-slate-200/50 backdrop-blur transition"
              href="#platform"
            >
              View Platform
            </a>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-lg shadow-slate-200/50 backdrop-blur" key={stat.label}>
                <div className="text-xl font-semibold text-slate-950">{stat.value}</div>
                <div className="mt-1 text-[0.7rem] leading-4 text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="scroll-reveal" data-reveal="right" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
          <ActiveHeroDemo />
        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  return (
    <section className="scroll-reveal overflow-hidden border-y border-slate-200 bg-white" data-reveal="soft">
      
      <div className="ticker ticker-lane w-screen my-auto py-3 overflow-hidden">
        <div className="ticker-track flex w-max gap-3 px-4 sm:px-6">
          {[...useCases, ...useCases, ...useCases].map((item, index) => (
            <span
              className="ticker-item rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-medium text-slate-600"
              key={`${item}-${index}`}
              tabIndex={0}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformHeader() {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <p className="section-eyebrow accent-text font-semibold uppercase">Platform</p>
      <h2 className="mx-auto mt-5 max-w-4xl text-balance text-3xl font-semibold leading-[0.95] tracking-tight text-slate-950 sm:text-5xl">
        A lead engine disguised as a premium AI assistant.
      </h2>
     
    </div>
  );
}

function PlatformCard({ item, index }: { item: (typeof capabilities)[number]; index: number }) {
  return (
    <article
      className="capability-card hover-accent-border scroll-reveal group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60"
      style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
    >
      <div className="capability-card-depth relative z-10">
        <div className="capability-icon accent-soft accent-text mb-10 grid size-14 place-items-center rounded-2xl">
          <Icon name={(["message", "target", "calendar", "sync"] as IconName[])[index]} className="size-5" />
        </div>
        <p className="accent-text text-xs font-semibold uppercase tracking-[0.28em]">{item.eyebrow}</p>
        <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-950">{item.title}</h3>
        <p className="mt-5 text-[0.95rem] leading-7 text-slate-600">{item.body}</p>
        <div className="capability-card-footer mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Module 0{index + 1}</span>
          <span className="capability-arrow accent-text grid size-9 place-items-center rounded-full bg-slate-50">
            <Icon name="arrow" className="size-4" />
          </span>
        </div>
      </div>
    </article>
  );
}

function Platform() {
  return (
    <section id="platform" className="bg-slate-50 px-4 py-18 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="scroll-reveal" data-reveal="soft">
          <PlatformHeader />
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item, index) => (
            <PlatformCard item={item} index={index} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section id="workflow" className="section-grid-bg section-wash relative isolate overflow-hidden bg-white px-4 py-18 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="scroll-reveal" data-reveal="left">
            <SectionHeader
              align="left"
              eyebrow="Workflow"
              title="From first touch to agent-ready context."
              description="EstateFlow AI is designed to reduce manual intake work while preserving the moments where human agents create the most value."
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {workflow.map((item, index) => (
              <article
                className="workflow-card motion-card scroll-reveal rounded-3xl border border-slate-200 bg-white/75 p-6 shadow-sm shadow-slate-200/60 backdrop-blur"
                key={item.step}
                data-reveal="right"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <div className="flex items-center justify-between">
                  <span className="workflow-step accent-text text-sm font-semibold">{item.step}</span>
                  <span className="workflow-node accent-soft accent-text grid size-9 place-items-center rounded-2xl">
                    <Icon name={(["message", "target", "calendar", "layers"] as IconName[])[index]} className="size-4" />
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section className="section-wash section-grid-bg relative isolate overflow-hidden bg-slate-50 px-4 py-18 sm:px-6 lg:py-24">
      <div className="integration-panel motion-card scroll-reveal mx-auto max-w-7xl rounded-4xl border border-slate-200 bg-white/82 p-6 shadow-xl shadow-slate-200/60 backdrop-blur sm:p-8 lg:p-10" data-reveal="soft">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="section-eyebrow accent-text font-semibold uppercase">Integrations</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Built to meet the stack agents already use.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Connect the front door of your business to the systems your agents already rely on for calendars, follow-up, reporting, and client records.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {integrations.map((item, index) => (
              <div
                className="integration-tile motion-subtle rounded-2xl border border-slate-200 bg-slate-50/90 p-4 text-center text-sm font-medium text-slate-600"
                key={item}
                style={{ "--tile-delay": `${index * 80}ms` } as CSSProperties}
              >
                <span className="integration-dot accent-fill-gradient" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  const results = [
    { value: "31%", label: "More prospects reached during the first response window" },
    { value: "2.4x", label: "More consistent follow-up across chat, calls, and SMS" },
    { value: "18 hrs", label: "Weekly admin capacity redirected toward client work" },
  ];

  return (
    <section id="results" className="section-wash relative isolate overflow-hidden bg-white px-4 py-18 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="scroll-reveal" data-reveal="soft">
          <SectionHeader
            eyebrow="Results"
            title="A cleaner pipeline with fewer manual gaps."
            description="EstateFlow AI is built around the operational metrics that matter most: speed-to-lead, qualification quality, appointment conversion, and follow-up consistency."
          />
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {results.map((result, index) => (
            <div
              className="metric-card accent-result-gradient motion-card scroll-reveal rounded-3xl border border-slate-200 p-7 text-center shadow-xl shadow-slate-200/60"
              key={result.label}
              style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
            >
              <div className="text-5xl font-semibold tracking-tight text-slate-950">{result.value}</div>
              <p className="mx-auto mt-4 max-w-56 text-sm leading-6 text-slate-600">{result.label}</p>
              <div className="metric-line accent-fill-gradient mx-auto mt-7 h-1 w-14 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section-grid-bg relative isolate overflow-hidden bg-slate-50 px-4 py-18 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="scroll-reveal" data-reveal="soft">
          <SectionHeader eyebrow="Testimonials" title="Operational confidence for busy real estate teams." />
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure
              className="testimonial-card motion-card scroll-reveal rounded-3xl border border-slate-200 bg-white/86 p-6 shadow-xl shadow-slate-200/60 backdrop-blur"
              key={testimonial.name}
              style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
            >
              <div className="quote-mark accent-soft accent-text mb-7 grid size-10 place-items-center rounded-2xl text-xl font-semibold">
                &quot;
              </div>
              <blockquote className="text-base leading-8 text-slate-700">&quot;{testimonial.quote}&quot;</blockquote>
              <figcaption className="mt-8 border-t border-slate-200 pt-5">
                <div className="font-semibold text-slate-950">{testimonial.name}</div>
                <div className="mt-1 text-sm text-slate-500">{testimonial.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section-wash relative isolate overflow-hidden bg-white px-4 py-18 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="scroll-reveal" data-reveal="soft">
          <SectionHeader
            eyebrow="Pricing"
            title="Flexible plans for agents, teams, and growing brokerages."
            description="Start with a focused AI intake layer, then expand into omnichannel capture, routing, and team-level workflows as your operation grows."
          />
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <article
              className={
                plan.featured
                  ? "pricing-card accent-card-gradient accent-border-strong accent-soft-shadow motion-card scroll-reveal relative rounded-3xl border p-6"
                  : "pricing-card motion-card scroll-reveal rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60"
              }
              key={plan.name}
              style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
            >
              
              <h3 className="text-xl font-semibold text-slate-950">{plan.name}</h3>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight text-slate-950">{plan.price}</span>
                {plan.price !== "Custom" ? <span className="pb-2 text-sm text-slate-500">/month</span> : null}
              </div>
              <p className="mt-5 min-h-14 text-sm leading-7 text-slate-600">{plan.description}</p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li className="flex items-start gap-3 text-sm text-slate-600" key={feature}>
                    <Icon name="check" className="accent-text mt-0.5 size-4 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className={
                  plan.featured
                    ? "hover-accent-strong mt-9 inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white transition"
                    : "hover-accent-border hover-accent-soft mt-9 inline-flex h-12 w-full items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-800 transition"
                }
                href="#top"
              >
                Automate My Leads
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section-grid-bg relative isolate overflow-hidden bg-slate-50 px-4 py-18 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="scroll-reveal" data-reveal="left">
          <SectionHeader align="left" eyebrow="FAQ" title="Designed for practical real estate operations." />
        </div>
        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-white px-4 py-18 sm:px-6 lg:py-24">
      <div className="accent-cta-gradient accent-border scroll-reveal relative mx-auto max-w-7xl overflow-hidden rounded-4xl border px-6 py-16 text-center text-slate-950 shadow-2xl shadow-slate-200/80 sm:px-10" data-reveal="soft">
        <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_20%_20%,white,transparent_28%),radial-gradient(circle_at_80%_30%,#bae6fd,transparent_30%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-700">EstateFlow AI</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Give every lead a faster path to the right agent.
          </h2>
          <p className="mt-6 text-base leading-7 text-slate-700">
            EstateFlow AI turns first contact into structured context, timely follow-up, and a cleaner handoff for the people responsible for closing.
          </p>
          <a
            className="hover-accent-strong mt-9 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-bold text-white transition"
            href="#top"
          >
            Automate My Leads
            <Icon name="arrow" className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="section-grid-bg accent-cta-gradient relative isolate overflow-hidden border-t border-slate-200 bg-slate-50 px-4 py-12 shadow-[0_-24px_60px_rgba(15,23,42,0.04)] sm:px-6 lg:py-16">
      <div className="absolute inset-0 opacity-55 [background:radial-gradient(circle_at_8%_18%,white,transparent_26%),radial-gradient(circle_at_88%_18%,var(--accent-glow-surface),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:justify-between">
          <div className="max-w-md">
            <a className="inline-flex items-center gap-3" href="#top" aria-label="EstateFlow AI home">
              <span className="accent-border accent-soft accent-text accent-shadow grid size-11 place-items-center rounded-full border">
                <Icon name="layers" className="size-5" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-slate-950">EstateFlow AI</span>
            </a>
            <p className="mt-5 text-pretty text-base font-medium leading-7 text-slate-600">
              AI-powered intake, qualification, scheduling, and follow-up for real estate teams that cannot afford to miss ready prospects.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-950">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a className="text-sm font-medium text-slate-600 transition hover:text-slate-950" href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-5 text-sm text-slate-500">
          <p>© 2026 EstateFlow AI. Built for modern real estate operations.</p>
        </div>
      </div>
    </footer>
  );
}

export function EstateFlowLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <Header />
      <Hero />
      <LogoStrip />
      <Platform />
      <Workflow />
      <Integrations />
      <Results />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ScrollReveal />
    </main>
  );
}
