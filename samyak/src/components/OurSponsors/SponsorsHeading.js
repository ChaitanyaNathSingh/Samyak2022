import styled from "styled-components";

const Heading = styled.h1`
    font-size: 3.5rem;
    text-align: center;
    margin: 30px 24px;
    font-weight: 600;
    // border: 2px solid #000000;
    color: white;
`;
// const Row = styled.div`
//     display: flex;
// 	flex-wrap: wrap;
//     width: 100%;
// `;

// const SectionTitle = styled.div`
//     flex-basis: 100%;
// 	max-width: 100%;
// 	margin-bottom: 70px;
//     color: white;
//     h1{
//         font-size: 40px;
//         text-align: center;
//         margin:0;
//         color: #ffffff;
//         font-weight: 700;
//     }
//     p{
//         font-size:16px;
//         text-align: center;
//         margin:15px 0 0;
//         color:#ffffff;
//     }
// `;
const SponsorsHeading = () => {
    return(
        <>
            <Heading>Our Sponsors and Collaborators!</Heading>
            {/* <Row><SectionTitle>Our Sponsors and Collaborators!</SectionTitle></Row> */}
        </>
    );
}

export default SponsorsHeading;