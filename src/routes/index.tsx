import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/portfolio/theme-provider";
import { CustomCursor } from "@/components/portfolio/cursor";
import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { Expertise } from "@/components/portfolio/expertise";
import { Work } from "@/components/portfolio/work";
import { Timeline } from "@/components/portfolio/timeline";
import { Awards } from "@/components/portfolio/awards";
import { Hire } from "@/components/portfolio/hire";
import { Contact } from "@/components/portfolio/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Antara Chitte — GenAI Builder · MERN Developer · GATE 2026 Qualifier" },
      { name: "description", content: "Computer Engineering undergrad shipping production GenAI systems, fraud-detection platforms, and AI-powered learning tools. Full-Stack · ML · GenAI." },
      { property: "og:title", content: "Antara Chitte — Engineer · GenAI Builder" },
      { property: "og:description", content: "Full-Stack Developer · GenAI Builder · ML Engineer · GATE 2026 Qualifier." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <div className="relative">
        <CustomCursor />
        <Nav />
        <main>
          <Hero />
          <Expertise />
          <Work />
          <Timeline />
          <Awards />
          <Hire />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}
