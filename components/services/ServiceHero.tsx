'use client';

import React from 'react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

interface ServiceHeroProps {
    serviceName: string;
    proCount: number;
    imageSrc?: string;
}

export default function ServiceHero({ serviceName, proCount, imageSrc = "/hero-plumber.webp" }: ServiceHeroProps) {
    return (
        <div className="bg-white pt-24 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                                Check out {proCount} {serviceName.toLowerCase()} in your area
                            </h1>
                            <p className="text-gray-500 text-lg">
                                Confirm your location to see highly-rated pros near you.
                            </p>
                        </div>

                        <div className="space-y-4 max-w-md">
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Zip code"
                                    defaultValue="84101"
                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-balozy-blue focus:border-transparent outline-none transition-shadow"
                                />
                            </div>
                            <button className="w-full bg-[#009FD6] hover:bg-[#008CC0] text-white font-bold py-3 rounded-md transition-colors text-lg">
                                Find a pro
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative h-[300px] lg:h-[400px] w-full rounded-bl-[100px] overflow-hidden bg-gray-100">
                            {/* Placeholder for the image. In a real app we'd use next/image with a real src */}
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                                <span className="">Service Image Placeholder</span>
                            </div>
                            {/* Intentionally using a div for now as I don't have the specific asset, 
                               but the structure supports next/image */}
                        </div>
                        {/* Decorative circle/shape if needed */}
                    </div>

                </div>
            </div>
        </div>
    );
}
