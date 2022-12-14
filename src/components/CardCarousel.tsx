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
import { useEffect, useState } from 'react';
import client from '../providers/api';

const CardCarousel = (props: any) => {
  const [trainingsApi, setTraininsgApi] = useState([]);
  const [sliderApiCounter, setSliderApiCounter] = useState(0);
  const [sliderSize, setSliderSize] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await client.get(`/api/trainings`);
        setTraininsgApi(response.data.trainings);
        setSliderCards(response.data.trainings);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [sliderApiCounter]);

  function setSliderCards(data: any) {
    if (data.length > 2) {
      setSliderApiCounter(3);
    } else {
      setSliderSize(true);
      setSliderApiCounter(data.length);
    }
    console.log(sliderApiCounter);
  }

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: sliderApiCounter,
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
      title: 'Curso b??sico de Protecci??n Radiol??gica',
      text: 'Este curso tiene como objetivo que el participante tenga los conocimientos suficientes para el buen desempe??o en su ??rea laboral y a la vez pueda optar por la Licencia Personal de Operaci??n como t??cnico de radiodiagn??stico.',
      img: c1,
    },
    {
      id: 2,
      title: 'Control de calidad en mamograf??a',
      text: 'Aplicar correctamente las pruebas de control de calidad para obtener un estudio mamogr??fico ??ptimo con la menor dosis de radiaci??n al paciente. Detectar fallas en el equipo.',
      img: c6,
    },
    {
      id: 3,
      title: 'Dosimetr??a f??sica',
      text: 'Procedimiento para calibrar acelerador para haces externos de fotones para tratamiento en radioterapia. T??cnicas para la dosimetr??a externa.',
      img: c2,
    },
    {
      id: 4,
      title: 'C??lculo para el emplomado de la instalaci??n',
      text: 'Tiene como objetivo que el participante pueda dise??ar una instalaci??n en relaci??n al tipo fuente radioactiva o equipo generador de rayos x.',
      img: c3,
    },
    {
      id: 5,
      title: 'Detecci??n de las radiaciones ionizantes',
      text: 'Conocer los principios b??sicos de detecci??n de las radiaciones ionizantes. Identificar los elementos de importancia al momento de realizar una vigilancia radiol??gica de ??rea.',
      img: c4,
    },
    {
      id: 6,
      title: 'Diplomado en Protecci??n y Seguridad Radiol??gica',
      text: 'Aplicar los conocimientos en la mejora continua de las instalaciones de diagn??stico por im??gen, medicina nuclear y teleterapia. Solicitar la licencia como encargado de Protecci??n Radiol??gica emitida por la Comisi??n Nacional de Energ??a.',
      img: c5,
    },
  ];

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-11/12 flex flex-col items-center">
        <Slider
          {...settings}
          className={`${
            sliderSize
              ? `2xl:w-4/12 xl:w-5/12 lg:w-6/12 md:w-7/12 sm:w-10/12 w-8/12`
              : `2xl:w-6/12 xl:w-8/12 lg:w-9/12 md:w-8/12 sm:w-10/12 w-8/12`
          }`}
        >
          {trainingsApi.slice(0, 6).map((item) => (
            <CursosTalleresCard
              key={item['_id']}
              img={item['picture']}
              text={item['name']}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardCarousel;
