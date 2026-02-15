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
        <section className="relative py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50/70 overflow-hidden">
            <div className="pointer-events-none absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight"
                        >
                            Popular services
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.14 }}
                            className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl"
                        >
                            Browse trusted, high-demand categories used most by homeowners.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <a
                            href="/services_data"
                            className="group inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 pl-2.5 pr-2.5 py-2 text-base font-medium text-yellow-700 shadow-[0_10px_24px_-14px_rgba(234,179,8,0.55)] transition-all hover:-translate-y-0.5 hover:border-yellow-400 hover:bg-yellow-100 hover:shadow-[0_14px_28px_-14px_rgba(234,179,8,0.65)]"
                        >
                            <span>Explore all 50+ services</span>
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                                <Hammer className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
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
