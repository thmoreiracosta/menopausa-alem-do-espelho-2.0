import React from "react";

import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  List,
} from "lucide-react";

import {
  articles,
  getRelatedArticles,
  type ArticleBlock,
} from "@/data/articles";

import { Tag } from "@/components/brand/ui-kit";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articles.find(
      (item) => item.slug === params.slug,
    );

    if (!article) {
      throw notFound();
    }

    const relatedArticles = getRelatedArticles(
      article.slug,
      article.tags,
      3,
    );

    return {
      article,
      relatedArticles,
    };
  },

  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          {
            title: loaderData.article.seoTitle,
          },
          {
            name: "description",
            content: loaderData.article.description,
          },
          {
            property: "og:title",
            content: loaderData.article.seoTitle,
          },
          {
            property: "og:description",
            content: loaderData.article.description,
          },
        ]
      : [],
  }),

  component: ArticlePage,
});

function ArticlePage() {
  const { article, relatedArticles } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-cyan/15 blur-3xl"
        />

        <div className="container-editorial relative py-20 lg:py-28">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-cyan"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Blog
          </Link>

          <div className="max-w-4xl">
            <Tag tone="invert">{article.category}</Tag>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/75">
              {article.description}
            </p>

            <div className="mt-8 flex items-center gap-2 text-sm text-primary-foreground/60">
              <Clock className="h-4 w-4" />
              {article.readTime} de leitura
            </div>
          </div>
        </div>
      </section>

      {/* IMAGEM PRINCIPAL */}
      <section className="container-editorial -mt-10">
        <div className="overflow-hidden rounded-3xl shadow-lift">
          <img
            src={article.image}
            alt={article.imageAlt}
            width={1200}
            height={750}
            className="aspect-[16/8] w-full object-cover"
          />
        </div>
      </section>

      {/* CONTEÚDO */}
      <article className="container-editorial py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 flex flex-wrap gap-2">
            {article.tags.map((tag: string) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="space-y-8">
            {article.blocks.map(
              (block: ArticleBlock, index: number) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p
                        key={index}
                        className="text-lg leading-[1.9] text-foreground/80"
                      >
                        {block.text}
                      </p>
                    );

                  case "heading":
                    return (
                      <h2
                        key={index}
                        className="pt-8 text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl"
                      >
                        {block.text}
                      </h2>
                    );

                  case "quote":
                    return (
                      <blockquote
                        key={index}
                        className="my-10 border-l-4 border-cyan bg-secondary/60 px-6 py-6 text-xl font-semibold italic leading-relaxed text-primary sm:px-8"
                      >
                        {block.text}
                      </blockquote>
                    );

                  case "list":
                    return (
                      <ul
                        key={index}
                        className="space-y-4 rounded-2xl bg-secondary/50 p-6 sm:p-8"
                      >
                        {block.items.map((item: string) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-lg leading-relaxed text-foreground/80"
                          >
                            <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan/15 text-teal">
                              <Check className="h-4 w-4" />
                            </span>

                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );

                  case "highlight":
                    return (
                      <div
                        key={index}
                        className="my-12 overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-soft sm:p-10"
                      >
                        <div className="flex items-start gap-4">
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan text-petrol-deep">
                            <List className="h-5 w-5" />
                          </div>

                          <div>
                            <h3 className="text-xl font-bold">
                              {block.title}
                            </h3>

                            <p className="mt-3 leading-relaxed text-primary-foreground/75">
                              {block.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );

                  default:
                    return null;
                }
              },
            )}
          </div>

          {/* ENQUETE */}
          <ArticlePoll article={article} />
        </div>
      </article>

      {/* ARTIGOS RELACIONADOS */}
      {relatedArticles.length > 0 && (
        <section className="bg-secondary">
          <div className="container-editorial section-y">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal">
                CONTINUE SUA LEITURA
              </span>

              <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
                Talvez você também queira entender isso.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedArticles.map((related: typeof articles[number]) => (
                <Link
                  key={related.slug}
                  to="/blog/$slug"
                  params={{ slug: related.slug }}
                  className="group overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan/50 hover:shadow-lift"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <Tag tone="accent">{related.category}</Tag>

                    <h3 className="mt-4 text-xl font-bold leading-tight text-primary transition-colors group-hover:text-teal">
                      {related.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {related.description}
                    </p>

                    <span className="link-underline mt-5">
                      Ler artigo
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* VOLTAR */}
      <section className="container-editorial pb-20 pt-12">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-teal"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para todos os artigos
        </Link>
      </section>
    </main>
  );
}

function ArticlePoll({
  article,
}: {
  article: (typeof articles)[number];
}) {
  const [selected, setSelected] = React.useState<string | null>(
    null,
  );

  const options = article.tags.slice(0, 5);

  return (
    <section className="mt-16 overflow-hidden rounded-3xl border border-border bg-secondary p-7 sm:p-10">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal">
          AGORA É COM VOCÊ
        </span>

        <h2 className="mt-3 text-2xl font-bold text-primary sm:text-3xl">
          Qual desses assuntos você gostaria de entender melhor?
        </h2>

        <p className="mt-3 leading-relaxed text-muted-foreground">
          Escolha uma opção. Sua resposta ajuda a encontrar conteúdos
          relacionados àquilo que mais interessa a você.
        </p>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {options.map((option: string) => {
          const active = selected === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => setSelected(option)}
              className={[
                "rounded-2xl border px-5 py-4 text-left text-sm font-bold transition-all duration-300",
                active
                  ? "border-cyan bg-cyan/10 text-teal shadow-soft"
                  : "border-border bg-card text-primary hover:-translate-y-0.5 hover:border-cyan/50 hover:shadow-soft",
              ].join(" ")}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="mt-7 rounded-2xl bg-primary p-6 text-primary-foreground">
          <p className="text-sm leading-relaxed text-primary-foreground/80">
            Você escolheu{" "}
            <strong className="text-cyan">{selected}</strong>.
          </p>

          <Link
            to="/blog"
            className="mt-3 inline-flex items-center gap-2 font-bold text-cyan transition-colors hover:text-white"
          >
            Ver conteúdos relacionados
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </section>
  );
}