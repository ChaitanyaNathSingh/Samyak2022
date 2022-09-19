import styled from "styled-components";
import "./UserProfile.css";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import DetailsObject from "./DetailsObject";
import ProfileButton from "../UI/ProfileButton";
// import EventRecord from "./EventRecord";
import correct from  './payment_status/correct.png';
import wrong from './payment_status/wrong.png';
import samyakLogo from "./samyak_logo.png";

const EditProfile = styled.div`
  float: right;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserProfile = (props) => {
  let paidStatus = props.user?props.user.payment?(props.user.payment.payment_status).toString():"false":"false";
  // let registeredEvents = props.registeredEvents;
  // typecast boolean to string

  return (
    <div style={{background:'#28282B', minHeight:'100vh'}}>
      <br></br>
      <div
        className="container"
        style={{ width: "100%", margin: "auto", padding: "auto" }}
      >
        <NavBarSpace />
        <div className="main-body" style={{}}>
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
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
                      <h4>{props.user?props.user.username:'@samyak'}</h4>
                      <p className=" mb-1" style={{color:'#F5FFFA'}}>
                        {props.user?props.user.first_name+' '+props.user.last_name:''}
                      </p>
                      {/* <ProfileButton  >Change Password</ProfileButton> */}
                      {paidStatus === "true" ?
                        (<div><ProfileButton>PAID</ProfileButton>
                        <lord-icon
                        src="https://cdn.lordicon.com/lupuorrc.json"
                        trigger="loop"
                        style={{width:'250px', height:'250px'}}>
                    </lord-icon>
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
            </div>
            <div className="col-md-8" style={{borderRadius:'20px'}}  >
              <div className="card mb-3" style={{borderRadius:'20px',backgroundColor: '#000000',backgroundImage: 'linear-gradient(315deg, #0d0a0b 0%, #009fc2 74%)'}}>
                <div className="card-body" style={{color:'#F5FFFA'}} >
                  <br></br>
                  <DetailsObject
                    heading="Name"
                    value={props.user.first_name?(props.user.first_name +' '+ props.user.last_name):'loading...'}
                  />
                  <DetailsObject heading="Email" value={props.user?props.user.email?props.user.email:'loading...':'loading...'} />
                  <DetailsObject
                    heading="Phone"
                    value={
                      "+91" +
                      (props.user && props.user.profile
                        ? props.user.profile.phone
                        : " loading...")
                    }
                  />
                  <DetailsObject heading={"Branch"} value={ props.user?props.user.profile?props.user.profile.branch:'loading...':'loading...' } />
                  <DetailsObject heading="Year" value={ props.user?props.user.profile?props.user.profile.year_of_study:'loading...':'loading...' } />
                  <DetailsObject heading="Username" 
                    value={props.user?props.user.username?props.user.username:'loading...':'loading...'}
                  />
                  <DetailsObject heading="College" value={props.user?props.user.profile?props.user.profile.college_name:'loading...':'loading...'} />
                  <DetailsObject heading="Gender" value={props.user?props.user.profile?props.user.profile.gender:'loading...':'loading...'} />
                  <DetailsObject heading="Payment Status" tag={props.user && props.user.payment && props.user.payment.payment_status ? correct : wrong} value={(props.user?props.user.payment? props.user.payment.payment_status.toString():'Not Yet Paid':'Not Yet Paid')==='true'?'Paid':'Not Yet Paid'} />
                  <div className="row">{}    
                    <EditProfile>
                      <ProfileButton>EDIT PROFILE</ProfileButton>
                    </EditProfile>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
