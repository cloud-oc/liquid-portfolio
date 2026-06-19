import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../lib/utils";

type BlurTextProps = {
  text: string;
  className?: string;
};

export function BlurText({ text, className }: BlurTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  useEffect(() => {
    const element = ref.current;

    if (!element || shouldReduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  return (
    <p
      ref={ref}
      aria-label={text}
      className={cn("flex flex-wrap justify-center gap-x-[0.28em] gap-y-1", className)}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="inline-block"
          initial={
            shouldReduceMotion
              ? false
              : { filter: "blur(10px)", opacity: 0, y: 50 }
          }
          animate={
            visible
              ? { filter: "blur(0px)", opacity: 1, y: 0 }
              : undefined
          }
          transition={{
            duration: 0.7,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
