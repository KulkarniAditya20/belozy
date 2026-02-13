'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    index: number;
}

export default function ServiceCard({
    icon: Icon,
    title,
    description,
    index,
}: ServiceCardProps) {
    return (
        <motion.div
            className="group bg-white border border-gray-100 hover:border-balozy-gold/40 rounded-[2.5rem] p-10 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer text-center h-full flex flex-col items-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
        >
            {/* Subtle background glow on hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-balozy-gold/5 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex flex-col items-center flex-1 w-full relative z-10">
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-black transition-all duration-500 group-hover:rotate-[8deg] group-hover:shadow-xl group-hover:shadow-black/10">
                    <Icon className="w-10 h-10 text-gray-900 group-hover:text-white transition-colors duration-500" />
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{title}</h3>
                <p className="text-sm text-gray-400 font-medium leading-relaxed mb-8 max-w-[220px] mx-auto">
                    {description}
                </p>

                <div className="w-16 h-1 bg-balozy-gold/20 mb-10 transition-all duration-500 group-hover:w-24 group-hover:bg-balozy-gold/40"></div>

                <div className="mt-auto">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-black inline-flex items-center gap-2 transition-all duration-300">
                        Explore services <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
