import React, { useState } from 'react';
import SuscribeteWallpaper from '../img/Suscribete.png';
import { ClickAwayListener } from '@material-ui/core';
import config from '../config';
import { useFormik } from 'formik';
import done from '../img/icons/done.png';
import axios from 'axios';
import FormData from 'form-data';

export default function Modal(props: any) {
  const [successful, setSuccessful] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { className } = props;
  const suscribeteFields = config.suscribeteFields.split(',');

  const formik = useFormik({
    initialValues: {
      NOMBRE: '',
      APELLIDOS: '',
      EMAIL: '',
    },
    onSubmit: async (values, { resetForm }) => {
      var form_data = new FormData();
      form_data.append(suscribeteFields[0], values['NOMBRE']);
      form_data.append(suscribeteFields[1], values['APELLIDOS']);

      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': config.suscribeteAPIKEY,
        },
        body: JSON.stringify({
          email: values['EMAIL'],
          attributes: {
            [suscribeteFields[0]]: values['NOMBRE'],
            [suscribeteFields[1]]: values['APELLIDOS'],
          },
          emailBlacklisted: false,
          smsBlacklisted: false,
          listIds: [36],
          updateEnabled: false,
          smtpBlacklistSender: ['user@example.com'],
        }),
      };

      fetch(config.suscribeteAPI, options)
        .then((response) => {
          setSuccessful(true);
          resetForm({});
        })
        .then((response) => {
          setSuccessful(true);
          resetForm({});
        })
        .catch((err) => console.error(err));
    },
  });

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
                <ClickAwayListener
                  onClickAway={() => {
                    setShowModal(false);
                    setSuccessful(false);
                  }}
                >
                  {successful ? (
                    <div className="flex flex-col gap-y-5 lg:w-80 w-full">
                      <div className="flex flex-col  py-10 items-center  shadow-lg rounded-lg">
                        <img src={done} className="w-20" alt="done" />
                        <div className="font-bold text-xl pt-3">
                          ¡Suscripción exitosa!
                        </div>
                        <div className=" text-center pt-3 w-10/12">
                          Se ha suscrito con éxito a Conforpra. Recibirá
                          promociones, noticias, capacitaciones y más.
                        </div>
                        <button
                          className="h-8 bg-custom-suscribete mt-5 text-white hover:text-white active:bg-purple-700 text-normal align-text-middle px-6 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 rounded"
                          onClick={() => {
                            setSuccessful(false);
                            setShowModal(false);
                          }}
                        >
                          Continuar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start w-full">
                      <div className="flex lg:flex-row md:h-96 h-auto">
                        <div className="sm:block hidden">
                          <img
                            src={SuscribeteWallpaper}
                            alt="Sucribete Wallpaper"
                            className="h-96 rounded-l-xl"
                          />
                        </div>
                        <div className="flex flex-col sm:w-7/12 w-full py-5 sm:px-10 px-5">
                          <form onSubmit={formik.handleSubmit}>
                            <div className="text-2xl font-bold pb-3">
                              <p>¡Suscríbete!</p>
                            </div>
                            <div className=" text-gray-500 font-normal text-xs md:text-left text-center">
                              <p>
                                Recibe notificaciones acerca de cursos,
                                descuentos en servicios, avances en materia de
                                protección y seguridad radiológica, tecnología
                                de diagnóstico por imágenes, medicina nuclear,
                                radioterapia, entre otros.
                              </p>
                            </div>
                            <div className="py-4 text-gray-500  flex flex-col items-start ">
                              <p className="pb-1 font-normal text-xs">Nombre</p>
                              <input
                                type="text"
                                {...formik.getFieldProps('NOMBRE')}
                                required
                                className="px-2 py-1  placeholder-gray-400 text-gray-600 relative bg-white rounded-lg text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
                              />
                              <p className="pb-1 pt-3 font-normal text-xs">
                                Apellido
                              </p>
                              <input
                                type="text"
                                {...formik.getFieldProps('APELLIDOS')}
                                required
                                className="px-2 py-1  placeholder-gray-400 text-gray-600 relative bg-white rounded-lg text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"
                              />
                              <p className="pb-1 pt-3 font-normal text-xs">
                                Correo electrónico
                              </p>
                              <input
                                type="text"
                                {...formik.getFieldProps('EMAIL')}
                                required
                                placeholder="ejemplo@email.com"
                                className="px-2 py-1 md:mt-0 font-normal text  placeholder-gray-400 text-gray-600 relative bg-white rounded-lg border border-gray-400 outline-none focus:outline-none focus:ring sm:w-auto w-full"
                              />
                              <div className="flex pt-5 w-full items-center sm:justify-start justify-center ">
                                <input
                                  className="bg-custom-suscribete rounded-xl text-xs font-semibold text-white h-6 hover:text-white active:bg-purple-700 text-normal align-text-middle px-6 outline-none focus:outline-none  ease-linear transition-all duration-150"
                                  type="submit"
                                  value="ENVIAR"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
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
