"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  FileText,
  FolderGit2,
  Mail,
  Network,
  Send,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  folioMeta,
  profileMeta,
  socialLinks,
} from "@/lib/content/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/animation/motion";

const emailAddress = socialLinks.email.replace(/^mailto:/i, "");

const channels = [
  {
    href: socialLinks.github,
    label: "GitHub",
    hint: "Repos & experiments",
    icon: FolderGit2,
  },
  {
    href: socialLinks.linkedin,
    label: "LinkedIn",
    hint: "Professional thread",
    icon: Network,
  },
  {
    href: socialLinks.resume,
    label: "Résumé",
    hint: "One-page overview",
    icon: FileText,
  },
] as const;

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard unavailable */
    }
  }, []);

  return (
    <section id="contact" className="section-editorial pb-28 sm:pb-32">
      <SectionHeading title="Correspondence" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative"
      >
        <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/92 shadow-[0_28px_80px_-48px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-border/35 backdrop-blur-sm dark:bg-card/88">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-[hsl(var(--ambient-b)/0.05)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[hsl(var(--primary)/0.08)] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[hsl(var(--ambient-b)/0.06)] blur-3xl"
            aria-hidden
          />

          <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10">
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-between gap-10 lg:col-span-5"
            >
              <div className="relative">
                <span
                  className="pointer-events-none absolute -left-1 top-0 hidden h-[4.5rem] w-px bg-gradient-to-b from-primary/50 via-primary/15 to-transparent sm:block"
                  aria-hidden
                />
                <p className="pl-0 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/90 sm:pl-5">
                  Open signal
                </p>
                <p className="mt-5 max-w-[26rem] pl-0 font-display text-[1.3rem] italic leading-snug tracking-tight text-foreground sm:pl-5 sm:text-[1.45rem]">
                  Hiring, a collaboration, or a stubborn platform question—say
                  what you&apos;re building in one breath and I&apos;ll answer
                  in kind.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/65 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:pl-5">
                <span className="inline-flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/35 opacity-70 motion-reduce:animate-none motion-reduce:opacity-0"
                      aria-hidden
                    />
                    <span
                      className="relative inline-flex h-2 w-2 rounded-full bg-primary"
                      aria-hidden
                    />
                  </span>
                  Inbox checked daily
                </span>
                <span className="hidden text-border sm:inline" aria-hidden>
                  ·
                </span>
                <span>{profileMeta.location}</span>
              </div>
            </motion.div>

            <div className="flex flex-col gap-3 lg:col-span-7">
              <motion.div variants={fadeUp}>
                <div className="group/channel relative overflow-hidden rounded-xl border border-border/80 bg-gradient-to-br from-muted/[0.14] via-background/35 to-background/[0.06] p-px transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-px hover:border-primary/28 hover:shadow-[0_22px_56px_-40px_hsl(var(--primary)/0.42)]">
                  <div className="rounded-[11px] bg-background/15 p-4 sm:p-5">
                    <div className="flex flex-col gap-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/[0.1] text-primary shadow-[inset_0_1px_0_0_hsl(var(--primary)/0.12)]">
                          <Mail className="h-5 w-5" aria-hidden />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            Direct mail
                          </p>
                          <a
                            href={socialLinks.email}
                            className="mt-1.5 block max-w-full font-mono text-[13px] leading-snug text-foreground underline decoration-border/55 underline-offset-[6px] [overflow-wrap:anywhere] transition-colors hover:text-primary hover:decoration-primary/45 sm:text-[0.8125rem]"
                          >
                            {emailAddress}
                          </a>
                        </div>
                      </div>
                      <div className="flex w-full flex-wrap gap-2 sm:flex-nowrap sm:justify-end">
                        <button
                          type="button"
                          onClick={copyEmail}
                          className="btn-secondary inline-flex min-h-[2.5rem] flex-1 items-center justify-center gap-2 font-mono text-[11px] sm:flex-initial sm:min-w-[6.75rem]"
                        >
                          {copied ? (
                            <>
                              <Check
                                className="h-3.5 w-3.5 text-primary"
                                aria-hidden
                              />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" aria-hidden />
                              Copy
                            </>
                          )}
                        </button>
                        <a
                          href={socialLinks.email}
                          className="btn-primary inline-flex min-h-[2.5rem] flex-1 items-center justify-center gap-2 font-mono text-[11px] sm:flex-initial sm:min-w-[6.75rem]"
                        >
                          Compose
                          <Send
                            className="h-3.5 w-3.5 opacity-90"
                            aria-hidden
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="sr-only" aria-live="polite">
                  {copied ? "Email address copied to clipboard." : ""}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {channels.map((ch) => (
                  <motion.a
                    key={ch.label}
                    href={ch.href}
                    variants={fadeUp}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex flex-col justify-between gap-5 overflow-hidden rounded-xl border border-border/75 bg-gradient-to-b from-muted/[0.1] to-transparent p-4 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-px hover:border-primary/26 hover:shadow-[0_18px_48px_-36px_hsl(var(--primary)/0.38)] sm:min-h-[8.5rem] sm:p-5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/85 bg-background/45 text-foreground/90 transition-colors duration-300 group-hover:border-primary/32 group-hover:bg-primary/[0.06] group-hover:text-primary">
                        <ch.icon
                          className="h-[1.15rem] w-[1.15rem]"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-primary"
                        aria-hidden
                      />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        {ch.label}
                      </p>
                      <p className="mt-1.5 text-[12px] leading-snug text-muted-foreground">
                        {ch.hint}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <footer className="relative flex flex-wrap items-center justify-between gap-3 border-t border-border/70 bg-muted/[0.07] px-6 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:px-8 sm:py-4">
            <span className="inline-flex items-center gap-3">
              <span
                className="h-px w-8 bg-gradient-to-r from-primary/55 to-transparent"
                aria-hidden
              />
              <span className="font-display normal-case italic tracking-wide text-foreground/80">
                Finis
              </span>
              <span className="text-border" aria-hidden>
                ·
              </span>
              <span>{folioMeta.edition}</span>
            </span>
            <span>{profileMeta.location}</span>
          </footer>
        </div>
      </motion.div>
    </section>
  );
}
