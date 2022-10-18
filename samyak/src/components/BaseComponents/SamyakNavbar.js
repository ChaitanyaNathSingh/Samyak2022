import { Link, useNavigate } from "react-router-dom";
import logoImg from "./SAMYAK_FaceLogo_white.png";
import styled from "styled-components";
import { LoginButton, RegisterButton } from "../UI/JoinButton";
import { useContext, useEffect, useState } from "react";
import { ColorContext } from "../../TheRouter";
import './NavBar.css';

// const onLoginSuccess = (response) => {
//     console.log(response);
// }
// const onLoginFailure = (response) => {
//     if(response.error !== "popup_closed_by_user")  {
//         // redirect to login page
//     }
//     console.log(response);
// }

const Logos = styled.div`
    float: left;
    width: 300px;
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: left;
    transform: translateX(20px);
    align-items: center;

    @media (max-width: 870px) {
        width: 100px;
        justify-content: center;
        transform: translateX(0px);
    }

`

const Logo = styled.img`
  width: 50px;
  height: 63.5px;
`;

// const KLogo = styled.img`
//   width: 100px;
// `;

const Navigation = styled.div`
    text-align: center;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`
const NavElements = styled.div`
    display: inline-block;
    width: calc(100% - 600px);
    height: 100%;
    @media (max-width: 870px) {
        display: none;
    }
`
const NavEle = styled.p`
    font-weight: bold;
    margin: 0 0;
    padding: 0 10px;
    width: auto;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    display: flex;
    position: relative;
    // color: #0087ca;
    // color: black;
    // text-transform: lowercase;
    font-family: 'Montserrat';
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #0087ca;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
    &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    a {
        color: ${props => props.linkColor};
        text-decoration: none;
    }
`

const MenuIconContainer = styled.div`
    width: 300px;
    float: right;
    height: 100%;
    margin: 0;
    display: none;
    @media (max-width: 870px) {
        display: block;
        width: 100px;
    }
`
const MenuIcon = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: all .5s ease-in-out;
`
const MenuIconBurger = styled.div`
    width: 30px;
    height: 5px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255,101,47,.2);
    transition: all .3s ease-in-out;
    &:before, &:after {
        content: '';
        position: absolute;
        width: 30px;
        height: 5px;
        background: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(255,101,47,.2);
        transition: all .5s ease-in-out;
    }
    &::before {
        transform: translateY(-13px);
    }
    &::after {
        transform: translateY(13px);
    }
`

const MobileNavElements = styled.section`
    position: fixed;
    top: 80px;
    width: 0%;
    color: black;
    height: calc(100vh - 80px);
    right: 0;
    float: right;
    transition: all .3s ease-in-out;
    z-index: 201;
    display: none;
    background-color: #fff;
    overflow: hidden;
    @media (max-width: 870px) {
        display: block;
        width: ${props => props.show ? "100%" : "0%"};
    }

    background-color: rgb(13, 17, 23);
    // blur effect
    // backdrop-filter: blur(13px);
`
const MobileNavigation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    color: #5f2d13 !important;

`
const MobileNavEle = styled.p`
    font-weight: bold;
    margin: 10px 12px;
    font-size: 2.2rem;
    color: #5f2d13;
`

const Join = styled.div`
    width: 300px;
    float: right;
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: right;
    align-items: center;
    transform: translateX(-20px);

    @media (max-width: 870px) {
        display: none;
        justify-content: center;

    }
`


const SamyakNavbar = (props) => {
    const navigate = useNavigate();
    var color = useContext(ColorContext);
    color = color.colorObj;
    const [showMobileElements, setShowMobileElements] = useState(false);
    let NavEleColor = {
        profile: "#fff",
        // home: "#ef4339",
        home: color.primaryColor,
        events: '#ffcd6a',
        gallery: '#fff',
        sponsors: '#fff',   
        login: '#fff',
        register: '#fff'
    }
    let navEleCol = null;
    if(window.location.pathname === '/profile') 
        navEleCol = NavEleColor.profile;
    else if(window.location.pathname === '/events')
        navEleCol = NavEleColor.events;
    else if(window.location.pathname === '/gallery')
        navEleCol = NavEleColor.gallery;
    else if(window.location.pathname === '/sponsors')
        navEleCol = NavEleColor.sponsors;
    else if(window.location.pathname === '/login' || window.location.pathname === '/register')
        navEleCol = NavEleColor.login;
    else if(window.location.pathname === '/team')
        navEleCol = NavEleColor.gallery;
    else
        navEleCol = NavEleColor.home;
    
    
    useEffect(() => {
        const menuBtn = document.querySelector('.menu-icon');
        // menuBtn.classList.remove('active');
        menuBtn.addEventListener('click', () => {
            if(!menuBtn.classList.contains('open')) {
                menuBtn.classList.add('open');
                handleMenuClick(true);
            } else {
                menuBtn.classList.remove('open');
                handleMenuClick(false);
            }
        });
    }, [])

    const handleMenuClick = (status) => {
        setShowMobileElements(status);
    };
    const closeNavBar = () => {
        const menuBtn = document.querySelector('.menu-icon');
        if(menuBtn) {
            menuBtn.classList.remove('open');
            handleMenuClick(false);
        }
    };
    const redirect = (navigate, path) => {
        // closeNavBar();
        return () => {
            closeNavBar();
            navigate(path);
        }
    }
    const userLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    }

    let isAuth = false;
    let myuser = localStorage.getItem("user") ? localStorage.getItem("user") : null;
    if(isNaN(myuser) && myuser !== null && myuser !== undefined && myuser !== "null" && myuser !== "undefined") {  
        isAuth = JSON.parse(myuser).user[1].details.isAuth;
    }
    

    const [isNavElementsVisible, setIsNavElementsVisible] = useState(true);
    window.addEventListener('scroll', () => {
        if(isNavElementsVisible && window.scrollY > window.innerHeight) {
            setIsNavElementsVisible(false);
        } else if(!isNavElementsVisible && window.scrollY <= window.innerHeight) {
            setIsNavElementsVisible(true);
        }
    });
    return (
        <div className="samyak__navbar">
            <nav>
                <Logos>
                    <Link to="/">
                        {/* <KLogo src={'https://surabhi.web.app/static/media/kl_logo.5648b3c6.svg'} alt="KL LOGO" onClick={()=>{window.open('https://www.kluniversity.in')}} /> */}
                        <Logo src={logoImg} alt="SAMYAK" />
                    </Link>
                </Logos>
                <NavElements>
                    { isNavElementsVisible ?
                    <Navigation>
                        <NavEle linkColor={navEleCol}><Link to='/'>Home</Link></NavEle>
                        <NavEle linkColor={navEleCol}><Link to='/events'>Events</Link></NavEle>
                        <NavEle linkColor={navEleCol}><Link to='/gallery'>Gallery</Link></NavEle>
                        <NavEle linkColor={navEleCol}><Link to='/team'>Team</Link></NavEle>
                        {/* <NavEle><Link to='/team'>Team</Link></NavEle> */}
                        <NavEle linkColor={navEleCol}><Link to='/sponsors'>Sponsors</Link></NavEle>
                        <NavEle linkColor={navEleCol}><Link to='/about'>About</Link></NavEle>
                    </Navigation> : null }
                </NavElements>
                {!isAuth ?
                <Join>
                    <LoginButton onClick={redirect(navigate, 'login')}>LOGIN</LoginButton>
                    <RegisterButton onClick={redirect(navigate, 'register')}>REGISTER</RegisterButton>
                </Join>
                :
                <Join>
                    <RegisterButton onClick={redirect(navigate, 'profile')}>PROFILE</RegisterButton>
                    <LoginButton onClick={userLogout}>LOGOUT</LoginButton>
                </Join>
                }
                {/* <Join>
                    {props.googleButton}
                </Join> */}
                <MenuIconContainer>
                    <MenuIcon className="menu-icon">
                        <MenuIconBurger className="menu-btn__burger"></MenuIconBurger>
                    </MenuIcon>
                </MenuIconContainer>
            </nav>
            <MobileNavElements show={showMobileElements}>
                <MobileNavigation style={{'color': '#5f2d13'}}>
                    <MobileNavEle><Link onClick={closeNavBar} className="havala" to='/'>Home</Link></MobileNavEle>
                    <MobileNavEle><Link onClick={closeNavBar} className="havala" to='/events'>Events</Link></MobileNavEle>
                    <MobileNavEle><Link onClick={closeNavBar} className="havala" to='/gallery'>Gallery</Link></MobileNavEle>
                    <MobileNavEle><Link onClick={closeNavBar} className="havala" to='/team'>Team</Link></MobileNavEle>
                    {/* <MobileNavEle><Link className="havala" to='/team'>Team</Link></MobileNavEle> */}
                    <MobileNavEle><Link onClick={closeNavBar} className="havala" to='/sponsors'>Sponsors</Link></MobileNavEle>
                    <MobileNavEle><Link onClick={closeNavBar} className="havala" to='/about'>About</Link></MobileNavEle>
                    {!isAuth ?
                    <div>
                        <LoginButton onClick={redirect(navigate, 'login')}>LOGIN</LoginButton>
                        <RegisterButton onClick={redirect(navigate, 'register')}>REGISTER</RegisterButton>
                    </div>
                    :
                    <div>
                        <RegisterButton onClick={redirect(navigate, 'profile')}>PROFILE</RegisterButton>
                        <LoginButton onClick={userLogout}>LOGOUT</LoginButton>
                    </div>}
                    {/* <GoogleLogin
                        clientId="65768565076-aenuajp096v6oa34fusa66vq10dcubqn.apps.googleusercontent.com"
                        // buttonText="Sign In Google"
                        render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>LOGIN or REGISTER</button>
                        )}
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    /> */}
                </MobileNavigation>
            </MobileNavElements>
        </div>
    )
}

export default SamyakNavbar;