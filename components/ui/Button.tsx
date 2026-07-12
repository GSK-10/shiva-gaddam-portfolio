import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type AnchorButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type NativeButtonProps = {
  href?: never;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps =
  | AnchorButtonProps
  | NativeButtonProps;

export function Button(props: ButtonProps) {
  const base =
    "inline-flex items-center justify-center border px-4 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-[background-color,border-color,color,opacity,transform,box-shadow,filter] duration-200";
  const variant = props.variant ?? "primary";
  const variantClass =
    variant === "secondary"
      ? "rounded-[var(--layout-hero-button-radius)] border-[color:var(--surface-border)] bg-transparent text-foreground hover:border-[color:rgb(var(--color-primary)/0.5)] hover:bg-[color:var(--accent-soft)]"
      : "rounded-[var(--layout-hero-button-radius)] border-[color:var(--hero-cta-border)] bg-[color:var(--hero-cta-bg)] text-[color:var(--hero-cta-text)] hover:-translate-y-px hover:brightness-[1.02]";
  const sharedStyle = {
    clipPath: "polygon(0.9rem 0, 100% 0, calc(100% - 0.9rem) 100%, 0 100%)",
    boxShadow: "var(--hero-cta-shadow)",
  } as const;

  if ("href" in props) {
    const { href, className = "", children, variant: _variant, style, ...rest } = props as AnchorButtonProps;
    return (
      <a
        href={href}
        className={cn(base, variantClass, "font-[var(--font-serif)]", className)}
        style={{ ...sharedStyle, ...style }}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const { className = "", children, variant: _variant, style, ...rest } = props as NativeButtonProps;
  return (
    <button
      className={cn(base, variantClass, "font-[var(--font-serif)]", className)}
      style={{ ...sharedStyle, ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}
