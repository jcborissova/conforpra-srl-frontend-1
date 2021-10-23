import { Link } from 'react-router-dom';
import {
  Navbar as BNavbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import { useAuth } from '../providers/auth';

const NavbarLog = ({ children }) => {
  const auth = useAuth();
  return (
    <div>
      <BNavbar color="dark" dark light expand="md">
        <Container>
          <NavbarBrand href="/administrador">Administrador</NavbarBrand>

          <Nav className="ml-auto" navbar>
            <NavItem className="btn-log bg-custom-suscribete rounded">
              <a
                href="/"
                onClick={auth.logout}
                className="btn  text-white"
                to="/"
                aria-current="page"
              >
                Ir a conforpra
              </a>
            </NavItem>
          </Nav>
        </Container>
      </BNavbar>
      {children}
    </div>
  );
};

export default NavbarLog;
