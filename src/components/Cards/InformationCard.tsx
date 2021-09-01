import img from '../../img/Iconbackground.png';
import conforpraLogo from '../../img/ConforpraLogo.svg';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import '../../styles.css';

const networksInformation = [
  {
    id: 1,
    text: '+1 (809)-908-4443',
    img: PhoneIcon,
  },
  {
    id: 2,
    text: 'conforpra@gmail.com',
    img: MailIcon,
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet',
    img: LocationOnIcon,
  },
];

const InformationCard = () => {
  return (
    <div className="group flex flex-col rounded-3xl shadow-lg bg-white lg:w-56 md:w-52 w-48 lg:h-80 mg:h-72 h-64">
      <div className="">
        <img className="lg:h-36 md:h-32 h-28 w-full " src={img} alt="#" />
      </div>
      <div className="flex flex-col items-center">
        <div className="divide-y w-10/12">
          <img
            src={conforpraLogo}
            className="w-28 lg:h-auto md:h-9 lg:pt-2"
            alt="ConforpraLogo"
          />
          <div className="flex flex-col lg:pt-5 text-xs lg:gap-3 gap-2 ">
            {networksInformation.map((item) => (
              <div className="flex flex-row gap-x-3" key={item.id}>
                <div>
                  <item.img fontSize="small" className="font-custom-color" />
                </div>
                <div>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
