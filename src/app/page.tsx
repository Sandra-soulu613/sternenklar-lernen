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
  Quote,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Coffee,
  Building2,
  Landmark,
  Sun,
  Sunset,
  Gift,
  MessageCircle,
  Globe,
  Award,
  Smile,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=600&auto=format&fit=crop",
    description: "Smaller replica of Swayambhunath in the heart of old city.",
  },
  {
    name: "Glass Beads Market",
    type: "Cultural Experience",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w-600&auto=format&fit=crop",
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

// Create infinite testimonials by duplicating the array
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function FreeWalkingTourPage() {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  // Simplified scroll animations for mobile
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero Section - Mobile Optimized */}
      <section ref={heroRef} className="relative h-[90vh] min-h-[500px] max-h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558799401-1dcba79f095c?q=80&w=1200&auto=format&fit=crop"
            alt="Kathmandu Durbar Square"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c1810]/80 via-[#2c1810]/50 to-transparent" />
        
        <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0 flex items-end pb-12 md:pb-0 md:items-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#d4a574]/30 backdrop-blur-sm border border-[#d4a574]/40 rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 text-[#d4a574]" />
                <span className="text-[#faf8f5] font-semibold text-xs">First Free Walking Tour in Nepal</span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#faf8f5] leading-[1.1] mb-4">
                Free Walking Tour
                <span className="block text-[#d4a574] italic text-4xl md:text-6xl">Kathmandu</span>
              </h1>

              <p className="text-base md:text-lg text-[#faf8f5]/90 mb-8 leading-relaxed">
                Discover the soul of Nepal's capital through ancient temples, hidden courtyards, 
                and vibrant markets.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <div className="flex items-center gap-2 bg-[#faf8f5]/20 backdrop-blur-sm rounded-full px-3 py-2 border border-[#faf8f5]/20">
                  <Clock className="w-4 h-4 text-[#d4a574]" />
                  <span className="text-[#faf8f5] text-sm font-medium">4-5 Hours</span>
                </div>
                <div className="flex items-center gap-2 bg-[#faf8f5]/20 backdrop-blur-sm rounded-full px-3 py-2 border border-[#faf8f5]/20">
                  <Calendar className="w-4 h-4 text-[#d4a574]" />
                  <span className="text-[#faf8f5] text-sm font-medium">Daily 9 AM & 2 PM</span>
                </div>
                <div className="flex items-center gap-2 bg-[#faf8f5]/20 backdrop-blur-sm rounded-full px-3 py-2 border border-[#faf8f5]/20">
                  <MapPin className="w-4 h-4 text-[#d4a574]" />
                  <span className="text-[#faf8f5] text-sm font-medium">Garden of Dreams</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link href="/contact" className="w-full">
                  <Button size="lg" className="w-full bg-[#d4a574] hover:bg-[#c49464] text-[#2c1810] font-bold h-12 px-6 rounded-full text-base">
                    <Heart className="mr-2 w-4 h-4" /> Book Your Spot
                  </Button>
                </Link>
                <a href="#tour-details" className="w-full">
                  <Button size="lg" variant="outline" className="w-full bg-transparent text-[#faf8f5] border-[#faf8f5]/40 hover:bg-[#faf8f5]/10 h-12 px-6 rounded-full text-base">
                    Learn More <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#faf8f5]/60">Scroll</span>
          <ArrowRight className="rotate-90 w-4 h-4 text-[#faf8f5]/40" />
        </div>
      </section>

      {/* Stats Banner - Mobile Optimized */}
      <section className="relative z-10 px-4">
        <div className="container mx-auto">
          <div className="bg-[#2c1810] rounded-2xl p-6 -mt-10 shadow-2xl">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { value: "350+", label: "Reviews", icon: <MessageCircle className="w-4 h-4" /> },
                { value: "94%", label: "Excellent", icon: <Star className="w-4 h-4" /> },
                { value: "7", label: "Days/Week", icon: <Calendar className="w-4 h-4" /> },
                { value: "FREE", label: "Tips-Based", icon: <Gift className="w-4 h-4" /> },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#d4a574]/20 rounded-lg text-[#d4a574] mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#faf8f5]">{stat.value}</div>
                  <div className="text-xs text-[#faf8f5]/60 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Mobile Optimized */}
      <section id="tour-details" className="py-12 md:py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-[#d4a574]/20 text-[#8b5a3c] border-[#d4a574]/40 py-1 px-3 text-sm font-semibold">
                <Sparkles className="w-3 h-3 mr-1" /> The First of Its Kind
              </Badge>
              <h2 className="text-2xl md:text-4xl font-serif text-[#2c1810] mb-4">
                Experience Kathmandu
                <span className="block text-[#8b5a3c] italic">Like a Local</span>
              </h2>
              <p className="text-[#5c4a3a] leading-relaxed mb-4">
                <strong>Free Tour Kathmandu</strong> is the first of its kind in the Kathmandu Valley. 
                Led by a guide with <span className="text-[#8b5a3c] font-semibold">decades of experience</span>.
              </p>
              <p className="text-[#5c4a3a] leading-relaxed">
                Explore iconic temples, stupas, monasteries, palaces, and local Newar architecture 
                that define Nepal's capital city.
              </p>
            </div>

            <div className="relative">
              <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4">
                <div className="flex gap-4">
                  <div className="w-[280px] flex-shrink-0 snap-start">
                    <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=600&auto=format&fit=crop"
                        alt="Buddhist Stupa"
                        fill
                        className="object-cover"
                        sizes="280px"
                      />
                    </div>
                  </div>
                  <div className="w-[280px] flex-shrink-0 snap-start">
                    <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1558799401-1dcba79f095c?q=80&w=600&auto=format&fit=crop"
                        alt="Durbar Square"
                        fill
                        className="object-cover"
                        sizes="280px"
                      />
                    </div>
                  </div>
                  <div className="w-[280px] flex-shrink-0 snap-start">
                    <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src="https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=600&auto=format&fit=crop"
                        alt="Swayambhunath"
                        fill
                        className="object-cover"
                        sizes="280px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-[#2c1810] text-[#faf8f5] rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#d4a574] rounded-lg flex items-center justify-center">
                    <Footprints className="w-6 h-6 text-[#2c1810]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold">4-5 Hours</div>
                    <div className="text-sm text-[#faf8f5]/70">of Discovery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Times - Mobile Optimized */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#d4a574]/10 to-[#e8d5c4]/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 max-w-2xl mx-auto">
            <Card className="bg-white border-none shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f5e6d3] to-[#e8d5c4] rounded-xl flex items-center justify-center">
                    <Sun className="w-6 h-6 text-[#8b5a3c]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-[#2c1810]">Morning Tour</h3>
                    <div className="text-2xl font-bold text-[#8b5a3c]">9:00 AM</div>
                  </div>
                </div>
                <p className="text-[#5c4a3a] text-sm">
                  Start your day with cool morning air exploring Kathmandu's awakening streets.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2c1810] to-[#4a3228] rounded-xl flex items-center justify-center">
                    <Sunset className="w-6 h-6 text-[#d4a574]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-[#2c1810]">Afternoon Tour</h3>
                    <div className="text-2xl font-bold text-[#8b5a3c]">2:00 PM</div>
                  </div>
                </div>
                <p className="text-[#5c4a3a] text-sm">
                  Experience bustling markets and sunset views from Swayambhunath.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 bg-[#2c1810] text-[#faf8f5] rounded-full px-4 py-2">
              <MapPin className="w-4 h-4 text-[#d4a574]" />
              <span className="text-sm font-medium">Meeting: Garden of Dreams, Thamel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trip Highlights - Horizontal Scrollable */}
      <section className="py-12 md:py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xs font-bold text-[#8b5a3c] uppercase tracking-wider mb-2">Trip Highlights</h2>
            <h3 className="text-2xl md:text-3xl font-serif text-[#2c1810] mb-4">
              What You'll Experience
            </h3>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4 gap-4">
              {highlights.map((highlight, i) => (
                <div key={i} className="w-[280px] flex-shrink-0 snap-start">
                  <Card className="bg-white border-none shadow-lg rounded-xl h-full">
                    <CardContent className="p-5">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#d4a574]/20 to-[#e8d5c4]/40 rounded-lg flex items-center justify-center text-[#8b5a3c] mb-4">
                        {highlight.icon}
                      </div>
                      <h4 className="text-base font-bold text-[#2c1810] mb-2">{highlight.title}</h4>
                      <p className="text-[#5c4a3a] text-sm leading-relaxed">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tour Route - Horizontal Scrollable */}
      <section className="py-12 md:py-24 bg-[#2c1810]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xs font-bold text-[#d4a574] uppercase tracking-wider mb-2">The Route</h2>
            <h3 className="text-2xl md:text-3xl font-serif text-[#faf8f5]">
              Journey Through Ancient Kathmandu
            </h3>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4 gap-4">
            {tourStops.map((stop, i) => (
              <div key={i} className="w-[300px] flex-shrink-0 snap-start">
                <div className="relative h-48 rounded-xl overflow-hidden mb-3">
                  <Image
                    src={stop.image}
                    alt={stop.name}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <div className="w-8 h-8 bg-[#d4a574] rounded-full flex items-center justify-center text-[#2c1810] font-bold text-sm">
                      {i + 1}
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <Badge className="bg-[#d4a574]/20 text-[#d4a574] border-none text-xs mb-1">
                      {stop.type}
                    </Badge>
                    <h4 className="text-base font-bold text-[#faf8f5]">{stop.name}</h4>
                  </div>
                </div>
                <p className="text-[#faf8f5]/70 text-sm leading-relaxed">{stop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Experiences - Stacked on Mobile */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-[#faf8f5] to-[#f5efe8]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xs font-bold text-[#8b5a3c] uppercase tracking-wider mb-2">Must-See Experiences</h2>
            <h3 className="text-2xl md:text-3xl font-serif text-[#2c1810]">
              Unique Cultural Encounters
            </h3>
          </div>

          <div className="space-y-6">
            {specialExperiences.map((exp, i) => (
              <Card key={i} className="bg-white border-none shadow-lg rounded-2xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5 relative h-48 md:h-auto">
                    <Image
                      src={exp.image}
                      alt={exp.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <CardContent className="p-5 md:p-6 md:w-3/5">
                    <h4 className="text-xl font-serif text-[#2c1810] mb-3">{exp.name}</h4>
                    <p className="text-[#5c4a3a] text-sm leading-relaxed mb-3">{exp.description}</p>
                    {exp.price && (
                      <div className="inline-flex items-center gap-2 bg-[#d4a574]/20 text-[#8b5a3c] rounded-full px-3 py-1.5">
                        <Coffee className="w-3 h-3" />
                        <span className="text-sm font-semibold">{exp.price}</span>
                      </div>
                    )}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews - Horizontal Flow Animation with Yellow Stars */}
      <section className="py-16 md:py-24 bg-[#faf8f5] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4 bg-[#d4a574]/20 text-[#8b5a3c] border-[#d4a574]/30 py-1.5 px-4 text-xs font-semibold">
              <Star className="w-3 h-3 mr-1.5 fill-[#8b5a3c]" /> TESTIMONIALS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2c1810] mb-6">
              What Travelers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d4a574] text-[#d4a574]" />
                ))}
              </div>
              <span className="text-[#8b5a3c] font-bold">94% Excellent Rating</span>
            </div>
            <p className="text-[#5c4a3a] text-base md:text-lg leading-relaxed">
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
                  <div className="bg-gradient-to-b from-white to-[#faf8f5] rounded-2xl overflow-hidden border border-[#e8d5c4] p-6 h-full">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[#5c4a3a] italic mb-8 leading-relaxed text-base">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex flex-col gap-2">
                      <div className="font-bold text-lg text-[#2c1810]">{testimonial.name}</div>
                      <div className="text-[#8b5a3c] text-sm flex items-center gap-1">
                        <Globe className="w-3 h-3" /> {testimonial.country}
                      </div>
                      <Badge className="bg-[#d4a574]/10 text-[#8b5a3c] text-xs w-fit">
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
                  <div className="bg-gradient-to-b from-white to-[#faf8f5] rounded-3xl overflow-hidden border border-[#e8d5c4] p-8 h-full">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[#5c4a3a] italic mb-8 leading-relaxed text-base">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex flex-col gap-2">
                      <div className="font-bold text-lg text-[#2c1810]">{testimonial.name}</div>
                      <div className="text-[#8b5a3c] text-sm flex items-center gap-1">
                        <Globe className="w-3 h-3" /> {testimonial.country}
                      </div>
                      <Badge className="bg-[#d4a574]/10 text-[#8b5a3c] text-xs w-fit">
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

      {/* Cost Section - Stacked on Mobile */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-[#e8d5c4]/30 to-[#faf8f5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-serif text-[#2c1810]">
                What's Included
              </h2>
            </div>

            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-[#2c1810] to-[#4a3228] border-none shadow-lg rounded-2xl">
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-[#faf8f5] mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#d4a574]" /> Cost Includes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-[#faf8f5]/90 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#d4a574] shrink-0 mt-0.5" />
                      <span>Free Walking Tour with experienced local guide</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#faf8f5]/90 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#d4a574] shrink-0 mt-0.5" />
                      <span>4-5 hours exploring temples, stupas, and shrines</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#faf8f5]/90 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#d4a574] shrink-0 mt-0.5" />
                      <span>In-depth cultural insights and history</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#d4a574]/20 shadow-lg rounded-2xl">
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-[#2c1810] mb-4 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-[#8b5a3c]" /> Cost Excludes
                  </h3>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-2 text-[#5c4a3a] text-sm">
                      <XCircle className="w-4 h-4 text-[#8b5a3c]/50 shrink-0 mt-0.5" />
                      <span>Personal expenses (tea, coffee, water)</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#5c4a3a] text-sm">
                      <XCircle className="w-4 h-4 text-[#8b5a3c]/50 shrink-0 mt-0.5" />
                      <span>Entrance fees (200 NPR at Monkey Temple)</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#5c4a3a] text-sm">
                      <XCircle className="w-4 h-4 text-[#8b5a3c]/50 shrink-0 mt-0.5" />
                      <span>Local lassi or snacks (optional)</span>
                    </li>
                  </ul>

                  <div className="p-4 bg-[#d4a574]/10 rounded-xl border border-[#d4a574]/20">
                    <div className="flex items-start gap-3">
                      <Gift className="w-5 h-5 text-[#8b5a3c] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-[#2c1810] text-sm mb-1">Tips-Based Model</h4>
                        <p className="text-xs text-[#5c4a3a]">
                          Award your guide based on your satisfaction. No fixed fee.
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

      {/* Important Note */}
      <section className="py-12 bg-[#faf8f5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#d4a574]/20 to-[#e8d5c4]/30 rounded-2xl p-5 border border-[#d4a574]/30">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#d4a574] rounded-lg flex items-center justify-center shrink-0">
                <Smile className="w-5 h-5 text-[#2c1810]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#2c1810] mb-2">Important Note</h3>
                <p className="text-[#5c4a3a] text-sm leading-relaxed">
                  Please confirm your spot before the tour. Your guide will help you return to Thamel or direct you to transportation.
                </p>
                <p className="text-[#8b5a3c] font-semibold text-sm mt-2">
                  Namaste!!! 🙏
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Mobile Optimized */}
      <section className="py-12 md:py-24 bg-[#2c1810] relative">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=1200&auto=format&fit=crop"
            alt="Monkey Temple"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-serif text-[#faf8f5] mb-6">
              Ready to Explore
              <span className="block text-[#d4a574] italic">Kathmandu?</span>
            </h2>
            <p className="text-[#faf8f5]/80 text-sm md:text-base mb-8">
              Book your free walking tour and discover hidden treasures with a local guide.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <Link href="/contact" className="w-full">
                <Button size="lg" className="w-full bg-[#d4a574] hover:bg-[#c49464] text-[#2c1810] font-bold h-12 px-6 rounded-full">
                  <Heart className="mr-2 w-4 h-4" /> Book Your Tour
                </Button>
              </Link>
              <a href="https://www.facebook.com/FreeWalkingTourKathmandu" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="lg" variant="outline" className="w-full bg-transparent text-[#faf8f5] border-[#faf8f5]/40 hover:bg-[#faf8f5]/10 h-12 px-6 rounded-full">
                  <Facebook className="mr-2 w-4 h-4" /> Follow on Facebook
                </Button>
              </a>
            </div>

            <div className="space-y-4 max-w-sm mx-auto">
              <div className="flex flex-col items-center gap-1 bg-[#faf8f5]/5 rounded-xl p-4 border border-[#faf8f5]/10">
                <Phone className="w-5 h-5 text-[#d4a574]" />
                <span className="text-[#faf8f5]/60 text-xs">Phone</span>
                <a href="tel:+9779841376470" className="text-[#faf8f5] text-sm font-medium hover:text-[#d4a574]">
                  +977 9841376470
                </a>
              </div>
              <div className="flex flex-col items-center gap-1 bg-[#faf8f5]/5 rounded-xl p-4 border border-[#faf8f5]/10">
                <Mail className="w-5 h-5 text-[#d4a574]" />
                <span className="text-[#faf8f5]/60 text-xs">Email</span>
                <a href="mailto:himkalaadventure@gmail.com" className="text-[#faf8f5] text-sm font-medium hover:text-[#d4a574]">
                  himkalaadventure@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Tours CTA */}
      <section className="py-12 bg-[#faf8f5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <p className="text-[#5c4a3a] text-sm mb-4">
              Interested in hiking, trekking, or other tours?
            </p>
            <Link href="/">
              <Button className="bg-[#2c1810] hover:bg-[#4a3228] text-[#faf8f5] font-bold rounded-full px-6">
                Visit Himkala Adventure <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
          animation: infinite-scroll-mobile 120s linear infinite;
          width: calc(85vw * ${testimonials.length * 3} + 6rem * ${testimonials.length * 3});
        }

        .animate-infinite-scroll-slow-desktop {
          animation: infinite-scroll-desktop 120s linear infinite;
          width: calc(400px * ${testimonials.length * 3} + 2rem * ${testimonials.length * 3});
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