"use client";

import { contactEmail } from "@/lib/site";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Code2,
  Compass,
  Database,
  ExternalLink,
  Gauge,
  Globe2,
  Handshake,
  Layers3,
  LineChart,
  Mail,
  MapPin,
  MapPinned,
  PanelTop,
  PhoneCall,
  RefreshCw,
  Search,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" }
];

const credibility = [
  "3 years professional software engineering",
  "Full-stack TypeScript + Python",
  "SEO + analytics setup",
  "Fast custom-coded sites"
];

const services: Array<{
  title: string;
  description: string;
  includes: string[];
  category: string;
  icon: LucideIcon;
}> = [
  {
    title: "Small Business Websites",
    description:
      "A polished online home for businesses that need trust, clarity, and better leads.",
    includes: ["Hero + trust sections", "Service flow", "Contact path"],
    category: "Core site",
    icon: Globe2
  },
  {
    title: "Landing Pages",
    description:
      "Focused pages for one offer, one audience, and one clear conversion goal.",
    includes: ["Offer structure", "CTA strategy", "Fast launch"],
    category: "Campaign",
    icon: PanelTop
  },
  {
    title: "Website Redesigns",
    description:
      "A cleaner, faster rebuild when an existing site feels dated or hard to use.",
    includes: ["UX cleanup", "Copy hierarchy", "Mobile polish"],
    category: "Redesign",
    icon: RefreshCw
  },
  {
    title: "Technical SEO Setup",
    description:
      "The technical foundation Google needs before content or local SEO can work well.",
    includes: ["Metadata", "Indexing basics", "Search Console"],
    category: "SEO",
    icon: Search
  },
  {
    title: "Hosting / Domains / Analytics",
    description:
      "The launch details handled cleanly so the site works in the real world.",
    includes: ["DNS + hosting", "Analytics", "Forms / booking"],
    category: "Launch",
    icon: Server
  },
  {
    title: "Custom Web Apps",
    description:
      "Practical custom functionality when a normal brochure site is not enough.",
    includes: ["Dashboards", "Maps / search", "Data workflows"],
    category: "Custom",
    icon: Code2
  },
  {
    title: "Ongoing Support",
    description:
      "Ongoing technical help after launch so the site can keep improving.",
    includes: ["Content updates", "Monitoring", "Performance fixes"],
    category: "Support",
    icon: Wrench
  }
];

type Project = {
  title: string;
  url: string;
  description: string;
  tags: string[];
  accent: "emerald" | "gold" | "copper";
  visual: "database" | "map" | "service";
};

const projects: Project[] = [
  {
    title: "ForkGrade",
    url: "https://forkgrade.com",
    description:
      "The largest independent health inspection database in the USA, updated daily and built around programmatic SEO, large-scale static pages, PostgreSQL, and a Flask/Python backend.",
    tags: ["Programmatic SEO", "PostgreSQL", "Python/Flask", "Daily ETL", "Performance"],
    accent: "emerald",
    visual: "database"
  },
  {
    title: "InspectRI",
    url: "https://inspectri.com",
    description:
      "A Rhode Island health inspection web app that turns public records into a searchable local discovery tool, with an interactive Leaflet map, practical filters, restaurant search, and daily data updates.",
    tags: ["Interactive UX", "Leaflet maps", "Public data", "Local search", "Daily updates"],
    accent: "gold",
    visual: "map"
  },
  {
    title: "Honest Drain Demo",
    url: "https://cmbitton.github.io/gianni-site-demo/",
    description:
      "A polished local service business demo with responsive layout, trust-building sections, conversion-focused calls to action, and a structure ready to become a complete client site.",
    tags: ["Small business design", "Responsive", "CTA strategy", "Service pages", "Trust sections"],
    accent: "copper",
    visual: "service"
  }
];

const process = [
  {
    title: "Discover",
    description:
      "We clarify your offer, customers, goals, existing assets, and what the website needs to do for the business.",
    icon: Compass
  },
  {
    title: "Design",
    description:
      "I shape the page structure, copy direction, visual system, and conversion path before anything gets overbuilt.",
    icon: Layers3
  },
  {
    title: "Build",
    description:
      "The site is custom-coded with performance, accessibility, responsive behavior, and clean maintainability in mind.",
    icon: Code2
  },
  {
    title: "Launch",
    description:
      "Domains, hosting, forms, analytics, Search Console, metadata, and launch checks get handled end to end.",
    icon: Gauge
  },
  {
    title: "Support",
    description:
      "After launch, I can help with updates, improvements, growth experiments, and the technical odds and ends.",
    icon: Handshake
  }
];

const packages = [
  {
    title: "Starter Site",
    bestFor: "Best for a simple, polished first web presence.",
    deliverables: [
      "One-page custom website",
      "Mobile-first responsive design",
      "Core SEO metadata",
      "Contact form or booking link",
      "Hosting and launch guidance"
    ]
  },
  {
    title: "Business Website",
    bestFor: "Best for businesses that need a stronger online home.",
    deliverables: [
      "Multi-section or multi-page site",
      "Conversion-focused copy structure",
      "Service and trust-building sections",
      "Analytics and Search Console setup",
      "Performance and accessibility checks"
    ]
  },
  {
    title: "Support & Growth",
    bestFor: "Best for businesses that want ongoing technical help.",
    deliverables: [
      "Monthly updates and improvements",
      "Content edits and new sections",
      "Performance optimization",
      "SEO-focused/programmatic pages",
      "Ecommerce guidance and Shopify-ready builds when appropriate"
    ]
  }
];

const faqs = [
  {
    question: "Do you use WordPress?",
    answer:
      "I usually build lightweight custom-coded sites because they can be faster, cleaner, and easier to maintain. WordPress can still be a good fit for some businesses, and I will be practical about what makes sense for your goals."
  },
  {
    question: "Can you handle hosting and domains?",
    answer:
      "Yes. I can help with domain setup, DNS, hosting, launch configuration, SSL, redirects, and the small technical details that often slow projects down."
  },
  {
    question: "Can you help with Google?",
    answer:
      "Yes. I can set up Google Analytics, Google Search Console, SEO metadata, indexing basics, and technical SEO foundations so your site starts from a clean place."
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. I offer monthly support and maintenance for updates, content changes, performance improvements, analytics checks, and technical troubleshooting."
  },
  {
    question: "How long does a site take?",
    answer:
      "A focused starter site can often move quickly once the content and direction are clear. Larger business sites, redesigns, and custom web app features take longer depending on scope."
  },
  {
    question: "Do I need to provide photos and text?",
    answer:
      "Bring what you have. I can help organize the copy, identify missing pieces, and design around available assets. Professional photos help, but they are not required to start."
  },
  {
    question: "Can you redesign my existing site?",
    answer:
      "Yes. I can audit what is working, clean up the structure, improve the design, rewrite or reorganize key sections, and rebuild the site with a faster modern foundation."
  }
];

type RevealProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

function Reveal({ id, className = "", children }: RevealProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-12">
      <p className="mb-3 text-sm font-semibold uppercase text-emerald">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold leading-[1.08] text-cream sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-muted sm:text-lg">
        {copy}
      </p>
    </div>
  );
}

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex size-11 items-center justify-center rounded-md border border-cream/10 bg-cream/[0.06] text-emerald shadow-[0_0_32px_rgba(79,211,182,0.14)]">
      <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-ink/78 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <a href="#top" className="group flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-md border border-emerald/35 bg-emerald/10 text-sm font-bold text-emerald shadow-[0_0_26px_rgba(79,211,182,0.18)] transition-transform group-hover:scale-105">
            CB
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-cream">Curtis Bitton</span>
            <span className="block text-xs text-muted">Web Design</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md bg-cream px-4 py-2 text-sm font-semibold text-[#070806] transition hover:-translate-y-0.5 hover:bg-emerald focus-visible:outline-emerald"
        >
          <Mail aria-hidden="true" className="size-4" />
          Contact
        </a>
      </nav>
    </header>
  );
}

function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="relative mx-auto hidden min-h-[520px] w-full max-w-[560px] lg:block"
      initial={reduceMotion ? false : { opacity: 0, x: 22 }}
      animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <div className="absolute left-0 right-0 top-8 h-[330px] overflow-hidden rounded-lg border border-cream/12 bg-ink-soft shadow-[0_28px_90px_rgba(0,0,0,0.46)] sm:left-4 sm:right-8">
        <div className="flex h-11 items-center justify-between border-b border-cream/10 bg-cream/[0.04] px-4">
          <div className="flex gap-2">
            <span className="size-2.5 rounded-full bg-copper" />
            <span className="size-2.5 rounded-full bg-gold" />
            <span className="size-2.5 rounded-full bg-emerald" />
          </div>
          <span className="text-xs text-muted">launch-checklist.ts</span>
        </div>
        <div className="data-grid relative h-full p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase text-muted">Build Snapshot</p>
              <p className="mt-1 text-2xl font-semibold text-cream">Ready to launch</p>
            </div>
            <div className="rounded-md border border-emerald/25 bg-emerald/10 px-3 py-2 text-sm font-semibold text-emerald">
              98
            </div>
          </div>
          <div className="space-y-3">
            {[
              ["Performance budget", "passed"],
              ["SEO metadata", "ready"],
              ["Analytics setup", "ready"],
              ["Lead form path", "clear"]
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-md border border-cream/10 bg-ink/72 px-4 py-3"
              >
                <span className="text-sm text-muted">{label}</span>
                <span className="text-sm font-medium text-cream">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card absolute bottom-28 left-0 w-[245px] max-w-[72%] p-4 !shadow-none sm:bottom-16 sm:max-w-none">
        <div className="flex items-center gap-3">
          <div className="relative size-16 overflow-hidden rounded-md border border-emerald/35 bg-panel">
            <Image
              src="/headshot.jpg"
              alt=""
              width={400}
              height={400}
              sizes="64px"
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div>
            <p className="font-semibold text-cream">Curtis Bitton</p>
            <p className="mt-1 text-sm leading-5 text-muted">Full-stack engineer</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted">
          <span className="rounded-md border border-cream/10 bg-cream/[0.04] px-2 py-2">TypeScript</span>
          <span className="rounded-md border border-cream/10 bg-cream/[0.04] px-2 py-2">Python</span>
          <span className="rounded-md border border-cream/10 bg-cream/[0.04] px-2 py-2">SEO</span>
          <span className="rounded-md border border-cream/10 bg-cream/[0.04] px-2 py-2">Hosting</span>
        </div>
      </div>

      <div className="glass-card absolute bottom-0 right-0 w-[270px] max-w-[78%] p-5 sm:max-w-none">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase text-muted">Visitor path</p>
            <p className="mt-1 text-lg font-semibold text-cream">Call-ready UX</p>
          </div>
          <BarChart3 className="size-5 text-gold" />
        </div>
        <div className="space-y-3">
          {[
            ["Home", "76%"],
            ["Services", "54%"],
            ["Contact", "31%"]
          ].map(([label, value]) => (
            <div key={label}>
              <div className="mb-1 flex justify-between text-xs text-muted">
                <span>{label}</span>
                <span>{value}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-cream/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald to-gold"
                  style={{ width: value }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-3 top-0 flex items-center gap-2 rounded-md border border-gold/25 bg-gold/10 px-3 py-2 text-sm font-semibold text-gold shadow-[0_0_38px_rgba(213,170,95,0.14)]">
        <Sparkles className="size-4" />
        Polished, practical sites
      </div>
    </motion.div>
  );
}

function MobileHeroSnapshot() {
  return (
    <div aria-hidden="true" className="mt-6 overflow-hidden rounded-lg border border-cream/12 bg-panel/82 shadow-[0_22px_70px_rgba(0,0,0,0.36)] lg:hidden">
      <div className="flex h-10 items-center justify-between border-b border-cream/10 bg-cream/[0.04] px-4">
        <div className="flex gap-2">
          <span className="size-2 rounded-full bg-copper" />
          <span className="size-2 rounded-full bg-gold" />
          <span className="size-2 rounded-full bg-emerald" />
        </div>
        <span className="text-xs text-muted">launch-ready</span>
      </div>
      <div className="data-grid p-4">
        <div className="grid grid-cols-[0.95fr_1.05fr] gap-3">
          <div className="rounded-md border border-emerald/20 bg-emerald/10 p-3">
            <p className="text-2xl font-semibold text-emerald">98</p>
            <p className="mt-1 text-xs uppercase text-muted">speed score</p>
          </div>
          <div className="rounded-md border border-cream/10 bg-ink/62 p-3">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-cream">
              <PhoneCall aria-hidden="true" className="size-4 text-gold" />
              Call-ready path
            </div>
            <div className="space-y-2">
              {[82, 64, 46].map((width, index) => (
                <div key={width} className="h-2 rounded-full bg-cream/10">
                  <div
                    className={`h-full rounded-full ${index === 0 ? "bg-emerald" : index === 1 ? "bg-gold" : "bg-copper"}`}
                    style={{ width: `${width}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-muted">
          {["SEO", "Forms", "Hosting"].map((label) => (
            <span key={label} className="rounded-md border border-cream/10 bg-ink/58 px-3 py-2 text-center">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-stage relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 sm:px-6 sm:pb-20 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:pb-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-emerald/25 bg-emerald/10 px-4 py-2 text-sm text-emerald sm:mb-6"
          >
            <span className="size-2 rounded-full bg-emerald shadow-[0_0_18px_rgba(79,211,182,0.8)]" />
            Limited local projects open
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.06 }}
            className="text-balance text-[2.75rem] font-semibold leading-[0.98] text-cream sm:text-6xl lg:text-7xl"
          >
            <span className="sm:hidden">Fast, modern websites for small businesses.</span>
            <span className="hidden sm:inline">I build fast, modern websites for small businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.14 }}
            className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted sm:mt-6 sm:text-xl sm:leading-8"
          >
            <span className="sm:hidden">
              Custom-coded sites that look polished, load fast, and turn visitors into calls.
            </span>
            <span className="hidden sm:inline">
              Custom-coded websites that help local businesses look professional,
              load fast, and turn visitors into calls, bookings, and leads.
            </span>
          </motion.p>

          <MobileHeroSnapshot />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.22 }}
            className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald px-6 py-3.5 font-semibold text-[#070806] shadow-[0_18px_54px_rgba(79,211,182,0.22)] transition hover:-translate-y-1 hover:bg-cream"
            >
              <Send aria-hidden="true" className="size-4" />
              Start a project
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-cream/15 bg-cream/[0.04] px-6 py-3.5 font-semibold text-cream transition hover:-translate-y-1 hover:border-gold/45 hover:text-gold"
            >
              <ExternalLink aria-hidden="true" className="size-4" />
              View work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="mt-6 hidden max-w-2xl grid-cols-1 gap-3 sm:mt-9 sm:grid sm:grid-cols-2"
          >
            {credibility.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-md border border-cream/10 bg-cream/[0.035] px-4 py-3 text-sm text-muted"
              >
                <CheckCircle2 aria-hidden="true" className="size-4 shrink-0 text-emerald" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { label: "Design", icon: Layers3 },
    { label: "Development", icon: Code2 },
    { label: "Hosting", icon: Server },
    { label: "Analytics", icon: LineChart },
    { label: "Technical SEO", icon: Search }
  ];

  return (
    <Reveal className="border-y border-cream/10 bg-cream/[0.025]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-7 sm:px-6 sm:py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="max-w-2xl text-pretty text-xl font-medium leading-8 text-cream">
          Design, development, hosting, analytics, and technical SEO handled end to end.
        </p>
        <div className="flex flex-wrap gap-3">
          {items.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-cream/10 bg-ink/55 px-3 py-2 text-sm text-muted"
            >
              <Icon aria-hidden="true" className="size-4 text-gold" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Services() {
  return (
    <Reveal id="services" className="px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="A complete website, handled end to end."
          copy="Design, development, launch setup, SEO basics, analytics, and forms in one clean build."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, includes, category, icon }) => (
            <article
              key={title}
              className="glass-card group flex min-h-[258px] flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald/35 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <IconBadge icon={icon} />
                <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase text-gold">
                  {category}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-cream">{title}</h3>
              <p className="mt-3 text-pretty text-sm leading-6 text-muted">{description}</p>
              <div className="mt-5 grid gap-2">
                {includes.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-md border border-cream/10 bg-ink/55 px-3 py-2 text-sm text-cream"
                  >
                    <CheckCircle2 aria-hidden="true" className="size-3.5 shrink-0 text-emerald" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  const accent =
    project.accent === "gold"
      ? {
          bg: "bg-gold/15",
          border: "border-gold/30",
          dot: "bg-gold",
          from: "from-gold/32 via-gold/10",
          text: "text-gold"
        }
      : project.accent === "copper"
        ? {
            bg: "bg-copper/15",
            border: "border-copper/30",
            dot: "bg-copper",
            from: "from-copper/32 via-copper/10",
            text: "text-copper"
          }
        : {
            bg: "bg-emerald/15",
            border: "border-emerald/30",
            dot: "bg-emerald",
            from: "from-emerald/32 via-emerald/10",
            text: "text-emerald"
          };

  return (
    <div className={`mesh-panel relative h-60 overflow-hidden border-b border-cream/10 bg-gradient-to-br ${accent.from} to-transparent p-5`}>
      <div className="absolute inset-0 data-grid opacity-45" />
      <div className="relative flex h-full flex-col">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className={`inline-flex items-center gap-2 rounded-md border ${accent.border} ${accent.bg} px-3 py-2 text-sm font-semibold text-cream`}>
            <span className={`size-2 rounded-full ${accent.dot}`} />
            {project.title}
          </div>
          {project.visual === "database" ? (
            <Database aria-hidden="true" className={`size-5 ${accent.text}`} />
          ) : project.visual === "map" ? (
            <MapPinned aria-hidden="true" className={`size-5 ${accent.text}`} />
          ) : (
            <Building2 aria-hidden="true" className={`size-5 ${accent.text}`} />
          )}
        </div>

        {project.visual === "database" ? (
          <div className="grid flex-1 grid-cols-[0.8fr_1.2fr] gap-3">
            <div className="space-y-3">
              {[
                ["1.8M+", "pages"],
                ["daily", "ETL"],
                ["SEO", "scale"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-md border border-cream/10 bg-ink/58 p-3">
                  <p className={`text-lg font-semibold ${accent.text}`}>{value}</p>
                  <p className="mt-1 text-xs uppercase text-muted">{label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-cream/10 bg-ink/62 p-3">
              <div className="mb-3 flex items-center gap-2 rounded-md border border-cream/10 bg-cream/[0.04] px-3 py-2">
                <Search aria-hidden="true" className="size-4 text-muted" />
                <span className="text-xs text-muted">search inspections</span>
              </div>
              <div className="space-y-2">
                {[92, 76, 64, 84].map((width, index) => (
                  <div key={width} className="flex items-center gap-2 rounded-md border border-cream/10 bg-cream/[0.035] px-3 py-2">
                    <span className={`size-2 rounded-full ${index === 1 ? "bg-gold" : accent.dot}`} />
                    <span className="h-2 rounded-full bg-cream/18" style={{ width: `${width}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {project.visual === "map" ? (
          <div className="grid flex-1 grid-cols-[0.78fr_1.22fr] gap-3">
            <div className="rounded-lg border border-cream/10 bg-ink/62 p-3">
              <div className="mb-3 h-8 rounded-md border border-cream/10 bg-cream/[0.04]" />
              <div className="space-y-2">
                {[68, 88, 55].map((width) => (
                  <div key={width} className="h-9 rounded-md border border-cream/10 bg-cream/[0.035] p-2">
                    <div className="h-2 rounded-full bg-cream/18" style={{ width: `${width}%` }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-cream/10 bg-ink/62">
              <div className="absolute inset-0 data-grid opacity-35" />
              <div className="absolute left-8 top-7 h-28 w-28 rotate-[-12deg] rounded-[45%_55%_42%_58%] border border-gold/40 bg-gold/12" />
              {[
                ["62%", "34%"],
                ["47%", "52%"],
                ["66%", "65%"],
                ["38%", "42%"]
              ].map(([left, top], index) => (
                <span
                  key={`${left}-${top}`}
                  className={`absolute flex size-6 items-center justify-center rounded-full border border-cream/20 ${index === 0 ? "bg-emerald/35 text-emerald" : "bg-gold/25 text-gold"}`}
                  style={{ left, top }}
                >
                  <MapPin aria-hidden="true" className="size-3.5" />
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {project.visual === "service" ? (
          <div className="flex flex-1 flex-col justify-between rounded-lg border border-cream/10 bg-ink/62 p-4">
            <div className="grid grid-cols-[1fr_0.7fr] gap-3">
              <div>
                <div className="h-4 w-5/6 rounded-full bg-cream/24" />
                <div className="mt-3 h-3 w-full rounded-full bg-cream/14" />
                <div className="mt-2 h-3 w-2/3 rounded-full bg-cream/14" />
              </div>
              <div className="rounded-md border border-copper/25 bg-copper/12 p-3">
                <PhoneCall aria-hidden="true" className="mb-3 size-5 text-copper" />
                <div className="h-2 w-full rounded-full bg-cream/20" />
                <div className="mt-2 h-2 w-2/3 rounded-full bg-cream/14" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Trust", "Services", "Quote"].map((label) => (
                <div key={label} className="rounded-md border border-cream/10 bg-cream/[0.04] px-3 py-3">
                  <p className="text-xs font-semibold text-cream">{label}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Work() {
  return (
    <Reveal id="work" className="bg-cream/[0.018] px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured work"
          title="Real projects with data, maps, and performance behind them."
          copy="A mix of software engineering depth and small-business clarity: fast pages, useful interfaces, clean structure, and measurable technical foundations."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-card group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-gold/35"
            >
              <ProjectPreview project={project} />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-cream">{project.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-7 text-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cream/10 bg-cream/[0.04] px-3 py-1.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.title} live site`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald transition hover:text-cream"
                >
                  Visit live site
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function WhyCustom() {
  const benefits = [
    "A site shaped around your actual business, not a template you have to fight.",
    "Lean pages with fewer moving parts than plugin-heavy setups.",
    "Cleaner control over speed, SEO basics, analytics, forms, and launch details.",
    "Room for custom features later, from booking flows to data-backed pages."
  ];

  return (
    <Reveal className="px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-gold">Why custom-coded</p>
          <h2 className="text-balance text-3xl font-semibold leading-[1.08] text-cream sm:text-4xl lg:text-5xl">
            A polished website without wrestling templates, plugins, hosting, or SEO setup.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-8 text-muted">
            Website builders are fine for DIY. I’m for business owners who want
            a polished, fast, professionally built site without having to wrestle
            with templates, plugins, hosting, analytics, or SEO setup.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div key={benefit} className="glass-card relative p-6">
              <span className="absolute right-5 top-5 text-xs font-semibold text-gold/75">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="pr-8 text-pretty text-base leading-7 text-cream">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Process() {
  return (
    <Reveal id="process" className="px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Process"
          title="A clear path from idea to launched site."
          copy="The process is simple on purpose. You get thoughtful strategy, polished design, clean development, and help with the technical launch details."
        />
        <ol className="grid gap-4 md:grid-cols-5">
          {process.map(({ title, description, icon }, index) => (
            <li key={title} className="glass-card relative p-5">
              <div className="mb-5 flex items-center justify-between">
                <IconBadge icon={icon} />
                <span className="text-sm font-semibold text-gold">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-cream">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Reveal>
  );
}

function Packages() {
  return (
    <Reveal className="bg-cream/[0.018] px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Ways I can help"
          title="Flexible project shapes without public one-size-fits-all pricing."
          copy="Every business is different, so I quote based on scope. I’m currently accepting a limited number of local business projects."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((item, index) => (
            <article
              key={item.title}
              className={`glass-card flex h-full flex-col p-6 ${index === 1 ? "border-emerald/35 shadow-[0_24px_90px_rgba(79,211,182,0.12)]" : ""}`}
            >
              <div className="lg:min-h-[6.5rem]">
                <p className="text-sm font-semibold leading-6 text-gold">{item.bestFor}</p>
                <h3 className="mt-4 text-2xl font-semibold text-cream">{item.title}</h3>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {item.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-3 text-sm leading-6 text-muted">
                    <CheckCircle2 aria-hidden="true" className="mt-1 size-4 shrink-0 text-emerald" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md border border-cream/15 bg-cream/[0.05] px-4 py-3 font-semibold text-cream transition hover:-translate-y-1 hover:border-emerald/45 hover:text-emerald"
              >
                Request a quote
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function About() {
  const skills = [
    "Frontend and backend development",
    "Database-backed products",
    "Scraping / ETL / automation",
    "Backend and server knowledge",
    "Performance-focused custom sites",
    "Lightweight alternatives to bloated setups"
  ];

  return (
    <Reveal className="px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-[400px] lg:mx-0">
          <div className="mesh-panel overflow-hidden rounded-lg border border-cream/12 p-4">
            <div className="relative aspect-square overflow-hidden rounded-md border border-emerald/25 bg-panel">
              <Image
                src="/headshot.jpg"
                alt="Curtis Bitton"
                width={400}
                height={400}
                sizes="(min-width: 1024px) 400px, 80vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-emerald">About Curtis</p>
          <h2 className="text-balance text-3xl font-semibold leading-[1.08] text-cream sm:text-4xl lg:text-5xl">
            A software engineer building practical, premium websites for local businesses.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-8 text-muted">
            I’m Curtis, a software engineer based in Rhode Island/New England,
            helping small businesses get clean, fast, professional websites.
            I bring 3 years of professional software engineering experience,
            full-stack TypeScript and Python, database work, data/SEO projects,
            and the ability to handle the technical details end to end.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 rounded-md border border-cream/10 bg-cream/[0.035] px-4 py-3 text-sm text-muted"
              >
                <ShieldCheck aria-hidden="true" className="size-4 shrink-0 text-gold" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function FAQ() {
  return (
    <Reveal id="faq" className="bg-cream/[0.018] px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Straight answers before we start."
          copy="A few common questions from business owners who want a better website without becoming technical project managers."
        />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-cream/10 bg-panel/72 p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-cream">
                {faq.question}
                <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-md border border-cream/10 text-emerald transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-pretty text-sm leading-7 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Contact() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  return (
    <Reveal id="contact" className="px-5 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-gold">Start a project</p>
          <h2 className="text-balance text-3xl font-semibold leading-[1.08] text-cream sm:text-4xl lg:text-5xl">
            Have a business that needs a better online presence?
          </h2>
          <p className="mt-6 text-pretty text-lg leading-8 text-muted">
            Tell me what you’re working on. I’ll help you sort the right scope,
            the smartest next step, and what it would take to launch something
            polished, fast, and useful.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-3 rounded-md border border-cream/12 bg-cream/[0.04] px-4 py-3 text-cream transition hover:border-emerald/45 hover:text-emerald"
            >
              <Mail aria-hidden="true" className="size-5" />
              {contactEmail}
            </a>
            <p className="text-sm leading-6 text-soft">
              Currently accepting a limited number of local business projects
              for small businesses, service providers, and local professionals.
            </p>
          </div>
        </div>

        <form
          className="glass-card p-5 sm:p-6"
          onSubmit={async (event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const formData = new FormData(form);
            const getValue = (name: string) =>
              String(formData.get(name) ?? "").trim();

            setSubmitStatus("submitting");
            setSubmitMessage("");

            try {
              const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  name: getValue("name"),
                  email: getValue("email"),
                  business: getValue("business"),
                  website: getValue("website"),
                  need: getValue("need"),
                  budget: getValue("budget"),
                  message: getValue("message"),
                  companyWebsite: getValue("companyWebsite")
                })
              });

              if (!response.ok) {
                const result = (await response.json().catch(() => null)) as {
                  error?: string;
                } | null;

                setSubmitStatus("error");
                setSubmitMessage(
                  result?.error ??
                    `The form could not be sent. Please email ${contactEmail}.`
                );
                return;
              }

              form.reset();
              setSubmitStatus("success");
              setSubmitMessage("Thanks. I’ll review this and reply by email.");
            } catch {
              setSubmitStatus("error");
              setSubmitMessage(
                `The form could not be sent. Please email ${contactEmail}.`
              );
            }
          }}
        >
          <label className="hidden" aria-hidden="true">
            Company website
            <input
              name="companyWebsite"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-cream">Name</span>
              <input
                required
                name="name"
                autoComplete="name"
                className="w-full rounded-md border border-cream/12 bg-ink/65 px-4 py-3 text-cream placeholder:text-soft transition focus:border-emerald"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-cream">Email</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="w-full rounded-md border border-cream/12 bg-ink/65 px-4 py-3 text-cream placeholder:text-soft transition focus:border-emerald"
                placeholder="you@business.com"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-cream">Business name</span>
              <input
                required
                name="business"
                autoComplete="organization"
                className="w-full rounded-md border border-cream/12 bg-ink/65 px-4 py-3 text-cream placeholder:text-soft transition focus:border-emerald"
                placeholder="Business or project"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-cream">Website, optional</span>
              <input
                type="url"
                name="website"
                autoComplete="url"
                className="w-full rounded-md border border-cream/12 bg-ink/65 px-4 py-3 text-cream placeholder:text-soft transition focus:border-emerald"
                placeholder="https://"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-cream">What do you need help with?</span>
              <select
                required
                name="need"
                className="w-full rounded-md border border-cream/12 bg-ink/65 px-4 py-3 text-cream transition focus:border-emerald"
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                <option>New small business website</option>
                <option>Website redesign</option>
                <option>Landing page</option>
                <option>Portfolio or content site</option>
                <option>Custom web app</option>
                <option>Ongoing support</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-cream">Budget range, optional</span>
              <select
                name="budget"
                className="w-full rounded-md border border-cream/12 bg-ink/65 px-4 py-3 text-cream transition focus:border-emerald"
                defaultValue=""
              >
                <option value="">Not sure yet</option>
                <option>Starter scope</option>
                <option>Business website scope</option>
                <option>Custom build or ongoing work</option>
              </select>
            </label>
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-medium text-cream">Message</span>
            <textarea
              required
              name="message"
              rows={6}
              className="w-full resize-y rounded-md border border-cream/12 bg-ink/65 px-4 py-3 text-cream placeholder:text-soft transition focus:border-emerald"
              placeholder="Tell me about your business, what you need, and where your current website is falling short."
            />
          </label>
          <button
            type="submit"
            disabled={submitStatus === "submitting"}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald px-5 py-3.5 font-semibold text-[#070806] transition hover:-translate-y-1 hover:bg-cream disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-emerald"
          >
            <Send aria-hidden="true" className="size-4" />
            {submitStatus === "submitting"
              ? "Sending..."
              : submitStatus === "success"
                ? "Message sent"
                : "Tell me about your project"}
          </button>
          <p
            aria-live="polite"
            className={`mt-4 min-h-6 text-sm ${submitStatus === "error" ? "text-copper" : "text-emerald"}`}
          >
            {submitMessage}
          </p>
        </form>
      </div>
    </Reveal>
  );
}

function Footer() {
  return (
    <footer className="border-t border-cream/10 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Curtis Bitton Web Design.</p>
        <div className="flex flex-wrap gap-4">
          <a className="text-inherit transition hover:text-cream" href="#services">
            Services
          </a>
          <a className="text-inherit transition hover:text-cream" href="#work">
            Work
          </a>
          <a className="text-inherit transition hover:text-cream" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="site-shell">
        <Hero />
        <TrustStrip />
        <Services />
        <Work />
        <WhyCustom />
        <Process />
        <Packages />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
