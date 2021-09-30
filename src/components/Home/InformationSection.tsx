import InformationCard from '../Cards/InformationCard';

const InformationSection = () => {
  return (
    <div className="flex flex-col w-screen static md:items-start justify-center items-center bg-white">
      <div className="md:absolute md:py-0 lg:py-12 py-6 relative h-5/6 items-center flex md:pl-16">
        <InformationCard />
      </div>
      <div className="md:h-screen">
        <iframe
          title="Ubicación de Conforpra"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.445425812496!2d-69.91405388510809!3d18.46347238744227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzQ4LjUiTiA2OcKwNTQnNDIuNyJX!5e0!3m2!1sen!2sdo!4v1630805522776!5m2!1sen!2sdo"
          className="md:h-screen h-52 w-screen"
        />
      </div>
    </div>
  );
};

export default InformationSection;
