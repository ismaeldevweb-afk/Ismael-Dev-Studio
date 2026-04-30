import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import { services } from "@/interfaces/data/site-content";
import SectionLabel from "@/interfaces/components/marketing/SectionLabel";

export default function Services() {
  return (
    <section id="servicos" className="bg-slate-50 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Serviços</SectionLabel>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            O que posso criar para fortalecer sua presença digital
          </h2>
          <p className="mt-4 text-slate-600 sm:text-lg">
            Cada serviço é pensado para apresentar melhor sua oferta, passar mais
            confiança e facilitar o contato com quem já tem interesse no que você faz.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description, benefit }) => (
            <article
              key={title}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition group-hover:scale-105">
                <Icon size={25} />
              </div>
              <h3 className="text-lg font-extrabold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-bold leading-6 text-slate-800">{benefit}</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:text-blue-600"
              >
                Conversar sobre esse serviço <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
