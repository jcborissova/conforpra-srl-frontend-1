import AboutImg from '../img/About/About.png';
import ConforpraLogo from '../img/ConforpraLogo.svg';
import GroupImg from '../img/About/GroupImg.png';
import '.././styles.css';
import PrincipioCard from '../components/Cards/PrincipioCard';
import img1 from '../img/About/Mision.png';
import img2 from '../img/About/Vision.png';
import img3 from '../img/About/Valores.png';
import LineDivider from '../components/LineDivider';
import HeaderPage from '../components/HeaderPage';

const principiosCardInformation = [
  {
    id: 1,
    title: 'Misión',
    text: 'Poner a tu disposición la más alta calidad y profesionalidad al mejor precio del mercado',
    img: img1,
    color: 'valores-color-1',
  },
  {
    id: 2,
    title: 'Visión',
    text: 'Ser líderes en materia de radioprotección y seguridad radiológica, mediante una actualización constante de nuestros servicios a los avances tecnológicos del presente',
    img: img2,
    color: 'bg-yellow-400',
  },
  {
    id: 3,
    title: 'Valores',
    text: 'Organización, Excelencia, Honestidad, Innovación, Calidad, Servicio al clienten',
    img: img3,
    color: 'bg-black',
  },
];

const pageInformation = {
  id: 1,
  title: 'Conforpra',
  description:
    'Asesoría para proyectos específicos en el campo de la protección y seguridad radiológica de las organizaciones',
  img: AboutImg,
  dividerColor: '',
};

const About = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <HeaderPage
        title={pageInformation.title}
        description={pageInformation.description}
        img={pageInformation.img}
        dividerColor={pageInformation.dividerColor}
      />
      <div className="flex lg:flex-row flex-col lg:items-start items-center pb-9 custom-position ">
        <div className="h-full lg:w-full w-10/12 content-center lg:pt-32 pt-16 lg:pl-14 ">
          <img
            src={GroupImg}
            alt="GroupImg"
            className="mx-auto h-auto sm:px-0 px-4"
          />
        </div>
        <div className="flex flex-col lg:pt-20 pt-10 lg:pl-0 pl-8 lg:pr-20 px-3 w-11/12 mx-auto">
          <div className="text-xl">
            <p className="font-semibold">Conforpra</p>
          </div>
          <div className="pt-5">
            <p>Consultoría y Formación Técnica en Protección Radiológica.</p>
          </div>
          <div className="pt-4">
            <p>
              CONFORPRA, SRL es una empresa de nivel técnico-profesional que
              hasta ti, para brindarte la mejor asesoría y programa de
              capacitación en temas relacionados con la protección y seguridad
              radiológica de tu empresa. Contamos con expertos nacionales e
              internacionales dispuestos ayudarte con la materialización de tú
              proyecto y que el mismo cumpla con las normativas nacionales
              vigentes para la operación de equipos y fuentes emisores de
              radiación ionizante.
            </p>
          </div>
          <div className="text-2xl mt-10">
            <p className="font-semibold">Logo</p>
          </div>
          <div className="pt-2">
            <img src={ConforpraLogo} className="w-52" alt="ConforpraLogo" />
          </div>
        </div>
      </div>

      <LineDivider dividerColor="-gray" dividerbgColor="" />
      <div className="flex lg:flex-row flex-col lg:items-start items-center justify-center bg-custom-color pb-28 w-full ">
        <div className="flex flex-col pt-16 w-auto">
          <div className="text-2xl">
            <p>Principios de la empresa</p>
          </div>
          <div className="pt-8 flex md:flex-row flex-col lg:gap-20 gap-5 self-center">
            {principiosCardInformation.map((item) => (
              <PrincipioCard
                bgColor={item.color}
                key={item.id}
                img={item.img}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
