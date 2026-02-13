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
        label: 'Child Care, Tutors And Family Services',
        icon: ChildCare,
        subcategories: [
            { label: 'Babysitting', href: '/services_data/babysitting' },
            { label: 'Taduling', href: '/services_data/taduling' },
            { label: 'Home Tutoring', href: '/services_data/tutoring' }
        ]
    },
    {
        id: 'food',
        label: 'Food & Catering',
        icon: Food,
        subcategories: [
            { label: 'Personal Chef', href: '/services_data/personal-chef' },
            { label: 'Catering Service', href: '/services_data/catering' },
            { label: 'Bar Tending', href: '/services_data/bartending' }
        ]
    },
    {
        id: 'beauty',
        label: 'Beauty & Wellness',
        icon: Beauty,
        subcategories: [
            { label: 'Makeup Artist', href: '/services_data/makeup-artist' },
            { label: 'Hair Stylist', href: '/services_data/hair-stylist' },
            { label: 'Massage Therapy', href: '/services_data/massage-therapy' }
        ]
    },
    {
        id: 'moving',
        label: 'Moving Services',
        icon: Moving,
        subcategories: [
            { label: 'Local Moving', href: '/services_data/local-moving' },
            { label: 'Long Distance Moving', href: '/services_data/long-distance-moving' },
            { label: 'Packing Services', href: '/services_data/packing' }
        ]
    },
    {
        id: 'appliance',
        label: 'Home Or Business Appliance Installation',
        icon: Appliance,
        subcategories: [
            { label: 'Refrigerator Installation', href: '/services_data/refrigerator-installation' },
            { label: 'Washer/Dryer Installation', href: '/services_data/washer-dryer-installation' },
            { label: 'TV Mounting', href: '/services_data/tv-mounting' }
        ]
    },
    {
        id: 'landscape',
        label: 'Landscaping & Interior Design',
        icon: Landscape,
        subcategories: [
            { label: 'Lawn Mowing', href: '/services_data/lawn-mowing' },
            { label: 'Garden Design', href: '/services_data/garden-design' },
            { label: 'Interior Decorating', href: '/services_data/interior-decorating' }
        ]
    },
    {
        id: 'event',
        label: 'Event DJ Services Kenya',
        icon: DJ,
        subcategories: [
            { label: 'Wedding DJ', href: '/services_data/wedding-dj' },
            { label: 'Corporate Event DJ', href: '/services_data/corporate-event-dj' },
            { label: 'Party DJ', href: '/services_data/party-dj' }
        ]
    },
    {
        id: 'shopping',
        label: 'Shopping Delivery',
        icon: Shopping,
        subcategories: [
            { label: 'Grocery Delivery', href: '/services_data/grocery-delivery' },
            { label: 'Package Delivery', href: '/services_data/package-delivery' },
            { label: 'Personal Shopping', href: '/services_data/personal-shopping' }
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
                            ? 'bg-white text-balozy-gold font-medium border-l-4 border-balozy-gold'
                            : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <category.icon className={`w-4 h-4 ${activeCategory === category.id ? 'text-balozy-gold' : 'text-gray-400'}`} />
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
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-balozy-gold hover:bg-gray-50 rounded-md transition-colors"
                        >
                            {sub.label}
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
