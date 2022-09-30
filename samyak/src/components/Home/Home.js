import { useContext } from "react";
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
import CountDown from "./CountDown/CountDown";
// import HomeStalls from "./HomeStalls";
import { ColorContext } from "../../TheRouter";

const ExtraOptions = styled.div`
  background-color: rgb(40, 40, 43);
`;

const AbsoluteAlignment = styled.div`
  position: absolute;
  top: 100%;
  background-color: ${(props) => props.backgroundColor};
  background-image: linear-gradient(${(props) => props.backgroundColor}, rgb(21, 20, 20), rgb(21, 20, 20), rgb(21, 20, 20));
  z-index: 100;
`;

const Home = (props) => {
  var color = useContext(ColorContext);
  color = color.colorObj;
  var backgroundColor = color.backgroundColor;
  var isMobile = window.innerWidth <= 1150 ? true : false;
  return (
    <ExtraOptions>
      {isMobile ? <HomePoster name={color.id === 0 ? "mobile1" : "mobile2"}/> : (color.primaryColor==='#cf9a2e' ? <NewEveningPoster /> : <NewHomePoster />)}
      <AbsoluteAlignment backgroundColor={backgroundColor}>
        <CountDown />
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
