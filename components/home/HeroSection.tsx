'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outfit } from 'next/font/google';
import { Search, MapPin, Star, Shield, Clock, ChevronRight } from 'lucide-react';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const WORDS = ['Luxury', 'Peace', 'Quality', 'Comfort', 'Speed'];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [isFocused, setIsFocused] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`relative min-h-[72vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#FFFFFF] ${outfit.className}`}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2.5 bg-amber-50 border border-amber-300 rounded-full px-5 py-2 mb-7 mt-4 shadow-sm"
        >
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-bold text-amber-700 tracking-tight">
            TRUSTED BY 50,000+ HOMEOWNERS
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          className="text-[44px] sm:text-[58px] lg:text-[72px] font-extrabold text-gray-900 leading-[1.02] tracking-tight mb-6"
        >
          Your Home, Always
          <br />
          <div className="relative inline-block h-[1.1em] overflow-hidden align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={WORDS[index]}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 inline-block py-1"
              >
                {WORDS[index]}.
              </motion.span>
            </AnimatePresence>
          </div>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-9 font-medium leading-relaxed"
        >
          Connecting you with vetted, industry-leading professionals.
          <span className="block text-gray-900">
            Experience a higher standard of service.
          </span>
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative max-w-5xl mx-auto mb-12"
        >
          <div
            className="relative bg-[#FCFCFD] rounded-2xl border border-gray-200 transition-all duration-500 p-1.5 flex flex-col md:flex-row items-stretch gap-1.5 shadow-[0_18px_36px_-16px_rgba(0,0,0,0.16)] hover:shadow-[0_22px_44px_-16px_rgba(0,0,0,0.22)]"
          >
            {/* Service Input */}
            <div
              className={`flex-[1.4] flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors ${
                isFocused === 'service' ? 'bg-black/[0.03]' : ''
              }`}
            >
              <Search
                className="w-5 h-5 text-yellow-500 transition-colors"
              />
              <input
                type="text"
                placeholder="What service do you need?"
                onFocus={() => setIsFocused('service')}
                onBlur={() => setIsFocused('')}
                className="w-full bg-transparent outline-none text-gray-900 text-sm sm:text-base font-normal placeholder:text-gray-400"
              />
            </div>

            <div className="hidden md:flex items-center justify-center px-1">
              <div className="relative h-10 w-px bg-gradient-to-b from-transparent via-gray-300/80 to-transparent">
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300/90" />
              </div>
            </div>

            {/* Location Input */}
            <div
              className={`flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors ${
                isFocused === 'location' ? 'bg-black/[0.03]' : ''
              }`}
            >
              <MapPin
                className="w-5 h-5 text-yellow-500 transition-colors"
              />
              <input
                type="text"
                placeholder="San Francisco, CA"
                onFocus={() => setIsFocused('location')}
                onBlur={() => setIsFocused('')}
                className="w-full bg-transparent outline-none text-gray-900 text-sm sm:text-base font-normal placeholder:text-gray-400"
              />
            </div>

            <div className="hidden md:flex items-center justify-center px-1">
              <div className="relative h-10 w-px bg-gradient-to-b from-transparent via-gray-300/80 to-transparent">
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/90" />
              </div>
            </div>

            {/* Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-2.5 font-bold text-sm sm:text-base transition-all active:scale-95 flex items-center justify-center gap-2 group shadow-[0_12px_24px_rgba(0,0,0,0.2)]">
              Search
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Shield, title: 'Industry Experts', desc: 'Top 1% vetted pros only.', color: 'text-yellow-500' },
            { icon: Clock, title: 'On-Demand Speed', desc: 'Booking made simple.', color: 'text-blue-600' },
            { icon: Star, title: 'High Satisfaction', desc: 'Premium quality results.', color: 'text-yellow-500' },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="group cursor-default">
              <div className="mb-3 inline-flex items-center justify-center w-12 h-12 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all">
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <h4 className="text-lg font-extrabold text-gray-900 mb-1.5">{item.title}</h4>
              <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
