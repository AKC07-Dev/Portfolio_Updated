import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "./reveal";
import { useState } from "react";

const projects = [
  {
    num: "01",
    date: "April 2026",
    name: "Saarthi_AI",
    tagline: "AI that makes government bureaucracy navigable for every citizen.",
    challenge: "Citizens drown in dense government documents written in jargon they can't parse.",
    solution: "Built a full RAG pipeline with OCR + advanced PDF parsing to extract accurate answers from intricate government docs. Shipped with a complete working frontend.",
    stack: ["Python", "Flask", "RAG", "OCR", "GenAI", "NLP"],
    impact: ["Presented at Udbhav'26", "24-Hour National Hackathon", "SAGE University, Indore"],
    color: "accent-gold",
    github: "https://github.com/AKC07-Dev/Saarthi_AI",
    liveSite: "https://saarthi-ai-1.onrender.com/",
  },
  {
    num: "02",
    date: "January 2026",
    name: "CyberGaurd Banking",
    tagline: "Real-time fraud detection built end-to-end — frontend to ML model.",
    challenge: "Banking platforms need to flag fraudulent transactions instantly without exposing user PII.",
    solution: "Designed a secure full-stack banking app with outlier detection + clustering ML models. Used vectorization to extract behavioral features while preserving privacy.",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Spring Boot", "Python"],
    impact: ["End-to-end ownership", "ML + secure backend", "Real-time anomaly flagging"],
    color: "accent-emerald",
    github: "https://github.com/AKC07-Dev/cyberguard-banking",
    liveSite: "https://cyberguard-banking.onrender.com/",
  },
  {
    num: "03",
    date: "November 2025",
    name: "Study GenAI Platform",
    tagline: "PDFs in. AI summaries and quizzes out. Learning, automated.",
    challenge: "Teachers waste hours generating quizzes and summaries from course material.",
    solution: "Architected a full LMS backend with Teacher/Student dashboards. Integrated OpenAI API to auto-generate summaries and context-aware MCQ quizzes from PDFs.",
    stack: ["Node.js", "Express", "MongoDB", "OpenAI API", "PDF-Parse"],
    impact: ["Secure file processing", "Real-time AI generation", "Dual-role dashboards"],
    color: "accent-purple",
    github: "https://github.com/AKC07-Dev/StudyGeni-platform-Backend-Project",
    liveSite: "https://study-genai.onrender.com/",
  },
];

export function Work() {
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-accent-purple"></div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
              Innovations <span className="text-text-muted">shipped to production.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-text-muted">
            {String(active + 1).padStart(2, "0")} <span className="text-border">/</span> {String(projects.length).padStart(2, "0")}
          </div>
        </Reveal>

        <div className="mt-16 space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.05}>
              <article
                onMouseEnter={() => setActive(i)}
                className="group relative grid lg:grid-cols-12 gap-6 rounded-3xl border border-border bg-surface-1 p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-foreground/20"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: `radial-gradient(900px circle at var(--mx, 30%) var(--my, 50%), var(--${p.color})1A, transparent 50%)` }}
                  onMouseMove={(e) => {
                    const t = e.currentTarget as HTMLElement;
                    const r = t.getBoundingClientRect();
                    t.style.setProperty("--mx", `${e.clientX - r.left}px`);
                    t.style.setProperty("--my", `${e.clientY - r.top}px`);
                  }}
                />

                <div className="relative lg:col-span-3 flex lg:flex-col justify-between gap-4">
                  <div>
                    <div className="font-mono text-xs text-text-muted">{p.date}</div>
                    <div className="font-display text-6xl md:text-7xl font-bold text-text-muted/30 mt-1">{p.num}</div>
                  </div>
                  <div className="flex gap-2 lg:mt-auto">
                    <a href={p.github} aria-label="Github" data-cursor="hover" className="h-10 w-10 rounded-full border border-border grid place-items-center hover:bg-surface-2 hover:border-foreground/40 transition-colors">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href={p.liveSite} data-cursor="hover" className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-xs font-mono hover:bg-surface-2 hover:border-foreground/40 transition-colors">
                      Live Site <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className="relative lg:col-span-9">
                  <h3 className="font-display text-3xl md:text-5xl font-bold leading-[1.05]">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-lg md:text-xl leading-snug" style={{ color: `var(--${p.color})` }}>
                    {p.tagline}
                  </p>

                  <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted">Challenge</div>
                      <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{p.challenge}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted">Solution</div>
                      <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{p.solution}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-text-muted">{s}</span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-text-muted">
                    {p.impact.map((m) => (
                      <span key={m} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full" style={{ background: `var(--${p.color})` }} />
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
