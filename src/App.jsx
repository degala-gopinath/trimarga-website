
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
import Atmosphere from './components/Atmosphere';
import FloatingContact from './components/FloatingContact';
import Preloader from './components/Preloader';
import RouteCurtain from './components/RouteCurtain';

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

// Content-shaped loading skeleton — reads as "the page is arriving",
// not as "something broke".
function PageLoader() {
  return (
    <div
      className="mx-auto max-w-7xl px-5 py-16 sm:px-8"
      role="status"
      aria-label="Loading page"
    >
      <div className="space-y-4">
        <div className="skeleton h-3 w-36" />
        <div className="skeleton h-10 w-full max-w-3xl" />
        <div className="skeleton h-10 w-full max-w-xl" />
        <div className="skeleton h-4 w-full max-w-2xl !bg-[#0D0B09]" />
        <div className="skeleton h-4 w-full max-w-lg !bg-[#0D0B09]" />
      </div>

      <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="space-y-3 bg-[#0A0907] p-7">
            <div className="skeleton h-3 w-10" />
            <div className="skeleton h-5 w-3/4" />
            <div className="skeleton h-3 w-full !bg-[#0D0B09]" />
            <div className="skeleton h-3 w-5/6 !bg-[#0D0B09]" />
          </div>
        ))}
      </div>

      <span className="sr-only">Loading</span>
    </div>
  );
}

// Page Routes and Animations
function AnimatedPages() {
  const { pathname } = useLocation();

  return (
    <main
      key={pathname}
      className="stage flex-1 page-enter"
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

      <div className="relative flex min-h-screen flex-col bg-[#0A0907] text-white selection:bg-[#FBAF01] selection:text-[#0A0907]">

        {/* Three paths converge into the mark, then the curtain lifts */}
        <Preloader />

        {/* The same three panels punctuate every route change */}
        <RouteCurtain />

        {/* Depth layers: scroll progress, drifting aurora, film grain */}
        <Atmosphere />

        {/* Custom Cursor */}
        <CreativeCursor />

        {/* Navigation */}
        <Navbar />

        {/* Website Pages */}
        <AnimatedPages />

        {/* Footer */}
        <Footer />

        {/* Persistent WhatsApp / call access */}
        <FloatingContact />

      </div>

    </BrowserRouter>
  );
}
