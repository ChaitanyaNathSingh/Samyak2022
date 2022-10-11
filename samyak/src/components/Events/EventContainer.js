import styled from "styled-components";
// import EventCard from "../Cards/EventCard";
import NewEventCard from "../Cards/NewEventCard";
import EventLoader from "./EventLoader";
import NoEvents from "./NoEvents";

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
  // useEffect(() => {
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

  return (
    <>
      {!props.allEventsLoaded ? <EventLoader /> :
        <EventWrapper>
          {props.allEvents.length === 0 ? <NoEvents /> :
          <Events>
            {props.allEvents.map((event) =>
                <NewEventCard key={event.name} event={event} isRegistered={false} />
            )}
          </Events>}
        </EventWrapper>
      }
    </>
  );
};

export default EventContainer;
