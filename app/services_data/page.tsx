'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Search, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import PopularSearchBar from '@/components/ui/PopularSearchBar';

const CATEGORIES = [
    { name: 'Architects', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Baking', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Carpenter', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Carpet Cleaning', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'CCTV Installs', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Cooks and Chefs', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Day care services', image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Drivers - for hire', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Drone Videographers', image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'DSTV Installers', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Electricians', image: 'https://images.unsplash.com/photo-1621905235277-f4044719c8f0?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'English Tutoring', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Errands Shopping', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Events DJ', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Fridge Repairs', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'General Contractors', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Hair Braiding', image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Handyman', image: 'https://images.unsplash.com/photo-1621905235277-f4044719c8f0?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Interior Design', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Interior Painter', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Landscaping', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Makeup & Beauty', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Mama Fua', image: 'https://images.unsplash.com/photo-1582735689369-4fe9904d1d5b?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Mobile Auto Repairs', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Mobile barber', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Pest fumigation', image: 'https://images.unsplash.com/photo-1587582423116-292880119d55?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Photographer', image: 'https://images.unsplash.com/photo-1452784444945-3f4227ba8ee5?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Plumber', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'Rent a car/Truck', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400&h=300' },
    { name: 'TV Mounting Services', image: 'https://images.unsplash.com/photo-1593359674240-a5a74d31090c?auto=format&fit=crop&q=80&w=400&h=300' },
];

const CATEGORY_META: Record<string, { insight: string; response: string; price: string }> = {
    Architects: { insight: 'Planning, permits and design support', response: '2-4 hrs', price: 'From $120' },
    Baking: { insight: 'Custom cakes and event baking experts', response: '1-3 hrs', price: 'From $35' },
    Carpenter: { insight: 'Furniture fixes and woodwork projects', response: '30-90 min', price: 'From $60' },
    Electricians: { insight: 'Wiring, fixtures and safety checks', response: '20-60 min', price: 'From $55' },
    Handyman: { insight: 'Small repairs done in one visit', response: '20-60 min', price: 'From $45' },
    Plumber: { insight: 'Leak repair, fittings and installations', response: '15-45 min', price: 'From $50' },
    Landscaping: { insight: 'Outdoor care and garden upgrades', response: '1-2 hrs', price: 'From $80' },
    Photographer: { insight: 'Events, portraits and product shoots', response: '1-3 hrs', price: 'From $90' },
    'Makeup & Beauty': { insight: 'Bridal and professional styling', response: '1-2 hrs', price: 'From $40' },
    'Interior Design': { insight: 'Space planning and decor curation', response: '2-5 hrs', price: 'From $140' },
};

export default function ServicesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');

    const filteredCategories = CATEGORIES.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Navbar />

            <main className="pt-28 pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    
                    {/* Hero / Search Section */}
                    <div
                        data-navbar-search-anchor="true"
                        className="max-w-4xl mx-auto text-center mb-14 space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5">
                            <span className="h-2 w-2 rounded-full bg-[#F8B90C]" />
                            <span className="text-[11px] tracking-[0.14em] uppercase font-semibold text-amber-700">Popular services</span>
                        </div>
                        <motion.h1 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.03]"
                        >
                            Discover trusted local pros <br />
                            <span className="text-[#F8B90C]">for every home need.</span>
                        </motion.h1>
                        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
                            Browse visual categories and quickly find the right service.
                        </p>

                        <PopularSearchBar
                            className="max-w-5xl mx-auto"
                            serviceValue={searchQuery}
                            onServiceChange={setSearchQuery}
                            locationValue={locationQuery}
                            onLocationChange={setLocationQuery}
                            servicePlaceholder="Search categories..."
                            locationPlaceholder="San Francisco, CA"
                            searchLabel="Search"
                        />
                    </div>

                    <div className="flex items-center justify-between mb-10 border-b border-gray-200/80 pb-5">
                        <div>
                            <h2 className="text-2xl font-black text-gray-900">Browse by category</h2>
                            <p className="text-gray-500 mt-1">Explore our professional service network</p>
                        </div>
                        <span className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                            {filteredCategories.length} Categories
                        </span>
                    </div>

                    {/* Category Grid */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
                    >
                        {filteredCategories.map((cat) => {
                            const meta = CATEGORY_META[cat.name] || {
                                insight: 'Trusted local professionals available',
                                response: '30-120 min',
                                price: 'From $49'
                            };

                            return (
                                <motion.a
                                    key={cat.name}
                                    variants={cardVariants}
                                    href={`/services_data/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="group block rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-[0_20px_42px_-26px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#F8B90C]/70 hover:shadow-[0_26px_52px_-24px_rgba(0,50,255,0.26)]"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                                        <Image
                                            src={cat.image}
                                            alt={cat.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                        <div className="absolute top-4 left-4 rounded-full bg-white/92 backdrop-blur px-3 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase text-[#0032FF]">
                                            Popular
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                            <span className="text-white text-[11px] font-medium bg-black/35 rounded-full px-3 py-1">
                                                Avg response {meta.response}
                                            </span>
                                            <div className="h-9 w-9 rounded-full bg-white text-[#0032FF] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:translate-x-0.5">
                                                <ChevronRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-[#0032FF] transition-colors">
                                            {cat.name}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                            {meta.insight}
                                        </p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="inline-flex items-center rounded-full border border-[#F8B90C]/45 bg-[#F8B90C]/12 px-3 py-1 text-xs font-medium text-amber-700">
                                                {meta.price}
                                            </span>
                                            <span className="text-xs font-medium text-gray-500">Top rated pros</span>
                                        </div>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    {filteredCategories.length === 0 && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-32 space-y-4"
                        >
                            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="w-8 h-8 text-gray-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">No services found</h3>
                            <p className="text-gray-500 max-w-xs mx-auto">We couldn't find any categories matching "{searchQuery}". Try a different search term.</p>
                            <button 
                                onClick={() => setSearchQuery('')}
                                className="text-[#0032FF] font-semibold hover:underline mt-4"
                            >
                                Clear search
                            </button>
                        </motion.div>
                    )}

                </div>
            </main>

            <Footer />
        </div>
    );
}
