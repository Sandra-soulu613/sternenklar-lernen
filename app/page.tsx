"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, ChangeEvent } from "react";
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaCamera, 
  FaUpload, 
  FaStar, 
  FaUsers, 
  FaCompass,
  FaStore,
  FaGlobe,
  FaExternalLinkAlt,
  FaBars,
  FaPhone
} from "react-icons/fa";
import { GiTempleGate } from "react-icons/gi";

export default function Home() {
  const [bgImage, setBgImage] = useState("/images/review-2.jpg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === "string") {
          setBgImage(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Pre-made message for WhatsApp/SMS
  const bookingMessage = encodeURIComponent(
    "Hello! I'm interested in booking the Free Walking Tour. Please let me know when you would organize it."
  );

  // Phone number and links
  const phoneNumber = "+9779841376470";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${bookingMessage}`;
  const smsLink = `sms:${phoneNumber}`;
  const companyWebsite = "https://himkalaadventure.com";

  // Tour highlights
  const highlights = [
    { icon: <GiTempleGate />, text: "Ancient Temples" },
    { icon: <FaStore />, text: "Local Markets" },
    { icon: <FaCompass />, text: "Cultural Insights" },
    { icon: <FaUsers />, text: "Small Groups" },
  ];

  // Gallery images
  const galleryImages = [
    { src: "/images/ktm_durbar_square-2.jpg", title: "Kathmandu Durbar Square" },
    { src: "/images/swoyambhunath-1.jpg", title: "Swayambhunath (Monkey Temple)" },
    { src: "/images/asan_market-1.jpg", title: "Asan Market" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Mobile-Optimized Hero Section */}
      <section className="relative w-full h-[90svh] sm:h-[85vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url('${bgImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/10" />
        </div>

       

        {/* Mobile-Optimized Hero Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-5xl px-2"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl tracking-tight leading-tight">
              Free Walking Tour Kathmandu
              <span className="block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mt-1 sm:mt-2 text-blue-100">
                Explore the Soul of Kathmandu
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-base xs:text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2"
            >
              Discover ancient temples, vibrant markets, and hidden gems with experienced local guides
            </motion.p>

            {/* Mobile-Optimized Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <span className="text-white text-sm sm:text-lg">{item.icon}</span>
                  <span className="text-white font-medium text-xs sm:text-sm whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Mobile-Optimized CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col gap-3 sm:gap-4 justify-center items-center px-2"
            >
              {/* WhatsApp Booking Button - Mobile Optimized */}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 w-full max-w-sm px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-base sm:text-lg font-semibold rounded-xl sm:rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:from-green-600 hover:to-green-700 active:scale-95"
              >
                <FaWhatsapp className="text-xl sm:text-2xl" />
                <span className="flex-1 text-center">Book on WhatsApp</span>
              </motion.a>

              {/* Secondary Button Group */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-sm">
                <motion.a
                  href="mailto:info@himkalaadventure.com?subject=Free%20Walking%20Tour%20Booking&body=Hello%20Himkala%20Adventure%20Team,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20Free%20Walking%20Tour.%20Please%20let%20me%20know%20available%20dates%20and%20times.%0D%0A%0D%0AThank%20you!"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm sm:text-base font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 active:scale-95 shadow-lg"
                >
                  <FaEnvelope className="text-lg" />
                  <span className="hidden xs:inline">Email</span>
                </motion.a>

                <motion.a
                  href={companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm sm:text-base font-semibold rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-300 active:scale-95 shadow-lg"
                >
                  <FaGlobe className="text-lg" />
                  <span>Website</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:w-1 sm:h-3 bg-white/70 rounded-full mt-1.5 sm:mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Mobile-Optimized About Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"
          >
            <div className="w-full">
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 rounded-full">
                <FaStar className="text-yellow-500 text-sm sm:text-base" />
                <span className="font-semibold text-blue-800 text-xs sm:text-sm">Nepal's First Free Walking Tour</span>
              </div>
              
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Experience Kathmandu Like Never Before
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                Join us for an unforgettable journey through the heart of Nepal's capital. 
                Our Free Walking Tour brings you face-to-face with centuries of history, 
                vibrant culture, and warm hospitality.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <GiTempleGate className="text-blue-600 text-base sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Iconic Landmarks</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Visit ancient temples, historic squares, and spiritual sites</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <FaStore className="text-purple-600 text-base sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Local Markets</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">Experience the vibrant atmosphere of traditional bazaars</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl sm:rounded-3xl p-0.5 sm:p-1 shadow-xl sm:shadow-2xl">
                <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <FaClock className="text-white text-lg sm:text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Tour Schedule</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Daily tours available</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-100">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg sm:text-xl text-gray-900">Morning Tour</h4>
                        <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold">Most Popular</span>
                      </div>
                      <p className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">9:00 AM - 1:00 PM</p>
                      <p className="text-gray-600 text-sm sm:text-base">Perfect for morning explorers</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-purple-100">
                      <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Afternoon Tour</h4>
                      <p className="text-xl sm:text-2xl font-bold text-purple-600 mb-1">2:00 PM - 6:00 PM</p>
                      <p className="text-gray-600 text-sm sm:text-base">Ideal for afternoon adventurers</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                    <div className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                      <FaMapMarkerAlt className="text-blue-500 text-base sm:text-lg" />
                      <span className="font-medium">Starting Point: </span>
                      <span>Garden of Dreams, Thamel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile-Optimized Gallery Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-100 rounded-full">
              <FaCamera className="text-blue-600 text-sm sm:text-base" />
              <span className="font-semibold text-blue-800 text-xs sm:text-sm">Visual Journey</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Discover Kathmandu Through Our Lens
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              A glimpse of what awaits you on our walking tour
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">{image.title}</h3>
                    <p className="text-blue-200 text-xs sm:text-sm">Featured on our walking tour</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile-Optimized Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-8 sm:mt-12 md:mt-16"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-0.5 sm:p-1 shadow-xl sm:shadow-2xl">
              <div className="bg-black rounded-xl sm:rounded-2xl overflow-hidden">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    src="https://www.youtube.com/embed/BjfCd9C2uS4"
                    title="Free Walking Tour in Kathmandu"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border-0"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8 text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">
                    Watch Our Tour Experience
                  </h3>
                  <p className="text-blue-200 text-sm sm:text-base">
                    See what our guests experience on the Free Walking Tour
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile-Optimized Booking Section */}
      <section id="booking" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Reserve Your Spot Today
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-200 max-w-3xl mx-auto">
              Join our Free Walking Tour and experience the magic of Kathmandu
            </p>
          </motion.div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Email */}
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-white text-base sm:text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-sm sm:text-base">Email Us</h4>
                    <div className="space-y-1 mt-1 overflow-hidden">
                      <a 
                        href="mailto:info@himkalaadventure.com" 
                        className="text-blue-200 hover:text-white transition-colors block text-xs sm:text-sm truncate"
                      >
                        info@himkalaadventure.com
                      </a>
                      <a 
                        href="mailto:himkalaadventure@gmail.com" 
                        className="text-blue-200 hover:text-white transition-colors block text-xs sm:text-sm truncate"
                      >
                        himkalaadventure@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-white text-base sm:text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-sm sm:text-base">WhatsApp Booking</h4>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:text-white transition-colors block text-sm sm:text-lg font-medium truncate"
                    >
                      +977 984-1376470
                    </a>
                   
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-white text-base sm:text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-sm sm:text-base">Meeting Point</h4>
                    <p className="text-blue-200 text-xs sm:text-sm">Garden of Dreams, Thamel, Kathmandu</p>
                    <p className="text-blue-300 text-xs mt-1">
                      Look for our guide with the Himkala Adventure sign
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                    <FaGlobe className="text-white text-base sm:text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-sm sm:text-base">Company Website</h4>
                    <a 
                      href={companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:text-white transition-colors block text-xs sm:text-sm truncate"
                    >
                      himkalaadventure.com
                    </a>
                    <p className="text-blue-300 text-xs mt-1">
                      Explore all our tours and services
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl mt-6 lg:mt-0"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">Quick Booking Options</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Benefits */}
                <div className="bg-white/10 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20">
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Why Book With Us?</h4>
                  <ul className="space-y-2 sm:space-y-3">
                   
                    <li className="flex items-center gap-2 sm:gap-3 text-blue-100 text-xs sm:text-sm">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs sm:text-sm">✓</span>
                      </div>
                      <span>Licensed and experienced local guides</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3 text-blue-100 text-xs sm:text-sm">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs sm:text-sm">✓</span>
                      </div>
                      <span>Small group sizes for personal attention</span>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3 text-blue-100 text-xs sm:text-sm">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs sm:text-sm">✓</span>
                      </div>
                      <span>Flexible scheduling - Book anytime</span>
                    </li>
                  </ul>
                </div>

                {/* Primary Booking Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {/* WhatsApp Button */}
                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 bg-green-500 text-white font-bold rounded-lg sm:rounded-xl hover:bg-green-600 transition-colors text-sm sm:text-base active:scale-95 shadow-lg"
                  >
                    <FaWhatsapp className="text-lg sm:text-xl" />
                    <span className="flex-1 text-center">WhatsApp</span>
                  </motion.a>
                  
                  {/* Email Button */}
                  <motion.a
                    href="mailto:info@himkalaadventure.com?subject=Free%20Walking%20Tour%20Booking&body=Hello%20Himkala%20Adventure%20Team,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20Free%20Walking%20Tour.%20Please%20let%20me%20know%20available%20dates%20and%20times.%0D%0A%0D%0AThank%20you!"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-4 bg-blue-500 text-white font-bold rounded-lg sm:rounded-xl hover:bg-blue-600 transition-colors text-sm sm:text-base active:scale-95 shadow-lg"
                  >
                    <FaEnvelope className="text-lg sm:text-xl" />
                    <span className="flex-1 text-center">Email</span>
                  </motion.a>
                </div>

                {/* SMS Button */}
                <div className="mt-2">
                  <motion.a
                    href={smsLink}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/20 text-white font-bold rounded-lg sm:rounded-xl hover:bg-white/30 transition-colors text-sm sm:text-base border border-white/30 active:scale-95"
                  >
                    <FaPhone className="text-lg" />
                    <span>Send Text Message</span>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded">SMS</span>
                  </motion.a>
                </div>

                {/* Website Button */}
                <div className="mt-4 sm:mt-6">
                  <motion.a
                    href={companyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/20 text-white font-bold rounded-lg sm:rounded-xl hover:bg-white/30 transition-colors text-sm sm:text-base border border-white/30 active:scale-95"
                  >
                    <FaGlobe className="text-lg" />
                    <span>Explore Company Page</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Closing Message - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-12 sm:mt-16 md:mt-20 text-center"
          >
            <div className="inline-block p-0.5 sm:p-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
              <div className="bg-gray-900 rounded-full px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  Namaste 🙏 We can't wait to show you our beautiful city!
                </p>
                <p className="text-blue-200 mt-1 sm:mt-2 text-sm sm:text-base">
                  - The Himkala Adventure Team
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Call to Action Footer */}
      <div className="sticky bottom-0 z-50 lg:hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 shadow-2xl">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate">Free Walking Tour Kathmandu</p>
              <p className="text-xs text-blue-100 truncate">Book now with one tap</p>
            </div>
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 rounded-lg font-bold text-sm whitespace-nowrap ml-3"
            >
              <FaWhatsapp />
              Book Now
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}