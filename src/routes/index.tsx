import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  MessageCircle,
  Clock,
  Users,
  MoonStar,
  Zap,
  Languages,
  ShieldCheck,
  UserRoundCheck,
  PhoneCall,
  Package,
  ArrowRight,
  Check,
  Mail,
  Send,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import iphoneImg from "@/assets/iphone.png";
import macbookImg from "@/assets/macbook.png";
import airpodsImg from "@/assets/airpods.png";
import watchImg from "@/assets/watch.png";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "AI Chatbot Proposal for Apple Kid — 24/7 Customer Assistant" },
      {
        name: "description",
        content:
          "Custom AI chatbot proposal for Apple Kid (applekid.pk): instant product, price, stock & PTA-approved device answers on your website — 24/7 in Urdu & English.",
      },
    ],
  }),
});

const WHATSAPP = "+92XXXXXXXXXX";
const EMAIL = "hello@yourchatbot.pk";

function LandingPage() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ProblemSolution />
      <LiveDemo />
      <Features />
      <WhyAppleKid />
      <Pricing />
      <ContactFooter />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 glass-panel border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-brand-bg shadow-brand">
            <Sparkles className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">TenBit Solutions</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Proposal · Apple Kid
            </div>
          </div>
        </div>
        <a
          href="#contact"
          className="hidden rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground/90 transition hover:bg-white/5 sm:inline-flex"
        >
          Contact us
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden hero-glow">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <div data-reveal className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Prepared for applekid.pk
          </div>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            A smarter way for <span className="gradient-text">Apple Kid</span> to talk to customers.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A 24/7 AI assistant trained on your catalog — answering product, pricing and stock
            questions instantly. Built for iPhone, MacBook, iPad and AirPods buyers across Pakistan.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-full gradient-brand-bg px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
            >
              Chat Now
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground/90 transition hover:bg-white/5"
            >
              View package
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-xs text-muted-foreground">
            <Stat label="Reply time" value="< 2 sec" />
            <Stat label="Availability" value="24 / 7" />
            <Stat label="Languages" value="Urdu + English" />
          </div>
        </div>

        <div data-reveal data-reveal-delay="150" className="reveal relative">
          <img
            src={iphoneImg}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-10 w-56 rotate-12 opacity-70 drop-shadow-[0_20px_60px_rgba(124,58,237,0.45)] animate-float"
          />
          <img
            src={airpodsImg}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -left-6 w-36 opacity-70 drop-shadow-[0_20px_60px_rgba(79,70,229,0.45)] animate-float"
            style={{ animationDelay: "1.2s" }}
          />
          <ChatMockup />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xl font-semibold text-foreground">{value}</div>
      <div className="mt-0.5">{label}</div>
    </div>
  );
}

function ChatMockup() {
  return (
    <div className="relative mx-auto max-w-md animate-float">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] gradient-brand-bg opacity-30 blur-3xl" />
      <div className="glass-panel shadow-elev rounded-3xl p-4">
        <div className="mb-3 flex items-center gap-2.5 border-b border-border pb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-brand-bg text-xs font-bold text-white">
            AK
          </div>
          <div>
            <div className="text-sm font-semibold">Apple Kid Assistant</div>
            <div className="flex items-center gap-1.5 text-[10px] text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" /> Online
            </div>
          </div>
        </div>
        <div className="space-y-3 py-2">
          <Bubble side="in">Hi! Do you have iPhone 15 Pro Max 256GB PTA-approved in stock?</Bubble>
          <Bubble side="out">
            Yes 👋 iPhone 15 Pro Max 256GB (PTA-approved, Natural Titanium) is in stock at Rs.
            505,000.
          </Bubble>
          <Bubble side="out">
            Would you like to trade in your old iPhone under our Exchange Programme?
          </Bubble>
          <Bubble side="in">Yes, I have iPhone 12. What can I get?</Bubble>
          <Bubble side="out" typing />
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-2.5">
          <span className="text-xs text-muted-foreground">Type your message…</span>
          <div className="ml-auto flex h-7 w-7 items-center justify-center rounded-full gradient-brand-bg">
            <Send className="h-3.5 w-3.5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({
  side,
  children,
  typing,
}: {
  side: "in" | "out";
  children?: React.ReactNode;
  typing?: boolean;
}) {
  const out = side === "out";
  return (
    <div className={`flex ${out ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug ${
          out ? "gradient-brand-bg text-white shadow-brand" : "bg-white/[0.06] text-foreground/90"
        }`}
      >
        {typing ? (
          <span className="flex gap-1">
            <Dot /> <Dot delay={120} /> <Dot delay={240} />
          </span>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-white/80"
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}

function ProblemSolution() {
  const items = [
    {
      icon: Clock,
      problem: "Customers wait for replies",
      solution:
        "Instant answers on WhatsApp-style chat — no more losing a sale to slow response times.",
    },
    {
      icon: Users,
      problem: "Support team gets repetitive questions",
      solution:
        "The AI handles 80% of routine queries — pricing, PTA status, warranty — so your team focuses on real leads.",
    },
    {
      icon: MoonStar,
      problem: "Leads go cold overnight",
      solution:
        "Runs 24/7, captures visitor details, and hands off warm leads straight to your WhatsApp by morning.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        eyebrow="The problem"
        title="Every missed message is a missed sale."
        sub="Three friction points we solve for premium resellers like Apple Kid."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {items.map((it, i) => (
          <div
            key={it.problem}
            data-reveal
            data-reveal-delay={i * 100}
            className="reveal glass-panel shadow-elev rounded-2xl p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-brand-bg shadow-brand">
              <it.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="mt-5 text-base font-semibold">{it.problem}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.solution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LiveDemo() {
  return (
    <section id="demo" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 hero-glow opacity-60" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Live demo"
          title="Try it. Ask anything an Apple Kid customer would."
          sub="This is the actual assistant — trained on a sample of your catalog."
        />
        <div data-reveal className="reveal mt-14 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-[2.5rem] gradient-brand-bg opacity-25 blur-3xl" />
            <div
              id="chatbot-demo-container"
              className="glass-panel shadow-elev overflow-hidden rounded-3xl"
              style={{ width: 900, height: 600 }}
            >
              <iframe
                src="/widget.html?api_key=demo"
                title="Apple Kid AI Assistant demo"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const feats = [
    {
      icon: Package,
      title: "Instant product & stock answers",
      body: "Live lookups across iPhone, MacBook, iPad, AirPods and Apple Watch inventory.",
    },
    {
      icon: PhoneCall,
      title: "WhatsApp order handoff",
      body: "One tap moves the conversation to your WhatsApp business number, with context.",
    },
    {
      icon: Languages,
      title: "Urdu + English support",
      body: "Understands mixed Roman-Urdu, formal Urdu and English — the way customers actually type.",
    },
    {
      icon: ShieldCheck,
      title: "Price & warranty lookup",
      body: "PTA-approved status, warranty terms, delivery timelines — answered in one message.",
    },
    {
      icon: Zap,
      title: "Lead capture to CRM",
      body: "Captures name, number and intent — pushed straight to WhatsApp, Sheets or your CRM.",
    },
    {
      icon: UserRoundCheck,
      title: "Human handoff",
      body: "When it matters, a live agent takes over the same thread — no context lost.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader eyebrow="Features" title="Everything a modern Apple reseller needs." />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {feats.map((f, i) => (
          <div
            key={f.title}
            data-reveal
            data-reveal-delay={(i % 3) * 100}
            className="reveal glass-panel shadow-elev rounded-2xl p-6 transition hover:-translate-y-0.5 hover:border-primary/40"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06]">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyAppleKid() {
  const points = [
    "Trained on your PTA-approved iPhone, MacBook, iPad & AirPods catalog — including used inventory.",
    "Understands your iPhone Exchange Programme flow — captures trade-in details and quotes on the spot.",
    "Handles Lahore delivery timelines, warranty terms and Apple Watch/AirPods variants your team answers daily.",
  ];
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div data-reveal className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
            Built for Apple Kid
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            We already <span className="gradient-text">speak your catalog.</span>
          </h2>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                <div className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full gradient-brand-bg">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </div>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div
          data-reveal
          data-reveal-delay="150"
          className="reveal glass-panel shadow-elev rounded-3xl p-6"
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              { img: iphoneImg, label: "iPhone", tag: "PTA-approved" },
              { img: macbookImg, label: "MacBook", tag: "500+ SKUs" },
              { img: airpodsImg, label: "AirPods", tag: "Original" },
              { img: watchImg, label: "Apple Watch", tag: "All variants" },
            ].map((c) => (
              <div
                key={c.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white/[0.03] p-4 transition hover:border-primary/40"
              >
                <div className="absolute inset-0 -z-10 opacity-40 gradient-brand-bg blur-2xl transition group-hover:opacity-60" />
                <div className="flex h-24 items-center justify-center">
                  <img
                    src={c.img}
                    alt={c.label}
                    loading="lazy"
                    className="max-h-24 object-contain drop-shadow-[0_10px_30px_rgba(124,58,237,0.35)]"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-sm font-semibold">{c.label}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Data mirrors public info from applekid.pk — final training set built with your team
            during onboarding.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const includes = [
    "Full setup on your website (no dev work on your side)",
    "AI trained on your product catalog & FAQs",
    "WhatsApp business integration + lead routing",
    "Urdu + English conversation tuning",
    "Admin dashboard for chat history & leads",
    "1 month of priority support & tuning",
  ];
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        eyebrow="Package"
        title="One clean starter package."
        sub="No feature gates. Everything you need to go live in under 2 weeks."
      />
      <div data-reveal className="reveal mx-auto mt-14 max-w-lg">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] gradient-brand-bg opacity-30 blur-2xl" />
          <div className="glass-panel shadow-elev rounded-3xl p-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Starter Package
                </div>
                <div className="mt-2 text-3xl font-bold">
                  Apple Kid <span className="gradient-text">AI Assistant</span>
                </div>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand-bg shadow-brand">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-xs text-muted-foreground">From</span>
              <span className="text-4xl font-bold">Rs. 45,000</span>
              <span className="text-xs text-muted-foreground">one-time setup</span>
            </div>
            <ul className="mt-6 space-y-3">
              {includes.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" strokeWidth={2.5} />
                  {i}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-brand-bg px-6 py-3.5 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
            >
              Request This For Your Website
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Monthly hosting & AI usage billed separately — full quote shared after a quick call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactFooter() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 hero-glow opacity-70" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div data-reveal className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
            Next step
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Let's put this live on <span className="gradient-text">applekid.pk</span>
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Send us a note or WhatsApp — we'll share a 5-minute personalised demo trained on your
            actual products.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full gradient-brand-bg px-6 py-3 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:bg-white/5"
            >
              <Mail className="h-4 w-4" />
              {EMAIL}
            </a>
          </div>
        </div>

        <form
          data-reveal
          data-reveal-delay="150"
          className="reveal glass-panel shadow-elev rounded-3xl p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-4">
            <Field label="Your name" name="name" placeholder="e.g. Ahmed Khan" />
            <Field label="Business name" name="business" placeholder="Apple Kid" />
            <Field label="WhatsApp number" name="phone" placeholder="+92 3xx xxxxxxx" />
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us what you'd like the assistant to do…"
                className="w-full resize-none rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/50"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-brand-bg px-6 py-3.5 text-sm font-semibold text-white shadow-brand transition hover:brightness-110"
            >
              {sent ? "Thanks — we'll be in touch" : "Send proposal request"}
              {!sent && <ArrowRight className="h-4 w-4" />}
            </button>
          </div>
        </form>
      </div>

      <footer className="mt-24 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} TenBit Solutions — Proposal for Apple Kid.</div>
          <div>Crafted in Lahore, Pakistan.</div>
        </div>
      </footer>
    </section>
  );
}

function Field({ label, name, placeholder }: { label: string; name: string; placeholder: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/50"
      />
    </div>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center" data-reveal>
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}
