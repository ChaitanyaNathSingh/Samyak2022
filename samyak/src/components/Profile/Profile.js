import { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { useSnackbar } from "notistack";
// import NavBarSpace from '../BaseComponents/NavBarSpace';
import EnterDetails from './EnterDetails';
import ChangePassword from "./ChangePassword";

import { useNavigate } from "react-router-dom";
// import DisplayDetails from "./DisplayDetails";
import SamyakFooter from "../BaseComponents/Footer/SamyakFooter";
import SamyakProfile from "./SamyakProfile";

const Profile = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState(null);
  const [enterDetailsVisible, setEnterDetailsVisible] = useState(false);
  const [changePasswordVisible, setChangePasswordVisible] = useState(false);

  const navigate = useNavigate();

  let access_token = null;
  let refresh_token = null;
  let myuser = localStorage.getItem("user") ? localStorage.getItem("user") : null;
  let isAuth = false;
  let username = null;
  let isSports = false;
  if(isNaN(myuser) && myuser !== null && myuser !== undefined && myuser !== "null" && myuser !== "undefined") {  
    myuser = JSON.parse(myuser);
    access_token = myuser.user[0].tokens.access_token;
    refresh_token = myuser.user[0].tokens.refresh_token;
    username = myuser.user[1].details.username;
    isAuth = myuser.user[1].details.isAuth;
    isSports = myuser.user[1].details.isSports;
  }
  if (!isAuth) {
    window.location.href = "/login";
  }
  
  useEffect(() => {
    // console.log("Authentication Status in Profile: ", props.isAuth);
    if (isAuth) {
      // console.log("Update User Payment Status");
      axiosInstance
        .get("../home/"+(!isSports?'profile':'sport-profile'), {
          headers: {
            Authorization: "JWT " + access_token,
          },
        })
        .then((response) => {
          let mainData = response.data[0];
          // console.log(mainData);
          let userobj = { 
            'user': [
              {
                'tokens': {
                    'access_token': access_token,
                    'refresh_token': refresh_token,
                },
            },
            {
                'details': {
                    'user_id': mainData.id,
                    'username': mainData.username,
                    'user_email': mainData.email,
                    'user_phone': (!isSports)?mainData.profile.phone:mainData.profile.phoneno,
                    'isAuth': true,
                    'isVerified': mainData.profile.is_verified,
                    'isSports': isSports
                }
              }
            ]
          }
          localStorage.setItem("user", JSON.stringify(userobj));
          setUser(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [enqueueSnackbar, props, access_token, isAuth, refresh_token, isSports]);

  const getUserDetailsFromServer = () => {
    axiosInstance
        .get("../home/"+(!isSports?'profile':'sport-profile'), {
          headers: {
            Authorization: "JWT " + access_token,
          },
        })
        .then((response) => {
          // console.log(response.data);
          setUser(response.data[0]);
          // setRegisteredEvents(response.data.registered_events);
        })
        .catch((error) => {
          console.log(error);
        });
  }

  const toggleUpdateForm = () => {
    setEnterDetailsVisible(!enterDetailsVisible);
    if(enterDetailsVisible) {
      getUserDetailsFromServer();
    }
  };

  const toggleChangePasswordForm = () => {
    setChangePasswordVisible(!changePasswordVisible);
  }

  const handlePayment = () => {
//     let isVerified = false;
    let storage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    let access_token = storage ? storage.user[0].tokens.access_token : null;
    let details = storage ? storage.user[1].details : null;
//     isVerified = details.isVerified;
//     if(!isVerified) {
//       enqueueSnackbar("User not verified..!", {
//         variant: 'error'
//         // autoHideDuration: duration,
//       });
//       return;
//     }
  if(access_token) {
    axiosInstance
      .post("../home/payment", {
          username: details.username,
          email: details.user_email,
          phone: details.user_phone,
        }, {
        headers: {
          Authorization: "JWT " + storage.user[0].tokens.access_token,
        },
      })
      .then((response) => {
        // setUser(response.data);
        // console.log(response.data);
        if(response.data !== "ERROR") {
          window.location.href = response.data;
        }
        else {
          alert("Request Failed");
        }
      })
      .catch((error) => {
        console.log(error);
        // props.setIsAuth(false);
        enqueueSnackbar("ERROR OCCURED", {
          variant: 'error',
          anchorOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          // autoHideDuration: duration,
        });
        window.location.href = "/login";
      });
    }
    else {
      enqueueSnackbar("USER NOT LOGGED IN", {
        variant: 'error',
        anchorOrigin: {
          vertical: "top",
          horizontal: "left",
        },
        // autoHideDuration: duration,
      });
      navigate("/login");
    }
  };
  return (
    <>
      <div style={{backgroundColor: '#ccc'}}>
        {/* <UserProfile user={user} handlePayment={handlePayment} registeredEvents={null} toggleForm={toggleUpdateForm}/> */}
        <SamyakProfile user={user} handlePayment={handlePayment} toggleForm={toggleUpdateForm} toggleChangePasswordForm={toggleChangePasswordForm}/>
        {/* <DisplayDetails handlePayment={handlePayment} toggleForm={toggleUpdateForm} user={user}/> */}
        {enterDetailsVisible ? <EnterDetails username={username} user={user} toggleForm={toggleUpdateForm}/> : null}
        {changePasswordVisible ? <ChangePassword  toggleForm={toggleChangePasswordForm}/> : null}
        {/* <NavBarSpace user={user}/> */}
      </div>
      <SamyakFooter />
    </>
  );
};

// https://www.instamojo.com/@klusamyak/la0747a9640ac4948819986013fe771e9/
export default Profile;
