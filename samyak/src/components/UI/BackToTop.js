import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: #cf9a2e;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 111;
    &:hover {
        background-color: #ffca5f;
    }
    background: linear-gradient(to right,#ffca5f,#cf9a2e);
`;
const BackToTop = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        let value = window.scrollY;
        if (value > 800) {
            document.getElementById("back-to-top").style.display = "flex";
        }
        else {
            document.getElementById("back-to-top").style.display = "none";
        }
    }, []);
    window.addEventListener("scroll", () => {
        let value = window.scrollY;
        if (value > 800) {
            document.getElementById("back-to-top").style.display = "flex";
        }
        else {
            document.getElementById("back-to-top").style.display = "none";
        }
    });
    return(
        <>
            <Container id="back-to-top" onClick={handleClick}>
                <i className="fas fa-arrow-up"></i>
            </Container>
        </>
    );
};

export default BackToTop;