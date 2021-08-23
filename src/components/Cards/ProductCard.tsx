const ProductCard = (props: any) => {
  return (
    <div className="group flex flex-row rounded-2xl shadow-lg items-center h-36 bg-white lg:w-4/5 w-full">
      <div
        className={`flex ${props.color} h-36 items-center justify-center rounded-l-2xl w-4/12`}
      >
        <img
          className="px-3 inline-block align-middle h-auto w-auto"
          src={props.img}
          alt="#"
        />
      </div>
      <div className="flex flex-col px-4 bg-white w-3/5 items-stretch h-full justify-between">
        <div>
          <p className=" text-gray-500 text-xs mt-3">{props.subtitle}</p>
          <p className="text-base font-medium mt-3 ">{props.title}</p>
        </div>
        <p className="text-gray-500 text-sm mb-3">{props.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
