import { Link } from "react-router-dom";
import "./SamyakFooter.css";

import logoImg from "./SAMYAK_FaceLogo_white.png";

const SamyakNavBar = () => {
  return (
    <div class="footer">
      <div class="footer-cont">
        <div class="links">
          <div class="draft">
            <h1>SAMYAK '22</h1>
            <p>
            The “Atīndriya” comes from the idea of bringing the technologies used in theories and implementing them wherever possible through various forms of advertising.
            </p>
          </div>
          <div class="quickLinks">
            <p>Quick Links</p>
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/aboutus`}>About</Link>
              </li>
              <li>
                <Link to={`/gallery`}>Gallery</Link>
              </li>
              <li>
                <Link to={`/team`}>Team</Link>
              </li>
            </ul>
          </div>

          <div class="footer-logo" style={{marginBottom:'30px'}}>
            <img src={logoImg} alt="logoImg" />
            <p>SAMYAK '22</p>
          </div>

          <div class="contactUs">
            <p>Email Us</p>
            <ul>
              <li>
                <a href="#0">samyak@kluniversity.in</a>
              </li>
              <li>
                <a href="#0">Info.samyak@kluniversity.in</a>
              </li>
            </ul>
          </div>

          <div class="social" style={{marginTop:'10px'}}>
            <ul class="social-links">
              
              <li>
                <a href="https://www.facebook.com/kl.samyak/">
                  <i class="fab fa-facebook-f fa" id="SocialIcon"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kl.samyak">
                  <i class="fab fa-instagram fa" id="SocialIcon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p>&#169;Copyrights Reserved SAMYAK '22</p>
        </div>
      </div>
    </div>
  );
};

export default SamyakNavBar;
