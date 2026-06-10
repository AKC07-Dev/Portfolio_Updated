import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement;
      setHover(!!el.closest("a, button, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;
  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
      style={{ mixBlendMode: "difference", background: "#F0EFF8" }}
      animate={{
        x: pos.x - (hover ? 24 : 6),
        y: pos.y - (hover ? 24 : 6),
        width: hover ? 48 : 12,
        height: hover ? 48 : 12,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
    />
  );
}
