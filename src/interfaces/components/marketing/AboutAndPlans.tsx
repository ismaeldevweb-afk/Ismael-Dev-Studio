import Image from "next/image";
import { Check, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
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
  aboutHighlights,
  plans,
  skillset,
} from "@/interfaces/data/site-content";
import SectionLabel from "@/interfaces/components/marketing/SectionLabel";

export default function AboutAndPlans() {
  const socialLinks = [
    hasGithubProfile
      ? { href: githubUrl, label: "GitHub", icon: Github }
      : null,
    hasLinkedinProfile
      ? { href: linkedinUrl, label: "LinkedIn", icon: Linkedin }
      : null,
    hasRealContactEmail
      ? { href: `mailto:${contactEmail}`, label: "E-mail", icon: Mail }
      : null,
  ].filter(Boolean) as Array<{
    href: string;
    label: string;
    icon: typeof Github;
  }>;

  return (
    <section id="sobre" className="bg-slate-50 px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 sm:p-8">
          <SectionLabel>Sobre mim</SectionLabel>
          <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-end">
            <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-900/10 sm:h-52 sm:w-52">
              <Image
                src="/profile-photo.webp"
                alt="Retrato de Ismael Nunes"
                width={640}
                height={640}
                sizes="(min-width: 640px) 13rem, 11rem"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50/80 p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-700">
                Posicionamento
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Desenvolvimento de páginas pensadas para presença digital, autoridade e
                contato direto pelo WhatsApp.
              </p>
            </div>
          </div>
          <h2 className="mt-8 text-3xl font-extrabold text-slate-950">Quem é Ismael?</h2>
          <p className="mt-5 leading-7 text-slate-600">
            Sou Ismael Nunes dos Santos. Crio sites, landing pages e portfólios
            digitais para pessoas e pequenos negócios que precisam de uma apresentação
            mais profissional na internet.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            Meu foco não é só fazer uma tela bonita. Eu estruturo páginas para
            apresentar melhor o serviço, transmitir confiança, reforçar autoridade e
            facilitar o contato com quem já demonstrou interesse.
          </p>
          <div className="mt-7 grid gap-4">
            {aboutHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-extrabold text-slate-950">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {skillset.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              <MessageCircle size={18} />
              Conversar no WhatsApp
            </a>
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="rounded-full border border-slate-200 p-3 text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div id="planos">
          <div className="mb-8 text-center lg:text-left">
            <SectionLabel>Planos</SectionLabel>
            <h2 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Planos para começar sua presença digital
            </h2>
            <p className="mt-4 text-slate-600 sm:text-lg">
              Escolha o nível de apresentação que faz sentido para o seu momento. Todos
              os planos podem ser ajustados conforme objetivo, conteúdo e necessidade do
              projeto.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm sm:p-7 ${
                  plan.featured
                    ? "border-blue-500 shadow-2xl shadow-blue-600/10 ring-1 ring-blue-200"
                    : "border-slate-200"
                }`}
              >
                {plan.featured ? (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white">
                    Mais recomendado
                  </span>
                ) : null}
                <h3 className="text-xl font-extrabold text-slate-950">{plan.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{plan.description}</p>
                <p className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800">
                  {plan.idealFor}
                </p>
                <p className="mt-6 text-sm font-bold text-slate-600">A partir de</p>
                <p className="text-4xl font-bold tracking-tight text-slate-950">{plan.price}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check className="mt-0.5 text-blue-600" size={17} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition ${
                    plan.featured
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  Solicitar orçamento
                </a>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-500">
            O valor final pode variar conforme o tamanho e as necessidades do projeto.
          </p>
        </div>
      </div>
    </section>
  );
}
