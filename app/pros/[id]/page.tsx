"use client";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  MapPin,
  CheckCircle2,
  Star as StarIcon,
  Heart,
  ShieldCheck,
  Clock,
  Award,
  MessageSquare,
  Share2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "reviews", label: "Reviews" },
] as const;

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
  services: [
    {
      id: "school-runs",
      title: "School Runs",
      description: "Safe daily pick-up and drop-off with reliable timing.",
      priceFrom: 2500,
      eta: "45-60 min",
      image:
        "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800&h=500&fit=crop",
    },
    {
      id: "airport-transfer",
      title: "Airport Transfer",
      description: "On-time airport pickups with luggage handling support.",
      priceFrom: 3500,
      eta: "60-90 min",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop",
    },
    {
      id: "errand-driver",
      title: "Errand Driver",
      description: "Flexible driver support for shopping and city errands.",
      priceFrom: 3000,
      eta: "2-3 hours",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop",
    },
  ],
  pricingUnit: "hour",
  description:
    "I am a professional Driver, well conversant with the Nairobi roads, I can drop and pick your children from school, take them for swimming,shopping, Airport pick ups, general errands etc. I am flexible and Friendly. Trust me.. you will enjoy my company and the Stable and comfortable ride. I am comfortable driving automatic vehicles",
  featuredProjects: [
    {
      id: 1,
      title: "School Pickup Service",
      description:
        "Managed daily school pickups for two children with fixed timing and safety-first handover.",
      location: "Westlands, Nairobi",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Airport Transfer",
      description:
        "Handled early-morning airport drop-off with luggage support and real-time coordination.",
      location: "JKIA Route",
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

export default function ProProfilePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.15, 0.35, 0.6],
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-28 lg:pb-20">
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

          <div className="max-w-7xl mx-auto space-y-10">
            {/* Modern Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-200">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative">
                  <Avatar className="h-28 w-28 border border-gray-200">
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${proData.name}`}
                      alt={proData.name}
                    />
                    <AvatarFallback className="text-2xl bg-gray-100 text-[#000000]">
                      {proData.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute bottom-1 right-1 bg-green-500 h-3.5 w-3.5 rounded-full border-2 border-white" title="Online now"></div>
                </div>

                <div className="text-center md:text-left pt-1">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                    <h1 className="text-4xl font-bold text-[#000000] tracking-tight">
                      {proData.name}
                    </h1>
                    <Badge className="bg-white text-gray-700 text-xs px-3 py-1 font-medium border border-gray-200">
                      {proData.badge}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 text-gray-600">
                    <div className="flex items-center gap-2">
                      <StarIcon className="w-5 h-5 text-[#F8B90C] fill-[#F8B90C]" />
                      <span className="text-lg font-semibold text-[#000000]">{proData.reviews.rating}</span>
                      <span className="text-gray-400">({proData.reviews.total} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <span>{proData.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4">
                    <Badge className="bg-white text-[#000000] border border-gray-200 px-3 py-1 text-xs font-medium">
                      Kes {proData.price.toLocaleString()}/{proData.pricingUnit}
                    </Badge>
                    <Badge className="bg-white text-[#000000] border border-gray-200 px-3 py-1 text-xs font-medium">
                      {proData.hiredCount} hires
                    </Badge>
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
            <div className={`sticky top-20 z-10 transition-all duration-300 ${isScrolled ? "bg-white border-b border-gray-200 py-2" : "bg-white py-4"}`}>
              <div className="max-w-7xl mx-auto flex items-center gap-8 overflow-x-auto no-scrollbar px-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-sm font-semibold whitespace-nowrap py-2 border-b-2 transition-all ${
                      activeSection === item.id
                        ? "text-[#000000] border-[#000000]"
                        : "text-gray-500 border-transparent hover:text-[#000000] hover:border-[#F8B90C]"
                    }`}
                  >
                    {item.label}
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
                    <div className="p-6 rounded-xl bg-white border border-gray-200">
                      <ShieldCheck className="w-8 h-8 text-[#F8B90C] mb-3" />
                      <div className="text-sm font-bold text-[#000000]">Background Checked</div>
                      <div className="text-xs text-gray-400">Verified Professional</div>
                    </div>
                    <div className="p-6 rounded-xl bg-white border border-gray-200">
                      <Clock className="w-8 h-8 text-[#F8B90C] mb-3" />
                      <div className="text-sm font-bold text-[#000000]">{proData.responseTime}</div>
                      <div className="text-xs text-gray-400">Response Time</div>
                    </div>
                    <div className="p-6 rounded-xl bg-white border border-gray-200">
                      <Award className="w-8 h-8 text-[#F8B90C] mb-3" />
                      <div className="text-sm font-bold text-[#000000]">{proData.yearsInBusiness}</div>
                      <div className="text-xs text-gray-400">In Business</div>
                    </div>
                    <div className="p-6 rounded-xl bg-white border border-gray-200">
                      <MessageSquare className="w-8 h-8 text-[#F8B90C] mb-3" />
                      <div className="text-sm font-bold text-[#000000]">{proData.hiredCount} Hires</div>
                      <div className="text-xs text-gray-400">Successfully completed</div>
                    </div>
                  </div>
                </section>

                {/* About Section */}
                <section id="about" className="scroll-mt-40">
                  <h2 className="text-2xl font-bold mb-4">About the pro</h2>
                  <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
                    {proData.description}
                  </p>
                </section>

                {/* Action Card Section (Main Column) */}
                <Card className="border border-gray-200 overflow-hidden rounded-2xl lg:hidden xl:block">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-gray-200">
                        <div className="flex flex-col h-full justify-between">
                          <div>
                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Estimated Price</div>
                            <div className="flex items-baseline gap-2">
                              <span className="text-4xl font-bold text-[#000000]">Kes {proData.price.toLocaleString()}</span>
                              <span className="text-gray-400">starting at</span>
                            </div>
                          </div>
                          
                          <div className="mt-8 flex items-center gap-3">
                            <span className="inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            <span className="text-sm font-medium text-gray-600">Available for hire today</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-8 bg-gray-50 flex-none md:w-[320px] lg:w-[380px] space-y-3">
                        <Button className="w-full bg-[#000000] hover:bg-[#111111] text-white py-6 text-base font-semibold rounded-xl">
                          Request a quote
                        </Button>
                        <Button variant="outline" className="w-full bg-white text-[#000000] py-6 text-base font-semibold rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-white">
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
                        className="bg-gray-100 text-[#000000] border-0 text-sm px-4 py-2 rounded-full font-medium cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {proData.services.map((service) => (
                      <Card
                        key={service.id}
                        className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
                      >
                        <div className="relative aspect-[16/10] bg-gray-100">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <CardContent className="p-5 space-y-3">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-lg font-semibold text-[#000000]">{service.title}</h3>
                            <Badge className="bg-gray-100 text-gray-600 border-0 px-3 py-1 text-xs">
                              {service.eta}
                            </Badge>
                          </div>

                          <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>

                          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                            <p className="text-sm font-semibold text-[#000000]">
                              From Kes {service.priceFrom.toLocaleString()}
                            </p>
                            <Button className="bg-[#000000] hover:bg-[#111111] text-white rounded-full px-4 h-9 text-sm">
                              Get quote
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="scroll-mt-40">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold">Featured projects</h2>
                    <Button variant="link" className="text-[#000000] font-semibold underline-offset-4">
                      View all projects
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {proData.featuredProjects.map((project) => (
                      <Card key={project.id} className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                        <div className="relative aspect-[16/10] bg-gray-100">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <CardContent className="p-5 space-y-2">
                          <h3 className="text-base font-semibold text-[#000000]">{project.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                          <p className="text-xs text-gray-500">{project.location}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32 space-y-8">
                  <Card className="rounded-2xl border border-gray-200 bg-white p-6">
                    <div className="space-y-5">
                      <div>
                        <h2 className="text-xl font-semibold text-[#000000]">Request estimate</h2>
                        <p className="text-sm text-gray-500 mt-1">Tell the pro about your project.</p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-gray-500">Select a service</label>
                          <select className="w-full h-11 rounded-lg border border-gray-200 px-3 text-sm bg-white text-[#000000] focus:outline-none focus:ring-2 focus:ring-gray-200">
                            {proData.services.map((service) => (
                              <option key={service.id} value={service.id}>
                                {service.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-gray-500">Zip code</label>
                          <input
                            className="w-full h-11 rounded-lg border border-gray-200 px-3 text-sm bg-white text-[#000000] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            placeholder="Enter zip code"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1.5">
                            <label className="text-xs font-medium text-gray-500">Date</label>
                            <select className="w-full h-11 rounded-lg border border-gray-200 px-3 text-sm bg-white text-[#000000] focus:outline-none focus:ring-2 focus:ring-gray-200">
                              <option>Flexible</option>
                              <option>This week</option>
                              <option>Next week</option>
                              <option>This month</option>
                            </select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-medium text-gray-500">Estimated hours</label>
                            <select className="w-full h-11 rounded-lg border border-gray-200 px-3 text-sm bg-white text-[#000000] focus:outline-none focus:ring-2 focus:ring-gray-200">
                              <option>1-2 hours</option>
                              <option>3-4 hours</option>
                              <option>5+ hours</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full bg-[#000000] hover:bg-[#111111] text-white rounded-xl h-11 font-semibold">
                        Request estimate
                      </Button>

                      <p className="text-xs text-gray-500 leading-relaxed">
                        Share project details first, then compare and hire with confidence.
                      </p>
                    </div>
                  </Card>

                  {/* Reviews Summary Section */}
                  <section id="reviews" className="scroll-mt-40">
                    <Card className="rounded-2xl border border-gray-200 bg-white p-7">
                      <h2 className="text-xl font-semibold mb-7">Reviews</h2>
                      
                      <div className="space-y-8">
                        <div className="flex items-center gap-6">
                          <div className="text-5xl font-semibold">{proData.reviews.rating}</div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <StarIcon
                                  key={i}
                                  className={`w-4 h-4 ${i < Math.round(proData.reviews.rating) ? "text-[#F8B90C] fill-[#F8B90C]" : "text-gray-200"}`}
                                />
                              ))}
                            </div>
                            <div className="text-sm font-medium text-gray-500 capitalize">{proData.reviews.total} verified reviews</div>
                          </div>
                        </div>

                        {/* Keyword Filters */}
                        <div className="flex flex-wrap gap-2 pt-2 pb-6 border-y border-gray-200">
                          {proData.reviews.keywords.map((kw) => (
                            <span key={kw} className="text-xs font-medium px-3 py-1.5 bg-gray-100 rounded-full text-gray-600 cursor-pointer">
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
                                <span className="text-sm font-semibold w-4">{stars}</span>
                                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                  <div
                                    style={{ width: `${percentage}%` }}
                                    className="h-full bg-[#F8B90C] rounded-full"
                                  />
                                </div>
                                <span className="text-xs font-medium text-gray-500 w-8">({count})</span>
                              </div>
                            );
                          })}
                        </div>

                        <Button variant="outline" className="w-full py-6 rounded-xl font-medium border border-gray-200 hover:border-gray-300 hover:bg-white mt-4">
                          Read all feedback
                        </Button>
                      </div>
                    </Card>
                  </section>

                  {/* Trust Badge Card */}
                  <Card className="rounded-2xl border border-gray-200 bg-white p-8">
                    <div className="space-y-6">
                      <div className="h-11 w-11 rounded-xl bg-gray-100 flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-[#000000]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#000000]">Safe & Verified</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Donna S. has passed our safety screening process and is a top-rated pro on Balozy.
                      </p>
                      <ul className="space-y-3 text-sm font-medium text-gray-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" /> ID Verified
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600" /> Licensed & Insured
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

      <div className="fixed bottom-0 inset-x-0 z-40 border-t border-gray-200 bg-white px-4 py-3 lg:hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#000000]">From Kes {proData.price.toLocaleString()}</p>
            <p className="text-xs text-gray-500">Responds {proData.responseTime.toLowerCase()}</p>
          </div>
          <Button className="bg-[#000000] hover:bg-[#111111] text-white font-semibold rounded-full px-6">
            Request quote
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
