import styled from 'styled-components';
import inicioImg from '../../img/Inicio.png';
import people from '../../img/people.png';
import '../../styles.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LineDivider from '../LineDivider';

const InicioContent = styled.div`
  background-image: url(${inicioImg});
  width: 100%;
  margin-left: 0px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CheckCircle = styled(CheckCircleIcon)`
  color: #009aa6;
`;

const PresentationSection = () => {
  return (
    <InicioContent className="lg:mt-16">
      <div>
        <div className="flex flex-row justify-center lg:pb-10 lg:pl-20 lg-0 lg:pt-10">
          <div className="lg:pt-24 pt-24 pt sm:px-0 lg:px-3 px-9">
            <div className="lg:text-3xl text-xl font-semibold">
              <p>Consultoría y Formación Técnica</p>
              <p>
                en{' '}
                <span className="font-custom-color">
                  Protección Radiológica
                </span>
              </p>
            </div>
            <div className="pt-8 pb-9">
              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex flex-row gap-4">
                  <CheckCircle />
                  Asesoría profesional en protección y seguridad radiológica
                </li>
                <li className="flex flex-row gap-4">
                  <CheckCircle />
                  Vigilancia radiológica personal y de área en el puesto de
                  trabajo
                </li>
                <li className="flex flex-row gap-4">
                  <CheckCircle />
                  Venta de insumos para la seguridad radiológica
                </li>
              </ul>
            </div>
          </div>
          <div className="pt- pr-32 lg:block hidden h-96 z-0">
            <img src={people} alt="people" className="z-0" />
          </div>
        </div>
      </div>
      <div className="relative pt-2">
        <LineDivider dividerColor="-gray" />
      </div>
    </InicioContent>
  );
};

export default PresentationSection;
