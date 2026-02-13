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
    <section className="relative overflow-hidden pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Background Blobs */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-balozy-gold/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[45%] bg-balozy-blue/5 rounded-full blur-[100px]" />

        {/* Minimalistic Waves */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[200px] text-gray-200/40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full h-[150px] text-gray-100/60"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,170.7C672,192,768,224,864,224C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Trust Badge */}
        <div className="flex justify-center mt-8 mb-6">
          <div className="inline-flex items-center gap-2 bg-balozy-gold/10 border border-balozy-gold/20 text-balozy-gold px-6 py-2 rounded-full text-sm font-bold tracking-wide">
            <Star className="w-4 h-4 fill-balozy-gold text-balozy-gold" />
            TRUSTED BY 50,000+ HOMEOWNERS
          </div>
        </div>

        {/* Hero Headline */}
        <h1
          className={`${outfit.className} text-6xl sm:text-7xl lg:text-8xl font-semibold text-center mb-6 leading-[1.1] tracking-tight text-gray-900 drop-shadow-sm`}
        >
          Your Home, Always
          <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-balozy-gold to-orange-500 inline-block py-2"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <p className="text-lg sm:text-2xl text-gray-500 text-center max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          Discover vetted professionals for every home need.
          <span className="block mt-2 font-medium text-gray-700">Simple, reliable, and just a click away.</span>
        </p>

        {/* Search Bar with Glassmorphism & Dividers */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2.5 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-0 border border-white/50 ring-1 ring-black/5">
          <div className="flex-[1.5] group flex items-center gap-3 px-8 py-6 transition-all duration-300">
            <Search className="w-6 h-6 text-[#F8B90C] transition-transform group-focus-within:scale-110" />
            <input
              type="text"
              placeholder="What service do you need?"
              className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400 font-normal text-xl"
            />
          </div>

          <div className="hidden md:block w-px h-12 bg-black/10" />

          <div className="flex-1 group flex items-center gap-3 px-8 py-6 transition-all duration-300">
            <MapPin className="w-6 h-6 text-[#F8B90C] transition-transform group-focus-within:scale-110" />
            <input
              type="text"
              placeholder="San Francisco, CA"
              className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400 font-normal text-xl"
            />
          </div>

          <div className="hidden md:block w-px h-12 bg-black/10 mr-2" />

          <button className="bg-[#0032FF] hover:bg-blue-700 text-white px-12 py-5 rounded-xl font-semibold text-xl transition-all duration-300 shadow-[0_10px_20px_rgba(0,50,255,0.2)] hover:shadow-[0_15px_30px_rgba(0,50,255,0.3)] hover:-translate-y-0.5 active:scale-95 whitespace-nowrap">
            Search
          </button>
        </div>

        {/* Trust Features */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto"
        >
          {[
            {
              icon: Shield,
              title: "Verified Pros",
              desc: "Background checked and verified pros",
              color: "balozy-gold",
              hoverBorder: "hover:border-balozy-gold/50"
            },
            {
              icon: Clock,
              title: "Instant Booking",
              desc: "Book services in minutes",
              color: "balozy-blue",
              hoverBorder: "hover:border-balozy-blue/50"
            },
            {
              icon: Star,
              title: "Quality Guaranteed",
              desc: "100% satisfaction guarantee on all services",
              color: "balozy-gold",
              fill: true,
              hoverBorder: "hover:border-balozy-gold/50 shadow-lg"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className={`flex items-start gap-5 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 transition-all duration-300 group ${item.hoverBorder}`}
            >
              <div className={`w-14 h-14 bg-${item.color}/10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-${item.color}/20`}>
                <item.icon className={`w-7 h-7 text-${item.color} ${item.fill ? 'fill-' + item.color : ''} transition-transform duration-300 group-hover:scale-110`} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#111827] text-lg leading-tight mb-2">{item.title}</h3>
                <p className="text-[15px] text-gray-500 font-normal leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
