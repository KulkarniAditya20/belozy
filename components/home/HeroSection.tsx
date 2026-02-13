'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outfit } from 'next/font/google';
import { Search, MapPin, Star, Shield, Clock } from 'lucide-react';

// ✅ Font loader at module scope with semibold weight
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['600'], // semibold
});

export default function HeroSection() {
  const words = ['Clean', 'Repaired', 'Upgraded', 'Protected', 'Perfect'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-28 sm:h-36"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveLine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#fcd34d" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path fill="none" stroke="url(#waveLine)" strokeWidth="2"
            d="M0,260 C160,240 320,220 480,230 C640,240 800,280 960,270 C1120,260 1280,240 1440,250" />
        </svg>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Trust Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-100 border-2 border-yellow-300 text-yellow-800 px-6 py-2 rounded-full text-sm font-bold">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            TRUSTED BY 50,000+ HOMEOWNERS
          </div>
        </div>

        {/* Hero Headline */}
        <h1
          className={`${outfit.className} text-6xl sm:text-7xl lg:text-8xl font-semibold text-center mb-6 leading-tight tracking-tight`}
        >
          Your Home, Always
          <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-yellow-400 inline-block"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Find and book top-rated local professionals for plumbing, electrical,
          cleaning, and more. Transparent pricing, verified pros.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-2xl p-3 max-w-4xl mx-auto flex flex-col md:flex-row gap-3">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
            <Search className="w-5 h-5 text-yellow-500" />
            <input
              type="text"
              placeholder="What service do you need?"
              className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500"
            />
          </div>

          <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
            <MapPin className="w-5 h-5 text-yellow-500" />
            <input
              type="text"
              placeholder="San Francisco, CA"
              className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500"
            />
          </div>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl">
            Search
          </button>
        </div>

        {/* Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Verified Pros</h3>
              <p className="text-sm text-gray-600">100% background checked</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Instant Booking</h3>
              <p className="text-sm text-gray-600">Save time, book in seconds</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 text-yellow-600 fill-yellow-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Quality Guaranteed</h3>
              <p className="text-sm text-gray-600">Happiness guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
