"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Star,
  MapPin,
  CheckCircle2,
  Building2,
  Star as StarIcon,
  Heart,
  ShieldCheck,
  Clock,
  Award,
  MessageSquare,
  Share2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// Sample pro data - in a real app, this would come from an API based on the id
const proData = {
  id: "1",
  name: "Donna S.",
  badge: "New Pros",
  location: "Nairobi City",
  hiredCount: 32,
  verified: {
    governmentId: true,
    email: true,
    mobile: true,
  },
  skills: ["Drivers - for hire"],
  description:
    "I am a professional Driver, well conversant with the Nairobi roads, I can drop and pick your children from school, take them for swimming,shopping, Airport pick ups, general errands etc. I am flexible and Friendly. Trust me.. you will enjoy my company and the Stable and comfortable ride. I am comfortable driving automatic vehicles",
  featuredProjects: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=200&fit=crop",
    },
  ],
  // example review data so the summary stars are meaningful
  reviews: {
    total: 12,
    rating: 4.8,
    breakdown: {
      5: 8,
      4: 2,
      3: 1,
      2: 1,
      1: 0,
    },
    keywords: ["Professional", "Reliable", "Punctual", "Stable ride", "Friendly"],
  },
  price: 3000,
  responseTime: "Under 2 hours",
  yearsInBusiness: "5+ years",
};

export default function ProProfilePage({ params }: { params: { id: string } }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Back Button */}
          <div className="max-w-7xl mx-auto mb-6">
            <Link href="/">
              <Button variant="ghost" className="-ml-2 text-gray-500 hover:text-[#000000]">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to results
              </Button>
            </Link>
          </div>

          <div className="max-w-7xl mx-auto space-y-8">
            {/* Modern Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-100">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#F8B90C] to-[#FFCF53] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <Avatar className="h-40 w-40 border-4 border-white shadow-xl relative">
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${proData.name}`}
                      alt={proData.name}
                    />
                    <AvatarFallback className="text-4xl bg-[#F8B90C] text-[#000000]">
                      {proData.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-2 right-2 bg-green-500 h-6 w-6 rounded-full border-4 border-white shadow-sm" title="Online now"></div>
                </div>

                <div className="text-center md:text-left pt-2">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                    <h1 className="text-5xl font-extrabold text-[#000000] tracking-tight">
                      {proData.name}
                    </h1>
                    <Badge className="bg-[#F8B90C] text-[#000000] text-sm px-4 py-1.5 font-bold uppercase tracking-wider">
                      {proData.badge}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-gray-600 font-medium">
                    <div className="flex items-center gap-2">
                      <StarIcon className="w-5 h-5 text-[#F8B90C] fill-[#F8B90C]" />
                      <span className="text-lg text-[#000000]">{proData.reviews.rating}</span>
                      <span className="text-gray-400">({proData.reviews.total} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <span>{proData.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="outline" size="lg" className="rounded-full border-gray-200 hover:bg-gray-50 px-6">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-gray-200 hover:bg-gray-50">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Sticky Sub-Nav */}
            <div className={`sticky top-20 z-10 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b shadow-sm py-2" : "bg-transparent py-4"}`}>
              <div className="max-w-7xl mx-auto flex items-center gap-8 overflow-x-auto no-scrollbar px-2">
                {["Overview", "About", "Services", "Projects", "Reviews"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-semibold text-gray-500 hover:text-[#000000] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#F8B90C] transition-all"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Main Grid Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
              {/* Left Content Column */}
              <div className="lg:col-span-8 space-y-12">
                
                {/* Overview Section */}
                <section id="overview" className="scroll-mt-40">
                  <h2 className="text-2xl font-bold mb-6">Overview</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <ShieldCheck className="w-8 h-8 text-[#F8B90C] mb-3" />
                      <div className="text-sm font-bold text-[#000000]">Background Checked</div>
                      <div className="text-xs text-gray-400">Verified Professional</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <Clock className="w-8 h-8 text-[#F8B90C] mb-3" />
                      <div className="text-sm font-bold text-[#000000]">{proData.responseTime}</div>
                      <div className="text-xs text-gray-400">Response Time</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <Award className="w-8 h-8 text-[#F8B90C] mb-3" />
                      <div className="text-sm font-bold text-[#000000]">{proData.yearsInBusiness}</div>
                      <div className="text-xs text-gray-400">In Business</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <MessageSquare className="w-8 h-8 text-[#F8B90C] mb-3" />
                      <div className="text-sm font-bold text-[#000000]">{proData.hiredCount} Hires</div>
                      <div className="text-xs text-gray-400">Successfully completed</div>
                    </div>
                  </div>
                </section>

                {/* About Section */}
                <section id="about" className="scroll-mt-40">
                  <h2 className="text-2xl font-bold mb-4">About the pro</h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                    {proData.description}
                  </p>
                </section>

                {/* Action Card Section (Main Column) */}
                <Card className="bg-gradient-to-br from-white to-[#FDFDFD] border-2 border-[#F8B90C]/20 overflow-hidden rounded-3xl overflow-hidden shadow-xl lg:hidden xl:block">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex-1 p-10 border-b md:border-b-0 md:border-r border-gray-100">
                        <div className="flex flex-col h-full justify-between">
                          <div>
                            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Estimated Price</div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-5xl font-black text-[#000000]">Kes {proData.price.toLocaleString()}</span>
                              <span className="text-gray-400 font-medium">/ starting at</span>
                            </div>
                          </div>
                          
                          <div className="mt-8 flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-bold text-green-600 uppercase tracking-wide">Available for hire today</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-10 bg-gray-50 flex-none md:w-[320px] lg:w-[380px] space-y-4">
                        <Button className="w-full bg-[#F8B90C] hover:bg-[#F0B000] text-[#000000] py-8 text-lg font-black rounded-2xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all">
                          Request a quote
                        </Button>
                        <Button variant="outline" className="w-full bg-white text-[#000000] py-8 text-lg font-bold rounded-2xl border-2 border-gray-100 hover:border-[#F8B90C] hover:bg-white transition-all">
                          Recommend to a friend
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Services Section */}
                <section id="services" className="scroll-mt-40">
                  <h2 className="text-2xl font-bold mb-6">Skills & services</h2>
                  <div className="flex flex-wrap gap-3">
                    {proData.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        className="bg-gray-100 hover:bg-[#F8B90C]/10 text-[#000000] border-0 text-base px-6 py-3 rounded-full font-bold transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="scroll-mt-40">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold">Featured projects</h2>
                    <Button variant="link" className="text-[#000000] font-bold underline-offset-4 decoration-2 decoration-[#F8B90C]">
                      View all projects
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {proData.featuredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-100 shadow-lg"
                      >
                        <Image
                          src={project.image}
                          alt={`Project ${project.id}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-8 left-8 text-white">
                            <h3 className="text-xl font-bold">Recent Project</h3>
                            <p className="text-sm text-white/80">Nairobi Metro Area</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32 space-y-8">
                  
                  {/* Reviews Summary Section */}
                  <section id="reviews" className="scroll-mt-40">
                    <Card className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm">
                      <h2 className="text-xl font-black mb-8 underline decoration-4 decoration-[#F8B90C] underline-offset-8">Reviews</h2>
                      
                      <div className="space-y-8">
                        <div className="flex items-center gap-6">
                          <div className="text-5xl font-black">{proData.reviews.rating}</div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <StarIcon
                                  key={i}
                                  className={`w-4 h-4 ${i < Math.round(proData.reviews.rating) ? "text-[#F8B90C] fill-[#F8B90C]" : "text-gray-200"}`}
                                />
                              ))}
                            </div>
                            <div className="text-sm font-bold text-gray-400 capitalize">{proData.reviews.total} verified reviews</div>
                          </div>
                        </div>

                        {/* Keyword Filters */}
                        <div className="flex flex-wrap gap-2 pt-2 pb-6 border-y border-gray-100">
                          {proData.reviews.keywords.map((kw) => (
                            <span key={kw} className="text-xs font-bold px-3 py-1.5 bg-gray-50 rounded-full text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer">
                              {kw}
                            </span>
                          ))}
                        </div>

                        {/* Star breakdown */}
                        <div className="space-y-3">
                          {[5, 4, 3, 2, 1].map((stars) => {
                            const count = proData.reviews.breakdown[stars as keyof typeof proData.reviews.breakdown];
                            const percentage = (count / proData.reviews.total) * 100;
                            return (
                              <div key={stars} className="flex items-center gap-4">
                                <span className="text-sm font-bold w-4">{stars}</span>
                                <div className="flex-1 h-2 bg-gray-50 rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percentage}%` }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-[#F8B90C] rounded-full"
                                  />
                                </div>
                                <span className="text-xs font-medium text-gray-400 w-8">({count})</span>
                              </div>
                            );
                          })}
                        </div>

                        <Button variant="outline" className="w-full py-6 rounded-xl font-bold border-2 border-gray-100 hover:border-[#F8B90C] hover:bg-white transition-all mt-4">
                          Read all feedback
                        </Button>
                      </div>
                    </Card>
                  </section>

                  {/* Trust Badge Card */}
                  <Card className="rounded-[2rem] border border-gray-100 bg-gray-900 text-white p-8">
                    <div className="space-y-6">
                      <div className="h-12 w-12 rounded-xl bg-[#F8B90C] flex items-center justify-center">
                        <ShieldCheck className="w-7 h-7 text-[#000000]" />
                      </div>
                      <h3 className="text-xl font-bold">Safe & Verified</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Donna S. has passed our safety screening process and is a top-rated pro on Balozy.
                      </p>
                      <ul className="space-y-3 text-sm font-medium">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#F8B90C]" /> ID Verified
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#F8B90C]" /> Licensed & Insured
                        </li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
