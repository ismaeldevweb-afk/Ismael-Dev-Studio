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
  ServiceItem,
  StepItem,
} from "@/interfaces/types/site";

export const navigationItems: readonly NavigationItem[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "SEO", href: "#seo-conversao" },
  { label: "Processo", href: "#processo" },
  { label: "Planos", href: "#planos" },
  { label: "Sobre", href: "#sobre" },
];

export const services: readonly ServiceItem[] = [
  {
    icon: Globe2,
    title: "Landing Pages",
    description:
      "Páginas enxutas para apresentar uma oferta, destacar diferenciais e levar o visitante direto para o WhatsApp.",
    benefit:
      "Ideais para campanhas, negócios locais e serviços que precisam converter com rapidez.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Sites Profissionais",
    description:
      "Sites profissionais para pequenos negócios mostrarem serviços, estrutura, confiança e canais de atendimento.",
    benefit:
      "Organizam sua presença digital e passam mais autoridade para quem está pesquisando online.",
  },
  {
    icon: Code2,
    title: "Portfólios Digitais",
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
