import styled from 'styled-components';
import '../styles.css';
import LineDivider from './LineDivider';

const HeaderSection = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 100%;
  margin-left: 0px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeaderPage = (props: any) => {
  const { img, title, description, dividerColor } = props;

  return (
    <HeaderSection img={img} className="pt-12">
      <div className="flex flex-col text-left text-white h-full">
        <div className="lg:pl-40 pl-10 pb-10 lg:pt-20 pt-12">
          <div className="text-3xl">
            <p>{title}</p>
          </div>
          <div className="pt-8 lg:w-4/12 w-5/6">
            <p>{description}</p>
          </div>
        </div>
        <LineDivider
          dividerColor={dividerColor}
          dividerbgColor=""
          className=""
        />
      </div>
    </HeaderSection>
  );
};

export default HeaderPage;
