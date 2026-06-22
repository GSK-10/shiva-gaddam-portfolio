import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonProps =
  | ({
      href: string;
      variant?: "primary" | "secondary";
    } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({
      href?: never;
      variant?: "primary" | "secondary";
    } & ButtonHTMLAttributes<HTMLButtonElement>);

export function Button(props: ButtonProps) {
  const base = "inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition";
  const variant = props.variant ?? "primary";
  const variantClass =
    variant === "secondary"
      ? "border border-border bg-transparent text-foreground"
      : "bg-primary text-primary-foreground";

  if ("href" in props) {
    const { href, className = "", children, ...rest } = props;
    return (
      <a href={href} className={`${base} ${variantClass} ${className}`.trim()} {...rest}>
        {children}
      </a>
    );
  }

  const { className = "", children, ...rest } = props;
  return (
    <button className={`${base} ${variantClass} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}
