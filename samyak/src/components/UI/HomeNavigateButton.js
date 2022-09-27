import styled from "styled-components";

const NavigateButton = styled.div`
    display: flex;
    justify-content: center;;
    a {
        position: relative;
        inset: 1pc 0 2pc 0;
        color: #ffca5f;
        padding: 7px 30px;
        border-radius: 0 10px 0 10px;
        font-weight: 500;
        letter-spacing: .6px;
        border: 2px solid #cf9a2e;
        text-decoration: none;
        background: rgb(0, 0, 0,.1);
        backdrop-filter: blur(2px);
    }
    a:hover {
        color: #000;
        transition: .3s;
        background: #cf9a2e;
    }
`;

const HomeNavigateButton = (props) => {
    return (
        <>
            <NavigateButton>
                <a href="#0">{props.children}</a>
            </NavigateButton>
        </>
    );
}

export default HomeNavigateButton;