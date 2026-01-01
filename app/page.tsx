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
  FaStar, 
  FaUsers, 
  FaCompass,
  FaStore,
  FaGlobe,
  FaExternalLinkAlt,
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

  const bookingMessage = encodeURIComponent(
    "Hello! I'm interested in booking the Free Walking Tour. Please let me know when you would organize it."
  );

  const phoneNumber = "+9779841376470";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${bookingMessage}`;
  const smsLink = `sms:${phoneNumber}`;
  const companyWebsite = "https://himkalaadventure.com";

  const highlights = [
    { icon: <GiTempleGate />, text: "Ancient Temples" },
    { icon: <FaStore />, text: "Local Markets" },
    { icon: <FaCompass />, text: "Cultural Insights" },
    { icon: <FaUsers />, text: "Small Groups" },
  ];

  const galleryImages = [
    { src: "/images/ktm_durbar_square-2.jpg", title: "Kathmandu Durbar Square" },
    { src: "/images/swoyambhunath-1.jpg", title: "Swayambhunath (Monkey Temple)" },
    { src: "/images/asan_market-1.jpg", title: "Asan Market" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Optimized for old browsers */}
      <section className="relative w-full h-[100vh] min-h-[600px] sm:h-[85vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${bgImage}')` }}
        >
          {/* Simple overlay - works on all browsers */}
          <div className="absolute inset-0 bg-black opacity-60 sm:opacity-70" />
          {/* Gradient overlay for modern browsers */}
          <div className="absolute inset-0 hidden sm:block bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-4xl"
          >
            {/* Main Title */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
              Free Walking Tour Kathmandu
              <span className="block text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold mt-2 text-white">
                Explore the Soul of Kathmandu
              </span>
            </h1>
            
            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-black/50 rounded-full border border-white/30"
                >
                  <span className="text-white text-base">{item.icon}</span>
                  <span className="text-white font-medium text-sm whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col gap-4 justify-center items-center max-w-md mx-auto"
            >
              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-600 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-green-700 transition-colors"
              >
                <FaWhatsapp className="text-2xl" />
                <span className="flex-1 text-center">Book on WhatsApp</span>
              </a>

              {/* Secondary Buttons */}
              <div className="flex gap-4 w-full">
                <a
                  href="mailto:info@himkalaadventure.com?subject=Free%20Walking%20Tour%20Booking&body=Hello%20Himkala%20Adventure%20Team,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20Free%20Walking%20Tour.%20Please%20let%20me%20know%20available%20dates%20and%20times.%0D%0A%0D%0AThank%20you!"
                  className="inline-flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-blue-600 text-white text-base font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow"
                >
                  <FaEnvelope className="text-lg" />
                  <span>Email</span>
                </a>

                <a
                  href={companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 flex-1 px-4 py-3 bg-purple-600 text-white text-base font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow"
                >
                  <FaGlobe className="text-lg" />
                  <span>Website</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"
          >
            <div className="w-full">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-100 rounded-full">
                <FaStar className="text-yellow-500" />
                <span className="font-semibold text-blue-800 text-sm">
                  Nepal's First Free Walking Tour
                </span>
              </div>
              
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Experience Kathmandu Like Never Before
              </h2>
              
              <p className="text-base text-gray-800 mb-6 leading-relaxed font-medium bg-blue-50 p-4 rounded-lg">
                Join us for an unforgettable journey through the heart of Nepal's capital. 
                Our Free Walking Tour brings you face-to-face with centuries of history, 
                vibrant culture, and warm hospitality.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <GiTempleGate className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-1">Iconic Landmarks</h3>
                    <p className="text-gray-700 text-sm">Visit ancient temples, historic squares, and spiritual sites</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <FaStore className="text-purple-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base mb-1">Local Markets</h3>
                    <p className="text-gray-700 text-sm">Experience the vibrant atmosphere of traditional bazaars</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full mt-8 lg:mt-0">
              <div className="bg-blue-600 rounded-xl p-1 shadow-lg">
                <div className="bg-white rounded-xl p-5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                      <FaClock className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Tour Schedule</h3>
                      <p className="text-gray-600">Daily tours available</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg text-gray-900">Morning Tour</h4>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          Most Popular
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-blue-600 mb-1">9:00 AM - 1:00 PM</p>
                      <p className="text-gray-600 text-sm">Perfect for morning explorers</p>
                    </div>
                    
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Afternoon Tour</h4>
                      <p className="text-2xl font-bold text-purple-600 mb-1">2:00 PM - 6:00 PM</p>
                      <p className="text-gray-600 text-sm">Ideal for afternoon adventurers</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-gray-800 text-sm font-semibold">
                      <FaMapMarkerAlt className="text-blue-500" />
                      <span>Starting Point: </span>
                      <span className="text-blue-600">Garden of Dreams, Thamel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-4 sm:py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-blue-100 rounded-full">
              <FaCamera className="text-blue-600" />
              <span className="font-semibold text-blue-800 text-sm">Visual Journey</span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Discover Kathmandu Through Our Lens
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto px-2 font-medium">
              A glimpse of what awaits you on our walking tour
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70">
                    <h3 className="text-lg font-bold text-white mb-1">{image.title}</h3>
                    <p className="text-blue-200 text-xs">Featured on our walking tour</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <div className="bg-blue-600 rounded-xl p-1 shadow-lg">
              <div className="bg-black rounded-xl overflow-hidden">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    src="https://www.youtube.com/embed/BjfCd9C2uS4"
                    title="Free Walking Tour in Kathmandu"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border-0"
                  />
                </div>
                <div className="p-4 text-center bg-blue-900/50">
                  <h3 className="text-xl font-bold text-white mb-2">Watch Our Tour Experience</h3>
                  <p className="text-blue-200 text-sm">See what our guests experience on the Free Walking Tour</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-12 px-4 sm:py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mb-4">
              Reserve Your Spot Today
            </h2>
            <p className="text-base text-blue-200 max-w-3xl mx-auto font-medium">
              Join our Free Walking Tour and experience the magic of Kathmandu
            </p>
          </motion.div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-4 border border-gray-700 shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-sm mb-1">Email Us</h4>
                    <div className="space-y-1">
                      <a 
                        href="mailto:info@himkalaadventure.com" 
                        className="text-blue-300 hover:text-white transition-colors block text-xs hover:underline"
                      >
                        info@himkalaadventure.com
                      </a>
                      <a 
                        href="mailto:himkalaadventure@gmail.com" 
                        className="text-blue-300 hover:text-white transition-colors block text-xs hover:underline"
                      >
                        himkalaadventure@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
                    <FaWhatsapp className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-sm mb-1">WhatsApp Booking</h4>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-300 transition-colors block text-base font-bold"
                    >
                      +977 984-1376470
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-sm mb-1">Meeting Point</h4>
                    <p className="text-blue-300 text-xs">Garden of Dreams, Thamel, Kathmandu</p>
                    <p className="text-blue-400 text-xs mt-1">Look for our guide with the Himkala Adventure sign</p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
                    <FaGlobe className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-sm mb-1">Company Website</h4>
                    <a 
                      href={companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-white transition-colors block text-xs hover:underline"
                    >
                      himkalaadventure.com
                    </a>
                    <p className="text-blue-400 text-xs mt-1">Explore all our tours and services</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-700 rounded-xl p-4 shadow-xl mt-6 lg:mt-0"
            >
              <h3 className="text-xl font-bold text-white mb-4">Quick Booking Options</h3>
              
              <div className="space-y-4">
                {/* Benefits */}
                <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600">
                  <h4 className="text-lg font-semibold text-white mb-3">Why Book With Us?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-blue-100 text-xs">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Licensed and experienced local guides</span>
                    </li>
                    <li className="flex items-center gap-2 text-blue-100 text-xs">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Small group sizes for personal attention</span>
                    </li>
                    <li className="flex items-center gap-2 text-blue-100 text-xs">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span>Flexible scheduling - Book anytime</span>
                    </li>
                  </ul>
                </div>

                {/* Primary Booking Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors text-sm shadow"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span className="flex-1 text-center">WhatsApp</span>
                  </a>
                  
                  <a
                    href="mailto:info@himkalaadventure.com?subject=Free%20Walking%20Tour%20Booking&body=Hello%20Himkala%20Adventure%20Team,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20Free%20Walking%20Tour.%20Please%20let%20me%20know%20available%20dates%20and%20times.%0D%0A%0D%0AThank%20you!"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-sm shadow"
                  >
                    <FaEnvelope className="text-lg" />
                    <span className="flex-1 text-center">Email</span>
                  </a>
                </div>

                {/* SMS Button */}
                <div className="mt-2">
                  <a
                    href={smsLink}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition-colors text-sm border border-gray-600"
                  >
                    <FaPhone className="text-lg" />
                    <span>Send Text Message</span>
                    <span className="text-xs bg-gray-600 px-2 py-0.5 rounded">SMS</span>
                  </a>
                </div>

                {/* Website Button */}
                <div className="mt-4">
                  <a
                    href={companyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition-colors text-sm border border-gray-600"
                  >
                    <FaGlobe className="text-lg" />
                    <span>Explore Company Page</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Closing Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gray-800 rounded-full px-5 py-3 inline-block">
              <p className="text-lg font-bold text-white">
                Namaste 🙏 We can't wait to show you our beautiful city!
              </p>
              <p className="text-blue-300 mt-1 text-sm font-medium">
                - The Himkala Adventure Team
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Call to Action Footer */}
      <div className="sticky bottom-0 z-50 lg:hidden">
        <div className="bg-blue-700 text-white p-3 shadow-lg">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate">Free Walking Tour Kathmandu</p>
              <p className="text-xs text-blue-200 truncate">Book now with one tap</p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-lg font-bold text-sm whitespace-nowrap ml-3"
            >
              <FaWhatsapp />
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}