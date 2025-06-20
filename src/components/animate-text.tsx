"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView, Variants } from "motion/react";
import React from "react";

interface AnimateTextProps {
  text: string | React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
}

export function AnimateText({ text, as, className }: AnimateTextProps) {
  const Comp = as ? as : "span";
  const ref = React.useRef(null);

  const inView = useInView(ref, {
    once: true,
  });
  const ctrls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      ctrls.start("enter");
    }
    if (!inView) {
      ctrls.start("initial");
    }
  }, [ctrls, inView]);

  return (
    <Comp className={cn("inline-block overflow-hidden", className)} ref={ref}>
      {typeof text === "string" ? (
        text.split(" ").map((val, i) => (
          <span
            key={val + i}
            className="overflow-hidden inline-block leading-none"
          >
            <motion.span
              className="inline-block ml-2"
              custom={i}
              variants={perspectiveAnimate}
              initial="initial"
              animate={ctrls}
              exit="exit"
            >
              {val}
            </motion.span>
          </span>
        ))
      ) : (
        <motion.span
          className="inline-block"
          variants={perspectiveAnimate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {text}
        </motion.span>
      )}
    </Comp>
  );
}

export const perspectiveAnimate: Variants = {
  initial: {
    opacity: 0,
    y: `-100%`,
    rotate: -6,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: `0`,
    rotate: 0,
    transition: {
      duration: 1,
      delay: 0.1 + i * 0.02,
      //   ease: [0.2, 0.65, 0.3, 0.9],
      ease: "easeIn",
    },
  }),
  exit: {
    opacity: 0,
    y: `100%`,
    rotate: 3,
  },
};
