import React from 'react';
import { Twitter, Instagram, Linkedin, Smartphone } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    const SOCIAL_LINKS = [
        { icon: Twitter, href: '#', color: 'hover:text-[#1DA1F2]' },
        { icon: Instagram, href: '#', color: 'hover:text-[#E4405F]' },
        { icon: Linkedin, href: '#', color: 'hover:text-[#0A66C2]' }
    ];

    const SERVICES = ['Plumbing', 'Electrical', 'Cleaning', 'Carpentry', 'Painting', 'Moving'];
    const COMPANY = ['About Us', 'Careers', 'How it Works', 'Trust & Safety', 'Terms', 'Privacy'];

    return (
        <footer className="bg-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="space-y-6">
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
                                        <a href={`/services_data#${item.toLowerCase()}`} className="text-base text-gray-400 hover:text-black transition-colors duration-200">
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
                                        <a href="#" className="text-base text-gray-400 hover:text-black transition-colors duration-200">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* App Card Section */}
                    <div className="lg:col-span-4">
                        <div className="p-8 rounded-[32px] border border-gray-100 bg-white relative overflow-hidden group hover:shadow-2xl hover:shadow-gray-100 transition-all duration-500">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-balozy-gold/10 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                                        <Image
                                            src="/LOGO.svg"
                                            alt="Balozy"
                                            width={54}
                                            height={54}
                                            className="w-10 h-auto"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">Balozy App</h3>
                                </div>
                                <p className="text-gray-500 leading-relaxed mb-8">
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
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-balozy-gold/5 rounded-full blur-3xl group-hover:bg-balozy-gold/10 transition-colors duration-500"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] font-medium text-gray-400">
                        &copy; 2026 BALOZY INC. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
}


