import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load page components for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const Sectors = lazy(() => import('./pages/Sectors'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const Corporate = lazy(() => import('./pages/Corporate'));
const RealEstate = lazy(() => import('./pages/RealEstate'));
const Legal = lazy(() => import('./pages/Legal'));
const Construction = lazy(() => import('./pages/Construction'));
const Specialist = lazy(() => import('./pages/Specialist'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-teal mb-4"></div>
      <p className="text-gray-600 text-lg">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sectors" element={<Sectors />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/corporate" element={<Corporate />} />
                <Route path="/real-estate" element={<RealEstate />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/construction" element={<Construction />} />
                <Route path="/specialist" element={<Specialist />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
