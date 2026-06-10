import { Check, ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { Magnetic } from "./magnetic";

const gigs = [
  {
    color: "accent-purple",
    tag: "Full-Stack · MERN",
    title: "I will build a scalable MERN stack web app with clean REST APIs",
    // Replace with your actual MERN gig URL from Fiverr
    link: "https://pro.fiverr.com/s/qDmqV35", 
    keywords: ["MERN", "React + Node", "REST APIs", "Next.js"],
    tiers: [
      { name: "Starter", price: "$80", popular: false, items: ["Landing or single-page app", "Responsive UI", "Basic REST API"] },
      { name: "Builder", price: "$100", popular: true, items: ["Multi-page MERN app", "Auth + DB integration", "Deploy to Vercel/Render"] },
      { name: "Enterprise", price: "$150", popular: false, items: ["Production-grade app", "Admin + role-based auth", "CI/CD + docs"] },
    ],
  },
  {
    color: "accent-emerald",
    tag: "ML · Python",
    title: "I will build a Python ML model for fraud detection or predictive analytics",
    // Replace with your actual ML gig URL from Fiverr
    link: "https://pro.fiverr.com/s/pd79rEp",
    keywords: ["Anomaly detection", "Predictive analytics", "Feature engineering"],
    tiers: [
      { name: "Explore", price: "$80", popular: false, items: ["EDA + cleaning", "Baseline model", "Brief report"] },
      { name: "Predict", price: "$120", popular: true, items: ["Tuned ML model", "Evaluation + metrics", "Jupyter notebook delivery"] },
      { name: "Intelligence", price: "$155", popular: false, items: ["End-to-end pipeline", "Deployable API", "Monitoring guide"] },
    ],
  },
  {
    color: "accent-gold",
    tag: "AI · GenAI",
    title: "I will build a RAG AI assistant using OpenAI for your documents",
    // Replace with your actual GenAI gig URL from Fiverr
    link: "https://www.fiverr.com/your-username/your-ai-gig-slug",
    keywords: ["RAG chatbot", "OpenAI API", "Document intelligence"],
    tiers: [
      { name: "Spark", price: "$80", popular: false, items: ["Single-doc Q&A bot", "OpenAI integration", "Web UI"] },
      { name: "Intelligent", price: "$105", popular: true, items: ["Multi-doc RAG pipeline", "Vector DB (FAISS/Chroma)", "Citations + history"] },
      { name: "Autonomous", price: "$150", popular: false, items: ["Agentic workflows", "OCR + PDF ingest", "Production deploy"] },
    ],
  },
];

export function Hire() {
  return (
    <section id="hire" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-widest text-accent-purple"></div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight">
            Hire me. <span className="text-text-muted">Ship in days, not quarters.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          {gigs.map((g, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group h-full rounded-3xl border border-border bg-surface-1 overflow-hidden flex flex-col">
                <div
                  className="p-7 border-b border-border"
                  style={{ background: `linear-gradient(180deg, var(--${g.color})12, transparent)` }}
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: `var(--${g.color})` }}>{g.tag}</div>
                  <h3 className="mt-3 font-display text-xl font-bold leading-tight">{g.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {g.keywords.map((k) => (
                      <span key={k} className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-text-muted">{k}</span>
                    ))}
                  </div>
                </div>

                <div className="flex-1 p-3 space-y-2">
                  {g.tiers.map((t) => (
                    <div
                      key={t.name}
                      className={`rounded-2xl p-5 transition-colors ${t.popular ? "bg-surface-2 border border-current" : "border border-border hover:bg-surface-2"}`}
                      style={t.popular ? { color: `var(--${g.color})` } : {}}
                    >
                      <div className="flex items-baseline justify-between text-foreground">
                        <div className="flex items-center gap-2">
                          <span className="font-display font-bold">{t.name}</span>
                          {t.popular && (
                            <span className="rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest" style={{ background: `var(--${g.color})`, color: "#fff" }}>
                              Popular
                            </span>
                          )}
                        </div>
                        <span className="font-display text-2xl font-bold" style={t.popular ? { color: `var(--${g.color})` } : {}}>{t.price}</span>
                      </div>
                      <ul className="mt-3 space-y-1.5">
                        {t.items.map((it) => (
                          <li key={it} className="flex items-start gap-2 text-xs text-text-muted">
                            <Check className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: `var(--${g.color})` }} />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Updated Button Block */}
                <div className="p-5 pt-2">
                  <Magnetic strength={0.2}>
                    <a
                      href={g.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-2xl px-5 py-4 font-mono text-sm text-white transition-transform"
                      style={{ background: `var(--${g.color})` }}
                    >
                      Order on Fiverr <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}