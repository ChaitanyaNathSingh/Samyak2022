import { useState } from "react";
import styled from "styled-components";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";

const TheInterface = styled.section`
    background-color: rgb(40, 40, 43);
    min-height: 100vh;
`;

const Container = styled.div`
    position: relative;
    top: 100px;
    height: auto;
    z-index: 10;

    width: 100%;
`;
const Heading = styled.div`
    h1 {
        color: #ffffff;
        font-weight: 500;
        letter-spacing: 1px;
    }
`;
const JoinForm = styled.div`
    padding: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media only screen and (max-width:1024px) {
        width: 100%;
        padding: 15px;
    }
`;

const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    // width: 50px; // important for alignment

    height: auto;
    margin-top: 20px;
    justify-content: flex-start;
    p {
        color: #ffffff;
        font-weight: 500;
        margin: auto;
        padding-top: 20px;
    }
    p a {
        color: #499bf8;
        text-decoration: none;
    }
    p a:hover {
        border-bottom: 2px solid #499bf8;
    }
`;

const SubmitButton = styled.input`
    width: 150px;
    margin: auto;
    margin-top: 15px;
    cursor: pointer;
    color: #000000;
    font-size: 20px;
    border: 0;
    padding: 5px 10px;
    border-radius: 5px;
    & {
        background-image: linear-gradient(45deg,#ffd88b,#ffb41f);
    }
    // background: linear-gradient(45deg, #000, #ffffff);
    &:hover {
        background-image: linear-gradient(45deg,#ffb41f,#ffd88b);
    }
`;

const JoinInterface = (props) => {
    const [userForm, setUserForm] = useState(props.form==="LoginForm" ? {
        heading: "LOGIN",
        form: "LoginForm",
        navigation: "Sign Up",
    }: {
        heading: "REGISTER",
        form: "RegisterForm",
        navigation: "Sign In",
    });
    if(userForm.form !== props.form) {
        setUserForm(props.form==="LoginForm" ? {
            heading: "LOGIN",
            form: "LoginForm",
            navigation: "Sign Up",
        }: {
            heading: "REGISTER",
            form: "RegisterForm",
            navigation: "Sign In",
        });
    }
    return (
        <>
            <TheInterface>
                <Container>
                    <JoinForm>
                        {/**Heading */}
                        <Heading>
                            <h1>{userForm.heading}</h1>
                        </Heading>
                        {/**Form */}
                        { userForm.form === "LoginForm" ? <UserLogin /> : <UserRegister /> }
                    </JoinForm>
                </Container>
                {/**Assist Navigation */}
                {/* <a href="#0">{userForm.navigation}</a> */}
                <NavBarSpace />
                <NavBarSpace />
            </TheInterface>
        </>
    );
}

export { FormContainer, SubmitButton };
export default JoinInterface;