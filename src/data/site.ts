import cardWoman from "@/assets/card-woman.jpg";
import mobility from "@/assets/mobility.jpg";
import nutrition from "@/assets/nutrition.jpg";
import sleep from "@/assets/sleep.jpg";
import strength from "@/assets/strength.jpg";
import walkOutdoor from "@/assets/walk-outdoor.jpg";
import type { Article } from "@/components/brand/ui-kit";

export const articles: Article[] = [
  {
    slug: "menopausa-engorda",
    category: "Menopausa",
    title: "Menopausa engorda?",
    excerpt:
      "O que realmente muda na composição corporal nessa fase e por que a balança conta apenas parte da história.",
    image: nutrition,
    readTime: "7 min de leitura",
    date: "12 de março de 2026",
  },
  {
    slug: "musculacao-na-menopausa",
    category: "Exercício",
    title: "Musculação na menopausa",
    excerpt:
      "Por que o treinamento de força é uma das estratégias mais consistentes para essa fase da vida.",
    image: strength,
    readTime: "9 min de leitura",
    date: "28 de fevereiro de 2026",
  },
  {
    slug: "preservar-massa-muscular-depois-dos-40",
    category: "Mulheres",
    title: "Como preservar massa muscular depois dos 40?",
    excerpt:
      "Estímulo, progressão e recuperação: os pilares de um planejamento que respeita o corpo maduro.",
    image: cardWoman,
    readTime: "8 min de leitura",
    date: "14 de fevereiro de 2026",
  },
  {
    slug: "menopausa-e-saude-ossea",
    category: "Saúde",
    title: "Menopausa e saúde óssea",
    excerpt:
      "A relação entre densidade óssea, carga mecânica e autonomia a longo prazo, explicada com clareza.",
    image: mobility,
    readTime: "6 min de leitura",
    date: "30 de janeiro de 2026",
  },
  {
    slug: "gordura-abdominal-menopausa",
    category: "Menopausa",
    title: "Por que aumenta a gordura abdominal?",
    excerpt:
      "Alterações hormonais, distribuição de gordura e o papel do exercício em um cenário complexo.",
    image: sleep,
    readTime: "7 min de leitura",
    date: "18 de janeiro de 2026",
  },
  {
    slug: "melhor-exercicio-para-menopausa",
    category: "Exercício",
    title: "Qual o melhor exercício para menopausa?",
    excerpt:
      "Não existe uma resposta única — existe uma combinação inteligente e sustentável ao longo do tempo.",
    image: walkOutdoor,
    readTime: "10 min de leitura",
    date: "05 de janeiro de 2026",
  },
];

export const categories = ["Mulheres", "Menopausa", "Exercício", "Saúde", "Profissionais"];

export const professional = {
  name: "NOME DO PROFISSIONAL",
  credentials: "CREF 000000-G/UF · Profissional de Educação Física",
  bio: "Profissional de Educação Física dedicado ao treinamento de mulheres 40+, com atuação orientada por evidências e por escuta. O trabalho parte de uma premissa simples: a menopausa não é uma doença, é uma transição — e o exercício é uma das ferramentas mais poderosas para atravessá-la com força, saúde e autonomia.",
};
