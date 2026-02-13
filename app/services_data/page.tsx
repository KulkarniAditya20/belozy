'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import ServiceCard from '@/components/home/ServiceCard';
import {
    Home, Droplets, Zap, Trees, Brush, Sparkles, PaintBucket, Truck,
    Search, Hammer, ShieldCheck, HeartPulse, Camera, Laptop, Music, ChefHat
} from 'lucide-react';

const allServices = [
    { icon: Home, title: 'Home Renovation', description: 'Transform your space with expert remodeling services.', category: 'Residential' },
    { icon: Droplets, title: 'Plumbing', description: 'Fix leaks, install fixtures, and repair pipes quickly.', category: 'Maintenance' },
    { icon: Zap, title: 'Electrical', description: 'Licensed electricians for all your wiring needs.', category: 'Maintenance' },
    { icon: Trees, title: 'Landscaping', description: 'Create beautiful outdoor spaces and gardens.', category: 'Outdoor' },
    { icon: Brush, title: 'Interior Design', description: 'Professional design services for your home.', category: 'Residential' },
    { icon: Sparkles, title: 'House Cleaning', description: 'Trusted cleaning pros for a spotless home.', category: 'Cleaning' },
    { icon: PaintBucket, title: 'Painting', description: 'Expert painters for interior and exterior projects.', category: 'Residential' },
    { icon: Truck, title: 'Moving', description: 'Reliable movers for stress-free relocation.', category: 'Logistics' },
    { icon: Hammer, title: 'Carpentry', description: 'Custom furniture and wooden structures.', category: 'Residential' },
    { icon: ShieldCheck, title: 'Security', description: 'System installation and security monitoring.', category: 'Safety' },
    { icon: HeartPulse, title: 'Health & Wellness', description: 'Personal trainers and wellness coaches.', category: 'Personal' },
    { icon: Laptop, title: 'Tech Support', description: 'IT solutions and computer repairs.', category: 'Business' },
];

export default function ServicesPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredServices = allServices.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#FAFAFA]">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center space-y-6 mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight"
                        >
                            Find the right pro <br />
                            <span className="text-balozy-gold">for every job.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-500 max-w-2xl mx-auto"
                        >
                            Balozy connects you with top-rated professionals for all your home and personal service needs.
                        </motion.p>
                    </div>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto mb-20">
                        <div className="relative group">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-balozy-blue transition-colors" />
                            <input
                                type="text"
                                placeholder="Search for a service (e.g. Plumbing, Cleaning...)"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-5 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-balozy-blue/20 transition-all text-gray-900 font-medium"
                            />
                        </div>
                    </div>

                    {/* Services Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {filteredServices.map((service, index) => (
                            <ServiceCard key={service.title} {...service} index={index} />
                        ))}
                    </motion.div>

                    {filteredServices.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-400 text-lg">No services found matching your search. Try another keyword!</p>
                        </div>
                    )}

                    {/* Funnel/CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-32 p-12 lg:p-20 bg-balozy-blue rounded-[3rem] text-center text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
                        <h2 className="text-3xl lg:text-5xl font-black mb-6 relative z-10">Don't see what you need?</h2>
                        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto relative z-10">
                            Tell us what you're looking for, and we'll find the perfect pro to help you out.
                        </p>
                        <button className="bg-white text-balozy-blue px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform relative z-10 shadow-xl shadow-black/10">
                            Describe Your Project
                        </button>
                    </motion.div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
