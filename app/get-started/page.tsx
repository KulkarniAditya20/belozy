import { ArrowRight, Briefcase, Home } from 'lucide-react';

interface GetStartedPageProps {
    searchParams?: Record<string, string | string[] | undefined>;
}

export default function GetStartedPage({ searchParams }: GetStartedPageProps) {
    const roleParam = Array.isArray(searchParams?.role) ? searchParams?.role[0] : searchParams?.role;
    const preferredRole = roleParam === 'pro' ? 'pro' : 'customer';

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 pb-16 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                        Get Started with Balozy
                    </h1>
                    <p className="mt-4 text-gray-600 text-base sm:text-lg">
                        Choose your path to continue. We will open login based on your selection.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <article className={`rounded-3xl border bg-white p-7 shadow-[0_22px_46px_-26px_rgba(0,0,0,0.25)] ${preferredRole === 'customer' ? 'border-[#0032FF]/30 ring-1 ring-[#0032FF]/15' : 'border-gray-200'}`}>
                        <div className="w-12 h-12 rounded-2xl bg-[#0032FF]/10 text-[#0032FF] flex items-center justify-center mb-5">
                            <Home className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-extrabold text-gray-900">I need a service</h2>
                        <p className="mt-3 min-h-[3.25rem] text-gray-600 leading-relaxed">
                            Find and book trusted professionals for your home quickly.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <a
                                href="/login?role=customer"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#F8B90C] px-5 py-3 text-sm font-medium text-black hover:bg-[#efb30c] transition-colors"
                            >
                                Continue to Login
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="/signup?role=customer"
                                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 hover:text-[#0032FF] hover:border-blue-200 transition-colors"
                            >
                                Create Account
                            </a>
                        </div>
                    </article>

                    <article className={`rounded-3xl border bg-white p-7 shadow-[0_22px_46px_-26px_rgba(0,0,0,0.25)] ${preferredRole === 'pro' ? 'border-[#0032FF]/30 ring-1 ring-[#0032FF]/15' : 'border-gray-200'}`}>
                        <div className="w-12 h-12 rounded-2xl bg-[#0032FF]/10 text-[#0032FF] flex items-center justify-center mb-5">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-extrabold text-gray-900">I am a professional</h2>
                        <p className="mt-3 min-h-[3.25rem] text-gray-600 leading-relaxed">
                            Join as a pro, get quality leads, and grow your business.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <a
                                href="/login?role=pro"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#F8B90C] px-5 py-3 text-sm font-medium text-black hover:bg-[#efb30c] transition-colors"
                            >
                                Continue to Login
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="/signup?role=pro"
                                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 hover:text-[#0032FF] hover:border-blue-200 transition-colors"
                            >
                                Become a Pro
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    );
}
