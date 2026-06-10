import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Magnetic } from "./magnetic";

const links = [
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Awards", href: "#awards" },
  { label: "Hire", href: "#hire" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent-purple animate-pulse-glow" />
          Antara<span className="text-accent-purple"></span>
        </a>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border bg-surface-1/60 backdrop-blur px-2 py-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm font-mono text-text-muted hover:text-foreground rounded-full hover:bg-surface-2 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-10 w-10 rounded-full border border-border bg-surface-1 grid place-items-center hover:border-accent-purple/50 transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Magnetic>
            <a
              href="#contact"
              className="hidden sm:inline-flex h-10 items-center gap-2 rounded-full bg-accent-purple px-5 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgba(124,106,245,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(124,106,245,0.8)] transition-shadow"
            >
              Let's talk
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
