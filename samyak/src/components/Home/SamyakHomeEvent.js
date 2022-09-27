import styled from 'styled-components';
import HomeNavigateButton from '../UI/HomeNavigateButton';
import Edificio from './img/Events/EDIFICIO.jpg';
// import FortuneSeeker from './img/Events/Fortune Seeker.jpg';
import csgo from './img/Events/csgo.jpg';
import bgmi from './img/Events/bgmi.jpg';
import guessthesong from './img/Events/guessthesong.jpg';
import { HideScrollBar } from '../UI/HideScrollBar';
import HomeHeading from '../UI/HomeHeading';

const HomeEvents = styled.div`
    margin-top: 3pc;
`;
const HomeEventsData = styled(HideScrollBar)`
    height: auto;
    overflow: auto;
    padding: 20px;
    white-space: nowrap;
    width: 100vw;
`;
const HomeEventsBox = styled.div`
    width: 400px;
    padding: 20px;
    margin: 10px;
    display: inline-block;
    min-height: 570px;
    border-radius: 3px;
    text-align: center;
    animation: border 3s linear infinite alternate;
    border: 2px solid #ffcd6a;
    background: rgb(0, 0, 0,.1);
    backdrop-filter: blur(2px);
    img {
        width: 100%;
        height: auto;
    }
    img:hover {
        opacity: .7;
        transition: .3s;
    }
    h2 {
        color: #ffcd6a;
        margin-top: 10px;
        letter-spacing: 1px;
    }
    p {
        color: #fff;
        margin-top: 5px;
        line-height: 25px;
    }
    a {
        position: relative;
        top: 15px;
        font-weight: 500;
        color: #000000;
        padding: 5px 30px;
        font-size: 18px;
        border-radius: 4px;
        text-decoration: none;
        /* border: 2px solid #cf9a2e; */
        background: linear-gradient(to right,#ffca5f,#cf9a2e);
    }
    @media only screen and (max-width: 1024px) {
        width: 340px;
        min-height: 450px;
        h2 {
            font-size: 21px;
        }
        p {
            font-size: 14px;
            line-height: 24px;
        }
        img {
            width: 250px;
        }
    }
`;

const SamyakHomeEvent = () => {
    return (
        <>
            <HomeEvents>
                <HomeHeading>EVENTS</HomeHeading>
                <HomeEventsData>
                    <HomeEventsBox data-aos="zoom-out" data-aos-duration="500" data-aos-delay="600">
                        <img src={csgo} alt="csgo" />
                        <h2>CSGO</h2>
                        <p>Take this opportunity of winning a humongous <br></br>cash prize by showcasing your skills in <br></br>CS: GO and make sure to grab the first three places.</p>
                        <a href="#0">Open</a>
                    </HomeEventsBox>
                    <HomeEventsBox>
                        <img src={bgmi} alt="bgmi" />
                        <h2>BGMI</h2>
                        <p>Play and compete with other fantabulous <br></br>players to claim the Crown and win a wholesome <br></br>amount of cash prize.</p>
                        <a href="#0">Open</a>
                    </HomeEventsBox>
                    <HomeEventsBox data-aos="zoom-out" data-aos-duration="500">
                        <img src={Edificio} alt="event" />
                        <h2>EDIFICIO</h2>
                        <p>It is a platform for all Civil Engineering students<br></br> to exhibit Model/Prototype. Show your skills with<br></br> the best in your specialization.</p>
                        <a href="#0">Open</a>
                    </HomeEventsBox>
                    <HomeEventsBox data-aos="zoom-out" data-aos-duration="500" data-aos-delay="400">
                        <img src={guessthesong} alt="event" />
                        <h2>GUESS THE SONG</h2>
                        <p>We will play a 10seconds tracks of a particular song. <br></br>The participant should identify the name of the <br></br>song by listening the 10seconds bite</p>
                        <a href="#0">Open</a>
                    </HomeEventsBox>
                </HomeEventsData>
                <HomeNavigateButton route="/events">View More Events</HomeNavigateButton>
            </HomeEvents>
        </>
    )
}

export default SamyakHomeEvent;