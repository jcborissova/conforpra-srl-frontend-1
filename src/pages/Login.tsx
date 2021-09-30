import React, { useState } from 'react';
import loginHeader from '../img/Administrador/loginHeader.png';
import loginSideImg from '../img/Administrador/cuate.png';
import HeaderPage from '../components/HeaderPage';
import '../styles.css';
import MainLayout from '../components/MainLayout';
import { useFormik } from 'formik';
import client from '../providers/api';
import { useAuth } from '../providers/auth';

const pageInformation = {
  id: 1,
  title: 'Administrador',
  description:
    'Inicie sesión a continuación para acceder a su cuenta personal.',
  img: [
    {
      id: 1,
      img: loginHeader,
    },
  ],
};

const Login = () => {
  const [error, setError] = useState(false);

  const auth = useAuth();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await client.post('/api/login', values);
        await auth.login(response.data.tokens);
      } catch (error) {
        console.error('Error while attempting to log in', error);
        setError(true);
      }
    },
  });

  return (
    <MainLayout>
      <div className="flex flex-col items-center w-full">
        <HeaderPage
          title={pageInformation.title}
          description={pageInformation.description}
          img={pageInformation.img}
        />
        <div className="flex flex-row md:pt-20 pt-10 w-screen  md:justify-center lg:gap-20 gap-5 lg:pb-28 md:pb-5 pb-8">
          <div className="flex flex-col gap-y-5 lg:w-80 md:w-1/2 w-full md:px-0 px-7">
            <form onSubmit={formik.handleSubmit}>
              <div className="pb-4">
                <p className="text-lg font-semibold">Inicio de sesión</p>
              </div>
              <div className="flex flex-col gap-y-4">
                {error && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <span className="block sm:inline">
                      Tus credenciales son invalidas
                    </span>
                  </div>
                )}
                <div className="flex flex-col gap-y-2">
                  <p className=" text-gray-500 text-sm">
                    Correo electrónico
                    <span className="text-red-600 ml-2">*</span>
                  </p>
                  <input
                    type="text"
                    required
                    className="px-5 py-1 w-full placeholder-gray-400 text-gray-600 relative bg-white rounded-2xl text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
                    {...formik.getFieldProps('username')}
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className=" text-gray-500 text-sm">
                    Contraseña<span className="text-red-600 ml-2">*</span>
                  </p>
                  <input
                    type="password"
                    required
                    className="px-5 py-1 w-full placeholder-gray-400 text-gray-600 relative bg-white rounded-2xl text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
                    {...formik.getFieldProps('password')}
                  />
                </div>
              </div>
              <div className="">
                <label className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-gray-600"
                  />
                  <span className="ml-2 text-gray-500 md:text-base text-sm">
                    Recuérdame
                  </span>
                </label>
              </div>
              <div className=" mt-5">
                <button
                  className="rounded-full bg-custom  h-8 text-white text-normal text-sm px-6 outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="submit"
                >
                  INICIAR SESIÓN
                </button>
              </div>
            </form>
          </div>
          <div className="md:block hidden ">
            <img src={loginSideImg} alt="people" className="z-0 h-80" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
