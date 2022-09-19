import { useNavigate } from "react-router-dom";
import Join from "./Join";
import LoginForm from "./LoginForm";

const Login = (props) => {
    const navigate = useNavigate();
    return (
        <div className="login">
            <Join heading="LOGIN" assistNav="Sign In">
            <section className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                    <h2 className="heading-section">LOGIN</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                    <div className="login-wrap p-0">
                        <LoginForm setIsAuth={props.setIsAuth} />
                        <div className="social d-flex text-center">
                        {/* <a href="#0" className="px-2 py-2 mr-md-1 rounded">
                            <span className="ion-logo-facebook mr-2"></span> Facebook
                        </a> */}
                        <a
                            href="#0"
                            onClick={() => navigate("/register")}
                            className="px-2 py-2 ml-md-1 rounded"
                        >
                            <span className="ion-logo-twitter mr-2"></span> Sign Up
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </Join>
        </div>
    );
}

export default Login;