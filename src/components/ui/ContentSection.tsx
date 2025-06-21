import React from "react";
import { motion } from "framer-motion";

export const ContentSection = (): JSX.Element => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
      className="flex flex-col w-full max-w-[1200px] mx-auto py-8 px-3"
    >
      <div className="flex flex-col items-center w-full">
        <h2 className="font-['Inter',Helvetica] text-[49.6px] font-bold text-center leading-[55px]">
          <span className="text-[#19232b]">Awards </span>
          <span className="text-[#275ba8]">Ceremony</span>
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-3 font-['Inter',Helvetica] text-[20px] text-center text-everefficientlkslate-gray leading-[28.8px]"
      >
        Honor of Business Talent - Awards Ceremony 2025
      </motion.div>
    </motion.section>
  );
};
