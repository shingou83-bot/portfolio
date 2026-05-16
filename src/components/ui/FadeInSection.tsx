"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  disabled?: boolean;
};

export function FadeInSection({
  children,
  className,
  delay = 0,
  disabled = false,
}: FadeInSectionProps) {
  const reduce = useReducedMotion();

  if (reduce || disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
