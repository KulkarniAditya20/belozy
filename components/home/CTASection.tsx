'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Users, Briefcase } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="py-20 px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative bg-[#0A0D14] rounded-[3rem] px-8 py-16 lg:px-16 lg:py-24 overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-balozy-blue/10 to-transparent pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-balozy-gold/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
                        <div className="lg:w-7/12 space-y-8 text-center lg:text-left">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 py-1 px-3 bg-white/5 border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-[0.2em] rounded-full"
                            >
                                <span className="w-2 h-2 bg-balozy-gold rounded-full" />
                                Start your project today
                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight"
                            >
                                Ready to fix your <br />
                                <span className="text-balozy-gold">home issues?</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
                            >
                                Join 10,000+ happy homeowners who trust Balozy. Professional work, guaranteed arrival times, and secure pricing.
                            </motion.p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
                                <button className="bg-balozy-gold hover:bg-balozy-light text-black px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-balozy-gold/10 transition-all flex items-center justify-center gap-3 group">
                                    Get Started Now
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                                </button>
                                <button className="border-2 border-white/10 hover:bg-white/5 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3">
                                    Become a Pro
                                    <Briefcase className="w-5 h-5 opacity-60" />
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-5/12 relative flex justify-center">
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative bg-white p-6 rounded-[2rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] border border-gray-100/10 w-full max-w-[320px]"
                            >
                                <div className="flex items-center gap-5 mb-4">
                                    <div className="w-14 h-14 bg-balozy-blue/5 text-balozy-blue rounded-2xl flex items-center justify-center">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-gray-900 tracking-tight">100%</div>
                                        <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Satisfaction rate</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
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
                                                <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gray-200" />
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-3 h-3 text-balozy-gold fill-balozy-gold" />
                                            <span className="text-[10px] font-black text-gray-900">4.9/5</span>
                                        </div>
                                    </div>
                                </div>

                                <motion.div
                                    className="absolute -right-6 -top-6 bg-balozy-blue text-white p-4 rounded-2xl shadow-xl flex flex-col items-center"
                                    animate={{ rotate: [0, 5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    <Users className="w-6 h-6 mb-1" />
                                    <span className="text-[8px] font-black tracking-widest leading-none">TRUSTED BY</span>
                                    <span className="text-xs font-black leading-tight">10K+</span>
                                </motion.div>
                            </motion.div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-balozy-gold opacity-10 rounded-full blur-3xl pointer-events-none" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
