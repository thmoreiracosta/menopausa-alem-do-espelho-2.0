import {
  articles,
  type Article,
  type ArticleBlock,
  getArticleBySlug,
  getRelatedArticles,
} from "./articles";

export type { Article, ArticleBlock };

export { articles, getArticleBySlug, getRelatedArticles };

export const categories = [
  "Mulheres",
  "Menopausa",
  "Exercício",
  "Saúde",
  "Profissionais",
];

export const professional = {
  name: "NOME DO PROFISSIONAL",
  credentials: "CREF 000000-G/UF · Profissional de Educação Física",
  bio: "Profissional de Educação Física dedicado ao treinamento de mulheres 40+, com atuação orientada por evidências e por escuta. O trabalho parte de uma premissa simples: a menopausa não é uma doença, é uma transição — e o exercício é uma das ferramentas mais poderosas para atravessá-la com força, saúde e autonomia.",
};