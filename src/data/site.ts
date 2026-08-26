import {
  articles,  
} from "./articles";

export type { ArticleBlock, Article } from "./articles";

export {
  articles,  
};

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

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(
  currentSlug: string,
  tags: string[],
  limit = 3,
) {
  return articles
    .filter((article) => article.slug !== currentSlug)
    .map((article) => ({
      article,
      score: article.tags.filter((tag) => tags.includes(tag)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.article);
}