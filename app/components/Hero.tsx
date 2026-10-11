
const metrics = [
  { label: "Desenvolvimento", value: "WEB", color: "text-cyan-400" },
  { label: "Análise de dados", value: "DATA", color: "text-violet-400" },
  { label: "Inteligência de negócios", value: "BI", color: "text-blue-400" },
];

const chartBars = [35, 55, 42, 75, 60, 88, 72, 100, 82, 95];

export default function Hero() {
  return (
      
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32">
     
      {/* Iluminação de fundo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/3 h-125 w-125 rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute right-0 top-40 h-100 w-100 rounded-full bg-violet-600/15 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        {/* Apresentação */}
        <div className="animate-fade-up animate-delay-150">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-medium tracking-wider text-cyan-300">
              DESENVOLVIMENTO • DADOS • INTELIGÊNCIA
            </span>
          </div>

          <p className="mb-4 text-lg text-slate-400">
            Olá, meu nome é
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl">
            Joel
            <br />
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Kaltner.
            </span>
          </h1>

          <h2 className="mt-7 text-xl font-medium text-slate-200">
            Estudante de ADS
            <span className="text-cyan-400"> | </span>
            Desenvolvimento & Business Intelligence
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-slate-400">
            Unindo código, análise de dados e criatividade
            para desenvolver soluções digitais e transformar
            informações em conhecimento.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="rounded-xl bg-linear-to-r from-blue-600 to-violet-600 px-7 py-4 font-semibold text-white transition hover:brightness-125"
            >
              Explorar projetos ↗
            </a>

            <a
              href="https://github.com/02131517"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Painel visual de BI */}
        <div className="relative animate-fade-up animate-delay-350">
          <div className="absolute -inset-5 rounded-3xl bg-linear-to-r from-blue-600/20 to-violet-600/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101827]/90 p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Data Intelligence
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">
                  Analytics Overview
                </h3>
              </div>

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                DEMO
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {metrics.map((metric) => (
                <div
                  key={metric.value}
                  className="rounded-xl border border-white/5 bg-white/5 p-4"
                >
                  <p className="text-[10px] text-slate-400">
                    {metric.label}
                  </p>
                  <p className={`mt-3 text-xl font-bold ${metric.color}`}>
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/5 bg-[#0b1120] p-5">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm font-medium text-slate-300">
                  Visualização de dados
                </p>
                <span className="text-xs text-slate-500">
                  Dados ilustrativos
                </span>
              </div>

              <div className="flex h-40 items-end justify-between gap-2">
                {chartBars.map((height, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-1 items-end"
                  >
                    <div
                      className="w-full rounded-t-md bg-linear-to-t from-blue-700 to-cyan-400"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between text-[10px] text-slate-500">
                <span>Início</span>
                <span>Evolução ilustrativa</span>
                <span>Fim</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Interface demonstrativa • Web + BI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
