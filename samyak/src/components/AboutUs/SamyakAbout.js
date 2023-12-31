import styled from "styled-components";
import SamyakFooter from "../BaseComponents/Footer/SamyakFooter";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import HomeHeading from '../UI/HomeHeading';
import HomeNavigateButton from "../UI/HomeNavigateButton";

import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';
import image4 from './img/image4.jpg';

const MainContainer = styled.div`
    position: relative;
    height: auto;
    background-color: rgb(40,40,43);
    width: 100%;
`;

const AboutSamyak = styled.div`
    height: auto;
    display: flex;
    justify-content: space-evenly;
    @media only screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;
const AboutSamyakLeft = styled.div`
    padding: 20px;
    h1 {
        color: #ffb41f;
        font-weight: 600;
        letter-spacing: 1px;
    }
    p {
        color: #ffffffd8;
        margin-top: 25px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: .5px;
    }

    width: 45%;
    @media only screen and (max-width: 1024px) {
        width: 100%;
        p {
            font-size: 14px;
        }
        h1 {
            font-size: 22px;
        }
    }
`;
const AboutLocation = styled.div`
    margin-top: 30px;
    h3 {
        color: #ffb521;
        font-weight: 500;
        font-size: 23px;
    }
    p {
        margin-top: 10px;
        color: #b6b6b6;
    }
    span {
        width: 50%;
    }

    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        h2 {
            font-size: 14px;
        }
        h3 {
            font-size: 17px;
        }
        span {
            width: 100%;
            text-align: center;
        }
    }
`;
const AboutSamyakRight = styled.div`
    padding: 20px;
    flex-wrap: wrap;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;

    img {
        width: 70%;
        border-radius: 7px;
        border: 2px solid #ffb52181;
    }
    @media only screen and (max-width: 1024px) {
        width: 100%;
        img {
            width: 90%;
            height: auto;
            margin-top: 20px;
        }
    }
`;

const AboutTheme = styled.div`
    margin: 4pc 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    @media only screen and (max-width: 1024px) {
        flex-direction: column;
    }
`;
const AboutThemeLeft = styled.div`
    padding: 20px;
    height: auto;
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 400px;
        border-radius: 6px;
    }
    @media only screen and (max-width: 1024px) {
        width: 100%;
        p {
            font-size: 14px;
        }
        img {
            width: 90%;
            height: auto;
            margin-top: 20px;
        }
    }
`;
const AboutThemeRight = styled.div`
    padding: 20px;
    height: auto;
    width: 45%;
    h1 {
        color: #ffb41f;
        font-weight: 600;
        letter-spacing: 1px;
    }
    p {
        color: #ffffffd8;
        margin-top: 25px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: .5px;
    }
    @media only screen and (max-width: 1024px) {
        width: 100%;
        h1 {
            font-size: 22px;
        }
    }
`;

const AboutKLU = styled.div`
    height: auto;
    margin: auto;
    display: flex;
    justify-content: space-evenly;

    h1 {
        color: #ffb41f;
        font-weight: 600;
        letter-spacing: 1px;
    }
    p {
        color: #ffffffd8;
        margin-top: 25px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: .5px;
    }
    span {
        margin-top: 25px;
    }
    span img {
        width: 50%;
        height: auto;
        border-radius: 5px;
    }
    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        h1 {
            font-size: 22px;
        }
    }
`;
const AboutKLULeft = styled.div`
    padding: 20px;
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        height: auto;
        border-radius: 5px;
    }
    @media only screen and (max-width: 1024px) {
        width: 100%;
    }
`;
const AboutKLURight = styled.div`
    padding: 20px;
    width: 45%;
    a {
        position: relative;
        top: 15px;
        color: #ffb521;
        text-decoration: none;
    }
    @media only screen and (max-width: 1024px) {
        width: 100%;
        p {
            font-size: 14px;
        }
    }
`;

const SamyakAbout = () => {
    return(
        <>
            <MainContainer>
                <NavBarSpace /><br></br><br></br>
                <HomeHeading>ABOUT</HomeHeading>
                <AboutSamyak>
                    <AboutSamyakLeft>
                    <h1>About Samyak</h1>
                        <p>SAMYAK is a national-level techno-management fest organized by 
                            the students of KL University. It is a two- day festival filled 
                            with activities, events, workshops, and student performances that 
                            drive the students to experience the joy in being part of a synergy.</p>
                            {/* <MoreEvents>
                                <p onclick="About()" id="aboutButton">Read More</p>
                            </MoreEvents> */}
                        <p id="about">The colours popping throughout, the theme-relevant artworks 
                            designed from scratch by the student teams, the elegance in 
                            student groups coming together after all the effort they put 
                            in until the day of the fest cannot be looked past.</p>
                        <p id="about1">A 12 year legacy, still burning bright and being passed down 
                            to the coming batches is a standing example of the camaraderie 
                            the students share even between the passing batches. It shows a 
                            great promise in terms of offering a unique experience to students 
                            through a plethora of events that strengthen their technical and 
                            all-round abilities.</p>
                            <AboutLocation>
                                <span class="col-50">
                                    <h3>Where</h3>
                                    <p>KL University, Vijayawada</p>
                                </span>
                                <span class="col-50">
                                    <h3>When</h3>
                                    <p>Oct 21, 2022</p>
                                </span>
                            </AboutLocation><br></br>
                            <HomeNavigateButton route="/register">REGISTER</HomeNavigateButton>
                    </AboutSamyakLeft>
                    <AboutSamyakRight>
                        <img src={image1} alt="1" data-aos="zoom-out" data-aos-duration="500" />
                        <img src={image2} alt="2" data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" />
                    </AboutSamyakRight>
                </AboutSamyak>
                <AboutTheme>
                    <AboutThemeLeft>
                        <img src={image3} alt="3"/>
                    </AboutThemeLeft>
                    <AboutThemeRight>
                        <h1>About Atīndrīya</h1>
                        <p>The “Atīndriya” comes from the idea of bringing the technologies used in Fiction and implementing them wherever possible through various forms of advertising.</p>
                        <p>Fiction is a world without bounds that can be explored endlessly in all the fictitious and non-fictitious aspects that exist.</p>
                        <div class="more-events common">
                            <p onclick="AboutOne()" id="aboutButtonOne">Read More</p>
                        </div>
                        <p id="about2">Not confining solely to the creative components of the real or fictional world alone, this time the theme also focuses on identifying and bringing into limelight all the technical areas that have been explored and that are yet to be explored in the aforementioned areas.</p>
                        <p id="about3">Fiction is a designers’ paradise and an explorers' forte but when induced with the factor that weighs in all of existence, it is much more. We are going to realize them. This make of the fest is expected to reach heights that have never been reached before.</p>
                    </AboutThemeRight>
                </AboutTheme>

                <AboutKLU>
                    <AboutKLULeft>
                        <img src={image4} alt="4" />
                    </AboutKLULeft>
                    <AboutKLURight>
                        <h1>About KL University</h1>
                        <p>A haven of knowledge and an ecstatic learning atmosphere, KL University is one of the most prestigious academic institutions in India with a supreme vision that it manifests in its exceptional operation.</p>
                        <p>Recognized as Deemed to be University in 2009, the foundation achieved immense acclaim for its incredible success in turning students into eminent leaders and industry experts.</p>
                        <p>Not only in the areas pertaining to academics here find an environment that helps them to pursue their passions and flourish in the fields of their interest. With a wide array of opportunities available at their disposal, the student community is engaged in continuously broadening their horizons.</p>
                        <a href="https://goo.gl/maps/8sGwAL2VB6fNCgrz6" target="_blank" rel="noreferrer"><i class="fa fa-map-marker"></i> KL University</a>
                    </AboutKLURight>
                </AboutKLU>
                <NavBarSpace />
            </MainContainer>
            <SamyakFooter />
        </>
    );
};

export default SamyakAbout;