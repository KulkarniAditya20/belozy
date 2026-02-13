'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Droplets,
    Zap,
    Sparkles,
    Trees,
    Palette,
    Hammer,
    ShieldCheck,
    Truck
} from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
    { icon: Droplets, title: 'Plumbing', description: 'Expert help for leaks, pipes, and fixture installs.' },
    { icon: Zap, title: 'Electrical', description: 'Licensed wiring, repairs, and safety upgrades.' },
    { icon: Sparkles, title: 'House Cleaning', description: 'Professional deep cleaning and home care.' },
    { icon: Trees, title: 'Landscaping', description: 'Garden design, lawn care, and outdoor upkeep.' },
    { icon: Palette, title: 'Painting', description: 'Quality interior and exterior finishing work.' },
    { icon: Hammer, title: 'Carpentry', description: 'Custom furniture and wooden structures.' },
    { icon: ShieldCheck, title: 'Security', description: 'Professional system installation and monitoring.' },
    { icon: Truck, title: 'Moving', description: 'Reliable help for stress-free relocation.' },
];

export default function PopularServices() {
    return (
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                    <div className="max-w-xl space-y-4">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-black uppercase tracking-[0.2em] text-balozy-gold"
                        >
                            Our Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight"
                        >
                            Premium services for <br />
                            <span className="text-gray-400">every home need.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <a href="/services_data" className="inline-flex items-center gap-2 group text-sm font-bold text-gray-900">
                            Explore all 50+ services
                            <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                                <Hammer className="w-3.5 h-3.5 group-hover:rotate-12" />
                            </div>
                        </a>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <ServiceCard
                            key={idx}
                            {...service}
                            index={idx}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
