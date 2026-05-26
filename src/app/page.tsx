"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  Instagram,
  Heart,
  Sparkles,
  Star,
  MapPin,
  ChevronRight,
  Wind,
  Music,
  Plane,
  Leaf,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage, LanguageProvider } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

// Color palette
const colors = {
  primary: "#793A29",
  primaryLight: "#9B4E3A",
  primaryDark: "#5A2B1F",
  warmWhite: "#FFFDF9",
  lightGray: "#F8F6F4",
  mediumGray: "#6B7280",
  darkGray: "#1F2937",
  gold: "#C4A65C",
  sage: "#9CAF88",
  clay: "#C17A5B",
};

// Slideshow images
const slideshowImages = [
  "/images/image-1.webp",
  "/images/image-2.webp",
  "/images/image-3.webp",

];

export default function SoulunayaPage() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}

function PageContent() {
  const { t, language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [showLegal, setShowLegal] = React.useState(false);
  const [legalContent, setLegalContent] = React.useState<React.ReactNode>(null);

  // Auto-rotate slideshow - smoother with longer duration and better timing
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to generate legal section content dynamically based on current language
  const generateLegalContent = React.useCallback(() => {
    return (
      <section className="py-12 sm:py-16 md:py-20 lg:py-32" style={{ backgroundColor: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mb-3 sm:mb-4">{t("legal.title")}</h2>
            <div className="w-16 sm:w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.primary }}></div>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{t("legal.owner")}</h3>
              <div className="text-sm sm:text-base text-gray-600 space-y-1">
                <p>Sandra Andermatt</p>
                <p>Amlehnstrasse 48</p>
                <p>6010 Kriens</p>
                <p>+41 79 810 57 72</p>
                <p className="break-words">sandra.andermatt@psychologie.ch</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{t("legal.websiteInfo")}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t("legal.websiteInfoText1")}</p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-2 sm:mt-3">{t("legal.websiteInfoText2")}</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{t("legal.liability")}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t("legal.liabilityText")}</p>
              <div className="text-xs text-gray-500 mt-2 sm:mt-3 space-y-1">
                <p>Phone: Gregor Cresnar, <a href="https://www.flaticon.com/free-icons/phone" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#793A29]">Flaticon</a></p>
                <p>Email: Freepik, <a href="https://www.flaticon.com/free-icons/email" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#793A29]">Flaticon</a></p>
                <p>Instagram: Freepik, <a href="https://www.flaticon.com/free-icons/instagram" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#793A29]">Flaticon</a></p>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{t("legal.copyright")}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t("legal.copyrightText1")}</p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-2 sm:mt-3">{t("legal.copyrightText2")}</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{t("legal.privacy")}</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{t("legal.privacyDate")}</p>
              <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{t("legal.responsible")}</h4>
              <p className="text-sm sm:text-base text-gray-600">Sandra Andermatt, Amlehnstrasse 48, 6010 Kriens</p>
              <h4 className="font-semibold text-gray-800 mt-3 sm:mt-4 mb-1 sm:mb-2 text-sm sm:text-base">{t("legal.psychotherapy")}</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t("legal.psychotherapyText")}</p>
              <h4 className="font-semibold text-gray-800 mt-3 sm:mt-4 mb-1 sm:mb-2 text-sm sm:text-base">{t("legal.websitePrivacy")}</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t("legal.websitePrivacyText")}</p>
              <h4 className="font-semibold text-gray-800 mt-3 sm:mt-4 mb-1 sm:mb-2 text-sm sm:text-base">{t("legal.rights")}</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t("legal.rightsText")}</p>
              <h4 className="font-semibold text-gray-800 mt-3 sm:mt-4 mb-1 sm:mb-2 text-sm sm:text-base">{t("legal.security")}</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t("legal.securityText")}</p>
              <h4 className="font-semibold text-gray-800 mt-3 sm:mt-4 mb-1 sm:mb-2 text-sm sm:text-base">{t("legal.changes")}</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t("legal.changesText")}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }, [t]);

  // Update legal content when language changes and legal section is visible
  React.useEffect(() => {
    if (showLegal) {
      setLegalContent(generateLegalContent());
    }
  }, [language, generateLegalContent, showLegal]);

  // Toggle legal section function
  const toggleLegalSection = () => {
    if (showLegal) {
      setShowLegal(false);
      setLegalContent(null);
    } else {
      setLegalContent(generateLegalContent());
      setShowLegal(true);
      setTimeout(() => {
        const impressumElement = document.getElementById("impressum");
        if (impressumElement) {
          impressumElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: colors.warmWhite }}>
      <LanguageToggle />

      {/* Hero Section - Rich artistic gradient background with more shades */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Main multi-stop gradient with richer brown spectrum */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5A2B1F] via-[#7A3B2A] via-[#8B4633] via-[#9B4E3A] to-[#C17A5B]"></div>
        
        {/* Diagonal gradient for depth - dark to light */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#3D1C12] via-[#7A3B2A] to-[#D4A07A]/30"></div>
        
        {/* Radial burst from center */}
        <div className="absolute inset-0 bg-radial-gradient from-[#C17A5B]/20 via-[#7A3B2A]/10 to-transparent"></div>
        
        {/* Warm overlay for richness */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D1C12]/40 via-[#8B4633]/20 to-[#C17A5B]/20"></div>
        
        {/* Cross gradient for more depth */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#5A2B1F]/50 via-transparent to-[#9B4E3A]/30"></div>
        
        {/* Subtle noise texture overlay for artistic feel */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.3\' /%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }}>
        </div>
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40"></div>
        
        {/* Decorative light particles - artistic touch */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#D4A07A]/10 blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-[#C17A5B]/15 blur-3xl animate-pulse delay-1500"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Smaller logo container */}
            <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] xl:w-[30rem] xl:h-[30rem] mx-auto mb-6 sm:mb-8 relative">
              <Image
                src="/images/logo-2.png"
                alt="Soulunaya Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <div className="w-24 sm:w-32 h-0.5 mx-auto bg-white/40"></div>
          </motion.div>
        </div>

        {/* Custom scroll indicator - modern and minimalist */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => scrollToSection("welcome")}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-white/70 text-xs tracking-wider font-light">SCROLL</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section with Vertical Slideshow on Left */}
      <section id="welcome" className="py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
{/* Left Side - Vertical Slideshow - CROSSFADE TRANSITION */}
<div className="relative h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl order-1 md:order-none">
  {slideshowImages.map((img, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0 }}
      animate={{ opacity: currentImageIndex === idx ? 1 : 0 }}
      transition={{ duration: 5, ease: "easeInOut" }}
      className="absolute inset-0"
      style={{ pointerEvents: currentImageIndex === idx ? "auto" : "none" }}
    >
      <Image
        src={img}
        alt={`Soulunaya slideshow ${idx + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={idx === 0}
      />
    </motion.div>
  ))}
  
  {/* Slideshow indicators */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
    {slideshowImages.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCurrentImageIndex(idx)}
        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
          idx === currentImageIndex ? "w-4 sm:w-6 bg-white" : "bg-white/50"
        }`}
        aria-label={`Go to slide ${idx + 1}`}
      />
    ))}
  </div>
</div>

            {/* Right Side - Welcome Text */}
            <div className="order-2 md:order-none">
              <Badge className="mb-3 sm:mb-4 bg-[#793A29]/10 text-[#793A29] border-none text-xs sm:text-sm">
                <Sparkles className="w-3 h-3 mr-1" /> {t("welcome.badge")}
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-4 sm:mb-6">
                {t("welcome.title")} <span style={{ color: colors.primary }}>{t("soulunaya")}</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {t("welcome.intro")}
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {t("welcome.description")}
              </p>
              
              <div className="bg-[#793A29]/5 p-4 sm:p-6 rounded-xl border-l-4" style={{ borderColor: colors.primary }}>
                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
                  {t("welcome.quote")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Angebot Section - Therapy, Breath, Silent Walk, SoundJourney, Travel */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32" style={{ backgroundColor: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-3 sm:mb-4 bg-[#793A29]/10 text-[#793A29] border-none text-xs sm:text-sm">
              <Star className="w-3 h-3 mr-1" /> {t("offerings.badge")}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-3 sm:mb-4">{t("offerings.title")}</h2>
            <div className="w-16 sm:w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.primary }}></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* SouLunAya Therapy */}
            <Card className="border-0 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-2" style={{ backgroundColor: colors.primary }}></div>
              <CardContent className="p-5 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: colors.primary }} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-center text-gray-800 mb-2 sm:mb-3">{t("offerings.therapy.title")}</h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center mb-3 sm:mb-4">
                  {t("offerings.therapy.subtitle")}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {t("offerings.therapy.description")}
                </p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <p className="text-xs sm:text-sm text-gray-500">{t("offerings.therapy.price1")} <span className="font-semibold" style={{ color: colors.primary }}>CHF 160.-</span> / {t("offerings.therapy.perHour")}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{t("offerings.therapy.price2")} <span className="font-semibold" style={{ color: colors.primary }}>CHF 140.-</span> / {t("offerings.therapy.perHour")}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{t("offerings.therapy.price3")} <span className="font-semibold" style={{ color: colors.primary }}>CHF 120.-</span> / {t("offerings.therapy.perHour")}</p>
                </div>
              </CardContent>
            </Card>

            {/* SouLunAya Breath */}
            <Card className="border-0 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-2" style={{ backgroundColor: colors.primary }}></div>
              <CardContent className="p-5 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Wind className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: colors.primary }} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-center text-gray-800 mb-2 sm:mb-3">{t("offerings.breath.title")}</h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center mb-3 sm:mb-4">
                  {t("offerings.breath.subtitle")}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {t("offerings.breath.description")}
                </p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <p className="text-xs sm:text-sm text-gray-500">{t("offerings.breath.firstSession")} <span className="font-semibold" style={{ color: colors.primary }}>CHF 50.-</span></p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{t("offerings.breath.followUp")} <span className="font-semibold" style={{ color: colors.primary }}>CHF 160.-</span></p>
                </div>
              </CardContent>
            </Card>

            {/* SouLunAya Silent BreathWalk */}
            <Card className="border-0 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden group sm:col-span-2 lg:col-span-1">
              <div className="h-2" style={{ backgroundColor: colors.primary }}></div>
              <CardContent className="p-5 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Leaf className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: colors.primary }} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-center text-gray-800 mb-2 sm:mb-3">{t("offerings.silentWalk.title")}</h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center mb-3 sm:mb-4">
                  {t("offerings.silentWalk.subtitle")}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {t("offerings.silentWalk.description")}
                </p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <p className="text-xs sm:text-sm text-gray-500">{t("offerings.silentWalk.price")} <span className="font-semibold" style={{ color: colors.primary }}>CHF 10.-</span> {t("offerings.silentWalk.perWalk")}</p>
                  <p className="text-xs text-gray-400 mt-1">{t("offerings.silentWalk.time")} | {t("offerings.silentWalk.location")}</p>
                </div>
              </CardContent>
            </Card>

            {/* SoundJourney - Now in same Card design */}
            <Card className="border-0 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden group sm:col-span-2 lg:col-span-1">
              <div className="h-2" style={{ backgroundColor: colors.primary }}></div>
              <CardContent className="p-5 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Music className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: colors.primary }} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-center text-gray-800 mb-2 sm:mb-3">{t("soundJourney.title")}</h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center mb-3 sm:mb-4">
                  {t("soundJourney.subtitle")}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {t("soundJourney.description")}
                </p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <p className="text-xs sm:text-sm text-gray-500">{t("soundJourney.priceLabel")} <span className="font-semibold" style={{ color: colors.primary }}>{t("soundJourney.price")}</span> / {t("soundJourney.perPerson")}</p>
                  <p className="text-xs text-gray-400 mt-1">{t("soundJourney.duration")} | {t("soundJourney.registration")}</p>
                </div>
              </CardContent>
            </Card>

            {/* Soulunaya Travel - Now in same Card design */}
            <Card className="border-0 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden group sm:col-span-2 lg:col-span-1">
              <div className="h-2" style={{ backgroundColor: colors.sage }}></div>
              <CardContent className="p-5 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: `${colors.sage}20` }}>
                  <Plane className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: colors.sage }} />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold text-center text-gray-800 mb-2 sm:mb-3">{t("travel.title")}</h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center mb-3 sm:mb-4">
                  {t("travel.subtitle")}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {t("travel.description")}
                </p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <p className="text-xs sm:text-sm text-gray-500">{t("travel.info")}</p>
                  <p className="text-xs text-gray-400 mt-1">{t("travel.nextDestination")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section with Photo on Right */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32" style={{ backgroundColor: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left - About Text */}
            <div className="order-2 md:order-none">
              <Badge className="mb-3 sm:mb-4 bg-[#793A29]/10 text-[#793A29] border-none text-xs sm:text-sm">
                <Award className="w-3 h-3 mr-1" /> {t("about.badge")}
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mb-4 sm:mb-6">
                {t("about.name")}
                <span className="block text-base sm:text-lg font-sans text-gray-500 mt-1 sm:mt-2">{t("about.title")}</span>
              </h2>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {t("about.description")}
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <Briefcase className="w-4 h-4" style={{ color: colors.primary }} /> {t("about.experience.title")}
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-gray-600">
                    <li><span className="font-medium">{t("about.experience.item1.year")}</span> – {t("about.experience.item1.text")}</li>
                    <li><span className="font-medium">{t("about.experience.item2.year")}</span> – {t("about.experience.item2.text")}</li>
                    <li><span className="font-medium">{t("about.experience.item3.year")}</span> – {t("about.experience.item3.text")}</li>
                    <li><span className="font-medium">{t("about.experience.item4.year")}</span> – {t("about.experience.item4.text")}</li>
                    <li><span className="font-medium">{t("about.experience.item5.year")}</span> – {t("about.experience.item5.text")}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <GraduationCap className="w-4 h-4" style={{ color: colors.primary }} /> {t("about.education.title")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs sm:text-sm text-gray-600">
                    <p>• {t("about.education.item1")}</p>
                    <p>• {t("about.education.item2")}</p>
                    <p>• {t("about.education.item3")}</p>
                    <p>• {t("about.education.item4")}</p>
                    <p>• {t("about.education.item5")}</p>
                    <p>• {t("about.education.item6")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Photo */}
            <div className="relative order-1 md:order-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[3/4] relative">
                  <Image
                    src="/images/sandra.webp"
                    alt="Sandra Andermatt"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 rounded-full" style={{ backgroundColor: `${colors.primary}15` }}></div>
              <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-20 h-20 sm:w-32 sm:h-32 rounded-full" style={{ backgroundColor: `${colors.primary}10` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Image Banner */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/image-5.webp"
              alt="Soulunaya Banner"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#793A29]/80 to-transparent flex items-center">
              <div className="ml-4 sm:ml-8 md:ml-16 max-w-[200px] sm:max-w-md">
                <h3 className="text-lg sm:text-2xl md:text-3xl font-serif text-white mb-1 sm:mb-2">{t("banner.title")}</h3>
                <p className="text-xs sm:text-base text-white/90">{t("banner.subtitle")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Photo */}
      <section id="kontakt" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Contact Info */}
            <div className="order-2 md:order-none">
              <Badge className="mb-3 sm:mb-4 bg-[#793A29]/10 text-[#793A29] border-none text-xs sm:text-sm">
                <Heart className="w-3 h-3 mr-1" /> {t("contact.badge")}
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-4 sm:mb-6">{t("contact.title")}</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                {t("contact.message")}
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${colors.primary}10` }}>
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">{t("contact.phone")}</p>
                    <a href="tel:+41798105772" className="text-sm sm:text-base md:text-lg text-gray-800 hover:text-[#793A29] transition-colors break-words">
                      +41 79 810 57 72
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${colors.primary}10` }}>
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">{t("contact.email")}</p>
                    <a href="mailto:sandra.andermatt@psychologie.ch" className="text-sm sm:text-base md:text-lg text-gray-800 hover:text-[#793A29] transition-colors break-words">
                      sandra.andermatt@psychologie.ch
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${colors.primary}10` }}>
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: colors.primary }} />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">{t("contact.address")}</p>
                    <p className="text-sm sm:text-base text-gray-800">Amlehnstrasse 48, 6010 Kriens</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
                <div className="flex justify-start gap-3 sm:gap-4">
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ backgroundColor: colors.primary }}>
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-4">
                  <div className="text-base sm:text-xl font-light text-gray-800">soulunaya</div>
                  <div className="text-xs sm:text-sm text-gray-500">{t("sandra.andermatt")}</div>
                </div>
              </div>
            </div>

            {/* Right - Contact Photo */}
            <div className="relative order-1 md:order-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-square relative">
                  <Image
                    src="/images/image-4.webp"
                    alt="Contact Sandra Andermatt"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-24 h-24 sm:w-40 sm:h-40 rounded-full" style={{ backgroundColor: `${colors.primary}5` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impressum & Datenschutz Section - Dynamically shown/hidden */}
      <div id="impressum">
        {showLegal && legalContent}
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: colors.primaryDark }}>
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-center">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-serif text-white mb-1 sm:mb-2">Soulunaya</h3>
              <p className="text-white/60 text-xs sm:text-sm">{t("sandra.andermatt")}</p>
            </div>

            <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <button onClick={() => scrollToSection("kontakt")} className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm">{t("contact.title")}</button>
              <button onClick={toggleLegalSection} className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm">{t("legal.title")}</button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <a href="tel:+41798105772" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">+41 79 810 57 72</a>
              <span className="text-white/30 hidden sm:inline">|</span>
              <a href="mailto:sandra.andermatt@psychologie.ch" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm break-words">sandra.andermatt@psychologie.ch</a>
            </div>

            <div className="border-t border-white/10 pt-4 sm:pt-6">
              <p className="text-white/40 text-xs sm:text-sm">© 2026 Sandra Andermatt – {t("legal.title")}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}