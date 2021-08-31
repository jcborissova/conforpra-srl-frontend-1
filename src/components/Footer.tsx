import { Link } from 'react-router-dom';
import WhatsappIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../styles.css';
import Suscribete from '../components/Suscribete';

const Footer = () => {
  return (
    <footer className="footer bg-black relative pt-1">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row sm:justify-between justify-start ">
            <div className="flex flex-col lg:pl-16 w-full place-self-center">
              <div className="">
                <span className="font-semibold text-white uppercase text-xl text-center">
                  CONFORPRA
                </span>
              </div>
              <div className="pt-4">
                <Suscribete className="bg-custom-suscribete text-white h-9 hover:text-white active:bg-purple-700 text-normal align-text-middle px-6 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" />
              </div>
            </div>
            <div className="flex flex-col text-white w-full sm:py-0 py-8">
              <span className="font-semibold mt-4 md:mt-0 mb-2">
                Productos y servicios
              </span>
              <div className="flex flex-col pt-2 font-light">
                <span className="my-1">
                  <Link to="/productos" className="text-md hover:text-blue-500">
                    Productos
                  </Link>
                </span>
                <span className="my-1">
                  <Link to="/servicios" className="text-md hover:text-blue-500">
                    Servicios
                  </Link>
                </span>
                <span className="my-1">
                  <Link
                    to="/capacitaciones"
                    className="text-md hover:text-blue-500"
                  >
                    Capacitaciones
                  </Link>
                </span>
              </div>
            </div>
            <div className="flex flex-col text-white w-full">
              <span className="font-semibold mt-4 md:mt-0 mb-2">Compañia</span>
              <div className="flex flex-col pt-2 font-light">
                <span className="my-1">
                  <Link to="/about" className="text-md hover:text-blue-500">
                    Sobre nosotros
                  </Link>
                </span>
                <span className="my-1">
                  <Link
                    to="/contactanos"
                    className="text-md hover:text-blue-500"
                  >
                    Contactanos
                  </Link>
                </span>
                <span className="my-1">
                  <Link to="/" className="text-md hover:text-blue-500">
                    Administrador
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:px-20 md:px-14 px-5 ">
        <div className="mt-16 border-t-2 border-gray-300 w-full flex flex-col items-center">
          <div className="flex lg:flex-row flex-col justify-between w-11/12 lg:text-center text-left lg:items-center items-start py-6 ">
            <div className="flex h-full items-center">
              <p className="text-sm text-white font-normal ">
                Conforpra © 2021, All rights reserved. <a href="https://helx.dev/">Website designed by Helx</a>
              </p>
            </div>
            <div className="flex flex-row justify-between items-center lg:w-96 w-full lg:pt-0 pt-10 ">
              <div>
                <p className="text-sm text-white font-normal">Follow us</p>
              </div>
              <div className="flex gap-4 ">
                <a href="/">
                  <WhatsappIcon style={{ color: 'white' }} fontSize="large" />
                </a>
                <a href="/">
                  <FacebookIcon style={{ color: 'white' }} fontSize="large" />
                </a>
                <a href="/">
                  <InstagramIcon style={{ color: 'white' }} fontSize="large" />
                </a>
                <a href="/">
                  <TwitterIcon style={{ color: 'white' }} fontSize="large" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
