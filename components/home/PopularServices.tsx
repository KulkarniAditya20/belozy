'use client';

import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles,
    Wrench,
    Flower2,
    Truck,
    Droplets,
    Plug,
    Paintbrush,
    Snowflake,
    ChevronRight,
    Hammer,
    LucideIcon
} from 'lucide-react';

type ServiceTile = {
    title: string;
    subtitle: string;
    image: string;
    href: string;
};

type Category = {
    id: string;
    label: string;
    icon: LucideIcon;
    tiles: ServiceTile[];
};

const categories: Category[] = [
    {
        id: 'cleaners',
        label: 'Cleaners',
        icon: Sparkles,
        tiles: [
            { title: 'House Cleaning', subtitle: 'Deep and routine cleaning', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Carpet Cleaning', subtitle: 'Stain and odor treatment', image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Junk Removal', subtitle: 'Fast waste pickup', image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Pressure Washing', subtitle: 'Outdoor surface wash', image: 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9f?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
        ],
    },
    {
        id: 'handymen',
        label: 'Handymen',
        icon: Wrench,
        tiles: [
            { title: 'Door & Lock Repair', subtitle: 'Fixes and replacements', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Furniture Assembly', subtitle: 'Quick setup at home', image: 'https://images.unsplash.com/photo-1581579188871-45ea61f2a5fd?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Wall Fixtures', subtitle: 'TV, shelf, art install', image: 'https://images.unsplash.com/photo-1523419409543-57b4a2f2d8f9?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Minor Repairs', subtitle: 'Same-day fixes', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
        ],
    },
    {
        id: 'landscapers',
        label: 'Landscapers',
        icon: Flower2,
        tiles: [
            { title: 'Lawn Care', subtitle: 'Cutting and maintenance', image: 'https://images.unsplash.com/photo-1598901847919-b95dd0fabbb0?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Garden Design', subtitle: 'Beautiful outdoor layouts', image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Tree Trimming', subtitle: 'Safe pruning services', image: 'https://images.unsplash.com/photo-1599685315640-2bd2f7f95f0c?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Yard Cleanup', subtitle: 'Debris and leaf removal', image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
        ],
    },
    {
        id: 'plumbers',
        label: 'Plumbers',
        icon: Droplets,
        tiles: [
            { title: 'Leak Repair', subtitle: 'Pipes and fixtures', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Drain Cleaning', subtitle: 'Blocked lines solved', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Water Heater', subtitle: 'Repair and install', image: 'https://images.unsplash.com/photo-1607417569978-4d5a4db6c9cc?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Bathroom Plumbing', subtitle: 'Toilet and faucet work', image: 'https://images.unsplash.com/photo-1631635589499-afd87d52bf64?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
        ],
    },
    {
        id: 'electrical',
        label: 'Electrical Pros',
        icon: Plug,
        tiles: [
            { title: 'Wiring Upgrade', subtitle: 'Safe rewiring', image: 'https://images.unsplash.com/photo-1621905252472-943afaa20e59?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Panel Repair', subtitle: 'Fuse and breaker fixes', image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Light Installation', subtitle: 'Indoor and outdoor', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Outlet Setup', subtitle: 'Modern socket install', image: 'https://images.unsplash.com/photo-1605041691735-9a19473e75cb?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
        ],
    },
    {
        id: 'painters',
        label: 'Painters',
        icon: Paintbrush,
        tiles: [
            { title: 'Interior Painting', subtitle: 'Walls and ceilings', image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Exterior Painting', subtitle: 'Weatherproof coating', image: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Cabinet Finish', subtitle: 'Kitchen refresh', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Texture Coating', subtitle: 'Premium wall effects', image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
        ],
    },
    {
        id: 'movers',
        label: 'Movers',
        icon: Truck,
        tiles: [
            { title: 'Local Moving', subtitle: 'Apartment and home shift', image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Packing Help', subtitle: 'Secure box packing', image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Loading Support', subtitle: 'Heavy-lift experts', image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Storage Move', subtitle: 'Safe item transfer', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
        ],
    },
    {
        id: 'hvac',
        label: 'HVAC Pros',
        icon: Snowflake,
        tiles: [
            { title: 'AC Repair', subtitle: 'Cooling system fixes', image: 'https://images.unsplash.com/photo-1631549916768-4119b4123a94?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Heater Service', subtitle: 'Winter-ready systems', image: 'https://images.unsplash.com/photo-1596367407372-96cb88503db6?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Duct Cleaning', subtitle: 'Fresh indoor airflow', image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
            { title: 'Thermostat Install', subtitle: 'Smart temperature control', image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=1200&q=80', href: '/services_data' },
        ],
    },
];

export default function PopularServices() {
    const [activeId, setActiveId] = useState(categories[0].id);
    const activeCategory = useMemo(
        () => categories.find((category) => category.id === activeId) ?? categories[0],
        [activeId]
    );

    return (
        <section className="relative py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50/60 overflow-hidden">
            <div className="pointer-events-none absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight"
                        >
                            Popular services
                        </motion.h2>
                    </div>

                    <motion.a
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.12 }}
                        viewport={{ once: true }}
                        href="/services_data"
                        className="group inline-flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-800 shadow-[0_14px_30px_-20px_rgba(0,0,0,0.35)] transition-all hover:border-[#F8B90C]/40 hover:shadow-[0_18px_34px_-20px_rgba(248,185,12,0.45)]"
                    >
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#F8B90C]/15 text-[#9A7000] transition-colors group-hover:bg-[#F8B90C] group-hover:text-black">
                            <Hammer className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                        </span>
                        <span>Explore all 50+ services</span>
                        <ChevronRight className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gray-700" />
                    </motion.a>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-4 sm:p-5 lg:p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.2)]">
                    <div className="overflow-x-auto pb-2">
                        <div className="min-w-max flex items-center gap-2.5">
                            {categories.map((category) => {
                                const Icon = category.icon;
                                const isActive = category.id === activeId;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveId(category.id)}
                                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 border text-sm transition-all ${
                                            isActive
                                                ? 'bg-blue-50 border-blue-200 text-[#0032FF] font-semibold'
                                                : 'bg-white border-gray-200 text-gray-600 font-medium hover:border-gray-300'
                                        }`}
                                    >
                                        <Icon className={`w-4 h-4 ${isActive ? 'text-[#0032FF]' : 'text-gray-400'}`} />
                                        {category.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-5 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.22 }}
                            className="mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
                        >
                            {activeCategory.tiles.map((tile) => (
                                <a
                                    key={tile.title}
                                    href={tile.href}
                                    className="group relative h-64 rounded-2xl overflow-hidden border border-gray-200"
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${tile.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-[11px] uppercase tracking-[0.14em] text-white/70">{activeCategory.label}</p>
                                        <h3 className="mt-1 text-white text-xl font-bold leading-tight">{tile.title}</h3>
                                        <p className="mt-1 text-sm text-white/80">{tile.subtitle}</p>
                                    </div>

                                    <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-gray-900 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                        <ChevronRight className="w-4 h-4" />
                                    </span>
                                </a>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
