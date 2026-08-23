import { Link } from "@tanstack/react-router";

import { Logo } from "@/components/brand/Logo";
import { navItems } from "@/components/layout/SiteHeader";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-petrol-deep text-primary-foreground">
      <div className="container-editorial grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1fr] lg:py-20">
        <div>
          <Logo tone="invert" />

          <p className="mt-6 max-w-sm leading-relaxed text-primary-foreground/70">
            Conhecimento, movimento e autonomia para mulheres 40+ e para profissionais de Educação
            Física que atendem essa fase da vida.
          </p>

          <div className="mt-7 flex gap-3">
            {[
              { icon: InstagramIcon, label: "Instagram" },
              { icon: YoutubeIcon, label: "YouTube" },
              { icon: MailIcon, label: "E-mail profissional" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl bg-primary-foreground/10 transition-colors hover:bg-cyan hover:text-accent-foreground"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Navegação do rodapé">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
            Navegação
          </p>

          <ul className="mt-6 space-y-3">
            {[...navItems, { label: "Contato", to: "/contato" }].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to as never}
                  className="text-[0.95rem] text-primary-foreground/75 transition-colors hover:text-cyan"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
            Institucional
          </p>

          <ul className="mt-6 space-y-3 text-[0.95rem] text-primary-foreground/75">
            <li>
              <a href="#" className="transition-colors hover:text-cyan">
                Política de Privacidade
              </a>
            </li>

            <li>
              <a href="#" className="transition-colors hover:text-cyan">
                Termos de Uso
              </a>
            </li>

            <li>contato@menopausaalemdoespelho.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/12">
        <div className="container-editorial flex flex-col gap-2 py-6 text-xs uppercase tracking-[0.14em] text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Menopausa Além do Espelho</p>
          <p>Conteúdo educativo — não substitui avaliação individual</p>
        </div>
      </div>
    </footer>
  );
}