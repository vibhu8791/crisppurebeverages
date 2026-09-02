import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { LogoMark } from "./Logo";
import { brand, navLinks, products } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-foreground/10 p-2">
              <LogoMark className="h-10" />
            </span>
            <span className="font-display text-lg font-extrabold">{brand.company}</span>
          </div>
          <p className="text-sm text-navy-foreground/70">{brand.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-navy-foreground/60">
            Company
          </h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-navy-foreground/80 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-navy-foreground/60">
            Products
          </h3>
          <ul className="mt-4 space-y-2">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/products"
                  className="text-sm text-navy-foreground/80 transition-colors hover:text-accent"
                >
                  {p.size.replace(" Litre", "L").replace(" ml", "ml")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-navy-foreground/60">
            Contact
          </h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={brand.phoneHref}
                className="flex items-center gap-2 text-sm text-navy-foreground/80 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4" /> {brand.phone}
              </a>
            </li>
            <li>
              <a
                href={brand.emailHref}
                className="flex items-center gap-2 text-sm text-navy-foreground/80 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4" /> {brand.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <p className="mx-auto w-full max-w-7xl px-4 py-6 text-center text-xs text-navy-foreground/60 sm:px-6 lg:px-8">
          © 2026 {brand.company}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
