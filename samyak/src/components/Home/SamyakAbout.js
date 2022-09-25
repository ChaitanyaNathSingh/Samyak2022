import styled from 'styled-components';
import Logo from './img/SAMYAK_LOGOS/Logo.png';

const HomeEventsHeading = styled.div`
    width: 100vw;
    h1 {
        color: #cf9a2e;
        font-weight: 700;
        margin-top: -20px;
        letter-spacing: 2px;
    }p {
        color: #fff;
        width: 100vw;
        border: 2px solid green;
        margin: auto;
        padding: 5px 10px;
        font-weight: 400;
        letter-spacing: .6px;
        text-align: center;
        font-size: 18px;
        line-height: 30px;
        background: rgb(0, 0, 0,.1);
        backdrop-filter: blur(2px);
    }
    span img {
        width: 160px;
        height: auto;
    }
    span {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media only screen and (max-width: 1024px) {
        width: 100vw;
        h1 {
            font-size: 4vw;
            text-align: center;
            margin-top: -10px;
        }
        span img {
            width: 100px;
        }
    }
`;
const HomeSamyakData = styled.div`
    width: 95vw;
    padding: 7px;
    text-align: center;
    background: rgb(0, 0, 0,.1);
    backdrop-filter: blur(2px);
    margin: 0;
    margin: auto;
    a {
        position: relative;
        inset: 1pc 0 2pc 0;
        color: #ffca5f;
        padding: 7px 30px;
        border-radius: 0 10px 0 10px;
        font-weight: 500;
        letter-spacing: .6px;
        border: 2px solid #cf9a2e;
        text-decoration: none;
        background: rgb(0, 0, 0,.1);
        backdrop-filter: blur(2px);
    }
    a:hover {
        color: #000;
        transition: .3s;
        background: #cf9a2e;
    }   
    p {
        color: #fff;
        line-height: 25px;
        letter-spacing: .6px;
        font-size: 14px;
        line-height: 24px;
    }
`;

const SamyakAbout = () => {
    return (
        <>
            <div class="home-samyak">
                <HomeEventsHeading>
                    <span>
                        <img src={Logo} alt="" />
                        <h1>ABOUT SAMYAK</h1>
                        <img src={Logo} alt="" />
                    </span>
                </HomeEventsHeading>
                <HomeSamyakData>
                    <p>SAMYAK is a national-level techno-management fest organized by the students of KL University. It is a two- day festival filled with activities, events, workshops, and student performances that drive the students to experience the joy in being part of a synergy.The colours popping throughout, the theme-relevant artworks designed from scratch by the student teams, the elegance in student groups coming together after all the effort they put in until the day of the fest cannot be looked past.</p>
                </HomeSamyakData><br></br><br></br>
                <HomeEventsHeading>
                    <span>
                        <img src={Logo} alt="" />
                        <h1>ABOUT Atīndrīya - THE COSMIC CON</h1>
                        <img src={Logo} alt="" />
                    </span>
                </HomeEventsHeading>
                <HomeSamyakData>
                    <p>The “Atīndriya” comes from the idea of bringing the technologies used in Fiction and implementing them wherever possible through various forms of advertising. Fiction is a world without bounds that can be explored endlessly in all the fictitious and non-fictitious aspects that exist.Not confining solely to the creative components of the real or fictional world alone, this time the theme also focuses on identifying and bringing into limelight all the technical areas that have been explored and that are yet to be explored in the aforementioned areas.</p><br></br>
                    <a href="#0">Read More</a>
                </HomeSamyakData>
                <br></br><br></br>
            </div>
        </>
    );
}

export default SamyakAbout;