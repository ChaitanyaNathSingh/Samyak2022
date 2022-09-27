import styled from "styled-components";

const TheHeading = styled.div`
width: 100vw;
h1 {
    color: #cf9a2e;
    font-weight: 700;
    margin-top: -20px;
    letter-spacing: 2px;
    text-align: center;
    margin-top: -10px;

    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
span {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media only screen and (max-width: 1024px) {
    width: 100vw;
    h1 {
        font-size: 6vw;
        text-align: center;
        margin-top: -10px;
    }
}
`;

const HomeHeading = (props) => {
    return(
        <>
            <TheHeading>
                <span>
                    <h1>{props.children}</h1>
                </span>
            </TheHeading>
        </>
    );
}

export default HomeHeading;