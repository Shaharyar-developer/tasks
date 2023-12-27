"use client";
import { motion, useScroll } from "framer-motion";

export const CustomScrollbar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed right-0 top-0 z-[100] h-full w-[4px] origin-top bg-default-400"
      style={{ scaleY: scrollYProgress }}
      transition={{ type: "spring", duration: 0.5 }}
    />
  );
};
