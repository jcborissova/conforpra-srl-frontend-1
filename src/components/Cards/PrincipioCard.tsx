import img from "../../img/Services/1.png";

const PrincipioCard = (props: any) => {
  return (
    <div
      className={`group flex rounded-lg shadow-lg w-60 items-end h-72 ${props.bgColor}`}
    >
      <div className="bg-white group flex flex-col items-center content-end  h-64 rounded-b-lg">
        <div className="pt-4 px-5 ">
          <img className="" src={props.img} alt="#" />
        </div>
        <div className="text-xl font-semibold pt-5">
          <p>{props.title}</p>
        </div>
        <div className=" pt-2 px-4 pb-8 text-xs normal-case font-light text-center">
          {props.text}
        </div>
      </div>
    </div>
  );
};

export default PrincipioCard;
