import { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { useSnackbar } from "notistack";
// import NavBarSpace from '../BaseComponents/NavBarSpace';
import EnterDetails from '../Home/EnterDetails';

import { useNavigate } from "react-router-dom";
// import DisplayDetails from "./DisplayDetails";
import SamyakFooter from "../BaseComponents/Footer/SamyakFooter";
import SamyakProfile from "./SamyakProfile";

const Profile = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState([]);
  const [enterDetailsVisible, setEnterDetailsVisible] = useState(false);

  const navigate = useNavigate();

  let access_token = null;
  let myuser = localStorage.getItem("user") ? localStorage.getItem("user") : null;
  let isAuth = false;
  let username = null;
  if(isNaN(myuser) && myuser !== null && myuser !== undefined && myuser !== "null" && myuser !== "undefined") {  
    myuser = JSON.parse(myuser);
    access_token = myuser.user[0].tokens.access_token;
    username = myuser.user[1].details.username;
    isAuth = myuser.user[1].details.isAuth;
  }
  if (!isAuth) {
    window.location.href = "/login";
  }
  
  useEffect(() => {
    // console.log("Authentication Status in Profile: ", props.isAuth);
    if (isAuth) {
      // console.log("Update User Payment Status");
      axiosInstance
        .get("../home/profile", {
          headers: {
            Authorization: "JWT " + access_token,
          },
        })
        .then((response) => {
          // console.log(response.data);
          setUser(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [enqueueSnackbar, props, access_token, isAuth]);

  const getUserDetailsFromServer = () => {
    axiosInstance
        .get("../home/profile", {
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

  const handlePayment = () => {
    console.log("ONCLICK FOR PAYMENT");
    let storage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    let access_token = storage ? storage.user[0].tokens.access_token : null;
    let details = storage ? storage.user[1].details : null;
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
        if(response.data) {
          window.location.href = response.data;
        }
        else {
          console.log("Wrong Phone Number");
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
        <SamyakProfile user={user} handlePayment={handlePayment} toggleForm={toggleUpdateForm}/>
        {/* <DisplayDetails handlePayment={handlePayment} toggleForm={toggleUpdateForm} user={user}/> */}
        {enterDetailsVisible ? <EnterDetails username={username} user={user} toggleForm={toggleUpdateForm}/> : null}
        {/* <NavBarSpace user={user}/> */}
      </div>
      <SamyakFooter />
    </>
  );
};

// https://www.instamojo.com/@klusamyak/la0747a9640ac4948819986013fe771e9/
export default Profile;
