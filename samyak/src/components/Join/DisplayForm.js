import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const DisplayForm = (props) => {
    let toBeDisplayed = props.toBeDisplayed;
    if(toBeDisplayed === "LoginForm") 
        return (
        <LoginForm setIsAuth={props.setIsAuth}/>
        )
    else
        return <RegisterForm setIsAuth={props.setIsAuth}/>
}

export default DisplayForm;