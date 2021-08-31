import { Link } from 'react-router-dom';
import Suscribete from '../components/Suscribete';

const Dropdown = ({ isOpen, toggle }: { isOpen: any; toggle: any }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 pt-12 text-center items-center z-40 bg-white font-semibold'
          : 'hidden'
      }
    >
      <Link to="/" className="p-4" onClick={toggle}>
        Inicio
      </Link>
      <Link to="/sobrenosotros" className="p-4" onClick={toggle}>
        Sobre nosotros
      </Link>
      <Link to="/productos" className="p-4" onClick={toggle}>
        Productos
      </Link>
      <Link to="/servicios" className="p-4" onClick={toggle}>
        Servicios
      </Link>
      <Link to="/capacitaciones" className="p-4" onClick={toggle}>
        Capacitaciones
      </Link>
      <Link to="/contactanos" className="p-4" onClick={toggle}>
        Contactanos
      </Link>
      <Suscribete className="p-4 font-semibold" onClick={toggle} />
    </div>
  );
};

export default Dropdown;
