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
        <section className="relative py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50/80 overflow-hidden">
            <div className="pointer-events-none absolute -top-12 right-0 h-56 w-56 rounded-full bg-blue-100/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-0 h-56 w-56 rounded-full bg-yellow-100/40 blur-3xl" />
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center space-y-4 mb-14 lg:mb-16">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-balozy-gold/30 text-balozy-gold text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_10px_24px_-16px_rgba(234,179,8,0.7)]"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-balozy-gold" />
                        Success Stories
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.03]"
                    >
                        Trusted by homeowners <br />
                        <span className="text-gray-400">and professionals alike.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.18 }}
                        className="text-base text-gray-500 max-w-2xl mx-auto"
                    >
                        Real experiences from customers who booked verified experts through Balozy.
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 relative">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="bg-white p-7 lg:p-8 rounded-3xl border border-gray-200/90 shadow-[0_18px_38px_-24px_rgba(0,0,0,0.25)] flex flex-col h-full relative group hover:border-balozy-gold/40 hover:shadow-[0_24px_50px_-26px_rgba(0,0,0,0.3)] transition-all duration-500"
                        >
                            <div className="absolute top-6 right-6 text-gray-200 group-hover:text-balozy-gold/40 transition-colors duration-500">
                                <Quote className="w-9 h-9" />
                            </div>

                            <div className="flex items-center justify-between mb-6">
                                <div className="flex gap-1">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-balozy-gold fill-balozy-gold" />
                                    ))}
                                </div>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                                    Verified Review
                                </span>
                            </div>

                            <p className="text-gray-600 font-medium leading-[1.7] mb-8 flex-1 relative z-10">
                                "{t.text}"
                            </p>

                            <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm">
                                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="text-sm font-black text-gray-900 flex items-center gap-1.5">
                                        {t.name}
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                    </div>
                                    <div className="text-[11px] font-medium text-gray-500">
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA or Proof */}
                <div className="mt-14 lg:mt-16 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-6 py-3.5 px-6 bg-gray-900 rounded-2xl text-white shadow-xl shadow-black/10 border border-white/5"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <div className="text-xs font-semibold tracking-wide text-white/75">
                            Join <span className="text-white font-bold">10,000+</span> happy members
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
