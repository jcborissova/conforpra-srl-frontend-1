import styled from "styled-components";
import AboutImg from "../img/About/About.png";
import ConforpraLogo from "../img/ConforpraLogo.svg";
import GroupImg from "../img/About/GroupImg.png";
import ".././styles.css";
import PrincipioCard from "../components/Cards/PrincipioCard";
import img1 from "../img/About/Mision.png";
import img2 from "../img/About/Vision.png";
import img3 from "../img/About/Valores.png";

const PrincipiosCardInformation = [
  {
    id: 1,
    title: "Misión",
    text: "Poner a tu disposición la más alta calidad y profesionalidad al mejor precio del mercado",
    img: img1,
    color: "bg-green-800",
  },
  {
    id: 2,
    title: "Visión",
    text: "Ser líderes en materia de radioprotección y seguridad radiológica, mediante una actualización constante de nuestros servicios a los avances tecnológicos del presente",
    img: img2,
    color: "bg-yellow-400",
  },
  {
    id: 3,
    title: "Valores",
    text: "Organización, Excelencia, Honestidad, Innovación, Calidad, Servicio al clienten",
    img: img3,
    color: "bg-black",
  },
];

const About = () => {
  const AboutSection = styled.div`
    background-image: url(${AboutImg});
    width: 100%;
    margin-left: 0px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `;

  return (
    <div className="flex flex-col items-center w-full">
      <AboutSection className="mt-12 ">
        <div className="flex flex-col lg:pt-32 pt-44 lg:pl-40 pl-10  text-left text-white h-screen">
          <div className="text-3xl">
            <p>Conforpra</p>
          </div>
          <div className="pt-8 lg:w-2/6 w-5/6">
            <p>
              Asesoría para proyectos específicos en el campo de la protección y
              seguridad radiológica de las organizaciones
            </p>
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1628384777">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </AboutSection>
      <div className="flex lg:flex-row flex-col lg:items-start items-center pb-9 custom-position">
        <div className="h-full w-full content-center lg:pt-32 pt-16 ">
          <img
            src={GroupImg}
            alt="GroupImg"
            className="mx-auto h-auto sm:px-0 px-4"
          />
        </div>
        <div className="flex flex-col lg:pt-20 pt-10 lg:pl-0 pl-8 pr-20 w-11/12 mx-auto">
          <div className="text-2xl">
            <p className="font-semibold">Conforpra</p>
          </div>
          <div className="pt-8">
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

      <div className="custom-shape-divider-bottom-1628384777 z-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill-gray"
          ></path>
        </svg>
      </div>
      <div className="flex lg:flex-row flex-col lg:items-start items-center justify-center bg-gray-200 pb-28 w-full">
        <div className="flex flex-col pt-16 lg:pl-16 pl-14 lg:pr-16 pr-14 w-auto">
          <div className="text-2xl">
            <p>Principios de la empresa</p>
          </div>
          <div className="pt-8 flex md:flex-row flex-col gap-5 lg:gap-20 self-center">
            {PrincipiosCardInformation.map((item) => (
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
