const ProductosCard = ({
  img,
  text,
  subtext,
}: {
  img: any;
  text: any;
  subtext: any;
}) => (
  <div className="group flex flex-col rounded shadow-lg items-center  bg-white sm:h-72 sm:w-52 w-40 h-60 pt-5">
    <div className={`flex h-1/2 items-center justify-center w-full`}>
      <img
        className="px-3 inline-block align-middle h-5/6 w-4/6"
        src={img}
        alt="#"
      />
    </div>
    <div className="flex flex-col px-4 bg-white w-5/5 items-stretch h-1/2 justify-between">
      <div className="flex justify-center items-center content-center">
        <p className="text-base font-medium mt-3 text-center">{text}</p>
      </div>
      <div className="flex justify-start sm:pb-5">
        <p className="text-gray-500 text-sm mb-3">{subtext}</p>
      </div>
    </div>
  </div>
);

export default ProductosCard;
