"use client";
import { motion, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  enter: {
    opacity: 1,
    scale: 1,
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ duration: 0.3, type: "spring" }}
    >
      {children}
    </motion.main>
  );
}
