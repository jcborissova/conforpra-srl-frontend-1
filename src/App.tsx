import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Capacitaciones from './pages/Capacitaciones';
import Contactanos from './pages/Contactanos';
import Productos from './pages/Productos';
import Servicios from './pages/Servicios';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Administrator from './pages/Administrator';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';

function App() {
  const [isOpen, setIsOpen] = useState(false);

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
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/productos" component={Productos} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/sobrenosotros" component={About} />
        <Route path="/capacitaciones" component={Capacitaciones} />
        <Route path="/contactanos" component={Contactanos} />
        <UnauthenticatedRoute exact path="/login" component={Login} />
        <AuthenticatedRoute path="/administrador" component={Administrator} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
