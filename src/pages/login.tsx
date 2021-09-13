import loginHeader from '../img/Administrador/loginHeader.png';
import loginSideImg from '../img/Administrador/cuate.png';
import HeaderPage from '../components/HeaderPage';
import '../styles.css';
import { Link } from 'react-router-dom';

const pageInformation = {
  id: 1,
  title: 'Administrador',
  description:
    'Inicie sesión a continuación para acceder a su cuenta personal.',
  img: loginHeader,
};

const Login = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <HeaderPage
        title={pageInformation.title}
        description={pageInformation.description}
        img={pageInformation.img}
      />
      <div className="flex flex-row md:pt-20 pt-10 w-screen md:h-screen md:justify-center lg:gap-20 gap-5 md:pb-0 pb-8">
        <div className="flex flex-col gap-y-5 lg:w-80 md:w-1/2 w-full md:px-0 px-7">
          <div className="pb-2">
            <p className="text-lg font-semibold">Inicio de sesión</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <p className=" text-gray-500 text-sm">
                Correo electrónico<span className="text-red-600 ml-2">*</span>
              </p>
              <input
                type="text"
                className="px-5 py-1 w-full placeholder-gray-400 text-gray-600 relative bg-white rounded-2xl text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className=" text-gray-500 text-sm">
                Contraseña<span className="text-red-600 ml-2">*</span>
              </p>
              <input
                type="password"
                className="px-5 py-1 w-full placeholder-gray-400 text-gray-600 relative bg-white rounded-2xl text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-gray-600"
              />
              <span className="ml-2 text-gray-500 md:text-base text-sm">
                Recuérdame
              </span>
            </label>
          </div>
          <div className="">
            <button
              className="rounded-full bg-custom  h-8 text-white text-normal text-sm px-6 outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
            >
              INICIAR SESIÓN
            </button>
          </div>
        </div>
        <div className="md:block hidden ">
          <img src={loginSideImg} alt="people" className="z-0 h-80" />
        </div>
      </div>
    </div>
  );
};

export default Login;
