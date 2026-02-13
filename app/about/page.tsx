'use client';

import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Shield, Users, Clock, Star, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-24 pb-20">
                {/* Hero Section */}
                <section className="relative overflow-hidden mb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
                        >
                            About <span className="text-balozy-gold">Balozy</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        >
                            Building the world's most trusted home services platform. We connect homeowners with verified professionals they can count on.
                        </motion.p>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Started in 2024, Balozy was born from a simple frustration: finding reliable help for home projects was too hard. Calls went unanswered, prices were unclear, and quality was a toss-up.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    We set out to change that. By building a platform that prioritizes trust, transparency, and speed, we've made it effortless for thousands of homeowners to get their to-do lists done.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Today, Balozy is the go-to destination for everything from quick repairs to major renovations.
                                </p>
                            </div>
                            <div className="flex-1">
                                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="text-center p-4">
                                            <div className="text-4xl font-bold text-balozy-blue mb-2">50k+</div>
                                            <div className="text-gray-600 font-medium">Happy Customers</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <div className="text-4xl font-bold text-balozy-gold mb-2">12k+</div>
                                            <div className="text-gray-600 font-medium">Verified Pros</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <div className="text-4xl font-bold text-green-500 mb-2">4.8</div>
                                            <div className="text-gray-600 font-medium">Average Rating</div>
                                        </div>
                                        <div className="text-center p-4">
                                            <div className="text-4xl font-bold text-purple-500 mb-2">100%</div>
                                            <div className="text-gray-600 font-medium">Satisfaction</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Values */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We are driven by a singular mission: to make caring for your home as easy as living in it.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ValueCard
                                icon={Shield}
                                title="Trust First"
                                description="We rigorously vet every professional on our platform to ensure safety and quality."
                                color="text-balozy-gold"
                                bgColor="bg-balozy-gold/10"
                            />
                            <ValueCard
                                icon={Heart}
                                title="Customer Obsessed"
                                description="We go above and beyond to ensure every homeowner is delighted with the result."
                                color="text-red-500"
                                bgColor="bg-red-50"
                            />
                            <ValueCard
                                icon={Target}
                                title="Excellence"
                                description="We set high standards for ourselves and our pros, never settling for 'good enough'."
                                color="text-balozy-blue"
                                bgColor="bg-blue-50"
                            />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

function ValueCard({ icon: Icon, title, description, color, bgColor }: { icon: any, title: string, description: string, color: string, bgColor: string }) {
    return (
        <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow text-center group">
            <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-8 h-8 ${color}`} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}
