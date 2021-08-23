import PresentationSection from "./PresentationSection";
import ServiceSection from "./ServiceSection";
import CourseSection from "./CourseSection";
import ProductSection from "./ProductsSection";
import InformationSection from "./InformationSection";

const HomeContent = () => {
  return (
    <div className="bg-gray-200 flex flex-col items-center">
      <PresentationSection />
      <ServiceSection />
      <CourseSection />
      <ProductSection />
      <InformationSection />
    </div>
  );
};

export default HomeContent;
