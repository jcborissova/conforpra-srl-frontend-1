const ServiciosCard = (props: any) => {
  const { bgColor, img, text } = props;
  return (
    <div className="group flex flex-col lg:w-60 w-9/12 items-center h-52">
      <div
        className={`h-16 w-16 flex items-center justify-center rounded-full ${bgColor}`}
      >
        <img className=" p-2 h-12" src={img} alt="#" />
      </div>
      <div className="pt-5 lg:px-4 pb-8 text-xs normal-case font-medium text-center">
        {text}
      </div>
    </div>
  );
};

export default ServiciosCard;
