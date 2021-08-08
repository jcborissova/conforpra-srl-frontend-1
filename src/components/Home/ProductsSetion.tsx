import ProductCard from "../../components/Cards/ProductCard";
import "../../styles.css";

const ProductSetion = () => {
  return (
    <div className="w-screen">
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
          <div className="grid sm:grid-cols-2 grid-cols-1 pt-16 gap-6 pl-0">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="w-1/2 pt-28 ">
          <button
            className="rounded-full h-auto bg-purple-500 text-white hover:bg-purple-700 hover:text-white active:bg-purple-700 font-bold uppercase text-normal px-6 py-3 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            VER MÁS PRODUCTOS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSetion;
