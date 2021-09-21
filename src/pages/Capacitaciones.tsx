import HeaderPage from '../components/HeaderPage';
import Contactanos from '../components/Contactanos';
import CapacitacionesCard from '../components/Cards/CapacitacionesCard';
import capacitacionesBrackground from '../img/Cursos y talleres/capacitacionesBackground.png';
import c1 from '../img/Cursos y talleres/c1.png';
import c2 from '../img/Cursos y talleres/c2.png';
import c3 from '../img/Cursos y talleres/c3.png';
import c4 from '../img/Cursos y talleres/c4.png';
import c5 from '../img/Cursos y talleres/c5.png';
import c6 from '../img/Cursos y talleres/c6.png';
import MainLayout from '../components/MainLayout';

const pageInformation = {
  id: 1,
  title: 'Capacitaciones',
  description:
    'Una capacitación efectiva no sólo solucionará problemáticas presentes, sino que a largo plazo será la mejor práctica.',
  img: [capacitacionesBrackground],
  dividerColor: '',
};

const capacitacionesCardInformation = [
  {
    id: 1,
    title: 'Curso básico de Protección Radiológica',
    text: 'Este curso tiene como objetivo que el participante tenga los conocimientos suficientes para el buen desempeño en su área laboral y a la vez pueda optar por la Licencia Personal de Operación como técnico de radiodiagnóstico.',
    img: c1,
  },
  {
    id: 2,
    title: 'Control de calidad en mamografía',
    text: 'Aplicar correctamente las pruebas de control de calidad para obtener un estudio mamográfico óptimo con la menor dosis de radiación al paciente. Detectar fallas en el equipo.',
    img: c6,
  },
  {
    id: 3,
    title: 'Dosimetría física',
    text: 'Procedimiento para calibrar acelerador para haces externos de fotones para tratamiento en radioterapia. Técnicas para la dosimetría externa.',
    img: c2,
  },
  {
    id: 4,
    title: 'Cálculo para el emplomado de la instalación',
    text: 'Tiene como objetivo que el participante pueda diseñar una instalación en relación al tipo fuente radioactiva o equipo generador de rayos x.',
    img: c3,
  },
  {
    id: 5,
    title: 'Detección de las radiaciones ionizantes',
    text: 'Conocer los principios básicos de detección de las radiaciones ionizantes. Identificar los elementos de importancia al momento de realizar una vigilancia radiológica de área.',
    img: c4,
  },
  {
    id: 6,
    title: 'Diplomado en Protección y Seguridad Radiológica',
    text: 'Aplicar los conocimientos en la mejora continua de las instalaciones de diagnóstico por imágen, medicina nuclear y teleterapia. Solicitar la licencia como encargado de Protección Radiológica emitida por la Comisión Nacional de Energía.',
    img: c5,
  },
];

const Capacitaciones = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center w-full">
        <HeaderPage
          title={pageInformation.title}
          description={pageInformation.description}
          img={pageInformation.img}
          dividerColor={pageInformation.dividerColor}
        />
        <div className="flex flex-col items-center justify-center lg:pt-20 pt-10">
          <div className="text-xl font-semibold text-center lg:w-auto w-11/12">
            <p>Llegaste al mejor lugar para expandir tus conocimientos</p>
          </div>
          <div className="text-base pt-6 lg:w-8/12 w-11/12 text-center text-gray-500">
            <p>
              En Conforpra contamos con las siguientes capacitaciones que
              ofrecen multiples beneficios, así como la oportunidad de ampliar
              los conocimientos que integran la organización
            </p>
          </div>
          <div className="grid justify-items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-10 sm:gap-5 gap-4">
            {capacitacionesCardInformation.map((item) => (
              <CapacitacionesCard
                key={item.id}
                img={item.img}
                text={item.title}
                subtext={item.text}
              />
            ))}
          </div>
        </div>
        <div className="w-screen bg-white lg:pt-7">
          <Contactanos
            color=""
            visibility={false}
            text="Si deseas alguna de nuestras capacitaciones contáctanos"
            placeholder="Capacitación de interés"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Capacitaciones;
