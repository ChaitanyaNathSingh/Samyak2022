import styled from "styled-components";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import { Link } from "react-router-dom";

const Container = styled.div`
    background-color: #232323;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .holder {
        margin-top: -80px;
        width: 300px;
        text-align: center;
    }
    div a {
        margin: 20px;
    }
    .link {
        margin: 20px;
        font-size: 26px;
    }
`;



const LearnathonHome = () => {
    return (
        <>
            <Container>
            <NavBarSpace />
            <div className="holder">
                <div>
                <Link className="link" to="/y21sdp1attendanceform">Attendance Form</Link>
                </div>
                <br></br><br></br>
                <div>
                <Link className="link" to="/y21sdp1rubricform">Rubric Form</Link>
                </div>
            </div>
            </Container>
        </>
    );
}

export default LearnathonHome;