import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <a href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                                <span className="text-white text-base font-black italic">B</span>
                            </div>
                            <span className="text-2xl font-black text-gray-900 tracking-tight">Balozy</span>
                        </a>
                        <p className="text-sm text-gray-400 leading-relaxed font-medium">
                            The premium marketplace for world-class home services. Connecting homeowners with the finest verified professionals.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all duration-300">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-8">Services</h4>
                        <ul className="space-y-4">
                            {['Plumbing', 'Electrical', 'Cleaning', 'Landscaping'].map((item) => (
                                <li key={item}>
                                    <a href={`/services_data#${item.toLowerCase()}`} className="text-sm font-bold text-gray-400 hover:text-black transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-8">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'How It Works', 'Become a Pro', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm font-bold text-gray-400 hover:text-black transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-8">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm font-bold text-gray-400">
                                <Mail className="w-4 h-4 text-balozy-gold" />
                                <span>hello@balozy.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm font-bold text-gray-400">
                                <Phone className="w-4 h-4 text-balozy-gold" />
                                <span>+1 (555) 000-0000</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm font-bold text-gray-400">
                                <MapPin className="w-4 h-4 text-balozy-gold" />
                                <span>San Francisco, CA</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-300">
                        &copy; 2024 Balozy Inc. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        {['Privacy Policy', 'Terms of Service'].map(item => (
                            <a key={item} href="#" className="text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-gray-900 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

import { MapPin } from 'lucide-react';
