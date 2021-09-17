const ServiceCard = (props: any) => {
  const { img, text } = props;
  return (
    <div className="group flex flex-col items-center rounded-xl shadow-lg bg-white w-52 h-64 md:pt-0 md:transition duration-500 ease-in-out transform md:hover:-translate-y-1 md:hover:scale-110">
      <div className="pt-6 px-5 ">
        <img className=" h-28" src={img} alt="#" />
      </div>
      <div className="sm:pt-6 pt-5 px-4 pb-8 text-xs normal-case font-semibold text-center h-full flex items-center">
        {text}
      </div>
    </div>
  );
};

export default ServiceCard;
