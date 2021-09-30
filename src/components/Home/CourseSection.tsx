import { Link } from 'react-router-dom';
import CardCarousel from '../CardCarousel';

const CourseSection = () => {
  return (
    <div className="flex flex-col items-center lg:mt-16 lg:text-center mb-12">
      <div className="items-center lg:w-3/4 w-full flex flex-col">
        <div className="md:text-xl text-lg font-semibold lg:w-full w-10/12">
          <p>Cursos y talleres</p>
        </div>
        <div className="pt-5 lg:w-full w-10/12 md:text-base text-sm">
          <p>
            Nuestros cursos y talleres tienen como objetivo fortalecer y crear
            conocimientos en el campo de la protección radiológica, buscando un
            fundamento para el buen desempeño a la hora de ponerlo en práctica
            en su área laboral.
          </p>
          <br />
          <p>
            Cabe destacar que cada uno de nuestros cursos de manera especial le
            garantiza la base para la solicitud de la licencia personal de
            operación, emitida por la Comisión Nacional de Energía (CNE).
          </p>
        </div>
      </div>
      <div className="pt-12 pb-9">
        <CardCarousel />
      </div>
      <div className="flex justify-center lg:w-1/2 pt-10 ">
        <Link to="/capacitaciones">
          <button
            className="rounded-full sm:h-10 sm:py-0 py-2 bg-custom text-white uppercase text-normal px-6 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <Link to="/capacitaciones">VER MÁS CAPACITACIONES</Link>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseSection;
