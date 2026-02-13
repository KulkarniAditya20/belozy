'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ChevronDown } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <a href="/" className="text-2xl font-bold text-gray-900 hover:text-yellow-500 transition-colors">
                            Balazy
                        </a>
                        <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4 text-yellow-500" />
                            <span className="font-medium">San Francisco, CA</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-yellow-500 transition-colors">
                            Services
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        <a href="#how-it-works" className="hidden md:block text-sm font-medium text-gray-700 hover:text-yellow-500 transition-colors">
                            How it Works
                        </a>
                        <a href="/login" className="text-sm font-medium text-gray-700 hover:text-yellow-500 transition-colors">
                            Log In
                        </a>
                        <a href="/signup" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
