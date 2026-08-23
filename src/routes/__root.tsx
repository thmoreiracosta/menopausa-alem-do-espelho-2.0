import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";

import { reportLovableError } from "../lib/lovable-error-reporting";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Erro 404</p>

        <h1 className="display-2 mt-6 text-primary">
          Página não encontrada
        </h1>

        <p className="mt-5 text-sm text-muted-foreground">
          O conteúdo que você procura não existe ou foi movido.
        </p>

        <div className="mt-9">
          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-7 font-sans text-[0.72rem] font-medium uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-cyan"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-3 text-primary">
          Esta página não carregou
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          Algo deu errado do nosso lado. Você pode tentar novamente ou voltar
          ao início.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-7 font-sans text-[0.72rem] font-medium uppercase tracking-[0.18em] text-primary-foreground"
          >
            Tentar novamente
          </button>

          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border px-7 font-sans text-[0.72rem] font-medium uppercase tracking-[0.18em] text-primary"
          >
            Início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          title: "Menopausa Além do Espelho",
        },
        {
          name: "description",
          content:
            "Conhecimento, movimento e autonomia para mulheres na perimenopausa, menopausa e pós-menopausa.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],

      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap",
        },
        {
          rel: "icon",
          href: "/favicon.ico",
          type: "image/x-icon",
        },
      ],
    }),

    component: RootComponent,

    notFoundComponent: NotFoundComponent,

    errorComponent: ErrorComponent,
  });

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />

      <div className="flex min-h-screen flex-col">
        <SiteHeader />

        <main className="flex-1">
          <Outlet />
        </main>

        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}