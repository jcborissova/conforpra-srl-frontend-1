import { Link } from 'react-router-dom';
import {
  Navbar as BNavbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';

const NavbarLog = ({ children }) => {
  return (
    <div>
      <BNavbar color="dark" dark light expand="md">
        <Container>
          <NavbarBrand href="/administrador">Administrador</NavbarBrand>

          <Nav className="ml-auto" navbar>
            <NavItem className="btn-log bg-custom-suscribete rounded">
              <Link className="btn  text-white" to="/" aria-current="page">
                Ir a conforpra
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </BNavbar>
      {children}
    </div>
  );
};

export default NavbarLog;
