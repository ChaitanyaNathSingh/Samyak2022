import styled from 'styled-components';
// import NavBarSpace from '../BaseComponents/NavBarSpace';
// import HomeEvents from './HomeEvents';
import im2020 from './img/0202.png';
import imlayer55 from './img/layer_55.png';
// import CountDown from "./CountDown/CountDown";
const Parallax = styled.div`
    background-color: #FEDCC8;
    perspective: 100px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    position: absolute;
    top: 0;
    left: 50%;
    right: 0;
    bottom: 0;
    margin-left: -1500px;
    z-index: 2;

    // hide scroll bar
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

`

const ParallaxLayer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    img {
        display: block;
        position: absolute;
        bottom: 0;
    }
`;

const ParallaxLayer0 = styled(ParallaxLayer)`
    transform: translateZ(-300px) scale(4);
`;

const ParallaxLayer1 = styled(ParallaxLayer)`
    transform: translateZ(-250px) scale(3.5);
`
const ParallaxLayer2 = styled(ParallaxLayer)`
    transform: translateZ(-200px) scale(3);
`;

const ParallaxLayer3 = styled(ParallaxLayer)`
    transform: translateZ(-150px) scale(2.5);
`;

const ParallaxLayer4 = styled(ParallaxLayer)`
    transform: translateZ(-100px) scale(2);
`;

const ParallaxLayer5 = styled(ParallaxLayer)`
    transform: translateZ(-50px) scale(1.5);
`;

const ParallaxLayer6 = styled(ParallaxLayer)`
    transform: translateZ(0px) scale(1);
`;

const ParallaxLayer7 = styled(ParallaxLayer)`
    transform: translateZ(-400px) scale(5);
    // required mobile view code
`;

const ParallaxCover = styled.div`
    background: #2D112B;
    display: block;
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    right: 0;
    height: 540px;
    z-index: 2;
`;

function Home() {
    return (
        <section>
        <Parallax>
            <ParallaxLayer0>
                <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_0.png?raw=true" alt="img"/>
            </ParallaxLayer0>
            <ParallaxLayer7>
                <img  src={im2020} style = {{ marginLeft : "850px", width: "1300px" }} alt="img"/>
            </ParallaxLayer7>
            <ParallaxLayer1>
                <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true" alt="img"/>
            </ParallaxLayer1>
            <ParallaxLayer2>
                <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true" alt="img"/>
            </ParallaxLayer2>
            <ParallaxLayer3>
                <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true" alt="img"/>
            </ParallaxLayer3>
            <ParallaxLayer4>
                <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true" alt="img"/>
            </ParallaxLayer4>
            <ParallaxLayer5>
                <img src={imlayer55} alt="img"/>
            </ParallaxLayer5>
            <ParallaxLayer6>
                <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true" alt='img'/>
            </ParallaxLayer6>
            <ParallaxCover>
                {/* <CountDown /> */}
            </ParallaxCover>
            {/* <HomeEvents /> */}
        </Parallax>
        {/* <EmptySpace></EmptySpace> */}
        </section>
    )
}

export default Home;