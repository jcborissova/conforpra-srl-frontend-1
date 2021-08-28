import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Capacitaciones from './pages/capacitaciones';
import Contactanos from './pages/contactanos';
import Suscribete from './pages/suscribete';
import Productos from './pages/productos';
import Servicios from './pages/servicios';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const mediaQuery = '(max-width: 768px)';
    const mediaQueryList = window.matchMedia(mediaQuery);
    
    const hideMenu = () => {
      mediaQueryList.addEventListener('change', (event) => {
        console.log(window.innerWidth);
        if (!event.matches && isOpen) {
          setIsOpen(false);
        }
      });
    };

    return () => {
      mediaQueryList.removeEventListener('resize', hideMenu);
    };
  },[]);

  return (
    <div className="w-screen">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/productos" component={Productos} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/sobrenosotros" component={About} />
        <Route path="/capacitaciones" component={Capacitaciones} />
        <Route path="/contactanos" component={Contactanos} />
        <Route path="/suscribete" component={Suscribete} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
