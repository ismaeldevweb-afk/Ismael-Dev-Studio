const defaultSiteUrl = "https://ismaeldevstudio.vercel.app";
const defaultWhatsappNumber = "5514991920560";
const defaultContactEmail = "contato@exemplo.com";
const defaultGithubUrl = "https://github.com/ismaeldevweb-afk";
const defaultLinkedinUrl = "https://www.linkedin.com/in/ismael-nunes-dos-santos";

const trimTrailingSlash = (value: string): string => value.replace(/\/+$/, "");

export const siteTitle = "Ismael Dev Studio";
export const seoTitle =
  "Criação de Sites Profissionais e Landing Pages | Ismael Dev Studio";
export const founderName = "Ismael Nunes dos Santos";
export const siteDescription =
  "Criação de sites profissionais, landing pages e portfólios para pequenos negócios, autônomos e profissionais que querem gerar confiança, atrair clientes e receber contatos pelo WhatsApp.";
export const siteKeywords = [
  "criação de sites profissionais",
  "criação de sites para pequenos negócios",
  "landing page para pequenos negócios",
  "landing page profissional",
  "site para autônomos",
  "site profissional para autônomos",
  "site para restaurantes",
  "portfólio digital",
  "portfólio profissional",
  "site institucional",
  "site responsivo",
  "site com whatsapp",
  "desenvolvedor de sites",
  "presença digital",
  "soluções com IA",
  "Ismael Dev Studio",
];

export const siteUrl = trimTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl
);
export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || defaultWhatsappNumber;
export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || defaultContactEmail;
export const githubUrl =
  process.env.NEXT_PUBLIC_GITHUB_URL || defaultGithubUrl;
export const linkedinUrl =
  process.env.NEXT_PUBLIC_LINKEDIN_URL || defaultLinkedinUrl;
export const socialPreviewUrl = `${siteUrl}/social-preview.svg`;

export const hasRealWhatsappNumber = whatsappNumber.length >= 12;
export const hasRealContactEmail =
  contactEmail !== defaultContactEmail && !contactEmail.includes("exemplo.com");
export const hasGithubProfile =
  githubUrl.includes("github.com/") && !githubUrl.includes("seu-usuario");
export const hasLinkedinProfile =
  linkedinUrl.includes("linkedin.com/in/") && !linkedinUrl.includes("seu-usuario");

const whatsappMessage = encodeURIComponent(
  "Olá, Ismael! Quero solicitar um orçamento para minha vitrine digital."
);

export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
