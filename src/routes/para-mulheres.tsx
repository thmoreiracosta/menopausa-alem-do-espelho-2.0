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
  return <></>;
}