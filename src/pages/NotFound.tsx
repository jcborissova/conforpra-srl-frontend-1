import { Link } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import '../styles.css';

const NotFound = () => {
  return (
    <>
      <MainLayout>
        <div className="flex flex-col w-screen h-screen items-center place-content-center">
          <p className="md:text-7xl text-2xl">404</p>
          <p className="md:text-4xl text-lg font-light mt-5">
            Oopps! Esta pagina no está disponible!
          </p>
          <button
            className="rounded-full mt-10 bg-custom h-10 text-white uppercase text-normal px-6 outline-none focus:outline-none mb-1 transition-all md:transition duration-500 ease-in-out transform md:hover:-translate-y-1 md:hover:scale-110"
            type="button"
          >
            <Link to="/">Volver</Link>
          </button>
        </div>
      </MainLayout>
    </>
  );
};

export default NotFound;
