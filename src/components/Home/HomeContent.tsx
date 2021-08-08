import PresentationSetion from "./PresentationSetion";
import ServiceSetion from "./ServiceSetion";
import CourseSetion from "./CourseSetion";
import ProductSetion from "./ProductsSetion";
import InformationSetion from "./InformationSetion";

const HomeContent = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center">
      <PresentationSetion />
      <ServiceSetion />
      <CourseSetion />
      <ProductSetion />
      <InformationSetion />
    </div>
  );
};

export default HomeContent;
