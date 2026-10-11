
import Hero from "./components/Hero";

import Projects from "./components/Projects";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "SQL",
  "Power BI",
];

const projects = [
  {
    number: "01",
    category: "BUSINESS INTELLIGENCE",
    title: "Dashboard de Vendas",
    description:
      "Análise de indicadores comerciais, faturamento e desempenho para apoiar decisões estratégicas.",
    technologies: ["Power BI", "SQL", "Python"],
  },
  {
    number: "02",
    category: "DESENVOLVIMENTO WEB",
    title: "Sistema de Gestão",
    description:
      "Aplicação web com autenticação, gerenciamento de registros e integração com banco de dados.",
    technologies: ["Next.js", "TypeScript", "SQL"],
  },
  {
    number: "03",
    category: "WEB + DATA ANALYTICS",
    title: "Plataforma de Analytics",
    description:
      "Uma plataforma para visualizar indicadores, explorar dados e transformar informações em insights.",
    technologies: ["React", "Python", "Data Viz"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b14] text-white">
      {/* Efeitos de iluminação */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute left-0 top-[500px] h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Navegação */}
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
          <a href="#" className="text-xl font-bold tracking-tight">
            JK<span className="text-blue-500">.</span>
          </a>

          <nav className="flex items-center gap-5 text-sm text-slate-400 sm:gap-8">
            <a href="#sobre" className="transition hover:text-white">
              Sobre
            </a>
            <a href="#projetos" className="transition hover:text-white">
              Projetos
            </a>
            <a href="#contato" className="transition hover:text-white">
              Contato
            </a>
          </nav>
        </header>

        {/* Apresentação principal - Home 2.0 */}
        <Hero />

        {/* Sobre */}
        <section id="sobre" className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
                01 / Sobre mim
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Código, dados e{" "}
                <span className="text-blue-400">soluções.</span>
              </h2>
            </div>

            <div>
              <p className="leading-8 text-slate-400">
                Sou estudante de Análise e Desenvolvimento de
                Sistemas, com interesse em desenvolvimento de
                aplicações web, análise de dados e Business
                Intelligence.
              </p>

              <p className="mt-5 leading-8 text-slate-400">
                Meu objetivo é construir soluções que combinem
                interfaces funcionais, organização de dados e
                visualizações que facilitem a compreensão de
                informações.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projetos - Bento Grid 2.0 */}
        <Projects />

        {/* Contato */}
        <section id="contato" className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
              03 / Contato
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Vamos construir algo{" "}
              <span className="text-blue-400">incrível?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-400">
              Estou desenvolvendo meu portfólio e aberto a
              conexões, aprendizado e oportunidades na área
              de tecnologia.
            </p>

            <a
              href="https://github.com/02131517"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
            >
              Conectar pelo GitHub ↗
            </a>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Joel Kaltner. Todos os direitos reservados.</p>
          <p>Desenvolvido com Next.js, TypeScript e Tailwind CSS.</p>
        </footer>
      </div>
    </main>
  );
}
