import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import { projects } from "@/interfaces/data/site-content";
import SectionLabel from "@/interfaces/components/marketing/SectionLabel";

const previewThemes = [
  {
    shell: "from-slate-950 via-blue-950 to-slate-900",
    accent: "text-blue-700",
    surface: "border-blue-100 bg-blue-50",
  },
  {
    shell: "from-slate-950 via-indigo-950 to-slate-900",
    accent: "text-indigo-700",
    surface: "border-indigo-100 bg-indigo-50",
  },
] as const;

export default function Projects() {
  const featuredProject = projects.find((project) => project.imageSrc) ?? projects[0];
  const supportingProjects = projects.filter((project) => project !== featuredProject);

  return (
    <section id="projetos" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Projetos</SectionLabel>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Projetos com apresentação mais forte e foco em ação
          </h2>
          <p className="mt-4 text-slate-600 sm:text-lg">
            Exemplos de páginas pensadas para mostrar melhor o serviço, valorizar a
            marca e transformar visita em contato.
          </p>
        </div>

        <div className="mt-12 space-y-7">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_-40px_rgba(15,23,42,0.4)]">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[320px] overflow-hidden bg-slate-950 sm:min-h-[420px]">
                {featuredProject.imageSrc ? (
                  <Image
                    src={featuredProject.imageSrc}
                    alt={featuredProject.imageAlt ?? ""}
                    fill
                    quality={72}
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-slate-950/20" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-4 p-5 sm:p-6">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                    Exemplo em destaque
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-50">
                    {featuredProject.tag}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="max-w-lg rounded-2xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                      {featuredProject.audience}
                    </p>
                    <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                      {featuredProject.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white">
                      {featuredProject.result}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-7 sm:p-8">
                <div>
                  <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-700">
                    Projeto demonstrativo
                  </div>
                  <h3 className="mt-4 text-2xl font-extrabold text-slate-950 sm:text-[2rem]">
                    {featuredProject.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {featuredProject.description}
                  </p>

                  <div className="mt-6 grid gap-4">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                        Público ideal
                      </p>
                      <p className="mt-2 text-sm font-bold leading-6 text-slate-900">
                        {featuredProject.audience}
                      </p>
                    </div>
                    <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700">
                        Resultado esperado
                      </p>
                      <p className="mt-2 text-sm font-bold leading-6 text-slate-900">
                        {featuredProject.result}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredProject.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  Quero um projeto assim <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </article>

          <div className="grid gap-7 lg:grid-cols-2">
            {supportingProjects.map((project, index) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
              >
                {project.imageSrc ? (
                  <div className="relative isolate aspect-[4/3] overflow-hidden bg-slate-950 text-white sm:aspect-[16/10]">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt ?? ""}
                      fill
                      quality={72}
                      sizes="(min-width: 1024px) 600px, (min-width: 640px) 580px, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/10" />
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-4 p-5">
                      <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-slate-950 shadow-sm backdrop-blur">
                        {project.tag}
                      </span>
                      <span className="rounded-full border border-white/40 bg-slate-950/45 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                        {project.techs[0]}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`relative overflow-hidden bg-gradient-to-br p-5 text-white ${previewThemes[index].shell}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold backdrop-blur">
                        {project.tag}
                      </span>
                      <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-50">
                        {project.techs[0]}
                      </span>
                    </div>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                        <span className="ml-auto text-[11px] font-bold uppercase tracking-[0.18em] text-blue-50/90">
                          Preview
                        </span>
                      </div>
                      <div className="rounded-xl bg-white px-4 py-5 text-slate-950">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                          {project.audience}
                        </p>
                        <h3 className="mt-3 text-xl font-extrabold">{project.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {project.result}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-7">
                  <div
                    className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${previewThemes[index].surface} ${previewThemes[index].accent}`}
                  >
                    Aplicação prática
                  </div>
                  {project.imageSrc ? (
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      {project.audience}
                    </p>
                  ) : null}
                  <h3 className="mt-4 text-xl font-extrabold text-slate-950">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
                  {project.imageSrc ? (
                    <p className="mt-4 text-sm font-bold leading-6 text-slate-800">
                      {project.result}
                    </p>
                  ) : null}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                  >
                    Quero um projeto assim <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
