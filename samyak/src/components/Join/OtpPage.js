import styled from "styled-components";
import axiosInstance from "../../axios";
import { useNavigate } from "react-router-dom";

const Heading = styled.h1`
    text-align: center;
    color: honeydew;
`;

const Container = styled.div`
    display: flex;
    flex-flow: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: #333;
`;

const UserInput = styled.div`
    display: flex;
    justify-content: center;
    input {
        margin: 10px;
        height: 35px;
        width: 65px;
        border: none;
        border-radius: 5px;
        text-align: center;
        font-family: arimo;
        font-size: 1.6rem;
        background: #eef2f3;
    }
`;

const OtpButton = styled.button`
    width: 150px;
    height: 40px;
    margin: 25px auto 0px auto;
    font-size: 1.6rem;
    border: none;
    border-radius: 5px;
    letter-spacing: 2px;
    cursor: pointer;
    // background: #616161;  /* fallback for old browsers */
    // background: -webkit-linear-gradient(to right, #9bc5c3, #616161);  /* Chrome 10-25, Safari 5.1-6 */
    // background: linear-gradient(to right, #9bc5c3, #616161); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    & {
        background-image: linear-gradient(45deg,#ffd88b,#ffb41f);
    }
    // background: linear-gradient(45deg, #000, #ffffff);
    &:hover {
        background-image: linear-gradient(45deg,#ffb41f,#ffd88b);
    }
`;

const Holder = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width:1024px) {
        transform: scale(0.8);
    }
`;

const OtpPage = () => {
    const navigate = useNavigate();

    let myuser = localStorage.getItem("user") ? localStorage.getItem("user") : null;
    let username = null;
    if(isNaN(myuser) && myuser !== null && myuser !== undefined && myuser !== "null" && myuser !== "undefined") {
        myuser = JSON.parse(myuser);
        username = myuser.user[1].details.username;
    }
    else {
        window.location.href = "/login";
    }

    const clickEvent = (first, last) => {
        if(first.target.value.length){
            document.getElementById(last).focus();
        }
    };
    const handleSubmit = () => {
        let value = '';
        value += document.getElementById('ist').value + document.getElementById('sec').value + document.getElementById('third').value + document.getElementById('fourth').value + document.getElementById('fifth').value;
        let isValid = true;
        for(let i=0;i<5;i++) {
            // check numberic and null
            if(value[i] === '' || isNaN(parseInt(value[i]))) {
                isValid = false;
            }
        }
        if(!isValid) {
            alert('Please enter valid otp');
        }
        else {
            // send otp to server and check
            axiosInstance.post('../home/verify_otp', {
                    otp: value,
                    username: username,
                    isSports: false
                })
                .then((res) => {
                    if(res.data.status) {
                        let user = localStorage.getItem("user");
                        user = JSON.parse(user);
                        user.user[1].details.isVerified = true;
                        localStorage.setItem("user", JSON.stringify(user));
                        navigate('/profile');
                    }
                    else {
                        alert('You have entered wrong otp');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
    return(
        <>
            <Container>
                <Holder>
                    <Heading>ENTER OTP</Heading>
                    <UserInput>
                        <input type="text" id='ist' maxLength="1" onKeyUp={event => clickEvent(event, 'sec')}/>
                        <input type="text" id="sec" maxlength="1" onKeyUp={event => clickEvent(event, 'third')}/>
                        <input type="text" id="third" maxlength="1" onKeyUp={event => clickEvent(event, 'fourth')}/>
                        <input type="text" id="fourth" maxlength="1" onKeyUp={event => clickEvent(event, 'fifth')}/>
                        <input type="text" id="fifth" maxlength="1"/>
                    </UserInput>
                    <OtpButton onClick={handleSubmit}>CONFIRM</OtpButton>
                </Holder>
            </Container>
        </>
    );
}

export default OtpPage;