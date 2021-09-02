function convertToParagraphs(type:any) {
  const lista = type.split('.');
  return(
    lista.map((item:any) => (
      <div><p>{item}</p><br/></div>
    )
  ));
}

const CapacitacionesCard = (props: any) => {
  const { color, img, text, subtext } = props;
  return (
    <div className="group flex flex-col rounded items-center bg-white h-auto lg:w-72 w-60 border border-black border-opacity-100">
      <div className={`flex ${color} h-36 justify-center w-full pt-4`}>
        <img
          className="lg:px-10 px-5 py-3 inline-block align-middle"
          src={img}
          alt="#"
        />
      </div>
      <div className="flex flex-col px-4 pt-3 bg-white w-5/5 text-center">
        <div className="flex justify-center content-center">
          <p className="text-base font-medium text-center">{text}</p>
        </div>
        <div className="flex pt-2 ">
          <p className="text-gray-500 text-sm ">{convertToParagraphs(subtext)}</p>
        </div>
      </div>
    </div>
  );
};

export default CapacitacionesCard;
