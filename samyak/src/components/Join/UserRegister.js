import { useState } from "react";
import { Link } from "react-router-dom";
import BaseDropDown from "../UI/BaseDropDown";
import BaseInput from "../UI/BaseInput";
import { FormContainer, SubmitButton } from "./JoinInterface";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';
import Validations from "../../Utils/Validations";
import PleaseWaitPage from "./PleaseWaitPage";


const UserRegister = () => {
    const [enterCollegeName, setEnterCollegeName] = useState(null);
    const [waiting, setWaiting] = useState(false);
    let genderData = ['Select Gender', 'Male', 'Female', 'Others']
    let yearData = ['Select Year', '1st', '2nd', '3rd', '4th', 'Faculty', 'Alumni', 'Others']
    let departmentData = ['Select Department', 'FED', 'CSE', 'CS&IT', 'AI&DS', 'ECE', 'EEE', 'ECM', 'ME', 'IOT', 'CE', 'BT', 'BBA', 'MBA', 'B.COM','M.Sc. Chemistry', 'M.COM', 'BA-IAS', 'LLB', 'BFA', 'MCA', 'BCA', 'B.SC.VC','ARCHITECTURE', 'BHM', 'AGRICULTURE', 'B.PHARM', 'M.PHARM', 'PHARMA D', 'Others']
    let collegeData = ['Select College', 'KL Vijayawada', 'KL Hyderabad', 'Others']
    let icons = {
        id: 'https://img.icons8.com/color/344/password1--v1.png',
        // name: 'https://img.icons8.com/ios/344/name--v1.png',
        name: 'https://img.icons8.com/fluency/344/name.png',
        email: 'https://img.icons8.com/color/344/new-post.png',
        lock: 'https://img.icons8.com/ios-filled/344/lock.png',
        unlock: 'https://img.icons8.com/external-kiranshastry-solid-kiranshastry/344/external-unlock-multimedia-kiranshastry-solid-kiranshastry.png',
        phone: 'https://img.icons8.com/color/452/phone.png',
    }
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();


    const collegeChangeHandler = (event) => {
        let enteredValue = event.target.value;
        console.log(enteredValue);
        if(enteredValue === 'Others') {
          setEnterCollegeName(<BaseInput type="text" name="other_college" placeholder="Enter College Name"/>)
        } else {
          setEnterCollegeName(null);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let register = document.getElementById("register");
        register.disabled = true;
        let data = {}
        data.username = event.target.username.value.trim();
        data.first_name = event.target.first_name.value.trim();
        data.last_name = event.target.last_name.value.trim();
        data.password = event.target.password.value.trim();
        data.email = event.target.email.value.trim();
        data.year = event.target.year.value.trim();
        data.college = event.target.college.value.trim();
        if(data.college === 'Others'){
        data.college = event.target.other_college.value.trim();
        }
        data.phone = event.target.phone.value.trim();
        data.gender = event.target.gender.value.trim();
        data.branch = event.target.department.value.trim();
        let validations = new Validations(flash);
        if(validations.clientValidations(data)) {
            register.value = "Registering...";
            validations.serverValidations(data, navigate, setWaiting);
        }
    }



    const flash = (message, messageVariant) => {
        enqueueSnackbar(message, { variant: messageVariant, autoHideDuration: 3000 });
    };
    return (
        <>
        {waiting ? <PleaseWaitPage /> : null }
        <FormContainer onSubmit={handleSubmit}>
            <BaseInput label="ID Number" name="username" type="text" id="username" icon={icons.id}/>
            <BaseInput label="First Name" type="text" name="first_name" id="first_name" icon={icons.name}/>
            <BaseInput label="Last Name" type="text" name="last_name" id="last_name" icon={icons.name}/>
            <BaseInput label="Email" name="email" type="email" id="email" placeholder="Email (Use Personal Gmail)" icon={icons.email}/>
            <BaseInput label="Password" name="password" type="password" id="password" icon={icons.lock}/>
            <BaseInput label="Phone Number" name="phone" type="text" id="phone" placeholder="Phone Number (without country code)" icon={icons.phone}/>
            <BaseDropDown label="Gender" name="gender" type="text" id="gender" options={genderData}/>
            <BaseDropDown label="College" onChange={collegeChangeHandler} name="college" type="text" id="college" options={collegeData}/>
            {enterCollegeName}
            <BaseDropDown label="Year" name="year" type="text" id="year" options={yearData}/>
            <BaseDropDown label="Department" name="department" type="text" id="department" options={departmentData}/>
            <SubmitButton type="submit" name="submit" id="register" value="Register" />
            <p>Already have an account? <Link to={'/login'}>Sign In</Link></p>
        </FormContainer>
        </>
    )
}

export default UserRegister;