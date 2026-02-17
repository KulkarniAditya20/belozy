'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight, Briefcase, UserRound } from 'lucide-react';

type Role = 'customer' | 'pro';

function SignupPageContent() {
    const searchParams = useSearchParams();
    const roleFromQuery = searchParams.get('role');
    const initialRole: Role = roleFromQuery === 'pro' ? 'pro' : 'customer';
    const [role, setRole] = useState<Role>(initialRole);

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 px-4 py-8 sm:px-6">
            <div className="mx-auto max-w-4xl">
                <div className="flex justify-center">
                    <a href="/" className="inline-flex items-center">
                        <Image src="/LOGO.svg" alt="Balozy" width={150} height={44} className="h-10 w-auto" priority />
                    </a>
                </div>

                <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_26px_52px_-30px_rgba(0,0,0,0.3)] sm:p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0032FF]">Create account</p>
                    <h1 className="mt-2 text-3xl font-black leading-tight text-gray-900 sm:text-[34px]">
                        {role === 'pro' ? 'Join as a Professional' : 'Create your Balozy account'}
                    </h1>
                    <p className="mt-2.5 text-sm text-gray-500 sm:text-base">
                        {role === 'pro'
                            ? 'Complete your profile to start receiving verified local leads.'
                            : 'Tell us a few details so we can match you with the right pros.'}
                    </p>

                    <div className="mt-5 inline-flex rounded-full border border-gray-200 bg-gray-50 p-1">
                        <button
                            onClick={() => setRole('customer')}
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${role === 'customer' ? 'bg-[#0032FF] text-white' : 'text-gray-600 hover:text-[#0032FF]'}`}
                        >
                            <UserRound className="h-4 w-4" />
                            Homeowner
                        </button>
                        <button
                            onClick={() => setRole('pro')}
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${role === 'pro' ? 'bg-[#0032FF] text-white' : 'text-gray-600 hover:text-[#0032FF]'}`}
                        >
                            <Briefcase className="h-4 w-4" />
                            Professional
                        </button>
                    </div>

                    {role === 'customer' ? <CustomerSignupForm /> : <ProSignupForm />}

                    <p className="mt-5 text-sm text-gray-500">
                        Already have an account?{' '}
                        <a href={`/login?role=${role}`} className="font-medium text-[#0032FF] hover:underline">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default function SignupPage() {
    return (
        <Suspense fallback={null}>
            <SignupPageContent />
        </Suspense>
    );
}

function Field({ label, placeholder, type = 'text' }: { label: string; placeholder: string; type?: string }) {
    return (
        <label className="block">
            <span className="mb-1.5 block text-sm text-gray-500">{label}</span>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full rounded-xl border border-gray-200 px-3.5 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#0032FF]/40"
            />
        </label>
    );
}

function CustomerSignupForm() {
    return (
        <form className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First Name" placeholder="First name" />
                <Field label="Last Name" placeholder="Last name" />
            </div>
            <Field label="Email" placeholder="you@email.com" type="email" />
            <Field label="Password" placeholder="Create password" type="password" />
            <div className="grid gap-4 sm:grid-cols-[120px_1fr]">
                <Field label="Country Code" placeholder="+254" />
                <Field label="Mobile Number" placeholder="Mobile number" type="tel" />
            </div>
            <Field label="City" placeholder="Your city" />

            <p className="text-xs text-gray-400">
                Your phone and city help us match and connect you with the right pros.
            </p>

            <button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F8B90C] px-5 py-2.5 text-sm font-normal text-black transition-colors hover:bg-[#efb30c]">
                Create Account
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
        </form>
    );
}

function ProSignupForm() {
    return (
        <form className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First Name" placeholder="First name" />
                <Field label="Last Name" placeholder="Last name" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Business Name (Optional)" placeholder="Business name" />
                <Field label="Primary Service" placeholder="Plumbing, Electrical..." />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" placeholder="pro@company.com" type="email" />
                <Field label="Mobile Number" placeholder="+1 (555) 000-0000" type="tel" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
                <Field label="City / Service Area" placeholder="San Francisco, CA" />
                <Field label="Years of Experience" placeholder="e.g. 5" />
            </div>
            <Field label="Password" placeholder="Create password" type="password" />

            <p className="text-xs text-gray-400">
                We use these details to verify your profile and send relevant job leads.
            </p>

            <button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#F8B90C] px-5 py-2.5 text-sm font-normal text-black transition-colors hover:bg-[#efb30c]">
                Become a Pro
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
        </form>
    );
}
