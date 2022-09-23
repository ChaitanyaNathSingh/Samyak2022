import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Heading = styled.h1`
    font-size: 2rem;
    color: white;
`;

const Logos = styled.div`
    display: flex;
    flex-direction: row;
`;

const TheLogo = styled.img`
    width: 50px;
    margin: 30px;
    cursor: pointer;
`;

const SamyakContact = () => {
    return  (
        <>
            <Container className="footer__contact">
                <Heading>CONTACT US</Heading>
                <Logos>
                    <TheLogo src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPGcgaWQ9ImZhY2Vib29rIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE0OTgiIGRhdGEtbmFtZT0iUGF0aCAyMTQ5OCIgZD0iTTI4LjM0NCwwSDEuNjU0QTEuNjU2LDEuNjU2LDAsMCwwLDAsMS42NTZWMjguMzQ1QTEuNjU2LDEuNjU2LDAsMCwwLDEuNjU2LDMwSDI4LjM0NEExLjY1NiwxLjY1NiwwLDAsMCwzMCwyOC4zNDVoMFYxLjY1NUExLjY1NiwxLjY1NiwwLDAsMCwyOC4zNDQsMFptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjNDI2N2IyIi8+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE0OTkiIGRhdGEtbmFtZT0iUGF0aCAyMTQ5OSIgZD0iTTIxNS40NTEsMTAyLjRWOTAuOTc2aDMuODVsLjU3Ny00LjQ3aC00LjQyN1Y4My42NTljMC0xLjI5MS4zNTgtMi4xNzEsMi4yMS0yLjE3MWgyLjM0N1Y3Ny41YTMxLjU0OCwzMS41NDgsMCwwLDAtMy40MzktLjE3NmMtMy40LDAtNS43MzIsMi4wNzctNS43MzIsNS44OTJ2My4yOUgyMDd2NC40N2gzLjgzNlYxMDIuNFptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk0LjcyMyAtNzIuMzk3KSIgZmlsbD0iI2ZmZiIvPg0KICA8L2c+DQo8L3N2Zz4NCg==" alt="facebook" />
                    <TheLogo src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPHBhdGggaWQ9InlvdXR1YmUiIGQ9Ik0xMi41LDExLjY2Nmw2LjY2NiwzLjMyN0wxMi41LDE4LjMzNFpNMzAsNi4yNXYxNy41QTYuMjUsNi4yNSwwLDAsMSwyMy43NSwzMEg2LjI1QTYuMjUxLDYuMjUxLDAsMCwxLDAsMjMuNzVWNi4yNUE2LjI1MSw2LjI1MSwwLDAsMSw2LjI1LDBoMTcuNUE2LjI1LDYuMjUsMCwwLDEsMzAsNi4yNVpNMjUsMTVjLS4wMjUtNS4xNTQtLjQtNy4xMjUtMy42NTQtNy4zNDYtMy0uMjA1LTkuNjkyLS4yLTEyLjY5MSwwQzUuNDA3LDcuODc1LDUuMDI1LDkuODM3LDUsMTVjLjAyNSw1LjE1NC40LDcuMTI1LDMuNjU0LDcuMzQ2LDMsLjIsOS42ODguMiwxMi42OTEsMEMyNC41OTIsMjIuMTI1LDI0Ljk3NSwyMC4xNjIsMjUsMTVaIiBmaWxsPSJyZWQiLz4NCjwvc3ZnPg0K" alt="youtube" />
                    <TheLogo src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPHBhdGggaWQ9ImxpbmtlZElOIiBkPSJNMjMuNzUsMEg2LjI1QTYuMjUxLDYuMjUxLDAsMCwwLDAsNi4yNXYxNy41QTYuMjUxLDYuMjUxLDAsMCwwLDYuMjUsMzBoMTcuNUE2LjI1LDYuMjUsMCwwLDAsMzAsMjMuNzVWNi4yNUE2LjI1LDYuMjUsMCwwLDAsMjMuNzUsMFpNMTAsMjMuNzVINi4yNVYxMEgxMFpNOC4xMjUsOC40MTVBMi4yMDUsMi4yMDUsMCwxLDEsMTAuMzEzLDYuMjEsMi4yLDIuMiwwLDAsMSw4LjEyNSw4LjQxNVpNMjUsMjMuNzVIMjEuMjVWMTYuNzQ1YzAtNC4yMS01LTMuODkxLTUsMFYyMy43NUgxMi41VjEwaDMuNzV2Mi4yMDZDMTcuOTk1LDguOTc0LDI1LDguNzM1LDI1LDE1LjNaIiBmaWxsPSIjMDA3N2I3Ii8+DQo8L3N2Zz4NCg==" alt="linkedin" />
                </Logos>
            </Container>
        </>
    );
}

export default SamyakContact;