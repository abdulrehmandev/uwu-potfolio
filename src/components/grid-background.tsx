"use client";

import React from "react";

export function GridBackground() {
  const animationStartTime = React.useRef(Date.now());

  const getAnimationDelay = (index: number) => {
    const elapsed = (Date.now() - animationStartTime.current) / 1000;
    const baseDelay = index * 0.01;
    const cycleTime = 5;
    const currentCycle = elapsed % cycleTime;
    return (baseDelay - currentCycle + cycleTime) % cycleTime;
  };

  return (
    <div className="fixed top-0 -z-[1] flex h-screen justify-center items-center w-full">
      <div className="box-grid grid grid-cols-9 w-full h-full">
        {Array.from({ length: 81 }, (_, i) => (
          <div
            suppressHydrationWarning
            key={i}
            className="animated-box aspect-square bg-background"
            style={{
              animationDelay: `${getAnimationDelay(i)}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
