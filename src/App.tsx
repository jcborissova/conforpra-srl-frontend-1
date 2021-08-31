import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Capacitaciones from './pages/capacitaciones';
import Contactanos from './pages/contactanos';
import Productos from './pages/productos';
import Servicios from './pages/servicios';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    window.scrollTo(0, 0);
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
    <div className="w-screen">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/productos" component={Productos} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/sobrenosotros" component={About} />
        <Route path="/capacitaciones" component={Capacitaciones} />
        <Route path="/contactanos" component={Contactanos} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
