import { Link } from 'react-router-dom';
import ServiceCard from '../Cards/ServiceCard';
import img1 from '../../img/Services/1.png';
import img2 from '../../img/Services/2.png';
import img3 from '../../img/Services/3.png';
import img4 from '../../img/Services/4.png';

const ServiceCardInformation = [
  {
    id: 2,
    text: 'Diseño e implementación de proyectos en materia nuclear y centros de radiodiagnóstico ',
    img: img4,
  },
  {
    id: 1,
    text: 'Gestión de licencia emitida por la Comisión Nacional de Energía para operar fuentes radioactivas y/o generadores de rayos x',
    img: img1,
  },
  {
    id: 3,
    text: 'Prestación de la dosimetría externa',
    img: img3,
  },
  {
    id: 4,
    text: 'Emplomado de la instalación',
    img: img2,
  },
];

const leftCards = ServiceCardInformation.filter((val, idx) => idx % 2 !== 0);
const rightCards = ServiceCardInformation.filter((val, idx) => idx % 2 === 0);

const ServiceSection = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:items-start items-center lg:justify-center lg:px-0 lg:pb-0 pb-10 z-30 bg-custom-color">
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:pt-16 sm:gap-10 gap-8 z-40 ">
        <div className="flex flex-col gap-8">
          {leftCards.map((item) => (
            <ServiceCard key={item.id} img={item.img} text={item.text} />
          ))}
        </div>
        <div className=" sm:pt-20 flex flex-col gap-8">
          {rightCards.map((item) => (
            <ServiceCard key={item.id} img={item.img} text={item.text} />
          ))}
        </div>
        <div className="flex pt-8 lg:hidden justify-center sm:col-span-2 ">
          <button
            className="rounded-full bg-custom h-10 text-white uppercase text-normal px-6 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <Link to="/servicios">Ver mas servicios</Link>
          </button>
        </div>
      </div>
      <div className="lg:pt-32 md:p-10 p-5 md:pb-0 pb-10 text-left lg:w-5/12">
        <div className="font-semibold">
          <p className="md:text-xl text-lg">Servicios</p>
        </div>
        <div className="pt-5 md:text-base text-sm">
          <p>
            Somos una empresa que emplea la normativa vigente con un amplio enfoque en las buenas prácticas especializadas.
          </p>
        </div>
        <div className="pt-4 md:text-base text-sm lg:pb-0 pb-10">
          <p>
            Ofrecemos apoyo y asesoría en el manejo de fuentes radioactivas, equipos, generadores de radiación ionizante en la práctica médica, industrial y/o investigación.
          </p>
        </div>
        <div className="pt-12 lg:block hidden w-full">
          <button
            className="animate-bounce rounded-full bg-custom w-56 h-10 text-white uppercase text-normal outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <Link to="/servicios">Ver mas servicios</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
