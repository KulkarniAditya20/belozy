'use client';

import React from 'react';
import { Star, Award, MessageCircle, Trophy, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

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
        <div className="bg-white border-b border-gray-200 py-8 first:border-t hover:bg-gray-50 transition-colors">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">

                {/* Avatar */}
                <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200 relative">
                        {/* Placeholder avatar */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500 text-xs text-center p-2">
                            {name.charAt(0)}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-3">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">{name}</h3>

                            <div className="flex items-center gap-2 mt-1">
                                {isTopPro && (
                                    <span className="flex items-center gap-1 text-[#009FD6] font-semibold text-sm">
                                        <Award className="w-4 h-4 fill-current" />
                                        Top Pro
                                    </span>
                                )}
                                <span className={`flex items-center text-sm ${isTopPro ? "text-[#00c68e]" : "text-balozy-gold"} font-bold`}>
                                    {isTopPro ? "Great " : ""}{rating} <Star className="w-4 h-4 fill-current ml-0.5" />
                                </span>
                                <span className="text-gray-500 text-sm">({reviewCount})</span>
                            </div>
                        </div>

                        <div className="md:text-right">
                            {/* Pricing or secondary CTA could go here on desktop */}
                            <span className="text-sm font-semibold text-gray-900">Free service call</span>
                        </div>
                    </div>

                    <div className="text-gray-600 text-sm line-clamp-2">
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
                            {hires} hires on Thumbtack
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
                        <div className="mt-4 bg-gray-50 p-4 rounded-lg text-sm text-gray-700">
                            <p>"{latestReview.text}" <button className="text-[#009FD6] hover:underline">See more</button></p>
                            <p className="mt-1 text-gray-500 font-medium text-xs">- {latestReview.author}</p>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex-shrink-0 md:self-end">
                    <button className="w-full md:w-auto bg-[#009FD6] hover:bg-[#008CC0] text-white font-bold py-2.5 px-6 rounded-md transition-colors">
                        View profile
                    </button>
                    {/* Message icon for mobile or secondary action */}
                </div>

            </div>
        </div>
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
