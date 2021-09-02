const ProductosCard = ({
  img,
  text,
  subtext,
}: {
  img: any;
  text: any;
  subtext: any;
}) => (
  <div className="group flex flex-col rounded shadow-lg items-center  bg-white xl:h-64 xl:w-52 lg:h-60 lg:w-48 md:h-56 md:w-44 h-56 w-40 pt-5">
    <div className={`flex sm:h-1/2 h-2/5 items-center justify-center w-full`}>
      <img
        className="px-3 inline-block align-middle sm:h-5/6 h-4/6 w-4/6"
        src={img}
        alt="#"
      />
    </div>
    <div className="flex flex-col px-4 bg-white w-5/5 items-stretch h-1/2 justify-between">
      <div className="flex justify-center items-center content-center">
        <p className="text-base font-medium sm:mt-3 mt-2 text-center">{text}</p>
      </div>
      <div className="flex justify-start sm:pb-5">
        <p className="text-gray-500 text-sm mb-3">{subtext}</p>
      </div>
    </div>
  </div>
);

export default ProductosCard;
