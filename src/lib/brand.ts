```tsx
export const LOGO_URL = "/favicon.png";

export const brand = {
  company: "CRISPPURE BEVERAGES",
  name: "CRISPPURE",
  tagline: "Pure Water. Trusted Quality.",
  phone: "+91 70550 86832",
  phoneHref: "tel:+917055086832",
  email: "wecare@crisppure.info",
  emailHref: "mailto:wecare@crisppure.info",
  whatsapp: "https://wa.me/917055086832",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Shop Products", to: "/products" },
  { label: "Quality", to: "/quality" },
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "Distributors", to: "/distributors" },
  { label: "Contact", to: "/contact" },
] as const;

export type Product = {
  size: string;
  slug: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    size: "1 Litre",
    slug: "1l",
    image: "/bottle-1l.jpeg",
    description:
      "Ideal for homes, offices, travel and everyday hydration.",
  },
  {
    size: "500 ml",
    slug: "500ml",
    image: "/bottle-500ml.png",
    description:
      "Convenient hydration for travel, work and everyday use.",
  },
  {
    size: "250 ml",
    slug: "250ml",
    image: "/bottle-250ml.png",
    description:
      "Compact and convenient for events, hospitality and individual consumption.",
  },
  {
    size: "200 ml",
    slug: "200ml",
    image: "/bottle-200ml.png",
    description:
      "Ideal for meetings, events, hospitality and quick refreshment.",
  },
];

export const bottle5LImage = "/bottle-5l.png";

export const heroBottle = "/bottle-1l.jpeg";
```
