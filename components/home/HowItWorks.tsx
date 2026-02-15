'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, ShieldCheck, CheckCircle, Star, ArrowRight } from 'lucide-react';

const steps = [
    {
        title: 'Search for Service',
        description: 'Tell us what you need, from a leaky faucet to a full home renovation. We match you with the right local pros.',
        step: '01',
        icon: Search,
        tag: 'Instant Match',
        phoneLabel: 'SEARCH A SERVICE',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Compare & Choose',
        description: 'Review top-rated local professionals, their ratings, past work, and transparent pricing quotes.',
        step: '02',
        icon: Users,
        tag: 'Verified Pros',
        phoneLabel: 'CHOOSE A PRO',
        image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Book & Pay Securely',
        description: 'Secure your slot and pay safely through our encrypted platform. Your money is held safely until the job is done.',
        step: '03',
        icon: ShieldCheck,
        tag: 'Safe Payment',
        phoneLabel: 'SECURE BOOKING',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Relax & Enjoy',
        description: 'Your pro shows up on time, the job gets done, and you enjoy a stress-free home.',
        step: '04',
        icon: CheckCircle,
        tag: 'Quality Guaranteed',
        phoneLabel: 'PROJECT SUCCESS',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
    },
];

export default function HowItWorks() {
    const [activeIndex, setActiveIndex] = useState(0);
    const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        const updateActiveStepFromScroll = () => {
            if (typeof window === 'undefined') return;
            const anchor = window.innerHeight * 0.4;
            let nextIndex = 0;
            let nearestDistance = Number.POSITIVE_INFINITY;

            stepRefs.current.forEach((el, idx) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const marker = rect.top + rect.height * 0.35;
                const distance = Math.abs(marker - anchor);
                if (distance < nearestDistance) {
                    nearestDistance = distance;
                    nextIndex = idx;
                }
            });

            setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
        };

        updateActiveStepFromScroll();
        window.addEventListener('scroll', updateActiveStepFromScroll, { passive: true });
        window.addEventListener('resize', updateActiveStepFromScroll);

        return () => {
            window.removeEventListener('scroll', updateActiveStepFromScroll);
            window.removeEventListener('resize', updateActiveStepFromScroll);
        };
    }, []);

    return (
        <section id="how-it-works" className="relative bg-gradient-to-b from-white to-slate-50 pt-8 pb-14 lg:pt-10 lg:pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-20 mb-8 lg:mb-10"
                >
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.05] tracking-tight">
                        How Balozy <br />
                        <span className="text-balozy-gold drop-shadow-sm">Works.</span>
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-xl font-medium leading-relaxed">
                        From search to hire, we make finding the right professional simple, transparent, and stress-free.
                    </p>
                </motion.div>
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

                    {/* Left Column: Sticky Phone */}
                    <div className="lg:w-5/12">
                        {/* Phone Mockup Section */}
                        <div className="relative mt-4 mb-6 pt-2 lg:mt-0 lg:mb-0 lg:pt-6 flex justify-center lg:justify-start lg:sticky lg:top-28">
                                <motion.div
                                    className="relative w-[220px] h-[460px] sm:w-[248px] sm:h-[518px] rounded-[3rem] sm:rounded-[3.2rem] p-2.5 bg-gradient-to-b from-[#1A1A1A] to-[#080808] shadow-[0_40px_70px_-34px_rgba(0,0,0,0.5)] sm:shadow-[0_50px_100px_-34px_rgba(0,0,0,0.55)] ring-1 ring-black/20"
                                    initial={{ opacity: 0, scale: 0.9, rotateY: -5 }}
                                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                >
                                    <div className="absolute inset-[3px] rounded-[2.8rem] border border-white/10 pointer-events-none" />

                                    {/* Inner Screen Shadow and Glass Effect */}
                                    <div className="w-full h-full bg-white rounded-[2.6rem] overflow-hidden relative shadow-inner">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/40 to-transparent pointer-events-none z-20" />
                                        <div className="absolute left-4 top-0 h-24 w-16 bg-white/35 blur-xl pointer-events-none z-20" />

                                        {/* Status Bar */}
                                        <div className="absolute top-0 left-0 right-0 h-7 flex items-center justify-between px-8 z-30 bg-white/75 backdrop-blur-md border-b border-gray-100/80">
                                            <span className="text-[10px] font-bold text-gray-900 tracking-tight">9:41</span>
                                            <div className="flex gap-1.5 items-center">
                                                <div className="w-3.5 h-1.5 bg-gray-900 rounded-full" />
                                                <div className="w-1.5 h-1.5 bg-gray-900/30 rounded-full" />
                                            </div>
                                        </div>

                                        {/* Dynamic Content */}
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeIndex}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                                className="w-full h-full pt-10"
                                            >
                                                <PhoneScreen step={steps[activeIndex]} />
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* Physical Detail: Notch */}
                                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-40 flex items-center justify-center gap-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                                        <div className="w-7 h-1 bg-gray-700 rounded-full" />
                                        <div className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
                                    </div>
                                </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Steps List */}
                    <div className="lg:w-7/12 pt-2 lg:py-8">
                        <div className="space-y-7 lg:space-y-9">
                            {steps.map((step, idx) => (
                                <motion.div
                                    key={step.step}
                                    ref={(el) => {
                                        stepRefs.current[idx] = el;
                                    }}
                                    initial={{ opacity: 0, y: 72, scale: 0.98 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: false, amount: 0.3, margin: "0px 0px -12% 0px" }}
                                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                    className={`transition-all duration-500 ${
                                        activeIndex === idx ? 'opacity-100' : 'opacity-70'
                                    }`}
                                >
                                    <StepContent step={step} isLast={idx === steps.length - 1} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </section>
    );
}

function StepContent({ step, isLast }: { step: (typeof steps)[number]; isLast: boolean }) {
    return (
        <div className="relative pl-10 lg:pl-12 min-h-[420px] lg:min-h-[500px]">
            <div className="space-y-7">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="flex items-center gap-5"
                >
                    <span className="text-[11px] font-extrabold tracking-[0.16em] text-balozy-gold">
                        STEP {step.step}
                    </span>
                    <div className="h-px w-16 bg-balozy-gold/50" />
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-[0.98]"
                >
                    {step.title}
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
                    className="text-base sm:text-lg text-gray-500 leading-relaxed font-medium max-w-xl"
                >
                    {step.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 }}
                    className="relative pt-2"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#F7F2E4] border border-[#E9D69A] flex items-center justify-center shadow-[0_8px_18px_-14px_rgba(234,179,8,0.75)]">
                            <step.icon className="w-5 h-5 text-balozy-gold" />
                        </div>
                        <div>
                            <div className="text-xs tracking-[0.14em] text-gray-700 font-semibold uppercase">INSTANT MATCH</div>
                            <div className="text-sm text-gray-400">Verified Professionals</div>
                        </div>
                    </div>
                    {!isLast && <div className="absolute left-6 top-14 h-12 w-px bg-[#E7DFCA]" />}
                </motion.div>

                <div className="pt-7 h-[76px]">
                    {isLast ? (
                        <button className="bg-balozy-blue text-white px-7 py-3.5 rounded-xl font-black text-base shadow-xl shadow-balozy-blue/20 hover:scale-105 transition-transform flex items-center gap-2.5 group">
                            Find a Pro Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                        </button>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

function PhoneScreen({ step }: { step: (typeof steps)[number] }) {
    return (
        <div className="relative h-full w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${step.image})` }}
            />
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[86%] h-9 flex items-center px-3 gap-2 bg-white/95">
                <Search className="w-4 h-4 text-balozy-gold" />
                <div className="h-1.5 w-24 bg-gray-200" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/80 via-black/45 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[11px] font-black tracking-[0.18em] text-balozy-gold uppercase">Step {step.step}</span>
                <h4 className="text-white text-3xl font-black leading-tight mt-1 uppercase">{step.phoneLabel}</h4>
                <div className="mt-2 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-balozy-gold fill-balozy-gold" />
                    ))}
                </div>
                <div className="mt-3 h-1 bg-balozy-gold" />
            </div>
        </div>
    );
}
