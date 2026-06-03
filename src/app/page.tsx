// app/page.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Heart,
  Star,
  MapPin,
  ChevronRight,
  Award,
  Briefcase,
  Users,
  BookOpen,
  Lightbulb,
  TrendingUp,
  User,
  Clock,
  DollarSign,
  AlertCircle,
  Menu,
  X,
  Calendar,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage, LanguageProvider } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

// Color palette
const colors = {
  primary: "#4A7B6B",
  primaryLight: "#6B9B8B",
  primaryDark: "#2E5B4B",
  warmWhite: "#FDFBF7",
  lightGray: "#F5F3F0",
  mediumGray: "#6B7280",
  darkGray: "#1F2937",
  gold: "#D4A857",
  accent: "#C27A5E",
};

// Complete translations with ALL information
const translations = {
  de: {
    "nav.home": "Start",
    "nav.offerings": "Angebote",
    "nav.about": "Über uns",
    "nav.conditions": "Konditionen",
    "nav.contact": "Kontakt",

    "home.badge": "Willkommen",
    "home.title": "Lerncoaching & Psychotherapie",
    "home.subtitle": "In einer entspannten und kreativen Atmosphäre begleiten wir professionell bei der Suche nach Lösungen und dem Erleben neuer Erfahrungen.",
    "home.point1": "Lerncoaching für Kinder, Jugendliche und Erwachsene",
    "home.point2": "Psychotherapie und psychologische Beratung",
    "home.point3": "Eltern- und Lehrpersonenberatung",
    "home.point4": "Einzel- und Gruppensupervisionen für Lehrpersonen",
    "home.point5": "Workshops und Vorträge",
    "home.current": "AKTUELL",
    "home.currentTitle": "«Resilienisch - Ein Sprachkurs für innere Stärke»",

    "offerings.badge": "Unser Angebot",
    "offerings.title": "Angebote",
    
    "offerings.lerncoaching.title": "Lerncoaching für Kinder, Jugendliche und Erwachsene",
    "offerings.lerncoaching.description": "In einem individuellen Lerncoaching wird gemeinsam nach passenden Lösungen gesucht, die das Lernverhalten nachhaltig verbessern. Die Anzahl der Sitzungen ist individuell, den Bedürfnissen angepasst und mit Ihnen abgesprochen.",
    "offerings.lerncoaching.price": "CHF 135.– / 160.- pro Stunde",
    
    "offerings.psychotherapie.title": "Psychotherapie und Psychologische Beratung",
    "offerings.psychotherapie.description": "Wir bieten Psychotherapie und Beratung für Kinder, Jugendliche und Erwachsene an. Dabei legen wir grossen Wert auf die Stärkung der Resilienz und des Selbstwertes. Auch bei der Bewältigung herausfordernder Erfahrungen und Situationen können wir Unterstützung bieten.",
    "offerings.psychotherapie.price": "CHF 160.- pro Stunde",
    
    "offerings.elternberatung.title": "Elternberatung",
    "offerings.elternberatung.description": "In einer individuellen Elternberatung besprechen wir gemeinsam, wie Sie Ihre familiären Bedürfnisse und die alltäglichen Herausforderungen unter einen Hut bringen. Die Anzahl der Sitzungen ist individuell, den Bedürfnissen angepasst und mit Ihnen abgesprochen.",
    "offerings.elternberatung.price": "CHF 135.– / 160.- pro Stunde",
    
    "offerings.lehrkraefte.title": "Beratung von Lehrkräften und Schulen",
    "offerings.lehrkraefte.description": "Lehrerin / Lehrer zu sein ist heute anspruchsvoller denn je. Wir bieten Ihnen individuelle Beratungen im Einzel- oder im Gruppensetting an. Die Anzahl der Sitzungen ist individuell, den Bedürfnissen angepasst und mit Ihnen abgesprochen. Gerne können Sie auch mit Weiterbildungsanfragen für Ihr Team an uns gelangen.",
    "offerings.lehrkraefte.price": "CHF 160.- pro Stunde",
    
    "offerings.workshops.title": "Workshops und Vorträge",
    "offerings.workshops.item1_title": "«Mit Kindern lernen»",
    "offerings.workshops.item1_desc": "In 90 Minuten vermitteln wir Elternvereinen und Schulen praktische Tipps zum Thema «Mit Kindern lernen».",
    "offerings.workshops.item1_price": "CHF 600.– (inkl. Vorbereitung, Anreise und Reisespesen)",
    "offerings.workshops.item2_title": "«Resilienisch - Ein Sprachkurs für innere Stärke»",
    "offerings.workshops.item2_desc": "In 90 Minuten werden Eltern und Schulen die Grundprinzipien einer stärkenden Kommunikation vermittelt.",
    "offerings.workshops.item2_price": "Preis auf Anfrage (inkl. Vorbereitung, Anreise und Reisespesen) – für Partnerschulen von fit4future kostenlos",
    "offerings.workshops.item3_title": "«Freundschaften: Warum Kinder sie brauchen und wie Eltern sie stärken können»",
    "offerings.workshops.item3_desc": "In 90 Minuten vermitteln wir praktische Tipps zum Thema «Kinderfreundschaften».",
    "offerings.workshops.item3_price": "CHF 600.– (inkl. Vorbereitung, Anreise und Reisespesen)",
    "offerings.workshops.item4_title": "«Clever lernen» Workshop für 11- bis 13-jährige",
    "offerings.workshops.item4_desc": "In zwei Treffen à 2 ½ Stunden vermitteln wir konkrete Tipps und Tricks rund ums «Clever lernen».",
    "offerings.workshops.item4_price": "CHF 195.– (inkl. Buch «Clever lernen» von S. Rietzler und F. Grolimund, 2018)",
    "offerings.workshops.dates_title": "Nächste Workshop-Termine 2025",
    "offerings.workshops.date1": "FORUM Colibri, Kinderarztpraxis Luzern Süd, Ringstrasse 37, 6010 Kriens",
    "offerings.workshops.date1_email": "Anmeldung: nz@sternenklar-lernen.ch oder sa@sternenklar-lernen.ch",
    "offerings.workshops.date2": "fit4school Mutschellen, Bahnhofstrasse 1, 8965 Berikon",
    "offerings.workshops.date2_email": "Anmeldung: nds@sternenklar-lernen.ch",
    "offerings.workshops.note": "Ab vier TeilnehmerInnen organisieren wir den nächsten Workshop auch gerne ausserhalb der publizierten Daten.",
    
    "offerings.supervision.title": "Einzel- und Gruppensupervision für Lehrpersonen",
    "offerings.supervision.description": "Für Lehrpersonen aller Schulstufen und Fachrichtungen, die an einer professionellen Weiterentwicklung interessiert sind, bieten wir individuelle und gruppenbasierte Supervision an. Ziel ist es, Kompetenzen zu stärken, den Austausch mit Kolleginnen und Kollegen zu fördern und neue Perspektiven zu gewinnen.",
    "offerings.supervision.price": "CHF 170.- pro Stunde (Bei Gruppenanmeldungen sind ermässigte Tarife möglich)",
    
    "offerings.contact": "Kontakt / Anmeldung",
    
    "about.badge": "Über uns",
    "about.title": "Unser Team",
    "about.teamPhoto": "Unser Team",
    
    "about.sandra.name": "Sandra Andermatt",
    "about.sandra.title": "Eidg. anerkannte Psychotherapeutin | Fachpsychologin für Kinder- und Jugendpsychologie FSP | Fachpsychologin für Psychotherapie FSP | Lerncoach",
    "about.sandra.bio1": "Eidg. anerkannte Psychotherapeutin, wilob Lenzburg",
    "about.sandra.bio2": "Ausbildung zum Lerncoach, Akademie für Lerncoaching, Zürich Altstetten",
    "about.sandra.bio3": "Master of Advanced Studies in Kinder- und Jugendpsychologie FSP, Universität Basel",
    "about.sandra.bio4": "Master in Klinischer Psychologie und Gesundheitspsychologie, Universität Fribourg",
    "about.sandra.bio5": "Mehrere Jahre Berufserfahrung als Schulpsychologin",
    "about.sandra.region": "Region Zentralschweiz und Zürich",
    
    "about.nadezhda.name": "Nadezhda De Salvador",
    "about.nadezhda.title": "Schulische Heilpädagogin und Lerncoach",
    "about.nadezhda.bio1": "Systemisch-ressourcenorientiertes Arbeiten mit Kindern, Jugendlichen und ihrem Umfeld, CAS, wilob Lenzburg",
    "about.nadezhda.bio2": "Resilienztrainerin für Kinder, Resilienz-Schule Freising",
    "about.nadezhda.bio3": "Ausbildung zum Lerncoach, Akademie für Lerncoaching, Zürich Altstetten",
    "about.nadezhda.bio4": "Coaching Praktikerin, CAS, FHNW Olten",
    "about.nadezhda.bio5": "Master in Special Needs Education, HfH Zürich",
    "about.nadezhda.bio6": "Weiterbildung zur Dyskalkulietherapeutin, Lerntherapiezentrum Basel",
    "about.nadezhda.bio7": "Mehrere Jahre Berufserfahrung als Schulische Heilpädagogin",
    "about.nadezhda.region": "Widen, Kanton Aargau",
    
    "about.natascha.name": "Natascha Zoller",
    "about.natascha.title": "Kinder- und Jugendpsychologin und Lerncoach",
    "about.natascha.bio1": "In Ausbildung zur eidg. anerkannten Psychotherapeutin, KJF Luzern",
    "about.natascha.bio2": "Ausbildung zum Lerncoach, Akademie für Lerncoaching, Zürich Altstetten",
    "about.natascha.bio3": "Weiterbildungen in bindungsbasierter Beratung und Therapie",
    "about.natascha.bio4": "Master in Klinischer Psychologie und Entwicklungspsychologie, Universität Bern",
    "about.natascha.bio5": "Mehrere Jahre Berufserfahrung als Schulpsychologin",
    "about.natascha.region": "Region Zentralschweiz",
    
    "about.current": "AKTUELL",
    "about.currentTitle": "«Resilienisch - Ein Sprachkurs für innere Stärke»",
    
    "contact.badge": "Kontakt",
    "contact.title": "Kontakt",
    "contact.subtitle": "Wir freuen uns auf Ihre Kontaktaufnahme.",
    "contact.sandra.name": "Sandra Andermatt",
    "contact.sandra.note": "nimmt keine neuen KlientInnen auf",
    "contact.sandra.region": "Region Zentralschweiz",
    "contact.nadezhda.name": "Nadezhda De Salvador",
    "contact.nadezhda.region": "Widen, Kanton Aargau",
    "contact.natascha.name": "Natascha Zoller",
    "contact.natascha.region": "Region Zentralschweiz",
    
    "conditions.badge": "Konditionen",
    "conditions.title": "Konditionen",
    "conditions.intro": "Bitte beachten Sie unsere Konditionen",
    "conditions.rate1": "Beratungs- und Coachingtermine bei Sandra Andermatt / Natascha Zoller",
    "conditions.rate1Price": "CHF 160.-",
    "conditions.rate2": "Supervisionen bei Sandra Andermatt / Natascha Zoller",
    "conditions.rate2Price": "CHF 170.-",
    "conditions.rate3": "Beratungs- und Coachingtermine bei Nadezhda De Salvador",
    "conditions.rate3Price": "CHF 135.-",
    "conditions.included": "Telefonate und E-Mails bis zu 15 Minuten sind im Preis inbegriffen.",
    "conditions.travel": "Bitte beachten Sie, dass zu den Grundkosten die Fahrtkosten von CHF 0.70 pro Kilometer hinzukommen.",
    "conditions.cancellation": "Im Verhinderungsfall bitten wir Sie, uns spätestens 24 Stunden vorher zu benachrichtigen. Andernfalls wird Ihnen der ganze Betrag in Rechnung gestellt.",
    
    "legal.title": "Impressum & Datenschutz",
    "footer.copyright": "© 2026 sternenklar lernen – Alle Rechte vorbehalten",
  },
  en: {
    "nav.home": "Home",
    "nav.offerings": "Services",
    "nav.about": "About Us",
    "nav.conditions": "Terms",
    "nav.contact": "Contact",

    "home.badge": "Welcome",
    "home.title": "Learning Coaching & Psychotherapy",
    "home.subtitle": "In a relaxed and creative atmosphere, we professionally accompany you in finding solutions and experiencing new possibilities.",
    "home.point1": "Learning coaching for children, teenagers, and adults",
    "home.point2": "Psychotherapy and psychological counseling",
    "home.point3": "Parent and teacher counseling",
    "home.point4": "Individual and group supervision for teachers",
    "home.point5": "Workshops and lectures",
    "home.current": "CURRENT",
    "home.currentTitle": "«Resilienisch - A language course for inner strength»",

    "offerings.badge": "Our Services",
    "offerings.title": "Services",
    
    "offerings.lerncoaching.title": "Learning Coaching for Children, Teenagers & Adults",
    "offerings.lerncoaching.description": "In individual learning coaching, we work together to find suitable solutions that sustainably improve learning behavior. The number of sessions is individual, tailored to your needs, and discussed with you.",
    "offerings.lerncoaching.price": "CHF 135.– / 160.- per hour",
    
    "offerings.psychotherapie.title": "Psychotherapy and Psychological Counseling",
    "offerings.psychotherapie.description": "We offer psychotherapy and counseling for children, teenagers, and adults. We place great emphasis on strengthening resilience and self-esteem. We can also offer support in coping with challenging experiences and situations.",
    "offerings.psychotherapie.price": "CHF 160.- per hour",
    
    "offerings.elternberatung.title": "Parent Counseling",
    "offerings.elternberatung.description": "In individual parent counseling, we discuss together how to balance your family needs and daily challenges. The number of sessions is individual, tailored to your needs, and discussed with you.",
    "offerings.elternberatung.price": "CHF 135.– / 160.- per hour",
    
    "offerings.lehrkraefte.title": "Counseling for Teachers and Schools",
    "offerings.lehrkraefte.description": "Being a teacher is more challenging than ever. We offer individual counseling in individual or group settings. The number of sessions is individual, tailored to your needs, and discussed with you. You are also welcome to contact us with training requests for your team.",
    "offerings.lehrkraefte.price": "CHF 160.- per hour",
    
    "offerings.workshops.title": "Workshops and Lectures",
    "offerings.workshops.item1_title": "«Learning with Children»",
    "offerings.workshops.item1_desc": "In 90 minutes, we provide practical tips on the topic of 'Learning with Children' to parent associations and schools.",
    "offerings.workshops.item1_price": "CHF 600.– (incl. preparation, travel and expenses)",
    "offerings.workshops.item2_title": "«Resilienisch - A language course for inner strength»",
    "offerings.workshops.item2_desc": "In 90 minutes, parents and schools learn the basic principles of empowering communication.",
    "offerings.workshops.item2_price": "Price on request (incl. preparation, travel and expenses) – free for fit4future partner schools",
    "offerings.workshops.item3_title": "«Friendships: Why children need them and how parents can strengthen them»",
    "offerings.workshops.item3_desc": "In 90 minutes, we provide practical tips on the topic of 'Children's friendships'.",
    "offerings.workshops.item3_price": "CHF 600.– (incl. preparation, travel and expenses)",
    "offerings.workshops.item4_title": "«Clever Learning» Workshop for ages 11-13",
    "offerings.workshops.item4_desc": "In two sessions of 2.5 hours each, we teach concrete tips and tricks about 'Clever Learning'.",
    "offerings.workshops.item4_price": "CHF 195.– (incl. book 'Clever lernen' by S. Rietzler and F. Grolimund, 2018)",
    "offerings.workshops.dates_title": "Upcoming Workshop Dates 2025",
    "offerings.workshops.date1": "FORUM Colibri, Kinderarztpraxis Luzern Süd, Ringstrasse 37, 6010 Kriens",
    "offerings.workshops.date1_email": "Registration: nz@sternenklar-lernen.ch or sa@sternenklar-lernen.ch",
    "offerings.workshops.date2": "fit4school Mutschellen, Bahnhofstrasse 1, 8965 Berikon",
    "offerings.workshops.date2_email": "Registration: nds@sternenklar-lernen.ch",
    "offerings.workshops.note": "From four participants onwards, we are happy to organize the next workshop outside the published dates.",
    
    "offerings.supervision.title": "Individual and Group Supervision for Teachers",
    "offerings.supervision.description": "For teachers of all grade levels and subject areas interested in professional development, we offer individual and group supervision. The goal is to strengthen competencies, promote exchange with colleagues, and gain new perspectives.",
    "offerings.supervision.price": "CHF 170.- per hour (Discounted rates available for group registrations)",
    
    "offerings.contact": "Contact / Registration",
    
    "about.badge": "About Us",
    "about.title": "Our Team",
    "about.teamPhoto": "Our Team",
    
    "about.sandra.name": "Sandra Andermatt",
    "about.sandra.title": "Federally recognized psychotherapist | Specialist in child and adolescent psychology FSP | Specialist in psychotherapy FSP | Learning coach",
    "about.sandra.bio1": "Federally recognized psychotherapist, wilob Lenzburg",
    "about.sandra.bio2": "Training as a learning coach, Academy for Learning Coaching, Zurich Altstetten",
    "about.sandra.bio3": "Master of Advanced Studies in Child and Adolescent Psychology FSP, University of Basel",
    "about.sandra.bio4": "Master in Clinical Psychology and Health Psychology, University of Fribourg",
    "about.sandra.bio5": "Several years of professional experience as a school psychologist",
    "about.sandra.region": "Central Switzerland and Zurich region",
    
    "about.nadezhda.name": "Nadezhda De Salvador",
    "about.nadezhda.title": "School Special Educator and Learning Coach",
    "about.nadezhda.bio1": "Systemic resource-oriented work with children, adolescents and their environment, CAS, wilob Lenzburg",
    "about.nadezhda.bio2": "Resilience trainer for children, Resilience School Freising",
    "about.nadezhda.bio3": "Training as a learning coach, Academy for Learning Coaching, Zurich Altstetten",
    "about.nadezhda.bio4": "Coaching practitioner, CAS, FHNW Olten",
    "about.nadezhda.bio5": "Master in Special Needs Education, HfH Zurich",
    "about.nadezhda.bio6": "Further training as a dyscalculia therapist, Learning Therapy Center Basel",
    "about.nadezhda.bio7": "Several years of professional experience as a school special educator",
    "about.nadezhda.region": "Widen, Canton Aargau",
    
    "about.natascha.name": "Natascha Zoller",
    "about.natascha.title": "Child and Adolescent Psychologist and Learning Coach",
    "about.natascha.bio1": "In training as a federally recognized psychotherapist, KJF Lucerne",
    "about.natascha.bio2": "Training as a learning coach, Academy for Learning Coaching, Zurich Altstetten",
    "about.natascha.bio3": "Further training in attachment-based counseling and therapy",
    "about.natascha.bio4": "Master in Clinical Psychology and Developmental Psychology, University of Bern",
    "about.natascha.bio5": "Several years of professional experience as a school psychologist",
    "about.natascha.region": "Central Switzerland region",
    
    "about.current": "CURRENT",
    "about.currentTitle": "«Resilienisch - A language course for inner strength»",
    
    "contact.badge": "Contact",
    "contact.title": "Contact",
    "contact.subtitle": "We look forward to hearing from you.",
    "contact.sandra.name": "Sandra Andermatt",
    "contact.sandra.note": "not accepting new clients",
    "contact.sandra.region": "Central Switzerland region",
    "contact.nadezhda.name": "Nadezhda De Salvador",
    "contact.nadezhda.region": "Widen, Canton Aargau",
    "contact.natascha.name": "Natascha Zoller",
    "contact.natascha.region": "Central Switzerland region",
    
    "conditions.badge": "Terms",
    "conditions.title": "Terms and Conditions",
    "conditions.intro": "Please note our terms and conditions",
    "conditions.rate1": "Counseling and coaching sessions with Sandra Andermatt / Natascha Zoller",
    "conditions.rate1Price": "CHF 160.-",
    "conditions.rate2": "Supervisions with Sandra Andermatt / Natascha Zoller",
    "conditions.rate2Price": "CHF 170.-",
    "conditions.rate3": "Counseling and coaching sessions with Nadezhda De Salvador",
    "conditions.rate3Price": "CHF 135.-",
    "conditions.included": "Phone calls and emails up to 15 minutes are included in the price.",
    "conditions.travel": "Please note that travel costs of CHF 0.70 per kilometer are added to the basic costs.",
    "conditions.cancellation": "In case of cancellation, please notify us at least 24 hours in advance. Otherwise, the full amount will be charged.",
    
    "legal.title": "Imprint & Privacy",
    "footer.copyright": "© 2026 sternenklar lernen – All rights reserved",
  }
};

export default function SternenklarPage() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}

function PageContent() {
  const { language } = useLanguage();
  const [showLegal, setShowLegal] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const getText = (key: string): string => {
    const lang = language as 'de' | 'en';
    return translations[lang][key as keyof typeof translations.de] || translations.de[key as keyof typeof translations.de] || key;
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLegalSection = () => {
    setShowLegal(!showLegal);
    if (!showLegal) {
      setTimeout(() => {
        const impressumElement = document.getElementById("impressum");
        if (impressumElement) {
          impressumElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "nav.home", onClick: () => scrollToTop() },
    { id: "angebote", label: "nav.offerings", onClick: () => scrollToSection("angebote") },
    { id: "about", label: "nav.about", onClick: () => scrollToSection("about") },
    { id: "conditions", label: "nav.conditions", onClick: () => scrollToSection("conditions") },
    { id: "kontakt", label: "nav.contact", onClick: () => scrollToSection("kontakt") },
  ];

  const OfferingCard = ({ icon: Icon, title, description, price }: any) => (
    <Card className="border-0 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden group h-full">
      <div className="h-1.5" style={{ backgroundColor: colors.primary }}></div>
      <CardContent className="p-5 sm:p-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: `${colors.primary}10` }}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: colors.primary }} />
        </div>
        <h3 className="text-base sm:text-lg font-serif font-semibold text-center text-gray-800 mb-3">{title}</h3>
        <div className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">{description}</div>
        {price && <p className="text-sm font-medium text-center mb-4" style={{ color: colors.primary }}>{price}</p>}
        <div className="mt-4 pt-4 border-t border-gray-100 text-center">
          <button 
            onClick={() => scrollToSection("kontakt")}
            className="text-xs sm:text-sm font-medium hover:underline flex items-center justify-center gap-1 mx-auto"
            style={{ color: colors.primary }}
          >
            {getText("offerings.contact")} <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </CardContent>
    </Card>
  );

  // Team member - Portrait fully visible (using contain instead of cover)
  const TeamMember = ({ name, title, bio, region, phone, email, photoPath }: any) => (
    <Card className="border-0 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
      <div className="h-1.5" style={{ backgroundColor: colors.accent }}></div>
      {/* Photo Banner - full portrait visible with object-contain and white background */}
      <div className="relative w-full bg-white flex items-center justify-center p-4" style={{ minHeight: "280px" }}>
        <div className="relative w-full h-64">
          <Image 
            src={photoPath} 
            alt={name} 
            fill 
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </div>
      <CardContent className="p-5 sm:p-6 flex-1">
        <div className="text-center mb-4">
          <h3 className="font-serif font-semibold text-gray-800">{name}</h3>
          <p className="text-xs text-gray-500 mt-1">{title}</p>
        </div>
        <div className="space-y-1.5 text-xs sm:text-sm text-gray-600">
          {bio.map((item: string, idx: number) => (
            <p key={idx} className="leading-relaxed">• {item}</p>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 space-y-1">
          <p className="flex items-center justify-center gap-2"><MapPin className="w-3 h-3" /> {region}</p>
          <p className="flex items-center justify-center gap-2"><Phone className="w-3 h-3" /> {phone}</p>
          <p className="flex items-center justify-center gap-2 break-all"><Mail className="w-3 h-3" /> {email}</p>
        </div>
      </CardContent>
    </Card>
  );

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: colors.warmWhite }}>
      {/* Header with transparent background */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo - Extra Large */}
            <button onClick={scrollToTop} className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
              <div className="relative w-14 h-14 md:w-20 md:h-20">
                <Image src="/images/logo-1.png" alt="sternenklar lernen" fill className="object-contain" />
              </div>
             
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button key={item.id} onClick={item.onClick} className="text-sm text-white hover:text-[#60C2D0] transition-colors drop-shadow-md">
                  {getText(item.label)}
                </button>
              ))}
            </nav>

            <div className="hidden md:block">
              <LanguageToggle />
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg bg-white/20 backdrop-blur-sm">
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 bg-white/95 backdrop-blur-sm rounded-lg mt-2">
              <div className="flex flex-col gap-3 px-4">
                {navItems.map((item) => (
                  <button key={item.id} onClick={item.onClick} className="text-sm text-gray-600 hover:text-[#4A7B6B] transition-colors py-2 text-left">
                    {getText(item.label)}
                  </button>
                ))}
                <div className="pt-2 border-t border-gray-100">
                  <LanguageToggle />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Extra Large Logo */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E5B4B] via-[#4A7B6B] to-[#6B9B8B]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            {/* Hero Logo - Extra Extra Large */}
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image src="/images/logo-1.png" alt="sternenklar lernen" fill className="object-contain brightness-0 invert" />
              </div>
            </div>
            
            <div className="w-20 h-0.5 bg-white/40 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              {getText("home.subtitle")}
            </p>
            <div className="mt-8 flex flex-col items-center gap-2 text-white/80 text-sm">
              <p>✓ {getText("home.point1")}</p>
              <p>✓ {getText("home.point2")}</p>
              <p>✓ {getText("home.point3")}</p>
              <p>✓ {getText("home.point4")}</p>
              <p>✓ {getText("home.point5")}</p>
            </div>
            <div className="mt-10">
              <Badge className="bg-white/20 text-white border-none px-4 py-2">{getText("home.current")}</Badge>
              <p className="text-white/90 mt-2 italic">{getText("home.currentTitle")}</p>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} className="cursor-pointer" onClick={() => scrollToSection("angebote")}>
            <div className="flex flex-col items-center gap-2">
              <span className="text-white/70 text-xs tracking-wider font-light">SCROLL</span>
              <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Angebot Section */}
      <section id="angebote" className="py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-3 bg-[#4A7B6B]/10 text-[#4A7B6B] border-none text-xs sm:text-sm">
              <Star className="w-3 h-3 mr-1" /> {getText("offerings.badge")}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mb-3">{getText("offerings.title")}</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.primary }}></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <OfferingCard 
              icon={BookOpen}
              title={getText("offerings.lerncoaching.title")}
              description={getText("offerings.lerncoaching.description")}
              price={getText("offerings.lerncoaching.price")}
            />
            <OfferingCard 
              icon={Heart}
              title={getText("offerings.psychotherapie.title")}
              description={getText("offerings.psychotherapie.description")}
              price={getText("offerings.psychotherapie.price")}
            />
            <OfferingCard 
              icon={Users}
              title={getText("offerings.elternberatung.title")}
              description={getText("offerings.elternberatung.description")}
              price={getText("offerings.elternberatung.price")}
            />
            <OfferingCard 
              icon={Briefcase}
              title={getText("offerings.lehrkraefte.title")}
              description={getText("offerings.lehrkraefte.description")}
              price={getText("offerings.lehrkraefte.price")}
            />
            
            {/* Workshops Card */}
            <Card className="border-0 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden group h-full">
              <div className="h-1.5" style={{ backgroundColor: colors.primary }}></div>
              <CardContent className="p-5 sm:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: colors.primary }} />
                </div>
                <h3 className="text-base sm:text-lg font-serif font-semibold text-center text-gray-800 mb-3">{getText("offerings.workshops.title")}</h3>
                
                <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                  <div>
                    <p className="font-medium" style={{ color: colors.primary }}>{getText("offerings.workshops.item1_title")}</p>
                    <p>{getText("offerings.workshops.item1_desc")}</p>
                    <p className="text-xs mt-1">{getText("offerings.workshops.item1_price")}</p>
                  </div>
                  <div className="border-t border-gray-100 pt-2">
                    <p className="font-medium" style={{ color: colors.primary }}>{getText("offerings.workshops.item2_title")}</p>
                    <p>{getText("offerings.workshops.item2_desc")}</p>
                    <p className="text-xs mt-1">{getText("offerings.workshops.item2_price")}</p>
                  </div>
                  <div className="border-t border-gray-100 pt-2">
                    <p className="font-medium" style={{ color: colors.primary }}>{getText("offerings.workshops.item3_title")}</p>
                    <p>{getText("offerings.workshops.item3_desc")}</p>
                    <p className="text-xs mt-1">{getText("offerings.workshops.item3_price")}</p>
                  </div>
                  <div className="border-t border-gray-100 pt-2">
                    <p className="font-medium" style={{ color: colors.primary }}>{getText("offerings.workshops.item4_title")}</p>
                    <p>{getText("offerings.workshops.item4_desc")}</p>
                    <p className="text-xs mt-1">{getText("offerings.workshops.item4_price")}</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <button onClick={() => scrollToSection("kontakt")} className="text-xs sm:text-sm font-medium hover:underline flex items-center justify-center gap-1 mx-auto" style={{ color: colors.primary }}>
                    {getText("offerings.contact")} <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </CardContent>
            </Card>
            
            <OfferingCard 
              icon={TrendingUp}
              title={getText("offerings.supervision.title")}
              description={getText("offerings.supervision.description")}
              price={getText("offerings.supervision.price")}
            />
          </div>
          
          {/* Workshop Dates Section */}
          <div className="mt-10 p-4 sm:p-6 rounded-xl" style={{ backgroundColor: `${colors.primary}10` }}>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" style={{ color: colors.primary }} />
              {getText("offerings.workshops.dates_title")}
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• {getText("offerings.workshops.date1")}</p>
              <p className="text-xs pl-4">{getText("offerings.workshops.date1_email")}</p>
              <p>• {getText("offerings.workshops.date2")}</p>
              <p className="text-xs pl-4">{getText("offerings.workshops.date2_email")}</p>
              <p className="text-xs italic mt-2">{getText("offerings.workshops.note")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Group Photo 9:16, Team Photos with full portrait visibility */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-3 bg-[#4A7B6B]/10 text-[#4A7B6B] border-none text-xs sm:text-sm">
              <Award className="w-3 h-3 mr-1" /> {getText("about.badge")}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mb-3">{getText("about.title")}</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.primary }}></div>
          </div>

          {/* Group Photo - 9:16 aspect ratio (portrait) */}
          <div className="mb-16 max-w-sm mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[9/16] relative bg-gray-100">
                <Image src="/images/team.webp" alt={getText("about.teamPhoto")} fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end">
                <p className="text-white text-sm sm:text-base p-4 bg-gradient-to-r from-black/50 to-transparent w-full">
                  {getText("about.teamPhoto")}
                </p>
              </div>
            </div>
          </div>

          {/* Team Members - Full portrait visible with object-contain */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TeamMember 
              name={getText("about.sandra.name")}
              title={getText("about.sandra.title")}
              bio={[
                getText("about.sandra.bio1"),
                getText("about.sandra.bio2"),
                getText("about.sandra.bio3"),
                getText("about.sandra.bio4"),
                getText("about.sandra.bio5"),
              ]}
              region={getText("about.sandra.region")}
              phone="+41 79 810 57 72"
              email="sa@sternenklar-lernen.ch"
              photoPath="/images/sandra.webp"
            />
            <TeamMember 
              name={getText("about.nadezhda.name")}
              title={getText("about.nadezhda.title")}
              bio={[
                getText("about.nadezhda.bio1"),
                getText("about.nadezhda.bio2"),
                getText("about.nadezhda.bio3"),
                getText("about.nadezhda.bio4"),
                getText("about.nadezhda.bio5"),
                getText("about.nadezhda.bio6"),
                getText("about.nadezhda.bio7"),
              ]}
              region={getText("about.nadezhda.region")}
              phone="+41 79 761 31 42"
              email="nds@sternenklar-lernen.ch"
              photoPath="/images/nadezha.webp"
            />
            <TeamMember 
              name={getText("about.natascha.name")}
              title={getText("about.natascha.title")}
              bio={[
                getText("about.natascha.bio1"),
                getText("about.natascha.bio2"),
                getText("about.natascha.bio3"),
                getText("about.natascha.bio4"),
                getText("about.natascha.bio5"),
              ]}
              region={getText("about.natascha.region")}
              phone="+41 79 272 70 24"
              email="nz@sternenklar-lernen.ch"
              photoPath="/images/natascha.webp"
            />
          </div>

          <div className="mt-12 text-center">
            <Badge className="bg-[#4A7B6B]/10 text-[#4A7B6B] border-none">
              {getText("about.current")}
            </Badge>
            <p className="text-gray-700 mt-2 italic">{getText("about.currentTitle")}</p>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section id="conditions" className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: colors.lightGray }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="text-center mb-8">
            <Badge className="mb-3 bg-[#4A7B6B]/10 text-[#4A7B6B] border-none">
              <DollarSign className="w-3 h-3 mr-1" /> {getText("conditions.badge")}
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-800 mb-3">{getText("conditions.title")}</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.primary }}></div>
            <p className="text-gray-600 mt-2 text-sm">{getText("conditions.intro")}</p>
          </div>
          
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-700">{getText("conditions.rate1")}</span>
                <span className="font-semibold" style={{ color: colors.primary }}>{getText("conditions.rate1Price")}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-700">{getText("conditions.rate2")}</span>
                <span className="font-semibold" style={{ color: colors.primary }}>{getText("conditions.rate2Price")}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-700">{getText("conditions.rate3")}</span>
                <span className="font-semibold" style={{ color: colors.primary }}>{getText("conditions.rate3Price")}</span>
              </div>
              <div className="pt-3 text-sm text-gray-600 space-y-2">
                <p className="flex items-start gap-2"><AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.primary }} /> {getText("conditions.included")}</p>
                <p className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.primary }} /> {getText("conditions.travel")}</p>
                <p className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.primary }} /> {getText("conditions.cancellation")}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section - Circular photos */}
      <section id="kontakt" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-3 bg-[#4A7B6B]/10 text-[#4A7B6B] border-none">
              <Heart className="w-3 h-3 mr-1" /> {getText("contact.badge")}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mb-3">{getText("contact.title")}</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.primary }}></div>
            <p className="text-gray-600 mt-4">{getText("contact.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Sandra Andermatt - Circular photo */}
            <Card className="border-0 shadow-md h-full">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200 relative">
                  <Image src="/images/sandra.webp" alt="Sandra Andermatt" fill className="object-cover" />
                </div>
                <h3 className="font-serif font-semibold text-gray-800 mb-1">{getText("contact.sandra.name")}</h3>
                <p className="text-xs text-red-500 mb-1">{getText("contact.sandra.note")}</p>
                <p className="text-xs text-gray-500 mb-3">{getText("contact.sandra.region")}</p>
                <div className="space-y-2 text-sm">
                  <a href="tel:+41798105772" className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#4A7B6B] transition-colors">
                    <Phone className="w-4 h-4" /> +41 79 810 57 72
                  </a>
                  <a href="mailto:sa@sternenklar-lernen.ch" className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#4A7B6B] transition-colors break-all">
                    <Mail className="w-4 h-4" /> sa@sternenklar-lernen.ch
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Nadezhda De Salvador - Circular photo */}
            <Card className="border-0 shadow-md h-full">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200 relative">
                  <Image src="/images/nadezha.webp" alt="Nadezhda De Salvador" fill className="object-cover" />
                </div>
                <h3 className="font-serif font-semibold text-gray-800 mb-1">{getText("contact.nadezhda.name")}</h3>
                <p className="text-xs text-gray-500 mb-3">{getText("contact.nadezhda.region")}</p>
                <div className="space-y-2 text-sm">
                  <a href="tel:+41797613142" className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#4A7B6B] transition-colors">
                    <Phone className="w-4 h-4" /> +41 79 761 31 42
                  </a>
                  <a href="mailto:nds@sternenklar-lernen.ch" className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#4A7B6B] transition-colors break-all">
                    <Mail className="w-4 h-4" /> nds@sternenklar-lernen.ch
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Natascha Zoller - Circular photo */}
            <Card className="border-0 shadow-md h-full">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200 relative">
                  <Image src="/images/natascha.webp" alt="Natascha Zoller" fill className="object-cover" />
                </div>
                <h3 className="font-serif font-semibold text-gray-800 mb-1">{getText("contact.natascha.name")}</h3>
                <p className="text-xs text-gray-500 mb-3">{getText("contact.natascha.region")}</p>
                <div className="space-y-2 text-sm">
                  <a href="tel:+41792727024" className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#4A7B6B] transition-colors">
                    <Phone className="w-4 h-4" /> +41 79 272 70 24
                  </a>
                  <a href="mailto:nz@sternenklar-lernen.ch" className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#4A7B6B] transition-colors break-all">
                    <Mail className="w-4 h-4" /> nz@sternenklar-lernen.ch
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Section */}
      {showLegal && (
        <section id="impressum" className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: colors.lightGray }}>
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mb-3 sm:mb-4">{getText("legal.title")}</h2>
              <div className="w-16 sm:w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.primary }}></div>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Angaben gemäss Art. 13 DSG</h3>
                <p className="text-sm sm:text-base text-gray-600">sternenklar lernen</p>
                <p className="text-sm sm:text-base text-gray-600 mt-1">Vertreten durch: Sandra Andermatt, Nadezhda De Salvador, Natascha Zoller</p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Kontaktinformationen</h3>
                <div className="text-sm sm:text-base text-gray-600 space-y-1">
                  <p>Sandra Andermatt: +41 79 810 57 72, sa@sternenklar-lernen.ch</p>
                  <p>Nadezhda De Salvador: +41 79 761 31 42, nds@sternenklar-lernen.ch</p>
                  <p>Natascha Zoller: +41 79 272 70 24, nz@sternenklar-lernen.ch</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Haftungsausschluss</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Urheberrecht</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Die erstellten Inhalte unterliegen dem schweizerischen Urheberrecht.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer - Extra Large Logo */}
      <footer style={{ backgroundColor: colors.primaryDark }}>
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative w-20 h-20">
                <Image src="/images/logo-1.png" alt="sternenklar lernen" fill className="object-contain brightness-0 invert" />
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-serif text-white mb-1">sternenklar lernen</h3>
              <p className="text-white/60 text-xs sm:text-sm">Sandra Andermatt, Nadezhda De Salvador, Natascha Zoller</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4">
              <button onClick={scrollToTop} className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm">{getText("nav.home")}</button>
              <button onClick={() => scrollToSection("angebote")} className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm">{getText("nav.offerings")}</button>
              <button onClick={() => scrollToSection("about")} className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm">{getText("nav.about")}</button>
              <button onClick={() => scrollToSection("conditions")} className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm">{getText("nav.conditions")}</button>
              <button onClick={() => scrollToSection("kontakt")} className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm">{getText("nav.contact")}</button>
              <button onClick={toggleLegalSection} className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm">Rechtliches</button>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="text-white/40 text-xs sm:text-sm">{getText("footer.copyright")}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}