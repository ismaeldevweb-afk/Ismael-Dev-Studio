import { Code2, Menu, X } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import { navigationItems } from "@/interfaces/data/site-content";

interface HeaderProps {
  homeHrefPrefix?: "" | "/";
}

export default function Header({ homeHrefPrefix = "" }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir para o início">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
            <Code2 size={24} />
          </div>
          <div className="leading-tight">
            <strong className="block text-sm font-extrabold uppercase tracking-wide text-slate-950">
              Ismael
            </strong>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Dev Studio
            </span>
          </div>
        </a>

        <nav
          className="hidden items-center gap-8 text-sm font-bold text-slate-700 lg:flex"
          aria-label="Navegação principal"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              className="transition hover:text-blue-600"
              href={`${homeHrefPrefix}${item.href}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-600 sm:inline-flex"
          >
            Solicitar orçamento
          </a>
          <details className="group relative lg:hidden">
            <summary className="flex cursor-pointer list-none rounded-xl border border-slate-200 p-3 text-slate-800 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Abrir menu</span>
              <Menu size={22} className="group-open:hidden" />
              <X size={22} className="hidden group-open:block" />
            </summary>

            <div className="absolute right-0 top-[calc(100%+0.75rem)] w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10">
              <nav className="grid gap-3 text-sm font-bold text-slate-700">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={`${homeHrefPrefix}${item.href}`}
                    className="rounded-xl px-3 py-2 transition hover:bg-slate-50 hover:text-blue-600"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white"
                >
                  Solicitar orçamento
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
