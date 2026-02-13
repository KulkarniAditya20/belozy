'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import ProCard, { ProCardProps } from '@/components/services/ProCard';
import { ChevronDown, Info } from 'lucide-react';

// Mock Data matching the screenshots
const MOCK_PROS: ProCardProps[] = [
    {
        id: '1',
        name: 'Salt City Plumbing, Heating, and Air',
        rating: 4.8,
        reviewCount: 413,
        isTopPro: true,
        tags: ['Plumbing Drain Repair', 'Plumbing Pipe Repair', 'Plumbing Pipe Installation or Replacement', 'Sink or Faucet Installation or Replacement', 'Toilet Repair', 'Sink...'],
        price: '$ Great value',
        hires: 1767,
        location: '26 similar jobs done near you',
        isOnline: true,
        latestReview: {
            text: 'Randi was quick to respond to my request for a plumber.',
            author: 'Mikelle C.'
        },
        imageUrl: '/mock-avatar-1.jpg'
    },
    {
        id: '2',
        name: 'IMC Plumbing Services',
        rating: 4.9,
        reviewCount: 106,
        isTopPro: false,
        tags: ['Plumbing Drain Repair', 'Plumbing Pipe Repair', 'Plumbing Pipe Installation or Replacement', 'Toilet Repair', 'Sink or Faucet Repair', 'Sink or Faucet Installation...'],
        price: '',
        hires: 11,
        location: 'Licensed pro',
        isOnline: true,
        imageUrl: '/mock-avatar-2.jpg'
    }
];

export default function ServiceCategoryPage() {
    const params = useParams();
    const slug = typeof params.slug === 'string' ? params.slug : '';

    // Convert slug to Display Name (e.g., "plumbing" -> "Plumbing")
    const serviceName = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-20">
                <ServiceHero
                    serviceName={serviceName}
                    proCount={198}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                    {/* Breadcrumbs & Title */}
                    <div className="mb-8">
                        <div className="text-sm text-gray-500 mb-2">
                            Balozy &gt; {serviceName}
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {serviceName} near you
                        </h2>
                        <p className="text-gray-600 max-w-3xl">
                            {serviceName} often repair clogged drains, leaky faucets, or faulty water heaters — helping protect your home from water damage and keep your systems running smoothly.
                        </p>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold text-gray-900">
                                Top pros for your project
                            </h3>
                            <p className="text-gray-500 text-sm flex items-center gap-1">
                                These highly recommended pros are experts, ready to help with your project.
                                <Info className="w-4 h-4" />
                            </p>
                        </div>

                        <div className="relative">
                            <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-50">
                                Recommended
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Pro List */}
                    <div className="space-y-4">
                        {MOCK_PROS.map((pro, index) => (
                            <div key={pro.id} className="relative">
                                {/* Numbering 1. 2. etc */}
                                {/* <span className="absolute -left-8 top-8 font-bold text-gray-400">{index + 1}.</span> */}
                                <ProCard {...pro} name={`${index + 1}. ${pro.name}`} />
                            </div>
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
