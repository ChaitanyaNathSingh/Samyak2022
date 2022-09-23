import React from "react";
import { useNavigate } from "react-router-dom";

import BaseButton from "../UI/BaseButton";
import BaseInput from "../UI/BaseInput";
import BaseDropDown from "../UI/BaseDropDown";

import { useSnackbar } from 'notistack';

import Validations from "../../Utils/Validations";

const RegisterForm = (props) => {
  let genderData = ['Select Gender', 'Male', 'Female', 'Others']
  let yearData = ['Select Year', '1st', '2nd', '3rd', '4th', 'Faculty', 'Alumni', 'Others']
  let departmentData = ['Select Department', 'FED', 'CSE', 'CS&IT', 'AI&DS', 'ECE', 'EEE', 'ECM', 'ME', 'CE', 'BT', 'BCA', 'BBA', 'MBA', 'B.COM','M.Sc. Chemistry', 'M.COM', 'BA-IAS', 'LLB', 'BFA', 'MCA', 'BCA', 'B.SC.VC','ARCHITECTURE', 'BHM', 'AGRICULTURE', 'B.PHARM', 'M.PHARM', 'PHARMA D', 'Others']
  let collegeData = ['Select College', 'KL Vijayawada', 'KL Hyderabad', 'Others']
  
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const registerFormHandler = (event) => {
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
    data.phoneno = event.target.phoneno.value.trim();
    data.gender = event.target.gender.value.trim();
    data.branch = event.target.branch.value.trim();

    let validations = new Validations(flash);

    if(validations.clientValidations(data)) {
      validations.serverValidations(data, navigate);
    }
  }

  const [enterCollegeName, setEnterCollegeName] = React.useState(null);

  const collegeChangeHandler = (event) => {
    let enteredValue = event.target.value;
    if(enteredValue === 'Others') {
      // document.getElementById('otherCollege').style.display = 'block';
      setEnterCollegeName(<BaseInput type="text" name="other_college" placeholder="Enter College Name" />)
    } else {
      // document.getElementById('otherCollege').style.display = 'none';
      setEnterCollegeName(null);
    }
  }

  const flash = (message, messageVariant) => {
    enqueueSnackbar(message, { variant: messageVariant, autoHideDuration: 3000 });
  };
  return (
    <div>
      <form className="signin-form" onSubmit={registerFormHandler}>
        <div className="form-group">
          <BaseInput id="username" name="username" type="text" placeholder="College ID" />
        </div>
        <div className="form-group">
          <BaseInput id="first_name" name="first_name" type="text" placeholder="First Name" />
        </div>
        <div className="form-group">
          <BaseInput id="last_name" name="last_name" type="text" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <BaseInput id="password-field" name="password" type="password" placeholder="Password" />
          {/* <span
            toggle="#password-field"
            className="fa fa-fw fa-eye field-icon toggle-password"
          ></span> */}
        </div>
        <div className="form-group">
          <BaseInput id="email" name="email" type="email" placeholder="Email (Use Personal Gmail)" />
        </div>
        <div className="form-group">
          <BaseInput id="phoneno" name="phoneno" type="text" placeholder="Phone Number (without country code)" />
        </div>
        <div className="form-group">
          <BaseDropDown id="gender" name="gender" options={genderData} />
        </div>
        <div className="form-group">
          <BaseDropDown id="college" onChange={collegeChangeHandler} name="college" options={collegeData} />
        </div>
        <div className="form-group">
          {enterCollegeName}
        </div>
        <div className="form-group">
          <BaseDropDown name="branch" options={departmentData} />
        </div>
        <div className="form-group">
          <BaseDropDown name="year" options={yearData} />
        </div>
        <div className="form-group">
          <BaseButton id="register">Sign Up</BaseButton>
        </div>
        <div className="form-group d-md-flex">
          <div className="w-50">
            {/* <label className="checkbox-wrap checkbox-primary">
              Remember Me
              <input type="checkbox" checked />
              <span className="checkmark"></span>
            </label> */}
          </div>
          <div className="w-50 text-md-right">
            <a href="true" style={{ color: "#fff" }}>
              Forgot Password
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
export default RegisterForm;
