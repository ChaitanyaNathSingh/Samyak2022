import styled from "styled-components";

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #28282b;
`;

const EventLoader = () => {
    return(
        <>
            <Loader>
                <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading..." />
            </Loader>
        </>
    );
};

export default EventLoader;