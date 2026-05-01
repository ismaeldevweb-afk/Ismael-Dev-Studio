import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  benefit: string;
  href?: string;
}

export interface ProjectItem {
  title: string;
  tag: string;
  description: string;
  techs: string[];
  audience: string;
  result: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  note: string;
}

export interface PlanItem {
  name: string;
  price: string;
  description: string;
  idealFor: string;
  featured?: boolean;
  features: string[];
}

export interface BenefitItem {
  icon: LucideIcon;
  label: string;
}

export interface AboutHighlightItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServicePageItem {
  slug: string;
  label: string;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  primaryKeyword: string;
  audience: string;
  outcomes: string[];
  sections: Array<{
    title: string;
    description: string;
  }>;
  faq: FaqItem[];
}
