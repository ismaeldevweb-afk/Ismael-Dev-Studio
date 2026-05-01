import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import {
  conversionPoints,
  faqs,
} from "@/interfaces/data/site-content";
import SectionLabel from "@/interfaces/components/marketing/SectionLabel";

export default function StrategicSeo() {
  return (
    <section id="seo" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div>
          <SectionLabel>SEO e conversão</SectionLabel>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Site estratégico para ser encontrado, entendido e gerar contato
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            A página combina SEO técnico, mensagem clara e chamadas para ação bem
            posicionadas para transformar visitas em conversas reais pelo WhatsApp.
          </p>

          <div className="mt-8 grid gap-4">
            {conversionPoints.map((point) => (
              <div
                key={point}
                className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={19} />
                <p className="text-sm font-bold leading-6 text-slate-800">{point}</p>
              </div>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto"
          >
            <MessageCircle size={18} />
            Planejar meu site estratégico
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-700">
            Perguntas frequentes
          </p>
          <div className="mt-5 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-extrabold text-slate-950">
                  {faq.question}
                  <span className="mt-0.5 text-lg leading-none text-blue-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
