import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CursosTalleresCard from '../components/Cards/CursosTalleresCard';
import c1 from '../img/Cursos y talleres/c1.png';
import c2 from '../img/Cursos y talleres/c2.png';
import c3 from '../img/Cursos y talleres/c3.png';
import c4 from '../img/Cursos y talleres/c4.png';
import c5 from '../img/Cursos y talleres/c5.png';
import c6 from '../img/Cursos y talleres/c6.png';

const CardCarousel = (props: any) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const CursosTalleresCardInformation = [
    {
      id: 1,
      title: 'Curso Básico de Protección Radiológica',
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

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-11/12 flex flex-col items-center">
        <Slider
          {...settings}
          className="2xl:w-6/12 xl:w-8/12 lg:w-9/12 md:w-8/12 sm:w-10/12 w-8/12"
        >
          {CursosTalleresCardInformation.map((item) => (
            <CursosTalleresCard
              key={item.id}
              img={item.img}
              text={item.title}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardCarousel;
