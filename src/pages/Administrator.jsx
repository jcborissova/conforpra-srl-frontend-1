import { useState } from 'react';
import NavbarLog from '../components/NavbarLog';
import '../admin.css';
import SideBar from '../components/SideBar';
import Content from '../components/Content';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../administrador.css';

const Administrator = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <Router basename="/administrador">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" type="text/css" href="administrador.css" />
      </Helmet>
      <NavbarLog>
        <div className="App wrapper">
          <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          <Content
            toggleSidebar={toggleSidebar}
            sidebarIsOpen={sidebarIsOpen}
          />
        </div>
      </NavbarLog>
    </Router>
  );
};

export default Administrator;
