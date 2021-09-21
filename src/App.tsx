import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Capacitaciones from './pages/Capacitaciones';
import Contactanos from './pages/Contactanos';
import Productos from './pages/Productos';
import Servicios from './pages/Servicios';
import Login from './pages/Login';
import Administrator from './pages/Administrator';
import NotFound from './pages/NotFound';

function App() {
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
    <div className="w-screen">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/productos" component={Productos} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/sobrenosotros" component={About} />
        <Route path="/capacitaciones" component={Capacitaciones} />
        <Route path="/contactanos" component={Contactanos} />
        <Route path="/login" component={Login} />
        <Route path="/administrador" component={Administrator} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
