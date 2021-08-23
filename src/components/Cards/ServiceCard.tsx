const ServiceCard = (props: any) => {
  return (
    <div className="group flex flex-col rounded-lg shadow-lg bg-white w-60 items-center h-64">
      <div className="pt-6 px-5 ">
        <img className=" h-32" src={props.img} alt="#" />
      </div>
      <div className="pt-9 px-4 pb-8 text-xs normal-case font-semibold text-center">
        {props.text}
      </div>
    </div>
  );
};

export default ServiceCard;
