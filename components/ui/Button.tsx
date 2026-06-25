import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

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
  const base = "inline-flex items-center rounded-[var(--layout-pill-radius)] px-4 py-2 text-sm font-medium transition";
  const variant = props.variant ?? "primary";
  const variantClass =
    variant === "secondary"
      ? "border border-border bg-transparent text-foreground"
      : "bg-primary text-primary-foreground";

  if ("href" in props) {
    const { href, className = "", children, variant: _variant, ...rest } = props as AnchorButtonProps;
    return (
      <a href={href} className={`${base} ${variantClass} ${className}`.trim()} {...rest}>
        {children}
      </a>
    );
  }

  const { className = "", children, variant: _variant, ...rest } = props as NativeButtonProps;
  return (
    <button className={`${base} ${variantClass} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}
