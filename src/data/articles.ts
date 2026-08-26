import cardWoman from "@/assets/card-woman.jpg";
import strength from "@/assets/strength.jpg";
import mobility from "@/assets/mobility.jpg";
import nutrition from "@/assets/nutrition.jpg";
import sleep from "@/assets/sleep.jpg";
import walkOutdoor from "@/assets/walk-outdoor.jpg";

export type ArticleBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "highlight";
      title: string;
      text: string;
    };

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  tags: string[];
  blocks: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "o-que-e-menopausa",
    title: "O que é menopausa?",
    seoTitle:
      "O que é menopausa? Entenda o que acontece com o corpo da mulher",
    description:
      "Entenda o que realmente significa menopausa, o que acontece com os hormônios e por que o corpo pode passar por tantas mudanças nessa fase.",
    category: "MENOPAUSA",
    readTime: "6 min",
    image: cardWoman,
    imageAlt: "Mulher madura praticando atividade física",
    tags: [
      "MENOPAUSA",
      "COMPOSIÇÃO CORPORAL",
      "MASSA MUSCULAR",
      "SONO",
      "BEM-ESTAR",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Você já ouviu alguém dizer: “Entrei na menopausa”?",
      },
      {
        type: "paragraph",
        text: "Mas você sabe exatamente o que isso significa?",
      },
      {
        type: "paragraph",
        text: "A menopausa não acontece de um dia para o outro. Ela é uma fase natural da vida da mulher e marca o momento em que os ciclos menstruais chegam ao fim.",
      },
      {
        type: "quote",
        text: "“Mas por que meu corpo mudou tanto?”",
      },
      {
        type: "heading",
        text: "O que é, afinal, a menopausa?",
      },
      {
        type: "paragraph",
        text: "Menopausa é o nome dado à última menstruação da mulher.",
      },
      {
        type: "paragraph",
        text: "Mas existe uma particularidade: não é possível saber naquele momento que aquela foi realmente a última menstruação.",
      },
      {
        type: "paragraph",
        text: "A confirmação acontece retrospectivamente, quando a mulher permanece 12 meses consecutivos sem menstruar, sem outra causa que explique a ausência da menstruação.",
      },
      {
        type: "paragraph",
        text: "É por isso que muitas mulheres passam meses ou até anos percebendo mudanças no corpo antes de saber que estão realmente na menopausa.",
      },
      {
        type: "heading",
        text: "E o que acontece com os hormônios?",
      },
      {
        type: "paragraph",
        text: "Ao longo da vida, os ovários produzem hormônios como estrogênio e progesterona.",
      },
      {
        type: "paragraph",
        text: "Com o envelhecimento reprodutivo, essa produção vai mudando.",
      },
      {
        type: "paragraph",
        text: "Essas alterações podem estar relacionadas a várias mudanças que algumas mulheres percebem:",
      },
      {
        type: "list",
        items: [
          "alterações no ciclo menstrual;",
          "ondas de calor;",
          "suor noturno;",
          "alterações no sono;",
          "mudanças de humor;",
          "alterações na composição corporal;",
          "redução da massa muscular;",
          "sintomas geniturinários;",
          "mudanças na libido.",
        ],
      },
      {
        type: "paragraph",
        text: "Mas existe uma coisa importante: cada mulher vive essa fase de uma maneira.",
      },
      {
        type: "paragraph",
        text: "Algumas apresentam muitos sintomas. Outras apresentam poucos. Algumas praticamente não sentem mudanças importantes.",
      },
      {
        type: "heading",
        text: "E a barriga? E o peso?",
      },
      {
        type: "paragraph",
        text: "Essa é uma das dúvidas mais comuns.",
      },
      {
        type: "paragraph",
        text: "Durante essa fase, podem ocorrer mudanças na composição corporal e na distribuição da gordura.",
      },
      {
        type: "paragraph",
        text: "Mas isso não significa que “a menopausa engorda”.",
      },
      {
        type: "paragraph",
        text: "Peso corporal é resultado de vários fatores: idade, atividade física, alimentação, sono, massa muscular, genética, rotina e diversos fatores metabólicos.",
      },
      {
        type: "paragraph",
        text: "Por isso, simplesmente tentar comer cada vez menos pode não ser a melhor estratégia.",
      },
      {
        type: "highlight",
        title: "O foco precisa ser muito maior",
        text: "Preservar força, massa muscular, saúde óssea, condicionamento e autonomia.",
      },
      {
        type: "heading",
        text: "Menopausa não é o fim",
      },
      {
        type: "paragraph",
        text: "Talvez essa seja a parte mais importante.",
      },
      {
        type: "paragraph",
        text: "A menopausa não significa que a mulher precisa aceitar: “Agora é assim.”",
      },
      {
        type: "paragraph",
        text: "É uma nova fase que exige novas estratégias.",
      },
      {
        type: "paragraph",
        text: "O exercício físico, especialmente o treinamento de força quando adequado, pode ser um importante aliado para a saúde e a funcionalidade.",
      },
      {
        type: "paragraph",
        text: "Cuidar do corpo não precisa significar perseguir o corpo que você tinha aos 25 anos.",
      },
      {
        type: "quote",
        text: "Pode significar construir um corpo forte para os próximos 25 anos.",
      },
    ],
  },

  {
    slug: "climaterio-perimenopausa-menopausa",
    title: "Climatério, perimenopausa e menopausa: qual a diferença?",
    seoTitle:
      "Climatério, perimenopausa e menopausa: entenda as diferenças",
    description:
      "Climatério, perimenopausa e menopausa são a mesma coisa? Entenda cada termo e descubra por que conhecer essas diferenças ajuda a compreender melhor o próprio corpo.",
    category: "MENOPAUSA",
    readTime: "5 min",
    image: mobility,
    imageAlt: "Mulher madura realizando exercício de mobilidade",
    tags: ["MENOPAUSA", "SONO", "BEM-ESTAR"],
    blocks: [
      {
        type: "paragraph",
        text: "Climatério, perimenopausa e menopausa. Você provavelmente já ouviu essas três palavras, mas talvez ainda exista uma certa confusão sobre o que cada uma significa.",
      },
      {
        type: "paragraph",
        text: "E não é para menos. Elas estão relacionadas, mas não são sinônimos.",
      },
      {
        type: "heading",
        text: "O que é climatério?",
      },
      {
        type: "paragraph",
        text: "Climatério é o período de transição entre a fase reprodutiva e a fase não reprodutiva da mulher.",
      },
      {
        type: "paragraph",
        text: "É um conceito mais amplo e pode envolver diferentes mudanças hormonais, menstruais e corporais ao longo dessa transição.",
      },
      {
        type: "heading",
        text: "E a perimenopausa?",
      },
      {
        type: "paragraph",
        text: "A perimenopausa corresponde ao período de transição que antecede a menopausa e pode incluir os anos em que os ciclos menstruais começam a apresentar alterações.",
      },
      {
        type: "paragraph",
        text: "É justamente nessa fase que muitas mulheres começam a perceber que alguma coisa mudou.",
      },
      {
        type: "list",
        items: [
          "ciclos mais curtos ou mais longos;",
          "alterações no fluxo menstrual;",
          "ondas de calor;",
          "mudanças no sono;",
          "alterações de humor;",
          "mudanças na composição corporal.",
        ],
      },
      {
        type: "heading",
        text: "Então quando acontece a menopausa?",
      },
      {
        type: "paragraph",
        text: "A menopausa é um momento específico: a última menstruação.",
      },
      {
        type: "paragraph",
        text: "Ela é confirmada retrospectivamente após 12 meses consecutivos sem menstruar, quando não existe outra causa para a ausência.",
      },
      {
        type: "heading",
        text: "Por que entender essa diferença importa?",
      },
      {
        type: "paragraph",
        text: "Porque muitas mulheres passam anos percebendo mudanças e acreditando que existe algo errado com elas.",
      },
      {
        type: "paragraph",
        text: "Compreender o processo ajuda a substituir medo por informação.",
      },
      {
        type: "highlight",
        title: "Conhecer o processo muda a forma de enxergá-lo",
        text: "Seu corpo está passando por uma transição. Conhecer essa transição pode ajudar você a fazer escolhas melhores.",
      },
    ],
  },

  {
    slug: "composicao-corporal-na-menopausa",
    title: "Por que o corpo muda na menopausa?",
    seoTitle:
      "Por que o corpo muda na menopausa? Entenda peso, gordura e músculos",
    description:
      "Peso, cintura, massa muscular e disposição podem mudar nessa fase. Entenda por que isso acontece e quais fatores realmente importam.",
    category: "COMPOSIÇÃO CORPORAL",
    readTime: "7 min",
    image: strength,
    imageAlt: "Mulher madura realizando exercício de força",
    tags: [
      "COMPOSIÇÃO CORPORAL",
      "MASSA MUSCULAR",
      "EXERCÍCIO",
      "SAÚDE ÓSSEA",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Talvez você tenha percebido uma coisa: “Eu continuo fazendo praticamente as mesmas coisas, mas meu corpo parece diferente.”",
      },
      {
        type: "paragraph",
        text: "Essa percepção é bastante comum durante o envelhecimento e as transições hormonais.",
      },
      {
        type: "heading",
        text: "O corpo não é estático",
      },
      {
        type: "paragraph",
        text: "Com o passar dos anos, composição corporal, massa muscular, distribuição de gordura, sono, nível de atividade física e diversos outros fatores podem mudar.",
      },
      {
        type: "paragraph",
        text: "Durante a transição menopausal, as alterações hormonais também podem participar desse processo.",
      },
      {
        type: "heading",
        text: "Não é apenas uma questão de peso",
      },
      {
        type: "paragraph",
        text: "A balança conta apenas uma parte da história.",
      },
      {
        type: "paragraph",
        text: "Duas mulheres podem ter exatamente o mesmo peso e apresentar composição corporal completamente diferente.",
      },
      {
        type: "paragraph",
        text: "Por isso, olhar para força, massa muscular, capacidade funcional e saúde óssea pode ser muito mais interessante do que simplesmente perseguir um número na balança.",
      },
      {
        type: "heading",
        text: "E a massa muscular?",
      },
      {
        type: "paragraph",
        text: "O envelhecimento está associado a mudanças progressivas na massa e na função muscular.",
      },
      {
        type: "paragraph",
        text: "Por isso, manter-se fisicamente ativa e incluir exercícios de força quando apropriado pode ser uma estratégia importante para preservar funcionalidade e autonomia.",
      },
      {
        type: "heading",
        text: "O objetivo pode mudar",
      },
      {
        type: "paragraph",
        text: "Talvez aos 25 anos o objetivo fosse simplesmente estética.",
      },
      {
        type: "paragraph",
        text: "Aos 50, 60 ou 70, talvez o objetivo mais importante seja conseguir subir escadas, carregar compras, levantar da cadeira, brincar com os netos e continuar fazendo aquilo que você ama.",
      },
      {
        type: "quote",
        text: "Um corpo forte é uma ferramenta de autonomia.",
      },
    ],
  },

  {
    slug: "exercicio-na-menopausa",
    title: "Exercício na menopausa: por onde começar?",
    seoTitle:
      "Exercício na menopausa: por onde começar e quais atividades fazer",
    description:
      "Caminhada, treinamento de força, mobilidade e outras atividades podem fazer parte de uma rotina mais ativa. Veja como começar.",
    category: "EXERCÍCIO",
    readTime: "6 min",
    image: walkOutdoor,
    imageAlt: "Mulher madura caminhando ao ar livre",
    tags: [
      "EXERCÍCIO",
      "MASSA MUSCULAR",
      "SAÚDE ÓSSEA",
      "MOBILIDADE",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Quando alguém fala que precisa fazer exercício, muitas mulheres imaginam imediatamente academia, aparelhos e treinos difíceis.",
      },
      {
        type: "paragraph",
        text: "Mas começar pode ser muito mais simples.",
      },
      {
        type: "heading",
        text: "O primeiro passo é sair do zero",
      },
      {
        type: "paragraph",
        text: "Se você está sedentária, aumentar gradualmente a quantidade de movimento já pode ser uma mudança importante.",
      },
      {
        type: "paragraph",
        text: "Caminhar, levantar mais vezes durante o dia, subir escadas e realizar atividades que façam parte da sua rotina são formas de começar a se movimentar mais.",
      },
      {
        type: "heading",
        text: "E o treinamento de força?",
      },
      {
        type: "paragraph",
        text: "O treinamento de força merece atenção especial porque trabalha capacidades importantes para a vida diária.",
      },
      {
        type: "paragraph",
        text: "Ele pode contribuir para preservar e desenvolver força e massa muscular, além de participar de estratégias voltadas à saúde óssea e funcionalidade.",
      },
      {
        type: "heading",
        text: "Você não precisa começar pesado",
      },
      {
        type: "paragraph",
        text: "Um bom programa deve considerar seu nível atual, histórico de atividade física, limitações, objetivos e condições individuais.",
      },
      {
        type: "paragraph",
        text: "A progressão é mais importante do que tentar fazer tudo de uma vez.",
      },
      {
        type: "heading",
        text: "Movimento também é autonomia",
      },
      {
        type: "paragraph",
        text: "O objetivo não precisa ser virar atleta.",
      },
      {
        type: "paragraph",
        text: "Pode ser conseguir viver melhor.",
      },
      {
        type: "paragraph",
        text: "Caminhar sem medo, carregar suas compras, levantar da cadeira, brincar, viajar e continuar independente.",
      },
      {
        type: "highlight",
        title: "Exercício como ferramenta",
        text: "Exercício não precisa ser uma punição pelo corpo que você tem. Pode ser uma ferramenta para construir o corpo que você quer ter daqui a alguns anos.",
      },
    ],
  },

  {
    slug: "menopausa-engorda",
    title: "Menopausa engorda?",
    seoTitle:
      "Menopausa engorda? Entenda o que realmente acontece com o corpo",
    description:
      "O que realmente muda na composição corporal durante a menopausa e por que o número da balança conta apenas uma parte da história.",
    category: "MENOPAUSA",
    readTime: "7 min",
    image: nutrition,
    imageAlt: "Mulher madura refletindo sobre alimentação e saúde",
    tags: [
      "MENOPAUSA",
      "COMPOSIÇÃO CORPORAL",
      "NUTRIÇÃO",
      "MASSA MUSCULAR",
      "BEM-ESTAR",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "“Depois da menopausa comecei a engordar.” Essa é uma frase muito comum, mas será que a menopausa, sozinha, é responsável pelo ganho de peso?",
      },
      {
        type: "paragraph",
        text: "A resposta é mais complexa do que simplesmente dizer sim ou não. Durante essa fase acontecem mudanças hormonais, metabólicas, comportamentais e relacionadas ao próprio envelhecimento.",
      },
      {
        type: "heading",
        text: "A balança não conta toda a história",
      },
      {
        type: "paragraph",
        text: "Peso corporal é apenas uma medida. Ele não mostra sozinho quanto do corpo é músculo, gordura, água ou outros tecidos.",
      },
      {
        type: "paragraph",
        text: "Duas mulheres podem pesar exatamente o mesmo e apresentar composição corporal, força e capacidade funcional completamente diferentes.",
      },
      {
        type: "heading",
        text: "Por que o corpo pode mudar?",
      },
      {
        type: "paragraph",
        text: "Com o passar dos anos, é comum ocorrer redução progressiva da massa muscular e alteração nos níveis de atividade física. A transição menopausal também pode estar associada a mudanças na distribuição da gordura corporal.",
      },
      {
        type: "list",
        items: [
          "redução da massa muscular;",
          "menor gasto energético ao longo do dia;",
          "mudanças na distribuição da gordura;",
          "alterações no sono;",
          "mudanças no nível de atividade física;",
          "alterações hormonais;",
          "mudanças na rotina e nos hábitos.",
        ],
      },
      {
        type: "heading",
        text: "E a famosa gordura abdominal?",
      },
      {
        type: "paragraph",
        text: "Durante a transição menopausal, algumas mulheres percebem maior concentração de gordura na região abdominal.",
      },
      {
        type: "paragraph",
        text: "Isso não significa que exista uma única causa. O processo envolve uma combinação de fatores hormonais, idade, composição corporal, atividade física, alimentação, sono e genética.",
      },
      {
        type: "highlight",
        title: "Não transforme a balança no único objetivo",
        text: "Força, massa muscular, saúde óssea, condicionamento e autonomia são indicadores igualmente importantes — e muitas vezes mais relevantes para a saúde a longo prazo.",
      },
      {
        type: "heading",
        text: "O que pode ajudar?",
      },
      {
        type: "paragraph",
        text: "Uma rotina que combine alimentação adequada, atividade física regular, treinamento de força quando apropriado, sono e acompanhamento profissional pode contribuir para uma composição corporal mais saudável.",
      },
      {
        type: "quote",
        text: "Seu objetivo não precisa ser pesar menos. Pode ser viver melhor em um corpo mais forte.",
      },
    ],
  },

  {
    slug: "musculacao-na-menopausa",
    title: "Musculação na menopausa",
    seoTitle:
      "Musculação na menopausa: por que o treinamento de força é tão importante",
    description:
      "Entenda por que o treinamento de força pode ser uma das estratégias mais importantes para preservar músculos, força, funcionalidade e autonomia durante a menopausa.",
    category: "EXERCÍCIO",
    readTime: "9 min",
    image: strength,
    imageAlt: "Mulher madura realizando treinamento de força",
    tags: [
      "EXERCÍCIO",
      "MASSA MUSCULAR",
      "MENOPAUSA",
      "SAÚDE ÓSSEA",
      "FORÇA",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Quando falamos sobre exercício na menopausa, a musculação merece um lugar de destaque.",
      },
      {
        type: "paragraph",
        text: "Não porque toda mulher precise treinar da mesma maneira, mas porque desenvolver e preservar força muscular está diretamente relacionado à capacidade de realizar as tarefas da vida diária.",
      },
      {
        type: "heading",
        text: "Por que a massa muscular importa?",
      },
      {
        type: "paragraph",
        text: "A massa muscular participa de movimentos, estabilidade, produção de força e desempenho físico. Ao longo do envelhecimento, preservar essa estrutura passa a ser cada vez mais importante.",
      },
      {
        type: "paragraph",
        text: "Perder força pode significar mais dificuldade para levantar da cadeira, subir escadas, carregar compras ou realizar outras tarefas aparentemente simples.",
      },
      {
        type: "heading",
        text: "Musculação não é apenas estética",
      },
      {
        type: "paragraph",
        text: "Durante muito tempo, o treinamento de força foi associado principalmente à estética corporal.",
      },
      {
        type: "paragraph",
        text: "Na maturidade, entretanto, seus benefícios podem ser muito mais amplos: força, funcionalidade, independência e capacidade de continuar realizando atividades que fazem parte da vida.",
      },
      {
        type: "heading",
        text: "E a saúde óssea?",
      },
      {
        type: "paragraph",
        text: "O tecido ósseo responde aos estímulos mecânicos. Por isso, exercícios que envolvem carga podem fazer parte de estratégias voltadas à manutenção da saúde óssea.",
      },
      {
        type: "paragraph",
        text: "A escolha dos exercícios e a progressão devem respeitar as condições individuais e, quando necessário, contar com avaliação e orientação profissional.",
      },
      {
        type: "heading",
        text: "Precisa começar pesado?",
      },
      {
        type: "paragraph",
        text: "Não. O treinamento deve ser adequado ao nível atual da pessoa.",
      },
      {
        type: "list",
        items: [
          "começar de acordo com a capacidade atual;",
          "aprender corretamente os movimentos;",
          "aumentar gradualmente o estímulo;",
          "respeitar recuperação e descanso;",
          "adaptar exercícios quando necessário;",
          "manter consistência ao longo do tempo.",
        ],
      },
      {
        type: "highlight",
        title: "Consistência vence intensidade sem planejamento",
        text: "Um programa sustentável, progressivo e adequado à mulher é mais importante do que tentar fazer o treino mais difícil possível.",
      },
      {
        type: "quote",
        text: "Treinar força não é preparar o corpo apenas para a academia. É preparar o corpo para a vida.",
      },
    ],
  },

  {
    slug: "preservar-massa-muscular-depois-dos-40",
    title: "Como preservar massa muscular depois dos 40?",
    seoTitle:
      "Como preservar massa muscular depois dos 40? Estratégias práticas",
    description:
      "Estímulo, alimentação, recuperação e progressão: conheça os principais pilares para preservar massa muscular depois dos 40.",
    category: "MULHERES",
    readTime: "8 min",
    image: cardWoman,
    imageAlt: "Mulher madura praticando exercício físico",
    tags: [
      "MASSA MUSCULAR",
      "EXERCÍCIO",
      "MULHERES",
      "MENOPAUSA",
      "AUTONOMIA",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Depois dos 40, preservar massa muscular passa a ser uma preocupação cada vez mais relevante.",
      },
      {
        type: "paragraph",
        text: "Isso não significa que o corpo esteja destinado a perder força. Significa que o estímulo necessário para manter e desenvolver músculo precisa ser valorizado.",
      },
      {
        type: "heading",
        text: "O músculo precisa de estímulo",
      },
      {
        type: "paragraph",
        text: "O treinamento de força fornece um estímulo importante para a manutenção e o desenvolvimento da capacidade muscular.",
      },
      {
        type: "paragraph",
        text: "Sem estímulo adequado, o corpo tende a perder capacidade muscular progressivamente ao longo dos anos.",
      },
      {
        type: "heading",
        text: "Não é só treino",
      },
      {
        type: "paragraph",
        text: "Treinar é importante, mas recuperação e alimentação também fazem parte do processo.",
      },
      {
        type: "list",
        items: [
          "treinamento de força;",
          "alimentação adequada;",
          "ingestão suficiente de proteínas;",
          "sono e recuperação;",
          "atividade física regular;",
          "progressão do treinamento;",
          "consistência.",
        ],
      },
      {
        type: "heading",
        text: "A importância da progressão",
      },
      {
        type: "paragraph",
        text: "O corpo precisa receber estímulos compatíveis com seus objetivos. Conforme a capacidade melhora, o treinamento pode precisar ser ajustado para continuar produzindo adaptações.",
      },
      {
        type: "paragraph",
        text: "Isso não significa aumentar peso de qualquer maneira. Progressão pode envolver carga, repetições, volume, dificuldade do exercício ou qualidade do movimento.",
      },
      {
        type: "heading",
        text: "Músculo é autonomia",
      },
      {
        type: "paragraph",
        text: "Pensar em massa muscular apenas pela estética é limitar seu verdadeiro significado.",
      },
      {
        type: "paragraph",
        text: "Ter força suficiente para levantar, caminhar, carregar objetos, subir escadas e realizar tarefas sem depender constantemente de outras pessoas é uma forma concreta de autonomia.",
      },
      {
        type: "highlight",
        title: "Preservar músculo é investir no futuro",
        text: "O objetivo não é apenas ter um corpo bonito hoje. É construir capacidade para continuar vivendo com independência amanhã.",
      },
      {
        type: "quote",
        text: "Músculo não é apenas aparência. É capacidade.",
      },
    ],
  },

  {
    slug: "menopausa-e-saude-ossea",
    title: "Menopausa e saúde óssea",
    seoTitle:
      "Menopausa e saúde óssea: por que cuidar dos ossos é tão importante",
    description:
      "Entenda a relação entre menopausa, massa óssea, exercício e autonomia e descubra por que cuidar dos ossos deve fazer parte dessa fase.",
    category: "SAÚDE",
    readTime: "6 min",
    image: mobility,
    imageAlt: "Mulher madura realizando exercício de mobilidade",
    tags: [
      "SAÚDE ÓSSEA",
      "MENOPAUSA",
      "EXERCÍCIO",
      "MOBILIDADE",
      "AUTONOMIA",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Quando falamos em menopausa, é comum que peso, ondas de calor e alterações do sono apareçam primeiro nas conversas.",
      },
      {
        type: "paragraph",
        text: "Mas existe outro aspecto que merece atenção: a saúde óssea.",
      },
      {
        type: "heading",
        text: "Por que os ossos importam?",
      },
      {
        type: "paragraph",
        text: "Os ossos não são estruturas estáticas. Eles passam continuamente por processos de formação e reabsorção ao longo da vida.",
      },
      {
        type: "paragraph",
        text: "Com o envelhecimento e as alterações hormonais da transição menopausal, esse equilíbrio pode sofrer mudanças.",
      },
      {
        type: "heading",
        text: "O papel do exercício",
      },
      {
        type: "paragraph",
        text: "O tecido ósseo responde aos estímulos mecânicos. Por isso, atividades físicas que envolvem carga podem fazer parte de uma estratégia de cuidado com a saúde óssea.",
      },
      {
        type: "paragraph",
        text: "Treinamento de força, caminhada e outras atividades podem ser utilizadas de acordo com as necessidades e condições de cada pessoa.",
      },
      {
        type: "heading",
        text: "Não existe uma estratégia igual para todas",
      },
      {
        type: "paragraph",
        text: "Histórico de saúde, idade, nível de condicionamento, presença de fatores de risco e outras características individuais precisam ser considerados.",
      },
      {
        type: "paragraph",
        text: "Quando existe suspeita ou diagnóstico de alterações ósseas, a orientação profissional individualizada é especialmente importante.",
      },
      {
        type: "heading",
        text: "Saúde óssea também significa autonomia",
      },
      {
        type: "paragraph",
        text: "Cuidar dos ossos não é pensar apenas em exames. É pensar na capacidade de continuar se movimentando e vivendo de forma independente.",
      },
      {
        type: "highlight",
        title: "O melhor momento para cuidar da saúde óssea é antes de precisar dela",
        text: "Movimento, treinamento adequado e acompanhamento profissional podem fazer parte de uma estratégia de cuidado ao longo da vida.",
      },
      {
        type: "quote",
        text: "Cuidar dos ossos é cuidar da liberdade de continuar se movimentando.",
      },
    ],
  },

  {
    slug: "gordura-abdominal-menopausa",
    title: "Por que aumenta a gordura abdominal?",
    seoTitle:
      "Por que aumenta a gordura abdominal na menopausa? Entenda as causas",
    description:
      "Alterações hormonais, envelhecimento, massa muscular, atividade física e outros fatores podem influenciar a distribuição da gordura corporal.",
    category: "MENOPAUSA",
    readTime: "7 min",
    image: sleep,
    imageAlt: "Mulher madura descansando e cuidando do bem-estar",
    tags: [
      "MENOPAUSA",
      "COMPOSIÇÃO CORPORAL",
      "GORDURA ABDOMINAL",
      "SONO",
      "EXERCÍCIO",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "“Minha barriga aumentou depois da menopausa.” Se isso aconteceu com você, saiba que essa percepção é bastante comum.",
      },
      {
        type: "paragraph",
        text: "A distribuição da gordura corporal pode mudar durante o envelhecimento e a transição menopausal. Mas não existe uma única explicação para isso.",
      },
      {
        type: "heading",
        text: "A distribuição da gordura pode mudar",
      },
      {
        type: "paragraph",
        text: "Ao longo da vida, o corpo feminino apresenta diferentes padrões de distribuição de gordura. As mudanças hormonais da transição menopausal podem participar dessas alterações.",
      },
      {
        type: "paragraph",
        text: "Ao mesmo tempo, idade, genética, alimentação, atividade física, sono e massa muscular também influenciam o cenário.",
      },
      {
        type: "heading",
        text: "Não existe exercício que escolha de onde a gordura vai sair",
      },
      {
        type: "paragraph",
        text: "Um erro comum é acreditar que fazer muitos exercícios abdominais fará o corpo eliminar especificamente a gordura da barriga.",
      },
      {
        type: "paragraph",
        text: "Fortalecer a musculatura abdominal pode ser excelente para força e estabilidade, mas isso não significa redução localizada de gordura.",
      },
      {
        type: "heading",
        text: "O que realmente merece atenção?",
      },
      {
        type: "list",
        items: [
          "manter uma rotina fisicamente ativa;",
          "realizar treinamento de força quando apropriado;",
          "cuidar da alimentação;",
          "preservar massa muscular;",
          "priorizar sono adequado;",
          "evitar estratégias extremas e insustentáveis.",
        ],
      },
      {
        type: "heading",
        text: "A cintura não define sua saúde inteira",
      },
      {
        type: "paragraph",
        text: "Medidas corporais podem fornecer informações importantes, mas precisam ser interpretadas dentro de um contexto maior.",
      },
      {
        type: "highlight",
        title: "Não declare guerra contra a sua barriga",
        text: "Use essa mudança como um convite para cuidar melhor da sua saúde como um todo, e não como motivo para entrar em dietas ou treinos extremos.",
      },
      {
        type: "quote",
        text: "Cuidar da composição corporal é diferente de lutar contra o próprio corpo.",
      },
    ],
  },

  {
    slug: "melhor-exercicio-para-menopausa",
    title: "Qual o melhor exercício para menopausa?",
    seoTitle:
      "Qual o melhor exercício para menopausa? Descubra como escolher",
    description:
      "Não existe uma atividade perfeita para todas. Entenda como combinar força, caminhada, condicionamento e mobilidade de forma inteligente.",
    category: "EXERCÍCIO",
    readTime: "10 min",
    image: walkOutdoor,
    imageAlt: "Mulher madura caminhando ao ar livre",
    tags: [
      "EXERCÍCIO",
      "MENOPAUSA",
      "MASSA MUSCULAR",
      "MOBILIDADE",
      "SAÚDE ÓSSEA",
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Qual é o melhor exercício para a menopausa?",
      },
      {
        type: "paragraph",
        text: "A resposta mais honesta é: depende.",
      },
      {
        type: "paragraph",
        text: "Não existe uma única atividade capaz de atender todas as necessidades de todas as mulheres. O melhor programa é aquele que considera objetivos, capacidade atual, preferências, histórico e condições individuais.",
      },
      {
        type: "heading",
        text: "Comece pelo que você consegue sustentar",
      },
      {
        type: "paragraph",
        text: "Uma atividade excelente que você abandona depois de duas semanas é menos útil do que uma rotina adequada que consegue manter durante meses e anos.",
      },
      {
        type: "heading",
        text: "Treinamento de força",
      },
      {
        type: "paragraph",
        text: "O treinamento de força pode contribuir para desenvolver e preservar força e massa muscular e pode fazer parte de estratégias voltadas à funcionalidade e saúde óssea.",
      },
      {
        type: "heading",
        text: "Caminhada e atividade aeróbica",
      },
      {
        type: "paragraph",
        text: "Caminhar é uma forma acessível de aumentar o movimento cotidiano. Outras atividades aeróbicas também podem contribuir para condicionamento cardiovascular e capacidade funcional.",
      },
      {
        type: "heading",
        text: "Mobilidade também importa",
      },
      {
        type: "paragraph",
        text: "Movimentar as articulações com controle e manter capacidades de movimento pode facilitar diversas tarefas do dia a dia.",
      },
      {
        type: "heading",
        text: "Uma combinação pode ser melhor",
      },
      {
        type: "list",
        items: [
          "treinamento de força;",
          "atividade aeróbica;",
          "caminhadas e movimento cotidiano;",
          "exercícios de mobilidade;",
          "atividades que você realmente gosta.",
        ],
      },
      {
        type: "paragraph",
        text: "A quantidade, intensidade e frequência precisam ser ajustadas de acordo com cada pessoa.",
      },
      {
        type: "highlight",
        title: "O melhor exercício é aquele que faz sentido para você",
        text: "Um bom programa combina aquilo que seu corpo precisa com aquilo que você consegue e gosta de fazer.",
      },
      {
        type: "quote",
        text: "Não procure o exercício perfeito. Procure uma rotina que você consiga continuar.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(
  currentSlug: string,
  tags: string[],
  limit = 3,
): Article[] {
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