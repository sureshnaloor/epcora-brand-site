import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './sections/TopBar';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Services from './sections/Services';
import ServiceDetails from './sections/ServiceDetails';
import Practice from './sections/Practice';
import Industries from './sections/Industries';
import IndustryDetails from './sections/IndustryDetails';
import WhyUs from './sections/WhyUs';
import Founder from './sections/Founder';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import ScanItSimple from './pages/ScanItSimple';
import SmartProject from './pages/SmartProject';
import SmartProcure from './pages/SmartProcure';
import SmartExpedite from './pages/SmartExpedite';
import SmartWave from './pages/SmartWave';
import SmartClass from './pages/SmartClass';
import Products from './pages/Products';
import ServiceComingSoon from './pages/ServiceComingSoon';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ServiceDetails />
      <Practice />
      <Industries />
      <IndustryDetails />
      <WhyUs />
      <Founder />
      <CTA />
    </>
  );
}

/* Handles smooth scrolling for '/#section' links from any route,
   and scrolls to top on plain route changes. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      let tries = 0;
      const attempt = () => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (tries++ < 20) {
          requestAnimationFrame(attempt);
        }
      };
      requestAnimationFrame(attempt);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollManager />
      <TopBar />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/scanitsimple" element={<ScanItSimple />} />
          <Route path="/products/smartproject" element={<SmartProject />} />
          <Route path="/products/smartprocuresimple" element={<SmartProcure />} />
          <Route path="/products/smartexpeditesimple" element={<SmartExpedite />} />
          <Route path="/products/smartwave" element={<SmartWave />} />
          <Route path="/products/smartclass" element={<SmartClass />} />
          <Route path="/services/:slug" element={<ServiceComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
