import React, { useRef, useState, useEffect, useMemo } from 'react';
import About from './components/About';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Insights } from './components/Insights';
import { Special } from './components/Special';
import { Testimonial } from './components/Testimonial';
import { Events } from './components/Events';

function App() {
  // Helper function to get the correct public URL
  window.getPublicUrl = (path) => {
    return process.env.PUBLIC_URL + path;
  }
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const insightsRef = useRef(null);
  const specialRef = useRef(null);
  const eventsRef = useRef(null);
  const [activeSection, setActiveSection] = useState('Home');

  const menuItems = useMemo(()=>[
    { label: 'Home', ref: homeRef },
    { label: 'About', ref: aboutRef },
    { label: 'Special', ref: specialRef },
    { label: 'Insights', ref: insightsRef },
    { label: 'Events', ref: eventsRef },
  ],[]);

  useEffect(() => {
    const observers = menuItems.map(item => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.label);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(item.ref.current);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [menuItems]);

  return (
    <div className="App">
      <Header menuItems={menuItems} activeSection={activeSection} />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={specialRef}>
        <Special />
      </div>
      <Testimonial />
      <div ref={insightsRef}>
        <Insights />
      </div>
      <div ref={eventsRef}>
        <Events />
      </div>
      <Footer />
    </div>
  );
}

export default App;