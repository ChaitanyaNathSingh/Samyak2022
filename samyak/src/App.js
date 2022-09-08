import { useState } from 'react';
import './App.css';

// NAVBAR
// import './components/Bootstrap/js/vendor/jquery-1.11.2.min.js';
import './components/Bootstrap/css/bootstrap.min.css'
import './components/Bootstrap/css/light-box.css'
import './components/Bootstrap/css/templatemo-style.css'
import './components/Bootstrap/js/main.js';

// LOGIN AND REGISTRATION PAGE
import './components/Bootstrap/js/join_main.js';
import './components/Bootstrap/css/join_style.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/BaseComponents/NavBar';
// import Footer from './components/BaseComponents/Footer';
import SamyakFooter from './components/BaseComponents/SamyakFooter';

import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Events from './components/Events/Events';
import Gallery from './components/Gallery/Gallery';
import OurSponsors from './components/OurSponsors/OurSponsors';
import Team from './components/Team/Team';
import Join from './components/Join/Join';
import Profile from './components/Profile/Profile';
import Admin from './components/Admin/Admin';

function App() {

  let storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  const isAuthenticated = storage ? storage.user[1].details.isAuth : false;
  const [isAuth, setIsAuthenticate] = useState(isAuthenticated);

  const setIsAuth = (status) => {
    // console.log("changing auth status to: ", status); 
    setIsAuthenticate(status);
    storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    if(storage) 
    storage.user[1].details.isAuth = status;
    localStorage.setItem('user', JSON.stringify(storage));
  }
  // const user = {
  //   user: [
  //     {
  //       tokens: {
  //         access_token: '',
  //         refresh_token: '',
  //         token_type: 'JWT',
  //       }
  //     },
  //     {
  //       details: {
  //         user_id: '',
  //         user_name: '',
  //         user_email: '',
  //         user_phone: '',
  //         isAuth: false,
  //       }
  //     }
  //   ]
  // }
  // localStorage.setItem('user', JSON.stringify(user));

  return (
    <>
      <Router>
        <NavBar isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/events" element={<Events isAuth={isAuth} setIsAuth={setIsAuth}/>} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/oursponsors" element={<OurSponsors />} />
          {/* <Route exact path="/team" element={<Team />} /> */}
          <Route exact path="/join" element={<Join setIsAuth={setIsAuth}/>} />
          <Route exact path="/profile" element={<Profile isAuth={isAuth} status="false" setIsAuth={setIsAuth}/>} />
          { /** router for /profile?paymentstatus=success */ }
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
        <SamyakFooter />
      </Router>
    </>
  );
}

export default App;
