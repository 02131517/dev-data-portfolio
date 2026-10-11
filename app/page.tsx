
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

        {/* Apresentação principal */}
        <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-20">
          <div className="mb-8 w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-medium tracking-wide text-blue-300">
            DESENVOLVIMENTO WEB • DATA ANALYTICS • BI
          </div>

          <p className="mb-4 text-lg text-slate-400">
            Olá, eu sou
          </p>

          <h1 className="max-w-5xl text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            Joel{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-500 bg-clip-text text-transparent">
              Kaltner.
            </span>
          </h1>

          <h2 className="mt-8 max-w-3xl text-xl font-medium text-slate-200 sm:text-2xl">
            Estudante de ADS{" "}
            <span className="text-blue-400">|</span>{" "}
            Desenvolvimento & Business Intelligence
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Explorando a conexão entre tecnologia e dados.
            Desenvolvo minhas habilidades na criação de
            aplicações web e na transformação de informações
            em análises que apoiam decisões.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
            >
              Explorar projetos ↗
            </a>

            <a
              href="https://github.com/02131517"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 px-7 py-4 font-semibold transition hover:border-blue-500 hover:bg-white/5"
            >
              Meu GitHub ↗
            </a>
          </div>

          <div className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-500">
            <span className="h-px w-10 bg-blue-500" />
            Conheça meu trabalho
          </div>
        </section>

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

        {/* Projetos */}
        <section id="projetos" className="mx-auto max-w-6xl px-6 py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
            02 / Portfólio
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Projetos & Experimentos<span className="text-blue-500">.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Projetos planejados para explorar desenvolvimento
            web, análise de dados e soluções de Business
            Intelligence.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex flex-col rounded-2xl border border-white/10 bg-[#101624] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50"
              >
                <div className="mb-12 flex items-start justify-between">
                  <span className="text-4xl font-bold text-white/10">
                    {project.number}
                  </span>
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[10px] font-medium text-amber-300">
                    PLANEJADO
                  </span>
                </div>

                <p className="text-xs font-semibold tracking-widest text-blue-400">
                  {project.category}
                </p>

                <h3 className="mt-4 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/5 px-3 py-2 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

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
