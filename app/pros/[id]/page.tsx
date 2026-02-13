'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
    ArrowLeft, 
    Star, 
    MapPin, 
    CheckCircle2, 
    Building2, 
    Star as StarIcon,
    Heart
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Sample pro data - in a real app, this would come from an API based on the id
const proData = {
    id: '1',
    name: 'Donna S.',
    badge: 'New Pros',
    location: 'Nairobi City',
    hiredCount: 32,
    verified: {
        governmentId: true,
        email: true,
        mobile: true,
    },
    skills: ['Drivers - for hire'],
    description: 'I am a professional Driver, well conversant with the Nairobi roads, I can drop and pick your children from school, take them for swimming,shopping, Airport pick ups, general errands etc. I am flexible and Friendly. Trust me.. you will enjoy my company and the Stable and comfortable ride. I am comfortable driving automatic vehicles',
    featuredProjects: [
        { id: 1, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop' },
        { id: 2, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=200&fit=crop' },
    ],
    reviews: {
        total: 0,
        breakdown: {
            5: 0,
            4: 0,
            3: 0,
            2: 0,
            1: 0,
        },
    },
    price: 3000,
};

export default function ProProfilePage({ params }: { params: { id: string } }) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-24 pb-20">
                <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
                    {/* Back Button */}
                    <div className="max-w-7xl mx-auto mb-8">
                        <Link href="/">
                            <Button variant="ghost" className="-ml-2">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back
                            </Button>
                        </Link>
                    </div>

                    {/* Main Content Grid - Two Column Layout on Large Screens */}
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Header Section */}
                            <Card>
                                <CardContent className="p-8">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-6 flex-1">
                                            <Avatar className="h-32 w-32 border-4 border-[#F8B90C]/20">
                                                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${proData.name}`} alt={proData.name} />
                                                <AvatarFallback className="text-3xl bg-gradient-to-br from-[#F8B90C] to-[#FFCF53] text-[#000000]">{proData.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <h1 className="text-4xl font-bold text-[#000000]">{proData.name}</h1>
                                                    <Badge className="bg-[#F8B90C] text-[#000000] text-sm px-4 py-1.5 font-semibold">
                                                        {proData.badge}
                                                    </Badge>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600 mb-2">
                                                    <Building2 className="w-5 h-5 text-[#F8B90C]" />
                                                    <span className="text-base">Serves {proData.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <CheckCircle2 className="w-5 h-5 text-[#F8B90C]" />
                                                    <span className="text-base">Hired {proData.hiredCount} times</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="icon" className="hidden lg:flex">
                                            <Heart className="w-6 h-6" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Verification Section */}
                            <Card>
                                <CardContent className="p-8">
                                    <div className="space-y-4">
                                        {proData.verified.governmentId && (
                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="w-6 h-6 text-[#F8B90C]" />
                                                <span className="text-base text-[#000000] font-medium">Government ID Verified</span>
                                            </div>
                                        )}
                                        {proData.verified.email && (
                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="w-6 h-6 text-[#F8B90C]" />
                                                <span className="text-base text-[#000000] font-medium">Email ID Verified</span>
                                            </div>
                                        )}
                                        {proData.verified.mobile && (
                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="w-6 h-6 text-[#F8B90C]" />
                                                <span className="text-base text-[#000000] font-medium">Mobile Number Verified</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <p className="text-sm text-gray-600 mb-2">
                                            Your trust means everything to us.
                                        </p>
                                        <a href="#" className="text-sm text-[#0032FF] hover:underline font-medium">
                                            Learn about our review guidelines.
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Skills & Experience Section */}
                            <Card>
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-[#000000] mb-6">Skills & experience</h2>
                                    <div className="space-y-6">
                                        <div className="flex flex-wrap gap-3">
                                            {proData.skills.map((skill, index) => (
                                                <Badge 
                                                    key={index} 
                                                    className="bg-[#FF0000] text-[#FFFFFF] text-base px-4 py-2 font-semibold"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                        <p className="text-[#000000] leading-relaxed text-base">
                                            {proData.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Featured Projects Section */}
                            <Card>
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-[#000000] mb-6">Featured projects</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {proData.featuredProjects.map((project) => (
                                            <div 
                                                key={project.id} 
                                                className="relative aspect-video rounded-xl overflow-hidden bg-gray-200 shadow-lg hover:shadow-xl transition-shadow"
                                            >
                                                <Image
                                                    src={project.image}
                                                    alt={`Project ${project.id}`}
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Reviews Section */}
                            <Card>
                                <CardContent className="p-8">
                                    <h2 className="text-2xl font-bold text-[#000000] mb-6">Reviews</h2>
                                    <div className="space-y-4">
                                        {[5, 4, 3, 2, 1].map((stars) => (
                                            <div key={stars} className="flex items-center gap-4">
                                                <div className="flex items-center gap-1 min-w-[100px]">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <StarIcon
                                                            key={i}
                                                            className={`w-5 h-5 ${
                                                                i < stars 
                                                                    ? 'text-[#F8B90C] fill-[#F8B90C]' 
                                                                    : 'text-gray-300'
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                                                    <div 
                                                        className="h-full bg-gray-300 rounded-full"
                                                        style={{ width: '0%' }}
                                                    />
                                                </div>
                                                <span className="text-sm text-gray-500 min-w-[40px] text-right">
                                                    ({proData.reviews.breakdown[stars as keyof typeof proData.reviews.breakdown]})
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Column - Sticky Action Panel */}
                        <div className="lg:col-span-1">
                            <div className="lg:sticky lg:top-24 space-y-6">
                                {/* Action Buttons Card */}
                                <Card className="border-2 border-[#F8B90C]/20">
                                    <CardContent className="p-6">
                                        <div className="space-y-4">
                                            <Button 
                                                className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-[#FFFFFF] py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                                            >
                                                Recommend to a friend
                                            </Button>
                                            
                                            <div className="pt-4 border-t border-gray-200">
                                                <div className="mb-4">
                                                    <span className="text-3xl font-bold text-[#000000]">
                                                        Kes {proData.price.toLocaleString()}
                                                    </span>
                                                </div>
                                                <Button 
                                                    className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-[#FFFFFF] py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                                                >
                                                    Request a quote
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
