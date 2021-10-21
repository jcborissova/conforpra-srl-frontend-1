import WhatsappIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SocialNetworkCard from './Cards/SocialNetworkCard';
import '../styles.css';
import LineDivider from './LineDivider';
import { useState } from 'react';
import { useFormik } from 'formik';
import client from '../providers/api';
import done from '../img/icons/done.png';

const socialNetworkCardInformation = [
  {
    id: 1,
    text: 'WhatsApp',
    subText: '(849)-707-4443',
    img: WhatsappIcon,
    link: 'https://wa.me/+18497074443',
  },
  {
    id: 2,
    text: 'Facebook',
    subText: 'conforpra empresa',
    img: FacebookIcon,
    link: 'https://www.facebook.com/conforpra.empresa.1',
  },
  {
    id: 3,
    text: 'Instagram',
    subText: 'conforpraempresa',
    img: InstagramIcon,
    link: 'https://www.instagram.com/conforpraempresa/',
  },
  {
    id: 4,
    text: 'Twitter',
    subText: 'conforpra',
    img: TwitterIcon,
    link: 'https://twitter.com/conforpra',
  },
  {
    id: 5,
    text: 'Teléfono',
    subText: '(809)-908-4443',
    img: PhoneIcon,
    link: 'tel:+18099084443',
  },
  {
    id: 6,
    text: 'Email',
    subText: 'conforpra.servicios@ gmail.com',
    img: MailOutlineIcon,
    link: 'mailto:conforpra.servicios@gmail.com',
  },
];

const Contactanos = (props: any) => {
  function CloseSuccessfulMessage() {
    // Changing state
    setSuccessful(false);
  }
  const { visibility, color, text, placeholder, elementType } = props;

  const [successful, setSuccessful] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      interestElement: '',
      elementType: elementType,
      company: '',
      message: '',
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await client.post(
          '/api/mailservice/send-email',
          values,
        );
        resetForm({});
        setSuccessful(true);
      } catch (error) {
        console.error('Error while sending contact form', error);
      }
    },
  });

  return (
    <>
      <div className="flex flex-col justify-center items-start pb-7">
        {visibility ? (
          <LineDivider dividerColor="" dividerbgColor={`${color}`} />
        ) : null}
        {successful ? (
          <div className="flex flex-col items-center w-full mt-16">
            <div className="flex flex-col md:px-16 px-10 py-10 items-center w-2/5 shadow-lg rounded-lg">
              <img src={done} className="w-20" alt="done" />
              <div className="font-bold text-xl pt-3">¡Mensaje enviado!</div>
              <div className=" text-center pt-3 w-10/12">
                Su mensaje ha sido enviado con éxito. Pronto estaremos en
                contacto
              </div>
              <button
                className="lg:w-4/12 w-6/12 h-8 bg-custom-suscribete mt-5 text-white hover:text-white active:bg-purple-700 text-normal align-text-middle px-6 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 rounded"
                onClick={() => CloseSuccessfulMessage()}
              >
                Continuar
              </button>
            </div>
          </div>
        ) : (
          <div className="flex lg:flex-row flex-col w-full justify-center gap-x-16 items-center">
            <div className="flex lg:w-1/5 w-11/12 lg:pt-0 pt-10">
              <p className="font-semibold">{text}</p>
            </div>
            <div className="flex flex-col border border-black my-12 justify-center md:w-auto w-11/12">
              <div className="md:px-16 px-10 py-10">
                <div className="font-bold">Contáctanos</div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="flex flex-col pt-5 w-full">
                    <div className="flex md:flex-row flex-col">
                      <input
                        type="text"
                        {...formik.getFieldProps('name')}
                        placeholder="Nombre"
                        required
                        className="px-2 py-1 md:mr-5 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
                      />
                      <input
                        type="text"
                        {...formik.getFieldProps('lastname')}
                        placeholder="Apellido"
                        required
                        className="px-2 py-1 md:mt-0 mt-5 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Correo Electrónico"
                      {...formik.getFieldProps('email')}
                      required
                      className="px-2 py-1 mt-5 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
                    />
                    <input
                      type="text"
                      placeholder={placeholder}
                      {...formik.getFieldProps('interestElement')}
                      required
                      className="px-2 py-1 mt-5 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
                    />
                    <input
                      type="text"
                      placeholder="Nombre de empresa (opcional)"
                      {...formik.getFieldProps('company')}
                      className="px-2 py-1 mt-5 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
                    />
                    <textarea
                      placeholder="Mensaje"
                      {...formik.getFieldProps('message')}
                      required
                      className="px-2 py-1 mt-5 h-28 resize-none placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
                    />
                    <input
                      className="lg:w-4/12 w-6/12 h-8 bg-custom-suscribete mt-5 text-white hover:text-white active:bg-purple-700 text-normal align-text-middle px-6 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 rounded"
                      value="Enviar"
                      type="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col w-full gap-x-6 items-center ">
          <div className="flex justify-center w-screen pt-10">
            <p className="font-semibold md:w-auto w-11/12">
              O escribenos por cualquiera de estas redes sociales
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 py-14 lg:gap-x-30 md:gap-x-10 gap-x-3 md:gap-y-28 gap-y-12  ">
            {socialNetworkCardInformation.map((item) => (
              <SocialNetworkCard
                key={item.id}
                img={item.img}
                text={item.text}
                subtext={item.subText}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactanos;
