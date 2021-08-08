import bro from "../../img/cardicon.png";

const ProductCard = () => {
  return (
    <div className="group flex flex-row rounded-lg shadow-lg items-center h-36 lg:w-80 w-auto bg-white">
      <div className=" flex bg-gray-500 h-full items-center rounded-l-lg">
        <img className="px-3 inline-block align-middle" src={bro} alt="#" />
      </div>
      <div className=" px-4 bg-white content">
        <p className="">a</p>
        <p>a</p>
        <p>a</p>
      </div>
    </div>
  );
};

export default ProductCard;
