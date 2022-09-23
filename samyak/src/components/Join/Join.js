import { useState } from "react";
import styled from "styled-components";

// bootstrap.min.css
// jquery.min.css
// join_main.js
import "./Join.css";

import bg from "../Bootstrap/img/join_background.jpg";
import NavBarSpace from "../BaseComponents/NavBarSpace";

import { Darkness } from "../../Utils/Darkness";

const ImageHolder = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: auto;
`;
const ImageDarkner = styled.section`
  background-color: ${(props) => props.bgcolor};
  height: auto;
  width: 100%;
`;

const Join = (props) => {
  const [toBeDisplayed, setToBeDisplayed] = useState(props.toBeDisplayed);
  if(toBeDisplayed !== props.toBeDisplayed)
    setToBeDisplayed(props.toBeDisplayed);

  // background brightness
  /**
   * 4am to 9am -> 0.9 to 0.1
   * 9am to 12pm -> 0.1 to 0
   * 12pm to 5pm -> 0 to 0.2
   * 5pm to 7pm -> 0.2 to 0.4
   * 7pm to 11pm -> 0.4 to 0.9
   * 11pm to 2am -> 0.9 to 1
   * 2am to 4am -> 1 to 0.9
   */
  const darkOpacity = Darkness();
  // console.log(darkOpacity);

  // reload on resize
  window.addEventListener("resize", () => {
    window.location.reload();
    setToBeDisplayed(props.toBeDisplayed);
  });

  return (
    <ImageHolder className="img js-fullheight join__container"  style={{minHeight:'100vh'}}>
      <ImageDarkner
        className="ftco-section bg-black"
        style={{ padding: "2em 0",minHeight:'100vh' }}
        bgcolor={`rgba(0,0,0,${darkOpacity})`}
      >
        <NavBarSpace />
        {props.children}
      </ImageDarkner>
    </ImageHolder>
  );
};

export default Join;
