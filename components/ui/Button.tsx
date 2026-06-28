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
    "inline-flex items-center rounded-[var(--layout-pill-radius)] border px-4 py-2 text-sm font-medium transition-colors duration-200";
  const variant = props.variant ?? "primary";
  const variantClass =
    variant === "secondary"
      ? "border-border bg-transparent text-foreground hover:bg-[color:var(--accent-soft)]"
      : "border-transparent bg-primary text-primary-foreground hover:opacity-90";

  if ("href" in props) {
    const { href, className = "", children, variant: _variant, ...rest } = props as AnchorButtonProps;
    return (
      <a href={href} className={cn(base, variantClass, className)} {...rest}>
        {children}
      </a>
    );
  }

  const { className = "", children, variant: _variant, ...rest } = props as NativeButtonProps;
  return (
    <button className={cn(base, variantClass, className)} {...rest}>
      {children}
    </button>
  );
}
