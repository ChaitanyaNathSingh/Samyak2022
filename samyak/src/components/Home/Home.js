import { useState } from "react";
import styled from "styled-components";
import SamyakFooter from "../BaseComponents/Footer/SamyakFooter";
// import HomeEvents from "./HomeEvents";
// import HomeMusic from "./HomeMusic";
import HomePoster from "./HomePoster";
import NewHomePoster from "./NewHomePoster";
import SamyakAbout from "./SamyakAbout";
import SamyakAboutKL from "./SamyakAboutKL";
import SamyakEvents from "./SamyakEvents";
import SamyakHomeEvent from "./SamyakHomeEvent";
import SamyakHomeGallery from "./SamyakHomeGallery";
// import SamyakPoster from "./SamyakPoster";
import './Home.css';
import NewEveningPoster from "./NewEveningPoster";
// import HomeStalls from "./HomeStalls";

const ExtraOptions = styled.div`
  background-color: rgb(40, 40, 43);
`;

const AbsoluteAlignment = styled.div`
  position: absolute;
  top: 100%;
  background-color: ${(props) => props.backgroundColor};
  background-image: linear-gradient(${(props) => props.backgroundColor}, rgb(21, 20, 20), rgb(21, 20, 20), rgb(21, 20, 20));
`;

const Home = (props) => {
  var num = props.randomNum;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1150 ? true : false);
  const [backgroundColor, setBackgroundColor] = useState(window.innerWidth <= 1150 ? "#28282B" : (num === 0) ? '#2d112b' : "rgba(0,2,11,255)");


  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1150) {
      setIsMobile(true);
      setBackgroundColor('#28282B');
    } else {
      setIsMobile(false);
      if(num === 0)
      setBackgroundColor('#2D112B');
      else
      setBackgroundColor("rgba(0,2,11,255)");
    }
  });
  return (
    <ExtraOptions>
      {isMobile ? <HomePoster /> : (num === 0 ? <NewHomePoster /> : <NewEveningPoster />)}
      {/* <NewEveningPoster /> */}
      <AbsoluteAlignment backgroundColor={backgroundColor}>
        <SamyakEvents />
        <SamyakAbout />
        <SamyakHomeEvent />
        <SamyakHomeGallery />
        <SamyakAboutKL />
        <SamyakFooter />
      </AbsoluteAlignment>
      {/* <HomeEvents />
      <HomeMusic /> */}
      {/* <HomeStalls /> */}
    </ExtraOptions>
  );
};

export default Home;
