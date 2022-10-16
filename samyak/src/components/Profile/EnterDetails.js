import { useState } from "react";

import styled from "styled-components";
import BaseButton from "../UI/BaseButton";
import BaseDropDown from "../UI/BaseDropDown";
import BaseInput from "../UI/BaseInput";

import { useSnackbar } from 'notistack';

import Validations from "../../Utils/Validations";
import axiosInstance from "../../axios";

const Container = styled.div`
    position:fixed;
    top: 100px;
    width: 80%;
    left: 10%;
    z-index: 110;
    // border: 2px solid red; // border for testing
    display: flex;
    justify-content: center;
    align-items: center;
    // overflow-y: auto;
    overflow-x: hidden;
    top: 50px;
    height: 90%;
    background-color: #000000;
    opacity: 0.9;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    z-index: 301;

    @media only screen and (max-width: 1024px) {
        top: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        opacity: 1;
        margin: 0;
        padding: 0;
        overflow-y: hidden;
    }
`;
const DetailsForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 900px;
    // border: 2px solid red; // border for testing
    padding-top: 30px;
    @media only screen and (max-width: 600px) {
        padding-top: 90px;
    }
`;

const Heading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 2px solid blue; // border for testing
    height: 60px;
    h2 {
        color: #fff;
    }
`;

const TheForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow-y: auto;
    // border: 2px solid yellow; // border for testing
`;

const Fields = styled.div`
    height: auto;
    // border: 2px solid green; // border for testing
    width: 88%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    input, select {
        display: inline-block;
        height: 40px;
        width: 300px;
        border-radius: 5px;
        margin: 10px;
    }
`;

const Actions = styled.div`
display: flex;
justify-content: right;
// border: 2px solid blue; // border for testing
& button {
    padding: 2.5px 10px;
}
`;

const Cross = styled.div`
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
    transform: scale(0.45);
    cursor: pointer;
    &:hover {
        background-color: #ccc;
    }
    @media only screen and (max-width: 1024px) {

    }
`;

const EnterDetails = (props) => {
    let genderData = ['Select Gender', 'Male', 'Female', 'Others']
    let yearData = ['Select Year', '1st', '2nd', '3rd', '4th', 'Faculty', 'Alumni', 'Others']
    let departmentData = ['Select Department', 'FED', 'CSE', 'CS&IT', 'AI&DS', 'ECE', 'EEE', 'ECM', 'ME', 'IOT', 'CE', 'BT', 'BCA', 'BBA', 'MBA', 'B.COM','M.Sc. Chemistry', 'M.COM', 'BA-IAS', 'LLB', 'BFA', 'MCA', 'B.SC.VC','ARCHITECTURE', 'BHM', 'AGRICULTURE', 'B.PHARM', 'M.PHARM', 'PHARMA D', 'Others']
    let collegeData = ['Select College', 'KL Vijayawada', 'KL Hyderabad', 'Others']

    const { enqueueSnackbar } = useSnackbar();
    let isVerified = false;
    let access_token = null;
    let myuser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    access_token = (myuser) ? myuser.user[0].tokens.access_token ? myuser.user[0].tokens.access_token : null : null;
    isVerified = (myuser) ? myuser.user[1].details.isVerified : false;
    let collegename = props.user.profile.college_name;
    const [enterCollegeName, setEnterCollegeName] = useState((collegename !== "KL Vijayawada" && collegename !== "KL Hyderabad" ) ? <BaseInput id="other_college" type="text" name="other_college" placeholder="Enter College Name" value={props.user.profile.college_name}/>: null);
    const collegeChangeHandler = (event) => {
        let enteredValue = event.target.value;
        if(enteredValue === 'Others') {
          setEnterCollegeName(<BaseInput type="text" name="other_college" placeholder="Enter College Name" value={props.user.profile.college_name}/>)
        } else {
          setEnterCollegeName(null);
        }
    }
    const formHandler = (event) => {
        event.preventDefault();
        let data = {}
        data.username = props.username;
        data.first_name = event.target.first_name.value.trim();
        data.last_name = event.target.last_name.value.trim();
        if(!isVerified)
        data.email = event.target.email.value.trim();
        data.phone = event.target.phone.value.trim();
        data.year = event.target.year.value.trim();
        data.college = event.target.college.value.trim();
        if(data.college === 'Others'){
            data.college = event.target.other_college.value.trim();
        }
        data.gender = event.target.gender.value.trim();
        data.branch = event.target.branch.value.trim();
        let validations = new Validations(flash);
        if(validations.clientValidations(data)) {
            axiosInstance.post('../home/update', data, 
                {
                    headers: {
                        "Authorization": `JWT ${access_token}`
                    }
                }
            )
                .then((response) => {
                    if(response.data.status) {
                        let myuser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
                        if(!isVerified)
                        myuser.user[1].details.user_email = data.email;
                        myuser.user[1].details.user_phone = data.phone;
                        localStorage.setItem('user', JSON.stringify(myuser));
                        flash(response.data.message, 'success');
                        props.toggleForm();
                    }  
                    else {
                        flash(response.data.message, 'error');
                    }
                })
                .catch((error) => {
                   console.log(error); 
                });
        }
    }

    const flash = (message, messageVariant) => {
        enqueueSnackbar(message, { variant: messageVariant, autoHideDuration: 3000 });
    };
    return (
        <Container className="enter-details">
            <Cross onClick={props.toggleForm}><img src={require('../Profile/payment_status/cross.png')} alt="close" /></Cross>
            <DetailsForm>
                {/* <br></br><br></br><br></br><br></br> */}
                <Heading className="enterDetails__heading">
                    <h2>Update Your Profile</h2>
                </Heading>
                <TheForm className="enterDetails__form" onSubmit={formHandler}> {/**FORM */}
                    <Fields className="enterDetails__fields">
                        <div className="form-group">
                            <BaseInput id="first_name" name="first_name" type="text" placeholder="First Name" value={props.user.first_name} maxLength="25"/>
                        </div>
                        <div className="form-group">
                            <BaseInput id="last_name" name="last_name" type="text" placeholder="Last Name" value={props.user.last_name} maxLength="25"/>
                        </div>
                        { !isVerified ?
                        <div className="form-group">
                            <BaseInput id="email" name="email" type="email" placeholder="Email (Use Personal Gmail)" value={props.user.email}/>
                        </div> : null}
                        <div className="form-group">
                            <BaseInput id="phone" name="phone" type="number" placeholder="Phone Number" value={props.user.profile.phone}/>
                        </div>
                        <div className="form-group">
                            <BaseDropDown id="gender" name="gender" options={genderData} value={props.user.profile.gender}/>
                        </div>
                        <div className="form-group">
                            <BaseDropDown id="college" onChange={collegeChangeHandler} name="college" options={collegeData} value={(enterCollegeName) ? "Others" : props.user.profile.college_name}/>
                        </div>
                        <div className="form-group">
                            {enterCollegeName}
                        </div>
                        <div className="form-group">
                            <BaseDropDown id="branch" name="branch" options={departmentData} value={props.user.profile.branch}/>
                        </div>
                        <div className="form-group">
                            <BaseDropDown id="year" name="year" options={yearData} value={props.user.profile.year_of_study}/>
                        </div>
                    </Fields>
                    <Actions className="enterDetails__actions">
                        <BaseButton>UPDATE</BaseButton>
                    </Actions>
                </TheForm>
            </DetailsForm>
        </Container>
    );
}

export default EnterDetails;