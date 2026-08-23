import { createFileRoute } from "@tanstack/react-router";

import cardWoman from "@/assets/card-woman.jpg";
import mobility from "@/assets/mobility.jpg";
import sleep from "@/assets/sleep.jpg";
import strength from "@/assets/strength.jpg";
import walkOutdoor from "@/assets/walk-outdoor.jpg";

import {
  ArticleCard,
  BrandButton,
  CtaBand,
  FeatureRow,
  PageHero,
  SectionHeading,
  Tag,
} from "@/components/brand/ui-kit";

import { articles } from "@/data/site";

export const Route = createFileRoute("/para-mulheres")({
  head: () => ({
    meta: [
      {
        title: "Para Mulheres | Menopausa Além do Espelho",
      },
      {
        name: "description",
        content:
          "Entenda seu corpo na menopausa: composição corporal, massa muscular, saúde óssea, sono e exercício com mais autonomia.",
      },
      {
        property: "og:title",
        content: "Para Mulheres | Menopausa Além do Espelho",
      },
      {
        property: "og:description",
        content:
          "Conteúdos e orientação para viver a menopausa com mais saúde e movimento.",
      },
    ],
  }),

  component: ParaMulheres,
});

function ParaMulheres() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <main className="min-h-screen">
      <PageHero
        eyebrow="PARA MULHERES"
        title="Menopausa não é o fim. É uma nova fase."
        description="Entenda as mudanças do seu corpo e encontre caminhos práticos para cuidar da composição corporal, da força, do sono, dos ossos e da sua qualidade de vida."
        image={cardWoman}
        breadcrumb={[
          {
            label: "Início",
            to: "/",
          },
          {
            label: "Para Mulheres",
          },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CUIDADO INTEGRAL"
          title="Seu corpo está mudando. Seu cuidado também pode mudar."
          description="Informação de qualidade para você compreender o que acontece durante a menopausa e tomar decisões com mais autonomia."
        />

        <div className="mt-10">
          <FeatureRow
            items={[
              {
                title: "Força e massa muscular",
                text: "Preservar e desenvolver a massa muscular é importante para autonomia, metabolismo, equilíbrio e qualidade de vida.",
                image: strength,
              },
              {
                title: "Movimento e mobilidade",
                text: "Movimentar o corpo pode ajudar na disposição, mobilidade, equilíbrio e na construção de uma rotina mais ativa.",
                image: mobility,
              },
              {
                title: "Sono e recuperação",
                text: "O sono também merece atenção. Conheça estratégias para construir uma rotina que favoreça descanso e recuperação.",
                image: sleep,
              },
              {
                title: "Atividade física",
                text: "Caminhar, fortalecer e manter-se ativa são formas importantes de cuidar do corpo durante essa nova etapa.",
                image: walkOutdoor,
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="POR ONDE COMEÇAR"
            title="Informação para entender melhor o seu corpo"
            description="Explore conteúdos preparados para ajudar você a compreender as transformações da menopausa."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <Tag>COMPOSIÇÃO CORPORAL</Tag>
            <Tag>MASSA MUSCULAR</Tag>
            <Tag>SAÚDE ÓSSEA</Tag>
            <Tag>SONO</Tag>
            <Tag>EXERCÍCIO</Tag>
            <Tag>BEM-ESTAR</Tag>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard
                key={article.title}
                article={article}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <BrandButton href="/artigos">
              VER TODOS OS ARTIGOS
            </BrandButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <CtaBand
          title="Você não precisa atravessar essa fase sozinha."
          text="Conhecimento, movimento e cuidado podem transformar a forma como você vive a menopausa."
          primary={{
            label: "QUERO SABER MAIS",
            to: "/contato",
          }}
        />
      </section>
    </main>
  );
}