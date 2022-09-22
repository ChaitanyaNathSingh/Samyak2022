import SponsorCard from "../Cards/SponsorCard";
import styled from "styled-components";
const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const SponsorLogos = (props) => {
    return(
        <>
            <LogoContainer>
                {/**iterate through each card with map */}
                {props.logos.map((logo) => {
                    return <SponsorCard logo={logo} /> }
                )}
            </LogoContainer>
        </>
    ); 
}

export default SponsorLogos;