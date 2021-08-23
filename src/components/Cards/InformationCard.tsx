import img from "../../img/Iconbackground.png";
import ConforpraLogo from "../../img/ConforpraLogo.svg";

const InformationCard = (props: any) => {
  return (
    <div className="group flex flex-col rounded-xl shadow-lg bg-white w-56 h-80">
      <div className="">
        <img className="h-36 w-full" src={img} alt="#" />
      </div>
      <div className="flex flex-col items-center">
        <div className="divide-y w-10/12">
          <img src={ConforpraLogo} className="w-28 pt-2" alt="ConforpraLogo" />
          <div className="flex flex-col pt-1 text-sm gap-3 mt-3">
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
