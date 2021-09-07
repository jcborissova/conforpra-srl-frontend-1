import { Link } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';
import img1 from '../../img/Products/1.png';
import img2 from '../../img/Products/2.png';
import img3 from '../../img/Products/3.png';
import img4 from '../../img/Products/4.png';
import '../../styles.css';
import LineDivider from '../LineDivider';

const productsCardInformation = [
  {
    id: 1,
    subtitle: 'SEGURIDAD',
    title: 'Láminas de plomo',
    description: '1mm, 2mm, 3mm',
    img: img1,
    color: 'custom-color-4',
  },
  {
    id: 3,
    subtitle: 'HERRAMIENTAS',
    title: 'Collarines plomados',
    description: '0.50mm de pb',
    img: img2,
    color: 'custom-color-2',
  },
  {
    id: 2,
    subtitle: 'SEGURIDAD',
    title: 'Guantes plomados',
    description: 'Medianos y grandes modelo. 156 con 0.5mm pb',
    img: img4,
    color: 'custom-color-1 ',
  },
  {
    id: 4,
    subtitle: 'PRODUCTOS',
    title: 'Gorros emplomados',
    description: 'Eligible for Shipping To Mars',
    img: img3,
    color: 'custom-color-3',
  },
];

const ProductSection = () => {
  return (
    <div className="w-screen z-30">
      <div className="custom-shape-divider-bottom-1628384777">
        <LineDivider />
      </div>
      <div className="w-full flex flex-col items-center pt-10 text-center bg-white pb-12">
        <div className="text-left w-3/4 font-semibold">
          <div className="md:text-2xl text-lg">
            <p>Nuestros productos</p>
          </div>
          <div className="pt-5 md:text-base text-sm">
            <p>
              Buscamos garantizar la seguridad radiológica del trabajador
              ocupacionalmente expuesto
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:pt-16 pt-10 gap-6 pl-0">
            {productsCardInformation.map((item) => (
              <ProductCard
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                color={item.color}
              />
            ))}
          </div>
        </div>
        <div className="sm:w-1/2 w-11/12 pt-16">
          <Link to="/productos">
            <button
              className="rounded-full h-auto bg-custom text-white text-normal px-4 py-2 uppercase text-normal outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              <Link to="/productos" className="">
                VER MÁS PRODUCTOS
              </Link>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
