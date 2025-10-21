import React, { Suspense, lazy } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FloatingChatButton from './components/FloatingChatButton';
import ChatbotWindow from './components/ChatbotWindow';
import InteractiveAuroraBackground from './components/InteractiveAuroraBackground';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';

// Lazy load all components
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
const Dashboard = lazy(() => import('./components/Dashboard'));
const LoginSignupPage = lazy(() => import('./components/LoginSignupPage'));

export type View = 'landing' | 'dashboard' | 'login';

const AppContent: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [view, setView] = React.useState<View>('landing');
  const { isAuthenticated, loading } = useAuth();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    // Scroll to top when view changes
    window.scrollTo(0, 0);
  }, [view]);

  React.useEffect(() => {
    if (!loading && isAuthenticated) {
      setView('dashboard');
    }
  }, [loading, isAuthenticated]);

  const FullPageSpinner = () => (
    <div className="flex items-center justify-center min-h-screen">
      <LoadingSpinner />
    </div>
  );

  const renderContent = () => {
    if (view === 'dashboard') {
      return (
        <Suspense fallback={<FullPageSpinner />}>
          <Dashboard />
        </Suspense>
      );
    }
    if (view === 'login') {
      return (
        <Suspense fallback={<FullPageSpinner />}>
          <LoginSignupPage />
        </Suspense>
      );
    }
    return (
      <>
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
      </>
    );
  };

  return (
    <div className="relative isolate text-gray-200">
      <InteractiveAuroraBackground />
      <Header isScrolled={isScrolled} view={view} setView={setView} />
      <main className="pt-20">{renderContent()}</main>
      <Suspense fallback={<LoadingSpinner />}>{view === 'landing' && <Footer />}</Suspense>
      {view === 'landing' && <FloatingChatButton />}
      <ChatbotWindow />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
