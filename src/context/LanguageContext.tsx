"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "de" | "en";

interface Translations {
  [key: string]: {
    de: string;
    en: string;
  };
}

// Complete translations for the entire Soulunaya website
export const translations: Translations = {
  // ==================== GENERAL ====================
  "soulunaya": { de: "Soulunaya", en: "Soulunaya" },
  "sandra.andermatt": { de: "Sandra Andermatt", en: "Sandra Andermatt" },
  "learnMore": { de: "Mehr erfahren", en: "Learn More" },
  
  // ==================== HERO SECTION ====================
  "hero.scroll": { de: "Scrollen", en: "Scroll" },
  
  // ==================== WELCOME SECTION ====================
  "welcome.badge": { de: "Willkommen", en: "Welcome" },
  "welcome.title": { de: "Herzlich Willkommen bei", en: "Welcome to" },
  "welcome.intro": { de: "Hinter SouLunAya stehe ich - Sandra, eidg. anerkannte Psychotherapeutin.", en: "Behind SouLunAya is me - Sandra, federally recognized psychotherapist." },
  "welcome.description": { de: "Als ganzheitliche Psychotherapeutin vereine ich klassische lösungs- und ressourcenorientierte Verfahren mit Elementen aus Körpertherapie, Atemarbeit und Energiearbeit. So begleite ich Menschen auf ihrem Weg zu mehr Klarheit, innerer Balance und Selbstentfaltung.", en: "As a holistic psychotherapist, I combine classical solution and resource-oriented methods with elements from body therapy, breathwork and energy work. This is how I accompany people on their path to more clarity, inner balance and self-development." },
  "welcome.quote": { de: "SouLunAya ist mehr als ein Name: Es ist ein Wort voller Schichten, so wie wir Menschen selbst vielschichtig sind. Soul - die Seele, Sol - das Licht in uns, unser Bewusstsein, Luna - die Tiefe, unsere Schattenseiten, das Unbewusste, Gaia - die tragende Kraft der Erde, Aya - der Seelenweg und die Kraft der Transformation.", en: "SouLunAya is more than a name: It is a word full of layers, just as we humans are multi-layered. Soul - the soul, Sol - the light within us, our consciousness, Luna - the depth, our shadow sides, the unconscious, Gaia - the sustaining power of the earth, Aya - the soul path and the power of transformation." },
  
  // ==================== OFFERINGS SECTION ====================
  "offerings.badge": { de: "Angebot", en: "Offerings" },
  "offerings.title": { de: "Meine Angebote", en: "My Services" },
  
  // Therapy
  "offerings.therapy.title": { de: "SouLunAya Therapy", en: "SouLunAya Therapy" },
  "offerings.therapy.subtitle": { de: "Manchmal braucht es Unterstützung, um den eigenen Weg klarer zu sehen.", en: "Sometimes you need support to see your own path more clearly." },
  "offerings.therapy.description": { de: "Ich begleite dich persönlich und achtsam, über einen Zeitraum, der zu dir passt – vor Ort oder online, auf Deutsch oder Englisch. Ob du Einzelsitzungen, eine Kurzzeitbegleitung (4–6 Wochen) oder eine längere Begleitung (ab 6 Wochen) möchtest, liegt in deiner Entscheidung. Wir gestalten gemeinsam einen Raum, in dem du dich selbst spüren, erkennen und entfalten kannst.", en: "I accompany you personally and attentively over a period that suits you - locally or online, in German or English. Whether you want individual sessions, short-term support (4-6 weeks) or longer support (from 6 weeks) is your decision. Together we create a space in which you can feel, recognize and develop yourself." },
  "offerings.therapy.price1": { de: "Einzelsitzung:", en: "Single session:" },
  "offerings.therapy.price2": { de: "Kurzzeitbegleitung:", en: "Short-term support:" },
  "offerings.therapy.price3": { de: "Langzeitbegleitung:", en: "Long-term support:" },
  "offerings.therapy.perHour": { de: "Stunde", en: "hour" },
  
  // Breath
  "offerings.breath.title": { de: "SouLunAya Breath", en: "SouLunAya Breath" },
  "offerings.breath.subtitle": { de: "Buche eine bewusste, verbundene Atemreise mit mir.", en: "Book a conscious, connected breath journey with me." },
  "offerings.breath.description": { de: "Jede Breathwork-Session dauert zwei Stunden. Dieser Rahmen ermöglicht eine sorgfältige Anamnese, eine sichere Begleitung während der Atemphase und eine achtsame Integration im Anschluss. In dieser sanften Atemarbeit darf sich dein Körper im eigenen Rhythmus lösen und öffnen. Emotionen und Muster können behutsam an die Oberfläche kommen - getragen von einem sicheren Raum. Als ganzheitliche Psychotherapeutin begleite ich dich fachlich fundiert, sodass deine Erfahrung nachhaltig verarbeitet und im Alltag integriert werden kann.", en: "Each breathwork session lasts two hours. This framework enables a careful medical history, safe accompaniment during the breathing phase and mindful integration afterwards. In this gentle breathwork, your body can release and open in its own rhythm. Emotions and patterns can gently come to the surface - carried by a safe space. As a holistic psychotherapist, I accompany you with sound expertise so that your experience can be processed sustainably and integrated into everyday life." },
  "offerings.breath.firstSession": { de: "Erstsitzung (2 Stunden):", en: "First session (2 hours):" },
  "offerings.breath.followUp": { de: "Folgesitzungen (2 Stunden):", en: "Follow-up sessions (2 hours):" },
  "offerings.breath.priceNote": { de: "Preise in der Anfangsphase", en: "Introductory prices" },
  
  // Silent BreathWalk
  "offerings.silentWalk.title": { de: "SouLunAya Silent BreathWalk", en: "SouLunAya Silent BreathWalk" },
  "offerings.silentWalk.subtitle": { de: "Jeden Montag treffen wir uns um 06:15 Uhr beim Schulhaus Amlehn in Kriens", en: "Every Monday at 6:15 AM we meet at Schulhaus Amlehn in Kriens" },
  "offerings.silentWalk.description": { de: "45-minütiger Silent Walk – ein Spaziergang in Stille, um den Geist zu klären und mit dir selbst in Verbindung zu kommen. Im Anschluss folgen 30 Minuten Pranayama (Atemübungen aus dem Yoga), um Körper und Geist zu zentrieren. Um 07:30 Uhr startest du geerdet, fokussiert und bereit für die neue Woche.", en: "45-minute Silent Walk - a walk in silence to clear the mind and connect with yourself. This is followed by 30 minutes of pranayama (breathing exercises from yoga) to center body and mind. At 7:30 AM you start grounded, focused and ready for the new week." },
  "offerings.silentWalk.price": { de: "Preis pro Walk:", en: "Price per walk:" },
  "offerings.silentWalk.perWalk": { de: "pro Walk", en: "per walk" },
  "offerings.silentWalk.time": { de: "06:15 - 07:30 Uhr", en: "06:15 - 07:30 AM" },
  "offerings.silentWalk.location": { de: "Schulhaus Amlehn, Kriens", en: "Schulhaus Amlehn, Kriens" },
  
  // ==================== SOUND JOURNEY & TRAVEL ====================
  "soundJourney.title": { de: "SouLunAya SoundJourney", en: "SouLunAya SoundJourney" },
  "soundJourney.subtitle": { de: "Gruppen Sound Journey mit Klangschalen", en: "Group Sound Journey with singing bowls" },
  "soundJourney.description": { de: "Tauche ein in die heilende Welt der Klänge. Mit Singing Bowls, Klangschalen und meditativen Klängen.", en: "Immerse yourself in the healing world of sounds. With singing bowls, sound bowls and meditative sounds." },
  "soundJourney.priceLabel": { de: "Preis", en: "Price" },
  "soundJourney.price": { de: "CHF 40.-", en: "CHF 40.-" },
  "soundJourney.perPerson": { de: "pro Person", en: "per person" },
  "soundJourney.duration": { de: "ca. 60 Minuten", en: "approx. 60 minutes" },
  "soundJourney.registration": { de: "Anmeldung erforderlich", en: "Registration required" },
  
  "travel.title": { de: "SouLunAya Travel", en: "SouLunAya Travel" },
  "travel.subtitle": { de: "Transformative Reisen", en: "Transformative Journeys" },
  "travel.description": { de: "Nepal Reisen – begleitet oder online. Eine Reise zu dir selbst, im Herzen des Himalaya.", en: "Nepal Travel - accompanied or online. A journey to yourself, in the heart of the Himalayas." },
  "travel.info": { de: "Individuelle Angebote auf Anfrage", en: "Individual offers upon request" },
  "travel.nextDestination": { de: "Nächstes Ziel: Marokko - November 2026", en: "Next destination: Morocco - November 2026" },
  "travel.button": { de: "Daten & Preise", en: "Dates & Prices" },
  "travel.text": { de: "Nepal ist für mich weit mehr als ein Land – es ist ein Kraftort, der mein Herz geprägt hat. Mit SouLunAya lade ich dich ein, diesen Zauber selbst zu erleben: eine Reise nach Nepal – und zugleich eine Reise zu dir selbst. Du entscheidest, wie du reisen möchtest: Begleitet vor Ort (Ich reise mit dir nach Nepal und begleite dich persönlich durch diese besondere Zeit) oder Online begleitet (Du reist selbstständig - und wirst von mir vor, während und nach deiner Reise online begleitet). Ob alleine, als Paar oder in einer kleinen Gruppe: Jede Reise wird individuell nach deinen Bedürfnissen gestaltet. Von der Vorbereitung bis zur Rückkehr bin ich an deiner Seite - für Orientierung, Sicherheit und Vertrauen.", en: "Nepal is much more than a country for me - it is a place of power that has shaped my heart. With SouLunAya I invite you to experience this magic yourself: a journey to Nepal - and at the same time a journey to yourself. You decide how you want to travel: Accompanied on site (I travel with you to Nepal and accompany you personally through this special time) or Online accompanied (you travel independently - and will be accompanied by me online before, during and after your trip). Whether alone, as a couple or in a small group: Every trip is designed individually according to your needs. From preparation to return, I am at your side - for orientation, security and trust." },
  
  // ==================== ABOUT SECTION ====================
  "about.badge": { de: "Über mich", en: "About me" },
  "about.name": { de: "Sandra Andermatt", en: "Sandra Andermatt" },
  "about.title": { de: "M. Sc. Psychologin | Eidg. anerkannte Psychotherapeutin | Fachpsychologin für Kinder- und Jugendpsychologie FSP", en: "M. Sc. Psychologist | Federally recognized psychotherapist | Specialist psychologist for child and adolescent psychology FSP" },
  "about.description": { de: "Als ganzheitliche Psychotherapeutin vereine ich klassische, lösungs- und ressourcenorientierte Verfahren mit Elementen aus Körpertherapie, Atemarbeit und Energiearbeit. So begleite ich Menschen auf ihrem Weg zu mehr Klarheit, innerer Balance und Selbstentfaltung.", en: "As a holistic psychotherapist, I combine classical, solution and resource-oriented methods with elements from body therapy, breathwork and energy work. This is how I accompany people on their path to more clarity, inner balance and self-development." },
  
  "about.experience.title": { de: "Berufliche Erfahrung", en: "Professional Experience" },
  "about.experience.item1.year": { de: "Seit 2024", en: "Since 2024" },
  "about.experience.item1.text": { de: "Selbständige Psychotherapeutin in Zürich und Luzern", en: "Independent psychotherapist in Zurich and Lucerne" },
  "about.experience.item2.year": { de: "Seit 2024", en: "Since 2024" },
  "about.experience.item2.text": { de: "Dozentin und Supervisorin an der Akademie für Lerncoaching, Zürich", en: "Lecturer and supervisor at the Academy for Learning Coaching, Zurich" },
  "about.experience.item3.year": { de: "Seit 2019", en: "Since 2019" },
  "about.experience.item3.text": { de: "Selbständig als Lerncoach, www.sternenklar-lernen.ch", en: "Self-employed as a learning coach" },
  "about.experience.item4.year": { de: "2021 bis 2024", en: "2021 to 2024" },
  "about.experience.item4.text": { de: "Psychotherapeutin, Praxis Kind im Zentrum, Wollishofen", en: "Psychotherapist, Practice Kind im Zentrum, Wollishofen" },
  "about.experience.item5.year": { de: "2014 bis 2021", en: "2014 to 2021" },
  "about.experience.item5.text": { de: "Schulpsychologin in Rheinfelden AG, Wohlen AG und Horw LU", en: "School psychologist in Rheinfelden AG, Wohlen AG and Horw LU" },
  
  "about.education.title": { de: "Ergänzende Ausbildungen", en: "Additional Training" },
  "about.education.item1": { de: "Cacao Facilitator Training (2026)", en: "Cacao Facilitator Training (2026)" },
  "about.education.item2": { de: "Lama Fera Master Healer (2025)", en: "Lama Fera Master Healer (2025)" },
  "about.education.item3": { de: "Breathwork Training Expansion (2025)", en: "Breathwork Training Expansion (2025)" },
  "about.education.item4": { de: "200-Stunden Yoga Teacher Training (2025)", en: "200-Hour Yoga Teacher Training (2025)" },
  "about.education.item5": { de: "Holy Fire® Reiki Level 1 & 2 (2025)", en: "Holy Fire® Reiki Level 1 & 2 (2025)" },
  "about.education.item6": { de: "Soundhealing Training (2023)", en: "Soundhealing Training (2023)" },
  
  // ==================== BANNER SECTION ====================
  "banner.title": { de: "SouLunAya", en: "SouLunAya" },
  "banner.subtitle": { de: "Dein Weg zu mehr Klarheit, Ruhe und Verbundenheit", en: "Your path to more clarity, peace and connection" },
  
  // ==================== CONTACT SECTION ====================
  "contact.badge": { de: "Kontakt", en: "Contact" },
  "contact.title": { de: "Kontakt", en: "Contact" },
  "contact.message": { de: "Ich freue mich sehr darauf, von dir zu hören und dich kennenzulernen.", en: "I look forward to hearing from you and getting to know you." },
  "contact.phone": { de: "Telefon", en: "Phone" },
  "contact.email": { de: "E-Mail", en: "Email" },
  "contact.address": { de: "Adresse", en: "Address" },
  
  // ==================== IMPRESSUM & DATENSCHUTZ ====================
  "legal.title": { de: "Impressum & Datenschutz", en: "Legal & Privacy" },
  "legal.owner": { de: "Besitzerin dieser Website und deren Inhalt", en: "Owner of this website and its content" },
  "legal.websiteInfo": { de: "Informationen auf dieser Website", en: "Information on this website" },
  "legal.websiteInfoText1": { de: "Diese Website beinhaltet Informationen über Dienstleistungen. Preisänderungen sowie sonstige Änderungen bleiben vorbehalten. Alle Angaben auf dieser Website (Dienstleistungsbeschreibungen, Abbildungen, Filme und sonstige Angaben) sind nur als Näherungswerte zu verstehen und stellen insbesondere keine Zusicherung von Eigenschaften oder Garantien dar, ausser es ist explizit anders vermerkt. Sandra Andermatt bemüht sich, sämtliche Angaben und Informationen auf dieser Website korrekt, vollständig, aktuell und übersichtlich bereitzustellen, jedoch kann Sandra Andermatt weder ausdrücklich noch stillschweigend dafür Gewähr leisten.", en: "This website contains information about services. Price changes and other changes are subject to change. All information on this website (service descriptions, illustrations, videos and other information) are only approximate values and do not constitute a guarantee of properties or warranties, unless explicitly stated otherwise. Sandra Andermatt strives to provide all information on this website correctly, completely, up-to-date and clearly, but Sandra Andermatt can neither expressly nor implicitly guarantee this." },
  "legal.websiteInfoText2": { de: "Sandra Andermatt kann keine Garantie abgeben, dass die auf dieser Website aufgeführten Dienstleistungen erbracht werden können. Daher sind alle Angaben zu Dienstleistungen ohne Gewähr und können sich jederzeit und ohne Ankündigung ändern.", en: "Sandra Andermatt cannot guarantee that the services listed on this website can be provided. Therefore, all information about services is without guarantee and may change at any time without notice." },
  
  "legal.liability": { de: "Haftung für Links und Icons", en: "Liability for links and icons" },
  "legal.liabilityText": { de: "Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.", en: "References and links to third-party websites are outside our area of responsibility. Any responsibility for such websites is rejected. Access and use of such websites are at the user's own risk." },
  
  "legal.copyright": { de: "Urheberrechte", en: "Copyright" },
  "legal.copyrightText1": { de: "© 2026 Sandra Andermatt. Alle Rechte vorbehalten.", en: "© 2026 Sandra Andermatt. All rights reserved." },
  "legal.copyrightText2": { de: "Die Urheber- und alle anderen Rechte an Inhalten auf der Website gehören ausschliesslich Sandra Andermatt oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.", en: "The copyright and all other rights to content on the website belong exclusively to Sandra Andermatt or the specifically named rights holders. The written consent of the copyright holders must be obtained in advance for the reproduction of any elements." },
  
  "legal.privacy": { de: "Datenschutz", en: "Privacy Policy" },
  "legal.privacyDate": { de: "Stand: Februar 2026", en: "Last updated: February 2026" },
  "legal.responsible": { de: "Verantwortliche Stelle", en: "Responsible entity" },
  
  "legal.psychotherapy": { de: "1. Datenschutz im Rahmen der Psychotherapie", en: "1. Privacy in the context of psychotherapy" },
  "legal.psychotherapyText": { de: "Die Verarbeitung personenbezogener Daten in der Praxis erfolgt ausschliesslich zur Durchführung der psychotherapeutischen Leistungen. Dies umfasst z. B.: Anamnese und Diagnosen, Therapieprotokolle und Sitzungsverlauf, Abrechnung und organisatorische Daten. Rechtsgrundlage: Die Verarbeitung sensibler Gesundheitsdaten erfolgt nur mit ausdrücklicher Einwilligung der Patient*innen oder auf Grundlage gesetzlicher Vorschriften. Alle Daten werden vertraulich behandelt, sicher aufbewahrt und nur für die Dauer der Behandlung bzw. gesetzlich vorgeschriebene Aufbewahrungsfristen gespeichert.", en: "The processing of personal data in the practice takes place exclusively for the provision of psychotherapeutic services. This includes, for example: Medical history and diagnoses, therapy protocols and session progress, billing and organizational data. Legal basis: Sensitive health data is processed only with the express consent of the patients or on the basis of legal regulations. All data is treated confidentially, stored securely and only for the duration of treatment or legally required retention periods." },
  
  "legal.websitePrivacy": { de: "2. Datenschutz auf der Website", en: "2. Privacy on the website" },
  "legal.websitePrivacyText": { de: "Beim Besuch dieser Website werden nur minimale, technisch notwendige Daten verarbeitet: IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp und Version. Zweck: Sicherstellung der Funktionsfähigkeit der Website, Schutz vor Angriffen und Optimierung der Website. Hinweis: Es werden keine Kontaktformulare, Newsletter oder Tracking-Dienste eingesetzt. Eine Weitergabe der Daten an Dritte erfolgt nicht.", en: "When visiting this website, only minimal, technically necessary data is processed: IP address, date and time of access, browser type and version. Purpose: Ensuring the functionality of the website, protection against attacks and optimization of the website. Note: No contact forms, newsletters or tracking services are used. Data is not shared with third parties." },
  
  "legal.rights": { de: "3. Rechte der Betroffenen", en: "3. Rights of data subjects" },
  "legal.rightsText": { de: "Patient*innen und Website-Besucher*innen haben nach Schweizer DSG folgende Rechte: Auskunft über die gespeicherten Daten, Berichtigung unrichtiger Daten, Löschung oder Einschränkung der Verarbeitung, soweit gesetzlich möglich, Recht auf Beschwerde beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB).", en: "Patients and website visitors have the following rights under the Swiss DPA: Information about stored data, correction of incorrect data, deletion or restriction of processing, as far as legally possible, right to complain to the Federal Data Protection and Information Commissioner (FDPIC)." },
  
  "legal.security": { de: "4. Sicherheit der Daten", en: "4. Data security" },
  "legal.securityText": { de: "Es werden angemessene technische und organisatorische Massnahmen ergriffen, um personenbezogene Daten vor Verlust, Missbrauch oder unbefugtem Zugriff zu schützen.", en: "Appropriate technical and organizational measures are taken to protect personal data from loss, misuse or unauthorized access." },
  
  "legal.changes": { de: "5. Änderungen der Datenschutzerklärung", en: "5. Changes to the privacy policy" },
  "legal.changesText": { de: "Diese Datenschutzerklärung kann von Zeit zu Zeit angepasst werden, z. B. bei gesetzlichen Änderungen. Das aktuelle Datum findest du oben in der Erklärung.", en: "This privacy policy may be adjusted from time to time, e.g. due to legal changes. The current date can be found at the top of the statement." },
  
  // ==================== FOOTER ====================
  "footer.copyright": { de: "© 2026 Sandra Andermatt – Impressum & Datenschutz", en: "© 2026 Sandra Andermatt – Legal & Privacy" },
  
  // ==================== LANGUAGE TOGGLE ====================
  "language.swissgerman": { de: "Schweizerdeutsch", en: "Swiss German" },
  "language.english": { de: "Englisch", en: "English" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("de");

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    // Fallback to German if translation not found
    if (translations[key] && translations[key]["de"]) {
      console.warn(`Translation missing for language: ${language}, key: ${key}`);
      return translations[key]["de"];
    }
    console.warn(`Translation missing for key: ${key}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}