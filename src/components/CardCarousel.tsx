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
      img: c1,
    },
    {
      id: 2,
      title: 'Control de calidad en mamografía',
      img: c2,
    },
    {
      id: 3,
      title: 'Dosimetría de las Radiaciones Ionizantes',
      img: c6,
    },
    {
      id: 4,
      title: 'Cálculo para el emplomado de la instalación',
      img: c3,
    },
    {
      id: 5,
      title: 'Detección de las radiaciones ionizantes',
      img: c4,
    },
    {
      id: 6,
      title: 'Diplomado en Protección y Seguridad Radiológica',
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
