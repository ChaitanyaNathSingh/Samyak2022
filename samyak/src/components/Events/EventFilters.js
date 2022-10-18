import { createRef, useEffect } from 'react';
import styled from 'styled-components';

const RangeInput = styled.input`
    width: 100%;
`;

const ContainerLeft = styled.div`
    position: absolute;
    top: 50vh;
    left: 3%;
    transform: translate(-50%, 50%) rotate(90deg);
    width: 80vh;
    z-index: 100;
`;
const ContainerRight = styled.div`
    position: absolute;
    top: 50vh;
    /* right: -500px; */
    left: 97%;
    transform: translate(-50%, 50%) rotate(90deg);
    width: 80vh;
    z-index: 100;
`;

const Slider = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

const BranchesContent = styled.div`
    width: 96.5%;
    /* border: 2px solid blue; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    div {
        /* border: 2px solid red; */
        display: inline-block;
        /* unwrap */
        flex-wrap: nowrap;
        width: 15px;
        transform: rotate(-90deg);
        color: white;
        opacity: 0.3;
    }
`; 
const EventTypeContent = styled.div`
    width: 96.5%;
    /* border: 2px solid blue; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    /* align-items: flex-start; */
    text-align: right;
    div {
        // border: 2px solid red;
        display: inline-block;
        /* unwrap */
        flex-wrap: nowrap;
        width: 15px;
        transform: rotate(-90deg);
        color: white;
        opacity: 0.3;
        direction: rtl;
    }
`;


const EventFilters = (props) => {
    const allBranches = createRef(null);
    const branchInput = createRef(null);
    const allEventTypes = createRef(null);
    const eventTypeInput = createRef(null);
    useEffect(() => {
        let departmentName, eventTypeName;
        let branches = allBranches.current.childNodes;
        let eventTypes = allEventTypes.current.childNodes;
        departmentName = branches[parseInt(branchInput.current.value)-1].innerHTML;
        eventTypeName = eventTypes[parseInt(eventTypeInput.current.value)-1].innerHTML;
        if(branchInput.current.value === "1") {
            branches[0].style.opacity = 1;
        }
        branchInput.current.addEventListener('change', () => {
            if(branchInput.current) {props.allEvents.filter(event => event.department === branches[parseInt(branchInput.current.value)-1].innerHTML);
                departmentName = branches[parseInt(branchInput.current.value)-1].innerHTML;
                for(let i=0;i<branches.length;i++) {
                    if(branchInput.current.value === (i+1).toString()) {
                        branches[i].style.opacity = 1;
                    }
                    else {
                        branches[i].style.opacity = 0.3;
                    }
                }
                props.setEvents(departmentName, eventTypeName);
            }
        })


        if(eventTypeInput.current.value === "1") 
            eventTypes[0].style.opacity = 1;
        eventTypeInput.current.addEventListener('change', () => {
            if(eventTypeInput.current) {
                eventTypeName = eventTypes[parseInt(eventTypeInput.current.value)-1].innerHTML;
                for(let i=0;i<eventTypes.length;i++) {
                    if(eventTypeInput.current.value === (i+1).toString()) {
                        eventTypes[i].style.opacity = 1;
                    }
                    else {
                        eventTypes[i].style.opacity = 0.3;
                    }
                }
                props.setEvents(departmentName, eventTypeName);
            }
        });
    }, [allBranches, branchInput, allEventTypes, eventTypeInput, props]);
    return (
        <>
            <ContainerLeft>
                <Slider>
                    <BranchesContent ref={allBranches}>
                        <div id="branch1">All</div>
                        <div id="branch2">CSE</div>
                        <div id="branch3">ECE</div>
                        <div id="branch4">MEC</div>
                        <div id="branch5">AI&DS</div>
                        <div id="branch6">BA_IAS</div>
                    </BranchesContent>
                </Slider>
                <RangeInput ref={branchInput} type="range" min="1" max="6" defaultValue={1} className="myRange"/>
            </ContainerLeft>


            <ContainerRight>
                <RangeInput ref={eventTypeInput} type="range" min="1" max="5" defaultValue={1} className="myRange"/>
                <Slider>
                    <EventTypeContent ref={allEventTypes}>
                        <div id="event-type1">All</div>
                        <div id="event-type2">Technical</div>
                        <div id="event-type3">NonTechnical</div>
                        <div id="event-type4">General</div>
                        <div id="event-type5">Mega</div>
                    </EventTypeContent>
                </Slider>
            </ContainerRight>
        </>
    );
}  

export default EventFilters;

