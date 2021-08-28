import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }: { isOpen: any; toggle: any }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 pt-12 text-center items-center z-40 bg-white font-semibold '
          : 'hidden'
      }
      onClick={toggle}
    >
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
  );
};

export default Dropdown;
