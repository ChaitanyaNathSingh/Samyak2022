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
// import SamyakHomeEvent from "./SamyakHomeEvent";
import SamyakHomeGallery from "./SamyakHomeGallery";
// import SamyakPoster from "./SamyakPoster";
import './Home.css';
// import HomeStalls from "./HomeStalls";

const ExtraOptions = styled.div`
  background-color: rgb(40, 40, 43);
`;

const AbsoluteAlignment = styled.div`
  position: absolute;
  top: 100%;
  background-color: ${(props) => props.backgroundColor};
`;

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1150 ? true : false);
  const [backgroundColor, setBackgroundColor] = useState(window.innerWidth <= 1150 ? "#28282B" : "#2D112B");
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1150) {
      setIsMobile(true);
      setBackgroundColor('#28282B');
    } else {
      setIsMobile(false);
      setBackgroundColor('#2D112B');
    }
  });
  return (
    <ExtraOptions>
      {isMobile ? <HomePoster /> : <NewHomePoster />}
      <AbsoluteAlignment backgroundColor={backgroundColor}>
        <SamyakEvents />
        <SamyakAbout />
        {/* <SamyakHomeEvent /> */}
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
