"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MapPin,
  Clock,
  Calendar,
  Star,
  ChevronRight,
  Heart,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Camera,
  Footprints,
  Sparkles,
  CheckCircle2,
  XCircle,
  Coffee,
  Building2,
  Landmark,
  Sun,
  Sunset,
  Gift,
  MessageCircle,
  Globe,
  Award,
  Users,
  Compass,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Waves,
  Droplets,
  Cloud,
  Mountain,
  Map,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useRef, useEffect } from "react";

// WhatsApp SVG Icon Component
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.49" />
  </svg>
);

// Updated Color Palette - #57192E, #B3172C, #38425B, #232D46, #181D31
const elegantColors = {
  // Core palette
  deepMaroon: "#57192E",    // Deep burgundy/maroon
  brightRed: "#B3172C",     // Bright crimson red
  steelBlue: "#38425B",     // Muted steel blue
  darkBlue: "#232D46",      // Dark navy blue
  charcoalBlue: "#181D31",  // Deep charcoal blue
  
  // Complementary colors (derived from palette)
  warmWhite: "#FFFDF9",     // Warmer white
  lightGray: "#E5E7EB",    // Light gray for backgrounds
  mediumGray: "#9CA3AF",   // Medium gray for text
  gold: "#C4A65C",         // Warm gold accent (keeping for contrast)
  
  // Gradients
  gradients: {
    maroonRed: "linear-gradient(135deg, #57192E 0%, #B3172C 100%)",
    blueSteel: "linear-gradient(135deg, #38425B 0%, #232D46 100%)",
    darkBlueCharcoal: "linear-gradient(135deg, #232D46 0%, #181D31 100%)",
    creamToWarm: "linear-gradient(135deg, #FFFDF9 0%, #E5E7EB 100%)",
    goldAccent: "linear-gradient(135deg, #C4A65C 0%, #B3172C 100%)",
    neutralMist: "linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)",
    deepElegant: "linear-gradient(135deg, #181D31 0%, #232D46 100%)",
  }
};

const highlights = [
  {
    icon: <Landmark className="w-5 h-5" />,
    title: "Malla Period Architecture",
    description: "Hidden and not-so-hidden relics of Kathmandu's Golden Age",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Tibetan Buddhist Monastery",
    description: "Visit a typical monastery with traditional craft shops",
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Newari Courtyards & Bahis",
    description: "Explore typical Newari courtyards and ancient monasteries",
  },
  {
    icon: <Gift className="w-5 h-5" />,
    title: "Bustling Local Markets",
    description: "Handicrafts, thankas, beads - better value than Thamel!",
  },
  {
    icon: <Footprints className="w-5 h-5" />,
    title: "Freak Street (Optional)",
    description: "The former tourist hub from the hippie era",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Sacred Bishnumati River",
    description: "Similar to the Ganges, with cremation ceremonies",
  },
];

const tourStops = [
  {
    name: "Garden of Dreams",
    type: "Starting Point",
    image: "/images/garden.avif",
    description: "Meet your guide outside this peaceful oasis in Thamel.",
  },
  {
    name: "Kathesimbhu Stupa",
    type: "Buddhist Heritage",
    image: "/images/kathesimbu.avif",
    description: "Smaller replica of Swayambhunath in the heart of old city.",
  },
  {
    name: "Glass Beads Market",
    type: "Cultural Experience",
    image: "/images/beads.avif",
    description: "Colorful glass beads made for generations for Hindu ceremonies.",
  },
  {
    name: "Indra Chowk Market",
    type: "Local Life",
    image: "/images/indrachowk.avif",
    description: "One of Kathmandu's busiest intersections with vibrant markets.",
  },
  {
    name: "Durbar Square Area",
    type: "UNESCO Heritage",
    image: "/images/durbar_square.avif",
    description: "Historic palace square with stunning Malla-era temples.",
  },
  {
    name: "Newari Neighbourhood",
    type: "Hidden Gem",
    image: "/images/harati.avif",
    description: "Sleepy traditional streets where time stands still.",
  },
  {
    name: "Cremation Site",
    type: "Sacred Site",
    image: "/images/cremation.avif",
    description: "Witness local cremation ghats similar to the Ganges.",
  },
  {
    name: "Monkey Temple",
    type: "Final Destination",
    image: "/images/swoyambhu.avif",
    description: "Climb 424 steps to the ancient stupa with valley views.",
  },
];

const specialExperiences = [
  {
    name: "Kathe Swoyambhu",
    image: "/images/kathesimbu.avif",
    description: "Learn about Hindu, Buddhist and Tibetan cultures at this photogenic stupa.",
  },
  {
    name: "Local Lassi Experience",
    image: "/images/lassi.avif",
    description: "Try famous local lassi near glass-bead market. Refreshing must-try drink.",
    price: "NPR 40-70",
  },
  {
    name: "Glass Beads Market",
    image: "/images/beads.avif",
    description: "Spectacular market where Muslim minority make colorful glass beads for Hindu weddings.",
  },
  {
    name: "Monkey Temple",
    image: "/images/monkey_temple.avif",
    description: "Climb 424 steps for majestic Kathmandu skyline views. Hundreds of resident monkeys!",
  },
];

const testimonials = [
  {
    name: "Emma Thompson",
    country: "Australia",
    text: "Absolutely incredible tour! Our guide's knowledge of local history and culture was remarkable. The hidden alleys and local experiences were something I'd never have found on my own.",
    rating: 5,
  },
  {
    name: "Marcus Weber",
    country: "Germany",
    text: "Best walking tour I've ever taken. The guide had decades of experience and it showed. From the glass bead market to the monkey temple - every stop was fascinating.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    country: "India",
    text: "Even as someone from the region, I learned so much about Kathmandu's history. The local lassi was delicious and the views from Monkey Temple were breathtaking!",
    rating: 5,
  },
  {
    name: "David Chen",
    country: "Singapore",
    text: "The free walking tour exceeded all expectations. Our guide was incredibly knowledgeable and passionate about sharing Kathmandu's rich culture.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    country: "USA",
    text: "What an amazing way to experience Kathmandu! The guide's insights into local life and history made this the highlight of our Nepal trip.",
    rating: 5,
  },
  {
    name: "Kenji Tanaka",
    country: "Japan",
    text: "Perfect introduction to Kathmandu. The pacing was excellent, and we saw so many hidden gems we would have missed on our own.",
    rating: 5,
  },
];

// Create infinite testimonials for scrolling animation
const infiniteTestimonials = [...testimonials, ...testimonials];

// WhatsApp booking link
const WHATSAPP_LINK = "https://wa.me/9779841376470?text=Hi%21%20I%27m%20interested%20in%20booking%20the%20Free%20Walking%20Tour%20in%20Kathmandu.%20";
// Phone number for calling
const PHONE_NUMBER = "tel:+9779841376470";
// Instagram link
const INSTAGRAM_LINK = "https://www.instagram.com/himkalaadventure/?hl=en";

export default function FreeWalkingTourPage() {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);
  const [currentTourStopIndex, setCurrentTourStopIndex] = useState(0);
  const highlightsContainerRef = useRef<HTMLDivElement>(null);
  const tourStopsContainerRef = useRef<HTMLDivElement>(null);
  
  // Add touch event handlers to prevent horizontal page scroll
  const preventHorizontalScroll = (e: React.TouchEvent) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    // If we're at the start or end, prevent scrolling
    if (scrollLeft <= 0 || scrollLeft >= scrollWidth - clientWidth) {
      e.stopPropagation();
    }
  };

  // Mobile card scrolling
  const scrollHighlights = (direction: 'left' | 'right') => {
    if (!highlightsContainerRef.current) return;
    const container = highlightsContainerRef.current;
    const cardWidth = container.querySelector('.highlight-card')?.clientWidth || 280;
    const scrollAmount = cardWidth + 16; // 16px for gap
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollTourStops = (direction: 'left' | 'right') => {
    if (!tourStopsContainerRef.current) return;
    const container = tourStopsContainerRef.current;
    const cardWidth = container.querySelector('.tourstop-card')?.clientWidth || 300;
    const scrollAmount = cardWidth + 16; // 16px for gap
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ 
      backgroundColor: elegantColors.warmWhite
    }}>
      {/* Floating WhatsApp Button - Glow Effect */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-2xl shadow-[#25D366]/50 hover:shadow-[#25D366]/70 hover:scale-110 active:scale-95 transition-all animate-pulse hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>

      {/* Floating Call Button - Mobile Only */}
      <div className="md:hidden fixed bottom-24 right-6 z-40">
        <a 
          href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#57192E] to-[#232D46] flex items-center justify-center shadow-2xl shadow-[#57192E]/50 hover:shadow-[#57192E]/70 hover:scale-110 active:scale-95 transition-all"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5 text-white" />
        </a>
      </div>

      {/* Hero Section - Mobile Optimized */}
      <section ref={heroRef} className="relative h-[85vh] min-h-[500px] max-h-[700px] md:max-h-[800px] overflow-hidden">
        <div className="absolute inset-0" style={{ background: elegantColors.gradients.darkBlueCharcoal }}>
          <Image
            src="/images/FWT-4.avif"
            alt="Kathmandu Durbar Square"
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#181D31]/30 via-[#232D46]/20 to-[#38425B]/10" />
        </div>
        
        <div className="absolute inset-0 flex items-center pt-4 md:pt-0">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl">
              <Badge className="mb-4 md:mb-6 bg-black/30 backdrop-blur-sm border-white/30 text-white px-4 py-2 rounded-full text-xs md:text-sm">
                <Award className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                First Free Walking Tour in Nepal
              </Badge>

              <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-4 md:mb-6 drop-shadow-lg">
                Free Walking Tour
                <span className="block text-[#C4A65C] italic text-2xl md:text-6xl drop-shadow-lg">Kathmandu</span>
              </h1>

              <p className="text-sm md:text-lg text-white drop-shadow-lg mb-6 md:mb-8 leading-relaxed max-w-xl">
                Discover the soul of Nepal's capital through ancient temples, hidden courtyards, 
                and vibrant markets with local experts.
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                <div className="flex items-center gap-1 md:gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-white/30">
                  <Clock className="w-3 h-3 md:w-5 md:h-5 text-[#C4A65C]" />
                  <span className="text-white text-xs md:text-sm font-medium drop-shadow-sm">4-5 Hours</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-white/30">
                  <Calendar className="w-3 h-3 md:w-5 md:h-5 text-[#C4A65C]" />
                  <span className="text-white text-xs md:text-sm font-medium drop-shadow-sm">Daily 9 AM & 2 PM</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-white/30">
                  <MapPin className="w-3 h-3 md:w-5 md:h-5 text-[#C4A65C]" />
                  <span className="text-white text-xs md:text-sm font-medium drop-shadow-sm">Garden of Dreams</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link href="/contact" className="flex-1">
                  <Button size="lg" className="w-full bg-gradient-to-r from-[#B3172C] to-[#57192E] hover:from-[#9F1327] hover:to-[#471625] text-white font-bold h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg active:scale-95 transition-transform">
                    <Heart className="mr-2 w-4 h-4 md:w-5 md:h-5" /> Book Your Spot
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection('tour-details')}
                  className="w-full bg-black/20 backdrop-blur-sm text-white border-white/40 hover:bg-white/10 h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg active:scale-95 transition-transform"
                >
                  Learn More <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner - Mobile Optimized */}
      <section className="relative z-10 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-[#38425B] to-[#232D46] rounded-xl md:rounded-2xl p-4 md:p-8 -mt-8 md:-mt-16 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: "500+", label: "Reviews", icon: <MessageCircle className="w-4 h-4 md:w-5 md:h-5" /> },
                { value: "97%", label: "Excellence", icon: <Star className="w-4 h-4 md:w-5 md:h-5 fill-[#C4A65C]" /> },
                { value: "7", label: "Days/Week", icon: <Calendar className="w-4 h-4 md:w-5 md:h-5" /> },
                { value: "FREE", label: "Tips-Based", icon: <Gift className="w-4 h-4 md:w-5 md:h-5" /> },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-white/10 rounded-lg md:rounded-xl text-[#C4A65C] mb-2 md:mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-lg md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/70 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tour-details" className="py-12 md:py-24" style={{ 
        backgroundColor: elegantColors.warmWhite 
      }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-[#B3172C]/20 to-[#38425B]/20 text-[#57192E] border-[#B3172C]/40 py-1.5 px-3 text-sm font-semibold">
                <Waves className="w-3 h-3 md:w-4 md:h-4 mr-2" /> The First of Its Kind
              </Badge>
              <h2 className="text-2xl md:text-4xl font-serif text-[#181D31] mb-4">
                Experience Kathmandu
                <span className="block text-[#38425B] italic">Like a Local</span>
              </h2>
              <div className="space-y-3 md:space-y-4 text-[#232D46]">
                <p className="text-base md:text-lg">
                  <strong>Free Tour Kathmandu</strong> is the first of its kind in the Kathmandu Valley. 
                  Led by a guide with <span className="text-[#57192E] font-semibold">decades of experience</span>.
                </p>
                <p className="text-base md:text-lg">
                  Explore iconic temples, stupas, monasteries, palaces, and local Newar architecture 
                  that define Nepal's capital city.
                </p>
              </div>

              <div className="mt-6 md:mt-8 grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-gradient-to-br from-[#B3172C]/10 to-[#57192E]/20 p-3 md:p-4 rounded-lg md:rounded-xl border border-[#B3172C]/20">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-[#57192E]" />
                  <div className="text-base md:text-xl font-bold text-[#181D31]">Small Groups</div>
                  <div className="text-xs md:text-sm text-[#232D46]">Personalized experience</div>
                </div>
                <div className="bg-gradient-to-br from-[#B3172C]/10 to-[#57192E]/20 p-3 md:p-4 rounded-lg md:rounded-xl border border-[#B3172C]/20">
                  <Compass className="w-6 h-6 md:w-8 md:h-8 text-[#57192E]" />
                  <div className="text-base md:text-xl font-bold text-[#181D31]">Local Guides</div>
                  <div className="text-xs md:text-sm text-[#232D46]">Born & raised in Kathmandu</div>
                </div>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/buddhist_temple.avif"
                    alt="Buddhist Stupa"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#38425B]/20 to-transparent" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/durbar_square.avif"
                    alt="Durbar Square"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#38425B]/20 to-transparent" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/monkey_temple.avif"
                    alt="Swayambhunath"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#38425B]/20 to-transparent" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/ktm_street.avif"
                    alt="Kathmandu Street"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#38425B]/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Times - Mobile Optimized */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-[#38425B]/20 to-[#57192E]/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-serif text-[#181D31] mb-3 md:mb-4">
              Choose Your Tour Time
            </h2>
            <p className="text-[#232D46] text-sm md:text-lg">
              We offer two convenient times daily to explore Kathmandu
            </p>
          </div>

          <div className="space-y-4 md:grid md:grid-cols-2 md:gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-white to-[#FFFDF9] border-[#38425B]/20 shadow-lg md:shadow-xl rounded-xl md:rounded-2xl overflow-hidden">
              <CardContent className="p-5 md:p-8">
                <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#FFFDF9] to-[#B3172C]/20 rounded-lg md:rounded-xl flex items-center justify-center">
                    <Sun className="w-6 h-6 md:w-8 md:h-8 text-[#57192E]" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-serif text-[#181D31]">Morning Tour</h3>
                    <div className="text-2xl md:text-3xl font-bold text-[#57192E]">9:00 AM</div>
                  </div>
                </div>
                <p className="text-[#232D46] text-sm md:text-base mb-4 md:mb-6">
                  Start your day with cool morning air exploring Kathmandu's awakening streets. Perfect for photographers with soft morning light.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#57192E]">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Cooler temperatures</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#57192E]">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Better photography light</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#57192E]">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Less crowded markets</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-[#FFFDF9] border-[#38425B]/20 shadow-lg md:shadow-xl rounded-xl md:rounded-2xl overflow-hidden">
              <CardContent className="p-5 md:p-8">
                <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#181D31] to-[#232D46] rounded-lg md:rounded-xl flex items-center justify-center">
                    <Sunset className="w-6 h-6 md:w-8 md:h-8 text-[#C4A65C]" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-serif text-[#181D31]">Afternoon Tour</h3>
                    <div className="text-2xl md:text-3xl font-bold text-[#57192E]">2:00 PM</div>
                  </div>
                </div>
                <p className="text-[#232D46] text-sm md:text-base mb-4 md:mb-6">
                  Experience bustling markets and sunset views from Swayambhunath. The energy peaks as locals go about their day.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#57192E]">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Vibrant market atmosphere</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#57192E]">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Sunset at Monkey Temple</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#57192E]">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Perfect for late risers</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-6 md:mt-12">
            <div className="inline-flex items-center gap-2 md:gap-3 bg-white text-[#181D31] rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg border border-[#FFFDF9]">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#B3172C]" />
              <span className="text-xs md:text-sm font-medium">Meeting Point: Garden of Dreams, Thamel</span>
              <Badge className="bg-gradient-to-r from-[#B3172C] to-[#57192E] text-white ml-1 md:ml-2 text-xs">Easy</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Trip Highlights - Mobile Horizontal Scrollable */}
      <section id="highlights" className="py-12 md:py-24" style={{ 
        backgroundColor: elegantColors.warmWhite 
      }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <Badge className="mb-3 md:mb-4 bg-gradient-to-r from-[#B3172C]/20 to-[#38425B]/20 text-[#57192E] border-[#B3172C]/30 py-1.5 px-3 text-xs md:text-sm font-semibold">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2" /> What You'll Experience
            </Badge>
            <h2 className="text-2xl md:text-4xl font-serif text-[#181D31] mb-3 md:mb-4">
              Trip Highlights
            </h2>
            <p className="text-[#232D46] text-sm md:text-lg">
              Discover the best of Kathmandu's rich heritage and culture
            </p>
          </div>

          {/* Mobile Horizontal Scrollable with Arrows */}
          <div className="md:hidden relative">
            <div className="relative">
              <button
                onClick={() => scrollHighlights('left')}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#181D31]"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollHighlights('right')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#181D31]"
                aria-label="Scroll right"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
              
              <div 
                ref={highlightsContainerRef}
                onTouchStart={preventHorizontalScroll}
                onTouchMove={preventHorizontalScroll}
                onScroll={(e) => {
                  const container = e.currentTarget;
                  const scrollPosition = container.scrollLeft;
                  const cardWidth = container.querySelector('.highlight-card')?.clientWidth || 280;
                  const gap = 16;
                  const totalCardWidth = cardWidth + gap;
                  
                  const newIndex = Math.round(scrollPosition / totalCardWidth);
                  const boundedIndex = Math.min(Math.max(newIndex, 0), highlights.length - 1);
                  
                  setCurrentHighlightIndex(boundedIndex);
                }}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-4 px-4"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  overscrollBehaviorX: 'contain'
                }}
              >
                {highlights.map((highlight, i) => (
                  <div 
                    key={i}
                    className="highlight-card w-[280px] flex-shrink-0 snap-start"
                  >
                    <Card className="bg-white border-[#FFFDF9] h-full">
                      <CardContent className="p-5">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#B3172C]/20 to-[#57192E]/10 rounded-lg flex items-center justify-center text-[#57192E] mb-4">
                          {highlight.icon}
                        </div>
                        <h4 className="text-base font-bold text-[#181D31] mb-2">{highlight.title}</h4>
                        <p className="text-[#232D46] text-sm leading-relaxed">{highlight.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll indicator dots */}
            <div className="flex justify-center gap-2 mt-4">
              {highlights.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (highlightsContainerRef.current) {
                      const cardWidth = highlightsContainerRef.current.querySelector('.highlight-card')?.clientWidth || 280;
                      highlightsContainerRef.current.scrollTo({
                        left: i * (cardWidth + 16),
                        behavior: 'smooth'
                      });
                      setCurrentHighlightIndex(i);
                    }
                  }}
                  className={`w-2 h-2 rounded-full ${i === currentHighlightIndex ? 'bg-[#B3172C]' : 'bg-[#38425B]/20'}`}
                  aria-label={`Go to highlight ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, i) => (
              <Card key={i} className="bg-white border-[#FFFDF9] hover:border-[#B3172C] hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B3172C]/20 to-[#57192E]/10 rounded-xl flex items-center justify-center text-[#57192E] mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#181D31] mb-3">{highlight.title}</h4>
                  <p className="text-[#232D46] leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Route - Mobile Horizontal Scrollable */}
      <section id="route" className="py-12 md:py-24 bg-gradient-to-b from-[#181D31] to-[#232D46]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <Badge className="mb-3 md:mb-4 bg-gradient-to-r from-[#B3172C]/20 to-[#38425B]/20 text-[#C4A65C] border-[#B3172C]/30 py-1.5 px-3 text-xs md:text-sm font-semibold">
              <Compass className="w-3 h-3 md:w-4 md:h-4 mr-2" /> The Journey
            </Badge>
            <h2 className="text-2xl md:text-4xl font-serif text-white mb-3 md:mb-4">
              Journey Through Ancient Kathmandu
            </h2>
            <p className="text-white/70 text-sm md:text-lg">
              Follow our curated route through 8 incredible stops
            </p>
          </div>

          {/* Mobile Horizontal Scrollable with Arrows */}
          <div className="md:hidden relative">
            <div className="relative">
              <button
                onClick={() => scrollTourStops('left')}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#181D31]"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTourStops('right')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#181D31]"
                aria-label="Scroll right"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
              
              <div 
                ref={tourStopsContainerRef}
                onTouchStart={preventHorizontalScroll}
                onTouchMove={preventHorizontalScroll}
                onScroll={(e) => {
                  const container = e.currentTarget;
                  const scrollPosition = container.scrollLeft;
                  const cardWidth = container.querySelector('.tourstop-card')?.clientWidth || 300;
                  const gap = 16;
                  const totalCardWidth = cardWidth + gap;
                  
                  const newIndex = Math.round(scrollPosition / totalCardWidth);
                  const boundedIndex = Math.min(Math.max(newIndex, 0), tourStops.length - 1);
                  
                  setCurrentTourStopIndex(boundedIndex);
                }}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-4 px-4"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  overscrollBehaviorX: 'contain'
                }}
              >
                {tourStops.map((stop, i) => (
                  <div 
                    key={i}
                    className="tourstop-card w-[300px] flex-shrink-0 snap-start"
                  >
                    <div className="relative h-48 rounded-xl overflow-hidden mb-3">
                      <Image
                        src={stop.image}
                        alt={stop.name}
                        fill
                        className="object-cover"
                        sizes="300px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#38425B] via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#B3172C] to-[#57192E] rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {i + 1}
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <Badge className="bg-[#B3172C]/20 text-[#C4A65C] border-none text-xs mb-1">
                          {stop.type}
                        </Badge>
                        <h4 className="text-base font-bold text-white">{stop.name}</h4>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">{stop.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll indicator dots */}
            <div className="flex justify-center gap-2 mt-4">
              {tourStops.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (tourStopsContainerRef.current) {
                      const cardWidth = tourStopsContainerRef.current.querySelector('.tourstop-card')?.clientWidth || 300;
                      tourStopsContainerRef.current.scrollTo({
                        left: i * (cardWidth + 16),
                        behavior: 'smooth'
                      });
                      setCurrentTourStopIndex(i);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === currentTourStopIndex ? 'bg-[#B3172C]' : 'bg-white/50'}`}
                  aria-label={`Go to stop ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourStops.map((stop, i) => (
              <div key={i} className="group">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={stop.image}
                    alt={stop.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#38425B] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#B3172C] to-[#57192E] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {i + 1}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-gradient-to-r from-[#B3172C] to-[#57192E] text-white border-none text-xs mb-2">
                      {stop.type}
                    </Badge>
                    <h4 className="text-lg font-bold text-white">{stop.name}</h4>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{stop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Experiences */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-[#FFFDF9] to-[#38425B]/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-serif text-[#181D31] mb-3 md:mb-4">
              Unique Cultural Encounters
            </h2>
            <p className="text-[#232D46] text-sm md:text-lg">
              Memorable experiences that make our tour special
            </p>
          </div>

          <div className="space-y-6 md:grid md:grid-cols-2 md:gap-8">
            {specialExperiences.map((exp, i) => (
              <Card key={i} className="bg-white border-[#FFFDF9] shadow-lg md:shadow-xl rounded-xl md:rounded-2xl overflow-hidden">
                <div className="md:flex h-full">
                  <div className="md:w-2/5 relative h-48 md:h-auto">
                    <Image
                      src={exp.image}
                      alt={exp.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#57192E]/10 to-transparent" />
                  </div>
                  <CardContent className="p-5 md:p-6 md:w-3/5 flex flex-col">
                    <h4 className="text-lg md:text-xl font-serif text-[#181D31] mb-3">{exp.name}</h4>
                    <p className="text-[#232D46] text-sm md:text-base leading-relaxed flex-grow mb-3 md:mb-4">{exp.description}</p>
                    {exp.price && (
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B3172C]/20 to-[#57192E]/10 text-[#57192E] rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-[#B3172C]/30 w-fit">
                        <Coffee className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-sm md:text-base font-semibold">{exp.price}</span>
                      </div>
                    )}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews - Horizontal Flow Animation */}
      <section id="reviews" className="py-12 md:py-24" style={{ 
        backgroundColor: elegantColors.warmWhite 
      }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <Badge className="mb-3 md:mb-4 bg-gradient-to-r from-[#B3172C]/20 to-[#38425B]/20 text-[#57192E] border-[#B3172C]/30 py-1.5 px-3 text-xs md:text-sm font-semibold">
              <Star className="w-3 h-3 md:w-4 md:h-4 mr-1.5 fill-[#57192E]" /> TESTIMONIALS
            </Badge>
            <h2 className="text-2xl md:text-4xl font-serif text-[#181D31] mb-4 md:mb-6">
              What Travelers Say
            </h2>
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="flex gap-0.5 md:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-[#57192E] font-bold text-sm md:text-lg">97% Excellent Rating</span>
            </div>
            <p className="text-[#232D46] text-sm md:text-lg">
              Out of more than 500 reviews on TripAdvisor, 97% rate the Free Walking Tour as 'Excellent'
            </p>
          </div>

          {/* Horizontal Flow Animation for Mobile */}
          <div className="md:hidden overflow-hidden relative py-4" 
               style={{ overscrollBehavior: 'contain' }}
          >
            <div 
              className="flex animate-infinite-scroll-slow-mobile"
              onTouchStart={preventHorizontalScroll}
              onTouchMove={preventHorizontalScroll}
            >
              {infiniteTestimonials.map((testimonial, i) => (
                <div
                  key={`${testimonial.name}-${i}`}
                  className="flex-shrink-0 w-[85vw] mr-6"
                >
                  <div className="bg-gradient-to-b from-white to-[#FFFDF9] rounded-xl overflow-hidden border border-[#FFFDF9] p-5 h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[#232D46] italic mb-6 leading-relaxed text-sm">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex flex-col gap-2">
                      <div className="font-bold text-base text-[#181D31]">{testimonial.name}</div>
                      <div className="text-[#57192E] text-xs flex items-center gap-1">
                        <Globe className="w-3 h-3" /> {testimonial.country}
                      </div>
                      <Badge className="bg-gradient-to-r from-[#B3172C]/10 to-[#57192E]/5 text-[#57192E] text-xs w-fit">
                        Free Walking Tour
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Horizontal Flow Animation for Desktop */}
          <div className="hidden md:block overflow-hidden relative py-8">
            <div className="flex animate-infinite-scroll-slow-desktop">
              {infiniteTestimonials.map((testimonial, i) => (
                <div
                  key={`${testimonial.name}-${i}`}
                  className="flex-shrink-0 w-[400px] mr-8"
                >
                  <div className="bg-gradient-to-b from-white to-[#FFFDF9] rounded-2xl overflow-hidden border border-[#FFFDF9] p-8 h-full">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[#232D46] italic mb-8 leading-relaxed text-base">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex flex-col gap-2">
                      <div className="font-bold text-lg text-[#181D31]">{testimonial.name}</div>
                      <div className="text-[#57192E] text-sm flex items-center gap-1">
                        <Globe className="w-3 h-3" /> {testimonial.country}
                      </div>
                      <Badge className="bg-gradient-to-r from-[#B3172C]/10 to-[#57192E]/5 text-[#57192E] text-xs w-fit">
                        Free Walking Tour
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-[#FFFDF9]/60 to-[#38425B]/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-serif text-[#181D31] mb-3 md:mb-4">
                What's Included
              </h2>
              <p className="text-[#232D46] text-sm md:text-lg">
                Clear and transparent pricing for your convenience
              </p>
            </div>

            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-8">
              <Card className="bg-gradient-to-br from-[#181D31] to-[#232D46] border-none shadow-lg md:shadow-xl rounded-xl md:rounded-2xl overflow-hidden">
                <CardContent className="p-5 md:p-8">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#B3172C] to-[#57192E] rounded-lg md:rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-white">Cost Includes</h3>
                  </div>
                  <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    {[
                      "Free Walking Tour with experienced local guide",
                      "4-5 hours exploring temples, stupas, and shrines",
                      "In-depth cultural insights and history",
                      "Small group experience",
                      "Personal recommendations for your trip",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/90">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#C4A65C] shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#FFFDF9] shadow-lg md:shadow-xl rounded-xl md:rounded-2xl overflow-hidden">
                <CardContent className="p-5 md:p-8">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-white to-[#FFFDF9] border border-[#57192E]/30 rounded-lg md:rounded-xl flex items-center justify-center">
                      <XCircle className="w-5 h-5 md:w-6 md:h-6 text-[#57192E]" />
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-[#181D31]">Cost Excludes</h3>
                  </div>
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {[
                      "Personal expenses (tea, coffee, water)",
                      "Entrance fees (200 NPR at Monkey Temple)",
                      "Local lassi or snacks (optional)",
                      "Transportation to/from meeting point",
                      "Travel insurance",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#232D46]">
                        <XCircle className="w-4 h-4 md:w-5 md:h-5 text-[#57192E]/50 shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-4 md:p-6 bg-gradient-to-r from-[#B3172C]/10 to-[#57192E]/5 rounded-lg md:rounded-xl border border-[#B3172C]/20">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#B3172C] to-[#57192E] rounded-lg md:rounded-xl flex items-center justify-center">
                        <Gift className="w-5 h-5 md:w-7 md:h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base md:text-lg text-[#181D31] mb-1 md:mb-2">Tips-Based Model</h4>
                        <p className="text-[#232D46] text-xs md:text-sm">
                          Award your guide based on your satisfaction. No fixed fee. This model ensures our guides are motivated to provide the best experience possible.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-[#181D31] to-[#232D46] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/footer.avif"
            alt="Monkey Temple"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-5xl font-serif text-white mb-4 md:mb-6">
              Ready to Explore
              <span className="block text-[#C4A65C] italic">Kathmandu?</span>
            </h2>
            <p className="text-white/80 text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
              Book your free walking tour and discover hidden treasures with a local guide.
              Join thousands of satisfied travelers who've experienced the real Kathmandu.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
              <Link href="/contact" className="sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#B3172C] to-[#57192E] hover:from-[#9F1327] hover:to-[#471625] text-white font-bold h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg active:scale-95 transition-transform">
                  <Heart className="mr-2 w-4 h-4 md:w-5 md:h-5" /> Book Your Tour
                </Button>
              </Link>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white/40 hover:bg-white/10 h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg active:scale-95 transition-transform">
                  <WhatsAppIcon className="mr-2 w-4 h-4 md:w-5 md:h-5" /> WhatsApp Booking
                </Button>
              </a>
            </div>

            {/* Wider cards with smaller desktop fonts */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-8 max-w-3xl md:max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-3 bg-white/5 rounded-xl md:rounded-2xl p-5 md:p-10 border border-white/10 hover:border-white/20 transition-colors duration-300 min-h-[120px] md:min-h-[140px] justify-center w-full">
                <Phone className="w-6 h-6 md:w-7 md:h-7 text-[#C4A65C]" />
                <span className="text-white/60 text-sm md:text-sm">Phone</span>
                <a href="tel:+9779841376470" className="text-white text-base md:text-lg font-medium hover:text-[#C4A65C] transition-colors text-center w-full px-4">
                  +977 9841376470
                </a>
              </div>
              <div className="flex flex-col items-center gap-3 bg-white/5 rounded-xl md:rounded-2xl p-5 md:p-10 border border-white/10 hover:border-white/20 transition-colors duration-300 min-h-[120px] md:min-h-[140px] justify-center w-full">
                <Mail className="w-6 h-6 md:w-7 md:h-7 text-[#C4A65C]" />
                <span className="text-white/60 text-sm md:text-sm">Email</span>
                <a href="mailto:info@himkalaadventure.com" className="text-white text-base md:text-lg font-medium hover:text-[#C4A65C] transition-colors text-center w-full px-4 break-words leading-snug">
                  info@himkalaadventure.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Bigger logo version with marketing button */}
      <footer className="py-8 md:py-12 bg-gradient-to-b from-[#181D31] to-[#232D46]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 mb-6 md:mb-8">
              <Link href="/" className="flex items-center gap-3 md:gap-4 group">
                {/* Even bigger logo */}
                <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                  <Image 
                    src="/images/himkala-logo-2.png" 
                    alt="Himkala Adventure Logo"
                    width={96}
                    height={96}
                    className="object-contain drop-shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-xl"
                    priority
                  />
                </div>
                <div className="text-left">
                  <div className="font-serif font-bold text-xl md:text-3xl lg:text-4xl text-white leading-tight">Free Tour Kathmandu</div>
                  <div className="text-[#C4A65C] text-sm md:text-lg lg:text-xl font-semibold mt-1">by Himkala Adventure</div>
                </div>
              </Link>
              
              <div className="flex items-center gap-3 md:gap-4 mt-4 md:mt-0">
                <a href="https://www.facebook.com/FreeWalkingTourKathmandu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Facebook className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </a>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </a>
              </div>
            </div>

            <p className="text-white/50 text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
              Experience the authentic Kathmandu with our free walking tours. Discover hidden gems, ancient temples, and vibrant local culture with experienced guides.
            </p>

            {/* Marketing button for Himkala Adventure */}
            <div className="mb-6 md:mb-8">
              <Link href="https://himkalaadventure.com" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#B3172C] to-[#57192E] hover:from-[#9F1327] hover:to-[#471625] text-white font-bold h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg active:scale-95 transition-transform"
                >
                  <Compass className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                  Visit Himkala Adventure
                </Button>
              </Link>
            </div>

            <div className="border-t border-white/10 pt-6 md:pt-8">
              <p className="text-white/40 text-xs md:text-sm">
                © {new Date().getFullYear()} Free Tour Kathmandu. All rights reserved.
                <span className="block mt-1 md:mt-2">Part of Himkala Adventure</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Add CSS for the animation */}
      <style jsx global>{`
        @keyframes infinite-scroll-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-85vw * ${testimonials.length} - 6rem * ${testimonials.length}));
          }
        }

        @keyframes infinite-scroll-desktop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-400px * ${testimonials.length} - 2rem * ${testimonials.length}));
          }
        }

        .animate-infinite-scroll-slow-mobile {
          animation: infinite-scroll-mobile 90s linear infinite;
          width: calc(85vw * ${testimonials.length * 2} + 6rem * ${testimonials.length * 2});
        }

        .animate-infinite-scroll-slow-desktop {
          animation: infinite-scroll-desktop 90s linear infinite;
          width: calc(400px * ${testimonials.length * 2} + 2rem * ${testimonials.length * 2});
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .snap-x {
          scroll-snap-type: x mandatory;
        }

        .snap-start {
          scroll-snap-align: start;
        }

        /* Only prevent horizontal page scroll */
        body {
          overflow-x: hidden;
          position: relative;
        }

        /* Keep vertical scroll working */
        html {
          overflow-x: hidden;
          overflow-y: scroll;
        }
      `}</style>
    </div>
  );
}