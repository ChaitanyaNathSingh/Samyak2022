// import HomePoster from "../Home/HomePoster";
import EventPoster from "./EventPoster";
import EventContainer from "./EventContainer";
import React from "react";

class Events extends React.Component {
    constructor(props) {
        super(props)
        this.isAuth = false;
        this.storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        this.isAuth = this.storage ? this.storage.user[1].details.isAuth : false;

        
        this.login = document.querySelector(".event_page");
        console.log(this.login);
    }
    componentDidMount() {

    }
    render() {
        return (
        <div className="events">
            <EventPoster />
            <EventContainer isAuth={this.isAuth}/>
        </div>
        );
    }
}

// const Events = (props) => {
//     let isAuth = false;
//     let storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
//     isAuth = storage ? storage.user[1].details.isAuth : false;
//     return (
//         // <HomePoster />
//         <div className="events-container">
//             <EventPoster />
//             <EventContainer isAuth={isAuth} />
//         </div>
//     )
// }

export default Events;