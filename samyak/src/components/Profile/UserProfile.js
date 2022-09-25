import styled from "styled-components";
import "./UserProfile.css";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import DetailsObject from "./DetailsObject";
import ProfileButton from "../UI/ProfileButton";
// import EventRecord from "./EventRecord";
import correct from  './payment_status/correct.png';
import wrong from './payment_status/wrong.png';
// import samyakLogo from "./samyak_logo.png";
import { useEffect, useState } from "react";

const EditProfile = styled.div`
  float: right;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainBody = styled.div`
  width: 85vw;
  @media (max-width: 768px) {
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;
const ProfileLeft = styled.div`
  div div div img {
    border-radius: 50%;
  }
  &>div {
    height: 370px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    width: 400px;
    padding: 40px 0;
  }
`;
const ProfileRight = styled.div`
  @media (max-width: 768px) {
    width: 400px;
    padding: 0;
  }
`;

const UserProfile = (props) => {
  let paidStatus = props.user?props.user.payment?(props.user.payment.payment_status).toString():"false":"false";
  // let registeredEvents = props.registeredEvents;
  let [samyakLogo, setSamyakLogo] = useState(null);
  let username = 'NA', name = 'NA', payment_status = false;
  if(props.user) {
    username = props.user.username;
    name = props.user.first_name+"%20"+props.user.last_name;
    payment_status = props.user.payment && props.user.payment.payment_status ? "PAID" : "NOT PAID";
  }
  
  // typecast boolean to string
  useEffect(() => {
    setSamyakLogo('https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=Username%20:%20'+username+'%0AFull%20Name%20:%20'+name+'%0APayment%20Status%20:%20'+payment_status+'&choe=UTF-8');
  }, [setSamyakLogo, username, name, payment_status]);

  return (
    <div style={{background:'#28282B', minHeight:'100vh'}}>
      <br></br>
      <NavBarSpace />
      <Container
        style={{ width: "100%", margin: "auto", padding: "auto" }}
      >
        <MainBody>
          <div className="row gutters-sm">
            <ProfileLeft className="col-md-4 mb-3">
              <div className="card" style={{borderRadius:'20px',backgroundColor: '#0d0a0b',backgroundImage: 'linear-gradient(315deg, #0d0a0b 0%, #009fc2 74%)'}}>
                <div className="card-body" style={{borderRadius:'20px'}}>
                  <div className="d-flex flex-column align-items-center text-center" >
                    <img
                      src={samyakLogo}
                      alt="Admin"
                      className="rounded-circle"
                      width="200"
                      height="200"
                      style={{backgroundColor: '#000000'}}
                    />
                    <div className="mt-3">
                      <h4 style={{color: 'white'}}>@{props.user?props.user.username:'samyak'}</h4>
                      <p className=" mb-1" style={{color:'#F5FFFA'}}>
                        {props.user?props.user.first_name+' '+props.user.last_name:''}
                      </p>
                      {/* <ProfileButton  >Change Password</ProfileButton> */}
                      {paidStatus === "true" ?
                        (<div><ProfileButton>PAID</ProfileButton>
                        {/* <lord-icon
                        src="https://cdn.lordicon.com/lupuorrc.json"
                        trigger="loop"
                        style={{width:'250px', height:'250px'}}>
                    </lord-icon> */}
                    </div>) :
                      <ProfileButton  onClick={props.handlePayment} customStyle='x-y-z'>
                        <a 
                          href="#0"
                        >
                          Pay now
                        </a>
                      </ProfileButton>}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="card mt-3" style={{borderRadius:'20px'}}>
                <ul className="list-group list-group-flush" style={{borderRadius:'20px',backgroundColor:'#000000',backgroundImage: 'linear-gradient(315deg, #0d0a0b 0%, #009fc2 74%)'}}>
                  <EventRecord>REGISTERED EVENTS : </EventRecord>
                  {registeredEvents?registeredEvents.map((event) => {
                    return (<EventRecord>{event.event_name}</EventRecord>);
                  }):null}
                  
                </ul>
              </div> */}
            </ProfileLeft>
            <ProfileRight className="col-md-8" style={{borderRadius:'20px'}}  >
              <div className="card mb-3" style={{borderRadius:'20px',backgroundColor: '#000000',backgroundImage: 'linear-gradient(315deg, #0d0a0b 0%, #009fc2 74%)'}}>
                <div style={{color:'#F5FFFA'}} >
                  <br></br>
                  <DetailsObject
                    heading="Name"
                    value={props.user.first_name?(props.user.first_name +' '+ props.user.last_name):'loading...'}
                  />
                  <DetailsObject heading="Email" value={props.user?props.user.email?props.user.email:'loading...':'loading...'} />
                  {/* <DetailsObject
                    heading="Phone"
                    value={
                      "+91" +
                      (props.user && props.user.profile
                        ? props.user.profile.phone
                        : " loading...")
                    }
                  /> */}
                  <DetailsObject heading="Username" 
                    value={props.user?props.user.username?props.user.username:'loading...':'loading...'}
                  />
                  <DetailsObject heading={"Branch"} value={ props.user?props.user.profile?props.user.profile.branch:'loading...':'loading...' } />
                  <DetailsObject heading="Year" value={ props.user?props.user.profile?props.user.profile.year_of_study:'loading...':'loading...' } />
                  <DetailsObject heading="Phone" value={ props.user?props.user.profile?props.user.profile.phone:'loading...':'loading...' } />
                  <DetailsObject heading="College" value={props.user?props.user.profile?props.user.profile.college_name:'loading...':'loading...'} />
                  <DetailsObject heading="Gender" value={props.user?props.user.profile?props.user.profile.gender:'loading...':'loading...'} />
                  <DetailsObject heading="Payment Status" tag={props.user && props.user.payment && props.user.payment.payment_status ? correct : wrong} value={(props.user?props.user.payment? props.user.payment.payment_status.toString():'Not Yet Paid':'Not Yet Paid')==='true'?'Paid':'Not Yet Paid'} />
                  <div className="row">{}    
                    <EditProfile>
                      <ProfileButton onClick={props.toggleForm}>EDIT PROFILE</ProfileButton>
                    </EditProfile>
                  </div>
                </div>
              </div>
            </ProfileRight>
          </div>
        </MainBody>
      </Container>
    </div>
  );
};

export default UserProfile;
