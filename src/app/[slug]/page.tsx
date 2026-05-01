import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  founderName,
  siteTitle,
  siteUrl,
  socialPreviewUrl,
} from "@/config/site";
import ServicePageTemplate from "@/interfaces/components/marketing/ServicePageTemplate";
import { servicePages } from "@/interfaces/data/site-content";

interface ServiceRouteProps {
  params: {
    slug: string;
  };
}

function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function generateStaticParams() {
  return servicePages.map((page) => ({
    slug: page.slug,
  }));
}

export function generateMetadata({ params }: ServiceRouteProps): Metadata {
  const page = getServicePage(params.slug);

  if (!page) {
    return {};
  }

  const url = `${siteUrl}/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    keywords: [page.primaryKeyword, page.label, "Ismael Dev Studio"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      title: page.title,
      description: page.description,
      siteName: siteTitle,
      images: [
        {
          url: socialPreviewUrl,
          width: 1200,
          height: 630,
          alt: `${page.label} com Ismael Dev Studio.`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [socialPreviewUrl],
    },
  };
}

export default function ServiceRoutePage({ params }: ServiceRouteProps) {
  const page = getServicePage(params.slug);

  if (!page) {
    notFound();
  }

  const pageUrl = `${siteUrl}/${page.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.label,
      description: page.description,
      url: pageUrl,
      provider: {
        "@type": "ProfessionalService",
        name: siteTitle,
        url: siteUrl,
        founder: {
          "@type": "Person",
          name: founderName,
        },
      },
      areaServed: "Brasil",
      serviceType: page.label,
      audience: {
        "@type": "Audience",
        audienceType: page.audience,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ServicePageTemplate page={page} />
    </>
  );
}
