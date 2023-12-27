"use client";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export const Back = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="ml-2 mt-2 max-w-max rounded p-2 transition-all hover:bg-default-50 active:scale-90"
      onClick={() => (window.location.href = "/")}
    >
      <ArrowLeft />
    </motion.div>
  );
};
