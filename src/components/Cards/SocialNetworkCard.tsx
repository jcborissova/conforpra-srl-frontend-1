import '../../styles.css';

const SocialNetworkCard = (props: any) => {
  const { img, text, subtext, link } = props;
  const IconNetwork = img;
  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      <div className="group flex flex-row items-center justify-start bg-white md:w-56 w-36 text-custom md:transition duration-500 ease-in-out transform md:hover:-translate-y-1 md:hover:scale-110">
        <div className="">
          <IconNetwork className="fontSizeLarge" fontSize="large" />
        </div>
        <div className="flex flex-col items-center w-screen ">
          <div className="flex flex-col md:text-xl text-lg font-semibold">
            <p>{text}</p>
          </div>
          <div className="flex flex-col text-xs font-semibold">{subtext}</div>
        </div>
      </div>
    </a>
  );
};

export default SocialNetworkCard;
