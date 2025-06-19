"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Magnetic({
  children,
  mild = false,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: React.ReactElement<any>;
  mild?: boolean;
}) {
  const magnetic = useRef<HTMLElement>(null);

  useEffect(() => {
    if (magnetic.current) {
      const xTo = gsap.quickTo(magnetic.current, "x", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      const yTo = gsap.quickTo(magnetic.current, "y", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });

      magnetic.current.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
          magnetic.current?.getBoundingClientRect() ?? {
            height: 0,
            width: 0,
            left: 0,
            top: 0,
          };
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * (mild ? 0.1 : 0.35));
        yTo(y * (mild ? 0.1 : 0.35));
      });
      magnetic.current.addEventListener("mouseleave", () => {
        xTo(0);
        yTo(0);
      });
    }
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
