'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    SprayCan as Cleaning,
    Wrench as Repair,
    Baby as ChildCare,
    Utensils as Food,
    Sparkles as Beauty,
    Truck as Moving,
    Home as Appliance,
    Flower2 as Landscape,
    Music as DJ,
    ShoppingCart as Shopping,
    ChevronRight
} from 'lucide-react';

interface SubCategory {
    label: string;
    href: string;
}

interface Category {
    id: string;
    label: string;
    icon: React.ElementType;
    subcategories: SubCategory[];
}

const SERVICE_CATEGORIES: Category[] = [
    {
        id: 'cleaning',
        label: 'Cleaning',
        icon: Cleaning,
        subcategories: [
            { label: 'One-Time Cleaning Services', href: '/services_data/one-time-cleaning' },
            { label: 'Carpet Cleaning Experts', href: '/services_data/carpet-cleaning' },
            { label: 'Disinfecting Services', href: '/services_data/disinfecting' },
            { label: 'Move-Out Cleaning Services', href: '/services_data/move-out-cleaning' },
            { label: 'Short Term Services', href: '/services_data/short-term-cleaning' },
            { label: 'Car Washing Experts', href: '/services_data/car-washing' },
            { label: 'Home Cleaners Service', href: '/services_data/home-cleaning' },
            { label: 'Laundry Services', href: '/services_data/laundry' },
            { label: 'In Cleaning Experts', href: '/services_data/cleaning-experts' },
        ]
    },
    {
        id: 'repair',
        label: 'Home & Repairs',
        icon: Repair,
        subcategories: [
            { label: 'Handyman Services', href: '/services_data/handyman' },
            { label: 'Electrician Services', href: '/services_data/electrician' },
            { label: 'Plumbing Services', href: '/services_data/plumbing' },
            { label: 'Roofing Repairs', href: '/services_data/roofing' },
            { label: 'Painting Services', href: '/services_data/painting' }

        ]
    },
    {
        id: 'childcare',
        label: 'Family & Care',
        icon: ChildCare,
        subcategories: [
            { label: 'Professional Babysitting', href: '/services_data/babysitting' },
            { label: 'Taduling Services', href: '/services_data/taduling' },
            { label: 'Educational Tutoring', href: '/services_data/tutoring' }
        ]
    },
    {
        id: 'food',
        label: 'Catering & Culinary',
        icon: Food,
        subcategories: [
            { label: 'Personal Chef Services', href: '/services_data/personal-chef' },
            { label: 'Event Catering', href: '/services_data/catering' },
            { label: 'Professional Bartending', href: '/services_data/bartending' }
        ]
    },
    {
        id: 'beauty',
        label: 'Wellness & Beauty',
        icon: Beauty,
        subcategories: [
            { label: 'Makeup Artistry', href: '/services_data/makeup-artist' },
            { label: 'Professional Styling', href: '/services_data/hair-stylist' },
            { label: 'Therapeutic Massage', href: '/services_data/massage-therapy' }
        ]
    },
    {
        id: 'moving',
        label: 'Relocation Services',
        icon: Moving,
        subcategories: [
            { label: 'Residential Moving', href: '/services_data/local-moving' },
            { label: 'Commercial Relocation', href: '/services_data/long-distance-moving' },
            { label: 'Premium Packing', href: '/services_data/packing' }
        ]
    },
    {
        id: 'appliance',
        label: 'Installation Services',
        icon: Appliance,
        subcategories: [
            { label: 'Appliance Fitting', href: '/services_data/refrigerator-installation' },
            { label: 'System Setup', href: '/services_data/washer-dryer-installation' },
            { label: 'Professional Mounting', href: '/services_data/tv-mounting' }
        ]
    },
    {
        id: 'landscape',
        label: 'Design & Landscaping',
        icon: Landscape,
        subcategories: [
            { label: 'Estate Landscaping', href: '/services_data/lawn-mowing' },
            { label: 'Bespoke Garden Design', href: '/services_data/garden-design' },
            { label: 'Interior Curation', href: '/services_data/interior-decorating' }
        ]
    },
    {
        id: 'event',
        label: 'Event Entertainment',
        icon: DJ,
        subcategories: [
            { label: 'Wedding Entertainment', href: '/services_data/wedding-dj' },
            { label: 'Corporate Event Audio', href: '/services_data/corporate-event-dj' },
            { label: 'Bespoke Playlists', href: '/services_data/party-dj' }
        ]
    },
    {
        id: 'shopping',
        label: 'Concierge Delivery',
        icon: Shopping,
        subcategories: [
            { label: 'Grocery Logistics', href: '/services_data/grocery-delivery' },
            { label: 'Priority Shipping', href: '/services_data/package-delivery' },
            { label: 'Personal Shopping Assistant', href: '/services_data/personal-shopping' }
        ]
    }
];

export default function ServicesMegaMenu() {
    const [activeCategory, setActiveCategory] = useState<string>(SERVICE_CATEGORIES[0].id);

    const currentSubcategories = SERVICE_CATEGORIES.find(c => c.id === activeCategory)?.subcategories || [];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-[min(760px,calc(100vw-2rem))] max-w-[calc(100vw-2rem)] rounded-2xl border border-gray-200 bg-white shadow-[0_24px_50px_-24px_rgba(0,0,0,0.35)] overflow-hidden flex z-50"
        >
            {/* Categories Sidebar */}
            <div className="w-[44%] bg-gray-50/80 border-r border-gray-200 p-3">
                <div className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                    Categories
                </div>
                {SERVICE_CATEGORIES.map((category) => (
                    <button
                        key={category.id}
                        onMouseEnter={() => setActiveCategory(category.id)}
                        className={`w-full px-3 py-2.5 mb-1 rounded-xl flex items-center justify-between text-sm transition-all ${activeCategory === category.id
                            ? 'bg-white text-[#0032FF] font-semibold border border-blue-200 shadow-[0_8px_16px_-12px_rgba(0,50,255,0.45)]'
                            : 'text-gray-600 border border-transparent hover:bg-white hover:border-gray-200'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <category.icon className={`w-4 h-4 ${activeCategory === category.id ? 'text-[#0032FF]' : 'text-gray-400'}`} />
                            <span className="text-left">{category.label}</span>
                        </div>
                        <ChevronRight className={`w-3.5 h-3.5 transition-all ${activeCategory === category.id ? 'opacity-100 translate-x-0 text-[#0032FF]' : 'opacity-30 -translate-x-0.5 text-gray-400'}`} />
                    </button>
                ))}
            </div>

            {/* Subcategories Content */}
            <div className="w-[56%] bg-white p-4">
                <div className="px-1 pb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                    Popular in {SERVICE_CATEGORIES.find(c => c.id === activeCategory)?.label}
                </div>
                <div className="space-y-1">
                    {currentSubcategories.map((sub, index) => (
                        <a
                            key={index}
                            href={sub.href}
                            className="group flex items-center justify-between px-3 py-2.5 text-sm text-gray-700 hover:text-[#0032FF] hover:bg-blue-50/60 rounded-lg transition-all"
                        >
                            <span>{sub.label}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#0032FF] group-hover:translate-x-0.5 transition-all" />
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
