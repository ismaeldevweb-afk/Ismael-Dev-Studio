import {
  contactEmail,
  founderName,
  githubUrl,
  hasGithubProfile,
  hasLinkedinProfile,
  hasRealContactEmail,
  hasRealWhatsappNumber,
  linkedinUrl,
  siteDescription,
  siteTitle,
  siteUrl,
  socialPreviewUrl,
  whatsappNumber,
} from "@/config/site";
import { faqs, plans, services } from "@/interfaces/data/site-content";

export function createProfessionalServiceJsonLd() {
  const sameAs = [hasGithubProfile ? githubUrl : null, hasLinkedinProfile ? linkedinUrl : null]
    .filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteTitle,
    description: siteDescription,
    url: siteUrl,
    image: socialPreviewUrl,
    founder: {
      "@type": "Person",
      name: founderName,
    },
    ...(sameAs.length ? { sameAs } : {}),
    ...(hasRealContactEmail ? { email: contactEmail } : {}),
    ...(hasRealWhatsappNumber ? { telephone: `+${whatsappNumber}` } : {}),
    areaServed: "Brasil",
    serviceType: services.map((service) => service.title),
    makesOffer: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: plan.description,
      price: plan.price.replace(/\D/g, ""),
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: siteUrl,
    })),
  };
}

export function createWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteTitle,
    description: siteDescription,
    url: siteUrl,
    publisher: {
      "@type": "Organization",
      name: siteTitle,
    },
  };
}

export function createFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
