const SocialNetworkCard = (props: any) => {
  const { img, text, subtext } = props;
  const IconNetwork = img;
  return (
    <div className="group flex flex-row items-center justify-start bg-white md:w-56 w-36">
      <div className="">
        <IconNetwork className="fontSizeLarge" fontSize="large" />
      </div>
      <div className="flex flex-col items-center  w-screen">
        <div className="flex flex-col md:text-xl text-lg font-semibold">
          <p>{text}</p>
        </div>
        <div className="flex flex-col text-xs font-semibold">
          <p className=" ">{subtext}</p>
        </div>
      </div>
    </div>
  );
};

export default SocialNetworkCard;
