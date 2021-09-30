import '../styles.css';
import LineDivider from './LineDivider';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HeaderPage = (props: any) => {
  const { img, title, description, dividerColor } = props;

  return (
    <div className="flex w-screen pt-12 z-10 relative">
      <div className="flex relative lg:h-96 md:h-64 h-60  w-screen items-end">
        <Carousel
          className="w-screen absolute lg:h-96 md:h-64 h-60 "
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
        >
          {img.map((item: any) => (
            <div
              key={item.id}
              className="flex items-end lg:h-96 md:h-64 h-60  w-full relative bg-no-repeat bg-cover p-0 z-0"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
          ))}
        </Carousel>
        <LineDivider
          dividerColor={dividerColor}
          dividerbgColor=""
          className=" w-screen bg"
        />
      </div>
      <div className="flex flex-col text-left text-white lg:h-96 md:h-64 h-60 z-50 w-full absolute ">
        <div className="md:pl-40 pl-5 pb-10 lg:pt-16 pt-10">
          <div className="text-3xl">
            <p className="text-shadow-xl">{title}</p>
          </div>
          <div className="md:pt-8 pt-3 lg:w-4/12 md:w-7/12 w-11/12 md:text-base text-sm">
            <p className="text-shadow-xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
