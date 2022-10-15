import styled from 'styled-components';
// import Edificio from '../Home/img/Events/EDIFICIO.png';

const HomeEventsBox = styled.div`
  width: 400px;
  padding: 20px;
  display: inline-block;
  min-height: 570px;
  height: auto;
  border-radius: 3px;
  text-align: center;
  animation: border 3s linear infinite alternate;
  border: 2px solid #ffcd6a;
  background: rgb(0, 0, 0,.1);
  backdrop-filter: blur(2px);
  margin-bottom: 35px;
  img {
    width: 100%;
    height: 100%;
  }
  img:hover {
    opacity: .7;
    transition: .3s;
  }
  h2 {
    color: #ffcd6a;
    margin-top: 10px;
    letter-spacing: 1px;
  }
  .event__description {
    color: #fff;
    margin-top: 5px;
    line-height: 25px;
    height: 100px;
    overflow: auto;
    position: relative;
  }
  .event__description::-webkit-scrollbar {
    width: 5px;
    color: white;
  }
  .event__description::-webkit-scrollbar-thumb {
    background: #ffcd6a;
  }
  .event__description::-webkit-scrollbar-track {
    background: #333;
  }

  a {
    position: relative;
    top: 15px;
    font-weight: 500;
    color: #000000;
    padding: 5px 30px;
    font-size: 18px;
    border-radius: 4px;
    text-decoration: none;
    /* border: 2px solid #cf9a2e; */
    background: linear-gradient(to right,#ffca5f,#cf9a2e);

    display: inline-block;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 1024px) {
    width: 340px;
    min-height: 450px;
    h2 {
      font-size: 21px;
    }
    .event__description {
      font-size: 14px;
      line-height: 24px;
    }
    img {
      width: 300px;
      height: 300px;
      padding: 0;
      margin: 0;
    }
  }
`;

const ImageHolder = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 20px;
    z-index: -10;
  }
  @media only screen and (max-width: 1024px) {
    margin: 0;
    padding: 0;
    height: 300px;
    width: 300px;
  }
`;

const NewEventCard = (props) => {
  const loadHandler = (event) => {
    console.log("Image loaded");
    let parent = event.target.parentElement;
    let loaderTag = parent.children[1];
    // let loader = document.querySelector(".event__loader");
    loaderTag.style.display = "none";
  }
  return(
    <HomeEventsBox data-aos="zoom-out" data-aos-duration="500">
        <ImageHolder>
          <img onLoad={loadHandler} src={props.event.event_image} alt="event" />
          <span className='event__loader'>Loading...</span>
        </ImageHolder>
        <h2>{props.event.name}</h2>
        <div className='event__description'>
          <p>{props.event.description}</p>
        </div>
        <a href="#0">Open</a>
    </HomeEventsBox>
  );
}

export default NewEventCard;

