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
    const borderThemes = [
        'border-blue-200/90 hover:border-blue-400',
        'border-yellow-300/90 hover:border-yellow-500',
        'border-gray-300 hover:border-gray-500',
        'border-blue-300/80 hover:border-blue-500',
    ];
    const borderTheme = borderThemes[index % borderThemes.length];

    return (
        <motion.div
            className={`group relative h-full overflow-hidden rounded-2xl border-2 ${borderTheme} bg-white p-6 text-left shadow-[0_14px_30px_-18px_rgba(0,0,0,0.28)] transition-all duration-300 hover:shadow-[0_22px_44px_-20px_rgba(0,0,0,0.32)]`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            whileHover={{ y: -4 }}
        >

            <div className="relative z-10 flex h-full flex-col">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 transition-all duration-300 group-hover:border-yellow-200 group-hover:bg-yellow-500">
                    <Icon className="h-6 w-6 text-gray-900 transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="mb-2 text-lg font-extrabold tracking-tight text-gray-900">{title}</h3>

                <p className="mb-5 text-sm leading-relaxed text-gray-600">{description}</p>

                <div className="mb-5 h-px w-full bg-gray-200 transition-colors duration-300 group-hover:bg-yellow-400" />

                <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-[#0032FF]">
                    Explore more services
                    <ArrowRight className="h-3.5 w-3.5 translate-x-0 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
            </div>
        </motion.div>
    );
}

