const ServiciosCard = (props: any) => {
  const { bgColor, img, text } = props;
  return (
    <div className="group flex flex-col xl:w-64 lg:w-56 w-9/12 items-center h-56">
      <div
        className={` xl:h-24 xl:w-24 h-14 w-14 flex items-center justify-center rounded-full ${bgColor}`}
      >
        <img className=" p-2 xl:h-16 lg:h-12 h-11" src={img} alt="#" />
      </div>
      <div className="pt-5 lg:px-4 pb-8 xl:text-sm lg:text-sm text-xs normal-case font-medium text-center">
        {text}
      </div>
    </div>
  );
};

export default ServiciosCard;
