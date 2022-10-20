import styled from "styled-components";
import HomeHeading from "../UI/HomeHeading";

const HomeMap = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;

    display: flex;
    justify-content: space-evenly;

    @media only screen and (max-width:1024px) {
        flex-direction: column;
    }
`;

const MapData = styled.div`
    width: 40%;
    iframe {
        width: 100%;
        height: 350px;
        border-radius: 5px;
        height: 320px;
    }
    @media only screen and (max-width:1024px) {
        width: 100%;
        iframe {
            height: 230px;
        }
    }
`;
const MapBox = styled.div`
    padding: 5px 20px;
    width: 45%;
    backdrop-filter: blur(2px);
    background: rgb(0, 0, 0,.2);
    border-top: 2px solid #ffca5f;
    border-bottom: 2px solid #ffca5f;
    h2 {
        color: #fff;
        font-weight: 600;
        letter-spacing: 1px;
    }
    p {
        color: #fff;
        line-height: 25px;
        letter-spacing: .6px;
        margin-top: 20px;  
        text-align: justify;
        text-justify: inter-word; 
    }
    @media only screen and (max-width:1024px) {
        width: 100%;
        padding: 0;
        margin-top: 20px;
        h2 {
            font-size: 21px;
        }
        p {
            font-size: 14px;
            line-height: 24px;
        }
    }
`;

const SamyakAboutKL = () => {
    return (
        <>
            <HomeHeading>ABOUT KL UNIVERSITY</HomeHeading>
            <HomeMap>
                <MapData>
                    <iframe title="SamyakLogo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6631458656584!2d80.62040591486335!3d16.441925688651654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a7d81943%3A0x8ba5d78f65df94b8!2sK%20L%20Deemed%20To%20Be%20University!5e0!3m2!1sen!2sin!4v1663973454915!5m2!1sen!2sin" style={{'border': '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </MapData>
                <MapBox>
                    <h2>KL University</h2>
                    <p>A haven of knowledge and an ecstatic learning atmosphere, KL University is one of the most prestigious academic institutions in India with a supreme vision that it manifests in its exceptional operation. Recognized as Deemed to be University in 2009, the foundation achieved immense acclaim for its incredible success in turning students into eminent leaders and industry experts. Not only in the areas pertaining to academics here find an environment that helps them to pursue their passions and flourish in the fields of their interest. With a wide array of opportunities available at their disposal, the student community is engaged in continuously broadening their horizons.</p>
                </MapBox>
            </HomeMap>
            <br></br><br></br>
        </>
    );
}

export default SamyakAboutKL;