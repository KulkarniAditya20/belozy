'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import ProCard, { ProCardProps } from '@/components/services/ProCard';
import { ChevronDown, Info } from 'lucide-react';

const MOCK_PROS: ProCardProps[] = [
    {
        id: '1',
        name: 'Salt City Plumbing, Heating, and Air',
        rating: 4.8,
        reviewCount: 413,
        isTopPro: true,
        tags: ['Plumbing Drain Repair', 'Plumbing Pipe Repair', 'Plumbing Pipe Installation or Replacement', 'Sink or Faucet Installation or Replacement', 'Toilet Repair', 'Sink'],
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
        tags: ['Plumbing Drain Repair', 'Plumbing Pipe Repair', 'Plumbing Pipe Installation or Replacement', 'Toilet Repair', 'Sink or Faucet Repair', 'Sink or Faucet Installation'],
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
    const serviceName = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Navbar />

            <main className="pt-20">
                <ServiceHero serviceName={serviceName} proCount={198} />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-12">
                    <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_18px_34px_-26px_rgba(0,0,0,0.28)]">
                        <div className="text-sm text-gray-500 mb-2">Balozy &gt; {serviceName}</div>
                        <h2 className="text-3xl font-black text-gray-900 mb-3">{serviceName} near you</h2>
                        <p className="text-gray-600 max-w-3xl leading-relaxed">
                            {serviceName} pros often fix clogged drains, leaky faucets, or faulty systems, helping protect your home and keep things running smoothly.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 rounded-2xl border border-gray-200 bg-white p-4">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-extrabold text-gray-900">Top pros for your project</h3>
                            <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                                These highly recommended pros are experts, ready to help with your project.
                                <Info className="w-4 h-4" />
                            </p>
                        </div>

                        <div className="relative">
                            <button className="flex items-center gap-2 border border-gray-200 rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0032FF] hover:border-blue-200 transition-colors">
                                Recommended
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {MOCK_PROS.map((pro, index) => (
                            <ProCard key={pro.id} {...pro} name={`${index + 1}. ${pro.name}`} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
