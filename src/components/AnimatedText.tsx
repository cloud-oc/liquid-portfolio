import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
};

type CharacterProps = {
  children: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
};

function AnimatedCharacter({ children, index, total, progress }: CharacterProps) {
  const start = total <= 1 ? 0 : index / total;
  const end = total <= 1 ? 1 : Math.min(1, start + 0.16);
  const opacity = useTransform(progress, [start, end], [0.55, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{children === " " ? "\u00A0" : children}</span>
      <motion.span
        aria-hidden="true"
        className="absolute inset-0"
        style={{ opacity }}
      >
        {children === " " ? "\u00A0" : children}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const characters = Array.from(text);

  if (shouldReduceMotion) {
    return <p className={className}>{text}</p>;
  }

  return (
    <p ref={ref} className={className} aria-label={text}>
      {characters.map((character, index) => (
        <AnimatedCharacter
          key={`${character}-${index}`}
          index={index}
          total={characters.length}
          progress={scrollYProgress}
        >
          {character}
        </AnimatedCharacter>
      ))}
    </p>
  );
}
