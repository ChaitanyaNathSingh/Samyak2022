import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.94;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Heading = styled.h1`
    color: white;
    opacity: 1;
`;

const PleaseWaitPage = (props) => {
    return(
        <>
            <Container>
                {props.message ? <Heading>{props.message}</Heading> : 
                <Heading>Registration Successful..!<br></br>Now sending an OTP<br></br>Please Wait...</Heading> }
            </Container>
        </>
    );
};

export default PleaseWaitPage;