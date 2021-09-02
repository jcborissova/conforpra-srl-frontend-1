function convertToList(type:any) {
  const lista = type.split(',');
  return(
    lista.map((item:any) => (
      <li>{item}</li>
    )
  ));
}

const PrincipioCard = (props: any) => {
  const { bgColor, img, title, text, type } = props;
  return (
    <div
      className={`group flex rounded-3xl rounded-t-3xl shadow-lg lg:w-60 w-56 items-end lg:h-72 h-64 ${bgColor}`}
    >
      <div className="bg-white group flex flex-col items-center content-end lg:h-64 h-60 rounded-b-3xl w-full">
        <div className="lg:pt-4 pt-2 px-5 ">
          <img className=" h-16" src={img} alt="#" />
        </div>
        <div className="text-xl font-semibold lg:pt-5 pt-3 uppercase">
          <p>{title}</p>
        </div>
        <div className=" pt-2 px-4 pb-8 text-xs normal-case w-full font-normal text-gray-400 ">
          {
            type === "list"
            ? <p className="px-5">{convertToList(text)}</p>
            : <p className="text-center">{text}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default PrincipioCard;
