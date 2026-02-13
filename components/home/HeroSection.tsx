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

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Trust Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-balozy-gold/10 border border-balozy-gold/20 text-balozy-gold px-6 py-2 rounded-full text-sm font-bold tracking-wide">
            <Star className="w-4 h-4 fill-balozy-gold text-balozy-gold" />
            TRUSTED BY 50,000+ HOMEOWNERS
          </div>
        </div>

        {/* Hero Headline */}
        <h1
          className={`${outfit.className} text-6xl sm:text-7xl lg:text-8xl font-semibold text-center mb-6 leading-tight tracking-tight text-gray-900`}
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
              className="text-balozy-gold inline-block"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 font-medium">
          Find and book top-rated local professionals for plumbing, electrical,
          cleaning, and more. Transparent pricing, verified pros.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 max-w-4xl mx-auto flex flex-col md:flex-row gap-4 border border-gray-100">
          <div className="flex-[1.5] flex items-center gap-3 px-5 py-4 bg-gray-50 rounded-2xl transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-balozy-gold/20">
            <Search className="w-5 h-5 text-balozy-gold" />
            <input
              type="text"
              placeholder="What service do you need?"
              className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500 font-medium"
            />
          </div>

          <div className="flex-1 flex items-center gap-3 px-5 py-4 bg-gray-50 rounded-2xl transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-balozy-gold/20">
            <MapPin className="w-5 h-5 text-balozy-gold" />
            <input
              type="text"
              placeholder="San Francisco, CA"
              className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500 font-medium"
            />
          </div>

          <button className="bg-balozy-blue hover:opacity-90 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-xl active:scale-95">
            Search
          </button>
        </div>

        {/* Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          <div className="flex items-center gap-5 bg-white p-7 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-balozy-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 text-balozy-gold" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Verified Pros</h3>
              <p className="text-sm text-gray-600 font-medium">100% background checked</p>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-white p-7 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-balozy-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-7 h-7 text-balozy-blue" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Instant Booking</h3>
              <p className="text-sm text-gray-600 font-medium">Save time, book in seconds</p>
            </div>
          </div>

          <div className="flex items-center gap-5 bg-white p-7 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-balozy-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Star className="w-7 h-7 text-balozy-gold fill-balozy-gold" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Quality Guaranteed</h3>
              <p className="text-sm text-gray-600 font-medium">Happiness guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
