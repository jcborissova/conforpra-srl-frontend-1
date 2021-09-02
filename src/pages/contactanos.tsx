import HeaderPage from '../components/HeaderPage';
import contactanosBackground from '../img/Contactanos/contactanosBackground.png';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import map from '../img/maps.png';

const pageInformation = {
  id: 1,
  title: 'Contacto',
  description:
    'Estamos aquí para cualquier pregunta o sugerencia acerca de nuestros productos o servicios. Comunícate mediante las redes a continuación',
  img: contactanosBackground,
  dividerColor: '',
};

const networkInformation = [
  {
    id: 1,
    title: 'Dirección',
    text: 'Calle Los Tanques Esq. Avenida España. Santo Domingo Este.',
    img: LocationOnOutlinedIcon,
  },
  {
    id: 2,
    title: 'Correo empresarial',
    text: 'conforpra.servicios@gmail.com',
    type: "text",
    img: MailOutlineOutlinedIcon,
  },
  {
    id: 3,
    title: 'Número de teléfono',
    text: '(809)-908-4443',
    type: "text",
    img: PhoneOutlinedIcon,
  },
  {
    id: 4,
    title: 'Redes sociales',
    text: 'WhatsApp: (849)-707-4443, Facebook: conforpra empresa, Instagram: conforpraempresa, Twitter: conforpra',
    type: "list",
    img: ForumOutlinedIcon,
  },
];

function convertToList(type:any) {
  const lista = type.split(',');
  return(
    lista.map((item:any) => (
      <li>{item}</li>
    )
  ));
}

const Contactanos = () => {

  return (
    <div className="flex flex-col items-center w-full">
      <HeaderPage
        title={pageInformation.title}
        description={pageInformation.description}
        img={pageInformation.img}
        dividerColor={pageInformation.dividerColor}
      />
      <div className="flex lg:flex-row flex-col justify-center items-center md:gap-24 gap-10 w-full md:pt-16 pt-7 pb-6">
        <div className="flex flex-col gap-y-5 w-80">
          <div className="pb-5">
            <p className="text-lg font-semibold">Envíanos un mensaje</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="px-5 py-1 placeholder-gray-400 text-gray-600 relative bg-white rounded-2xl text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
            />
            <input
              type="text"
              placeholder="Correo electronico"
              className="px-5 py-1 placeholder-gray-400 text-gray-600 relative bg-white rounded-2xl text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
            />
            <input
              type="text"
              placeholder="Tema"
              className="px-5 py-1 placeholder-gray-400 text-gray-600 relative bg-white rounded-2xl text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
            />
            <textarea
              placeholder="Mensaje"
              className="px-5 py-3 h-28 placeholder  placeholder-gray-400 text-gray-600 relative bg-white rounded-2xl text-sm border border-gray-400 outline-none focus:outline-none focus:ring"
            />
          </div>
          <div className="">
            <button
              className="rounded-full bg-custom w-32 h-8 text-white  text-normal px-6 outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
            >
              Enviar
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 lg:w-96 w-11/12 md:pt-0 pt-10 lg:items-start items-center ">
          <div className="flex flex-col w-full lg:px-0 px-10 md:pb-5 pb-12 items-start">
            <p className="text-lg font-semibold">Contáctanos</p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-40 gap-y-10">
            {networkInformation.map((item) => (
              <div className="flex flex-col w-52 lg:items-start items-center md:text-sm text-xs" id={`${item.id}`}>
                <div className="md:pb-3 pb-6">
                  <item.img style={{ color: '009AA6' }} fontSize="large" />
                </div>
                <div className="flex lg:items-start items-center text-left flex-col gap-2 ">
                  <p className="md:pb-0 pb-3">{item.title}</p>
                  {
                    item.type === "list"
                    ? <p>{convertToList(item.text)}</p>
                    : item.text
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 pt-20 w-9/12 md:pb-28 pb-10">
        <div className="md:pb-10 pb-5">
          <p className="text-lg font-semibold">Ubicación geográfica</p>
        </div>
        <img
          src={map}
          className="img-background w-full rounded-t-xl border border-gray-600 border-opacity-50"
          alt="infocardimg"
        ></img>
      </div>
    </div>
  );
};

export default Contactanos;
