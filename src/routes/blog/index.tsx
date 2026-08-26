import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3 } from "lucide-react";

import {
  BrandButton,
  SectionHeading,
  Tag,
} from "@/components/brand/ui-kit";

import { articles } from "@/data/articles";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      {
        title: "Blog | Menopausa Além do Espelho",
      },
      {
        name: "description",
        content:
          "Conteúdos sobre menopausa, composição corporal, massa muscular, exercício, sono, saúde óssea e autonomia.",
      },
    ],
  }),

  component: Blog,
});

function Blog() {
  const [featured, ...rest] = articles;

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-cyan/15 blur-3xl"
        />

        <div className="container-editorial relative py-28 lg:py-32">
          <Tag tone="invert">CONHECIMENTO</Tag>

          <h1 className="display-1 mt-6 max-w-4xl text-primary-foreground">
            Informação para entender melhor{" "}
            <span className="text-cyan">seu corpo.</span>
          </h1>

          <p className="lead mt-7 max-w-2xl text-primary-foreground/75">
            Conteúdos claros e práticos sobre menopausa, movimento,
            composição corporal, sono, saúde óssea e qualidade de vida.
          </p>
        </div>
      </section>

      {/* DESTAQUE */}
      <section className="container-editorial section-y">
        <SectionHeading
          eyebrow="ARTIGO EM DESTAQUE"
          title="Comece por onde você está."
          description="Conhecimento é o primeiro passo para fazer escolhas melhores."
        />

        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="group mt-12 grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan/50 hover:shadow-lift lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="relative min-h-[20rem] overflow-hidden lg:min-h-[30rem]">
            <img
              src={featured.image}
              alt={featured.imageAlt}
              width={1200}
              height={900}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5">
              <Tag tone="accent">{featured.category}</Tag>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-teal">
              <Clock3 className="h-4 w-4" />
              {featured.readTime} de leitura
            </div>

            <h2 className="display-3 mt-5 text-primary">
              {featured.title}
            </h2>

            <p className="mt-5 leading-relaxed text-muted-foreground">
              {featured.description}
            </p>

            <span className="link-underline mt-8">
              Ler artigo
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* TODOS OS ARTIGOS */}
      <section className="bg-secondary">
        <div className="container-editorial section-y">
          <SectionHeading
            eyebrow="TODOS OS ARTIGOS"
            title="Escolha um assunto para continuar."
            description="Conteúdos preparados para acompanhar diferentes momentos da sua jornada."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, index) => (
              <Link
                key={article.slug}
                to="/blog/$slug"
                params={{ slug: article.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan/50 hover:shadow-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    width={1200}
                    height={750}
                    loading={index > 1 ? "lazy" : "eager"}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />

                  <div className="absolute left-4 top-4">
                    <Tag tone="accent">{article.category}</Tag>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-teal">
                    <Clock3 className="h-3.5 w-3.5" />
                    {article.readTime}
                  </div>

                  <h2 className="mt-4 text-xl font-bold leading-tight text-primary transition-colors group-hover:text-teal">
                    {article.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {article.description}
                  </p>

                  <span className="link-underline mt-6">
                    Continuar lendo
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TEMAS */}
      <section className="container-editorial section-y">
        <SectionHeading
          eyebrow="EXPLORE POR TEMA"
          title="Encontre o assunto que você procura."
          description="Escolha um tema e descubra conteúdos relacionados."
          align="center"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            "MENOPAUSA",
            "COMPOSIÇÃO CORPORAL",
            "MASSA MUSCULAR",
            "SAÚDE ÓSSEA",
            "SONO",
            "EXERCÍCIO",
            "MOBILIDADE",
            "BEM-ESTAR",
          ].map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <BrandButton
            to="/para-mulheres"
            variant="accent"
            withArrow
          >
            CONHECER A JORNADA PARA MULHERES
          </BrandButton>
        </div>
      </section>
    </main>
  );
}