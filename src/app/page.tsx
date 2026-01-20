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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useRef, useEffect } from "react";

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.507 14.307l-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.78-1.66-2.079-.173-.297-.019-.458.13-.606.134-.135.3-.349.45-.523.146-.172.195-.298.295-.497.1-.198.05-.371-.025-.52-.075-.148-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.01-.371-.01-.57-.01-.2 0-.523.074-.797.366-.259.278-1.039 1.016-1.039 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.414-.074-.125-.272-.198-.57-.346z"/>
    <path d="M20.52 3.449C18.24 1.245 15.24 0 12 0A11.996 11.996 0 0 0 1.04 17.551L0 24l6.335-1.652A11.983 11.983 0 0 0 12 24c3.24 0 6.24-1.245 8.52-3.449C22.8 18.351 24 15.351 24 12c0-3.35-1.2-6.35-3.48-8.551zM12 21.6c-2.28 0-4.56-.6-6.48-1.8l-.36-.18-3.72.975.975-3.72-.18-.36C1.8 16.56 1.2 14.28 1.2 12c0-5.28 4.32-9.6 9.6-9.6 2.28 0 4.56.6 6.48 1.8 1.92 1.2 3.36 2.76 4.32 4.68 1.2 1.92 1.8 4.2 1.8 6.48 0 5.28-4.32 9.6-9.6 9.6z"/>
  </svg>
);

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
    image: "https://images.unsplash.com/photo-1582654291505-56e9c2e62e7c?q=80&w=600&auto=format&fit=crop",
    description: "Meet your guide outside this peaceful oasis in Thamel.",
  },
  {
    name: "Kathesimbhu Stupa",
    type: "Buddhist Heritage",
    image: "https://images.unsplash.com/phone-1609766857041-ed402ea8069a?q=80&w=600&auto=format&fit=crop",
    description: "Smaller replica of Swayambhunath in the heart of old city.",
  },
  {
    name: "Glass Beads Market",
    type: "Cultural Experience",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=600&auto=format&fit=crop",
    description: "Colorful glass beads made for generations for Hindu ceremonies.",
  },
  {
    name: "Indra Chowk Market",
    type: "Local Life",
    image: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?q=80&w=600&auto=format&fit=crop",
    description: "One of Kathmandu's busiest intersections with vibrant markets.",
  },
  {
    name: "Durbar Square Area",
    type: "UNESCO Heritage",
    image: "https://images.unsplash.com/photo-1558799401-1dcba79f095c?q=80&w=600&auto=format&fit=crop",
    description: "Historic palace square with stunning Malla-era temples.",
  },
  {
    name: "Newari Neighbourhood",
    type: "Hidden Gem",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop",
    description: "Sleepy traditional streets where time stands still.",
  },
  {
    name: "Vishnumati River",
    type: "Sacred Site",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop",
    description: "Witness local cremation ghats similar to the Ganges.",
  },
  {
    name: "Monkey Temple",
    type: "Final Destination",
    image: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=600&auto=format&fit=crop",
    description: "Climb 424 steps to the ancient stupa with valley views.",
  },
];

const specialExperiences = [
  {
    name: "Kathe Swoyambhu",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=600&auto=format&fit=crop",
    description: "Learn about Hindu, Buddhist and Tibetan cultures at this photogenic stupa.",
  },
  {
    name: "Local Lassi Experience",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=600&auto=format&fit=crop",
    description: "Try famous local lassi near glass-bead market. Refreshing must-try drink.",
    price: "NPR 40-70",
  },
  {
    name: "Glass Beads Market",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=600&auto=format&fit=crop",
    description: "Spectacular market where Muslim minority make colorful glass beads for Hindu weddings.",
  },
  {
    name: "Monkey Temple",
    image: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=600&auto=format&fit=crop",
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
const WHATSAPP_LINK = "https://wa.me/9779841376470?text=Hi%21%20I%27m%20interested%20in%20booking%20the%20Free%20Walking%20Tour%20in%20Kathmandu%20for%20";

export default function FreeWalkingTourPage() {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);
  const [currentTourStopIndex, setCurrentTourStopIndex] = useState(0);
  const highlightsContainerRef = useRef<HTMLDivElement>(null);
  const tourStopsContainerRef = useRef<HTMLDivElement>(null);
  
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
    <div className="min-h-screen" style={{ background: '#FAF7F2' }}>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl hover:shadow-green-500/30 active:scale-95 transition-all duration-200"
        >
          <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
          <span className="absolute -top-8 right-0 bg-[#8B5A2B] text-white text-xs font-semibold py-1 px-3 rounded-full whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 shadow-lg hidden md:block">
            Book on WhatsApp
          </span>
        </a>
      </div>

      {/* Hero Section - Mobile Optimized */}
      <section ref={heroRef} className="relative h-[85vh] min-h-[500px] max-h-[700px] md:max-h-[800px] overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #6D4C41 0%, #8B5A2B 100%)' }}>
          <Image
            src="https://images.unsplash.com/photo-1558799401-1dcba79f095c?q=80&w=1200&auto=format&fit=crop"
            alt="Kathmandu Durbar Square"
            fill
            className="object-cover mix-blend-overlay opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#6D4C41]/90 via-[#6D4C41]/70 to-[#6D4C41]/50" />
        </div>
        
        <div className="absolute inset-0 flex items-center pt-4 md:pt-0">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl">
              <Badge className="mb-4 md:mb-6 bg-white/20 backdrop-blur-sm border-white/30 text-white px-4 py-2 rounded-full text-xs md:text-sm">
                <Award className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                First Free Walking Tour in Nepal
              </Badge>

              <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-4 md:mb-6">
                Free Walking Tour
                <span className="block text-[#D4A574] italic text-2xl md:text-6xl">Kathmandu</span>
              </h1>

              <p className="text-sm md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed max-w-xl">
                Discover the soul of Nepal's capital through ancient temples, hidden courtyards, 
                and vibrant markets with local experts.
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                <div className="flex items-center gap-1 md:gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-white/30">
                  <Clock className="w-3 h-3 md:w-5 md:h-5 text-[#D4A574]" />
                  <span className="text-white text-xs md:text-sm font-medium">4-5 Hours</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-white/30">
                  <Calendar className="w-3 h-3 md:w-5 md:h-5 text-[#D4A574]" />
                  <span className="text-white text-xs md:text-sm font-medium">Daily 9 AM & 2 PM</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-white/30">
                  <MapPin className="w-3 h-3 md:w-5 md:h-5 text-[#D4A574]" />
                  <span className="text-white text-xs md:text-sm font-medium">Garden of Dreams</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link href="/contact" className="flex-1">
                  <Button size="lg" className="w-full bg-[#D4A574] hover:bg-[#C49564] text-[#5D4037] font-bold h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg active:scale-95 transition-transform">
                    <Heart className="mr-2 w-4 h-4 md:w-5 md:h-5" /> Book Your Spot
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection('tour-details')}
                  className="w-full bg-transparent text-white border-white/40 hover:bg-white/10 h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg active:scale-95 transition-transform"
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
          <div className="bg-gradient-to-r from-[#8B5A2B] to-[#6D4C41] rounded-xl md:rounded-2xl p-4 md:p-8 -mt-8 md:-mt-16 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: "350+", label: "Reviews", icon: <MessageCircle className="w-4 h-4 md:w-5 md:h-5" /> },
                { value: "94%", label: "Excellent", icon: <Star className="w-4 h-4 md:w-5 md:h-5 fill-[#D4A574]" /> },
                { value: "7", label: "Days/Week", icon: <Calendar className="w-4 h-4 md:w-5 md:h-5" /> },
                { value: "FREE", label: "Tips-Based", icon: <Gift className="w-4 h-4 md:w-5 md:h-5" /> },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-white/10 rounded-lg md:rounded-xl text-[#D4A574] mb-2 md:mb-3">
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
      <section id="tour-details" className="py-12 md:py-24" style={{ background: '#FAF7F2' }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
            <div>
              <Badge className="mb-4 bg-[#D4A574]/20 text-[#8B5A2B] border-[#D4A574]/40 py-1.5 px-3 text-sm font-semibold">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2" /> The First of Its Kind
              </Badge>
              <h2 className="text-2xl md:text-4xl font-serif text-[#5D4037] mb-4">
                Experience Kathmandu
                <span className="block text-[#8B5A2B] italic">Like a Local</span>
              </h2>
              <div className="space-y-3 md:space-y-4 text-[#6D4C41]">
                <p className="text-base md:text-lg">
                  <strong>Free Tour Kathmandu</strong> is the first of its kind in the Kathmandu Valley. 
                  Led by a guide with <span className="text-[#8B5A2B] font-semibold">decades of experience</span>.
                </p>
                <p className="text-base md:text-lg">
                  Explore iconic temples, stupas, monasteries, palaces, and local Newar architecture 
                  that define Nepal's capital city.
                </p>
              </div>

              <div className="mt-6 md:mt-8 grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-gradient-to-br from-[#D4A574]/10 to-[#F5EDE3]/20 p-3 md:p-4 rounded-lg md:rounded-xl border border-[#D4A574]/20">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-[#8B5A2B] mb-2" />
                  <div className="text-base md:text-xl font-bold text-[#5D4037]">Small Groups</div>
                  <div className="text-xs md:text-sm text-[#6D4C41]">Personalized experience</div>
                </div>
                <div className="bg-gradient-to-br from-[#D4A574]/10 to-[#F5EDE3]/20 p-3 md:p-4 rounded-lg md:rounded-xl border border-[#D4A574]/20">
                  <Compass className="w-6 h-6 md:w-8 md:h-8 text-[#8B5A2B] mb-2" />
                  <div className="text-base md:text-xl font-bold text-[#5D4037]">Local Guides</div>
                  <div className="text-xs md:text-sm text-[#6D4C41]">Born & raised in Kathmandu</div>
                </div>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=600&auto=format&fit=crop"
                    alt="Buddhist Stupa"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1558799401-1dcba79f095c?q=80&w=600&auto=format&fit=crop"
                    alt="Durbar Square"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=600&auto=format&fit=crop"
                    alt="Swayambhunath"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop"
                    alt="Vishnumati River"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Times - Mobile Optimized */}
      <section className="py-12 md:py-24 bg-gradient-to-r from-[#D4A574]/10 to-[#F5EDE3]/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-serif text-[#5D4037] mb-3 md:mb-4">
              Choose Your Tour Time
            </h2>
            <p className="text-[#6D4C41] text-sm md:text-lg">
              We offer two convenient times daily to explore Kathmandu
            </p>
          </div>

          <div className="space-y-4 md:grid md:grid-cols-2 md:gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-white to-[#FAF7F2] border-[#D4A574]/20 shadow-lg md:shadow-xl rounded-xl md:rounded-2xl overflow-hidden">
              <CardContent className="p-5 md:p-8">
                <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#FAF7F2] to-[#F5EDE3] rounded-lg md:rounded-xl flex items-center justify-center">
                    <Sun className="w-6 h-6 md:w-8 md:h-8 text-[#8B5A2B]" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-serif text-[#5D4037]">Morning Tour</h3>
                    <div className="text-2xl md:text-3xl font-bold text-[#8B5A2B]">9:00 AM</div>
                  </div>
                </div>
                <p className="text-[#6D4C41] text-sm md:text-base mb-4 md:mb-6">
                  Start your day with cool morning air exploring Kathmandu's awakening streets. Perfect for photographers with soft morning light.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#8B5A2B]">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Cooler temperatures</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#8B5A2B]">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Better photography light</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#8B5A2B]">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Less crowded markets</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white to-[#FAF7F2] border-[#D4A574]/20 shadow-lg md:shadow-xl rounded-xl md:rounded-2xl overflow-hidden">
              <CardContent className="p-5 md:p-8">
                <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#6D4C41] to-[#8B5A2B] rounded-lg md:rounded-xl flex items-center justify-center">
                    <Sunset className="w-6 h-6 md:w-8 md:h-8 text-[#D4A574]" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-serif text-[#5D4037]">Afternoon Tour</h3>
                    <div className="text-2xl md:text-3xl font-bold text-[#8B5A2B]">2:00 PM</div>
                  </div>
                </div>
                <p className="text-[#6D4C41] text-sm md:text-base mb-4 md:mb-6">
                  Experience bustling markets and sunset views from Swayambhunath. The energy peaks as locals go about their day.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#8B5A2B]">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Vibrant market atmosphere</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#8B5A2B]">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Sunset at Monkey Temple</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#8B5A2B]">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Perfect for late risers</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-6 md:mt-12">
            <div className="inline-flex items-center gap-2 md:gap-3 bg-white text-[#5D4037] rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg border border-[#F5EDE3]">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#D4A574]" />
              <span className="text-xs md:text-sm font-medium">Meeting Point: Garden of Dreams, Thamel</span>
              <Badge className="bg-[#D4A574] text-[#5D4037] ml-1 md:ml-2 text-xs">Easy</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Trip Highlights - Mobile Horizontal Scrollable */}
      <section id="highlights" className="py-12 md:py-24" style={{ background: '#FAF7F2' }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <Badge className="mb-3 md:mb-4 bg-[#D4A574]/20 text-[#8B5A2B] border-[#D4A574]/30 py-1.5 px-3 text-xs md:text-sm font-semibold">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2" /> What You'll Experience
            </Badge>
            <h2 className="text-2xl md:text-4xl font-serif text-[#5D4037] mb-3 md:mb-4">
              Trip Highlights
            </h2>
            <p className="text-[#6D4C41] text-sm md:text-lg">
              Discover the best of Kathmandu's rich heritage and culture
            </p>
          </div>

          {/* Mobile Horizontal Scrollable with Arrows */}
          <div className="md:hidden relative">
            <div className="relative">
              <button
                onClick={() => scrollHighlights('left')}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#5D4037]"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollHighlights('right')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#5D4037]"
                aria-label="Scroll right"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
              
              <div 
                ref={highlightsContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-4 px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {highlights.map((highlight, i) => (
                  <div 
                    key={i}
                    className="highlight-card w-[280px] flex-shrink-0 snap-start"
                  >
                    <Card className="bg-white border-[#F5EDE3] h-full">
                      <CardContent className="p-5">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#D4A574]/20 to-[#F5EDE3]/40 rounded-lg flex items-center justify-center text-[#8B5A2B] mb-4">
                          {highlight.icon}
                        </div>
                        <h4 className="text-base font-bold text-[#5D4037] mb-2">{highlight.title}</h4>
                        <p className="text-[#6D4C41] text-sm leading-relaxed">{highlight.description}</p>
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
                    }
                  }}
                  className={`w-2 h-2 rounded-full ${i === currentHighlightIndex ? 'bg-[#D4A574]' : 'bg-[#F5EDE3]'}`}
                  aria-label={`Go to highlight ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, i) => (
              <Card key={i} className="bg-white border-[#F5EDE3] hover:border-[#D4A574] hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#D4A574]/20 to-[#F5EDE3]/40 rounded-xl flex items-center justify-center text-[#8B5A2B] mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#5D4037] mb-3">{highlight.title}</h4>
                  <p className="text-[#6D4C41] leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Route - Mobile Horizontal Scrollable */}
      <section id="route" className="py-12 md:py-24 bg-gradient-to-b from-[#6D4C41] to-[#8B5A2B]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <Badge className="mb-3 md:mb-4 bg-[#D4A574]/20 text-[#D4A574] border-[#D4A574]/30 py-1.5 px-3 text-xs md:text-sm font-semibold">
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
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#5D4037]"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTourStops('right')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#5D4037]"
                aria-label="Scroll right"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
              
              <div 
                ref={tourStopsContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-4 px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#6D4C41] via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <div className="w-8 h-8 bg-[#D4A574] rounded-full flex items-center justify-center text-[#5D4037] font-bold text-sm">
                          {i + 1}
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <Badge className="bg-[#D4A574]/20 text-[#D4A574] border-none text-xs mb-1">
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
                    }
                  }}
                  className={`w-2 h-2 rounded-full ${i === currentTourStopIndex ? 'bg-[#D4A574]' : 'bg-white/50'}`}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6D4C41] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#D4A574] to-[#8B5A2B] rounded-full flex items-center justify-center text-[#5D4037] font-bold text-lg shadow-lg">
                      {i + 1}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-[#D4A574] text-[#5D4037] border-none text-xs mb-2">
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
      <section className="py-12 md:py-24 bg-gradient-to-b from-[#FAF7F2] to-[#F5EDE3]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-serif text-[#5D4037] mb-3 md:mb-4">
              Unique Cultural Encounters
            </h2>
            <p className="text-[#6D4C41] text-sm md:text-lg">
              Memorable experiences that make our tour special
            </p>
          </div>

          <div className="space-y-6 md:grid md:grid-cols-2 md:gap-8">
            {specialExperiences.map((exp, i) => (
              <Card key={i} className="bg-white border-[#F5EDE3] shadow-lg md:shadow-xl rounded-xl md:rounded-2xl overflow-hidden">
                <div className="md:flex h-full">
                  <div className="md:w-2/5 relative h-48 md:h-auto">
                    <Image
                      src={exp.image}
                      alt={exp.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <CardContent className="p-5 md:p-6 md:w-3/5 flex flex-col">
                    <h4 className="text-lg md:text-xl font-serif text-[#5D4037] mb-3">{exp.name}</h4>
                    <p className="text-[#6D4C41] text-sm md:text-base leading-relaxed flex-grow mb-3 md:mb-4">{exp.description}</p>
                    {exp.price && (
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4A574]/20 to-[#F5EDE3]/30 text-[#8B5A2B] rounded-full px-3 md:px-4 py-1.5 md:py-2 border border-[#D4A574]/30 w-fit">
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
      <section id="reviews" className="py-12 md:py-24" style={{ background: '#FAF7F2' }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <Badge className="mb-3 md:mb-4 bg-[#D4A574]/20 text-[#8B5A2B] border-[#D4A574]/30 py-1.5 px-3 text-xs md:text-sm font-semibold">
              <Star className="w-3 h-3 md:w-4 md:h-4 mr-1.5 fill-[#8B5A2B]" /> TESTIMONIALS
            </Badge>
            <h2 className="text-2xl md:text-4xl font-serif text-[#5D4037] mb-4 md:mb-6">
              What Travelers Say
            </h2>
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="flex gap-0.5 md:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-[#8B5A2B] font-bold text-sm md:text-lg">94% Excellent Rating</span>
            </div>
            <p className="text-[#6D4C41] text-sm md:text-lg">
              Out of over 350 reviews on TripAdvisor, 94% rate the Free Walking Tour as 'Excellent'
            </p>
          </div>

          {/* Horizontal Flow Animation for Mobile */}
          <div className="md:hidden overflow-hidden relative py-4">
            <div className="flex animate-infinite-scroll-slow-mobile">
              {infiniteTestimonials.map((testimonial, i) => (
                <div
                  key={`${testimonial.name}-${i}`}
                  className="flex-shrink-0 w-[85vw] mr-6"
                >
                  <div className="bg-gradient-to-b from-white to-[#FAF7F2] rounded-xl overflow-hidden border border-[#F5EDE3] p-5 h-full">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[#6D4C41] italic mb-6 leading-relaxed text-sm">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex flex-col gap-2">
                      <div className="font-bold text-base text-[#5D4037]">{testimonial.name}</div>
                      <div className="text-[#8B5A2B] text-xs flex items-center gap-1">
                        <Globe className="w-3 h-3" /> {testimonial.country}
                      </div>
                      <Badge className="bg-[#D4A574]/10 text-[#8B5A2B] text-xs w-fit">
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
                  <div className="bg-gradient-to-b from-white to-[#FAF7F2] rounded-2xl overflow-hidden border border-[#F5EDE3] p-8 h-full">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[#6D4C41] italic mb-8 leading-relaxed text-base">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex flex-col gap-2">
                      <div className="font-bold text-lg text-[#5D4037]">{testimonial.name}</div>
                      <div className="text-[#8B5A2B] text-sm flex items-center gap-1">
                        <Globe className="w-3 h-3" /> {testimonial.country}
                      </div>
                      <Badge className="bg-[#D4A574]/10 text-[#8B5A2B] text-xs w-fit">
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
      <section className="py-12 md:py-24 bg-gradient-to-br from-[#F5EDE3]/30 to-[#FAF7F2]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-serif text-[#5D4037] mb-3 md:mb-4">
                What's Included
              </h2>
              <p className="text-[#6D4C41] text-sm md:text-lg">
                Clear and transparent pricing for your convenience
              </p>
            </div>

            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-8">
              <Card className="bg-gradient-to-br from-[#6D4C41] to-[#8B5A2B] border-none shadow-lg md:shadow-xl rounded-xl md:rounded-2xl overflow-hidden">
                <CardContent className="p-5 md:p-8">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D4A574] rounded-lg md:rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#5D4037]" />
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-white">Cost Includes</h3>
                  </div>
                  <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    {[
                      "Free Walking Tour with experienced local guide",
                      "4-5 hours exploring temples, stupas, and shrines",
                      "In-depth cultural insights and history",
                      "Small group experience",
                      "Personal recommendations for your stay",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/90">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#D4A574] shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#D4A574]/20 shadow-lg md:shadow-xl rounded-xl md:rounded-2xl overflow-hidden">
                <CardContent className="p-5 md:p-8">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-white to-[#FAF7F2] border border-[#8B5A2B]/30 rounded-lg md:rounded-xl flex items-center justify-center">
                      <XCircle className="w-5 h-5 md:w-6 md:h-6 text-[#8B5A2B]" />
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-[#5D4037]">Cost Excludes</h3>
                  </div>
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {[
                      "Personal expenses (tea, coffee, water)",
                      "Entrance fees (200 NPR at Monkey Temple)",
                      "Local lassi or snacks (optional)",
                      "Transportation to/from meeting point",
                      "Travel insurance",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#6D4C41]">
                        <XCircle className="w-4 h-4 md:w-5 md:h-5 text-[#8B5A2B]/50 shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-4 md:p-6 bg-gradient-to-r from-[#D4A574]/10 to-[#F5EDE3]/20 rounded-lg md:rounded-xl border border-[#D4A574]/20">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#D4A574] to-[#8B5A2B] rounded-lg md:rounded-xl flex items-center justify-center">
                        <Gift className="w-5 h-5 md:w-7 md:h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base md:text-lg text-[#5D4037] mb-1 md:mb-2">Tips-Based Model</h4>
                        <p className="text-[#6D4C41] text-xs md:text-sm">
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
<section className="py-12 md:py-24 bg-gradient-to-b from-[#6D4C41] to-[#8B5A2B] relative overflow-hidden">
  <div className="absolute inset-0 opacity-5">
    <Image
      src="https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=1200&auto=format&fit=crop"
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
        <span className="block text-[#D4A574] italic">Kathmandu?</span>
      </h2>
      <p className="text-white/80 text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
        Book your free walking tour and discover hidden treasures with a local guide.
        Join thousands of satisfied travelers who've experienced the real Kathmandu.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
        <Link href="/contact" className="sm:w-auto">
          <Button size="lg" className="w-full sm:w-auto bg-[#D4A574] hover:bg-[#C49564] text-[#5D4037] font-bold h-12 md:h-14 px-6 md:px-8 rounded-full text-base md:text-lg shadow-lg active:scale-95 transition-transform">
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
          <Phone className="w-6 h-6 md:w-7 md:h-7 text-[#D4A574]" />
          <span className="text-white/60 text-sm md:text-sm">Phone</span>
          <a href="tel:+9779841376470" className="text-white text-base md:text-lg font-medium hover:text-[#D4A574] transition-colors text-center w-full px-4">
            +977 9841376470
          </a>
        </div>
        <div className="flex flex-col items-center gap-3 bg-white/5 rounded-xl md:rounded-2xl p-5 md:p-10 border border-white/10 hover:border-white/20 transition-colors duration-300 min-h-[120px] md:min-h-[140px] justify-center w-full">
          <Mail className="w-6 h-6 md:w-7 md:h-7 text-[#D4A574]" />
          <span className="text-white/60 text-sm md:text-sm">Email</span>
          <a href="mailto:info@himkalaadventure.com" className="text-white text-base md:text-lg font-medium hover:text-[#D4A574] transition-colors text-center w-full px-4 break-words leading-snug">
            info@himkalaadventure.com
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="py-8 md:py-12 bg-gradient-to-b from-[#8B5A2B] to-[#6D4C41]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 mb-6 md:mb-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#D4A574] to-[#8B5A2B] rounded-lg md:rounded-xl flex items-center justify-center">
                  <Compass className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-serif font-bold text-lg md:text-2xl text-white">Free Tour Kathmandu</div>
                  <div className="text-[#D4A574] text-xs md:text-sm">by Himkala Adventure</div>
                </div>
              </Link>
              
              <div className="flex items-center gap-3 md:gap-4">
                <a href="https://www.facebook.com/FreeWalkingTourKathmandu" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Facebook className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </a>
              </div>
            </div>

            <p className="text-white/50 text-xs md:text-sm mb-6 md:mb-8 max-w-2xl mx-auto">
              Experience the authentic Kathmandu with our free walking tours. Discover hidden gems, ancient temples, and vibrant local culture with experienced guides.
            </p>

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
      `}</style>
    </div>
  );
}