import styled from 'styled-components';

import title3 from './img/SAMYAK_LOGOS/title-3.png';
import tech from './img/SAMYAK_LOGOS/tech.svg';
import nonTech from './img/SAMYAK_LOGOS/non-tech.png';
import literary from './img/SAMYAK_LOGOS/literary.svg';
import spot from './img/SAMYAK_LOGOS/spot.svg';
import { HideScrollBar } from '../UI/HideScrollBar';
import HomeHeading from '../UI/HomeHeading';

const HomeFest = styled(HideScrollBar)`
    margin-top: 3pc;
    width: 100%;
    overflow: auto;
`;  
const HomeFestImage = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 240px;
    }
    @media only screen and (max-width:1024px) {
        img {
            width: 40vw;
        }
    }
`;
const HomeFestData = styled(HideScrollBar)`
    height: auto;
    overflow: auto;
    padding: 20px;
    margin-bottom: 50px;
    white-space: nowrap;
    width: 100vw;
    overflow-x: auto;
`;
const HomeFestBox = styled.div`
    width: 400px;
    min-height: 520px;
    text-align: center;
    display: inline-block;
    border-radius: 5px;
    background: rgb(0, 0, 0,.1);
    backdrop-filter: blur(2px);
    border: 2px solid #cf9a2e;
    img {
        width: 100%;
        height: 300px;
        opacity: 1;
        padding: 2pc 4pc;
    }
    img:hover {
        padding: 1pc 3pc;
        transition: .3s;
    }
    &:nth-child(2), &:nth-child(3), &:nth-child(4) {
        margin-left: 20px;
    }
`;
const HomeFestBoxData = styled.div`
    h2 {
        font-weight: 600;
        color: #cf9a2e;
        letter-spacing: 1px;

        font-size: 21px;    
    }
    p {
        color: #fff;
        margin-top: 15px;
        line-height: 25px;

        font-size: 14px;
        line-height: 24px;
    }
`;

const SamyakEvents = () => {
    return (
        <>
            <HomeFest>
                <HomeFestImage>
                    <img src={title3} alt="" />
                </HomeFestImage><br></br>
                <HomeHeading>NATIONAL LEVEL TECHNO MANAGEMENT FEST</HomeHeading>
                <HomeFestData>
                    <HomeFestBox>
                        <img src={tech} alt="events" />
                        <HomeFestBoxData>
                            <h2>TECHNICAL EVENTS</h2>
                            <p>Technical events are filled with fun, and these<br></br>events are 
                            designed in a new way for the<br></br>participants to participate 
                            in these events and to<br></br>learn something new in every event 
                            and bag a<br></br>lot of exciting prizes and take them home.</p>
                        </HomeFestBoxData>
                    </HomeFestBox>
                    <HomeFestBox>
                        <img src={nonTech} alt="events" />
                        <HomeFestBoxData>
                            <h2>NON TECHNICAL EVENTS</h2>
                            <p>Non-technical events are known for the fun the<br></br>participants have while participating in these<br></br>events. These events are designed in such a<br></br>distinct way to refresh the minds of all the<br></br>participants to give them a fresh experience.</p>
                        </HomeFestBoxData>
                    </HomeFestBox>
                    <HomeFestBox>
                        <img src={literary} alt="events" />
                        <HomeFestBoxData>
                            <h2>LITERARY EVENTS</h2>
                            <p style={{'padding': '5px'}}>These events showcase the brilliance of students<br></br>in every regard, by shedding light on the myriad<br></br>walks of learning they find their interests firmly<br></br>engrossed in. Calling for a quest for their<br></br>marvelous talents.</p>
                        </HomeFestBoxData>
                    </HomeFestBox>
                    <HomeFestBox>
                        <img src={spot} alt="events" />
                        <HomeFestBoxData>
                            <h2>SPOT EVENTS</h2>
                            <p>The power of finding ground in one of the most<br></br>challenging abilities is confined to not many<br></br>individuals, which makes the celebration of this<br></br>glorious gift all the more gratifying. Participants<br></br>get an opportunity to exhibit their athleticism.</p>
                        </HomeFestBoxData>
                    </HomeFestBox>
                </HomeFestData>
            </HomeFest>
        </>
    );
}

export default SamyakEvents;