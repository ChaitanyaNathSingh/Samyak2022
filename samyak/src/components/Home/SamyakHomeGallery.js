import styled from 'styled-components';
import Marquee from "react-fast-marquee";
import Gallery1 from './img/Gallery/gallery-1.JPG';
import Gallery2 from './img/Gallery/gallery-2.JPG';
import Gallery3 from './img/Gallery/gallery-3.JPG';
import Gallery4 from './img/Gallery/gallery-10.JPG';
import Gallery5 from './img/Gallery/gallery-5.JPG';
import Gallery6 from './img/Gallery/gallery-6.JPG';
import Gallery7 from './img/Gallery/gallery-7.JPG';
import Gallery8 from './img/Gallery/gallery-8.JPG';
import Gallery9 from './img/Gallery/gallery-9.JPG';
import HomeNavigateButton from '../UI/HomeNavigateButton';
import HomeHeading from '../UI/HomeHeading';

const HomeGallery = styled.div`
    margin-top: 3pc;
`;
const HomeGalleryData = styled.div`
    marquee img {
        width: 400px;
        height: 250px;
        margin-left: 20px;
        border-radius: 10px;
        border: 2px solid #ffca5f;
    }
    @media only screen and (max-width:1024px) {
        marquee img {
            height: 200px;
            width: 300px;
        }
    }
`;
const HomeYoutube = styled.div`
    width: auto;
    height: auto;
    margin-top: 3pc;

    display: flex;
    justify-content: space-evenly;
    iframe {
        width: 70%;
        height: 500px;
        margin: auto;
        border-radius: 15px;
        border: 2px solid #838383;
    }
    @media only screen and (max-width:1024px) {
        iframe {
            width: 95%;
            height: 220px;
        }
    }
`;

const MarqeeStyle = styled(Marquee)`
    width: 100vw;
    height; 200px;
    img {
        width: 400px;
        height: 250px;
        margin-left: 20px;
        border-radius: 10px;
        border: 2px solid #ffca5f;
    }
`;

const SamyakHomeGallery = () => {
    return (
        <>
            <HomeGallery class="home-gallery">
                <HomeHeading>GALLERY</HomeHeading>
                <HomeGalleryData>
                    <MarqeeStyle speed={50} behavior="scroll" direction="left" scrollamount="8">
                        <img src={Gallery1} alt="gallery" />
                        <img src={Gallery2} alt="gallery" />
                        <img src={Gallery3} alt="gallery" />
                        <img src={Gallery4} alt="gallery" />
                        <img src={Gallery5} alt="gallery" />
                        <img src={Gallery6} alt="gallery" />
                        <img src={Gallery7} alt="gallery" />
                        <img src={Gallery8} alt="gallery" />
                        <img src={Gallery9} alt="gallery" />
                    </MarqeeStyle>
                </HomeGalleryData>
                <HomeNavigateButton>More Images</HomeNavigateButton>
                <HomeYoutube>
                    <iframe src="https://www.youtube.com/embed/v4uoIGEPmvs?&autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&rel=0&amp;" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </HomeYoutube>
                <br></br><br></br>
            </HomeGallery>
        </>
    );
}

export default SamyakHomeGallery;