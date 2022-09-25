import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import styled from "styled-components";
// import EventCard from "../Cards/EventCard";
import NewEventCard from "../Cards/NewEventCard";
import axiosInstance from "../../axios";

// import sdp2 from './sdp2.jpg';
// import sdp4 from './sdp4.jpg';

const EventContainer = (props) => {
  const EventWrapper = styled.div`
    margin-top: 80px;
    padding-bottom: 80px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  `;
  const Events = styled.div`
    width: 90%;
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  `;

  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
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

    axiosInstance
      .get("events/")
      .then((response) => {
        setEvents(response.data);
        // let storage = JSON.parse(localStorage.getItem("user"));
        // if (props.isAuth) {
        //   axiosInstance
        //     .get("registerevent/", {
        //       headers: {
        //         Authorization: "JWT " + storage.user[0].tokens.access_token,
        //       },
        //       params: {
        //         user_id: storage.user[1].details.user_id,
        //       },
        //     })
        //     .then((res1) => {
        //       setRegisteredEvents(res1.data);
        //     })
        //     .catch((e) => console.log(e));
        // } else {
        //   flash("Please Login!", "warning");
        // }
      })
      .catch((e) => console.log(e));
  }, [setEvents, navigate, props, enqueueSnackbar]);

  return (
    <EventWrapper>
      <Events>
        {events.map((event) =>
            <NewEventCard key={event.name} event={event} isRegistered={false} />
        )}
      </Events>
    </EventWrapper>
  );
};

export default EventContainer;
