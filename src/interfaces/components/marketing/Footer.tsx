import { Code2, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import {
  contactEmail,
  githubUrl,
  hasGithubProfile,
  hasLinkedinProfile,
  hasRealContactEmail,
  linkedinUrl,
  whatsappUrl,
} from "@/config/site";
import {
  navigationItems,
  servicePages,
} from "@/interfaces/data/site-content";

interface FooterProps {
  homeHrefPrefix?: "" | "/";
}

export default function Footer({ homeHrefPrefix = "" }: FooterProps) {
  const contactLinks = [
    { href: whatsappUrl, label: "Solicitar orçamento no WhatsApp", icon: MessageCircle },
    hasRealContactEmail
      ? { href: `mailto:${contactEmail}`, label: contactEmail, icon: Mail }
      : null,
    hasGithubProfile
      ? { href: githubUrl, label: "GitHub", icon: Github }
      : null,
    hasLinkedinProfile
      ? { href: linkedinUrl, label: "LinkedIn", icon: Linkedin }
      : null,
  ].filter(Boolean) as Array<{
    href: string;
    label: string;
    icon: typeof MessageCircle;
  }>;

  return (
    <footer className="bg-slate-950 px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
              <Code2 size={21} />
            </div>
            <div>
              <strong className="block text-sm font-extrabold uppercase">Ismael</strong>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                Dev Studio
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-200">
            Criação de sites profissionais, landing pages e portfólios digitais para
            transformar ideias em presença digital clara, confiável e pronta para gerar
            contato.
          </p>
        </div>
        <div>
          <h3 className="font-extrabold">Navegação</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-200">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={`${homeHrefPrefix}${item.href}`}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-extrabold">Serviços</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-200">
            {servicePages.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}`}
                className="transition hover:text-white"
              >
                {service.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-extrabold">Contato</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-200">
            {contactLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-slate-300">
        © 2026 Ismael Dev Studio. Todos os direitos reservados.
      </div>
    </footer>
  );
}
