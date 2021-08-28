import img from '../../img/Iconbackground.png';
import conforpraLogo from '../../img/ConforpraLogo.svg';

const InformationCard = () => {
  return (
    <div className="group flex flex-col rounded-3xl shadow-lg bg-white lg:w-56 md:w-52 w-48 lg:h-80 mg:h-72 h-64">
      <div className="">
        <img className="lg:h-36 md:h-32 h-28 w-full " src={img} alt="#" />
      </div>
      <div className="flex flex-col items-center">
        <div className="divide-y w-10/12">
          <img
            src={conforpraLogo}
            className="w-28 lg:h-auto md:h-9 lg:pt-2"
            alt="ConforpraLogo"
          />
          <div className="flex flex-col pt-1 text-sm lg:gap-3 gap-2 lg:mt-3">
            <p>+1 (809)-908-4443</p>
            <p>conforpra@gmail.com</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
