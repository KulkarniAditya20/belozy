'use client';

import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

interface ServiceHeroProps {
    serviceName: string;
    proCount: number;
    imageSrc?: string;
}

export default function ServiceHero({ serviceName, proCount, imageSrc = "/hero-plumber.webp" }: ServiceHeroProps) {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-14">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-700">
                                <span className="h-2 w-2 rounded-full bg-[#F8B90C]" />
                                Verified Pros
                            </span>
                            <h1 className="mt-4 text-4xl lg:text-5xl font-black text-gray-900 leading-[1.04] tracking-tight">
                                Check out {proCount} <span className="text-[#F8B90C]">{serviceName.toLowerCase()}</span> in your area
                            </h1>
                            <p className="mt-3 text-gray-500 text-base sm:text-lg">
                                Confirm your location to see highly-rated pros near you.
                            </p>
                        </div>

                        <div className="space-y-3 max-w-xl">
                            <div className="relative bg-[#FCFCFD] rounded-2xl border border-gray-200 p-1.5 shadow-[0_18px_36px_-16px_rgba(0,0,0,0.16)]">
                                <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-yellow-500" />
                                <input
                                    type="text"
                                    placeholder="San Francisco, CA"
                                    defaultValue="San Francisco, CA"
                                    className="w-full rounded-xl bg-white pl-12 pr-4 py-2.5 text-sm sm:text-base border border-transparent focus:border-[#0032FF]/30 outline-none transition-colors"
                                />
                            </div>
                            <button className="group inline-flex items-center justify-center gap-2 bg-[#F8B90C] hover:bg-[#efb30c] text-black px-6 py-2.5 rounded-xl text-sm sm:text-base font-normal transition-colors">
                                Find a pro
                                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative h-[300px] lg:h-[390px] w-full rounded-[2rem] overflow-hidden bg-gray-100 border border-gray-200 shadow-[0_24px_46px_-24px_rgba(0,0,0,0.35)]">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${imageSrc})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                            <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-white/90 px-4 py-2 backdrop-blur">
                                <p className="text-xs uppercase tracking-[0.14em] text-[#0032FF] font-semibold">Top Rated</p>
                                <p className="text-sm font-semibold text-gray-900">Trusted {serviceName.toLowerCase()} near you</p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute -bottom-10 -right-8 h-40 w-40 rounded-full bg-blue-200/30 blur-3xl" />
                    </div>

                </div>
            </div>
        </section>
    );
}

