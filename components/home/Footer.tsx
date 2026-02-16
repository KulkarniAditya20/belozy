import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    const SOCIAL_LINKS = [
        { icon: Twitter, href: '#', color: 'hover:text-[#0032FF]' },
        { icon: Instagram, href: '#', color: 'hover:text-[#0032FF]' },
        { icon: Linkedin, href: '#', color: 'hover:text-[#0032FF]' }
    ];

    const SERVICES = ['Plumbing', 'Electrical', 'Cleaning', 'Carpentry', 'Painting', 'Moving'];
    const COMPANY = ['About Us', 'Careers', 'How it Works', 'Trust & Safety', 'Terms', 'Privacy'];

    return (
        <footer className="bg-white/85 backdrop-blur-md border-t border-gray-200 rounded-t-2xl shadow-[0_-14px_28px_-22px_rgba(0,0,0,0.25)] pt-14 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="space-y-4">
                            <a href="/" className="flex items-center gap-2 group">
                                <Image
                                    src="/LOGO.svg"
                                    alt="Balozy Logo"
                                    width={160}
                                    height={50}
                                    className="h-10 w-auto group-hover:opacity-80 transition-opacity"
                                />
                            </a>
                            <p className="text-base text-gray-500 leading-relaxed max-w-sm">
                                The premier marketplace for local home services. Verified professionals for homeowners since 2010.
                            </p>
                        </div>
                        
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((social, i) => (
                                <a 
                                    key={i} 
                                    href={social.href} 
                                    className={`w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center text-gray-400 ${social.color} hover:border-current hover:bg-gray-50 transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-1`}
                                >
                                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 mb-8">Services</h4>
                            <ul className="space-y-4">
                                {SERVICES.map((item) => (
                                    <li key={item}>
                                        <a href={`/services_data#${item.toLowerCase()}`} className="text-base text-gray-500 hover:text-[#0032FF] transition-colors duration-200">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 mb-8">Company</h4>
                            <ul className="space-y-4">
                                {COMPANY.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-base text-gray-500 hover:text-[#0032FF] transition-colors duration-200">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* App Card Section */}
                    <div className="lg:col-span-4">
                        <div className="p-6 rounded-[28px] border border-[#0032FF]/20 bg-white relative overflow-hidden group shadow-[0_22px_52px_-26px_rgba(0,36,255,0.36)] hover:shadow-[0_30px_72px_-24px_rgba(0,50,255,0.45)] transition-all duration-500">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-balozy-gold/10 rounded-2xl flex items-center justify-center">
                                        <Image
                                            src="/LOGO.svg"
                                            alt="Balozy"
                                            width={54}
                                            height={54}
                                            className="w-10 h-auto"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-[#0032FF] transition-colors">Balozy App</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-900 transition-colors">
                                    Experience Balozy on the go. Book services and track pros in real-time.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button className="px-6 py-3 bg-black text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
                                        App Store
                                    </button>
                                    <button className="px-6 py-3 bg-gray-50 text-gray-900 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors">
                                        Google Play
                                    </button>
                                </div>
                            </div>
                            
                            {/* Decorative background element */}
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#0032FF]/8 rounded-full blur-3xl group-hover:bg-[#0032FF]/14 transition-colors duration-500"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative pt-8 flex items-center justify-center">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0032FF]/35 to-transparent"></div>
                    <p className="text-[10px] font-medium tracking-[0.12em] text-gray-500 hover:text-[#0032FF] transition-colors duration-200 cursor-default text-center">
                        &copy; 2026 BALOZY INC. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
}


