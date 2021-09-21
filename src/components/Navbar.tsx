import { NavLink, Link } from 'react-router-dom';
import logo from '../img/ConforpraLogo.svg';
import Suscribete from '../components/Suscribete';

const Navbar = ({ toggle }: { toggle: any }) => {
  return (
    <nav
      className="fixed flex justify-between items-center h-16 bg-white text-black w-full font-mono lg:px-20 px-0 z-50"
      role="navigation"
    >
      <NavLink to="/" className="lg:pl-8 pl-2">
        <img
          src={logo}
          alt="conforpralogo"
          className=" xl:w-44 lg:w-36 md:w-28 w-36"
        />
      </NavLink>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className=" md:block hidden text-black font-sans font-semibold text-xs xl:text-sm">
        <Link to="/" className="p-4 text-custom">
          Inicio
        </Link>
        <NavLink
          to="/sobrenosotros"
          className="p-4 text-custom"
          activeClassName="active"
        >
          Sobre nosotros
        </NavLink>
        <NavLink
          to="/productos"
          className="p-4 text-custom"
          activeClassName="active"
        >
          Productos
        </NavLink>
        <NavLink
          to="/servicios"
          className="p-4 text-custom"
          activeClassName="active"
        >
          Servicios
        </NavLink>
        <NavLink
          to="/capacitaciones"
          className="p-4 text-custom"
          activeClassName="active"
        >
          Capacitaciones
        </NavLink>
        <NavLink
          to="/contactanos"
          className="p-4 text-custom"
          activeClassName="active"
        >
          Contáctanos
        </NavLink>
        <Suscribete className="p-4 font-semibold text-custom" />
      </div>
    </nav>
  );
};

export default Navbar;
