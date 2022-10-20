// import HomePoster from "../Home/HomePoster";
// import EventPoster from "./EventPoster"; // will be added after the poster is ready
import EventContainer from "./EventContainer";
import React from "react";
import NavBarSpace from "../BaseComponents/NavBarSpace";
import SamyakFooter from "../BaseComponents/Footer/SamyakFooter";
import EventFilters from "./EventFilters";
import axiosInstance from "../../axios";
import EventDescription from "./EventDescription";

class Events extends React.Component {
    constructor(props) {
        super(props)
        this.isAuth = false;
        this.storage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        this.isAuth = this.storage ? this.storage.user[1].details.isAuth : false;

        
        this.login = document.querySelector(".event_page");
        this.state = {
            allEvents : [],
            allEventsLoaded: false,
            filteredEvents: [],
        }
    }
    componentDidMount() {
        axiosInstance
            .get("events/")
            .then(response => {
                this.setState({allEvents: response.data});
                this.setState({filteredEvents: response.data});
                this.setState({allEventsLoaded: true});
            })
            .catch(err => console.log(err));
    }
    setEvents = (department, eventType) => {
        let finalEvents = [];
        if(department === "All" && eventType === "All") {
            finalEvents = this.state.allEvents;
        }
        else if(department === "All") {
            finalEvents = this.state.allEvents.filter(event => event.event_type === eventType);
        }
        else if(eventType === "All") {
            finalEvents = this.state.allEvents.filter(event => event.department === department);
        }
        else {
            finalEvents = this.state.allEvents.filter(event => event.department === department && event.event_type === eventType);
        }
        this.setState({filteredEvents: finalEvents});
    }
    render() {
        return (
            <>  
                { window.innerWidth > 1024 ?
                <EventFilters allEvents={this.state.allEvents} filteredEvents={this.state.filteredEvents} setEvents={this.setEvents}/> : null}
                <div className="events" style={{'backgroundColor': 'rgb(40, 40, 43)'}}>
                    {this.state.filteredEvents.length !== 0 ? <NavBarSpace /> : null}
                    <NavBarSpace />
                    {/* <NavBarSpace /> */}
                    {/* <EventPoster /> */}
                    <EventContainer isAuth={this.isAuth} allEvents={this.state.filteredEvents} allEventsLoaded={this.state.allEventsLoaded} />
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