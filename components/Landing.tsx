import React, { Suspense, lazy, useEffect, useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FloatingChatButton from './FloatingChatButton';
import LoadingSpinner from './LoadingSpinner';
import ChatbotWindow from './ChatbotWindow';
import InteractiveAuroraBackground from './InteractiveAuroraBackground';
import ScrollProgressBar from './ScrollProgressBar';

const InteractiveQuiz = lazy(() => import('./InteractiveQuiz'));
const BenefitsSection = lazy(() => import('./BenefitsSection'));
const ServicesSection = lazy(() => import('./ServicesSection'));
const HowItWorksSection = lazy(() => import('./HowItWorksSection'));
const AboutUsSection = lazy(() => import('./AboutUsSection'));
const TestimonialsSection = lazy(() => import('./TestimonialsSection'));
const LeadMagnetSection = lazy(() => import('./LeadMagnetSection'));
const BlogTeaserSection = lazy(() => import('./BlogTeaserSection'));
const FAQSection = lazy(() => import('./FAQSection'));
const FinalCTASection = lazy(() => import('./FinalCTASection'));
const Footer = lazy(() => import('./Footer'));

const Landing: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-gray-100">
      <InteractiveAuroraBackground />
      <ScrollProgressBar />
      <Header isScrolled={isScrolled} />
      <main className="pt-20">
        <HeroSection />
        <Suspense fallback={<LoadingSpinner />}> 
          <InteractiveQuiz />
          <BenefitsSection />
          <ServicesSection />
          <HowItWorksSection />
          <AboutUsSection />
          <TestimonialsSection />
          <LeadMagnetSection />
          <BlogTeaserSection />
          <FAQSection />
          <FinalCTASection />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
      <FloatingChatButton />
      <ChatbotWindow />
    </div>
  );
};

export default Landing;
