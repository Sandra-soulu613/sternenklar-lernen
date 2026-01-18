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
  Users,
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
    icon: <Landmark className="w-6 h-6" />,
    title: "Malla Period Architecture",
    description: "Hidden and not-so-hidden relics of Kathmandu's Golden Age for art and architecture",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Tibetan Buddhist Monastery",
    description: "Visit a typical monastery with traditional craft shops and religious artifacts",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Newari Courtyards & Bahis",
    description: "Explore typical Newari courtyards, Bahis, Biharas, and ancient monasteries",
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Bustling Local Markets",
    description: "Handicrafts, thankas, beads, Nepali fabric, copper pots, spices - better value than Thamel!",
  },
  {
    icon: <Footprints className="w-6 h-6" />,
    title: "Freak Street (Optional)",
    description: "The former tourist hub named after the 'freaky' hippies of the 1960s",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Sacred Bishnumati River",
    description: "Similar to the Ganges, where locals perform cremation ceremonies",
  },
];

const tourStops = [
  {
    name: "Garden of Dreams",
    type: "Starting Point",
    image: "https://images.unsplash.com/photo-1582654291505-56e9c2e62e7c?q=80&w=2070&auto=format&fit=crop",
    description: "Meet your guide outside this neo-classical European garden, a peaceful oasis in the heart of Thamel.",
  },
  {
    name: "Kathesimbhu Stupa",
    type: "Buddhist Heritage",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=2070&auto=format&fit=crop",
    description: "A smaller replica of Swayambhunath, surrounded by monasteries and prayer wheels in the heart of the old city.",
  },
  {
    name: "Glass Beads Market",
    type: "Cultural Experience",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=2070&auto=format&fit=crop",
    description: "For generations, Kathmandu's Muslim minority have made colorful glass beads for Hindu ceremonies here.",
  },
  {
    name: "Indra Chowk Market",
    type: "Local Life",
    image: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?q=80&w=2070&auto=format&fit=crop",
    description: "One of Kathmandu's busiest intersections, filled with temples, shrines, and vibrant market stalls.",
  },
  {
    name: "Durbar Square Area",
    type: "UNESCO Heritage",
    image: "https://images.unsplash.com/photo-1558799401-1dcba79f095c?q=80&w=2070&auto=format&fit=crop",
    description: "Pass around the historic palace square with its stunning Malla-era temples and architecture.",
  },
  {
    name: "Newari Neighbourhood",
    type: "Hidden Gem",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=2032&auto=format&fit=crop",
    description: "Wander through sleepy traditional streets where time seems to have stood still for centuries.",
  },
  {
    name: "Vishnumati River",
    type: "Sacred Site",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    description: "Witness the local cremation ghats similar to the famous Ganges ghats in India.",
  },
  {
    name: "Swayambhunath (Monkey Temple)",
    type: "Final Destination",
    image: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2048&auto=format&fit=crop",
    description: "Climb 424 steps to the ancient stupa overlooking the entire Kathmandu Valley. Spectacular!",
  },
];

const specialExperiences = [
  {
    name: "Kathe Swoyambhu",
    image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=2070&auto=format&fit=crop",
    description: "One of many embodiments of how different religions and cultures coexist peacefully in Nepal. Not only is it very photogenic, it also serves as a great place to learn about Hindu, Buddhist and Tibetan cultures all at one place. There are small stupas around the main stupa with symbolic paintings.",
  },
  {
    name: "Local Lassi Experience",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop",
    description: "Try the famous local lassi near the glass-bead market! Made with sugar, churned yogurt and garnished with dried fruits and concentrated milk (khuwa). A refreshing must-try drink - small glass NPR 40, large NPR 70.",
    price: "NPR 40-70",
  },
  {
    name: "Glass Beads Market",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=2070&auto=format&fit=crop",
    description: "A spectacle to behold! For generations, Kathmandu's Muslim minority have made and sold colourful glass beads for Hindu ceremonies. The iconic green glass bead necklaces are given to local brides during weddings.",
  },
  {
    name: "Monkey Temple",
    image: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2048&auto=format&fit=crop",
    description: "Called 'Monkey Temple' due to hundreds of resident monkeys! After reconstruction, climb 424 steps (previously 365, one for each day) to this aesthetic site overlooking the valley. Shop souvenirs or witness the majestic Kathmandu skyline.",
  },
];

const reviews = [
  {
    name: "Emma Thompson",
    country: "Australia",
    rating: 5,
    text: "Absolutely incredible tour! Our guide's knowledge of local history and culture was remarkable. The hidden alleys and local experiences were something I'd never have found on my own.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Marcus Weber",
    country: "Germany",
    rating: 5,
    text: "Best walking tour I've ever taken. The guide had decades of experience and it showed. From the glass bead market to the monkey temple - every stop was fascinating.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Priya Sharma",
    country: "India",
    rating: 5,
    text: "Even as someone from the region, I learned so much about Kathmandu's history. The local lassi was delicious and the views from Monkey Temple were breathtaking!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
];

export default function FreeWalkingTourPage() {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Hero Section - Unique warm design */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558799401-1dcba79f095c?q=80&w=2070&auto=format&fit=crop"
            alt="Kathmandu Durbar Square"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c1810]/70 via-[#2c1810]/40 to-[#faf8f5]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c1810]/60 via-transparent to-transparent" />

        <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-[#d4a574]/20 backdrop-blur-md border border-[#d4a574]/40 rounded-full px-5 py-2.5 mb-8"
              >
                <Award className="w-5 h-5 text-[#d4a574]" />
                <span className="text-[#faf8f5] font-semibold text-sm tracking-wide">First Free Walking Tour in Nepal</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#faf8f5] leading-[1.05] mb-6">
                Free Walking Tour
                <span className="block text-[#d4a574] italic">Kathmandu</span>
              </h1>

              <p className="text-xl md:text-2xl text-[#faf8f5]/90 mb-10 leading-relaxed max-w-2xl font-light">
                Discover the soul of Nepal&apos;s capital through ancient temples, hidden courtyards, 
                and vibrant markets with a guide who has decades of experience.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center gap-3 bg-[#faf8f5]/10 backdrop-blur-md rounded-full px-5 py-3 border border-[#faf8f5]/20">
                  <Clock className="w-5 h-5 text-[#d4a574]" />
                  <span className="text-[#faf8f5] font-medium">4-5 Hours</span>
                </div>
                <div className="flex items-center gap-3 bg-[#faf8f5]/10 backdrop-blur-md rounded-full px-5 py-3 border border-[#faf8f5]/20">
                  <Calendar className="w-5 h-5 text-[#d4a574]" />
                  <span className="text-[#faf8f5] font-medium">Daily 9 AM & 2 PM</span>
                </div>
                <div className="flex items-center gap-3 bg-[#faf8f5]/10 backdrop-blur-md rounded-full px-5 py-3 border border-[#faf8f5]/20">
                  <MapPin className="w-5 h-5 text-[#d4a574]" />
                  <span className="text-[#faf8f5] font-medium">Garden of Dreams</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#d4a574] hover:bg-[#c49464] text-[#2c1810] font-bold h-14 px-10 rounded-full text-lg shadow-2xl shadow-[#d4a574]/30">
                    <Heart className="mr-2 w-5 h-5" /> Book Your Spot
                  </Button>
                </Link>
                <a href="#tour-details">
                  <Button size="lg" variant="outline" className="bg-transparent text-[#faf8f5] border-[#faf8f5]/40 hover:bg-[#faf8f5]/10 h-14 px-10 rounded-full text-lg">
                    Learn More <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#2c1810]/60">Scroll to Discover</span>
          <ArrowRight className="rotate-90 w-5 h-5 text-[#2c1810]/40" />
        </motion.div>
      </section>

      {/* Stats Banner */}
      <section className="relative -mt-20 z-10 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#2c1810] rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "350+", label: "TripAdvisor Reviews", icon: <MessageCircle className="w-5 h-5" /> },
                { value: "94%", label: "Excellent Rating", icon: <Star className="w-5 h-5" /> },
                { value: "7", label: "Days a Week", icon: <Calendar className="w-5 h-5" /> },
                { value: "FREE", label: "Tips-Based Model", icon: <Gift className="w-5 h-5" /> },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#d4a574]/20 rounded-xl text-[#d4a574] mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#faf8f5] mb-1">{stat.value}</div>
                  <div className="text-xs text-[#faf8f5]/60 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="tour-details" className="py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 bg-[#d4a574]/20 text-[#8b5a3c] border-[#d4a574]/40 py-2 px-4 font-semibold">
                <Sparkles className="w-4 h-4 mr-2" /> The First of Its Kind
              </Badge>
              <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] mb-6 leading-tight">
                Experience Kathmandu<br />
                <span className="text-[#8b5a3c] italic">Like a Local</span>
              </h2>
              <div className="prose prose-lg prose-stone">
                <p className="text-[#5c4a3a] leading-relaxed mb-6">
                  <strong>Free Tour Kathmandu</strong> is the first of its kind in the Kathmandu Valley. 
                  While other walking tours exist, this is the only one that provides a free glimpse of 
                  the highlights of Kathmandu, led and narrated by a dedicated tour guide with 
                  <span className="text-[#8b5a3c] font-semibold"> decades of experience</span>.
                </p>
                <p className="text-[#5c4a3a] leading-relaxed mb-6">
                  Winding through the heart of the old centre of Kathmandu, the Free Walking Tour encompasses 
                  some of the iconic <strong>temples, stupas, monasteries, palaces</strong> and local 
                  <strong> Newar architecture</strong> that define Nepal&apos;s capital city.
                </p>
                <p className="text-[#5c4a3a] leading-relaxed">
                  The tour passes through the southern part of Thamel via the Kathesimbhu stupa and 
                  surrounding Buddhist monasteries; through &apos;local&apos; streets towards Indra Chowk market; 
                  around Durbar Square; through sleepy Newar neighbourhoods to the sacred Vishnumati River; 
                  and finally finishing at the top of the picturesque <strong>&apos;Monkey Temple&apos;</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=2070&auto=format&fit=crop"
                      alt="Buddhist Stupa"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1558799401-1dcba79f095c?q=80&w=2070&auto=format&fit=crop"
                      alt="Durbar Square"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2048&auto=format&fit=crop"
                      alt="Swayambhunath"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=2070&auto=format&fit=crop"
                      alt="Local Market"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#2c1810] text-[#faf8f5] rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#d4a574] rounded-xl flex items-center justify-center">
                    <Footprints className="w-7 h-7 text-[#2c1810]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4-5 Hours</div>
                    <div className="text-sm text-[#faf8f5]/70">of Discovery</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tour Times */}
      <section className="py-16 bg-gradient-to-r from-[#d4a574]/10 to-[#e8d5c4]/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-none shadow-xl rounded-3xl overflow-hidden h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f5e6d3] to-[#e8d5c4] rounded-2xl flex items-center justify-center mb-6">
                    <Sun className="w-8 h-8 text-[#8b5a3c]" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#2c1810] mb-3">Morning Tour</h3>
                  <div className="text-4xl font-bold text-[#8b5a3c] mb-4">9:00 AM</div>
                  <p className="text-[#5c4a3a] leading-relaxed">
                    Start your day with the cool morning air as you explore the awakening streets of Kathmandu. 
                    Perfect for photography with soft morning light.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-none shadow-xl rounded-3xl overflow-hidden h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2c1810] to-[#4a3228] rounded-2xl flex items-center justify-center mb-6">
                    <Sunset className="w-8 h-8 text-[#d4a574]" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#2c1810] mb-3">Afternoon Tour</h3>
                  <div className="text-4xl font-bold text-[#8b5a3c] mb-4">2:00 PM</div>
                  <p className="text-[#5c4a3a] leading-relaxed">
                    Experience the bustling afternoon markets and finish with a magical sunset view 
                    from Swayambhunath over the Kathmandu Valley.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <div className="inline-flex items-center gap-2 bg-[#2c1810] text-[#faf8f5] rounded-full px-6 py-3">
              <MapPin className="w-5 h-5 text-[#d4a574]" />
              <span className="font-medium">Meeting Point: Outside Garden of Dreams, Thamel</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trip Highlights */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-sm font-bold text-[#8b5a3c] uppercase tracking-[0.25em] mb-4">Trip Highlights</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#2c1810] mb-6">
              What You&apos;ll Experience
            </h3>
            <p className="text-[#5c4a3a] text-lg leading-relaxed">
              A journey through centuries of history, culture, and living traditions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all rounded-2xl overflow-hidden h-full group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#d4a574]/20 to-[#e8d5c4]/40 rounded-xl flex items-center justify-center text-[#8b5a3c] mb-5 group-hover:bg-[#d4a574] group-hover:text-[#2c1810] transition-all">
                      {highlight.icon}
                    </div>
                    <h4 className="text-lg font-bold text-[#2c1810] mb-2">{highlight.title}</h4>
                    <p className="text-[#5c4a3a] text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Route */}
      <section className="py-24 bg-[#2c1810] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#d4a574] rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8b5a3c] rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-sm font-bold text-[#d4a574] uppercase tracking-[0.25em] mb-4">The Route</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#faf8f5] mb-6">
              Your Journey Through<br />Ancient Kathmandu
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourStops.map((stop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={stop.image}
                    alt={stop.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-[#d4a574] rounded-full flex items-center justify-center text-[#2c1810] font-bold">
                      {i + 1}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-[#d4a574]/20 text-[#d4a574] border-none text-xs mb-2">
                      {stop.type}
                    </Badge>
                    <h4 className="text-lg font-bold text-[#faf8f5]">{stop.name}</h4>
                  </div>
                </div>
                <p className="text-[#faf8f5]/70 text-sm leading-relaxed">{stop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Experiences */}
      <section className="py-24 bg-gradient-to-b from-[#faf8f5] to-[#f5efe8]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-sm font-bold text-[#8b5a3c] uppercase tracking-[0.25em] mb-4">Must-See Experiences</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#2c1810] mb-6">
              Unique Cultural Encounters
            </h3>
          </motion.div>

          <div className="space-y-8">
            {specialExperiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className={`bg-white border-none shadow-xl rounded-3xl overflow-hidden ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`flex flex-col lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <div className="lg:w-2/5 relative h-64 lg:h-auto min-h-[300px]">
                      <Image
                        src={exp.image}
                        alt={exp.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                      <h4 className="text-2xl md:text-3xl font-serif text-[#2c1810] mb-4">{exp.name}</h4>
                      <p className="text-[#5c4a3a] leading-relaxed mb-4">{exp.description}</p>
                      {exp.price && (
                        <div className="inline-flex items-center gap-2 bg-[#d4a574]/20 text-[#8b5a3c] rounded-full px-4 py-2 w-fit">
                          <Coffee className="w-4 h-4" />
                          <span className="font-semibold">{exp.price}</span>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#d4a574] text-[#d4a574]" />
                ))}
              </div>
              <span className="text-[#8b5a3c] font-bold text-xl">94% Excellent</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] mb-6">
              What Travelers Say
            </h2>
            <p className="text-[#5c4a3a] text-lg leading-relaxed">
              Out of over 350 reviews on TripAdvisor, 94% rate the Free Walking Tour as &apos;Excellent&apos;. 
              Visitors from around the world - both first-timers and seasoned Nepal travelers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-none shadow-lg h-full rounded-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <Quote className="w-10 h-10 text-[#d4a574]/30 mb-4" />
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#d4a574] text-[#d4a574]" />
                      ))}
                    </div>
                    <p className="text-[#5c4a3a] leading-relaxed mb-6 italic">&quot;{review.text}&quot;</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#d4a574]">
                        <Image src={review.avatar} alt={review.name} width={48} height={48} className="object-cover" />
                      </div>
                      <div>
                        <div className="font-bold text-[#2c1810]">{review.name}</div>
                        <div className="text-sm text-[#8b5a3c] flex items-center gap-1">
                          <Globe className="w-3 h-3" /> {review.country}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-24 bg-gradient-to-br from-[#e8d5c4]/30 to-[#faf8f5]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-[#2c1810] mb-6">
                What&apos;s Included
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-[#2c1810] to-[#4a3228] border-none shadow-xl h-full rounded-3xl overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[#faf8f5] mb-6 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#d4a574]" /> Cost Includes
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-[#faf8f5]/90">
                        <CheckCircle2 className="w-5 h-5 text-[#d4a574] shrink-0 mt-0.5" />
                        <span>Free Walking Tour through Kathmandu with an experienced local guide</span>
                      </li>
                      <li className="flex items-start gap-3 text-[#faf8f5]/90">
                        <CheckCircle2 className="w-5 h-5 text-[#d4a574] shrink-0 mt-0.5" />
                        <span>4-5 hours exploring Hindu temples, Buddhist stupas, and shrines</span>
                      </li>
                      <li className="flex items-start gap-3 text-[#faf8f5]/90">
                        <CheckCircle2 className="w-5 h-5 text-[#d4a574] shrink-0 mt-0.5" />
                        <span>In-depth cultural insights and historical commentary</span>
                      </li>
                      <li className="flex items-start gap-3 text-[#faf8f5]/90">
                        <CheckCircle2 className="w-5 h-5 text-[#d4a574] shrink-0 mt-0.5" />
                        <span>Local neighborhood experiences off the tourist trail</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-[#d4a574]/20 shadow-xl h-full rounded-3xl overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[#2c1810] mb-6 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-[#8b5a3c]" /> Cost Excludes
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-[#5c4a3a]">
                        <XCircle className="w-5 h-5 text-[#8b5a3c]/50 shrink-0 mt-0.5" />
                        <span>Personal expenses like tea, coffee, mineral water etc.</span>
                      </li>
                      <li className="flex items-start gap-3 text-[#5c4a3a]">
                        <XCircle className="w-5 h-5 text-[#8b5a3c]/50 shrink-0 mt-0.5" />
                        <span>Entrance fees at heritage sites (200 NPR at Monkey Temple)</span>
                      </li>
                      <li className="flex items-start gap-3 text-[#5c4a3a]">
                        <XCircle className="w-5 h-5 text-[#8b5a3c]/50 shrink-0 mt-0.5" />
                        <span>Local lassi or snacks (optional but recommended!)</span>
                      </li>
                    </ul>

                    <div className="mt-8 p-5 bg-[#d4a574]/10 rounded-2xl border border-[#d4a574]/20">
                      <div className="flex items-start gap-3">
                        <Gift className="w-6 h-6 text-[#8b5a3c] shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[#2c1810] mb-1">Tips-Based Model</h4>
                          <p className="text-sm text-[#5c4a3a]">
                            This tour operates on a tips-based model. You award the time and experience 
                            your guide shares with you based on your satisfaction.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-to-r from-[#d4a574]/20 to-[#e8d5c4]/30 rounded-3xl p-8 md:p-10 border border-[#d4a574]/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[#d4a574] rounded-xl flex items-center justify-center shrink-0">
                <Smile className="w-7 h-7 text-[#2c1810]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2c1810] mb-3">Important Note</h3>
                <p className="text-[#5c4a3a] leading-relaxed mb-4">
                  Please confirm your spot prior to the Free Walking Tour. At the end of the tour, 
                  your guide will either walk you back to Thamel or direct you to where to get a bus or taxi.
                </p>
                <p className="text-[#8b5a3c] font-semibold">
                  Namaste!!! 🙏
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[#2c1810] relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571401835393-8c5f35328320?q=80&w=2048&auto=format&fit=crop"
            alt="Monkey Temple"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c1810]/95 to-[#2c1810]/80" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-serif text-[#faf8f5] mb-8 leading-tight">
                Ready to Explore<br />
                <span className="text-[#d4a574] italic">Kathmandu?</span>
              </h2>
              <p className="text-[#faf8f5]/80 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Book your free walking tour today and discover the hidden treasures of Nepal&apos;s ancient capital 
                with a guide who truly knows every secret corner.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#d4a574] hover:bg-[#c49464] text-[#2c1810] font-bold h-16 px-12 rounded-full text-lg shadow-2xl shadow-[#d4a574]/30">
                    <Heart className="mr-2 w-5 h-5" /> Book Your Tour
                  </Button>
                </Link>
                <a href="https://www.facebook.com/FreeWalkingTourKathmandu" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="bg-transparent text-[#faf8f5] border-[#faf8f5]/40 hover:bg-[#faf8f5]/10 h-16 px-12 rounded-full text-lg">
                    <Facebook className="mr-2 w-5 h-5" /> Follow on Facebook
                  </Button>
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="flex flex-col items-center gap-2 bg-[#faf8f5]/5 rounded-2xl p-5 border border-[#faf8f5]/10">
                  <Phone className="w-6 h-6 text-[#d4a574]" />
                  <span className="text-[#faf8f5]/60 text-sm">Phone</span>
                  <a href="tel:+9779841376470" className="text-[#faf8f5] font-medium hover:text-[#d4a574]">
                    +977 9841376470
                  </a>
                </div>
                <div className="flex flex-col items-center gap-2 bg-[#faf8f5]/5 rounded-2xl p-5 border border-[#faf8f5]/10">
                  <Mail className="w-6 h-6 text-[#d4a574]" />
                  <span className="text-[#faf8f5]/60 text-sm">Email</span>
                  <a href="mailto:himkalaadventure@gmail.com" className="text-[#faf8f5] font-medium hover:text-[#d4a574] text-sm">
                    himkalaadventure@gmail.com
                  </a>
                </div>
                <div className="flex flex-col items-center gap-2 bg-[#faf8f5]/5 rounded-2xl p-5 border border-[#faf8f5]/10">
                  <Facebook className="w-6 h-6 text-[#d4a574]" />
                  <span className="text-[#faf8f5]/60 text-sm">Facebook</span>
                  <span className="text-[#faf8f5] font-medium text-sm">Free Walking Tour Kathmandu</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Tours CTA */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[#5c4a3a] mb-6">
              Interested in hiking, trekking, or other tours around Nepal, Tibet, Bhutan, or India?
            </p>
            <Link href="/">
              <Button className="bg-[#2c1810] hover:bg-[#4a3228] text-[#faf8f5] font-bold rounded-full px-8">
                Visit Himkala Adventure <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
