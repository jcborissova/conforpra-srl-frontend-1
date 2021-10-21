import productHeaderImg from '../img/Products/ProductsHeader.png';
import productHeaderImg1 from '../img/Products/ProductsHeader1.png';
import productHeaderImg2 from '../img/Products/ProductsHeader2.png';
import HeaderPage from '../components/HeaderPage';
import ProductosCard from '../components/Cards/ProductosCard';
import Contactanos from '../components/Contactanos';

/*
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
*/
import MainLayout from '../components/MainLayout';
import { useEffect, useState } from 'react';
import client from '../providers/api';

const pageInformation = {
  id: 1,
  title: 'Productos',
  description:
    'Ofrecemos una variedad de productos que sirven de sustento para la realización de trabajos de seguridad radiológica.',
  img: [
    { id: 1, img: productHeaderImg },
    { id: 2, img: productHeaderImg1 },
    { id: 3, img: productHeaderImg2 },
  ],
  dividerColor: '-gray',
};

const Productos = () => {
  const [productsApi, setProductsApi] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await client.get(`/api/products`);
        setProductsApi(response.data.products);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  /*
  const productsApi = [
    {
      id: 1,
      name: 'Mandil plomado',
      description: '0.5mm de Pb',
      picture: img1,
    },
    {
      id: 2,
      name: 'Lentes plomados',
      description: '0.5mm de Pb',
      picture: img2,
    },
    {
      id: 3,
      name: 'Mamparas',
      description: '1258 bids, 359 watchers',
      picture: img3,
    },
    {
      id: 4,
      name: 'Collarines plomados',
      description: '0.5mm de Pb',
      picture: img4,
    },
    {
      id: 5,
      name: 'Láminas de plomo',
      description: '1mm, 2mm, 3mm',
      picture: img5,
    },
    {
      id: 6,
      name: 'Vidrios plomados',
      description: 'Showcasing onHovered state',
      picture: img6,
    },
    {
      id: 7,
      name: 'Ventanas Especiales con Blindaje',
      description: '1258 bids, 359 watchers',
      picture: img7,
    },
    {
      id: 8,
      name: 'Gorros Emplomados',
      description: 'Eligible for Shipping To Mars',
      picture: img8,
    },
    {
      id: 9,
      name: 'Conchas plomadas',
      description: 'Juego de tres piezas con 0.5mm de pb. Peq/mediano',
      picture: img9,
    },
    {
      id: 10,
      name: 'Guantes plomados',
      description: 'Medianos y grandes modelo. 156 con 0.5mm pb',
      picture: img10,
    },
  ];
  */

  return (
    <MainLayout>
      <div className="flex flex-col items-center w-screen bg-custom-color">
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
            {productsApi.map((item) => (
              <ProductosCard
                key={item['_id']}
                picture={item['picture']}
                name={item['name']}
                description={item['description']}
              />
            ))}
          </div>
        </div>
        <div className="w-screen bg-white">
          <Contactanos
            color="bg-custom-color"
            visibility={true}
            text="Si deseas alguno de nuestros productos contáctanos"
            placeholder="Productos de interés"
            elementType="Productos"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Productos;
