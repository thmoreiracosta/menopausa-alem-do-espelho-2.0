import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Minus, Plus } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------- Button ---------------- */

type BtnVariant = "solid" | "outline" | "ghost" | "accent" | "invert";

const btnBase =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-sans text-[0.8125rem] font-semibold tracking-[0.02em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const btnVariants: Record<BtnVariant, string> = {
  solid: "bg-primary text-primary-foreground hover:bg-teal shadow-soft hover:shadow-lift",
  outline: "border-2 border-primary/15 text-primary hover:border-cyan hover:bg-secondary",
  ghost: "text-primary hover:bg-secondary",
  accent: "bg-cyan text-accent-foreground hover:brightness-105 shadow-cyan",
  invert: "bg-cyan text-accent-foreground hover:brightness-105 shadow-cyan",
};

const btnSizes = {
  sm: "h-10 px-5",
  md: "h-12 px-7",
  lg: "h-14 px-9 text-sm",
} as const;

export function BrandButton({
  children,
  variant = "solid",
  size = "md",
  to,
  href,
  className,
  withArrow,
  type = "button",
  onClick,
}: {
  children: ReactNode;
  variant?: BtnVariant;
  size?: keyof typeof btnSizes;
  to?: string;
  href?: string;
  className?: string;
  withArrow?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = cn(btnBase, btnVariants[variant], btnSizes[size], className);
  const inner = (
    <>
      {children}
      {withArrow ? <ArrowRight className="h-4 w-4 shrink-0" /> : null}
    </>
  );
  if (to)
    return (
      <Link to={to as never} className={classes}>
        {inner}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  return (
    <button type={type} onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}

/* ---------------- Section header ---------------- */

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "invert";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        tone === "invert" && "text-primary-foreground",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow", tone === "invert" && "text-cyan")}>{eyebrow}</p>
      ) : null}
      <h2 className={cn("display-2 mt-4 text-primary", tone === "invert" && "text-primary-foreground")}>
        {title}
      </h2>
      <span className={cn("rule-accent mt-6", align === "center" && "mx-auto")} />
      {description ? (
        <p className={cn("lead mt-6", tone === "invert" && "text-primary-foreground/80")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

/* ---------------- Tag / Badge ---------------- */

export function Tag({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "accent" | "invert";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em]",
        tone === "default" && "bg-secondary text-teal",
        tone === "accent" && "bg-cyan text-accent-foreground",
        tone === "invert" && "bg-primary-foreground/12 text-primary-foreground",
      )}
    >
      {children}
    </span>
  );
}

/* ---------------- Breadcrumb ---------------- */

export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Trilha de navegação" className="flex flex-wrap items-center gap-2">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-2">
          {i > 0 ? <span className="text-border">/</span> : null}
          {item.to ? (
            <Link
              to={item.to as never}
              className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-teal"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ---------------- Article card ---------------- */

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readTime?: string;
  date?: string;
};

export function ArticleCard({ article, priority }: { article: Article; priority?: boolean }) {
  return (
    <Link
      to={"/blog/$slug" as never}
      params={{ slug: article.slug } as never}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:border-cyan/40 hover:shadow-lift"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          loading={priority ? undefined : "lazy"}
          className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.06]"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="eyebrow">{article.category}</p>
        <h3 className="display-3 mt-3 text-primary">{article.title}</h3>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
        <span className="link-underline mt-6 self-start">
          Ler artigo <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

/* ---------------- Benefit card ---------------- */

export function BenefitCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-lift">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-teal transition-colors group-hover:bg-cyan group-hover:text-accent-foreground">
        {icon}
      </span>
      <h3 className="mt-5 text-lg font-bold uppercase tracking-tight text-primary">{title}</h3>
      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

/* ---------------- Testimonial ---------------- */

export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-soft">
      <span className="text-6xl font-bold leading-none text-cyan">“</span>
      <blockquote className="mt-2 text-[1.15rem] leading-relaxed text-primary">{quote}</blockquote>
      <figcaption className="mt-8 border-t border-border pt-5">
        <p className="text-sm font-bold uppercase tracking-[0.1em] text-primary">{name}</p>
        <p className="mt-1 text-sm text-muted-foreground">{role}</p>
      </figcaption>
    </figure>
  );
}

/* ---------------- FAQ ---------------- */

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={cn(
              "overflow-hidden rounded-2xl border bg-card transition-colors",
              isOpen ? "border-cyan/50 shadow-soft" : "border-border",
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-6 p-6 text-left"
            >
              <span className="min-w-0 flex-1 text-[1.0625rem] font-semibold leading-snug text-primary">
                {item.q}
              </span>
              <span
                className={cn(
                  "grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors",
                  isOpen ? "bg-cyan text-accent-foreground" : "bg-secondary text-teal",
                )}
              >
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            {isOpen ? (
              <p className="max-w-3xl px-6 pb-6 text-[0.95rem] leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- Page hero ---------------- */

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  image?: string;
  breadcrumb: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-cyan/20 blur-3xl"
      />
      <div className="container-editorial relative grid gap-12 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-40">
        <div className="fade-up">
          <Breadcrumb items={breadcrumb} />
          <p className="eyebrow mt-8 text-cyan">{eyebrow}</p>
          <h1 className="display-1 mt-5 text-primary-foreground">{title}</h1>
          {description ? (
            <p className="lead mt-7 max-w-xl text-primary-foreground/80">{description}</p>
          ) : null}
          {children ? <div className="mt-10 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        {image ? (
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={image}
              alt=""
              className="aspect-[5/4] w-full object-cover"
              width={1400}
              height={1008}
            />
          </div>
        ) : null}
      </div>
    </header>
  );
}

/* ---------------- Final CTA band ---------------- */

export function CtaBand({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: string;
  primary: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full bg-cyan/18 blur-3xl"
      />
      <div className="container-editorial section-y relative text-center">
        <span className="rule-accent mx-auto" />
        <h2 className="display-2 mx-auto mt-7 max-w-4xl text-primary-foreground">{title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-primary-foreground/75">{text}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <BrandButton to={primary.to} variant="accent" size="lg" withArrow>
            {primary.label}
          </BrandButton>
          {secondary ? (
            <BrandButton
              to={secondary.to}
              variant="ghost"
              size="lg"
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              {secondary.label}
            </BrandButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stat / Step / Simple blocks ---------------- */

export function StepList({
  steps,
}: {
  steps: { step: string; title: string; text: string; highlight?: boolean; status?: string }[];
}) {
  return (
    <ol className="grid gap-5 lg:grid-cols-4">
      {steps.map((s) => (
        <li
          key={s.step}
          className={cn(
            "rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1",
            s.highlight
              ? "border-cyan bg-primary-foreground/8 shadow-cyan"
              : "border-primary-foreground/15",
          )}
        >
          <span className="text-4xl font-bold text-cyan/70">{s.step}</span>
          <h3 className="mt-5 text-xl font-bold uppercase text-primary-foreground">{s.title}</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-primary-foreground/70">{s.text}</p>
          {s.status ? (
            <span className="mt-6 inline-block">
              <Tag tone={s.highlight ? "accent" : "invert"}>{s.status}</Tag>
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function FeatureRow({
  items,
}: {
  items: { title: string; text: string; image?: string }[];
}) {
  return (
    <div className="space-y-6">
      {items.map((item, i) => (
        <div
          key={item.title}
          className={cn(
            "grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-soft lg:grid-cols-2",
          )}
        >
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className={cn(
                "h-full min-h-64 w-full object-cover",
                i % 2 === 1 && "lg:order-last",
              )}
            />
          ) : null}
          <div className="p-8 lg:p-12">
            <h3 className="display-3 text-primary">{item.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
