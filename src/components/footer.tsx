import React from "react";
import WhatsappIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <footer className="footer bg-black relative pt-1 ">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row sm:justify-between justify-start ">
            <div className="flex flex-col lg:pl-16 w-full">
              <div className="">
                <span className="font-semibold text-white uppercase text-xl text-center">
                  CONFORPRA
                </span>
              </div>
              <div className="pt-4">
                <button
                  className="bg-purple-500 text-white hover:bg-purple-700 hover:text-white active:bg-purple-700 font-semibold uppercase text-normal px-6 py-3 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Suscribete
                </button>
              </div>
            </div>
            <div className="flex flex-col text-white w-full sm:py-0 py-8">
              <span className="font-semibold mt-4 md:mt-0 mb-2">
                Productos y servicios
              </span>
              <span className="my-1">
                <a href="#" className=" text-md hover:text-blue-500">
                  Productos
                </a>
              </span>
              <span className="my-1">
                <a href="#" className=" text-md hover:text-blue-500">
                  Servicios
                </a>
              </span>
              <span className="my-1">
                <a href="#" className="text-md hover:text-blue-500">
                  Capacitaciones
                </a>
              </span>
            </div>
            <div className="flex flex-col text-white w-full">
              <span className="font-semibold mt-4 md:mt-0 mb-2">Compañia</span>
              <span className="my-1">
                <a
                  href="#"
                  className="text-md font-extralight hover:text-blue-500"
                >
                  Sobre nosotros
                </a>
              </span>
              <span className="my-1">
                <a href="#" className="text-md hover:text-blue-500">
                  Contactanos
                </a>
              </span>
              <span className="my-1">
                <a href="#" className="text-md hover:text-blue-500">
                  Administrador
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 flex ">
        <div className="mt-16 border-t-2 border-gray-300 w-11/12 flex flex-col items-center">
          <div className="flex lg:flex-row flex-col justify-between sm:w-2/3 lg:text-center text-left lg:items-center items-start py-6">
            <p className="text-sm text-white font-bold mb-2">
              © Conforpra - HELX
            </p>
            <div className="flex flex-row items-center lg:pt-0 pt-10">
              <p className="text-sm text-white font-bold pr-14 ">Follow us</p>
              <div className="flex gap-4 ">
                <a href="/">
                  <WhatsappIcon style={{ color: "white" }} fontSize="large" />
                </a>
                <a href="/">
                  <FacebookIcon style={{ color: "white" }} fontSize="large" />
                </a>
                <a href="/">
                  <InstagramIcon style={{ color: "white" }} fontSize="large" />
                </a>
                <a href="/">
                  <TwitterIcon style={{ color: "white" }} fontSize="large" />
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
