import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowRight, Bone, Dumbbell, HeartPulse, Move3d, Sparkles } from "lucide-react";
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
      { title: "Menopausa Além do Espelho | Exercício, Saúde e Autonomia 40+" },
      {
        name: "description",
        content:
          "Conhecimento, movimento e autonomia para viver a perimenopausa, menopausa e pós-menopausa com mais saúde e qualidade de vida.",
      },
      { property: "og:title", content: "Menopausa Além do Espelho" },
      {
        property: "og:description",
        content: "Exercício, ciência e acolhimento para mulheres 40+ e para profissionais.",
      },
    ],
  }),
  component: Home,
});

const benefits = [
  { icon: <Dumbbell className="h-6 w-6" />, title: "Força", text: "Capacidade de produzir força para sustentar a vida diária com segurança." },
  { icon: <Activity className="h-6 w-6" />, title: "Massa muscular", text: "Preservar músculo é preservar metabolismo, função e independência." },
  { icon: <Bone className="h-6 w-6" />, title: "Saúde óssea", text: "Carga mecânica bem planejada é um dos estímulos centrais para o osso." },
  { icon: <Move3d className="h-6 w-6" />, title: "Mobilidade", text: "Amplitude e controle de movimento para se mover com liberdade." },
  { icon: <Sparkles className="h-6 w-6" />, title: "Autonomia", text: "Confiança para continuar fazendo o que importa, por muito mais tempo." },
  { icon: <HeartPulse className="h-6 w-6" />, title: "Qualidade de vida", text: "Sono, humor, energia e bem-estar acompanham o corpo que se move." },
];

const ladder = [
  { step: "01", title: "E-book", text: "Ponto de entrada com fundamentos aplicados à prática.", status: "Disponível" },
  { step: "02", title: "Imersão", text: "Formação intensiva para atuar com segurança técnica.", status: "Produto principal", highlight: true },
  { step: "03", title: "Formação", text: "Programa aprofundado e certificado — em desenvolvimento.", status: "Em breve" },
  { step: "04", title: "Comunidade", text: "Rede de profissionais, casos e atualização contínua.", status: "Futuro" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-52 h-[42rem] w-[42rem] rounded-full bg-cyan/20 blur-3xl"
        />
        <div className="container-editorial relative grid min-h-[92vh] items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24 lg:pt-36">
          <div className="fade-up">
            <Tag tone="invert">Perimenopausa · Menopausa · Pós-menopausa</Tag>
            <h1 className="display-1 mt-7 text-primary-foreground">
              Menopausa é mais do que uma mudança no{" "}
              <span className="text-cyan">espelho</span>.
            </h1>
            <p className="lead mt-7 max-w-xl text-primary-foreground/80">
              Conhecimento, movimento e autonomia para viver essa fase com mais saúde e qualidade de
              vida.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <BrandButton to="/para-mulheres" size="lg" variant="accent" withArrow>
                Conheça o método
              </BrandButton>
              <BrandButton
                to="/blog"
                size="lg"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                Explore os conteúdos
              </BrandButton>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-2 gap-6 border-t border-primary-foreground/15 pt-8 sm:grid-cols-3">
              {[
                ["40+", "Foco de atuação"],
                ["Ciência", "Base das decisões"],
                ["Acolhimento", "Forma de cuidar"],
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

      {/* UMA NOVA FASE */}
      <section className="section-y">
        <div className="container-editorial grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading eyebrow="Contexto" title="Uma nova fase. Um novo olhar." />
          <div className="space-y-6 leading-relaxed text-muted-foreground">
            <p>
              A menopausa envolve transformações reais no corpo: mudanças na composição corporal, na
              massa muscular, na saúde óssea, no sono, na energia e na percepção de bem-estar. Nada
              disso é doença — é transição.
            </p>
            <p>
              Entender o que acontece muda a forma como se decide. E o exercício, quando bem
              orientado, deixa de ser uma tentativa de corrigir o corpo e passa a ser uma forma de
              sustentar saúde, função e independência nas próximas décadas.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                ["Composição corporal", "O que muda e o que ainda pode ser conduzido."],
                ["Massa muscular", "O tecido que protege a sua autonomia."],
                ["Saúde óssea", "Carga como estímulo, não como risco."],
                ["Sono e bem-estar", "Recuperação como parte do plano."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="text-base font-bold uppercase tracking-tight text-primary">{t}</h3>
                  <p className="mt-2 text-[0.95rem] text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOIS CAMINHOS */}
      <section className="section-y bg-secondary">
        <div className="container-editorial">
          <SectionHeading eyebrow="Dois caminhos" title="O que você está procurando?" align="center" />
          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {[
              {
                tag: "Sou mulher",
                title: "Quero cuidar de mim nessa fase",
                text: "Quero entender melhor as mudanças do meu corpo e descobrir como o exercício pode fazer parte de uma vida mais saudável e ativa.",
                cta: "Conhecer conteúdos",
                to: "/para-mulheres",
                image: cardWoman,
              },
              {
                tag: "Sou profissional",
                title: "Quero atender com mais segurança",
                text: "Quero ampliar meu conhecimento e aprimorar minha atuação com mulheres na menopausa.",
                cta: "Conhecer a imersão",
                to: "/para-profissionais",
                image: cardProfessional,
              },
            ].map((card) => (
              <Link
                key={card.tag}
                to={card.to}
                className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:border-cyan/50 hover:shadow-lift"
              >
                <div className="overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    width={1200}
                    height={1408}
                    className="aspect-[16/11] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <Tag tone="accent">{card.tag}</Tag>
                  <h3 className="display-3 mt-5 text-primary">{card.title}</h3>
                  <p className="mt-3.5 max-w-md leading-relaxed text-muted-foreground">
                    {card.text}
                  </p>
                  <span className="link-underline mt-7">
                    {card.cta} <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="section-y">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Benefícios"
            title="Movimento é parte da transformação"
            description="Seis eixos que orientam cada decisão de treinamento — do primeiro contato à manutenção a longo prazo."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <BenefitCard key={b.title} {...b} />
            ))}
          </div>
        </div>
      </section>

      {/* PROFISSIONAL */}
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
            <SectionHeading eyebrow="Quem conduz" title="Conheça o trabalho do profissional" />
            <p className="mt-7 text-sm font-bold uppercase tracking-[0.16em] text-teal">
              {professional.name}
            </p>
            <p className="mt-2 text-[0.95rem] text-muted-foreground">{professional.credentials}</p>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{professional.bio}</p>
            <BrandButton to="/sobre" variant="outline" className="mt-9" withArrow>
              Conheça minha história
            </BrandButton>
          </div>
        </div>
      </section>

      {/* CONTEÚDOS */}
      <section className="section-y">
        <div className="container-editorial">
          <div className="grid gap-6 sm:flex sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Blog" title="Conteúdos para você" className="max-w-xl" />
            <BrandButton to="/blog" variant="outline" className="shrink-0" withArrow>
              Ver todos
            </BrandButton>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      {/* ESCADA PROFISSIONAL */}
      <section className="relative overflow-hidden bg-primary">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan/15 blur-3xl"
        />
        <div className="container-editorial section-y relative">
          <SectionHeading
            eyebrow="Educação profissional"
            title="Para profissionais de Educação Física"
            description="Uma escada de conhecimento construída para elevar o padrão de atendimento a mulheres na menopausa."
            tone="invert"
          />
          <div className="mt-14">
            <StepList steps={ladder} />
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <BrandButton to="/imersao" variant="accent" size="lg" withArrow>
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

      {/* E-BOOK */}
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
              eyebrow="Produto disponível"
              title="Conheça o e-book"
              description="[Subtítulo do e-book — placeholder]. Um material de entrada objetivo, construído para traduzir conhecimento em decisões práticas."
            />
            <ul className="mt-8 space-y-3">
              {[
                "Fundamentos aplicados ao contexto da menopausa",
                "Orientações práticas para o dia a dia",
                "Linguagem clara, sem promessas irreais",
                "[Benefício placeholder]",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-4 rounded-xl bg-secondary/70 px-5 py-4 text-[0.95rem] text-muted-foreground"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan" />
                  {b}
                </li>
              ))}
            </ul>
            <BrandButton to="/ebook" className="mt-9" size="lg" variant="accent" withArrow>
              Conhecer o e-book
            </BrandButton>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-secondary">
        <div className="container-editorial section-y">
          <SectionHeading eyebrow="Depoimentos" title="Quem já caminhou junto" align="center" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              { name: "NOME DA ALUNA", role: "Aluna · 52 anos" },
              { name: "NOME DA ALUNA", role: "Profissional de Educação Física" },
              { name: "NOME DA ALUNA", role: "Aluna · 47 anos" },
            ].map((t, i) => (
              <TestimonialCard
                key={i}
                quote="[Espaço reservado para depoimento real — a ser preenchido com o relato da aluna ou profissional.]"
                name={t.name}
                role={t.role}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Seu corpo está mudando. Seu movimento também pode mudar."
        text="Comece pelo entendimento e siga pelo movimento — com orientação, consistência e respeito à sua fase."
        primary={{ label: "Começar agora", to: "/contato" }}
        secondary={{ label: "Explorar conteúdos", to: "/blog" }}
      />
    </>
  );
}
