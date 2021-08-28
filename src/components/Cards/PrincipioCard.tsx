const PrincipioCard = (props: any) => {
  const { bgColor, img, title, text } = props;
  return (
    <div
      className={`group flex rounded-3xl rounded-t-3xl shadow-lg w-60 items-end h-72 ${bgColor}`}
    >
      <div className="bg-white group flex flex-col items-center content-end h-64 rounded-b-3xl">
        <div className="pt-4 px-5 ">
          <img className="" src={img} alt="#" />
        </div>
        <div className="text-xl font-semibold pt-5">
          <p>{title}</p>
        </div>
        <div className=" pt-2 px-4 pb-8 text-xs normal-case font-light text-center">
          {text}
        </div>
      </div>
    </div>
  );
};

export default PrincipioCard;
