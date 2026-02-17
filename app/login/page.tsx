'use client';

import { Suspense, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight, Lock, Mail } from 'lucide-react';

type Role = 'customer' | 'pro';

function LoginPageContent() {
    const searchParams = useSearchParams();
    const roleFromQuery = searchParams.get('role');
    const initialRole: Role = roleFromQuery === 'pro' ? 'pro' : 'customer';
    const [role, setRole] = useState<Role>(initialRole);

    const subtitle = useMemo(() => {
        if (role === 'pro') {
            return 'Manage leads, respond faster, and grow your services business.';
        }
        return 'Book trusted professionals and track your requests in one place.';
    }, [role]);

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 px-4 py-8 sm:px-6">
            <div className="mx-auto max-w-4xl">
                <div className="flex justify-center">
                    <a href="/" className="inline-flex items-center">
                        <Image src="/LOGO.svg" alt="Balozy" width={150} height={44} className="h-10 w-auto" priority />
                    </a>
                </div>

                <div className="mt-6 mx-auto max-w-xl">
                    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_24px_46px_-30px_rgba(0,0,0,0.35)] sm:p-6">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0032FF]">Welcome back</p>
                        <h1 className="mt-2 text-3xl font-black leading-tight text-gray-900 sm:text-[34px]">Sign in to Balozy</h1>
                        <p className="mt-3 text-sm text-gray-500 sm:text-base">{subtitle}</p>

                        <div className="mt-5 inline-flex rounded-full border border-gray-200 bg-gray-50 p-1">
                            <button
                                onClick={() => setRole('customer')}
                                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${role === 'customer' ? 'bg-[#0032FF] text-white' : 'text-gray-600 hover:text-[#0032FF]'}`}
                            >
                                Homeowner
                            </button>
                            <button
                                onClick={() => setRole('pro')}
                                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${role === 'pro' ? 'bg-[#0032FF] text-white' : 'text-gray-600 hover:text-[#0032FF]'}`}
                            >
                                Professional
                            </button>
                        </div>

                        <form className="mt-6 space-y-4">
                            <label className="block">
                                <span className="mb-1.5 block text-sm text-gray-500">Email or mobile</span>
                                <div className="flex items-center rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 focus-within:border-[#0032FF]/40">
                                    <Mail className="h-4 w-4 text-yellow-500" />
                                    <input
                                        type="text"
                                        placeholder={role === 'pro' ? 'pro@company.com' : 'you@email.com'}
                                        className="ml-3 w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                                    />
                                </div>
                            </label>

                            <label className="block">
                                <span className="mb-1.5 block text-sm text-gray-500">Password</span>
                                <div className="flex items-center rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 focus-within:border-[#0032FF]/40">
                                    <Lock className="h-4 w-4 text-yellow-500" />
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="ml-3 w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                                    />
                                </div>
                            </label>

                            <button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F8B90C] px-5 py-2.5 text-sm font-normal text-black transition-colors hover:bg-[#efb30c]">
                                Continue
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>

                        <p className="mt-4 text-sm text-gray-500">
                            New here?{' '}
                            <a href={`/signup?role=${role}`} className="font-medium text-[#0032FF] hover:underline">
                                Create an account
                            </a>
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={null}>
            <LoginPageContent />
        </Suspense>
    );
}
