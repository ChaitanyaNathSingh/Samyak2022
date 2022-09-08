import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { css } from "@emotion/react";
import CircleLoader from 'react-spinners/CircleLoader';
import './EventCard.css';
import bg from "./bg.png";

import BaseButton from '../../components/UI/BaseButton';
import axiosInstance from '../../axios';
const override = css`
  display: block;
  margin-top:150px;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:200px;
  border-color: red;
`;
const EventCards = (props) => {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(true);
  var heading = props.event.name;
  var description = props.event.description;
  var imgUrl = props.event.event_image;
  let isRegistered = props.isRegistered
  const [registerText, setRegisterText] = useState(true);
  const eventRegisterHandler = () => {    
    let storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const isAuthenticated = storage ? storage.user[1].details.isAuth : false;
    if(isAuthenticated) {
      axiosInstance
        .get('user/', {
          headers: {
            Authorization: "JWT " + storage.user[0].tokens.access_token,
          }
        })
        .then((res) => {
          // console.log(res.data);
          let obj = res.data;
          if(obj.payment && obj.payment.payment_status)  {
            axiosInstance
              .post("registerevent/", {
                event_name: props.event.name,
                reg_id: storage.user[1].details.user_id,
              }, {
                headers: {
                  Authorization: "JWT " + storage.user[0].tokens.access_token,
                }
              })
              .then((res1) => {
                setRegisterText(false);
              })
              .catch((e) => console.log(e)); 
          }
          else {
            navigate("/profile");
          }
        })
    }
    else {
      localStorage.setItem('user', null);
      navigate('/join');
    }
    setRegisterText(false);
  }

  return (
    <div className="event_page">
      <div >
        <div className="event__bgimg">
      <CircleLoader color='red'  css={override}  loading={loading} height={10} width={10} radius={1} />
      </div>
      <img className="event__bgimg" src={imgUrl!=='https://drive.google.com/uc?id=' ? imgUrl : bg} onLoad={(e)=>{setLoading(false)}} alt="bg" />
      </div>
      <div className="event__content event__box1">
        <h3>{heading}</h3>
        <p>{description}</p>
        {!isRegistered ?
          <BaseButton onClick={eventRegisterHandler}>
            {registerText ? "Register" : "Registered"}
          </BaseButton> :
          <BaseButton>REGISTERED</BaseButton>
        }
      </div>
    </div>
  );
};

export default EventCards;
