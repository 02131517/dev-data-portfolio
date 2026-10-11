
import SectionHeading from "./SectionHeading";

const salesBars = [42, 60, 48, 75, 62, 90, 72, 100];

const projects = [
  {
    category: "DESENVOLVIMENTO WEB",
    title: "Sistema de Gestão",
    description:
      "Aplicação web planejada para gerenciar informações, registros e processos em uma interface moderna.",
    tags: ["Next.js", "TypeScript", "SQL"],
  },
  {
    category: "DATA ANALYTICS",
    title: "Análise Exploratória",
    description:
      "Projeto de exploração e tratamento de dados com Python, SQL e visualizações.",
    tags: ["Python", "Pandas", "SQL"],
  },
];

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projetos"
      className="relative mx-auto max-w-6xl px-6 py-28"
    >
      <SectionHeading
        number="02"
        eyebrow="Projetos selecionados"
        title="Onde código encontra dados."
        description="Projetos planejados para demonstrar habilidades em desenvolvimento web, análise de dados e Business Intelligence."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {/* Projeto principal: BI */}
        <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101827] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 lg:row-span-2">
          <div className="relative overflow-hidden border-b border-white/10 bg-linear-to-br from-blue-950 via-[#111b37] to-violet-950 p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-xs text-cyan-300">
                BUSINESS INTELLIGENCE
              </span>

              <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[10px] font-semibold tracking-wider text-amber-300">
                PLANEJADO
              </span>
            </div>

            {/* Mini dashboard ilustrativo */}
            <div className="rounded-2xl border border-white/10 bg-[#0b1222]/90 p-5 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">
                    Sales Intelligence
                  </p>
                  <h4 className="mt-1 text-sm font-bold text-white">
                    Performance Overview
                  </h4>
                </div>
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
              </div>

              <div className="mb-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-xs text-slate-400">
                    Receita simulada
                  </p>
                  <p className="mt-2 text-xl font-bold text-white">
                    R$ 128,4 mil
                  </p>
                  <p className="mt-1 text-xs text-emerald-400">
                    +18,6% (exemplo)
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-xs text-slate-400">
                    Pedidos simulados
                  </p>
                  <p className="mt-2 text-xl font-bold text-white">
                    1.284
                  </p>
                  <p className="mt-1 text-xs text-cyan-400">
                    Dados fictícios
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-white/3 p-4">
                <div className="mb-4 flex justify-between text-xs text-slate-400">
                  <span>Evolução de vendas</span>
                  <span>DEMO</span>
                </div>

                <div className="flex h-32 items-end gap-2">
                  {salesBars.map((height, index) => (
                    <div
                      key={index}
                      className="flex h-full flex-1 items-end"
                    >
                      <div
                        className="w-full rounded-t bg-linear-to-t from-blue-700 to-cyan-400"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-7 sm:p-8">
            <p className="text-xs font-semibold tracking-widest text-cyan-400">
              01 / POWER BI + SQL
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              Dashboard de Vendas
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Projeto de Business Intelligence voltado à
              análise de faturamento, indicadores comerciais
              e desempenho de vendas para apoiar decisões.
            </p>

            <div className="mt-7">
              <ProjectTags tags={["Power BI", "SQL", "Python"]} />
            </div>
          </div>
        </article>

        {/* Projeto Web */}
        <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101827] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-lg hover:shadow-violet-500/10">
          <div className="border-b border-white/10 bg-linear-to-br from-violet-950/70 to-[#0b1222] p-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-xs text-violet-300">
                WEB DEVELOPMENT
              </span>
              <span className="text-xs text-amber-300">
                PLANEJADO
              </span>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#080d19]">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-red-400/80" />
                <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-[10px] text-slate-500">
                  dashboard.tsx
                </span>
              </div>

              <div className="space-y-2 p-5 font-mono text-xs">
                <p className="text-violet-300">
                  const dashboard = {"{"}
                </p>
                <p className="pl-4 text-cyan-300">
                  framework: &quot;Next.js&quot;,
                </p>
                <p className="pl-4 text-emerald-300">
                  language: &quot;TypeScript&quot;,
                </p>
                <p className="pl-4 text-blue-300">
                  database: &quot;SQL&quot;,
                </p>
                <p className="text-violet-300">{"}"}</p>
              </div>
            </div>
          </div>

          <div className="p-7">
            <p className="text-xs font-semibold tracking-widest text-violet-400">
              02 / DESENVOLVIMENTO WEB
            </p>
            <h3 className="mt-3 text-xl font-bold text-white">
              {projects[0].title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              {projects[0].description}
            </p>
            <div className="mt-6">
              <ProjectTags tags={projects[0].tags} />
            </div>
          </div>
        </article>

        {/* Projeto Data */}
        <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101827] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10">
          <div className="border-b border-white/10 bg-linear-to-br from-blue-950/70 to-[#0b1222] p-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-xs text-blue-300">
                DATA ANALYTICS
              </span>
              <span className="text-xs text-amber-300">
                PLANEJADO
              </span>
            </div>

            <div className="flex h-36 items-end justify-around gap-3 rounded-xl border border-white/10 bg-[#080d19] p-5">
              {[40, 70, 55, 90, 65, 100, 80].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-1 items-end"
                  >
                    <div
                      className="w-full rounded-t-md bg-linear-to-t from-violet-700 to-blue-400"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="p-7">
            <p className="text-xs font-semibold tracking-widest text-blue-400">
              03 / PYTHON + DATA
            </p>
            <h3 className="mt-3 text-xl font-bold text-white">
              {projects[1].title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              {projects[1].description}
            </p>
            <div className="mt-6">
              <ProjectTags tags={projects[1].tags} />
            </div>
          </div>
        </article>
      </div>

      <p className="mt-6 text-center text-xs text-slate-500">
        Pré-visualizações conceituais com dados ilustrativos.
        Projetos em desenvolvimento futuro.
      </p>
    </section>
  );
}
