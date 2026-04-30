export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-200">
          404
        </p>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
          Página não encontrada
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-200">
          O endereço acessado não existe ou foi movido. Volte para a página
          inicial e siga para a seção desejada.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          Voltar ao início
        </a>
      </div>
    </main>
  );
}
