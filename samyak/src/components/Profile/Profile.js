import { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { useSnackbar } from "notistack";
// import NavBarSpace from '../BaseComponents/NavBarSpace';
import UserProfile from "./UserProfile";

import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  let access_token = null;
  let myuser = localStorage.getItem("user");
  if(myuser) {
    access_token = JSON.parse(myuser).user[0].tokens.access_token;
  }
  if (!props.isAuth) {
    navigate('/join');
  }
  
  useEffect(() => {
    console.log("Authentication Status in Profile: ", props.isAuth);
    if (props.isAuth) {
      console.log("Update User Payment Status");
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
      // axiosInstance
      //   .get("user/", {
      //     headers: {
      //       Authorization: "JWT " + storage.user[0].tokens.access_token,
      //     },
      //   })
      //   .then((response) => {
      //     if(response.data.payment ? response.data.payment.payment_status : false) {
      //       flash("Payment Successful", "success")  
      //     }
      //     else {
      //       flash("You have not made payment yet", "warning")
      //       console.log("You have not made payment yet");
      //     }
      //     setUser(response.data);

          
      //     axiosInstance
      //       .get("registerevent/", {
      //         headers: {
      //           Authorization: "JWT " + storage.user[0].tokens.access_token,
      //         },
      //         params: {
      //           user_id: storage.user[1].details.user_id,
      //         }
      //       })
      //       .then((myres) => {
      //         setRegisteredEvents(myres.data);
      //       })
      //       .catch((e) => console.log(e));


      //   })
      //   .catch((error) => {
      //     props.setIsAuth(false);
      //   });

    }
  }, [enqueueSnackbar, props, access_token]);

  // const flash = (message, variant) => {
  //   enqueueSnackbar(message, {
  //     variant: variant,
  //     anchorOrigin: {
  //       vertical: "top",
  //       horizontal: "left",
  //     },
  //     // autoHideDuration: duration,
  //   });
  // };

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
          // phone: details.phone
        }, {
        headers: {
          Authorization: "JWT " + storage.user[0].tokens.access_token,
        },
      })
      .then((response) => {
        // setUser(response.data);
        console.log(response.data);
        window.location.href = response.data;
      })
      .catch((error) => {
        // console.log(error);
        // props.setIsAuth(false);
        enqueueSnackbar("ERROR OCCURED", {
          variant: 'error',
          anchorOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          // autoHideDuration: duration,
        });
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
    }
  };
  return (
    <div style={{backgroundColor: '#ccc'}}>
      <br></br>
      <UserProfile user={user} handlePayment={handlePayment} registeredEvents={null}/>
      
      {/* <NavBarSpace user={user}/> */}
    </div>
  );
};

// https://www.instamojo.com/@klusamyak/la0747a9640ac4948819986013fe771e9/
export default Profile;
