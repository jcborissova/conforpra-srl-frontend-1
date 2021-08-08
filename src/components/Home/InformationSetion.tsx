import styled from "styled-components";
import Map from "../../img/maps.png";

const MapContent = styled.div`
  background-image: url(${Map});
  height: 100%;
  width: 100%;
  margin-left: 0px;
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const InformationSetion = () => {
  return (
    <MapContent className="w-screen">
      <div className="w-screen flex flex-col items-center mt-9 text-left pt-10 pb-14"></div>
      <div className="w-screen flex flex-col items-center mt-9 text-left pt-10 pb-14"></div>
      <div className="w-screen flex flex-col items-center mt-9 text-left pt-10 pb-14"></div>
    </MapContent>
  );
};

export default InformationSetion;
