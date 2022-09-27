import NavBarSpace from "../BaseComponents/NavBarSpace";
import SponsorsHeading from "./SponsorsHeading";
import SponsorLogos from "./SponsorLogos";
import styled from "styled-components";

import image1 from './logos/BMW.jfif';
import image2 from './logos/REDBULL.jpg';
// import image3 from './logos/KTM.png';
// import image4 from './logos/NEXA.jpg';
import wefelix from './logos/Wefelix.jpeg';
import SamyakFooter from "../BaseComponents/Footer/SamyakFooter";

const SponsorsBackground = styled.div`
    // grey color
    background-color: rgb(40, 40, 43);
    min-height: 600px;
`;
const OurSponsors = () => {
    const logos = [
        {
            name: "BMW MOTORRAD",
            src: image1,
        }, 
        {
            name: "REDBULL",
            src: image2,
        }, 
        {
            name: "Wefelix",
            src: wefelix,
        }
    ];
    return (
        <>
            <SponsorsBackground>
                <NavBarSpace />
                <SponsorsHeading />
                <SponsorLogos logos={logos}/>
            </SponsorsBackground>
            <SamyakFooter />
        </>
    )
}

export default OurSponsors;