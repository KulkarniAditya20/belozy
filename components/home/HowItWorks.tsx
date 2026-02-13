'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, ShieldCheck, CheckCircle, Star, ArrowRight, Lock, MapPin, CreditCard, Sparkles } from 'lucide-react';

const steps = [
    {
        title: 'Search for Service',
        description: 'Tell us what you need, from a leaky faucet to a full home renovation. We match you with the right local pros.',
        step: '01',
        icon: Search,
        tag: 'Instant Match',
    },
    {
        title: 'Compare & Choose',
        description: 'Review top-rated local professionals, their ratings, past work, and transparent pricing quotes.',
        step: '02',
        icon: Users,
        tag: 'Verified Pros',
    },
    {
        title: 'Book & Pay Securely',
        description: 'Secure your slot and pay safely through our encrypted platform. Your money is held safely until the job is done.',
        step: '03',
        icon: ShieldCheck,
        tag: 'Safe Payment',
    },
    {
        title: 'Relax & Enjoy',
        description: 'Your pro shows up on time, the job gets done, and you enjoy a stress-free home.',
        step: '04',
        icon: CheckCircle,
        tag: 'Quality Guaranteed',
    },
];

export default function HowItWorks() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="how-it-works" className="relative bg-[#FAFAFA] pt-8 pb-20 lg:pt-12 lg:pb-32">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-balozy-blue/[0.02] to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-balozy-gold/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Left Column: Sticky Title & Phone */}
                    <div className="lg:w-5/12">
                        <div className="lg:sticky lg:top-12 h-fit space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <span className="inline-block py-1 px-3 bg-balozy-blue/10 text-balozy-blue text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">
                                    Our Process
                                </span>
                                <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight">
                                    How Balozy <br />
                                    <span className="text-balozy-gold drop-shadow-sm">Works.</span>
                                </h2>
                                <p className="mt-8 text-lg text-gray-500 max-w-sm font-medium leading-relaxed">
                                    From search to hire, we make finding the right professional simple, transparent, and stress-free.
                                </p>
                            </motion.div>

                            {/* Phone Mockup Section */}
                            <div className="relative pt-2">
                                <motion.div
                                    className="relative w-[280px] h-[580px] bg-[#0A0A0A] rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4),0_30px_60px_-30px_rgba(0,0,0,0.5)] border-[8px] border-[#1A1A1A] ring-1 ring-white/10"
                                    initial={{ opacity: 0, scale: 0.9, rotateY: -5 }}
                                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                >
                                    {/* Inner Screen Shadow and Glass Effect */}
                                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative shadow-inner">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/50 to-transparent pointer-events-none z-20" />

                                        {/* Status Bar */}
                                        <div className="absolute top-0 left-0 right-0 h-6 flex items-center justify-between px-8 z-30 bg-white/80 backdrop-blur-sm">
                                            <span className="text-[10px] font-bold text-gray-900">9:41</span>
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
                                                {activeIndex === 0 && <SearchAppScreen />}
                                                {activeIndex === 1 && <CompareAppScreen />}
                                                {activeIndex === 2 && <PaymentAppScreen />}
                                                {activeIndex === 3 && <SuccessAppScreen />}
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* Physical Detail: Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#0A0A0A] rounded-b-[1.5rem] z-40 flex items-center justify-center gap-2">
                                        <div className="w-8 h-1 bg-gray-800 rounded-full" />
                                        <div className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
                                    </div>
                                </motion.div>

                                {/* Floating Label for Phone */}
                                <motion.div
                                    className="absolute -right-8 top-1/2 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 z-50"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] font-bold text-gray-900">Live Matching</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Steps List */}
                    <div className="lg:w-7/12 space-y-24 py-12 lg:py-32">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                onViewportEnter={() => setActiveIndex(idx)}
                                viewport={{ amount: 0.5, margin: "-20% 0px -40% 0px" }}
                                className={`relative pl-16 lg:pl-24 group cursor-default transition-all duration-700 ${activeIndex === idx ? 'opacity-100 scale-100' : 'opacity-20 translate-x-4 scale-95'}`}
                            >
                                {/* Connector Line with Progress Animation */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200/50 rounded-full overflow-hidden">
                                    {activeIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: "100%" }}
                                            transition={{ duration: 1, ease: "easeInOut" }}
                                            className="w-full bg-balozy-blue shadow-[0_0_10px_rgba(0,50,255,0.5)]"
                                        />
                                    )}
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <span className={`text-[11px] font-black tracking-[0.2em] transition-colors duration-500 ${activeIndex === idx ? 'text-balozy-gold' : 'text-gray-300'}`}>
                                            STEP {step.step}
                                        </span>
                                        <div className={`h-px w-10 transition-colors duration-500 ${activeIndex === idx ? 'bg-balozy-gold' : 'bg-gray-200'}`} />
                                    </div>

                                    <h3 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                                        {step.title}
                                    </h3>

                                    <p className="text-xl text-gray-500 leading-relaxed font-medium max-w-lg">
                                        {step.description}
                                    </p>

                                    {/* Action/Badge for active step */}
                                    <motion.div
                                        className="flex items-center gap-3 pt-4"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={activeIndex === idx ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                    >
                                        <div className="p-2.5 bg-balozy-blue/5 text-balozy-blue rounded-xl">
                                            <step.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-bold text-balozy-blue uppercase tracking-wider">{step.tag}</span>
                                    </motion.div>

                                    {idx === steps.length - 1 && (
                                        <motion.div
                                            className="pt-12"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                        >
                                            <button className="bg-balozy-blue text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-balozy-blue/20 hover:scale-105 transition-transform flex items-center gap-3 group">
                                                Find a Pro Now
                                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                                            </button>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

// PREMIUM APP SCREEN COMPONENTS

function SearchAppScreen() {
    return (
        <div className="p-5 flex flex-col gap-6 h-full">
            <div className="h-44 bg-[#F8F9FA] rounded-[2rem] relative overflow-hidden p-6 flex flex-col justify-end group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-balozy-gold/10 rounded-full blur-2xl -mr-10 -mt-10" />
                <Sparkles className="absolute top-4 right-4 w-5 h-5 text-balozy-gold opacity-30" />

                <h4 className="text-sm font-black text-gray-900 mb-4 tracking-tight leading-tight">What can we help you <br /> with today?</h4>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white p-3.5 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center gap-3"
                >
                    <Search className="w-4 h-4 text-balozy-blue" />
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold leading-none">SEARCHING FOR</span>
                        <span className="text-xs text-gray-900 font-black">Plumbers near me</span>
                    </div>
                </motion.div>
            </div>

            <div className="space-y-3">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Popular Services</span>
                <div className="grid grid-cols-2 gap-3">
                    {['Landscaping', 'Cleaning', 'Electrical', 'Painting'].map((cat, i) => (
                        <motion.div
                            key={cat}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col gap-2 hover:border-balozy-blue/20 transition-colors"
                        >
                            <div className="w-7 h-7 bg-balozy-blue/5 rounded-lg flex items-center justify-center text-balozy-blue">
                                <Search className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-[10px] font-black text-gray-800">{cat}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function CompareAppScreen() {
    return (
        <div className="p-5 flex flex-col gap-5 h-full">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black text-gray-900 tracking-tight">Top Rated Pros</span>
                <div className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[8px] font-black rounded-full">8 AVAILABLE</div>
            </div>

            {[
                { name: 'Marcus Steel', job: 'Master Electrician', rating: 5.0, img: 'https://i.pravatar.cc/150?u=m' },
                { name: 'Elena Rivers', job: 'Interior Designer', rating: 4.9, img: 'https://i.pravatar.cc/150?u=e' },
            ].map((pro, i) => (
                <motion.div
                    key={i}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="p-4 bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-200/30 flex items-center gap-4 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-balozy-blue/5 rounded-bl-full" />
                    <img src={pro.img} className="w-12 h-12 rounded-2xl object-cover ring-2 ring-gray-50" alt="" />
                    <div className="flex-1">
                        <div className="text-[11px] font-black text-gray-900">{pro.name}</div>
                        <div className="text-[9px] text-gray-400 font-bold mb-1.5 uppercase tracking-tighter">{pro.job}</div>
                        <div className="flex items-center gap-1">
                            <Star className="w-2.5 h-2.5 text-balozy-gold fill-balozy-gold" />
                            <span className="text-[10px] text-gray-900 font-black">{pro.rating}</span>
                        </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-balozy-blue" />
                </motion.div>
            ))}

            <div className="mt-auto p-4 bg-balozy-blue text-white rounded-2xl shadow-xl shadow-balozy-blue/20 flex items-center justify-between">
                <div className="text-[10px] font-black uppercase">Start Chat</div>
                <Users className="w-4 h-4 text-white/50" />
            </div>
        </div>
    );
}

function PaymentAppScreen() {
    return (
        <div className="p-5 flex flex-col gap-6 h-full">
            <h4 className="text-sm font-black text-gray-900 tracking-tight">Secure Checkout</h4>

            <motion.div
                initial={{ rotateX: 20, y: 20, opacity: 0 }}
                animate={{ rotateX: 0, y: 0, opacity: 1 }}
                className="w-full h-44 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] p-6 text-white relative flex flex-col justify-between shadow-2xl shadow-black/20"
            >
                <div className="flex justify-between items-start">
                    <CreditCard className="w-8 h-8 text-balozy-gold" />
                    <Lock className="w-4 h-4 text-white/30" />
                </div>
                <div>
                    <div className="text-[9px] font-bold text-white/40 mb-1 uppercase tracking-widest">Premium Member</div>
                    <div className="text-sm font-black tracking-[0.2em] mb-4 text-white/90">**** **** **** 4892</div>
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black">ADITYA KULKARNI</span>
                        <div className="flex gap-1">
                            <div className="w-4 h-4 bg-white/20 rounded-full" />
                            <div className="w-4 h-4 bg-white/10 rounded-full" />
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="space-y-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="flex justify-between items-center text-[10px] font-bold">
                    <span className="text-gray-400 uppercase">Service Fee</span>
                    <span className="text-gray-900">$120.00</span>
                </div>
                <div className="h-px bg-gray-200/50" />
                <div className="flex justify-between items-center text-xs font-black">
                    <span className="text-gray-900">Total</span>
                    <span className="text-balozy-blue">$120.00</span>
                </div>
            </div>

            <button className="w-full bg-emerald-500 text-white py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[11px] font-black uppercase">Pay Securely</span>
            </button>
        </div>
    );
}

function SuccessAppScreen() {
    return (
        <div className="p-5 flex flex-col items-center justify-center h-full gap-8">
            <div className="relative">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10, stiffness: 100 }}
                    className="w-28 h-28 bg-emerald-500 rounded-full flex items-center justify-center text-white relative z-10 shadow-2xl shadow-emerald-500/40 border-[6px] border-white"
                >
                    <CheckCircle className="w-12 h-12" />
                </motion.div>
                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-emerald-500 rounded-full blur-xl"
                />
            </div>

            <div className="text-center space-y-2">
                <h4 className="text-xl font-black text-gray-900 tracking-tight">Job Completed!</h4>
                <p className="text-[10px] text-gray-400 font-medium px-4">Your space has been transformed. Your payment has been released to Marcus Steel.</p>
            </div>

            <div className="w-full bg-white p-5 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col items-center gap-4">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest text-center">Rate Marcus Steel</span>
                <div className="flex gap-2.5">
                    {[1, 2, 3, 4, 5].map(i => (
                        <Star key={i} className="w-6 h-6 text-balozy-gold fill-balozy-gold" />
                    ))}
                </div>
                <button className="w-full h-11 border-2 border-balozy-blue text-balozy-blue rounded-xl text-[10px] font-black uppercase hover:bg-balozy-blue hover:text-white transition-all">
                    Submit Review
                </button>
            </div>
        </div>
    );
}
