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
            “Live The Change” is what this epic edition of Samyak would profess
            as that is the sole way of reaching the zenith of talent and ardour.
            Taking to the skies from this exhilarating theme, Samyak’ 22 is on
            the verge of turning into reality a unique vision, that
            distinguishes its brilliance from the rest and carries it to the
            crown.
          </ConcertContainerP>
          <ConcertContainerImage src={concertImage} alt="concert" />
        </ConcertContainer>
        <MusicTitle
          className="music-title Mtitle-2"
          style={{ marginBottom: "80px", width: "550px", zIndex: 2 }}
        >
          SURABHI 2022
        </MusicTitle>
      </MusicContainer>
    </div>
  );
};

export default HomeMusic;
