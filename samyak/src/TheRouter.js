import App from "./App";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import GoogleLogin from 'react-google-login';

import SamyakFooter from './components/BaseComponents/Footer/SamyakFooter';

import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Events from './components/Events/Events';
import Gallery from './components/Gallery/Gallery';
import OurSponsors from './components/OurSponsors/OurSponsors';
// import Team from './components/Team/Team';
// import Join from './components/Join/Join';
import Profile from './components/Profile/Profile';
import Admin from './components/Admin/Admin';
import SamyakNavbar from './components/BaseComponents/SamyakNavbar';
import Login from './components/Join/Login';
import Register from './components/Join/Register';
import NotFoud from "./components/BaseComponents/NotFound";
// import EnterDetails from "./components/Home/EnterDetails";

const TheRouter = (props) => {
    // GOOGLE LOGIN
    // const [enterDetails, setEnterDetails] = useState(null);
    // const onLoginSuccess = (response) => {
    //     console.log(response);
    //     setEnterDetails(<EnterDetails />);
    //     localStorage.setItem('isAuth', true);
    // }
    // const onLoginFailure = (response) => {
    //     if(response.error !== "popup_closed_by_user")  {
    //         // redirect to login page
    //     }
    //     console.log(response);
    //     localStorage.setItem('isAuth', false);
    // }
    // const google_button = <GoogleLogin
    //     clientId="65768565076-aenuajp096v6oa34fusa66vq10dcubqn.apps.googleusercontent.com"
    //     buttonText="LOGIN or REGISTER"
    //     // render={renderProps => (
    //     // <button onClick={renderProps.onClick} disabled={renderProps.disabled}>LOGIN or REGISTER</button>
    //     // )}
    //     onSuccess={onLoginSuccess}
    //     onFailure={onLoginFailure}
    //     cookiePolicy={'single_host_origin'}
    //     isSignedIn={true}
    //   />
    let myuser = localStorage.getItem('user');
    let authStatus = false;
    if(isNaN(myuser) && myuser !== null && myuser !== undefined && myuser !== "null" && myuser !== "undefined") {
        myuser = JSON.parse(myuser);
        myuser = myuser.user[1].details;
        authStatus = myuser.isAuth;
    }
    console.log("Auth Status", authStatus);
    return(
        <>
            <App /> {/**googleButton={google_button} */}
            {/* {enterDetails} */}
            <Router>
            {/* <NavBar isAuth={this.state.isAuth} setIsAuth={this.setIsAuth}/> */}
            {/* <NavBarSpace /> */}
            <SamyakNavbar /> {/**googleButton={google_button} */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route exact path="/aboutus" element={<AboutUs />} />
                <Route exact path="/events" element={<Events />} /> {/* passed is auth to events */}
                <Route exact path="/gallery" element={<Gallery />} />
                <Route exact path="/sponsors" element={<OurSponsors />} />
                {/* <Route exact path="/team" element={<Team />} /> */}
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/register" element={<Register />}/>
                <Route exact path="/profile" element={<Profile status="false"/>} />  {/* passed is auth to profile */}
                { /** router for /profile?paymentstatus=success */ }
                <Route path="/admin" element={<Admin />} />
                {/**404 page redirections */}
                <Route path="*" element={<NotFoud />} />
            </Routes>
            <SamyakFooter />
            </Router>
        </>
    )
}

export default TheRouter;