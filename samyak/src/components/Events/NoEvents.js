import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    h1 {
        color: white;
    }
    @media (max-width: 768px) {
        h1 {
            font-size: 1.5rem;
            text-align: center;
            color: white;
        }
    }
`;

const NoEvents = () => {
    return (
        <>
            <Container>
                <h1>No Events Found with that Combination!!</h1>
            </Container>
        </>
    );
};

export default NoEvents;