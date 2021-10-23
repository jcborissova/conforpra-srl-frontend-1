import '../../styles.css';

const ProductCard = (props: any) => {
  const { color, img, title, description } = props;
  return (
    <div className="group flex flex-row rounded-2xl shadow-lg items-center lg:h-36 h-32 bg-white lg:w-4/5 w-full ">
      <div
        className={`flex ${color} lg:h-36 h-32 items-center justify-center rounded-l-2xl w-4/12`}
      >
        <div className="flex items-center justify-center bg-white rounded-lg xl:h-24 xl:w-24 lg:h-20 lg:w-20 h-16 w-16">
          <img
            className="inline-block align-middle p-2 h-full w-full rounded"
            src={img}
            alt="#"
          />
        </div>
      </div>
      <div className="flex flex-col pl-4 bg-white w-3/5 items-stretch h-full justify-between">
        <div>
          <p className="text-base font-medium lg:mt-6 mt-4">{title}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm font-medium mb-10">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
