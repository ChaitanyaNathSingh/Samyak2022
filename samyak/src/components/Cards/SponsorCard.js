import styled from "styled-components";
const SponsorCard = (props) => {
    const Card = styled.div`
        width: 300px;
        height: 300px;
        // border: 2px solid black;
        margin: 40px 50px;  
        display: flex;
        align-items: center;
        img {
            width: 100%;
            object-fix: contain;
        }
    `;  
    return(
        <>
            <Card>
                <img alt={props.logo.name} src={props.logo.src} />
            </Card>
        </>
    );
}

export default SponsorCard;