'use client';

import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        >
                            Get in touch
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 max-w-2xl mx-auto"
                        >
                            Have a question or need help? We're here for you. Reach out to our team via email, phone, or the form below.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">

                        {/* Contact Information */}
                        <div className="bg-balozy-blue p-10 text-white flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-lg">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white/60 mb-1">Phone</p>
                                            <p className="text-lg">+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-lg">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white/60 mb-1">Email</p>
                                            <p className="text-lg">support@balozy.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-lg">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white/60 mb-1">Office</p>
                                            <p className="text-lg">123 Market Street<br />San Francisco, CA 94103</p>
                                        </div>
                                    </div>
                                    {/* <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-lg">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white/60 mb-1">Hours</p>
                                            <p className="text-lg">Mon-Fri: 9am - 6pm PST</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            <div className="mt-12 bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                                <p className="text-lg font-medium mb-4">"Balozy's support team is incredible. They resolved my issue in minutes!"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">JD</div>
                                    <div>
                                        <p className="font-bold">John Doe</p>
                                        <p className="text-sm text-white/60">Verified User</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-10 lg:p-12 bg-white">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-balozy-blue focus:border-transparent outline-none transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-balozy-blue focus:border-transparent outline-none transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-balozy-blue focus:border-transparent outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-balozy-blue focus:border-transparent outline-none transition-all"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Support Request</option>
                                        <option>Partnership</option>
                                        <option>Press</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-balozy-blue focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-balozy-blue hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
                                >
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
