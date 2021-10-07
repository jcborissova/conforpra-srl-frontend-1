import HeaderPage from '../components/HeaderPage';
import contactanosBackground from '../img/Contactanos/contactanosBackground.png';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import '../styles.css';
import { useState } from 'react';
import config from '../config';
import MainLayout from '../components/MainLayout';
import { useFormik } from 'formik';
import client from '../providers/api';

const pageInformation = {
  id: 1,
  title: 'Contacto',
  description:
    'Estamos aquí para cualquier pregunta o sugerencia acerca de nuestros productos, servicios o capacitaciones. Comunícate con nosotros.',
  img: [
    {
      id: 1,
      img: contactanosBackground,
    },
  ],
  dividerColor: '',
};

const networkInformation = [
  {
    id: 1,
    title: 'Dirección',
    text: 'C. Juan Sánchez Ramírez 56, Santo Domingo 10105.',
    img: LocationOnOutlinedIcon,
    link: 'https://goo.gl/maps/NegvjioXpVwNzyrt8',
  },
  {
    id: 2,
    title: 'Correo empresarial',
    text: 'conforpra.servicios@gmail.com',
    type: 'text',
    img: MailOutlineOutlinedIcon,
    link: 'mailto:conforpra.servicios@gmail.com',
  },
  {
    id: 3,
    title: 'Número de teléfono',
    text: '(809)-908-4443',
    type: 'text',
    img: PhoneOutlinedIcon,
    link: 'tel:+18099084443',
  },
  {
    id: 4,
    title: 'Redes sociales',
    text: 'WhatsApp: (849)-707-4443, Facebook: conforpra empresa, Instagram: conforpraempresa, Twitter: conforpra',
    type: 'list',
    img: ForumOutlinedIcon,
    link: 'https://wa.me/+18497074443, https://www.facebook.com/conforpra.empresa.1, https://www.instagram.com/conforpraempresa/, https://twitter.com/conforpra',
  },
];

function convertToList(text: string, link: string) {
  const splitTextList = text.split(',');
  const splitLinkList = link.split(',');
  return splitTextList.map((item: any, index: number) => (
    <a
      href={splitLinkList[index]}
      target="_blank"
      rel="noreferrer noopener"
      className="text-custom"
    >
      <li>{item}</li>
    </a>
  ));
}

const Contactanos = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await client.post(
          '/api/mailservice/send-contact-email',
          values,
        );
        console.log(response);
        resetForm({});
      } catch (error) {
        console.error('Error while sending contact form', error);
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
          dividerColor={pageInformation.dividerColor}
        />
        <div className="flex lg:flex-row flex-col justify-center items-center md:gap-24 gap-10 w-full md:pt-16 pt-7 pb-6">
          <div className="flex flex-col gap-y-5 lg:w-80 w-10/12">
            <div className="pb-5">
              <p className="text-lg font-semibold">Envíanos un mensaje</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-y-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  {...formik.getFieldProps('name')}
                  required
                  className="px-5 py-1 placeholder-gray-400 text-gray-600 relative bg-white rounded-2xl text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
                />
                <input
                  type="email"
                  placeholder="Correo electronico"
                  {...formik.getFieldProps('email')}
                  required
                  className="px-5 py-1 placeholder-gray-400 text-gray-600 relative bg-white rounded-2xl text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  {...formik.getFieldProps('subject')}
                  required
                  className="px-5 py-1 placeholder-gray-400 text-gray-600 relative bg-white rounded-2xl text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
                />
                <textarea
                  placeholder="Mensaje"
                  {...formik.getFieldProps('message')}
                  required
                  className="px-5 py-3 h-28 placeholder resize-none  placeholder-gray-400 text-gray-600 relative bg-white rounded-2xl text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
                />
              </div>
              <div className="pt-5">
                <input
                  className="rounded-full bg-custom w-32 h-8 text-white  text-normal px-6 outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="submit"
                  value="Enviar"
                />
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-y-5 lg:w-96 w-11/12 md:pt-0 pt-10 lg:items-start items-center ">
            <div className="flex flex-col w-full lg:px-0 px-10 md:pb-5 pb-12 items-start">
              <p className="text-lg font-semibold">Contáctanos</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-40 gap-y-10">
              {networkInformation.map((item) => (
                <div
                  className="flex flex-col w-52 lg:items-start items-center md:text-sm text-xs"
                  id={`${item.id}`}
                >
                  <div className="md:pb-3 pb-6">
                    <item.img style={{ color: '009AA6' }} fontSize="large" />
                  </div>
                  <div className="flex lg:items-start items-center text-left flex-col gap-2 ">
                    <p className="md:pb-0 pb-3">{item.title}</p>
                    {item.type === 'list' ? (
                      <p>{convertToList(item.text, item.link)}</p>
                    ) : (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-custom"
                      >
                        {item.text}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:pt-20 pt-10 md:w-9/12 md:pb-28 pb-10 md:h-64h-screen w-11/12">
          <div className="md:pb-10 pb-5">
            <p className="text-lg font-semibold">Ubicación geográfica</p>
          </div>
          <iframe
            title="Ubicación de Conforpra"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.445425812496!2d-69.91405388510809!3d18.46347238744227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzQ4LjUiTiA2OcKwNTQnNDIuNyJX!5e0!3m2!1sen!2sdo!4v1630805522776!5m2!1sen!2sdo"
            className="md:h-screen h-64 border-gray-400 rounded-xl  border-2"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Contactanos;
