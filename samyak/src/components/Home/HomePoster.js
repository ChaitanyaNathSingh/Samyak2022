import styled from "styled-components";

// import group1 from "./img/SAMYAK_LOGOS/Group 1.png";/
// import heroBrush from "./img/heroBrushEffect.png";
import mobile0 from "./img/Banners/Samyak_Banner.png";
// import SamyakEvents from "./SamyakEvents";
// import title3 from './img/SAMYAK_LOGOS/title-3.png';
import mobile1 from './img/SAMYAK_LOGOS/mobile1.jpg';
import mobile2 from './img/SAMYAK_LOGOS/mobile2.jpg';

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #fcc13f;
  margin-bottom: 120px;
  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;

const ABC = styled.img`
  position: absolute;
  left: 0;
  width: 100vw;
  height: 100%;
  -o-object-fit: contain;
  object-fit: cover;
`;

// const HeroBrushEffect = styled.img`
//   opacity: 88%;
//   position: absolute;
//   bottom: -17.7%;
//   -webkit-transform: rotate(180deg);
//   transform: rotate(180deg);
// `;

const HomePoster = (props) => {
  let theImage = mobile0;
  if(props.name === "mobile1")
    theImage = mobile1;
  else if(props.name === "mobile2")
    theImage = mobile2;
  return (
    <>
      <HeroContainer className="hero-cont">
        <ABC className="abc" src={theImage} alt="samyak" />
        {/* <ABC className="abc" src={group1} alt="" /> */}
        {/* <HeroBrushEffect className="heroBrushEffect" src={heroBrush} alt="" /> */}
      </HeroContainer>
      {/* <img src={title3} style={{'border': '2px solid red', width: '100vw'}} alt="" /> */}
    </>
  );
};

export default HomePoster;
