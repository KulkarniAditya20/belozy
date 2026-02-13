import { Inter } from 'next/font/google';
import Navbar from '@/components/home/Navbar';
import HeroSection from '@/components/home/HeroSection';
import PopularServices from '@/components/home/PopularServices';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/home/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
};

export default function HomePage() {
  return (
    <div className={`${inter.className} min-h-screen bg-gradient-to-b from-gray-50 to-white`}>
      <Navbar />
      <HeroSection />
      <PopularServices />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
