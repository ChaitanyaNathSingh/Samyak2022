// import HomePoster from "../Home/HomePoster";
import EventPoster from "./EventPoster";
import EventContainer from "./EventContainer";

const Events = (props) => {
    // let isAuth = false;
    // let storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    // isAuth = storage ? storage.user[1].details.isAuth : false;
    return (
        // <HomePoster />
        <div className="events-container">
            <EventPoster />
            <EventContainer isAuth={props.isAuth} />
        </div>
    )
}

export default Events;