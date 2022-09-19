import styled from "styled-components";

// import group1 from "./img/SAMYAK_LOGOS/Group 1.png";/
// import heroBrush from "./img/heroBrushEffect.png";
import samyak_banner from "./img/Banners/Samyak_Banner.png";

const HeroContainer = styled.div`
  position: relative;
  height: 120vh;
  width: 100vw;
  background-color: #fcc13f;
  margin-bottom: 120px;
  @media screen and (max-width: 768px) {
    height: 70vh;
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

const HomePoster = () => {
  return (
    <HeroContainer className="hero-cont">
      <ABC className="abc" src={samyak_banner} alt="samyak_banner" />
      {/* <ABC className="abc" src={group1} alt="" /> */}
      {/* <HeroBrushEffect className="heroBrushEffect" src={heroBrush} alt="" /> */}
    </HeroContainer>
  );
};

export default HomePoster;
