import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type ClassNameProps = PropsWithChildren<{ className?: string }>;

export function Container({ children, className }: ClassNameProps) {
  return (
    <div className={cn("mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

type SurfaceProps = ClassNameProps & {
  interactive?: boolean;
};

export function Surface({ children, className, interactive = true }: SurfaceProps) {
  return (
    <div
      className={cn(
        "theme-surface rounded-[var(--radius-surface)] border text-card-foreground",
        interactive && "theme-surface-interactive theme-surface-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}

type LinkButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type NativeButtonProps = {
  href?: never;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const variant = props.variant ?? "primary";
  const classes = cn(
    "theme-button-glow inline-flex items-center justify-center border px-4 py-2.5 text-xs font-semibold tracking-[0.04em] transition duration-200",
    variant === "secondary"
      ? "border-[color:var(--surface-border)] bg-transparent text-foreground hover:border-[color:rgb(var(--color-primary)/0.5)] hover:bg-[color:var(--accent-soft)]"
      : "border-[color:var(--hero-cta-border)] bg-[color:var(--hero-cta-bg)] text-[color:var(--hero-cta-text)] hover:-translate-y-px hover:brightness-105",
  );
  const shape = {
    clipPath: "polygon(0.9rem 0, 100% 0, calc(100% - 0.9rem) 100%, 0 100%)",
  };

  if ("href" in props) {
    const { href, className, children, variant: _variant, style, ...rest } = props as LinkButtonProps;
    return (
      <a href={href} className={cn(classes, className)} style={{ ...shape, ...style }} {...rest}>
        {children}
      </a>
    );
  }

  const { className, children, variant: _variant, style, ...rest } = props as NativeButtonProps;
  return (
    <button className={cn(classes, className)} style={{ ...shape, ...style }} {...rest}>
      {children}
    </button>
  );
}

type SectionProps = PropsWithChildren<{
  id: string;
  index?: string;
  title: string;
  icon?: LucideIcon;
  displayTitle?: ReactNode;
  tagline?: string;
  className?: string;
  contentClassName?: string;
  fullWidthContent?: ReactNode;
}>;

export function Section({
  id,
  index,
  title,
  icon: Icon,
  displayTitle,
  tagline,
  className,
  contentClassName,
  fullWidthContent,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative pb-10 pt-14 sm:pb-12 sm:pt-16 lg:pb-14 lg:pt-[4.5rem]",
        className,
      )}
    >
      <Container>
        <div
          className={cn(
            "mx-auto grid max-w-7xl gap-8 border-t border-[color:var(--surface-border)] pt-7 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12",
            contentClassName,
          )}
        >
          <header className="lg:pr-5">
            <Reveal>
            <p className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em]">
              {index && <span className="text-primary">{index}</span>}
              {index && <span className="text-muted">/</span>}
              <span className="text-muted">{title}</span>
            </p>
            <div className="mt-5">
              <h2 className="font-serif text-xl font-bold tracking-[0.03em] sm:text-2xl">
                {Icon && (
                  <Icon
                    aria-hidden="true"
                    className="mr-2.5 inline-block h-5 w-5 -translate-y-[0.08em] align-middle text-primary sm:h-6 sm:w-6"
                    strokeWidth={1.75}
                  />
                )}
                <span>{displayTitle ?? title}</span>
              </h2>
              {tagline && (
                <p className="mt-5 max-w-[18rem] text-base leading-7 text-foreground">{tagline}</p>
              )}
            </div>
            </Reveal>
          </header>
          <div className="min-w-0">
            <Reveal delay="120ms">{children}</Reveal>
          </div>
          {fullWidthContent && (
            <div className="min-w-0 pt-2 lg:col-span-2">
              <Reveal delay="180ms">{fullWidthContent}</Reveal>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
