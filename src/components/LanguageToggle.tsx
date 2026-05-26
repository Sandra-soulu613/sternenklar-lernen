"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-[#793A29] text-white rounded-full shadow-lg hover:bg-[#5a2b1f] transition-all duration-300"
      aria-label={language === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {language === "de" ? "English" : "Deutsch"}
      </span>
    </button>
  );
}