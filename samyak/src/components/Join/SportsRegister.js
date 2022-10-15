import { useState } from "react";
import { Link } from "react-router-dom";
import BaseDropDown from "../UI/BaseDropDown";
import BaseInput from "../UI/BaseInput";
import { FormContainer, SubmitButton } from "./JoinInterface";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';
import Validations from "../../Utils/Validations";
import PleaseWaitPage from "./PleaseWaitPage";


const SportsRegister = () => {
    const [enterCollegeName, setEnterCollegeName] = useState(null);
    const [genderValue, setGenderValue] = useState(null);
    const [waiting, setWaiting] = useState(false);
    let genderData = ['Select Gender', 'Male', 'Female', 'Others']
    let gameData = [
            {
                "name": "Select Game",
                "gender": "Select"
            },{
                "name": "BasketBall (Men)",
                "gender": "Men"
            },{
                "name": "BasketBall (Women)",
                "gender": "Women",
            },{
                "name": "VolleyBall (Men)",
                "gender": "Men",
            },{
                "name": "Kho-Kho (Men)",
                "gender": "Men",
            },{
                "name": "Kho-Kho (Women)",
                "gender": "Women",
            },{
                "name": "Kabbadi (Men)",
                "gender": "Men",
            }
        ]
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
        data.teamname = event.target.teamname.value.trim();
        data.first_name = event.target.first_name.value.trim();
        data.last_name = event.target.last_name.value.trim();
        data.password = event.target.password.value.trim();
        data.email = event.target.email.value.trim();
        data.college = event.target.college.value.trim();
        if(data.college === 'Others'){
            data.college = event.target.other_college.value.trim();
        }
        data.phone = event.target.phone.value.trim();
        data.gender = event.target.gender.value.trim();
        data.game = event.target.game.value.trim();
        data.teamsize = event.target.teamsize.value.trim();
        let validations = new Validations(flash);
        if(validations.clientValidations(data)) {
            register.value = "Registering...";
            validations.serverValidations(data, navigate, setWaiting, 'sport-register');
        }
    }

    const genderChangeHandler = (event) => {
        let enteredValue = event.target.value.trim();
        console.log(enteredValue);
        setGenderValue(enteredValue);
    }
    const getGameOptions = () => {
        let options = []
        // let genderValue = document.getElementById('gender').value;
        let value = genderValue === "Male" ? "Men" : "Women";
        if(genderValue === null || genderValue === "Select Gender" || genderValue === "Others") {
            gameData.forEach((game) => {
                options.push(game.name);
            });
        }
        else {
            gameData.forEach((game) => {
                if(game.gender === value) 
                    options.push(game.name);
            });
        }
        console.log(options);
        return options;
    }

    // console.log(getGameOptions());

    const flash = (message, messageVariant) => {
        enqueueSnackbar(message, { variant: messageVariant, autoHideDuration: 3000 });
    };
    return (
        <>
        {waiting ? <PleaseWaitPage /> : null }
        <FormContainer onSubmit={handleSubmit}>
            <BaseInput label="ID Number" name="username" type="text" id="username" icon={icons.id}/>
            <BaseInput label="Team Name" name="teamname" type="text" id="teamname" icon={icons.name}/>
            <BaseInput label="First Name" type="text" name="first_name" id="first_name" icon={icons.name}/>
            <BaseInput label="Last Name" type="text" name="last_name" id="last_name" icon={icons.name}/>
            <BaseInput label="Email" name="email" type="email" id="email" placeholder="Email (Use Personal Gmail)" icon={icons.email}/>
            <BaseInput label="Password" name="password" type="password" id="password" icon={icons.lock}/>
            <BaseInput label="Phone Number" name="phone" type="text" id="phone" placeholder="Phone Number (without country code)" icon={icons.phone}/>
            <BaseDropDown label="Gender" onChange={genderChangeHandler} name="gender" type="text" id="gender" options={genderData}/>
            <BaseDropDown label="College" onChange={collegeChangeHandler} name="college" type="text" id="college" options={collegeData}/>
            {enterCollegeName}
            <BaseDropDown label="Game" name="game" type="text" id="game" options={getGameOptions()} />
            <BaseDropDown label="Team Size" name="teamsize" type="text" id="teamsize" options={["12"]} />
            <SubmitButton type="submit" name="submit" id="register" value="Register" />
            <p>Already have an account? <Link to={'/login'}>Sign In</Link></p>
            <p>Normal Registration? <Link to={'/register'}>Sign Up</Link> </p>
        </FormContainer>
        </>
    )
}

export default SportsRegister;