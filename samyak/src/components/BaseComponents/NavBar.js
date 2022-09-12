import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios";
import "./NavBar.css";

import styled from "styled-components";

// import kl_logo from "./KL_University_logo.png";
import logoImg from "./SAMYAK_FaceLogo_white.png";

const Logout = styled.a`
  cursor: pointer;
`;

const Logo = styled.img`
  width: 45px;
  height: 50px;
  margin-top: -1px;
  margin-left:10px;
`;
const KLogo = styled.img`
margin-left:-5px;
  width: 100px;
`;
const NavBar = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const userLogout = () => {
    // user logout api request to backend
    axiosInstance
      .get("../home/logout")
      .then((response) => {
        // console.log(response.data);
        if(response.data.status === "success") {
          enqueueSnackbar(response.data.message, { variant: "success" });
          props.setIsAuth(false);
          navigate("/join");
        }
        else {
          props.setIsAuth(false);
          navigate("/join");
          enqueueSnackbar(response.data.message, { variant: "error" });
        }
      })
      .catch((error) => {
        console.log(error, "logout failed");
        enqueueSnackbar("Logout Failed", { variant: "error" });
      });
    // enqueueSnackbar("Logged Out Successfully", {
    //   variant: "success",
    //   anchorOrigin: {
    //     vertical: "top",
    //     horizontal: "left",
    //   },
    // });
  };
  return (
    <div className="App__navbar">
      <nav>
        <div className="logo">
          <Link to="/">
            <KLogo src={'https://surabhi.web.app/static/media/kl_logo.5648b3c6.svg'} alt="KL LOGO" onClick={()=>{window.open('https://www.kluniversity.in')}} />
            <Logo src={logoImg} alt="SAMYAK" />
            
          </Link>
        </div>
        <div className="menu-icon">
          <span></span>
        </div>
      </nav>
      <section className="overlay-menu">
        <div className="container">
          <div className="row" style={{ display: "block" }}>
            <div className="main-menu">
              <ul style={{ marginTop: "30px" }}>
                <li className="nav-element">
                  <Link to={`/home`}>HOME</Link>
                </li>
                <li className="nav-element">
                  <Link to={`/aboutus`}>ABOUT US</Link>
                </li>
                <li className="nav-element">
                  <Link to={`/events`}>EVENTS</Link>
                </li>
                <li className="nav-element">
                  <Link to={`/gallery`}>GALLERY</Link>
                </li>
                {/* <li className="nav-element">
                  <Link to={`/oursponsors`}>OUR SPONSORS</Link>
                </li> */}
                {/* <li className="nav-element">
                  <Link to={`/team`}>TEAM</Link>
                </li> */}
                
                {props.isAuth ? (<li className="nav-element">
                  <Link to={`/profile`}>PROFILE</Link>
                </li>
                  
                ) : (
                  <li className="nav-element">
                    <Link to={`/join`}>LOGIN</Link>
                  </li>
                )}
                {props.isAuth ? (
                  <li className="nav-element">
                    <Logout onClick={userLogout}>LOGOUT</Logout>
                  </li>
                ) : (
                  <li className="nav-element">
                    <Link to={`/join`}>REGISTER</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
