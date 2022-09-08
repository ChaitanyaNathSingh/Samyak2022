import styled from "styled-components";

// import eventsPoster from "./img/docor_events.png";
import eventsPoster from "./img/SAMYAK_LOGOS/SAMYAK_FaceLogo_white.png";

import event1 from "./img/technical.svg";
import event2 from "./img/nontechEvent.jpg";
import event3 from "./img/event3.svg";
import event4 from "./img/Abstract Dodgeball Player Background.svg";

const EventContainer = styled.section`
  color: #252525;
  width: 100vw;
  background-color: #fff;
  z-index: 800;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: ${eventsPoster} no-repeat center;
  background-size: contain;
`;

const Title = styled.h1`
  color: #44056c;
  font-size: 40px;
  width: 850px;
  text-align: center;
  letter-spacing: 4px;
  @media(max-width:768px){
    font-size:20px;
    width: 450px;
  }
`;

const Events = styled.div`
  margin-left: 5%;
  width: 85%;
  height: 90%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  flex-flow:row wrap;
`;

const Event = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 320px;
  height: 60%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const EventImageContainer = styled.div`
  height: 50%;
  width: 80%;
  position: relative;
`;

const EventImage = styled.img`
  height: 100%;
  width: 100%;
  -o-object-fit: contain;
  object-fit: contain;f
`;

const EventImageSpan = styled.span`
  position: absolute;
  bottom: 30px;
  left: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 700;
  width: 60px;
  height: 60px;
  color: #fff;
  background-color: #44056c;
  border-radius: 100%;
`;

const EventTextContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 40%;
  width: 90%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const TextContainerH1 = styled.h1`
  color: #44056c;
  font-size: 30px;
`;

const TextContainerP = styled.p`
  color: #44056c;
  text-align:justify;
  font-size: 16px;
  font-weight: 300;
  line-height: 25px;
`;

const HomeEvents = () => {
  return (
    <div>
      <EventContainer className="events-cont">
        <Title className="title">NATIONAL LEVEL TECHNO MANAGEMENT FEST</Title>
        <Events className="events">
          <Event className="event1 event">
            <EventImageContainer className="eve-img-cont">
              <EventImage src={event1} alt="event1" />
              <EventImageSpan>1</EventImageSpan>
            </EventImageContainer>
            <EventTextContainer className="eve-text-cont">
              <TextContainerH1>Technical Events</TextContainerH1>
              <TextContainerP>
                Technical events are filled with fun, and these events are
                designed in a new way for the participants to participate in
                these events and to learn something new in every event and bag a
                lot of exciting prizes and take them home.
              </TextContainerP>
            </EventTextContainer>
          </Event>
          <Event className="event2 event">
            <EventImageContainer className="eve-img-cont">
              <EventImage src={event2} alt="event2" />
              <EventImageSpan>2</EventImageSpan>
            </EventImageContainer>
            <EventTextContainer className="eve-text-cont">
              <TextContainerH1>Non Technical Events</TextContainerH1>
              <TextContainerP>
                Non-technical events are known for the fun the participants have
                while participating in these events. These events are designed
                in such a distinct way to refresh the minds of all the
                participants to give them a fresh experience.
              </TextContainerP>
            </EventTextContainer>
          </Event>
          <Event className="event3 event">
            <EventImageContainer className="eve-img-cont">
              <EventImage src={event3} alt="event3" />
              <EventImageSpan>3</EventImageSpan>
            </EventImageContainer>
            <EventTextContainer className="eve-text-cont">
              <TextContainerH1>Literary Events</TextContainerH1>
              <TextContainerP>
                These events showcase the brilliance of students in every
                regard, by shedding light on the myriad walks of learning they
                find their interests firmly engrossed in. Calling for a quest
                for their marvelous talents, this glittering array of events
                portrays the latent spark in participants in its truest
                greatness.
              </TextContainerP>
            </EventTextContainer>
          </Event>
          <Event className="event4 event">
            <EventImageContainer className="eve-img-cont">
              <EventImage src={event4} alt="event4" />
              <EventImageSpan>4</EventImageSpan>
            </EventImageContainer>
            <EventTextContainer className="eve-text-cont">
              <TextContainerH1>Spot Events</TextContainerH1>
              <TextContainerP>
                The power of finding ground in one of the most challenging
                abilities is confined to not many individuals, which makes the
                celebration of this glorious gift all the more gratifying.
                Participants get a unique opportunity to exhibit their
                athleticism and penchant for triumph.
              </TextContainerP>
            </EventTextContainer>
          </Event>
          
        </Events>
      </EventContainer>
    </div>
  );
};

export default HomeEvents;
