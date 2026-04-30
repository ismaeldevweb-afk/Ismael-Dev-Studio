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
    serviceType: [
      "Landing Pages",
      "Sites Profissionais",
      "Portfólios Digitais",
      "Soluções com IA",
    ],
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
