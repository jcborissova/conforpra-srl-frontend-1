import ProductCard from '../Cards/ProductCard';
import img1 from '../../img/Products/1.png';
import img2 from '../../img/Products/2.png';
import img3 from '../../img/Products/3.png';
import '../../styles.css';

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
    img: img1,
    color: 'bg-purple-600',
  },
];

const ProductSection = () => {
  return (
    <div className="w-screen z-30">
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
          <div className="grid md:grid-cols-2 grid-cols-1 pt-16 gap-6 pl-0">
            {productsCardInformation.map((item) => (
              <ProductCard
                key={item.id}
                img={item.img}
                subtitle={item.subtitle}
                title={item.title}
                description={item.description}
                color={item.color}
              />
            ))}
          </div>
        </div>
        <div className="w-1/2 pt-16">
          <button
            className="rounded-full h-auto bg-custom text-white font-semibold uppercase text-normal px-6 py-3 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            VER MÁS PRODUCTOS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
