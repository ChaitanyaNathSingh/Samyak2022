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

const TheLogo = styled.img`
    width: 50px;
    margin: 20px;
    color: white;
`;

const EmailText = styled.span`
    color: white;
    font-size: 2rem;
`;

const SamyakEmail = () => {
    return (
        <>
            <Container className="footer__email">
                <Heading>EMAIL US</Heading>
                <EmailText><TheLogo src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyMy42NjUiIHZpZXdCb3g9IjAgMCAyNyAyMy42NjUiPg0KICA8ZyBpZD0ibWVzc2FnZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzEuNjIyKSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE1MDMiIGRhdGEtbmFtZT0iUGF0aCAyMTUwMyIgZD0iTTE4LjY3LDMxLjYyMkgzLjA1M0EzLjA1NywzLjA1NywwLDAsMCwwLDM0LjY3NVY0OC4zNkEuNzkyLjc5MiwwLDAsMCwxLjI1LDQ5TDUuNiw0NS45YTIuMTI5LDIuMTI5LDAsMCwxLDEuMjQyLS40aDkuNTY1YTMuMDU3LDMuMDU3LDAsMCwwLDMuMDUzLTMuMDUzVjMyLjQxM0EuNzkxLjc5MSwwLDAsMCwxOC42NywzMS42MjJaTTE0LjgyNyw0MS4ySDUuNjg4YS43OTEuNzkxLDAsMSwxLDAtMS41ODJoOS4xMzlhLjc5MS43OTEsMCwxLDEsMCwxLjU4MlptMC0zLjY5MUg1LjY4OGEuNzkxLjc5MSwwLDEsMSwwLTEuNTgyaDkuMTM5YS43OTEuNzkxLDAsMSwxLDAsMS41ODJaIiBmaWxsPSIjNDI0MjQyIi8+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE1MDQiIGRhdGEtbmFtZT0iUGF0aCAyMTUwNCIgZD0iTTE2Mi40MzEsMTUxLjAxNlYxNjQuN2EuNzkyLjc5MiwwLDAsMS0xLjI1LjY0NGwtNC4zNDktMy4xYTIuMTI5LDIuMTI5LDAsMCwwLTEuMjQyLS40aC05LjU2NWEzLjA1NywzLjA1NywwLDAsMS0zLjA1My0zLjA1NHYtMS41aDguODY4YTQuNjQsNC42NCwwLDAsMCw0LjYzNS00LjYzNXYtNC42OTNoMi45QTMuMDU3LDMuMDU3LDAsMCwxLDE2Mi40MzEsMTUxLjAxNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzUuNDMxIC0xMTAuMjA1KSIgZmlsbD0iIzQyNDI0MiIvPg0KICA8L2c+DQo8L3N2Zz4NCg==" alt="email" />samyak@kluniversity.in</EmailText>
                <EmailText><TheLogo src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyMy42NjUiIHZpZXdCb3g9IjAgMCAyNyAyMy42NjUiPg0KICA8ZyBpZD0ibWVzc2FnZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzEuNjIyKSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE1MDMiIGRhdGEtbmFtZT0iUGF0aCAyMTUwMyIgZD0iTTE4LjY3LDMxLjYyMkgzLjA1M0EzLjA1NywzLjA1NywwLDAsMCwwLDM0LjY3NVY0OC4zNkEuNzkyLjc5MiwwLDAsMCwxLjI1LDQ5TDUuNiw0NS45YTIuMTI5LDIuMTI5LDAsMCwxLDEuMjQyLS40aDkuNTY1YTMuMDU3LDMuMDU3LDAsMCwwLDMuMDUzLTMuMDUzVjMyLjQxM0EuNzkxLjc5MSwwLDAsMCwxOC42NywzMS42MjJaTTE0LjgyNyw0MS4ySDUuNjg4YS43OTEuNzkxLDAsMSwxLDAtMS41ODJoOS4xMzlhLjc5MS43OTEsMCwxLDEsMCwxLjU4MlptMC0zLjY5MUg1LjY4OGEuNzkxLjc5MSwwLDEsMSwwLTEuNTgyaDkuMTM5YS43OTEuNzkxLDAsMSwxLDAsMS41ODJaIiBmaWxsPSIjNDI0MjQyIi8+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE1MDQiIGRhdGEtbmFtZT0iUGF0aCAyMTUwNCIgZD0iTTE2Mi40MzEsMTUxLjAxNlYxNjQuN2EuNzkyLjc5MiwwLDAsMS0xLjI1LjY0NGwtNC4zNDktMy4xYTIuMTI5LDIuMTI5LDAsMCwwLTEuMjQyLS40aC05LjU2NWEzLjA1NywzLjA1NywwLDAsMS0zLjA1My0zLjA1NHYtMS41aDguODY4YTQuNjQsNC42NCwwLDAsMCw0LjYzNS00LjYzNXYtNC42OTNoMi45QTMuMDU3LDMuMDU3LDAsMCwxLDE2Mi40MzEsMTUxLjAxNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzUuNDMxIC0xMTAuMjA1KSIgZmlsbD0iIzQyNDI0MiIvPg0KICA8L2c+DQo8L3N2Zz4NCg==" alt="email" />info.samyak@kluniversity.in</EmailText>
            </Container>
        </>
    );
}

export default SamyakEmail;