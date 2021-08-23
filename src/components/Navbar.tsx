import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/ConforpraLogo.svg";

const Navbar = ({ toggle }: { toggle: any }) => {
  return (
    <nav
      className="fixed flex justify-between items-center h-16 bg-white text-black w-full font-mono lg:px-20 px-0 z-40"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        <img src={logo} alt="conforpralogo" />
      </Link>
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
      <div className="md:pr-8 md:block hidden text-black font-sans font-normal text-xs xl:text-sm">
        <Link to="/" className="p-4">
          Inicio
        </Link>
        <Link to="/about" className="p-4">
          Sobre nosotros
        </Link>
        <Link to="/productos" className="p-4">
          Productos y servicios
        </Link>
        <Link to="/capacitaciones" className="p-4">
          Capacitaciones
        </Link>
        <Link to="/contactanos" className="p-4">
          Contactanos
        </Link>
        <Link to="/suscribete" className="p-4 font-semibold">
          Suscribete
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;