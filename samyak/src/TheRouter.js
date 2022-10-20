import App from "./App";
import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import GoogleLogin from 'react-google-login';

// import SamyakFooter from './components/BaseComponents/Footer/SamyakFooter';

import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Gallery from './components/Gallery/Gallery';
import OurSponsors from './components/OurSponsors/OurSponsors';
// import Team from './components/Team/Team';
// import Join from './components/Join/Join';
import Profile from './components/Profile/Profile';
import Admin from './components/Admin/Admin';
import SamyakNavbar from './components/BaseComponents/SamyakNavbar';
import NotFoud from "./components/BaseComponents/NotFound";
import JoinInterface from "./components/Join/JoinInterface";
// import EnterDetails from "./components/Home/EnterDetails";
import { getColorObj } from "./Utils/Colors";
import SamyakAbout from "./components/AboutUs/SamyakAbout";
import { ContactUs } from "./components/Join/Email";
import OtpPage from "./components/Join/OtpPage";
// import SportOtpPage from "./components/Join/SportOtpPage";
import Attendance from "./components/Learnathon/Attendance";
import AttendanceForm from "./components/Learnathon/AttendanceForm";
import FacultyOtp from "./components/Learnathon/FacultyOtp";
import RubricForm from "./components/Learnathon/RubricForm";
import LearnathonHome from "./components/Learnathon/LearnathonHome";
import EventDescription from "./components/Events/EventDescription";
import BackToTop from "./components/UI/BackToTop";

const ColorContext = createContext();

const TheRouter = (props) => {
    let myuser = localStorage.getItem('user');
    let authStatus = false;
    if(isNaN(myuser) && myuser !== null && myuser !== undefined && myuser !== "null" && myuser !== "undefined") {
        myuser = JSON.parse(myuser);
        myuser = myuser.user[1].details;
        authStatus = myuser.isAuth;
    }
    console.log("Auth Status", authStatus);
    let num = Math.floor(Math.random() * 2);
    const [colorObj, setColorObj] = useState(getColorObj(num));
    let value = { colorObj, setColorObj }
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 1150 && localStorage.getItem('isMobile') === "false") {
                localStorage.setItem('isMobile', true);
                setColorObj(getColorObj(num));
                // console.log("getting color object of", num);
                // console.log("Updating Color Object for Mobile");
            } else if(window.innerWidth > 1150 && localStorage.getItem('isMobile') === "true") {
                localStorage.setItem('isMobile', false);
                setColorObj(getColorObj(num));
                // console.log("getting color object of", num);
                // console.log("Updating Color Object for Desktop");
            }
        };
        window.addEventListener("resize", handleResize, false);
    }, [num]);

    return(
        <>
            <ColorContext.Provider value={value}>
            <App /> {/**googleButton={google_button} */}
            <BackToTop />
            {/* {enterDetails} */}
            <Router>
            {/* <NavBar isAuth={this.state.isAuth} setIsAuth={this.setIsAuth}/> */}
            {/* <NavBarSpace /> */}
            <SamyakNavbar/> {/**googleButton={google_button} */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home />} />
                <Route exact path="/about" element={<SamyakAbout />} />
                <Route exact path="/events" element={<Events />} /> {/* passed is auth to events */}
                <Route exact path="/events/:eventId" element={<EventDescription />} />
                <Route exact path="/gallery" element={<Gallery />} />
                <Route exact path="/sponsors" element={<OurSponsors />} />
                {/* <Route exact path="/team" element={<Team />} /> */}
                {/* <Route exact path="/login" element={<Login />}/>
                <Route exact path="/register" element={<Register />}/> */}
                <Route exact path="/login" element={<JoinInterface form="LoginForm"/>} />
                <Route exact path="/register" element={<JoinInterface form="RegisterForm"/>} />
                {/* <Route exact path="/sports-login" element={<JoinInterface form="SportsLogin"/>} />
                <Route exact path="/sports-register" element={<JoinInterface form="SportsRegister"/>} /> */}

                <Route exact path="/email" element={<ContactUs />} />
                <Route exact path="/otp" element={<OtpPage />} />
                {/* <Route exact path="/sport-otp" element={<SportOtpPage />} /> */}

                <Route exact path="/profile" element={<Profile status="false"/>} />  {/* passed is auth to profile */}
                { /** router for /profile?paymentstatus=success */ }
                <Route path="/admin" element={<Admin path="admin"/>} />
                <Route path="/admin_dashboard" element={<Admin path="admin_dashboard"/>} />


                {/* Learnathon */}
                <Route path="/faculty-otp" element={<FacultyOtp />} />
                <Route path="/y21learnathon" element={<Attendance />} />
                <Route path="/y21sdp1attendanceform" element={<AttendanceForm />} />
                <Route path="/y21sdp1rubricform" element={<RubricForm />} />
                <Route path="/y21learnathon-home" element={<LearnathonHome />} />

                {/**404 page redirections */}
                <Route path="*" element={<NotFoud />} />
            </Routes>
            {/* <SamyakFooter /> */}
            </Router>
            </ColorContext.Provider>
        </>
    )
}

export { ColorContext }

export default TheRouter;