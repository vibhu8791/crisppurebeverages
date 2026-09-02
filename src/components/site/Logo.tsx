import { Link } from "@tanstack/react-router";
import { LOGO_URL, brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={LOGO_URL}
      alt="CRISPPURE BEVERAGES logo"
      className={cn("h-10 w-auto object-contain", className)}
      width={206}
      height={278}
    />
  );
}

export function LogoLockup({
  className,
  imageClassName,
  inverted = false,
}: {
  className?: string;
  imageClassName?: string;
  inverted?: boolean;
}) {
  return (
    <Link to="/" className={cn("flex items-center gap-3", className)}>
      <LogoMark className={imageClassName} />
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-lg font-extrabold tracking-tight",
            inverted ? "text-navy-foreground" : "text-primary",
          )}
        >
          {brand.name}
        </span>
        <span
          className={cn(
            "block text-[0.62rem] font-semibold uppercase tracking-[0.32em]",
            inverted ? "text-navy-foreground/70" : "text-muted-foreground",
          )}
        >
          Beverages
        </span>
      </span>
    </Link>
  );
}
