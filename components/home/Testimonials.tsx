'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Homeowner in SF",
        text: "Balozy made finding a plumber so easy. The pro arrived on time, was extremely professional, and the pricing was transparent. Highly recommended!",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "David Chen",
        role: "Property Manager",
        text: "I use Balozy for all my maintenance needs. The quality of pros is top-notch, and the booking process is seamless. A game-changer for me.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=david"
    },
    {
        name: "Elena Rodriguez",
        role: "New Homeowner",
        text: "The peace of mind knowing that every pro is verified is invaluable. I found an amazing interior designer who transformed my living room.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=elena"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center space-y-4 mb-20">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-balozy-gold/10 text-balozy-gold text-[10px] font-black uppercase tracking-[0.2em] rounded-full"
                    >
                        Success Stories
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight"
                    >
                        Loved by <span className="text-gray-400">homeowners</span> <br />
                        and professionals alike.
                    </motion.h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Decorative Background Accent */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gray-50/50 rounded-[4rem] -z-10" />

                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col h-full relative group hover:border-balozy-gold/30 transition-all duration-500"
                        >
                            <div className="absolute top-8 right-10 text-gray-50 opacity-10 group-hover:text-balozy-gold group-hover:opacity-10 transition-colors duration-500">
                                <Quote className="w-16 h-16" />
                            </div>

                            <div className="flex gap-1 mb-8">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-balozy-gold fill-balozy-gold" />
                                ))}
                            </div>

                            <p className="text-gray-600 font-medium leading-[1.8] mb-10 flex-1 relative z-10 italic">
                                "{t.text}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-50">
                                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="text-sm font-black text-gray-900 flex items-center gap-1.5">
                                        {t.name}
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                    </div>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA or Proof */}
                <div className="mt-20 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex items-center gap-8 py-4 px-8 bg-gray-900 rounded-2xl text-white shadow-xl shadow-black/10"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
                            Join <span className="text-white">10,000+</span> happy members
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
