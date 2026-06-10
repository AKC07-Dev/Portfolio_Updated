import { Trophy, Rocket, Gem, Cloud, Zap } from "lucide-react";
import { Reveal } from "./reveal";

const awards = [
  { icon: Trophy, color: "accent-gold", title: "GATE CSE 2026 Qualified", detail: "Cleared as 3rd-year undergrad — highly competitive national exam.", size: "md:col-span-2 md:row-span-2" },
  { icon: Gem, color: "accent-purple", title: "CodeChef Diamond Badge", detail: "1,000+ problems solved — top analytical tier.", size: "md:col-span-2" },
  { icon: Rocket, color: "accent-emerald", title: "Udbhav'26 Hackathon", detail: "Presented Saarthi_AI at 24-Hour National Hackathon, SAGE University, Indore.", size: "md:col-span-2" },
  { icon: Cloud, color: "accent-purple", title: "Google Cloud Code Vipassana", detail: "Completed all 7 sessions of Season 10 — certified in Cloud AI/ML.", size: "md:col-span-2" },
  { icon: Zap, color: "accent-red", title: "SPARK 2K25", detail: "Competed against 80 teams at national-level competition, MKD University.", size: "md:col-span-2" },
];

export function Awards() {
  return (
    <section id="awards" className="relative py-32 bg-surface-1/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-widest text-accent-purple"></div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
            Awards, certifications & <span className="text-text-muted">milestones.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-4 md:auto-rows-[180px] gap-4">
          {awards.map((a, i) => (
            <Reveal key={i} delay={i * 0.05} className={a.size}>
              <div className="group relative h-full rounded-3xl border border-border bg-surface-1 p-7 overflow-hidden hover:border-foreground/20 transition-colors">
                <div
                  className="absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl opacity-20 group-hover:opacity-50 transition-opacity"
                  style={{ background: `var(--${a.color})` }}
                />
                <div className="relative flex h-full flex-col justify-between">
                  <div
                    className="inline-grid h-12 w-12 place-items-center rounded-2xl border"
                    style={{ borderColor: `var(--${a.color})`, color: `var(--${a.color})` }}
                  >
                    <a.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold leading-tight">{a.title}</h3>
                    <p className="mt-2 text-sm text-text-muted leading-relaxed">{a.detail}</p>
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
