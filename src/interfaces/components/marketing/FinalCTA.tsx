import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/config/site";

export default function FinalCTA() {
  return (
    <section id="contato" className="bg-slate-50 px-5 pb-20 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-6 text-center text-white shadow-2xl shadow-blue-950/20 sm:p-8 md:flex-row md:text-left lg:p-10">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Pronto para transformar sua ideia em uma presença digital profissional?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50/90">
            Me conte o que você precisa divulgar e eu organizo uma página mais clara,
            confiável e pronta para gerar contato pelo WhatsApp.
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-600 sm:w-auto sm:px-7"
        >
          <MessageCircle size={19} /> Solicitar orçamento no WhatsApp
        </a>
      </div>
    </section>
  );
}
