import styled from "styled-components";

import purpleBackground from "./img/purpleBackground.jpg";
import concertImage from "./img/concertdj.png";

const MusicContainer = styled.section`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height:800px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
`;

const MusicBackground = styled.img`
  position: absolute;
  height:50% ;
  width:100vw;
  z-index: -1;
`;

const MusicTitle = styled.h1`
  color: #fff;
  font-size: 45px;
  width: 400px;
  text-align: center;
  letter-spacing: 4px;
  
`;

const ConcertContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-flow:row wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 80vw;
  margin-bottom:50px;
`;

const ConcertContainerP = styled.p`
  color: #fff;
  text-align:justify;
  width: 480px;
  line-height: 28px;
  font-size: 22px;
  margin: auto;
`;

const ConcertContainerImage = styled.img`
  margin: auto;
  -o-object-fit: contain;
  object-fit: contain;
  @media (max-width:768px){
    width: 75%;
  }
`;

const HomeMusic = () => {
  return (
    <div>
      <MusicContainer className="music-cont">
        <MusicBackground
          className="music-background back-1"
          src={purpleBackground}
          style={{ top: 0, left: 0 }}
          alt="back1"
        />
        <MusicBackground
          className="music-background back-2"
          src={purpleBackground}
          style={{ bottom: 0, transform: "rotate(180deg)" }}
          alt="back2"
        />
        <MusicTitle
          className="music-title Mtitle-1"
          style={{ marginTop: "80px" }}
        >
          TUNE IN TO VIBE WITH YOUR FRIENDS
        </MusicTitle>
        <ConcertContainer className="concert-cont">
          <ConcertContainerP>
          The “Atīndriya” comes from the idea of bringing the technologies used in theories and implementing them wherever possible through various forms of advertising. We chose this theme keeping in mind all the ways we can implement those technologies throughout the fest. Fiction is a world without bounds that can be explored endlessly in all the fictitious and non-fictitious aspects that exist. Not confining solely to the creative components of the real or fictional world alone, this time the theme also focuses on identifying and bringing into limelight all the technical areas that have been explored and that are yet to be explored in the aforementioned areas. Fiction is a designers’ paradise and an explorers' forte but when induced with the factor that weighs in all of existence, it is much more. We are going to realize them. This make of the fest is expected to reach heights that have never been reached before. 
          </ConcertContainerP>
          <ConcertContainerImage src={concertImage} alt="concert" />
        </ConcertContainer>
        <MusicTitle
          className="music-title Mtitle-2"
          style={{ marginBottom: "80px", width: "550px", zIndex: 2 }}
        >
        </MusicTitle>
      </MusicContainer>
    </div>
  );
};

export default HomeMusic;
