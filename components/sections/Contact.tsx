"use client";

import { useState, type FormEvent } from "react";
import {
  Code2,
  Github,
  Linkedin,
  Mail,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";
import { Button, Section, Surface } from "@/components/ui";
import { sectionCopy, siteConfig } from "@/content/portfolio";

const fieldClasses =
  "w-full border border-[color:var(--surface-border)] bg-[color:var(--surface-card-muted)] px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus-visible:border-[color:rgb(var(--color-primary)/0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

const labelClasses =
  "font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted";

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
  "Email" | "LinkedIn" | "GitHub" | "Codolio",
  { icon: LucideIcon; note: string }
> = {
  Email: { icon: Mail, note: "Write a custom email" },
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
      className="theme-surface theme-surface-interactive theme-surface-glow group flex aspect-square flex-col items-center justify-center rounded-[var(--radius-surface)] border p-4 text-center text-card-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-5"
      aria-label={`Open ${label}`}
    >
      <Icon
        aria-hidden="true"
        className="h-11 w-11 text-primary transition-transform duration-200 group-hover:-translate-y-1 sm:h-14 sm:w-14"
        strokeWidth={1.4}
      />
      <div className="mt-4 sm:mt-5">
        <span className="font-serif text-base font-bold uppercase leading-tight tracking-[0.06em] text-primary sm:text-lg">
          {label}
        </span>
        <p className="mt-1.5 text-sm font-medium leading-5 text-foreground sm:text-[0.95rem] sm:leading-6">
          {note}
        </p>
      </div>
    </a>
  );
}

export function Contact() {
  const copy = sectionCopy.contact;
  const profileLinks = (["Email", "LinkedIn", "GitHub", "Codolio"] as const).flatMap((label) => {
    const link = siteConfig.profileLinks.find((item) => item.label === label);
    return link ? [{ label, href: link.href }] : [];
  });

  return (
    <Section
      id="contact"
      index={copy.index}
      eyebrow={copy.eyebrow}
      title={copy.title}
      icon={PhoneCall}
      displayTitle={
        <>
          {copy.heading} <span className="text-primary">{copy.accent}</span>
        </>
      }
      tagline={copy.tagline}
    >
      <div className="grid gap-7 lg:grid-cols-[minmax(18rem,21rem)_minmax(21rem,24rem)] lg:justify-start lg:gap-6">
        <ContactForm />

        <div className="flex h-full flex-col">
          <p className="max-w-[62ch] text-base leading-7 text-foreground sm:text-[1.05rem] sm:leading-[1.8]">
            {siteConfig.contactIntro}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {profileLinks.map((link) => (
              <ProfileCard key={link.href} label={link.label} href={link.href} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-[color:var(--surface-border)] pt-8 text-center sm:mt-12 sm:pt-10">
        <p className="whitespace-nowrap font-serif text-[clamp(0.58rem,2.65vw,1.35rem)] font-bold leading-tight tracking-[-0.01em] text-foreground">
          Thanks for visiting <span aria-hidden="true">💖</span>.{" "}
          <span className="text-primary">Have a great day <span aria-hidden="true">🚀</span></span>
        </p>
      </div>
    </Section>
  );
}
