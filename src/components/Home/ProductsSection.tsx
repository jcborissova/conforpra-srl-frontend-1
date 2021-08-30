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
    color: 'bg-purple-600',
  },
  {
    id: 2,
    subtitle: 'SEGURIDAD',
    title: 'Guantes plomados',
    description: 'Medianos y grandes modelo. 156 con 0.5mm pb',
    img: img2,
    color: 'bg-green-700',
  },
  {
    id: 3,
    subtitle: 'HERRAMIENTAS',
    title: 'Collarines plomados',
    description: '0.50mm de pb',
    img: img3,
    color: 'bg-yellow-400',
  },
  {
    id: 4,
    subtitle: 'PRODUCTOS',
    title: 'Gorros emplomados',
    description: 'Eligible for Shipping To Mars',
    img: img4,
    color: 'bg-purple-600',
  },
];

const ProductSection = () => {
  return (
    <div className="w-screen z-30">
      <div className="custom-shape-divider-bottom-1628384777">
        <LineDivider />
      </div>
      <div className="w-full flex flex-col items-center pt-10 text-center bg-white pb-12">
        <div className="text-left w-3/4">
          <div className="text-2xl">
            <p>Nuestros productos</p>
          </div>
          <div className="pt-5">
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
        <div className="flex justify-center lg:w-1/2 lg:pt-16 pt-10 ">
          <button
            className="rounded-full sm:h-10 sm:py-0 py-2 bg-custom text-white uppercase text-normal px-6 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <Link to="/productos" className="">
              VER MÁS PRODUCTOS
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
