import CardCarousel from '../CardCarousel';

const CourseSection = () => {
  return (
    <div className="flex flex-col items-center mt-16 lg:text-center mb-12">
      <div className="items-center lg:w-3/4 w-full flex flex-col">
        <div className="text-xl font-semibold lg:w-full w-10/12">
          <p>Cursos y talleres</p>
        </div>
        <div className="pt-5 lg:w-full w-10/12">
          <p>
            Nuestros cursos y talleres buscan fortalecer tus conocimientos en el
            campo de la física radiológica y ser de soporte para el buen
            desempeño en tu trabajo, cada uno de nuestros cursos de manera
            particular te garantiza la base para que puedas solicitar la
            Licencia Personal de Operación emitida por la autoridad competente
            en RD.
          </p>
        </div>
      </div>
      <div className="pt-12 pb-9">
        <CardCarousel />
      </div>
      <div className="flex justify-center lg:w-1/2 pt-10 ">
        <button
          className="rounded-full sm:h-10 sm:py-0 py-2 bg-custom text-white uppercase text-normal px-6 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          VER MÁS CAPACITACIONES
        </button>
      </div>
    </div>
  );
};

export default CourseSection;
