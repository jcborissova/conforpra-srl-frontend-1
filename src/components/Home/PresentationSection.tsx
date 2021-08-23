import * as React from 'react';
import styled from "styled-components";
import inicioImg from "../../img/Inicio.png";
import people from "../../img/people.png";
import "../../styles.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const InicioContent = styled.div`
  background-image: url(${inicioImg});
  height: 100%;
  width: 100%;
  margin-left: 0px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const PresentationSection = () => {
  return (
    <InicioContent className="mt-16">
      <div className="flex flex-row justify-center pb-10 lg:pl-20 lg-0">
        <div className="lg:pt-24 pt-16">
          <div className="text-3xl">
            <p>Consultoría y Formación Técnica</p>
            <p>
              en{" "}
              <span className="font-custom-color">Protección Radiológica</span>
            </p>
          </div>
          <div className="pt-8">
            <ul className="flex flex-col gap-4">
              <li className="flex flex-row gap-4">
                <CheckCircleIcon style={{ fill: "#009aa6" }}></CheckCircleIcon>
                Asesoría profesional en protección y seguridad radiológica
              </li>
              <li className="flex flex-row gap-4">
                <CheckCircleIcon style={{ fill: "#009aa6" }}></CheckCircleIcon>
                Vigilancia radiológica personal y de área en el puesto de
                trabajo
              </li>
              <li className="flex flex-row gap-4">
                <CheckCircleIcon style={{ fill: "#009aa6" }}></CheckCircleIcon>
                Ventas de insumos para la seguridad radiológica
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-4 pr-32 lg:block hidden">
          <img src={people} alt="people" />
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1628384777 bg-transparent absolute">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill-gray"
          ></path>
        </svg>
      </div>
    </InicioContent>
  );
};

export default PresentationSection;
