// import { Link } from "react-router-dom";
import styled from "styled-components";
import SamyakHeading from "./SamyakHeading";
import "./SamyakFooter.css";
import SamyakContact from "./SamyakContact";
import SamyakEmail from "./SamyakEmail";
import CopyRights from "./CopyRights";
// import logoImg from "./SAMYAK_FaceLogo_white.png";
const FooterContainer = styled.div`
  background-color: #000000;
  color: white;
  // border: 2px solid blue;
  margin: 0;
  border-radius: 5px;
`;
const FooterDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 30px;
    .footer__contact {
      margin-bottom: 20px;
    }
    .footer__email {
      margin-bottom: 20px;
    }
  }
`;
const SamyakFooter = () => {
  return (
    <>
      <FooterContainer>
        <SamyakHeading />
        <FooterDataContainer>
          <SamyakContact />
          <SamyakEmail />
        </FooterDataContainer>
        <CopyRights />
      </FooterContainer>
    </>
    // <div class="footer">
    //   <div class="footer-cont">
    //     <div class="links">
    //       <div class="draft">
    //         <h1>SAMYAK '22</h1>
    //       </div>

    //       <div class="contactUs">
    //         <ul>
    //           <li>
    //             <a href="#0">samyak@kluniversity.in</a>
    //           </li>
    //           <li>
    //             <a href="#0">info.samyak@kluniversity.in</a>
    //           </li>
    //         </ul>
    //       </div>

    //       <div class="social" style={{marginTop:'10px'}}>
    //         <ul class="social-links">
              
    //           <li>
    //             <a href="https://www.facebook.com/kl.samyak/">
    //               <i class="fab fa-facebook-f fa" id="SocialIcon"></i>
    //             </a>
    //           </li>
    //           <li>
    //             <a href="https://www.instagram.com/kl.samyak">
    //               <i class="fab fa-instagram fa" id="SocialIcon"></i>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div class="copyright">
    //       <p>&#169;Copyrights Reserved SAMYAK '22</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SamyakFooter;
