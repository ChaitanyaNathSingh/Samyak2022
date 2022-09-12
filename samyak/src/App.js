import React from 'react';
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
// import Team from './components/Team/Team';
import Join from './components/Join/Join';
import Profile from './components/Profile/Profile';
import Admin from './components/Admin/Admin';
import axiosInstance from './axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    // this.isAuthenticated = this.storage ? this.storage.user[1].details.isAuth : false;
    this.state = {
      isAuth: false,
    }
  }

  componentDidMount = () => {
    this.getSession();
  }

  getSession = () => {
    console.log("Getting Session");
    axiosInstance.get('../home/session')
        .then(response => {
            console.log("Session Status Received");
            // console.log(response.data);
            if(response.data.isAuthenticated) {
                this.setState({isAuth: true});
             } else {
                this.setState({isAuth: false});
                this.getCSRF();
            }
        })
        .catch(error => {
            console.log(error);  
        })
  }

  getCSRF = () => {
    axiosInstance.get('../home/csrf')
        .then(response => {
            console.log("CSRF Token Received");
            localStorage.setItem('csrftoken', response.data.csrftoken);
            
        })
        .catch(error => {
            console.log(error);  
        })
  };

  setIsAuth = (status) => {
    // console.log("changing auth status to: ", status); 
    console.log("Setting Auth Status to",status);
    this.setState({isAuth: status});
    // this.storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    // if(this.storage) 
    // this.storage.user[1].details.isAuth = status;
    // localStorage.setItem('user', JSON.stringify(this.storage));
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

  render() {
    return (
      <>
        <Router>
          <NavBar isAuth={this.state.isAuth} setIsAuth={this.setIsAuth}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/events" element={<Events isAuth={this.state.isAuth} setIsAuth={this.setIsAuth}/>} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/oursponsors" element={<OurSponsors />} />
            {/* <Route exact path="/team" element={<Team />} /> */}
            <Route exact path="/join" element={<Join setIsAuth={this.setIsAuth}/>} />
            <Route exact path="/profile" element={<Profile isAuth={this.state.isAuth} status="false" setIsAuth={this.setIsAuth}/>} />
            { /** router for /profile?paymentstatus=success */ }
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <SamyakFooter />
        </Router>
      </>
    );
  }
  GoToAdmin() {
    window.open("https://klsamyakbackend.in/admin", '_blank', 'noopener,noreferrer');
    return (<Home/>); 
  }
}

export default App;
