'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Users, Briefcase } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="py-16 lg:py-20 px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative rounded-[2.25rem] lg:rounded-[2.75rem] border border-[#1E2536] bg-[#0A0D14] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 overflow-hidden shadow-[0_40px_90px_-40px_rgba(0,0,0,0.7)]"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(248,185,12,0.15),transparent_38%),radial-gradient(circle_at_85%_35%,rgba(0,50,255,0.16),transparent_42%)] pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-center relative z-10">
                        <div className="space-y-6 text-center lg:text-left">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 py-1.5 px-3.5 bg-white/5 border border-white/10 text-white/70 text-[10px] font-black uppercase tracking-[0.16em] rounded-full"
                            >
                                <span className="w-2 h-2 bg-balozy-gold rounded-full" />
                                Start your project today
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.02] tracking-tight"
                            >
                                Ready to fix your <br />
                                <span className="text-balozy-gold">home issues?</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-base sm:text-lg text-gray-300/90 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
                            >
                                Join 10,000+ happy homeowners who trust Balozy. Professional work, guaranteed arrival times, and secure pricing.
                            </motion.p>

                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                                <button className="bg-balozy-gold hover:bg-[#FFCC40] text-black px-7 py-3.5 rounded-xl font-black text-base shadow-[0_16px_34px_-16px_rgba(248,185,12,0.65)] transition-all flex items-center justify-center gap-2.5 group">
                                    Get Started Now
                                    <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="border border-white/15 hover:bg-white/5 text-white px-7 py-3.5 rounded-xl font-black text-base transition-all flex items-center justify-center gap-2.5">
                                    Become a Pro
                                    <Briefcase className="w-4.5 h-4.5 opacity-70" />
                                </button>
                            </div>

                            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-white/90">
                                <span className="inline-flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                    Verified professionals
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                    Transparent pricing
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                    Secure checkout
                                </span>
                            </div>
                        </div>

                        <div className="relative flex justify-center lg:justify-end">
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] w-full max-w-[340px]"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-balozy-blue/10 text-balozy-blue rounded-xl flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-gray-900 tracking-tight">100%</div>
                                        <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.14em]">Satisfaction rate</div>
                                    </div>
                                </div>

                                <div className="space-y-3.5">
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            transition={{ duration: 1.5, delay: 0.6 }}
                                            className="h-full bg-balozy-gold"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3, 4].map(i => (
                                                <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                                    <img src={`https://i.pravatar.cc/100?u=cta-${i}`} alt="User" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-3.5 h-3.5 text-balozy-gold fill-balozy-gold" />
                                            <span className="text-xs font-black text-gray-900">4.9/5</span>
                                        </div>
                                    </div>
                                </div>

                                <motion.div
                                    className="absolute -right-4 -top-4 bg-balozy-blue text-white p-3 rounded-xl shadow-lg flex flex-col items-center"
                                    animate={{ rotate: [0, 5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    <Users className="w-5 h-5 mb-0.5" />
                                    <span className="text-[8px] font-black tracking-[0.12em] leading-none">TRUSTED</span>
                                    <span className="text-[11px] font-black leading-tight">10K+</span>
                                </motion.div>
                            </motion.div>

                            <div className="absolute top-1/2 right-6 -translate-y-1/2 w-40 h-40 bg-balozy-gold/20 rounded-full blur-3xl pointer-events-none" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
