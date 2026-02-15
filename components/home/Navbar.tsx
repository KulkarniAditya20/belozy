'use client';

import ServicesMegaMenu from './ServicesMegaMenu';

import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <a href="/" className="flex items-center gap-2">
                            <Image
                                src="/LOGO.svg"
                                alt="Balozy Logo"
                                width={150}
                                height={48}
                                className="h-10 w-auto"
                                priority
                            />
                        </a>
                        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-white hover:border-balozy-gold/30 hover:shadow-sm transition-all cursor-pointer group">
                            <MapPin className="w-4 h-4 text-[#F8B90C]" />
                            <span className="font-medium group-hover:text-gray-900 transition-colors">San Francisco, CA</span>
                            <ChevronDown className="w-4 h-4 text-gray-400 transition-transform group-hover:rotate-180" />
                        </div>
                    </div>

                    <div className="flex items-center gap-6 lg:gap-8">
                        <div className="relative group">
                            <button className="hidden md:flex items-center gap-1.5 text-sm lg:text-base font-medium text-gray-600 hover:text-[#0032FF] transition-colors py-1.5 group-hover:text-[#0032FF]">
                                Find Services
                                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                            </button>
                            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                <ServicesMegaMenu />
                            </div>
                        </div>
                        <a href="#how-it-works" className="hidden md:block text-sm lg:text-base font-medium text-gray-600 hover:text-[#0032FF] transition-colors">
                            The Process
                        </a>
                        <a href="/login" className="text-sm lg:text-base font-medium text-gray-600 hover:text-[#0032FF] transition-colors">
                            Sign In
                        </a>
                        <a href="/signup" className="bg-[#0032FF] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm lg:text-base font-semibold transition-all duration-300 shadow-[0_10px_20px_rgba(0,50,255,0.2)] hover:shadow-[0_15px_30px_rgba(0,50,255,0.3)] hover:-translate-y-0.5 active:scale-95 whitespace-nowrap">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
