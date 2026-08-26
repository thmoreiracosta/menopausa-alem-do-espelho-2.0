import { createFileRoute, Link } from "@tanstack/react-router";

import {
  Activity,
  ArrowRight,
  Bone,
  Dumbbell,
  HeartPulse,
  Move3d,
  Sparkles,
} from "lucide-react";

import heroWoman from "@/assets/hero-woman.jpg";
import cardWoman from "@/assets/card-woman.jpg";
import cardProfessional from "@/assets/card-professional.jpg";
import trainer from "@/assets/trainer.jpg";
import ebookMockup from "@/assets/ebook-mockup.jpg";

import {
  ArticleCard,
  BenefitCard,
  BrandButton,
  CtaBand,
  SectionHeading,
  StepList,
  Tag,
  TestimonialCard,
} from "@/components/brand/ui-kit";

import { articles, professional } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Menopausa Além do Espelho | Saúde, Movimento e Autonomia 40+",
      },
      {
        name: "description",
        content:
          "Conhecimento, movimento, produtos e formação para mulheres na menopausa e profissionais que desejam atuar com mais segurança.",
      },
      {
        property: "og:title",
        content: "Menopausa Além do Espelho",
      },
      {
        property: "og:description",
        content:
          "Um espaço de conhecimento, produtos e formação para mulheres na menopausa e profissionais.",
      },
    ],
  }),
  component: Home,
});

const benefits = [
  {
    icon: <Dumbbell className="h-6 w-6" />,
    title: "Força",
    text: "Capacidade de produzir força para sustentar a vida diária com segurança.",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Massa muscular",
    text: "Preservar músculo é preservar metabolismo, função e independência.",
  },
  {
    icon: <Bone className="h-6 w-6" />,
    title: "Saúde óssea",
    text: "Carga mecânica bem planejada é um dos estímulos centrais para o osso.",
  },
  {
    icon: <Move3d className="h-6 w-6" />,
    title: "Mobilidade",
    text: "Amplitude e controle de movimento para se mover com liberdade.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Autonomia",
    text: "Confiança para continuar fazendo o que importa por muito mais tempo.",
  },
  {
    icon: <HeartPulse className="h-6 w-6" />,
    title: "Qualidade de vida",
    text: "Sono, humor, energia e bem-estar acompanham um corpo que se move.",
  },
];

const professionalLadder = [
  {
    step: "01",
    title: "E-book",
    text: "Ponto de entrada com fundamentos aplicados à prática.",
    status: "Disponível",
  },
  {
    step: "02",
    title: "Imersão",
    text: "Formação intensiva para atuar com segurança técnica.",
    status: "Produto principal",
    highlight: true,
  },
  {
    step: "03",
    title: "Formação",
    text: "Programa aprofundado e certificado.",
    status: "Em desenvolvimento",
  },
  {
    step: "04",
    title: "Comunidade",
    text: "Rede de profissionais, casos e atualização contínua.",
    status: "Futuro",
  },
];

function Home() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-52 h-[42rem] w-[42rem] rounded-full bg-cyan/20 blur-3xl"
        />

        <div className="container-editorial relative grid min-h-[92vh] items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-36">
          <div className="fade-up">
            <Tag tone="invert">
              Perimenopausa · Menopausa · Pós-menopausa
            </Tag>

            <h1 className="display-1 mt-7 text-primary-foreground">
              Menopausa é mais do que uma mudança no{" "}
              <span className="text-cyan">espelho</span>.
            </h1>

            <p className="lead mt-7 max-w-xl text-primary-foreground/80">
              Informação, movimento e escolhas para viver essa fase com mais
              saúde, autonomia e qualidade de vida.
            </p>

            <p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/70">
              Conteúdos para mulheres, produtos para essa nova fase e formação
              para profissionais que desejam cuidar melhor.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <BrandButton
                to="/para-mulheres"
                size="lg"
                variant="accent"
                withArrow
              >
                Sou mulher
              </BrandButton>

              <BrandButton
                to="/para-profissionais"
                size="lg"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                Sou profissional
              </BrandButton>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-2 gap-6 border-t border-primary-foreground/15 pt-8 sm:grid-cols-3">
              {[
                ["40+", "Foco de atuação"],
                ["Ciência", "Base das decisões"],
                ["Autonomia", "Objetivo do cuidado"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-2xl font-bold text-cyan">{k}</dt>

                  <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-primary-foreground/60">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={heroWoman}
                alt="Mulher madura treinando com halter em estúdio de treinamento"
                width={1600}
                height={1200}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden max-w-[17rem] rounded-2xl bg-background p-6 shadow-lift lg:block">
              <p className="text-[1.05rem] font-semibold leading-snug text-primary">
                “Uma nova fase pede um novo olhar sobre o movimento.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          POSICIONAMENTO
      ========================================================= */}

      <section className="section-y">
        <div className="container-editorial grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            eyebrow="Menopausa Além do Espelho"
            title="Conhecimento para transformar escolhas."
          />

          <div className="space-y-6 leading-relaxed text-muted-foreground">
            <p>
              A menopausa é uma fase de transformação. O corpo muda, as
              prioridades podem mudar e novas necessidades aparecem.
            </p>

            <p>
              Nosso propósito é tornar esse processo mais compreensível,
              acolhedor e prático — aproximando ciência, movimento e autonomia
              da vida real.
            </p>

            <p>
              Por isso, o Menopausa Além do Espelho conecta dois caminhos:
              mulheres que querem cuidar melhor de si e profissionais que
              querem ampliar sua capacidade de atuação.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Para mulheres",
                  "Conteúdos, orientação e produtos pensados para essa fase.",
                ],
                [
                  "Para profissionais",
                  "Conhecimento e formação para aprimorar o atendimento.",
                ],
                [
                  "Informação",
                  "Conteúdo baseado em conhecimento e experiência.",
                ],
                [
                  "Autonomia",
                  "Mais segurança para tomar decisões ao longo da jornada.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <h3 className="text-base font-bold uppercase tracking-tight text-primary">
                    {title}
                  </h3>

                  <p className="mt-2 text-[0.95rem] text-muted-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DOIS PÚBLICOS
      ========================================================= */}

      <section className="section-y bg-secondary">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Encontre seu caminho"
            title="O que você está procurando?"
            description="Escolha o caminho que faz sentido para você e encontre conteúdos, produtos e soluções para sua jornada."
            align="center"
          />

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            <Link
              to="/para-mulheres"
              className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:border-cyan/50 hover:shadow-lift"
            >
              <div className="overflow-hidden">
                <img
                  src={cardWoman}
                  alt="Mulher madura praticando atividade física"
                  loading="lazy"
                  width={1200}
                  height={1408}
                  className="aspect-[16/11] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                />
              </div>

              <div className="p-8 lg:p-10">
                <Tag tone="accent">Sou mulher</Tag>

                <h3 className="display-3 mt-5 text-primary">
                  Quero cuidar melhor de mim nessa fase.
                </h3>

                <p className="mt-3.5 max-w-md leading-relaxed text-muted-foreground">
                  Entenda seu corpo, descubra possibilidades e encontre
                  conteúdos e produtos que podem acompanhar sua jornada.
                </p>

                <span className="link-underline mt-7">
                  Conhecer o caminho{" "}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            <Link
              to="/para-profissionais"
              className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:border-cyan/50 hover:shadow-lift"
            >
              <div className="overflow-hidden">
                <img
                  src={cardProfessional}
                  alt="Profissional de Educação Física"
                  loading="lazy"
                  width={1200}
                  height={1408}
                  className="aspect-[16/11] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                />
              </div>

              <div className="p-8 lg:p-10">
                <Tag tone="accent">Sou profissional</Tag>

                <h3 className="display-3 mt-5 text-primary">
                  Quero atender mulheres com mais segurança.
                </h3>

                <p className="mt-3.5 max-w-md leading-relaxed text-muted-foreground">
                  Amplie seu conhecimento, encontre formação especializada e
                  desenvolva uma atuação mais preparada para a menopausa.
                </p>

                <span className="link-underline mt-7">
                  Conhecer a formação{" "}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          JORNADA DA MULHER
      ========================================================= */}

      <section className="section-y">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Para mulheres"
            title="Uma jornada que começa pelo conhecimento."
            description="Antes de qualquer produto ou solução, vem a informação. Queremos construir uma relação contínua com mulheres que desejam entender melhor essa fase."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Descobrir",
                text: "Conteúdos para entender as mudanças do corpo e encontrar respostas para as dúvidas do dia a dia.",
              },
              {
                step: "02",
                title: "Cuidar",
                text: "Orientações, estratégias e produtos que possam apoiar uma rotina mais saudável e ativa.",
              },
              {
                step: "03",
                title: "Continuar",
                text: "Uma relação de longo prazo com conteúdo, novidades, produtos e novas possibilidades.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-border bg-card p-8 shadow-soft"
              >
                <span className="text-sm font-bold tracking-[0.18em] text-cyan">
                  {item.step}
                </span>

                <h3 className="display-3 mt-5 text-primary">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <BrandButton
              to="/para-mulheres"
              variant="accent"
              size="lg"
              withArrow
            >
              Quero conhecer
            </BrandButton>
          </div>
        </div>
      </section>

      {/* =========================================================
          BENEFÍCIOS
      ========================================================= */}

      <section className="section-y bg-secondary">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Conhecimento"
            title="Movimento é parte da transformação."
            description="Seis eixos que ajudam a compreender por que o movimento pode fazer parte de uma estratégia de saúde e autonomia."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTEÚDO COMO CAPTAÇÃO
      ========================================================= */}

      <section className="section-y">
        <div className="container-editorial">
          <div className="grid gap-6 sm:flex sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Conteúdo"
              title="Comece por onde você está."
              description="Informação de qualidade é o primeiro passo para fazer escolhas melhores."
              className="max-w-xl"
            />

            <BrandButton
              to="/blog"
              variant="outline"
              className="shrink-0"
              withArrow
            >
              Ver conteúdos
            </BrandButton>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROFISSIONAL
      ========================================================= */}

      <section className="bg-secondary">
        <div className="container-editorial grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-28">
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img
              src={trainer}
              alt="Retrato do profissional de Educação Física"
              loading="lazy"
              width={1104}
              height={1408}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div className="self-center">
            <SectionHeading
              eyebrow="Para profissionais"
              title="Conhecimento para quem cuida."
            />

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.16em] text-teal">
              {professional.name}
            </p>

            <p className="mt-2 text-[0.95rem] text-muted-foreground">
              {professional.credentials}
            </p>

            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              {professional.bio}
            </p>

            <BrandButton
              to="/para-profissionais"
              variant="outline"
              className="mt-9"
              withArrow
            >
              Conhecer o caminho profissional
            </BrandButton>
          </div>
        </div>
      </section>

      {/* =========================================================
          ESCADA PROFISSIONAL
      ========================================================= */}

      <section className="relative overflow-hidden bg-primary">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan/15 blur-3xl"
        />

        <div className="container-editorial section-y relative">
          <SectionHeading
            eyebrow="Educação profissional"
            title="Uma jornada de desenvolvimento."
            description="Do primeiro contato à formação continuada, uma estrutura pensada para acompanhar o profissional em diferentes momentos."
            tone="invert"
          />

          <div className="mt-14">
            <StepList steps={professionalLadder} />
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <BrandButton
              to="/imersao"
              variant="accent"
              size="lg"
              withArrow
            >
              Conheça a imersão
            </BrandButton>

            <BrandButton
              to="/para-profissionais"
              variant="ghost"
              size="lg"
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              Ver todos os caminhos
            </BrandButton>
          </div>
        </div>
      </section>

      {/* =========================================================
          E-BOOK / PRODUTO DE ENTRADA
      ========================================================= */}

      <section className="section-y">
        <div className="container-editorial grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-3xl bg-secondary p-10 lg:p-14">
            <img
              src={ebookMockup}
              alt="Mockup da capa do e-book"
              loading="lazy"
              width={1200}
              height={1200}
              className="mx-auto w-full max-w-md rounded-2xl object-contain"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="Produto de entrada"
              title="Conheça o e-book."
              description="Um material objetivo para transformar conhecimento em decisões práticas — seja para quem está vivendo essa fase, seja para quem trabalha com mulheres."
            />

            <ul className="mt-8 space-y-3">
              {[
                "Fundamentos aplicados ao contexto da menopausa",
                "Orientações práticas para o dia a dia",
                "Linguagem clara e acessível",
                "Conteúdo para começar sua jornada",
              ].map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-4 rounded-xl bg-secondary/70 px-5 py-4 text-[0.95rem] text-muted-foreground"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan" />
                  {benefit}
                </li>
              ))}
            </ul>

            <BrandButton
              to="/ebook"
              className="mt-9"
              size="lg"
              variant="accent"
              withArrow
            >
              Conhecer o e-book
            </BrandButton>
          </div>
        </div>
      </section>

      {/* =========================================================
          FUTURO ECOSSISTEMA DE PRODUTOS
      ========================================================= */}

      <section className="section-y bg-secondary">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Em construção"
            title="Mais do que conteúdo. Um ecossistema para essa fase."
            description="O Menopausa Além do Espelho pode reunir diferentes soluções para acompanhar mulheres e profissionais ao longo de suas jornadas."
            align="center"
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Conteúdo",
                text: "Artigos, materiais educativos e informações para ajudar você a entender melhor essa fase.",
              },
              {
                title: "Produtos",
                text: "Soluções e produtos selecionados para mulheres que querem cuidar de si com mais autonomia.",
              },
              {
                title: "Formação",
                text: "Cursos, imersões e experiências para profissionais que desejam aprofundar sua atuação.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft"
              >
                <h3 className="display-3 text-primary">{item.title}</h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          DEPOIMENTOS
      ========================================================= */}

      <section className="section-y">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Depoimentos"
            title="Quem já caminhou junto."
            align="center"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "NOME DA ALUNA",
                role: "Aluna · 52 anos",
              },
              {
                name: "NOME DA PROFISSIONAL",
                role: "Profissional de Educação Física",
              },
              {
                name: "NOME DA ALUNA",
                role: "Aluna · 47 anos",
              },
            ].map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote="[Espaço reservado para depoimento real — a ser preenchido com o relato da aluna ou profissional.]"
                name={testimonial.name}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA FINAL
      ========================================================= */}

      <CtaBand
        title="Seu corpo está mudando. Seu movimento também pode mudar."
        text="Comece pelo entendimento e encontre o caminho que faz sentido para você."
        primary={{
          label: "Sou mulher",
          to: "/para-mulheres",
        }}
        secondary={{
          label: "Sou profissional",
          to: "/para-profissionais",
        }}
      />
    </>
  );
}