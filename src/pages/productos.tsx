import productHeaderImg from '../img/Products/ProductsHeader.png';
import HeaderPage from '../components/HeaderPage';
import ProductosCard from '../components/Cards/ProductosCard';
import Contactanos from '../components/Contactanos';
import img1 from '../img/Products/DetailProducts/1.png';
import img2 from '../img/Products/DetailProducts/2.png';
import img3 from '../img/Products/DetailProducts/3.png';
import img4 from '../img/Products/DetailProducts/4.png';
import img5 from '../img/Products/DetailProducts/5.png';
import img6 from '../img/Products/DetailProducts/6.png';
import img7 from '../img/Products/DetailProducts/7.png';
import img8 from '../img/Products/DetailProducts/8.png';
import img9 from '../img/Products/DetailProducts/9.png';
import img10 from '../img/Products/DetailProducts/10.png';

const pageInformation = {
  id: 1,
  title: 'Productos',
  description:
    'Ofrecemos una variedad de productos que sirven de sustento para la realización de trabajos de seguridad radiológica.',
  img: productHeaderImg,
  dividerColor: '-gray',
};

const Productos = () => {
  const productosCardInformation = [
    {
      id: 1,
      text: 'Mandil plomado',
      subText: '0.5mm de Pb',
      img: img1,
    },
    {
      id: 2,
      text: 'Lentes plomados',
      subText: '0.5mm de Pb',
      img: img2,
    },
    {
      id: 3,
      text: 'Mamparas',
      subText: '1258 bids, 359 watchers',
      img: img3,
    },
    {
      id: 4,
      text: 'Collarines plomados',
      subText: '0.5mm de Pb',
      img: img4,
    },
    {
      id: 5,
      text: 'Láminas de plomo',
      subText: '1mm, 2mm, 3mm',
      img: img5,
    },
    {
      id: 6,
      text: 'Vidrios plomados',
      subText: 'Showcasing onHovered state',
      img: img6,
    },
    {
      id: 7,
      text: 'Ventanas Especiales con Blindaje',
      subText: '1258 bids, 359 watchers',
      img: img7,
    },
    {
      id: 8,
      text: 'Gorros Emplomados',
      subText: 'Eligible for Shipping To Mars',
      img: img8,
    },
    {
      id: 9,
      text: 'Conchas plomadas',
      subText: 'Juego de tres piezas con 0.5mm de pb. Peq/mediano',
      img: img9,
    },
    {
      id: 10,
      text: 'Guantes plomados',
      subText: 'Medianos y grandes modelo. 156 con 0.5mm pb',
      img: img10,
    },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-custom-color">
      <HeaderPage
        title={pageInformation.title}
        description={pageInformation.description}
        img={pageInformation.img}
        dividerColor={pageInformation.dividerColor}
      />
      <div className="flex flex-col items-center justify-center pt-8">
        <div className="text-2xl">
          <p>Nuestros productos</p>
        </div>
        <div className="grid justify-items-center 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 py-10 lg:gap-5 gap-4">
          {productosCardInformation.map((item) => (
            <ProductosCard
              key={item.id}
              img={item.img}
              text={item.text}
              subtext={item.subText}
            />
          ))}
        </div>
      </div>
      <div className="w-screen bg-white">
        <Contactanos
          color="bg-custom-color"
          visibility={true}
          text="Si deseas alguno de nuestros productos contáctanos"
        />
      </div>
    </div>
  );
};

export default Productos;
