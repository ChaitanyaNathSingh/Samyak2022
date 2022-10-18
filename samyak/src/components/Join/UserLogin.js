import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import BaseInput from "../UI/BaseInput";
import axiosInstance from "../../axios";

import { FormContainer, SubmitButton } from "./JoinInterface";

const UserLogin = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (event) => {
    event.preventDefault();
    let login = document.getElementById("login");
    login.disabled = true;
    let data = {};
    data.username = event.target.idnum.value.trim();
    data.password = event.target.password.value.trim();
    login.value = "Checking...";
    axiosInstance
      .post("../home/login", data)
      .then((response) => {
        if(response.data.status) {
          flash(response.data.message, "success");
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/profile");
        }
        else {
          flash(response.data.message, "error");
          login.disabled = false;
          login.value = "Login";
        }
      })
      .catch((error) => {
        console.log(error);
        flash("Something went wrong!", "error");
        login.disabled = false;
        login.value = "Login";
      });
    // axiosInstance
    //   .post("/token", data)
    //   .then((response) => {
    //     let login = document.getElementById("login");
    //     if (response.status === 200) {
    //       axiosInstance
    //         .get("user", {
    //           headers: {
    //             Authorization: "JWT " + response.data.access,
    //           },
    //         })
    //         .then((res) => {
    //           if (!res.data.code) {
    //             let userobj = {
    //               user: [
    //                 {
    //                   tokens: {
    //                     access_token: response.data.access,
    //                     refresh_token: response.data.refresh,
    //                   },
    //                 },
    //                 {
    //                   details: {
    //                     user_id: res.data.id,
    //                     username: res.data.username,
    //                     user_email: res.data.email,
    //                     user_phone: res.data.profile.phone,
    //                     isAuth: true,
    //                   },
    //                 },
    //               ],
    //             };
    //             flash("Login Successful!", "success");
    //             localStorage.setItem("user", JSON.stringify(userobj));
    //             // props.setIsAuth(true);
    //             navigate("/profile");
    //           } else {
    //             flash(res.data.messages.message, "error");
    //             login.disabled = false;
    //             login.value = "Log In";
    //           }
    //         })
    //         .catch((error) => {
    //           console.log(error);
    //           login.disabled = false;
    //           login.value = "Log In";
    //         });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     enqueueSnackbar("Invalid Credentials!", { variant: "error" });
    //     document.getElementById("login").disabled = false;
    //     document.getElementById("login").value = "Log In";
    //   });
  };

  const flash = (message, messageVariant) => {
    enqueueSnackbar(message, {
      variant: messageVariant,
      autoHideDuration: 3000,
    });
  };
  return (
    <>
      <FormContainer
        onSubmit={handleSubmit}
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <BaseInput type="text" name="idnum" id="idnum" label="ID Number" />
        <BaseInput type="password" name="password" id="pass" label="Password" />
        {/* <label for="pass">Password</label>
                <span><input type="password" name="pass" id="pass" required /><i class="fa fa-eye" id="show" onclick="showPassword()"></i><i class="fa fa-eye-slash" id="hide" onclick="showPassword()"></i></span> */}
        <SubmitButton type="submit" name="submit" id="login" value="Log In" />
        <p>
          Don't have an account? <Link to={"/register"}>Sign Up</Link>
        </p>
        {/* <p>
          Sports Login? <Link to={"/sports-login"}>Sport Login</Link>
        </p>
        <p>
          Sports Register? <Link to={"/sports-register"}>Sport Register</Link>
        </p> */}
      </FormContainer>
    </>
  );
};

export default UserLogin;
