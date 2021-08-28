import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CursosTalleresCard from '../components/Cards/CursosTalleresCard';
import img1 from '../img/Cursos y talleres/1.png';
import img2 from '../img/Cursos y talleres/2.png';
import img3 from '../img/Cursos y talleres/2.png';

const CardCarousel = () => {
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
      text: 'Curso Básico de Protección Radiológica',
      img: img1,
    },
    {
      id: 2,
      text: 'Curso Taller en Dosimetría de las Radiaciones Ionizantes',
      img: img2,
    },
    {
      id: 3,
      text: 'Diplomado en Protección y Seguridad Radiológica',
      img: img3,
    },
    {
      id: 2,
      text: 'Curso Taller en Dosimetría de las Radiaciones Ionizantes',
      img: img2,
    },
    {
      id: 1,
      text: 'Curso Básico de Protección Radiológica',
      img: img1,
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
            <CursosTalleresCard key={item.id} img={item.img} text={item.text} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardCarousel;
