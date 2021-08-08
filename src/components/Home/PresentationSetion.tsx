import styled from "styled-components";
import InicioImg from "../../img/Inicio.png";
import people from "../../img/people.png";

const InicioContent = styled.div`
  background-image: url(${InicioImg});
  height: 100%;
  width: 100%;
  margin-left: 0px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const PresentationSetion = () => {
  return (
    <InicioContent className="mt-16">
      <div className="flex flex-row justify-center pb-10 lg:pl-20 lg-0">
        <div className="lg:pt-24 pt-16">
          <div className="text-3xl">
            <p>Consultoría y Formación Técnica</p>
            <p>
              en <span className="text-green-500">Protección Radiológica</span>
            </p>
          </div>
          <div className="pt-8">
            <ul>
              <li>
                Asesoría profesional en protección y seguridad radiológica
              </li>
              <li>
                Vigilancia radiológica personal y de área en el puesto de
                trabajo
              </li>
              <li>Ventas de insumos para la seguridad radiológica</li>
            </ul>
          </div>
        </div>
        <div className="pt-4 pr-32 lg:block hidden">
          <img src={people} alt="people" />
        </div>
      </div>
    </InicioContent>
  );
};

export default PresentationSetion;
