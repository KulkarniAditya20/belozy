'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-8">
                        <a href="/" className="flex items-center gap-2">
                            <Image
                                src="/LOGO.svg"
                                alt="Balozy Logo"
                                width={180}
                                height={60}
                                className="h-12 w-auto"
                                priority
                            />
                        </a>
                        <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4 text-balozy-gold" />
                            <span className="font-medium hover:text-balozy-gold cursor-pointer transition-colors">San Francisco, CA</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <button className="hidden md:flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-balozy-gold transition-colors">
                            Services
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        <a href="/pros/1" className="hidden md:block text-sm font-semibold text-gray-700 hover:text-balozy-gold transition-colors">
                            Pros
                        </a>
                        <a href="#how-it-works" className="hidden md:block text-sm font-semibold text-gray-700 hover:text-balozy-gold transition-colors">
                            How it Works
                        </a>
                        <a href="/login" className="text-sm font-semibold text-gray-700 hover:text-balozy-gold transition-colors">
                            Log In
                        </a>
                        <a href="/signup" className="bg-balozy-blue hover:opacity-90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
