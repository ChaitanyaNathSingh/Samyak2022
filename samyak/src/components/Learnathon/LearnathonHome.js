import styled from "styled-components";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { SubmitButton } from "../Join/JoinInterface";

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


const Status = styled.span`
    color: #cf9a2e;
    font-size: 15px;
`


const LearnathonHome = () => {
    let navigate = useNavigate();
    let empid = null;
    let name = null;
    useEffect(() => {
        const emp = localStorage.getItem("emp") ? JSON.parse(localStorage.getItem("emp")) : null;
        if(emp === null || emp === undefined || emp === "" || emp === "null" || emp === "undefined") {
            navigate("/y21learnathon");
        }
    }, [navigate]);
    let user = localStorage.getItem("emp") ? JSON.parse(localStorage.getItem("emp")) : null;
    if(user !== null && user !== undefined && user !== "" && user !== "null" && user !== "undefined") {
        empid = user.emp[1].details.empid;
        name = user.emp[1].details.name;
    }
    return (
        <>
            <Container>
            <NavBarSpace />
            <div className="holder">
                <div>
                    <Status>Logged In with</Status><br></br>
                    <Status>ID: {empid}</Status>  <br></br>
                    <Status>Name: {name}</Status>
                </div><br></br><br></br>
                <div>
                <Link className="link" to="/y21sdp1attendanceform">Attendance Form</Link>
                </div>
                <br></br><br></br>
                <div>
                <Link className="link" to="/y21sdp1rubricform">Rubric Form</Link>
                </div><br></br>
                <SubmitButton type={"button"} onClick={() => {
                    localStorage.removeItem("emp");
                    navigate("/y21learnathon");
                }} value="Logout" />
            </div>
            </Container>
        </>
    );
}

export default LearnathonHome;