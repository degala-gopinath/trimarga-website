
import React, {
  useEffect,
  lazy,
  Suspense
} from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

// Main Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreativeCursor from './components/CreativeCursor';
import RevealOnScroll from './components/RevealOnScroll';

// Lazy Loaded Pages
const HomePage = lazy(() => import('./pages/HomePage'));

const ServicesOverviewPage = lazy(
  () => import('./pages/ServicesOverviewPage')
);

const ServiceDetailPage = lazy(
  () => import('./pages/ServiceDetailPage')
);

const AboutPage = lazy(() => import('./pages/AboutPage'));

const WorkPage = lazy(() => import('./pages/WorkPage'));

const ContactPage = lazy(() => import('./pages/ContactPage'));

const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Scroll to Top When Page Changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

// Lightweight Loading Indicator
function PageLoader() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center bg-[#0A0A0A]"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">

        <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-[#FBAF01]" />

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FBAF01]">
          Loading
        </p>

      </div>
    </div>
  );
}

// Page Routes and Animations
function AnimatedPages() {
  const { pathname } = useLocation();

  return (
    <main
      key={pathname}
      className="flex-1 page-enter"
      id="main-content"
    >
      <Suspense fallback={<PageLoader />}>

        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/services"
            element={<ServicesOverviewPage />}
          />

          <Route
            path="/services/:slug"
            element={<ServiceDetailPage />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/work"
            element={<WorkPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>

        <RevealOnScroll />

      </Suspense>
    </main>
  );
}

// Main Application
export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <div className="flex min-h-screen flex-col bg-[#0A0A0A] text-white selection:bg-[#FBAF01] selection:text-[#0A0A0A]">

        {/* Custom Cursor */}
        <CreativeCursor />

        {/* Navigation */}
        <Navbar />

        {/* Website Pages */}
        <AnimatedPages />

        {/* Footer */}
        <Footer />

      </div>

    </BrowserRouter>
  );
}
