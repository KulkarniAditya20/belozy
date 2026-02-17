'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outfit } from 'next/font/google';
import { Star, Shield, Clock } from 'lucide-react';
import PopularSearchBar from '@/components/ui/PopularSearchBar';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const WORDS = ['Luxury', 'Peace', 'Quality', 'Comfort', 'Speed'];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero-section"
      data-hero-section="true"
      className={`relative min-h-[84vh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-[#FFFFFF] ${outfit.className}`}
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
          <PopularSearchBar
            serviceValue={searchQuery}
            onServiceChange={setSearchQuery}
            locationValue={locationQuery}
            onLocationChange={setLocationQuery}
            servicePlaceholder="What service do you need?"
            locationPlaceholder="San Francisco, CA"
            searchLabel="Search"
            searchHref="/services_data"
          />
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {[
            { icon: Shield, title: 'Industry Experts', desc: 'Top 1% vetted pros only.', color: 'text-yellow-500' },
            { icon: Clock, title: 'On-Demand Speed', desc: 'Booking made simple.', color: 'text-blue-600' },
            { icon: Star, title: 'High Satisfaction', desc: 'Premium quality results.', color: 'text-yellow-500' },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="group cursor-default">
              <div className="mb-2 sm:mb-3 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm transition-all">
                <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-gray-900 mb-0.5 sm:mb-1.5 leading-tight">{item.title}</h4>
              <p className="hidden sm:block text-sm text-gray-500 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
