import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  Boxes,
  Building2,
  CalendarHeart,
  ChefHat,
  Droplets,
  Factory,
  FlaskConical,
  Hotel,
  Package,
  PackageCheck,
  Plane,
  Recycle,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  Users,
  Waves,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, heroBottle, LOGO_URL, products } from "@/lib/brand";
import { LogoMark } from "./Logo";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  inverted = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  inverted?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-bold uppercase tracking-[0.32em]",
            inverted ? "text-accent" : "text-sky",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          inverted ? "text-navy-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            inverted ? "text-navy-foreground/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function WaterBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky/20 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-water-gradient">
      <WaterBackdrop />
      <img
        src={LOGO_URL}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-10 top-10 hidden w-[520px] opacity-[0.06] lg:block"
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/70 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
            <Droplets className="h-3.5 w-3.5" />
            {brand.company}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Pure Water.
            <br />
            <span className="text-gradient-brand">Trusted Quality.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Refreshing packaged drinking water, manufactured with care for every occasion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7 font-semibold shadow-soft">
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary/25 px-7 font-semibold text-primary hover:bg-secondary"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary">
            <ShieldCheck className="h-4 w-4" />
            Quality you can trust. Purity you can feel.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-x-8 bottom-6 top-10 rounded-[40%] bg-sky/25 blur-3xl" />
          <span className="absolute left-6 top-16 h-3 w-3 animate-drift rounded-full bg-sky/60" />
          <span
            className="absolute right-10 top-32 h-4 w-4 animate-drift rounded-full bg-primary/30"
            style={{ animationDelay: "1.4s" }}
          />
          <span
            className="absolute bottom-16 left-16 h-2.5 w-2.5 animate-drift rounded-full bg-sky/70"
            style={{ animationDelay: "2.6s" }}
          />
          <img
            src={heroBottle}
            alt="CRISPPURE 1 litre packaged drinking water bottle"
            className="relative z-10 max-h-[560px] w-auto animate-float-slow object-contain drop-shadow-[0_35px_45px_rgba(24,60,140,0.25)]"
          />
        </div>
      </div>
      <div className="relative h-16 bg-[radial-gradient(ellipse_at_top,var(--sky-soft),transparent_70%)]" />
    </section>
  );
}

const aboutPillars = [
  {
    icon: Sparkles,
    title: "Company Overview",
    text: "A packaged drinking water manufacturer serving households, businesses and hospitality with convenient bottle sizes.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Commitment",
    text: "Consistent attention to quality is maintained across every stage of our production process.",
  },
  {
    icon: Factory,
    title: "Manufacturing Focus",
    text: "Hygienic production and controlled bottling practices guide the way we work every day.",
  },
  {
    icon: Users,
    title: "Customer Commitment",
    text: "Reliable service for retailers, distributors and business partners across every requirement.",
  },
];

export function AboutSection({ withCta = true }: { withCta?: boolean }) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About CRISPPURE"
              title="Refreshing Lives with CRISPPURE"
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              CRISPPURE BEVERAGES is a packaged drinking water manufacturing company focused on
              delivering refreshing, reliable and quality drinking water in convenient bottle sizes
              for everyday consumption, hospitality, events, businesses and retail.
            </p>
            {withCta && (
              <Button asChild size="lg" className="mt-8 rounded-full px-7 font-semibold">
                <Link to="/about">Learn More</Link>
              </Button>
            )}
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {aboutPillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-float"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductsSection() {
  return (
    <section className="relative overflow-hidden bg-sky-soft py-20">
      <WaterBackdrop />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Range"
          title="Our Products"
          subtitle="Refreshing hydration for every occasion."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float"
            >
              <div className="relative flex h-60 items-center justify-center bg-water-gradient p-6">
                <img
                  src={p.image}
                  alt={`CRISPPURE ${p.size} packaged drinking water bottle`}
                  loading="lazy"
                  className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-extrabold text-primary">{p.size}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-5 rounded-full border-primary/25 font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link to="/contact">Enquire Now</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    text: "Consistent attention to quality throughout our production process.",
  },
  {
    icon: Sparkles,
    title: "Hygienic Manufacturing",
    text: "Focused on maintaining hygienic production and packaging practices.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    text: "Dependable supply for retail and business requirements.",
  },
  {
    icon: Boxes,
    title: "Convenient Sizes",
    text: "Multiple bottle sizes for different occasions and requirements.",
  },
  {
    icon: Package,
    title: "Modern Packaging",
    text: "Clean and practical packaging designed for convenience.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    text: "Committed to serving customers and business partners reliably.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why CRISPPURE" title="Why Choose CRISPPURE?" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-float"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-primary-foreground shadow-soft">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: Droplets, title: "Water Source" },
  { icon: FlaskConical, title: "Purification" },
  { icon: ShieldCheck, title: "Quality Checks" },
  { icon: Waves, title: "Bottle Filling" },
  { icon: PackageCheck, title: "Sealing" },
  { icon: Package, title: "Packaging" },
  { icon: Truck, title: "Distribution" },
];

export function QualitySection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(60%_50%_at_20%_0%,oklch(0.72_0.115_235/0.5),transparent),radial-gradient(50%_60%_at_90%_100%,oklch(0.42_0.175_262/0.7),transparent)]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          inverted
          eyebrow="Our Process"
          title="Quality at Every Step"
          subtitle="From source to distribution, each stage of our process is handled with care and consistency."
        />
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title }, i) => (
            <li
              key={title}
              className="group relative rounded-3xl border border-navy-foreground/15 bg-navy-foreground/[0.06] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-navy-foreground/[0.1]"
            >
              <span className="text-xs font-bold tracking-[0.28em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-foreground/10 text-accent transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold">{title}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const manufacturingPoints = [
  { icon: Sparkles, title: "Hygienic production environment" },
  { icon: Waves, title: "Controlled bottling process" },
  { icon: ShieldCheck, title: "Quality monitoring" },
  { icon: PackageCheck, title: "Secure packaging" },
  { icon: Recycle, title: "Consistent production practices" },
];

export function ManufacturingSection() {
  return (
    <section className="py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Manufacturing"
            title={
              <>
                Modern Manufacturing.
                <br />
                Consistent Quality.
              </>
            }
          />
          <ul className="mt-8 space-y-4">
            {manufacturingPoints.map(({ icon: Icon, title }) => (
              <li
                key={title}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/25"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-foreground">{title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-gradient p-10 shadow-float">
            <div
              aria-hidden
              className="absolute inset-0 opacity-25 [background:repeating-linear-gradient(115deg,transparent_0_18px,oklch(1_0_0/0.16)_18px_20px)]"
            />
            <div className="relative flex flex-col items-center gap-6 text-center text-primary-foreground">
              <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-background/90 p-3">
                <LogoMark className="h-14" />
              </span>
              <p className="max-w-sm text-lg font-semibold leading-relaxed">
                Every CRISPPURE bottle is filled, sealed and packed through a controlled, monitored
                process built for consistency.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Filling", "Sealing", "Packing"].map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-background/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const audiences = [
  { icon: ShoppingBag, title: "Retail Stores" },
  { icon: Hotel, title: "Hotels & Restaurants" },
  { icon: Building2, title: "Offices" },
  { icon: CalendarHeart, title: "Events & Functions" },
  { icon: ChefHat, title: "Catering" },
  { icon: Plane, title: "Travel & Hospitality" },
  { icon: Briefcase, title: "Corporate Requirements" },
  { icon: Truck, title: "Distributors" },
];

import { Briefcase } from "lucide-react";

export function WhoWeServeSection() {
  return (
    <section className="bg-sky-soft py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Who We Serve" title="Water for Every Occasion" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="glass-card group flex flex-col items-center gap-4 rounded-3xl p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-float"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-sm font-bold text-foreground">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DistributorSection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 shadow-soft sm:p-14">
          <WaterBackdrop />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <SectionHeading align="left" eyebrow="Business Partnership" title="Partner With CRISPPURE" />
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Looking for a reliable packaged drinking water supplier for your retail outlet,
                hotel, restaurant, office, event or business? Connect with CRISPPURE BEVERAGES.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild size="lg" className="rounded-full px-7 font-semibold shadow-soft">
                <Link to="/distributors">Become a Distributor</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary/25 px-7 font-semibold text-primary hover:bg-secondary"
              >
                <Link to="/contact">Business Enquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactChannels() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <a
        href={brand.phoneHref}
        className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Phone className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Call
          </span>
          <span className="block text-sm font-semibold text-foreground">{brand.phone}</span>
        </span>
      </a>
      <a
        href={brand.emailHref}
        className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Mail className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Email
          </span>
          <span className="block text-sm font-semibold text-foreground">{brand.email}</span>
        </span>
      </a>
      <a
        href={brand.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-leaf/40 hover:shadow-soft"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf/10 text-leaf">
          <MessageCircle className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            WhatsApp
          </span>
          <span className="block text-sm font-semibold text-foreground">Chat with us</span>
        </span>
      </a>
    </div>
  );
}

export function ContactSection() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="Have a business enquiry? We're here to help."
        />
        <p className="mt-8 text-center font-display text-lg font-extrabold text-primary">
          {brand.company}
        </p>
        <div className="mt-8">
          <ContactChannels />
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(50%_60%_at_50%_0%,oklch(1_0_0/0.7),transparent)]"
      />
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-background/90 p-3 shadow-float">
          <LogoMark className="h-14" />
        </span>
        <h2 className="mt-7 text-3xl font-extrabold text-primary-foreground sm:text-4xl">
          Stay Refreshed with CRISPPURE
        </h2>
        <p className="mt-4 text-base text-primary-foreground/85">
          Quality packaged drinking water for every occasion.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent px-7 font-semibold text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/products">Explore Products</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-primary-foreground/40 bg-transparent px-7 font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-water-gradient py-16 lg:py-20">
      <WaterBackdrop />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={<h1 className="contents">{title}</h1>} subtitle={subtitle} />
      </div>
    </section>
  );
}
