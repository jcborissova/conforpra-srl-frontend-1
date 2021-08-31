import { Link } from 'react-router-dom';
import ServiceCard from '../Cards/ServiceCard';
import img1 from '../../img/Services/1.png';
import img2 from '../../img/Services/2.png';
import img3 from '../../img/Services/3.png';
import img4 from '../../img/Services/4.png';

const ServiceCardInformation = [
  {
    id: 1,
    text: 'Tramitación de licencia para operar fuentes radioactivas y/o equipos generadores de rayos x',
    img: img1,
  },
  {
    id: 2,
    text: 'Diseño e implementación de proyectos en materia nuclear y centros de radiodiagnóstico ',
    img: img2,
  },
  {
    id: 3,
    text: 'Emplomado de la instalación',
    img: img3,
  },
  {
    id: 4,
    text: 'Prestación de la dosimetría externa',
    img: img4,
  },
];

const leftCads = ServiceCardInformation.filter((val, idx) => idx % 2 !== 0);
const rightCads = ServiceCardInformation.filter((val, idx) => idx % 2 === 0);

const ServiceSection = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:items-start items-center justify-end z-30 bg-gray-200">
      <div className="grid sm:grid-cols-2 grid-cols-1 pt-16 sm:gap-10 gap-8 pl-0 z-40">
        <div className=" flex flex-col gap-8">
          {leftCads.map((item) => (
            <ServiceCard key={item.id} img={item.img} text={item.text} />
          ))}
        </div>
        <div className=" sm:pt-20 flex flex-col gap-8">
          {rightCads.map((item) => (
            <ServiceCard key={item.id} img={item.img} text={item.text} />
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:items-start items-center lg:pt-48 p-10 text-left lg:w-6/12 w-full ">
        <div className="xl:w-8/12 lg:w-8/12 md:w-11/12 w-full ">
          <div className="text-3xl">
            <p>Servicios</p>
          </div>
          <div className="pt-8">
            <p>
              Acompañamos y asesoramos a las organizaciones con el manejo de
              fuentes radioactivas y equipos generadores de radiación ionizante
              en la práctica médica, industrial y de investigación.
            </p>
          </div>
          <div className="pt-4">
            <p>
              La empresa emplea la normativa vigente y se enfoca en las buenas
              prácticas especializadas.
            </p>
          </div>
        </div>
        <div className="pt-12">
        <Link to="/servicios" >
          <button
            className="rounded-full bg-custom w-56 text-white uppercase text-normal px-3 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <Link to="/servicios">Ver mas servicios</Link>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
