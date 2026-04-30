import { Rocket } from "lucide-react";
import { steps } from "@/interfaces/data/site-content";

export default function Process() {
  return (
    <section
      id="processo"
      className="bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_100%)] px-5 py-20 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-200">
            Como funciona
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Um processo simples para tirar sua presença digital do papel
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
            Você não precisa chegar com tudo pronto. Eu organizo a estrutura, desenvolvo
            a página e entrego o link online para você divulgar com segurança.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-xl shadow-slate-950/20 backdrop-blur"
            >
              <div className="mb-5 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-200">
                  {step.note}
                </div>
                <div className="mb-6 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-lg font-bold text-blue-200">
                  {step.number}
                </span>
                <Rocket className="text-blue-200" size={26} />
              </div>
              <h3 className="text-lg font-extrabold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-200">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
