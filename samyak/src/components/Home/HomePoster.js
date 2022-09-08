import styled from "styled-components";

import group1 from "./img/SAMYAK_LOGOS/Group 1.png";
import heroBrush from "./img/heroBrushEffect.png";

const HeroContainer = styled.div`
  position: relative;
  height: 90vh;
  width: 100vw;
  background-color: #fcc13f;
  margin-bottom: 120px;
`;

const ABC = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: auto;
  -o-object-fit: contain;
  object-fit: contain;
`;

const HeroBrushEffect = styled.img`
  opacity: 88%;
  position: absolute;
  bottom: -17.7%;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
`;

const HomePoster = () => {
  return (
    <HeroContainer className="hero-cont">
      <ABC className="abc" src={group1} alt="" />
      <HeroBrushEffect className="heroBrushEffect" src={heroBrush} alt="" />
    </HeroContainer>
  );
};

export default HomePoster;
