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

// import NavBar from './components/BaseComponents/NavBar';
// import Footer from './components/BaseComponents/Footer';

import Home from './components/Home/Home';
import axiosInstance from './axios';
// import NavBarSpace from './components/BaseComponents/NavBarSpace';

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
    if(localStorage.getItem('user')) {
      this.setState({isAuth: true});
    }
    else {
      this.setState({isAuth: false});
      console.log("Not Authenticated");
      // this.getCSRF();
    }
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
    // console.log("Setting Auth Status to",status);
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
        
      </>
    );
  }
  GoToAdmin() {
    window.open("https://klsamyakbackend.in/admin", '_blank', 'noopener,noreferrer');
    return (<Home/>); 
  }
}

export default App;
