// import HomePoster from "../Home/HomePoster";
// import EventPoster from "./EventPoster"; // will be added after the poster is ready
import EventContainer from "./EventContainer";
import React from "react";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import SamyakFooter from "../BaseComponents/Footer/SamyakFooter";

class Events extends React.Component {
    constructor(props) {
        super(props)
        this.isAuth = false;
        this.storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        this.isAuth = this.storage ? this.storage.user[1].details.isAuth : false;

        
        this.login = document.querySelector(".event_page");
    }
    render() {
        return (
            <>
                <div className="events" style={{'backgroundColor': 'rgb(40, 40, 43)'}}>
                    <NavBarSpace />
                    {/* <NavBarSpace /> */}
                    {/* <EventPoster /> */}
                    <EventContainer isAuth={this.isAuth}/>
                </div>
                <SamyakFooter />
            </>
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