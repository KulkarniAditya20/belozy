'use client';

import ServicesMegaMenu from './ServicesMegaMenu';

import React, { useEffect, useRef, useState } from 'react';
import { MapPin, ChevronDown, Search, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
    const [showHeroSearchInNavbar, setShowHeroSearchInNavbar] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
    const servicesMenuRef = useRef<HTMLDivElement | null>(null);
    const lastNavbarModeSwitchAtRef = useRef(0);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 8);
            setIsServicesMenuOpen(false);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        setIsScrolled(window.scrollY > 8);

        const heroSection = document.querySelector(
            '[data-hero-section="true"], [data-navbar-search-anchor="true"]'
        ) as HTMLElement | null;
        let observer: IntersectionObserver | null = null;

        if (heroSection) {
            observer = new IntersectionObserver(
                ([entry]) => {
                    const shouldShowSearch = !entry.isIntersecting;
                    setShowHeroSearchInNavbar((prev) => {
                        if (prev === shouldShowSearch) return prev;
                        const now = Date.now();
                        if (now - lastNavbarModeSwitchAtRef.current < 200) return prev;
                        lastNavbarModeSwitchAtRef.current = now;
                        return shouldShowSearch;
                    });
                },
                {
                    root: null,
                    rootMargin: '-96px 0px 0px 0px',
                    threshold: 0,
                }
            );
            observer.observe(heroSection);
        } else {
            const fallbackTrigger = window.innerHeight * 0.7;
            setShowHeroSearchInNavbar(window.scrollY > fallbackTrigger);
        }

        return () => {
            window.removeEventListener('scroll', onScroll);
            if (observer) observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (showHeroSearchInNavbar) {
            setIsServicesMenuOpen(false);
        }
    }, [showHeroSearchInNavbar]);

    useEffect(() => {
        const handlePointerDown = (event: MouseEvent) => {
            if (!servicesMenuRef.current?.contains(event.target as Node)) {
                setIsServicesMenuOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsServicesMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handlePointerDown);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handlePointerDown);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 border-b rounded-b-2xl shadow-[0_14px_28px_-22px_rgba(0,0,0,0.35)] transition-all duration-200 ${
            isScrolled
                ? 'bg-white border-gray-200 shadow-[0_18px_34px_-22px_rgba(0,0,0,0.28)]'
                : 'bg-white/85 backdrop-blur-md border-gray-200/80'
        }`}>
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 gap-4">
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
                        <div className={showHeroSearchInNavbar
                            ? 'hidden'
                            : 'hidden md:flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-white hover:border-balozy-gold/30 hover:shadow-sm transition-all cursor-pointer group'}
                        >
                            <MapPin className="w-4 h-4 text-[#F8B90C]" />
                            <span className="font-medium group-hover:text-gray-900 transition-colors">San Francisco, CA</span>
                            <ChevronDown className="w-4 h-4 text-gray-400 transition-transform group-hover:rotate-180" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-6 lg:gap-8 shrink-0">
                        <div className="md:hidden flex items-center gap-2 sm:gap-3">
                            <a
                                href="/services_data"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:text-[#0032FF] transition-colors"
                                aria-label="Search services"
                            >
                                <Search className="h-4 w-4" />
                            </a>
                            <a href="/login" className="text-xs sm:text-sm font-medium text-gray-600 hover:text-[#0032FF] transition-colors whitespace-nowrap">
                                Sign In
                            </a>
                            <a
                                href="/get-started"
                                className="group bg-[#F8B90C] hover:bg-[#efb30c] text-black px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm font-normal transition-colors whitespace-nowrap inline-flex items-center gap-1.5"
                            >
                                Get Started
                                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                        {showHeroSearchInNavbar ? (
                            <div className="hidden md:flex flex-1 max-w-4xl">
                                <div className="w-full bg-[#FCFCFD] rounded-xl border border-gray-200 p-1.5 flex items-center gap-1.5 shadow-[0_12px_24px_-16px_rgba(0,0,0,0.2)]">
                                    <div className="flex-[1.4] flex items-center gap-2.5 px-3 py-2 rounded-lg">
                                        <Search className="w-4 h-4 text-yellow-500" />
                                        <input
                                            type="text"
                                            placeholder="What service do you need?"
                                            className="w-full bg-transparent outline-none text-sm text-gray-900 font-normal placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="h-7 w-px bg-gray-200" />
                                    <div className="flex-1 flex items-center gap-2.5 px-3 py-2 rounded-lg">
                                        <MapPin className="w-4 h-4 text-yellow-500" />
                                        <input
                                            type="text"
                                            placeholder="San Francisco, CA"
                                            className="w-full bg-transparent outline-none text-sm text-gray-900 font-normal placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div className="h-7 w-px bg-gray-200" />
                                    <a
                                        href="/services_data"
                                        className="group bg-[#F8B90C] hover:bg-[#efb30c] text-black rounded-lg px-4 py-2 font-normal text-sm transition-colors flex items-center justify-center gap-1.5"
                                    >
                                        Search
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div
                                className="relative hidden md:block"
                                ref={servicesMenuRef}
                                onMouseEnter={() => setIsServicesMenuOpen(true)}
                                onMouseLeave={() => setIsServicesMenuOpen(false)}
                            >
                                <div className="hidden md:inline-flex items-center rounded-full border border-gray-200 bg-white pl-3.5 pr-1.5 py-1 text-sm transition-all hover:border-blue-200 hover:shadow-[0_10px_20px_-14px_rgba(0,50,255,0.35)]">
                                    <a
                                        href="/services_data"
                                        className="font-medium text-gray-700 hover:text-[#0032FF] transition-colors"
                                    >
                                        Services
                                    </a>
                                    <button
                                        type="button"
                                        onClick={() => setIsServicesMenuOpen((prev) => !prev)}
                                        className="ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full text-gray-500 hover:bg-blue-50 hover:text-[#0032FF] transition-colors"
                                        aria-label="Toggle services menu"
                                        aria-haspopup="menu"
                                        aria-expanded={isServicesMenuOpen}
                                    >
                                        <ChevronDown className={`w-4 h-4 transition-transform ${isServicesMenuOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                </div>
                                {isServicesMenuOpen ? (
                                    <div className="absolute top-full right-0 pt-2 transition-all duration-300 transform z-50 opacity-100 visible translate-y-0">
                                        <ServicesMegaMenu />
                                    </div>
                                ) : null}
                            </div>
                        )}
                        <a href="/login" className="hidden md:inline-flex text-sm lg:text-base font-medium text-gray-600 hover:text-[#0032FF] transition-colors whitespace-nowrap">
                            Sign In
                        </a>
                        <a
                            href="/get-started"
                            className="hidden md:inline-flex group bg-[#F8B90C] hover:bg-[#efb30c] text-black px-5 py-2.5 rounded-lg text-sm lg:text-base font-normal transition-colors whitespace-nowrap items-center gap-1.5"
                        >
                            Get Started
                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
