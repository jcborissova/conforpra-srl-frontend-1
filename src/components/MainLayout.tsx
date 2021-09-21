import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';
import ScrollToTop from '../components/ScrollToTop';

function MainLayout({ children }: { children: any }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const mediaQuery = '(min-width: 768px)';
    const mediaQueryList = window.matchMedia(mediaQuery);

    const hideMenu = () => {
      if (mediaQueryList.matches && isOpen) {
        setIsOpen(false);
      }
    };

    mediaQueryList.addEventListener('change', hideMenu);

    return () => {
      mediaQueryList.removeEventListener('change', hideMenu);
    };
  }, [isOpen]);

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <ScrollToTop />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
