const CursosTalleresCard = (props: any) => {
  const { img, text } = props;
  return (
    <div className="group flex flex-col rounded-xl shadow-lg bg-white w-56 h-52">
      <div className="">
        <img className="h-32 w-screen rounded-t-lg" src={img} alt="#" />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex w-10/12">
          <div className="flex flex-col items-center h-screen text-sm font-semibold gap-3 mt-4 text-left">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursosTalleresCard;
