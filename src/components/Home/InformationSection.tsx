import map from '../../img/maps.png';
import InformationCard from '../Cards/InformationCard';

const InformationSection = () => {
  return (
    <div className="flex flex-col w-screen static md:items-start justify-center items-center bg-white">
      <div className="md:absolute md:py-0 lg:py-12 py-6 relative h-5/6 items-center flex md:pl-16">
        <InformationCard />
      </div>
      <img
        src={map}
        className="img-background w-screen"
        alt="infocardimg"
      ></img>
    </div>
  );
};

export default InformationSection;
