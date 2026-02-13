'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden flex z-50"
        >
            {/* Categories Sidebar */}
            <div className="w-1/2 bg-gray-50 py-2 border-r border-gray-100">
                {SERVICE_CATEGORIES.map((category) => (
                    <button
                        key={category.id}
                        onMouseEnter={() => setActiveCategory(category.id)}
                        className={`w-full px-4 py-3 flex items-center justify-between text-sm transition-colors ${activeCategory === category.id
                            ? 'bg-white text-[#0032FF] font-medium border-l-4 border-[#0032FF]'
                            : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <category.icon className={`w-4 h-4 ${activeCategory === category.id ? 'text-[#0032FF]' : 'text-gray-400'}`} />
                            <span className="text-left">{category.label}</span>
                        </div>
                        <ChevronRight className={`w-3 h-3 ${activeCategory === category.id ? 'opacity-100' : 'opacity-0'}`} />
                    </button>
                ))}
            </div>

            {/* Subcategories Content */}
            <div className="w-1/2 py-2 bg-white">
                <div className="p-4 space-y-1">
                    {currentSubcategories.map((sub, index) => (
                        <a
                            key={index}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-[#0032FF] hover:bg-gray-50 rounded-md transition-colors"
                        >
                            {sub.label}
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
