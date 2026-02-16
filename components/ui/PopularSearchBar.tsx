'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, MapPin, ChevronRight } from 'lucide-react';

const DEFAULT_SUGGESTIONS = [
    'Looking for a weekly house cleaner',
    'I need a handyman for a few small jobs',
    'Monthly lawn care and gardening',
    'Fix a leaking kitchen faucet',
    'Install a ceiling fan in my living room',
];

interface PopularSearchBarProps {
    serviceValue: string;
    onServiceChange: (value: string) => void;
    locationValue: string;
    onLocationChange: (value: string) => void;
    servicePlaceholder?: string;
    locationPlaceholder?: string;
    searchLabel?: string;
    searchHref?: string;
    onSearchClick?: () => void;
    suggestions?: string[];
    className?: string;
}

export default function PopularSearchBar({
    serviceValue,
    onServiceChange,
    locationValue,
    onLocationChange,
    servicePlaceholder = 'What service do you need?',
    locationPlaceholder = 'San Francisco, CA',
    searchLabel = 'Search',
    searchHref,
    onSearchClick,
    suggestions = DEFAULT_SUGGESTIONS,
    className = '',
}: PopularSearchBarProps) {
    const [isFocused, setIsFocused] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const wrapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleOutside = (event: MouseEvent) => {
            if (!wrapRef.current) return;
            if (!wrapRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleOutside);
        return () => document.removeEventListener('mousedown', handleOutside);
    }, []);

    const filteredSuggestions = useMemo(
        () => suggestions.filter((item) => item.toLowerCase().includes(serviceValue.toLowerCase())),
        [serviceValue, suggestions]
    );

    const closeSuggestions = () => {
        setShowSuggestions(false);
        if (onSearchClick) onSearchClick();
    };

    return (
        <div className={`relative ${className}`} ref={wrapRef}>
            <div className="relative bg-[#FCFCFD] rounded-2xl border border-gray-200 transition-all duration-500 p-1.5 flex flex-col md:flex-row items-stretch gap-1.5 shadow-[0_18px_36px_-16px_rgba(0,0,0,0.16)] hover:shadow-[0_22px_44px_-16px_rgba(0,0,0,0.22)]">
                <div
                    className={`flex-[1.4] flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors ${
                        isFocused === 'service' ? 'bg-black/[0.03]' : ''
                    }`}
                >
                    <Search className="w-5 h-5 text-yellow-500 transition-colors" />
                    <input
                        type="text"
                        placeholder={servicePlaceholder}
                        value={serviceValue}
                        onChange={(e) => onServiceChange(e.target.value)}
                        onFocus={() => {
                            setIsFocused('service');
                            setShowSuggestions(true);
                        }}
                        onBlur={() => setIsFocused('')}
                        onKeyDown={(e) => {
                            if (e.key === 'Escape') setShowSuggestions(false);
                        }}
                        className="w-full bg-transparent outline-none text-gray-900 text-sm sm:text-base font-normal placeholder:text-gray-400"
                    />
                </div>

                <div className="hidden md:flex items-center justify-center px-1">
                    <div className="relative h-10 w-px bg-gradient-to-b from-transparent via-gray-300/80 to-transparent">
                        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300/90" />
                    </div>
                </div>

                <div
                    className={`flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors ${
                        isFocused === 'location' ? 'bg-black/[0.03]' : ''
                    }`}
                >
                    <MapPin className="w-5 h-5 text-yellow-500 transition-colors" />
                    <input
                        type="text"
                        placeholder={locationPlaceholder}
                        value={locationValue}
                        onChange={(e) => onLocationChange(e.target.value)}
                        onFocus={() => setIsFocused('location')}
                        onBlur={() => setIsFocused('')}
                        className="w-full bg-transparent outline-none text-gray-900 text-sm sm:text-base font-normal placeholder:text-gray-400"
                    />
                </div>

                <div className="hidden md:flex items-center justify-center px-1">
                    <div className="relative h-10 w-px bg-gradient-to-b from-transparent via-gray-300/80 to-transparent">
                        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300/90" />
                    </div>
                </div>

                {searchHref ? (
                    <a
                        href={searchHref}
                        onClick={closeSuggestions}
                        className="group bg-[#F8B90C] hover:bg-[#efb30c] text-black rounded-xl px-6 py-2.5 font-normal text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
                    >
                        {searchLabel}
                        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                ) : (
                    <button
                        type="button"
                        onClick={closeSuggestions}
                        className="group bg-[#F8B90C] hover:bg-[#efb30c] text-black rounded-xl px-6 py-2.5 font-normal text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
                    >
                        {searchLabel}
                        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                )}
            </div>

            {showSuggestions && (
                <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-30 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_24px_48px_-24px_rgba(0,0,0,0.35)] text-left">
                    <div className="border-b border-gray-100 px-4 py-3 text-sm font-medium text-gray-500">
                        Popular searches
                    </div>
                    <div className="py-1.5">
                        {(filteredSuggestions.length > 0 ? filteredSuggestions.slice(0, 3) : suggestions.slice(0, 3)).map((item) => (
                            <button
                                key={item}
                                onMouseDown={() => {
                                    onServiceChange(item);
                                    setShowSuggestions(false);
                                }}
                                className="flex w-full items-center gap-3 px-4 py-3 text-left text-lg text-gray-800 transition-colors hover:bg-[#0032FF]/5"
                            >
                                <Search className="h-5 w-5 text-gray-500" />
                                <span>{item}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
