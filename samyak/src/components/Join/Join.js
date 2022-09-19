import { useState } from "react";
import styled from "styled-components";

// bootstrap.min.css
// jquery.min.css
// join_main.js
import "./Join.css";

import bg from "../Bootstrap/img/join_background.jpg";
import DisplayForm from "./DisplayForm";
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
  const [heading, setHeading] = useState("LOGIN");
  const [goToSign, setGoToSign] = useState("Sign Up");
  const toggleForm = () => {
    if (toBeDisplayed === "LoginForm") {
      setHeading("REGISTER");
      setToBeDisplayed("RegisterForm");
      setGoToSign("Sign In");
    } else {
      setHeading("LOGIN");
      setToBeDisplayed("LoginForm");
      setGoToSign("Sign Up");
    }
  };

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
        <section className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">{heading}</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap p-0">
                <DisplayForm toBeDisplayed={toBeDisplayed} setIsAuth={props.setIsAuth}/>
                <div className="social d-flex text-center">
                  {/* <a href="#0" className="px-2 py-2 mr-md-1 rounded">
                    <span className="ion-logo-facebook mr-2"></span> Facebook
                  </a> */}
                  <a
                    href="#0"
                    onClick={toggleForm}
                    className="px-2 py-2 ml-md-1 rounded"
                  >
                    <span className="ion-logo-twitter mr-2"></span> {goToSign}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ImageDarkner>
    </ImageHolder>
  );
};

export default Join;
