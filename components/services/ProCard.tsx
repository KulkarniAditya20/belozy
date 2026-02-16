'use client';

import React from 'react';
import { Star, Award, Trophy, ChevronRight } from 'lucide-react';

interface ProReview {
    author: string;
    text: string;
}

export interface ProCardProps {
    id: string;
    name: string;
    rating: number;
    reviewCount: number;
    isTopPro: boolean;
    tags: string[];
    price: string;
    hires: number;
    location: string;
    isOnline: boolean;
    latestReview?: ProReview;
    imageUrl?: string;
    isPromoted?: boolean;
}

export default function ProCard({
    name,
    rating,
    reviewCount,
    isTopPro,
    tags,
    price,
    hires,
    location,
    isOnline,
    latestReview,
    imageUrl = "/placeholder-pro.jpg"
}: ProCardProps) {
    return (
        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F8B90C]/60 hover:shadow-[0_28px_48px_-26px_rgba(0,50,255,0.25)]">
            <div className="flex flex-col md:flex-row gap-5">

                {/* Avatar */}
                <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-gray-200 relative border border-gray-200">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${imageUrl})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center text-white/85 text-lg font-bold text-center p-2">
                            {name.charAt(0)}
                        </div>
                        <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-3">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-extrabold text-gray-900">{name}</h3>

                            <div className="flex items-center gap-2 mt-1">
                                {isTopPro && (
                                    <span className="flex items-center gap-1 text-[#0032FF] font-semibold text-sm">
                                        <Award className="w-4 h-4 fill-current" />
                                        Top Pro
                                    </span>
                                )}
                                <span className="flex items-center text-sm text-[#0032FF] font-bold">
                                    {isTopPro ? "Great " : ""}{rating} <Star className="w-4 h-4 fill-current ml-0.5" />
                                </span>
                                <span className="text-gray-500 text-sm">({reviewCount})</span>
                            </div>
                        </div>

                        <div className="md:text-right">
                            <span className="inline-flex items-center rounded-full border border-[#F8B90C]/45 bg-[#F8B90C]/12 px-3 py-1 text-xs font-medium text-amber-700">
                                Free service call
                            </span>
                        </div>
                    </div>

                    <div className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                        {tags.join(', ')}
                    </div>

                    <div className="flex flex-wrap gap-2 items-center text-sm text-gray-500">
                        {price && (
                            <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">
                                {price}
                            </span>
                        )}
                        <span className="flex items-center gap-1">
                            <Trophy className="w-3.5 h-3.5" />
                            {hires} hires on Balozy
                        </span>
                        <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {location}
                        </span>
                    </div>

                    {isOnline && (
                        <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Online now
                        </div>
                    )}

                    {latestReview && (
                        <div className="mt-2 bg-gray-50 p-3 rounded-xl text-sm text-gray-700 border border-gray-100">
                            <p>"{latestReview.text}" <button className="text-[#0032FF] hover:underline">See more</button></p>
                            <p className="mt-1 text-gray-500 font-medium text-xs">- {latestReview.author}</p>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex-shrink-0 md:self-end">
                    <button className="group w-full md:w-auto bg-[#F8B90C] hover:bg-[#efb30c] text-black font-normal text-sm py-2.5 px-5 rounded-xl transition-colors inline-flex items-center justify-center gap-1.5">
                        View profile
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

            </div>
        </article>
    );
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}
