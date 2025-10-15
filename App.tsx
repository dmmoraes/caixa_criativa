import React, { Suspense, lazy, useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FloatingChatButton from './components/FloatingChatButton';
import LoadingSpinner from './components/LoadingSpinner';
import ChatbotWindow from './components/ChatbotWindow';

const InteractiveQuiz = lazy(() => import('./components/InteractiveQuiz'));
const BenefitsSection = lazy(() => import('./components/BenefitsSection'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const HowItWorksSection = lazy(() => import('./components/HowItWorksSection'));
const AboutUsSection = lazy(() => import('./components/AboutUsSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const LeadMagnetSection = lazy(() => import('./components/LeadMagnetSection'));
const BlogTeaserSection = lazy(() => import('./components/BlogTeaserSection'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const FinalCTASection = lazy(() => import('./components/FinalCTASection'));
const Footer = lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 text-gray-800">
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

export default App;
