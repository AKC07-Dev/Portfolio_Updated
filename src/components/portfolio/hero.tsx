import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Magnetic } from "./magnetic";
import { RevealText } from "./reveal";
import Image from "../../assets/Portrait.jpg" // Ensure this path is correct based on your project structure

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-accent-purple/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent-emerald/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* status pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-1/70 backdrop-blur px-4 py-1.5 font-mono text-xs text-text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
          </span>
          Available for freelance & part-time · Shirpur, India
        </motion.div>

        {/* Main Content Split Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7">
            <h1 className="font-display font-bold leading-[0.95] tracking-tight text-[clamp(2.5rem,6vw,5.5rem)]">
              <RevealText text="Engineering scalable" className="block" />
              <RevealText text="digital architecture." className="block text-gradient-purple" />
              <span className="block text-text-muted text-[0.55em] font-sans font-light mt-6 max-w-2xl leading-snug">
                <RevealText text="Driving innovation from conception to production — across full-stack, machine learning, and generative AI." />
              </span>
            </h1>

            {/* identity row */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-widest text-text-muted"
            >
              <span className="text-foreground">Antara Chitte</span>
              <span className="text-border">/</span>
              <span>Full-Stack Dev</span>
              <span className="text-border">·</span>
              <span>GenAI Builder</span>
              <span className="text-border">·</span>
              <span>ML Engineer</span>
              <span className="text-border">·</span>
              <span className="text-accent-gold">GATE 2026 Qualifier</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <a
                  href="#hire"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent-purple px-7 py-4 text-sm font-medium text-white shadow-[0_20px_60px_-15px_rgba(124,106,245,0.6)] hover:shadow-[0_25px_80px_-15px_rgba(124,106,245,0.9)] transition-all"
                >
                  <Sparkles className="h-4 w-4" />
                  Hire Me / Let's Talk
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm hover:border-foreground/40 transition-colors">
                  View my work <ArrowDown className="h-4 w-4" />
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right Column: Image Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end lg:-translate-y-24"
          >
            <div className="relative group w-full max-w-[380px] aspect-[4/5] rounded-2xl border border-border bg-surface-1/40 backdrop-blur p-3 transition-colors duration-500 hover:border-accent-purple/40">
              {/* Decorative background glow behind the frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/10 to-accent-purple/25 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Actual Image Container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-surface-2 border border-border/60">
                <img 
                  src={Image} // Replace with your actual image path (e.g., in public folder)
                  alt="Antara Chitte"
                  className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                />
                {/* Sleek overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Minimal corner accent styling */}
              <div className="absolute bottom-5 left-5 font-mono text-[10px] tracking-widest text-text-muted/60 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                [ LOC // 21.14° N ]
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Bento */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {[
            { k: "8.48", l: "CGPA · B.Tech Computer Engineering", c: "accent-purple" },
            { k: "1000+", l: "Problems solved · CodeChef Diamond Badge", c: "accent-emerald" },
            { k: "3", l: "Production AI/ML systems shipped", c: "accent-gold" },
            { k: "GATE'26", l: "Qualified as 3rd-year undergrad", c: "accent-red" },
          ].map((s, i) => (
            <div key={i} className="relative group rounded-2xl border border-border bg-surface-1/60 backdrop-blur p-6 overflow-hidden hover:border-foreground/20 transition-colors">
              <div className={`absolute -top-1/2 -right-1/2 h-40 w-40 rounded-full bg-${s.c}/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="font-display text-3xl md:text-4xl font-bold">{s.k}</div>
              <div className="mt-2 text-xs font-mono text-text-muted leading-relaxed">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}