"use client";

import { useState, type FormEvent } from "react";
import {
  Check,
  Code2,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";
import { Button, Section, Surface } from "@/components/ui";
import { sectionCopy, siteConfig } from "@/content/portfolio";

const SHOW_CONTACT_FORM = false;

const fieldClasses =
  "w-full border border-[color:var(--surface-border)] bg-[color:var(--surface-card-muted)] px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus-visible:border-[color:rgb(var(--color-primary)/0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

const labelClasses =
  "font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted";

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  textArea.remove();

  if (!copied) {
    throw new Error("Unable to copy email address");
  }
}

function ContactForm() {
  const { title, fields, submit, note } = siteConfig.contactForm;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  /* Static hosting has no server to POST to, so compose a draft instead. */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n--\n${name}\n${email}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Surface className="flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-center gap-2.5 border-b border-[color:var(--surface-border)] pb-2.5">
        <span aria-hidden="true" className="h-3.5 w-[3px] shrink-0 bg-primary" />
        <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-foreground">
          {title}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 flex min-h-0 flex-1 flex-col gap-4">
        <div className="grid gap-2">
          <label htmlFor="contact-name" className={labelClasses}>
            {fields.name.label}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={fields.name.placeholder}
            className={fieldClasses}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="contact-email" className={labelClasses}>
            {fields.email.label}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={fields.email.placeholder}
            className={fieldClasses}
          />
        </div>

        <div className="flex min-h-[7.5rem] flex-1 flex-col gap-2">
          <label htmlFor="contact-message" className={labelClasses}>
            {fields.message.label}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={fields.message.placeholder}
            className={`${fieldClasses} min-h-[6.5rem] flex-1 resize-y`}
          />
        </div>

        <Button type="submit" className="mt-1 w-full">
          {submit}
        </Button>
        <p className="text-center font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
          {note}
        </p>
      </form>
    </Surface>
  );
}

const profileCardDetails: Record<
  "LinkedIn" | "GitHub" | "Codolio",
  { icon: LucideIcon; note: string }
> = {
  LinkedIn: { icon: Linkedin, note: "Professional profile" },
  GitHub: { icon: Github, note: "Code repositories" },
  Codolio: { icon: Code2, note: "Coding profile" },
};

function ProfileCard({ label, href }: { label: keyof typeof profileCardDetails; href: string }) {
  const { icon: Icon, note } = profileCardDetails[label];

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="theme-surface theme-surface-interactive theme-surface-glow group flex min-h-36 flex-col items-center justify-center rounded-[var(--radius-surface)] border p-3.5 text-center text-card-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:min-h-40 sm:p-4"
      aria-label={`Open ${label}`}
    >
      <Icon
        aria-hidden="true"
        className="h-9 w-9 text-primary transition-transform duration-200 group-hover:-translate-y-1 sm:h-10 sm:w-10"
        strokeWidth={1.4}
      />
      <div className="mt-3">
        <span className="font-serif text-base font-bold leading-tight tracking-[0.02em] text-primary">
          {label}
        </span>
        <p className="mt-1 text-sm font-medium leading-5 text-foreground">
          {note}
        </p>
      </div>
    </a>
  );
}

export function Contact() {
  const copy = sectionCopy.contact;
  const [emailCopied, setEmailCopied] = useState(false);
  const profileLinks = (["LinkedIn", "GitHub", "Codolio"] as const).flatMap((label) => {
    const link = siteConfig.profileLinks.find((item) => item.label === label);
    return link ? [{ label, href: link.href }] : [];
  });

  const handleCopyEmail = async () => {
    try {
      await copyText(siteConfig.email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      setEmailCopied(false);
    }
  };

  return (
    <Section
      id="contact"
      tone="alternate"
      index={copy.index}
      title={copy.title}
      icon={PhoneCall}
      displayTitle={
        <>
          {copy.heading} <span className="text-primary">{copy.accent}</span>
        </>
      }
      tagline={copy.tagline}
    >
      <div
        className={
          SHOW_CONTACT_FORM
            ? "grid gap-7 lg:grid-cols-[minmax(18rem,21rem)_minmax(21rem,24rem)] lg:justify-start lg:gap-6"
            : "max-w-3xl"
        }
      >
        {SHOW_CONTACT_FORM && <ContactForm />}

        <div className="flex h-full flex-col">
          <p className="max-w-[62ch] text-base leading-7 text-foreground sm:text-[1.05rem] sm:leading-[1.8]">
            {siteConfig.contactIntro}
          </p>

          <div className="mt-4 grid gap-3 md:grid-cols-[minmax(0,1fr)_10rem_10rem]">
            <div className="relative min-w-0">
              <label htmlFor="contact-email-address" className="sr-only">
                Email address
              </label>
              <input
                id="contact-email-address"
                type="text"
                readOnly
                value={siteConfig.email}
                onFocus={(event) => event.currentTarget.select()}
                className="h-full min-h-10 w-full border border-[color:var(--surface-border)] bg-[color:var(--surface-card-muted)] py-2.5 pl-3 pr-12 font-mono text-sm font-semibold text-foreground focus-visible:border-[color:rgb(var(--color-primary)/0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              />
              <button
                type="button"
                onClick={handleCopyEmail}
                className="absolute inset-y-px right-px inline-flex w-10 items-center justify-center border-l border-[color:var(--surface-border)] bg-[color:var(--surface-card-muted)] text-primary transition hover:bg-[color:var(--accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                aria-label="Copy email address"
                title={emailCopied ? "Copied" : "Copy email address"}
              >
                {emailCopied ? (
                  <Check aria-hidden="true" className="h-4 w-4 text-primary" />
                ) : (
                  <Copy aria-hidden="true" className="h-4 w-4 text-primary" />
                )}
                <span className="sr-only" aria-live="polite">
                  {emailCopied ? "Email copied" : "Copy email"}
                </span>
              </button>
            </div>

            <Button href={`mailto:${siteConfig.email}`} className="gap-2 whitespace-nowrap">
              <Mail aria-hidden="true" className="h-4 w-4" />
              Email Me
            </Button>
            <Button
              href={siteConfig.resumeUrl}
              download="Shiva-Kumar-Reddy-Gaddam-Resume.pdf"
              variant="secondary"
              className="gap-2 whitespace-nowrap"
            >
              <Download aria-hidden="true" className="h-4 w-4 text-primary" />
              Download Resume
            </Button>
          </div>

          <div
            className={`mt-4 grid grid-cols-2 gap-3 ${
              SHOW_CONTACT_FORM ? "" : "sm:grid-cols-3"
            }`}
          >
            {profileLinks.map((link) => (
              <ProfileCard key={link.href} label={link.label} href={link.href} />
            ))}
          </div>
        </div>
      </div>

    </Section>
  );
}
