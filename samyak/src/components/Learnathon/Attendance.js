import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import BaseInput from "../UI/BaseInput";
import { SubmitButton } from "../Join/JoinInterface";
import emailjs from '@emailjs/browser';
import axiosInstance from "../../axios";
import PleaseWaitPage from "../Join/PleaseWaitPage";

const Container = styled.div`
    background-color: #232323;
    min-height: 100vh;
    width: 100%;
    margin:0;
    padding: 0;
    color: white;
    text-align: center;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    h1 {
        margin-top: 0;
    }
`;

const Fields = styled.div`
    text-align: left;
    width: 354px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;


// let generatedOtp = null;
let empid = null;
let klumailid = null;
const Attendance = () => {
    // let empObject = localStorage.getItem("emp");
    // console.log(empObject);
    // if(empObject !== null && empObject !== undefined && empObject !== "" && empObject !== "null" && empObject !== "undefined" && empObject !== " ")
    //     window.location.href = "/y21sdp1attendanceform";

    const [isWaitingForOtp, setIsWaitingForOtp] = useState(false)
    const handleMailId = (e) => {
        e.preventDefault();
        empid = e.target.empid.value
        klumailid = e.target.klumailid.value
        if(empid.length === 0 || klumailid.length === 0) {
            alert("Please fill all the fields")
            return
        }
        // else if(!klumailid.endsWith("@kluniversity.in")) {
        //     alert("Please enter a valid KLU mail id")
        //     return
        // }

        let sendOtpButton = document.getElementById("sendotp");
        sendOtpButton.disabled = true;
        sendOtpButton.value = "Sending...";
        axiosInstance
            .post("../home/faculty-learnathon-register", {
                empid: empid,
                klumailid: klumailid,
            })
            .then(res => {
                if(res.data.status) {
                    localStorage.setItem('emp', JSON.stringify(res.data.emp));
                    setIsWaitingForOtp(true);
                    let form = {
                        from_name: 'samyak',
                        message: `Your OTP for SDP Review is ${res.data.otp}`,
                        to_email: klumailid
                    }
                    emailjs.send('service_a5xt44n', 'template_s9uwvhg', form, 'SRbHPun0G_wQLdZu_')
                        .then((result) => {
                            window.location.href = '/faculty-otp';
                        }, (error) => {
                            console.log(error.text);
                        });
                }
            })
            .catch(err => {
                console.log(err)
                sendOtpButton.disabled = false;
                sendOtpButton.value = "Send OTP";
            });
        // generatedOtp = Math.floor(100000 + Math.random() * 900000)
        // const sendOtpButton = document.getElementById("sendotp");
        // sendOtpButton.disabled = true;
        // sendOtpButton.style.backgroundColor = "#232323";
        // sendOtpButton.value = "Sending...";
        // let form = {
        //     from_name: 'samyak',
        //     message: `Your OTP for SDP Review is ${generatedOtp}`,
        //     to_email: klumailid
        // }
        // emailjs.send('service_a5xt44n', 'template_s9uwvhg', form, 'SRbHPun0G_wQLdZu_')
        //     .then((result) => {
        //         setIsOtpFieldVisible(true);
        //         sendOtpButton.value = "Sent";
        //     }, (error) => {
        //         console.log(error.text);
        //         sendOtpButton.disabled = false;
        //         sendOtpButton.style.backgroundColor = "#ff0000";
        //         sendOtpButton.value = "Send OTP";
        //     });
    }

    return (
        <>
            {isWaitingForOtp ? <PleaseWaitPage message="Please wait while we send you the OTP..." /> : null}
            <Container>
                <NavBarSpace />
                <h1>SDP1 Learnathon</h1>
                <Fields>
                    <Form onSubmit={handleMailId}>
                        <BaseInput type="text" name="empid" id="empid" label="Employee ID" />
                        <BaseInput type="text" name="klumailid" id="klumailid" label="KLU Mail ID" />
                        <SubmitButton type="submit" name="submit" id="sendotp" value="Send OTP" />
                        <br></br>
                        <p>
                            Already LoggedIn?
                        </p>
                        <p>
                            Go to <Link to={"/y21sdp1attendanceform"}>Attendance Form</Link> or
                        </p>
                        <p>
                            Go to <Link to={"/y21sdp1rubricform"}>Rubric Form</Link>
                        </p>
                    </Form>
                </Fields>
            </Container>
        </>
    )
}

export default Attendance;