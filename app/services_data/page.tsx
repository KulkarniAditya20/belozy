'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Search } from 'lucide-react';
import Image from 'next/image';

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

export default function ServicesPage() {
    const [searchQuery, setSearchQuery] = useState('');

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
        <div className="min-h-screen bg-[#FAFAFA]">
            <Navbar />

            <main className="pt-28 pb-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    
                    {/* Hero / Search Section */}
                    <div className="max-w-3xl mx-auto text-center mb-16 space-y-8">
                        <motion.h1 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight"
                        >
                            What services are you <br />
                            <span className="text-[#0032FF]">looking for today?</span>
                        </motion.h1>

                        <div className="relative group max-w-2xl mx-auto">
                            <div className="absolute inset-0 bg-[#0032FF]/5 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
                            <div className="relative flex items-center bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-200/40 p-1.5 focus-within:ring-2 focus-within:ring-[#0032FF]/20 transition-all">
                                <Search className="ml-4 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search categories..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="flex-1 px-4 py-3 bg-transparent border-none focus:ring-0 text-lg font-medium text-gray-800 placeholder:text-gray-400 placeholder:font-normal"
                                />
                                <button className="bg-[#0032FF] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-6">
                        <div>
                            <h2 className="text-2xl font-black text-gray-900">Browse by category</h2>
                            <p className="text-gray-500 font-medium mt-1">Explore our professional service network</p>
                        </div>
                        <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold">
                            {filteredCategories.length} Categories
                        </span>
                    </div>

                    {/* Category Grid */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
                    >
                        {filteredCategories.map((cat) => (
                            <motion.a
                                key={cat.name}
                                variants={cardVariants}
                                href={`/services_data/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="group block"
                            >
                                <div className="space-y-4">
                                    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gray-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10 group-hover:-translate-y-2">
                                        <Image
                                            src={cat.image}
                                            alt={cat.name}
                                            fill
                                            className="object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        {/* Subtle overlay elements */}
                                        <div className="absolute bottom-4 left-4 p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                            <span className="text-[10px] uppercase font-black tracking-widest text-white">View Pros</span>
                                        </div>
                                    </div>
                                    
                                    <div className="px-1 flex items-center justify-between">
                                        <h3 className="text-lg font-black text-gray-900 group-hover:text-[#0032FF] transition-colors duration-300">
                                            {cat.name}
                                        </h3>
                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 group-hover:bg-[#0032FF]/5">
                                            <Search className="w-3 h-3 text-[#0032FF]" />
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
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
                                className="text-[#0032FF] font-black hover:underline mt-4"
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
