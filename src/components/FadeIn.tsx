import { ElementType, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FadeInProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  immediate?: boolean;
  x?: number;
  y?: number;
};

export function FadeIn({
  as = "div",
  children,
  className,
  delay = 0,
  duration = 0.7,
  immediate = false,
  x = 0,
  y = 30,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion.create(as);

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  if (immediate) {
    return <Component className={className}>{children}</Component>;
  }

  const animationProps = immediate
    ? {}
    : {
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: true, margin: "50px", amount: 0 },
      };

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...animationProps}
    >
      {children}
    </Component>
  );
}
