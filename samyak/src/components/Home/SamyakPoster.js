import styled from "styled-components";

import Background from './img/SAMYAK_LOGOS/NeonBg.jpg';
import BlueLogo from './img/SAMYAK_LOGOS/BlueLogo.png';

const HomeContainer = styled.div`
    position: relative;
    height: auto;
    border: 2px solid red;
    background-color: black;
    // position: relative;
    // height: auto;
    // top: 0;
`;

const HomeDesign = styled.div`
    height: 100vh;
    boorder: 2px solid green;
    a {
        position: relative;
        opacity: 0;
        top: 93%;
        left: 45%;
        z-index: 20;
        padding: 7px 35px;
        color: #000000;
        font-weight: 500;
        font-size: 20px;
        border-radius: 4px;
        text-decoration: none;
        backdrop-filter: blur(2px);
        animation: opacity .5s ease-in 1.5s forwards;
        background: linear-gradient(to right,#beddff,#7bd3f6);
        border: 2px solid blue;
    }
    a:hover {
        background: linear-gradient(to right,#7bd3f6,#beddff);
    }
    #image1 { // building
        width: 100%;
        height: auto;
        z-index: 10;
    }
    #image2 { // bg
        z-index: 1;
        opacity: 0;
        animation: opacity .5s ease-in .5s forwards;
    }
    #image3 { // logo
        z-index: 5;
        opacity: 0;
        animation: opacity .5s ease-in 1s forwards;
    }
    // img:nth-child(4) { 
    //     z-index: 11;
    //     position: relative;
    //     width: 400px;
    // }
    img {
        position: absolute;
        width: 100%;
        height: auto;
        border: 2px solid red;
        z-index: 21;
    }
`;

const SamyakPoster = () => {
    return(
        <>
            <HomeContainer className="home-container" style={{'width': '100%'}}>
                <HomeDesign className="home-design">
                    {/* <img id="image1" src={Background} alt="Buildings" /> */}
                    <img id="image2" src={BlueLogo} alt="bg" style={{'zIndex': '22', 'marginLeft': '-17px'}} />
                    <img id="image3" src={BlueLogo} alt="logo"/>
                    <a href="#0">Register</a>
                </HomeDesign>
            </HomeContainer>
        </>
    );
}

export default SamyakPoster;