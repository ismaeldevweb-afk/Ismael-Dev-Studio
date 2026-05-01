import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { whatsappUrl } from "@/config/site";
import { benefits } from "@/interfaces/data/site-content";

const audienceItems = [
  "Pequenos negócios e serviços locais",
  "Profissionais liberais e autônomos",
  "Portfólios e páginas de apresentação",
];

function HeroMockup() {
  return (
    <div
      className="relative mx-auto mt-10 w-full min-w-0 max-w-[calc(100vw-2.5rem)] sm:max-w-xl lg:mt-0"
      aria-hidden="true"
    >
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35)]">
        <div className="relative aspect-[16/10] bg-slate-100">
          <Image
            src="/hero-restaurant-showcase.webp"
            alt=""
            fill
            priority
            quality={70}
            sizes="(min-width: 1024px) 520px, (min-width: 640px) 580px, 320px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden px-5 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div className="relative z-10 min-w-0 max-w-[calc(100vw-2.5rem)] sm:max-w-none">
          <div className="mb-5 inline-flex max-w-full rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700 sm:text-xs sm:tracking-[0.22em]">
            Criação de sites profissionais
          </div>
          <h1 className="max-w-[20rem] text-[2rem] font-extrabold leading-tight tracking-tight text-slate-950 sm:max-w-3xl sm:text-5xl lg:text-6xl">
            Tenha um site profissional que leva clientes direto para o{" "}
            <span className="text-blue-600">WhatsApp.</span>
          </h1>
          <p className="mt-6 max-w-[20rem] text-base leading-8 text-slate-600 sm:max-w-2xl sm:text-lg">
            Crio sites, landing pages e portfólios para negócios locais, autônomos e
            profissionais que precisam apresentar seus serviços com clareza, transmitir
            confiança e receber pedidos de orçamento.
          </p>

          <div className="mt-7 grid w-full min-w-0 max-w-[20rem] gap-3 sm:max-w-none sm:grid-cols-3">
            {audienceItems.map((item) => (
              <div
                key={item}
                className="min-w-0 rounded-xl border border-slate-200 bg-white/85 px-4 py-3 text-sm font-bold text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 text-blue-600" size={16} />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex w-full min-w-0 max-w-[20rem] flex-col gap-4 sm:max-w-none sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto sm:px-7"
            >
              Solicitar orçamento no WhatsApp <ArrowRight size={18} />
            </a>
            <a
              href="#projetos"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-blue-200 bg-white px-5 py-4 text-sm font-bold text-blue-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 sm:w-auto sm:px-7"
            >
              Ver projetos
            </a>
          </div>

          <div className="mt-8 grid w-full max-w-[20rem] grid-cols-2 gap-3 text-sm font-bold text-slate-700 sm:max-w-none sm:grid-cols-4">
            {benefits.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex min-h-12 min-w-0 items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm shadow-slate-900/5"
              >
                <Icon className="shrink-0 text-blue-600" size={18} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <HeroMockup />
      </div>
    </section>
  );
}
