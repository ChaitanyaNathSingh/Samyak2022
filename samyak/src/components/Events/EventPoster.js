import styled from "styled-components";

import technicalHero from "./technicalHero.jpg";

const Poster = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${technicalHero}) no-repeat center;
  -o-object-fit: cover;
  object-fit: cover;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  @media (max-width:768px){
    max-height:50vh;
  }
`;

const PosterH1 = styled.h1`
  font-size: 150px;
  color: #fff;
  text-align: center;
  @media (max-width:768px){
    font-size:50px;
  }
`;

const EventPoster = () => {
  return (
    <Poster className="event__hero">
      <PosterH1>
        EVENTS
      </PosterH1>
    </Poster>
  );
};

export default EventPoster;
