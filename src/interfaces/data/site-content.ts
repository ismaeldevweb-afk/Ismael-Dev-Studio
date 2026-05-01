import {
  Bot,
  BriefcaseBusiness,
  Code2,
  Globe2,
  MessageCircle,
  Rocket,
  Smartphone,
  Zap,
} from "lucide-react";
import type {
  AboutHighlightItem,
  BenefitItem,
  FaqItem,
  NavigationItem,
  PlanItem,
  ProjectItem,
  ServicePageItem,
  ServiceItem,
  StepItem,
} from "@/interfaces/types/site";

export const navigationItems: readonly NavigationItem[] = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Projetos", href: "/#projetos" },
  { label: "SEO", href: "/#seo-conversao" },
  { label: "Processo", href: "/#processo" },
  { label: "Planos", href: "/#planos" },
  { label: "Sobre", href: "/#sobre" },
];

export const services: readonly ServiceItem[] = [
  {
    icon: Globe2,
    title: "Landing Pages",
    href: "/landing-page-para-pequenos-negocios",
    description:
      "Páginas enxutas para apresentar uma oferta, destacar diferenciais e levar o visitante direto para o WhatsApp.",
    benefit:
      "Ideais para campanhas, negócios locais e serviços que precisam converter com rapidez.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Sites Profissionais",
    href: "/criacao-de-sites-profissionais",
    description:
      "Sites profissionais para pequenos negócios mostrarem serviços, estrutura, confiança e canais de atendimento.",
    benefit:
      "Organizam sua presença digital e passam mais autoridade para quem está pesquisando online.",
  },
  {
    icon: Code2,
    title: "Portfólios Digitais",
    href: "/portfolio-digital",
    description:
      "Páginas pessoais para apresentar experiência, projetos, currículo e links importantes em um endereço profissional.",
    benefit:
      "Ajudam profissionais, estudantes e devs iniciantes a se posicionarem melhor na internet.",
  },
  {
    icon: Bot,
    title: "Soluções com IA",
    description:
      "Uso estratégico de IA para acelerar textos, organizar ideias e melhorar a clareza da comunicação do projeto.",
    benefit:
      "Você ganha velocidade na entrega sem abrir mão de uma apresentação clara e profissional.",
  },
];

export const conversionPoints: readonly string[] = [
  "Estrutura pensada para gerar contato, não apenas para ficar bonita.",
  "Texto, seções e botões organizados para o visitante entender rápido.",
  "Entrega responsiva, com SEO técnico básico e integração direta com WhatsApp.",
];

export const projects: readonly ProjectItem[] = [
  {
    title: "Sabor & Brasa",
    tag: "Restaurante",
    description:
      "Exemplo de site para restaurante com foco em cardápio, experiência da marca, reservas e pedido rápido.",
    techs: ["Next.js", "Cardápio", "WhatsApp", "Reservas"],
    audience: "Restaurantes e negócios de alimentação",
    result:
      "Ajuda o cliente a visualizar o ambiente, explorar o cardápio e agir rápido pelo celular.",
    imageSrc: "/project-sabor-brasa.webp",
    imageAlt:
      "Preview do site do restaurante Sabor & Brasa com destaque para pizza, cardápio e chamada para pedido.",
  },
  {
    title: "CV Criador",
    tag: "Produto digital",
    description:
      "Exemplo de plataforma para criar currículos com preview em tempo real, seleção de templates e exportação em PDF.",
    techs: ["Next.js", "PDF", "UX", "Templates"],
    audience: "Profissionais, estudantes e pessoas em transição de carreira",
    result:
      "Entrega um currículo mais profissional, claro e pronto para compartilhar em poucos minutos.",
    imageSrc: "/project-cv-criador.webp",
    imageAlt:
      "Preview da plataforma CV Criador com editor visual, templates de currículo e exportação em PDF.",
  },
  {
    title: "Loja Prime",
    tag: "E-commerce",
    description:
      "Exemplo de loja virtual com vitrine de produtos, categorias, promoções e navegação direta para compra.",
    techs: ["E-commerce", "UX", "Ofertas", "Catálogo"],
    audience: "Lojas online e negócios que vendem produtos",
    result:
      "Valoriza os produtos, facilita a descoberta das ofertas e melhora a experiência de compra.",
    imageSrc: "/project-loja-prime.webp",
    imageAlt:
      "Preview da loja virtual Loja Prime com destaque para produtos, categorias e ofertas.",
  },
];

export const steps: readonly StepItem[] = [
  {
    number: "01",
    title: "Conversa inicial",
    description: "Entendo seu negócio, sua oferta e o objetivo principal da página.",
    note: "Alinhamento claro antes de começar",
  },
  {
    number: "02",
    title: "Estrutura da vitrine",
    description: "Organizo seções, textos, argumentos e botões para a mensagem ficar objetiva.",
    note: "Conteúdo pensado para ser entendido rápido",
  },
  {
    number: "03",
    title: "Design e desenvolvimento",
    description: "Crio uma página moderna, responsiva e preparada para passar confiança em qualquer tela.",
    note: "Visual profissional sem complicar a navegação",
  },
  {
    number: "04",
    title: "Publicação online",
    description: "Entrego a página publicada com link pronto para divulgar e receber contatos.",
    note: "Seu site entra no ar pronto para compartilhar",
  },
];

export const plans: readonly PlanItem[] = [
  {
    name: "Essencial",
    price: "R$ 497",
    description: "Página enxuta para validar presença online com uma mensagem clara e contato direto.",
    idealFor: "Melhor para começar rápido.",
    features: [
      "Página única com seções essenciais",
      "Botão de WhatsApp com chamada direta",
      "Site responsivo para celular e desktop",
      "Publicação online com link para divulgação",
    ],
  },
  {
    name: "Profissional",
    price: "R$ 997",
    description:
      "Estrutura completa para apresentar serviços, diferenciais e provas de confiança com mais clareza.",
    idealFor: "Melhor para vender serviços.",
    featured: true,
    features: [
      "Seções personalizadas para oferta e diferenciais",
      "Área de projetos, cases ou galeria",
      "Textos revisados para comunicar melhor",
      "SEO básico e estrutura pronta para busca",
      "Contato integrado com WhatsApp e links",
    ],
  },
  {
    name: "Premium com IA",
    price: "R$ 1.497",
    description:
      "Projeto mais estratégico, com apoio de IA, copy refinada e apresentação mais elaborada.",
    idealFor: "Melhor para uma marca mais forte.",
    features: [
      "Estrutura pensada para conversão e proposta de valor",
      "Textos com apoio de IA e refinamento manual",
      "Design com acabamento mais premium",
      "Organização do conteúdo inicial do projeto",
      "Apresentação mais estratégica da marca",
    ],
  },
];

export const benefits: readonly BenefitItem[] = [
  { icon: Smartphone, label: "Responsivo" },
  { icon: Zap, label: "Rápido" },
  { icon: Rocket, label: "Publicado online" },
  { icon: MessageCircle, label: "Contato pelo WhatsApp" },
];

export const skillset: readonly string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Landing Pages",
  "SEO técnico",
  "Sites responsivos",
  "WhatsApp integrado",
  "UX",
  "Vercel",
  "IA Generativa",
  "Figma",
];

export const aboutHighlights: readonly AboutHighlightItem[] = [
  {
    title: "Presença profissional",
    description:
      "Cada página é pensada para apresentar melhor o serviço e causar boa impressão no primeiro acesso.",
  },
  {
    title: "Autoridade e clareza",
    description:
      "Não é só visual. A estrutura ajuda o visitante a entender quem você é, o que oferece e por que confiar.",
  },
  {
    title: "Contato facilitado",
    description:
      "O objetivo final é simples: transformar visita em contato com caminhos diretos para WhatsApp e ação.",
  },
];

export const faqs: readonly FaqItem[] = [
  {
    question: "Que tipo de site posso pedir?",
    answer:
      "Você pode pedir landing page, site institucional, portfólio profissional ou página de apresentação para divulgar serviços, projetos, produtos e canais de contato.",
  },
  {
    question: "O site já fica pronto para aparecer no Google?",
    answer:
      "A entrega inclui estrutura técnica de SEO, metadados, sitemap, robots, performance e conteúdo organizado. O ranqueamento depende de concorrência, autoridade do domínio e evolução contínua do conteúdo.",
  },
  {
    question: "Preciso ter textos e imagens prontos?",
    answer:
      "Não necessariamente. Se você ainda não tiver tudo pronto, eu ajudo a organizar as informações principais, melhorar a clareza da oferta e orientar quais imagens funcionam melhor.",
  },
  {
    question: "O site funciona bem no celular?",
    answer:
      "Sim. A página é desenvolvida com layout responsivo para celular, tablet e desktop, com botões de contato fáceis de acessar pelo WhatsApp.",
  },
  {
    question: "Como peço um orçamento?",
    answer:
      "Basta chamar no WhatsApp e explicar seu objetivo, tipo de negócio e o que precisa divulgar. Com isso, eu consigo indicar o plano mais adequado e os próximos passos.",
  },
];

export const servicePages: readonly ServicePageItem[] = [
  {
    slug: "criacao-de-sites-profissionais",
    label: "Criação de sites profissionais",
    title: "Criação de Sites Profissionais | Ismael Dev Studio",
    description:
      "Criação de sites profissionais para pequenos negócios, autônomos e prestadores de serviço que precisam transmitir confiança e gerar contatos pelo WhatsApp.",
    eyebrow: "Site profissional",
    heroTitle: "Criação de sites profissionais para vender melhor sua imagem online",
    heroDescription:
      "Desenvolvo sites claros, responsivos e preparados para apresentar seus serviços, reforçar autoridade e facilitar o contato com clientes interessados.",
    primaryKeyword: "criação de sites profissionais",
    audience: "Pequenos negócios, profissionais liberais e prestadores de serviço",
    outcomes: [
      "Presença digital mais confiável para divulgar em redes sociais e propostas.",
      "Estrutura com seções de serviços, diferenciais, projetos e contato.",
      "SEO técnico básico, carregamento rápido e layout responsivo.",
    ],
    sections: [
      {
        title: "Estrutura pensada para confiança",
        description:
          "O site organiza quem você é, o que oferece, quais diferenciais sustentam sua entrega e como o visitante pode falar com você.",
      },
      {
        title: "Conteúdo direto para decisão",
        description:
          "Textos, blocos e chamadas são construídos para reduzir dúvida e levar o visitante ao próximo passo com clareza.",
      },
      {
        title: "Entrega pronta para divulgação",
        description:
          "Você recebe uma página online, responsiva e preparada para compartilhar em bio, WhatsApp, cartões digitais e campanhas.",
      },
    ],
    faq: [
      {
        question: "Quanto tempo leva para criar um site profissional?",
        answer:
          "O prazo depende do tamanho do conteúdo e das seções necessárias, mas páginas institucionais simples podem avançar rapidamente após o alinhamento inicial.",
      },
      {
        question: "O site profissional funciona no celular?",
        answer:
          "Sim. A página é desenvolvida com layout responsivo para celular, tablet e desktop.",
      },
    ],
  },
  {
    slug: "landing-page-para-pequenos-negocios",
    label: "Landing page para pequenos negócios",
    title: "Landing Page para Pequenos Negócios | Ismael Dev Studio",
    description:
      "Landing page para pequenos negócios que precisam apresentar uma oferta, destacar diferenciais e receber contatos qualificados pelo WhatsApp.",
    eyebrow: "Landing page",
    heroTitle: "Landing page para pequenos negócios com foco em conversão",
    heroDescription:
      "Crio páginas objetivas para divulgar ofertas, campanhas, serviços e lançamentos com mensagem clara e botão direto para contato.",
    primaryKeyword: "landing page para pequenos negócios",
    audience: "Negócios locais, serviços de bairro, campanhas e ofertas pontuais",
    outcomes: [
      "Página focada em uma oferta principal e em um próximo passo claro.",
      "Argumentos organizados para aumentar confiança antes do clique.",
      "Contato direto pelo WhatsApp para transformar visita em conversa.",
    ],
    sections: [
      {
        title: "Uma página para uma decisão",
        description:
          "A landing page remove distrações e apresenta a oferta em uma sequência simples: promessa, benefícios, prova, plano de ação e contato.",
      },
      {
        title: "Ideal para campanhas",
        description:
          "Funciona bem para anúncios, divulgação no Instagram, links de bio, QR Code, promoções e validação de novas ofertas.",
      },
      {
        title: "Medição e evolução",
        description:
          "Com Vercel Analytics, você acompanha visitas e pode evoluir a mensagem conforme os dados reais aparecerem.",
      },
    ],
    faq: [
      {
        question: "Landing page é diferente de site completo?",
        answer:
          "Sim. A landing page é mais focada em uma oferta ou objetivo específico, enquanto um site completo costuma apresentar mais áreas do negócio.",
      },
      {
        question: "Posso usar a landing page em anúncios?",
        answer:
          "Sim. Ela é indicada para campanhas porque direciona o visitante para uma ação principal.",
      },
    ],
  },
  {
    slug: "site-para-autonomos",
    label: "Site para autônomos",
    title: "Site para Autônomos | Ismael Dev Studio",
    description:
      "Site para autônomos apresentarem serviços, experiência, diferenciais e canais de contato com aparência profissional e foco em credibilidade.",
    eyebrow: "Autônomos",
    heroTitle: "Site para autônomos que precisam parecer profissionais desde o primeiro acesso",
    heroDescription:
      "Uma página clara para mostrar seus serviços, organizar sua apresentação e facilitar o contato de clientes que estão comparando opções.",
    primaryKeyword: "site para autônomos",
    audience: "Autônomos, freelancers, técnicos, consultores e profissionais liberais",
    outcomes: [
      "Apresentação profissional para enviar a clientes e parceiros.",
      "Seções para serviços, experiência, diferenciais e formas de contato.",
      "Mais autoridade do que depender apenas de perfil em rede social.",
    ],
    sections: [
      {
        title: "Sua apresentação em um link",
        description:
          "O site reúne serviços, informações essenciais, fotos, provas de confiança e contato em uma página que pode ser enviada facilmente.",
      },
      {
        title: "Mais credibilidade em orçamentos",
        description:
          "Um endereço profissional ajuda o cliente a entender sua entrega antes de pedir preço ou fechar o serviço.",
      },
      {
        title: "Contato sem complicação",
        description:
          "Botões de WhatsApp e links sociais reduzem atrito para o visitante iniciar uma conversa.",
      },
    ],
    faq: [
      {
        question: "Sou autônomo e ainda não tenho marca. Posso fazer mesmo assim?",
        answer:
          "Sim. A página pode começar com seu nome, sua área de atuação e uma comunicação simples, evoluindo depois com identidade visual mais completa.",
      },
      {
        question: "O site ajuda a fechar orçamento?",
        answer:
          "Ele melhora sua apresentação e reduz dúvidas, mas o fechamento também depende da oferta, atendimento, prova social e preço.",
      },
    ],
  },
  {
    slug: "site-para-restaurantes",
    label: "Site para restaurantes",
    title: "Site para Restaurantes | Ismael Dev Studio",
    description:
      "Site para restaurantes divulgarem cardápio, fotos, reservas, localização e pedidos pelo WhatsApp com apresentação responsiva e profissional.",
    eyebrow: "Restaurantes",
    heroTitle: "Site para restaurantes com cardápio, fotos e pedido rápido pelo WhatsApp",
    heroDescription:
      "Crio páginas para valorizar o ambiente, mostrar pratos, orientar reservas e facilitar o pedido de clientes pelo celular.",
    primaryKeyword: "site para restaurantes",
    audience: "Restaurantes, pizzarias, lanchonetes, bares e negócios de alimentação",
    outcomes: [
      "Cardápio e diferenciais organizados para consulta rápida.",
      "Fotos e chamadas que valorizam o ambiente e os pratos.",
      "Botões para reservas, localização e pedidos pelo WhatsApp.",
    ],
    sections: [
      {
        title: "Cardápio fácil de consultar",
        description:
          "A página pode destacar pratos principais, categorias, promoções e caminhos rápidos para pedido ou reserva.",
      },
      {
        title: "Visual que abre o apetite",
        description:
          "Imagens, seções e chamadas ajudam o visitante a imaginar a experiência antes de decidir visitar ou pedir.",
      },
      {
        title: "Do Instagram para o pedido",
        description:
          "O site funciona como destino profissional para links de bio, QR Codes, campanhas e compartilhamento no WhatsApp.",
      },
    ],
    faq: [
      {
        question: "O site pode ter cardápio?",
        answer:
          "Sim. A página pode incluir cardápio em seções, destaques de produtos e botões para pedido.",
      },
      {
        question: "É possível incluir localização e reservas?",
        answer:
          "Sim. A página pode ter links para mapa, WhatsApp, telefone e chamadas específicas para reserva.",
      },
    ],
  },
  {
    slug: "portfolio-digital",
    label: "Portfólio digital",
    title: "Portfólio Digital Profissional | Ismael Dev Studio",
    description:
      "Portfólio digital para profissionais, estudantes e devs apresentarem experiência, projetos, currículo e links importantes em uma página profissional.",
    eyebrow: "Portfólio",
    heroTitle: "Portfólio digital para apresentar sua trajetória com clareza",
    heroDescription:
      "Crio páginas pessoais para organizar experiência, projetos, habilidades e links importantes em uma presença digital mais profissional.",
    primaryKeyword: "portfólio digital",
    audience: "Profissionais, estudantes, devs iniciantes, freelancers e criativos",
    outcomes: [
      "Página pessoal com apresentação, projetos, habilidades e contatos.",
      "Link profissional para currículo, LinkedIn, GitHub e candidaturas.",
      "Mais controle sobre como sua experiência aparece online.",
    ],
    sections: [
      {
        title: "Projetos com contexto",
        description:
          "Cada projeto pode mostrar objetivo, tecnologias, resultados e links, ajudando recrutadores e clientes a entenderem seu nível.",
      },
      {
        title: "Currículo mais apresentável",
        description:
          "O portfólio complementa o currículo tradicional com uma experiência visual e navegável.",
      },
      {
        title: "Presença própria",
        description:
          "Você deixa de depender apenas das redes sociais e passa a ter um endereço profissional para compartilhar.",
      },
    ],
    faq: [
      {
        question: "Portfólio digital serve para quem está começando?",
        answer:
          "Sim. Mesmo com poucos projetos, é possível organizar estudos, experiências, habilidades e objetivos de forma profissional.",
      },
      {
        question: "Posso incluir GitHub e LinkedIn?",
        answer:
          "Sim. O portfólio pode destacar seus principais links, currículo, redes profissionais e formas de contato.",
      },
    ],
  },
];
