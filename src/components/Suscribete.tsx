import React, { useState } from 'react';
import SuscribeteWallpaper from '../img/Suscribete.png';
import { ClickAwayListener } from '@material-ui/core';
import config from '../config';

export default function Modal(props: any) {
  const { className } = props;
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <button
        className={className}
        type="button"
        onClick={() => setShowModal(true)}
      >
        Suscríbete
      </button>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:transition duration-500 ease-in-out transform md:hover:-translate-y-1 md:hover:scale-110">
            <div className="relative w-auto my-6 mx-auto max-w-3xl flex justify-center">
              {/*content*/}
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col md:w-full w-11/12 bg-white outline-none focus:outline-none">
                {/*header*/}
                <ClickAwayListener onClickAway={() => setShowModal(false)}>
                  <div className="flex items-start w-full">
                    <div className="flex lg:flex-row h-96">
                      <div className="sm:block hidden">
                        <img
                          src={SuscribeteWallpaper}
                          alt="Sucribete Wallpaper"
                          className="h-96 rounded-l-xl"
                        />
                      </div>
                      <div className="flex flex-col sm:w-7/12 w-full py-5 px-10">
                        <form
                          target="_blank"
                          action={config.suscribeteUrl}
                          method="post"
                        >
                          <div className="text-2xl font-bold pb-3">
                            <p>¡Suscríbete!</p>
                          </div>
                          <div className=" text-gray-500 font-normal text-xs text-left">
                            <p>
                              Recibe notificaciones acerca de cursos, descuentos
                              en servicios, avances en materia de protección y
                              serguridad radiológica, tecnología de diagnóstico
                              por imágenes, medicina nuclear, radioterapia,
                              entre otros.
                            </p>
                          </div>
                          <div className="pt-4 text-gray-500  flex flex-col items-start ">
                            <p className="pb-1 font-normal text-xs">Nombre</p>
                            <input
                              type="text"
                              name="NOMBRE"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              required
                              className="px-2 py-1  placeholder-gray-400 text-gray-600 relative bg-white rounded-lg text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
                            />
                            <p className="pb-1 pt-3 font-normal text-xs">
                              Apellido
                            </p>
                            <input
                              type="text"
                              name="APELLIDOS"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              required
                              className="px-2 py-1  placeholder-gray-400 text-gray-600 relative bg-white rounded-lg text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
                            />
                            <p className="pb-1 pt-3 font-normal text-xs">
                              Correo electrónico
                            </p>
                            <input
                              type="text"
                              name="EMAIL"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              placeholder="example@email.com"
                              className="px-2 py-1 md:mt-0 font-normal text  placeholder-gray-400 text-gray-600 relative bg-white rounded-lg border border-gray-400 outline-none focus:outline-none focus:ring sm:w-auto w-full"
                            />
                            <div className="flex pt-5 w-full items-center sm:justify-start justify-center ">
                              <input
                                className="bg-custom-suscribete rounded-xl text-xs font-semibold text-white h-6 hover:text-white active:bg-purple-700 text-normal align-text-middle px-6 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                type="submit"
                                value="ENVIAR"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </ClickAwayListener>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
