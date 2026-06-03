// components/LanguageToggle.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm p-1">
      <motion.button
        onClick={() => setLanguage("de")}
        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
          language === "de"
            ? "bg-[#4A7B6B] text-white shadow-sm"
            : "text-gray-600 hover:bg-gray-100"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        DE
      </motion.button>
      <motion.button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
          language === "en"
            ? "bg-[#4A7B6B] text-white shadow-sm"
            : "text-gray-600 hover:bg-gray-100"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
    </div>
  );
}