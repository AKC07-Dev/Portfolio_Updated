import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./reveal";

const items = [
  {
    date: "June 2026",
    role: "Data Management Intern",
    org: "RPG Foundation",
    bullets: [
      "Currently working here.",
    ],
    color: "accent-gold",
  },
  {
    date: "Jan 2026 — Apr 2026",
    role: "Java Intern",
    org: "Infosys Springboard",
    bullets: [
      "Built enterprise-grade backend components with Java, JDBC, and Spring Boot.",
      "Designed optimized DB schemas and REST APIs to improve data flow.",
    ],
    color: "accent-purple",
  },
  {
    date: "Nov 2024 — Dec 2024",
    role: "Web Developer",
    org: "Akatsuki Coding Club",
    bullets: [
      "Built interactive UI for the official club website (2 key sections shipped).",
      "Executed 4+ peer code reviews enforcing quality and best practices.",
    ],
    color: "accent-emerald",
  },
  {
    date: "Completed",
    role: "ML & Cloud Track",
    org: "Google Cloud Code Vipassana — Season 10",
    bullets: [
      "Finished all 7 sessions; hands-on with BigQuery, cloud ML services, Google Cloud AI/ML tools.",
    ],
    color: "accent-gold",
  },
  {
    date: "2023 — 2027",
    role: "B.Tech, Computer Engineering · 8.48 CGPA",
    org: "R. C. Patel Institute of Technology, Shirpur",
    bullets: [
      "Higher Secondary — 83 percentile (2021–2023).",
    ],
    color: "accent-red",
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 30%"] });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-widest text-accent-purple"></div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight">
            Built over <span className="text-text-muted">deliberate years.</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-20 pl-8 md:pl-16">
          {/* axis bg */}
          <div className="absolute left-2 md:left-6 top-2 bottom-2 w-px bg-border" />
          {/* axis fill */}
          <motion.div
            style={{ height: fill }}
            className="absolute left-2 md:left-6 top-2 w-px bg-gradient-to-b from-accent-purple via-accent-emerald to-accent-gold"
          />

          <div className="space-y-16">
            {items.map((it, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative">
                  <div
                    className="absolute -left-[26px] md:-left-[50px] top-2 h-3.5 w-3.5 rounded-full ring-4 ring-background"
                    style={{ background: `var(--${it.color})` }}
                  />
                  <div className="font-mono text-xs uppercase tracking-widest text-text-muted">{it.date}</div>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold">{it.role}</h3>
                  <div className="mt-1 text-sm" style={{ color: `var(--${it.color})` }}>{it.org}</div>
                  <ul className="mt-4 space-y-2 max-w-2xl">
                    {it.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                        <span className="mt-2 h-1 w-3 flex-shrink-0 rounded-full bg-border" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
