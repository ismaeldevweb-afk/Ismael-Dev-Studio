import { ArrowRight, CheckCircle2, MessageCircle, SearchCheck } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import type { ServicePageItem } from "@/interfaces/types/site";
import Footer from "@/interfaces/components/marketing/Footer";
import Header from "@/interfaces/components/marketing/Header";
import SectionLabel from "@/interfaces/components/marketing/SectionLabel";
import WhatsAppFloat from "@/interfaces/components/marketing/WhatsAppFloat";

interface ServicePageTemplateProps {
  page: ServicePageItem;
}

export default function ServicePageTemplate({ page }: ServicePageTemplateProps) {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      <section
        id="inicio"
        className="bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-5 py-16 lg:px-8 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <SectionLabel>{page.eyebrow}</SectionLabel>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {page.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {page.heroDescription}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Solicitar orçamento <ArrowRight size={18} />
              </a>
              <a
                href="/#projetos"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-4 text-sm font-bold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Ver projetos
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.55)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
              <SearchCheck size={24} />
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
              Palavra-chave foco
            </p>
            <p className="mt-2 text-2xl font-extrabold text-slate-950">
              {page.primaryKeyword}
            </p>
            <p className="mt-5 text-sm font-bold text-slate-500">Público ideal</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">{page.audience}</p>
          </aside>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {page.outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={19} />
                <p className="text-sm font-bold leading-6 text-slate-800">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <SectionLabel>Estratégia</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Como essa página ajuda seu cliente a decidir
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Cada seção é planejada para responder dúvidas, mostrar valor e aproximar o
              visitante do contato. O objetivo é ser encontrado e transformar atenção em
              conversa.
            </p>
          </div>
          <div className="grid gap-5">
            {page.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-extrabold text-slate-950">
                  {section.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {section.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Dúvidas</SectionLabel>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Perguntas antes de pedir orçamento
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Essas respostas ajudam a alinhar expectativa antes da conversa inicial.
            </p>
          </div>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {page.faq.map((item) => (
              <details key={item.question} className="group p-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-extrabold text-slate-950">
                  {item.question}
                  <span className="mt-0.5 text-lg leading-none text-blue-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 pb-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-2xl bg-slate-950 p-6 text-center text-white sm:p-8 md:flex-row md:text-left lg:p-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Quer uma página para {page.primaryKeyword}?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              Me chame no WhatsApp e explique o objetivo do projeto. Eu te ajudo a
              escolher a estrutura mais adequada.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-600 sm:w-auto"
          >
            <MessageCircle size={19} />
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
