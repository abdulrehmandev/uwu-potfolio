"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

const words = [
  "Hello",
  "Hola",
  "Bonjour",
  "Hallo",
  "Ciao",
  "你好",
  "Olá",
  "Привет",
  "Hej",
  "Selamat",
  "Aloha",
];

export function Hello({ className }: { className?: string }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showWord, setShowWord] = useState(true);

  React.useEffect(() => {
    if (showWord) {
      const timer = setTimeout(() => setShowWord(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showWord]);

  const handleExitComplete = () => {
    // Move to next word and show it
    setCurrentWordIndex((prev) => (prev + 1) % words.length);
    setShowWord(true);
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {showWord && (
        <motion.div
          className={cn("font-medium text-xl", className)}
          key={words[currentWordIndex]}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {words[currentWordIndex]}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// export const Hello = ({
//   duration = 3000,
//   className,
// }: {
//   duration?: number;
//   className?: string;
// }) => {
//   const [currentWord, setCurrentWord] = useState(words[0]);
//   const [isAnimating, setIsAnimating] = useState<boolean>(false);

//   const startAnimation = useCallback(() => {
//     const word = words[words.indexOf(currentWord) + 1] || words[0];
//     setCurrentWord(word);
//     setIsAnimating(true);
//   }, [currentWord]);

//   useEffect(() => {
//     if (!isAnimating)
//       setTimeout(() => {
//         startAnimation();
//       }, duration);
//   }, [isAnimating, duration, startAnimation]);

//   return (
//     <AnimatePresence
//       onExitComplete={() => {
//         setIsAnimating(false);
//       }}
//     >
//       <motion.div
//         exit={{
//           position: "absolute",
//         }}
//         className={cn("z-[1] inline-block relative text-left px-2", className)}
//         key={currentWord}
//       >
//         {currentWord.split(" ").map((word, wordIndex) => (
//           <AnimateText text={word} key={word + wordIndex} />
//         ))}
//       </motion.div>
//     </AnimatePresence>
//   );
// };
