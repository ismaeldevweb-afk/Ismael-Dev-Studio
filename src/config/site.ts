const defaultSiteUrl = "http://localhost:3000";
const defaultWhatsappNumber = "5500000000000";
const defaultContactEmail = "contato@exemplo.com";
const defaultGithubUrl = "https://github.com/seu-usuario";
const defaultLinkedinUrl = "https://www.linkedin.com/in/seu-usuario";

const trimTrailingSlash = (value: string): string => value.replace(/\/+$/, "");

export const siteTitle = "Ismael Dev Studio";
export const founderName = "Ismael Nunes dos Santos";
export const siteDescription =
  "Criação de sites profissionais, landing page para pequenos negócios, portfólio profissional e presença digital com foco em site responsivo e contato pelo WhatsApp.";
export const siteKeywords = [
  "criação de sites profissionais",
  "landing page para pequenos negócios",
  "portfólio profissional",
  "presença digital",
  "site responsivo",
  "site com whatsapp",
  "soluções com IA",
  "site profissional para autônomos",
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

export const hasRealWhatsappNumber = whatsappNumber !== defaultWhatsappNumber;
export const hasRealContactEmail =
  contactEmail !== defaultContactEmail && !contactEmail.includes("exemplo.com");
export const hasGithubProfile =
  githubUrl !== defaultGithubUrl && !githubUrl.includes("seu-usuario");
export const hasLinkedinProfile =
  linkedinUrl !== defaultLinkedinUrl && !linkedinUrl.includes("seu-usuario");

const whatsappMessage = encodeURIComponent(
  "Olá, Ismael! Quero solicitar um orçamento para minha vitrine digital."
);

export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
