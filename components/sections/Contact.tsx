"use client";

import { useState, type FormEvent } from "react";
import { FileText } from "lucide-react";
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
    <Surface className="p-5 sm:p-6">
      <div className="flex items-center gap-2.5 border-b border-[color:var(--surface-border)] pb-2.5">
        <span aria-hidden="true" className="h-3.5 w-[3px] shrink-0 bg-primary" />
        <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-foreground">
          {title}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 grid gap-4">
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

        <div className="grid gap-2">
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
            className={`${fieldClasses} resize-y`}
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

export function Contact() {
  const copy = sectionCopy.contact;

  return (
    <Section
      id="contact"
      index={copy.index}
      eyebrow={copy.eyebrow}
      title={copy.title}
      displayTitle={
        <>
          {copy.heading} <span className="text-primary">{copy.accent}</span>
        </>
      }
      tagline={copy.tagline}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.9fr)] lg:gap-8">
        <div>
          <p className="max-w-[52ch] text-base leading-7 text-foreground sm:text-[1.05rem] sm:leading-[1.8]">
            {siteConfig.contactIntro}
          </p>

          <Button
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className="mt-7 gap-2"
          >
            <FileText className="h-4 w-4" />
            Resume dossier
          </Button>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
