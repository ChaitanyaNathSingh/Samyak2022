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
`;
const ContainerRight = styled.div`
    position: absolute;
    top: 50vh;
    /* right: -500px; */
    left: 97%;
    transform: translate(-50%, 50%) rotate(90deg);
    width: 80vh;
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


const EventFilters = () => {
    const allBranches = createRef(null);
    const branchInput = createRef(null);
    const allEventTypes = createRef(null);
    const eventTypeInput = createRef(null);
    useEffect(() => {
        let branches = allBranches.current.childNodes;
        branches[0].style.opacity = 1;
        branchInput.current.addEventListener('change', () => {
            for(let i=0;i<branches.length;i++) {
                if(branchInput.current.value === (i+1).toString()) {
                    branches[i].style.opacity = 1;
                }
                else {
                    branches[i].style.opacity = 0.3;
                }
            }
        })


        let eventTypes = allEventTypes.current.childNodes;
        eventTypes[0].style.opacity = 1;
        eventTypeInput.current.addEventListener('change', () => {
            for(let i=0;i<eventTypes.length;i++) {
                if(eventTypeInput.current.value === (i+1).toString()) {
                    eventTypes[i].style.opacity = 1;
                }
                else {
                    eventTypes[i].style.opacity = 0.3;
                }
            }
        });
    }, [allBranches, branchInput, allEventTypes, eventTypeInput]);
    return (
        <>
            <ContainerLeft>
                <Slider>
                    <BranchesContent ref={allBranches}>
                        <div id="branch1">ALL</div>
                        <div id="branch2">CSE</div>
                        <div id="branch3">ECE</div>
                        <div id="branch4">EEE</div>
                        <div id="branch5">ECM</div>
                        <div id="branch6">MEC</div>
                        <div id="branch7">Civil</div>
                        <div id="branch8">CSE</div>
                        <div id="branch9">ECE</div>
                        <div id="branch10">EEE</div>
                        <div id="branch11">ECM</div>
                        <div id="branch12">MEC</div>
                        <div id="branch13">Civil</div>
                        <div id="branch14">CSE</div>
                        <div id="branch15">ECE</div>
                        <div id="branch16">EEE</div>
                        <div id="branch17">ECM</div>
                        <div id="branch18">MEC</div>
                        <div id="branch19">Civil</div>
                    </BranchesContent>
                </Slider>
                <RangeInput ref={branchInput} type="range" min="1" max="19" defaultValue={1} className="myRange"/>
            </ContainerLeft>


            <ContainerRight>
                <RangeInput ref={eventTypeInput} type="range" min="1" max="4" defaultValue={1} className="myRange"/>
                <Slider>
                    <EventTypeContent ref={allEventTypes}>
                        <div id="event-type1">Technical</div>
                        <div id="event-type2">NonTechnical</div>
                        <div id="event-type3">Literary</div>
                        <div id="event-type4">Spot</div>
                    </EventTypeContent>
                </Slider>
            </ContainerRight>
        </>
    );
}  

export default EventFilters;