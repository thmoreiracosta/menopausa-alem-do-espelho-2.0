import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { BrandButton } from "@/components/brand/ui-kit";
import { cn } from "@/lib/utils";

export const navItems = [
  { label: "Início", to: "/" },
  { label: "Para Mulheres", to: "/para-mulheres" },
  { label: "Para Profissionais", to: "/para-profissionais" },
  { label: "E-book", to: "/ebook" },
  { label: "Imersão", to: "/imersao" },
  { label: "Blog", to: "/blog" },
  { label: "Sobre", to: "/sobre" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-400",
        scrolled ? "bg-background/90 shadow-soft backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="container-editorial grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:h-[5.5rem]">
        <Logo className="min-w-0" />

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-3.5 py-2 text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary data-[status=active]:bg-secondary data-[status=active]:text-teal"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <BrandButton to="/contato" size="sm" variant="accent" className="hidden sm:inline-flex">
            Quero saber mais
          </BrandButton>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary xl:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-primary text-primary-foreground">
          <div className="container-editorial grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <Logo tone="invert" className="min-w-0" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-foreground/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-editorial flex flex-1 flex-col justify-center gap-1 overflow-y-auto pb-12">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-primary-foreground/12 py-4 text-2xl font-bold uppercase tracking-tight"
              >
                {item.label}
              </Link>
            ))}
            <BrandButton
              to="/contato"
              size="lg"
              variant="accent"
              className="mt-8 self-start"
              withArrow
            >
              Quero saber mais
            </BrandButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
