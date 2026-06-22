import type { ReactNode } from "react";
import type { LandingPageContent } from "../lib/siteContent";
import { AnimatedStatValue } from "./AnimatedStatValue";

const instagramDmUrl = "https://www.instagram.com/direct/t/britishturks";

function CtaButton({
  children,
  variant = "primary",
  className = ""
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-white text-midnight shadow-glow hover:-translate-y-0.5 hover:bg-gold"
      : "border border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10";

  return (
    <a
      href={instagramDmUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold transition duration-300 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{text}</p> : null}
    </div>
  );
}

function CheckMark() {
  return (
    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-royal/20 text-xs font-black text-gold">
      ✓
    </span>
  );
}

export function LandingPage({ content }: { content: LandingPageContent }) {
  const reelsInsight = content.insights.items[5];

  return (
    <main className="overflow-hidden text-white">
      <section className="premium-grid relative min-h-screen px-5 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(109,93,252,0.28),transparent_42rem)]" />
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl sm:gap-4 sm:px-6">
          <a href={content.locale === "tr" ? "/tr" : "/"} className="flex items-center gap-3" aria-label="BritishTurks home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-midnight">
              BT
            </span>
            <span>
              <span className="block text-sm font-black tracking-wide">BritishTurks</span>
              <span className="block text-xs text-slate-400">@britishturks</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#packages">
              {content.nav.packages}
            </a>
            <a className="transition hover:text-white" href="#insights">
              {content.nav.insights}
            </a>
            <a className="transition hover:text-white" href="#faq">
              {content.nav.faq}
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={content.alternate.href}
              aria-label={content.alternate.ariaLabel}
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 text-xs font-black uppercase tracking-wide text-white transition hover:border-white/35 hover:bg-white/10"
            >
              {content.alternate.label}
            </a>
            <CtaButton className="hidden sm:inline-flex">{content.nav.cta}</CtaButton>
          </div>
        </nav>

        <div id="top" className="mx-auto grid w-full max-w-7xl items-center gap-12 pb-14 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-24">
          <div className="min-w-0">
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-left text-sm font-semibold leading-5 text-slate-200">
              <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_18px_rgba(247,201,107,0.8)]" />
              <span className="min-w-0 whitespace-normal">{content.hero.eyebrow}</span>
            </div>
            <h1 className="max-w-5xl break-words text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              {content.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl break-words text-xl font-semibold leading-8 text-slate-200 sm:text-2xl">
              {content.hero.subtitle}
            </p>
            <p className="mt-5 max-w-2xl break-words text-base leading-8 text-slate-300 sm:text-lg">
              {content.hero.supportingText}
            </p>
            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <CtaButton className="w-full sm:w-auto">{content.hero.primaryCta}</CtaButton>
              <a
                href="#packages"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10 sm:w-auto"
              >
                {content.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="glass-panel gradient-border w-full min-w-0 rounded-[2rem] p-4 sm:p-7">
            <div className="w-full min-w-0 rounded-[1.5rem] border border-white/10 bg-ink/70 p-5 sm:p-6">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-400">{content.hero.mediaKitLabel}</p>
                  <h2 className="mt-1 break-words text-2xl font-black">{content.hero.reachTitle}</h2>
                </div>
                <span className="shrink-0 rounded-full bg-gold px-3 py-1 text-xs font-black uppercase tracking-wide text-midnight">
                  {content.hero.year}
                </span>
              </div>
              <div className="grid min-w-0 gap-3 sm:grid-cols-2">
                {content.insights.items.slice(0, 4).map((item) => (
                  <div key={item.label} className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <AnimatedStatValue
                      value={item.value}
                      suffix={item.suffix}
                      decimals={item.decimals}
                      className="text-3xl font-black text-white"
                    />
                    <p className="mt-1 text-sm leading-5 text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 min-w-0 rounded-2xl bg-gradient-to-br from-royal/35 to-violet/25 p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-200">{content.hero.reelsTitle}</p>
                    <AnimatedStatValue
                      value={reelsInsight.value}
                      suffix={reelsInsight.suffix}
                      decimals={reelsInsight.decimals}
                      className="mt-1 block text-4xl font-black"
                    />
                  </div>
                  <div className="flex h-16 w-full items-end justify-end gap-2 sm:h-20 sm:w-auto">
                    {[38, 52, 46, 68, 84].map((height) => (
                      <span
                        key={height}
                        className="w-5 rounded-t-full bg-white/80 sm:w-6"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow={content.insights.eyebrow} title={content.insights.title} text={content.insights.text} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.insights.items.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <AnimatedStatValue
                  value={item.value}
                  suffix={item.suffix}
                  decimals={item.decimals}
                  className="block text-4xl font-black tracking-tight text-white"
                />
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-slate-500">{content.insights.disclaimer}</p>
        </div>
      </section>

      <section id="packages" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow={content.packages.eyebrow} title={content.packages.title} text={content.packages.text} />
          <div className="grid gap-5 lg:grid-cols-3">
            {content.packages.items.map((item) => (
              <article
                key={item.name}
                className={`relative flex rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 ${
                  item.label
                    ? "border-gold/45 bg-gradient-to-br from-white/[0.12] to-royal/15 shadow-glow"
                    : "border-white/10 bg-white/[0.045] hover:border-white/20 hover:bg-white/[0.07]"
                }`}
              >
                {item.label ? (
                  <span className="absolute right-5 top-5 rounded-full bg-gold px-3 py-1 text-xs font-black uppercase tracking-wide text-midnight">
                    {item.label}
                  </span>
                ) : null}
                <div className="flex min-h-full w-full flex-col">
                  <div className="pr-24">
                    <h3 className="text-2xl font-black tracking-tight">{item.name}</h3>
                    <p className="mt-4 text-4xl font-black text-white">{item.price}</p>
                  </div>
                  <p className="mt-4 min-h-14 text-sm font-semibold leading-6 text-slate-300">
                    <span className="text-slate-500">{content.packages.bestForLabel} </span>
                    {item.bestFor}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-300">
                        <CheckMark />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <CtaButton className="mt-7 w-full">{content.packages.buyCta}</CtaButton>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.045] p-6 sm:p-7">
            <div className="grid gap-7 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-black tracking-tight text-white">{content.packages.addOns.title}</h3>
                <ul className="mt-4 space-y-3">
                  {content.packages.addOns.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <CheckMark />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-6 text-slate-400">{content.packages.addOns.note}</p>
              </div>
              <div>
                <h3 className="text-xl font-black tracking-tight text-white">
                  {content.packages.addOns.flexibleTitle}
                </h3>
                <div className="mt-4 space-y-3">
                  {content.packages.addOns.flexibleText.map((text) => (
                    <p key={text} className="text-sm leading-6 text-slate-300">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.1] via-royal/15 to-violet/10 p-8 shadow-premium sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-gold">{content.custom.eyebrow}</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{content.custom.title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{content.custom.text}</p>
          </div>
          <CtaButton className="mt-7 shrink-0 lg:mt-0">{content.custom.cta}</CtaButton>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-gold">{content.why.eyebrow}</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{content.why.title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">{content.why.text}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.why.points.map((reason) => (
              <div key={reason} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                <div className="flex gap-3 text-sm font-semibold leading-6 text-slate-200">
                  <CheckMark />
                  <span>{reason}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl border border-gold/25 bg-gold/10 p-6 text-sm leading-7 text-slate-200 sm:p-8">
          <strong className="text-white">{content.disclosure.prefix}</strong>
          {content.disclosure.text}
        </div>
      </section>

      <section id="faq" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow={content.faq.eyebrow} title={content.faq.title} />
          <div className="space-y-4">
            {content.faq.items.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-white/10 bg-white/[0.045] p-6 open:bg-white/[0.07]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-lg font-black text-white">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sticky bottom-0 z-20 border-t border-white/10 bg-ink/85 px-5 py-3 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-slate-300">{content.sticky.text}</p>
          <CtaButton className="w-full sm:w-auto">{content.sticky.cta}</CtaButton>
        </div>
      </section>

      <footer className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-black">{content.footer.brand}</p>
            <p className="mt-1 text-sm text-slate-400">{content.footer.description}</p>
            <p className="mt-2 text-sm font-semibold text-slate-300">{content.footer.instagram}</p>
          </div>
          <CtaButton>{content.footer.cta}</CtaButton>
        </div>
      </footer>
    </main>
  );
}
