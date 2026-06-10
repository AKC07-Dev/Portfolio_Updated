import { Reveal } from "./reveal";

const marqueeItems = [
  "React.js", "Node.js", "MongoDB", "Express", "Spring Boot", "Python", "OpenAI",
  "RAG Pipelines", "Tailwind", "Flask", "MySQL", "Git", "Vercel", "Render", "Google Cloud", "Github" ,
];

const domains = [
  {
    color: "accent-purple",
    label: "01 / FULL-STACK",
    title: "Full-Stack Architecture",
    desc: "End-to-end systems with MERN, Spring Boot, REST APIs, and scalable database design.",
    skills: ["React.js", "Node.js", "Express", "Spring Boot", "MongoDB", "MySQL", "REST APIs", "Tailwind CSS"],
  },
  {
    color: "accent-emerald",
    label: "02 / ML",
    title: "Intelligent Systems & ML",
    desc: "Anomaly detection, predictive models, and feature engineering on real-world data.",
    skills: ["Anomaly Detection", "Classification", "Regression", "Clustering", "Feature Engineering", "Vectorization", "Python", "scikit-learn"],
  },
  {
    color: "accent-gold",
    label: "03 / GENAI",
    title: "GenAI & Document Intelligence",
    desc: "RAG pipelines, OCR, prompt engineering, and LLM workflows that ship to production.",
    skills: ["RAG", "OpenAI API", "LangChain", "OCR", "PDF Parsing", "Prompt Engineering"],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="relative py-32">
      {/* Marquee */}
      <div className="border-y border-border bg-surface-1/40 overflow-hidden">
        <div className="flex whitespace-nowrap py-6 animate-marquee font-display text-3xl md:text-5xl font-bold">
          {[...marqueeItems, ...marqueeItems].map((w, i) => (
            <span key={i} className="mx-8 flex items-center gap-8">
              {w}
              <span className="h-2 w-2 rounded-full bg-accent-purple" />
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-32">
        <Reveal className="max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-widest text-accent-purple"></div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight">
            Three pillars. <span className="text-text-muted">One engineer.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          {domains.map((d, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className="group relative h-full rounded-3xl border border-border bg-surface-1 p-8 overflow-hidden transition-all duration-500 hover:border-foreground/20 hover:-translate-y-2"
                style={{ ["--c" as string]: `var(--${d.color})` }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(600px circle at 50% 0%, var(--${d.color})22, transparent 60%)` }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="uppercase tracking-widest text-text-muted">{d.label}</span>
                    <span className="h-2 w-2 rounded-full" style={{ background: `var(--${d.color})` }} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold">{d.title}</h3>
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">{d.desc}</p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {d.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-[11px] transition-all hover:border-current hover:text-foreground"
                        style={{ color: `var(--${d.color})` }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
