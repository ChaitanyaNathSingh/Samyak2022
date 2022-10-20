import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axiosInstance from "../../axios";
import SamyakFooter from "../BaseComponents/Footer/SamyakFooter";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import background_bg from './img/background_bg1.png';


const Container = styled.div`
    background-color: transparent;
    width: 100%:
    min-height: 100vh;
    color: white;
`;
const Img = styled.img`
    position: fixed; 
    object-fit: cover;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    top: 0;
    left: 0;
    z-index: -1;
    margin: -5px -5px -5px -5px;
    filter: blur(5px);
`;



const MainContainer = styled.div`
    position: relative;
    height: auto;
    // background-color: rgb(40,40,43);
    width: 100%;
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

const Instruction = styled.div`
    margin: 0.5pc 0;
`;

const EventDescription = (props) => {
    const params = useParams();
    const defaultEvent = {
        name: "loading...",
        description: "loading...",
        event_image: "https://cdn-icons-png.flaticon.com/512/40/40471.png?w=740&t=st=1666258008~exp=1666258608~hmac=6ea70341f5437645fae12fa9ec6bd46113ab6b801f9d4ff5aff651fc8dd95202",
        event_type: "loading...",
        department: "loading...",
        guidelines: ["loading..."],
    }
    const [eventData, setEventData] = useState(defaultEvent);
    useEffect(() => {
        window.scrollTo(0, 0);
        axiosInstance
            .get("../home/event/event_name", {
                params: {
                    name: params.eventId,
                }
            })
            .then(res => {
                if(!res.data.status)
                    window.location.href = "/events";
                let instructions = res.data.data.guidelines.split("/");
                res.data.data.guidelines = instructions;
                setEventData(res.data.data);
            })
            .catch(err => console.log(err));
    }, []);
    return(
        <>
            <Container>
                <Img src={background_bg} alt="event" />
                <NavBarSpace />
                <MainContainer>
                    <AboutTheme>
                        <AboutThemeLeft>
                            <img src={eventData.event_image} alt="3"/>
                        </AboutThemeLeft>
                        <AboutThemeRight>
                            <h1>{eventData.name}</h1>
                            <p>{eventData.description}</p>
                            <p>Department: {eventData.department}</p>
                            <div>Instructions: <br></br>
                                {eventData.guidelines.map((instruction, index) => {
                                    return <Instruction key={index}>{instruction}</Instruction>
                                })}
                            </div>
                            {/* <p>Fiction is a world without bounds that can be explored endlessly in all the fictitious and non-fictitious aspects that exist.</p>
                            <p id="about2">Not confining solely to the creative components of the real or fictional world alone, this time the theme also focuses on identifying and bringing into limelight all the technical areas that have been explored and that are yet to be explored in the aforementioned areas.</p>
                            <p id="about3">Fiction is a designers’ paradise and an explorers' forte but when induced with the factor that weighs in all of existence, it is much more. We are going to realize them. This make of the fest is expected to reach heights that have never been reached before.</p> */}
                        </AboutThemeRight>
                    </AboutTheme>

                    {/* <AboutKLU>
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
                    </AboutKLU> */}
                    <NavBarSpace />
                </MainContainer>

            </Container>
            <SamyakFooter />
        </>
    );
}

export default EventDescription;