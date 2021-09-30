import React from 'react';
import ServicesHeaderImg from '../img/Services/ServicesHeader.png';
import ServicesHeaderImg1 from '../img/Services/ServicesHeader1.png';
import ServicesHeaderImg2 from '../img/Services/ServicesHeader2.png';
import HeaderPage from '../components/HeaderPage';
import Contactanos from '../components/Contactanos';
import LineDivider from '../components/LineDivider';
import img1 from '../img/Services/p1.png';
import img2 from '../img/Services/p2.png';
import img3 from '../img/Services/p3.png';
import img4 from '../img/Services/p4.png';
import img5 from '../img/Services/p5.png';
import img6 from '../img/Services/p6.png';
import img7 from '../img/Services/p7.png';
import img8 from '../img/Services/p8.png';
import ServiciosCard from '../components/Cards/ServiciosCard';
import MainLayout from '../components/MainLayout';

const pageInformation = {
  id: 1,
  title: 'Servicios',
  description:
    'Que las organizaciones puedan cumplir con los requisitos de la normativa vigente en relación a las prácticas asociadas al uso de las radiaciones ionizantes y asi tener las licencias y/o permisos otorgados por la Comisión Nacional de Energía.',
  img: [
    { id: 1, img: ServicesHeaderImg },
    { id: 2, img: ServicesHeaderImg1 },
    { id: 3, img: ServicesHeaderImg2 },
  ],
  dividerColor: '',
};

const Servicios = () => {
  const serviciosCardInformation = [
    {
      id: 1,
      text: 'Gestión de licencia emitida por la Comisión Nacional de Energía para operar fuentes radioactivas y/o generadores de rayos x',
      img: img1,
    },
    {
      id: 2,
      text: 'Diseño e implementación de proyectos en materia nuclear y centros de radiodiagnóstico',
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
    {
      id: 5,
      text: 'Monitoreo radiológico del puesto de trabajo',
      img: img5,
    },
    {
      id: 6,
      text: 'Gestión del permiso de exportación e importación de fuentes radioactivas emitido por la CNE',
      img: img6,
    },
    {
      id: 7,
      text: 'Gestión de Inscripción en registro para equipo dental periapical emitida por la Comisión Nacional de Energía',
      img: img7,
    },
    {
      id: 8,
      text: 'Desarrollar e implantar programas de garantía de calidad para el área médica e industrial',
      img: img8,
    },
  ];

  const upCards = serviciosCardInformation.filter((val, idx) => idx < 4);
  const downCards = serviciosCardInformation.filter((val, idx) => idx > 3);

  return (
    <MainLayout>
      <div className="flex flex-col items-center w-full bg-white">
        <HeaderPage
          title={pageInformation.title}
          description={pageInformation.description}
          img={pageInformation.img}
          dividerColor={pageInformation.dividerColor}
        />
        <div className="flex flex-col items-center font-semibold justify-center pt-8">
          <div className="text-xl">
            <p>Nuestros servicios</p>
          </div>
          <div className="grid justify-items-center md:grid-cols-2 grid-cols-1 py-10 lg:gap-x-72">
            {upCards.map((item) => (
              <ServiciosCard
                key={item.id}
                img={item.img}
                text={item.text}
                bgColor="bg-custom-color"
              />
            ))}
          </div>
        </div>
        <LineDivider dividerColor="-gray" dividerbgColor="bg-white" />
        <div className="flex flex-col items-center justify-center bg-custom-color w-screen">
          <div className="grid justify-items-center md:grid-cols-2 grid-cols-1 py-10 lg:gap-x-72 ">
            {downCards.map((item) => (
              <ServiciosCard
                key={item.id}
                img={item.img}
                text={item.text}
                bgColor="bg-white"
              />
            ))}
          </div>
        </div>
        <div className="w-screen bg-white">
          <Contactanos
            color="bg-custom-color"
            visibility={true}
            text="Si deseas alguno de nuestros servicios contáctanos"
            placeholder="Servicios de interés"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Servicios;
