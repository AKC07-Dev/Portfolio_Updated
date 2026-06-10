import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, className, delay = 0, y = 24 }: { children: ReactNode; className?: string; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pr-[0.25em]">
          <motion.span
            className="inline-block"
            // CHANGED: Use initial and animate instead of whileInView for Hero items
            initial={{ y: "110%" }}
            animate={{ y: 0 }} 
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1], 
              delay: i * 0.05 
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}