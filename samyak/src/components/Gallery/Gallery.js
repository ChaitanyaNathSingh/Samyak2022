import styled from "styled-components";
import PhotoAlbum from "react-photo-album";
import SamyakFooter from "../BaseComponents/Footer/SamyakFooter";
import NavBarSpace from "../BaseComponents/NavBarSpace";
// import GalleryCard from "../Cards/GalleryCard";
import './Gallery.css';


const HomeYoutube = styled.div`
    width: auto;
    height: auto;
    margin-top: 3pc;

    display: flex;
    justify-content: space-evenly;
    iframe {
        width: 70%;
        height: 500px;
        margin: auto;
        border-radius: 15px;
        border: 2px solid #838383;
    }
    @media only screen and (max-width:1024px) {
        iframe {
            width: 95%;
            height: 220px;
        }
    }
`;

// const bigPortFolioIcon = require("../Bootstrap/img/big_portfolio_item_4.png");
// const bigPortfolioItem2 = require("../Bootstrap/img/big_portfolio_item_2.png");

// const portFolioItem1 = require("../Bootstrap/img/portfolio_item_1.png");
// const portFolioItem2 = require("../Bootstrap/img/portfolio_item_2.png");
// const portFolioItem3 = require("../Bootstrap/img/portfolio_item_3.png");
// const portFolioItem4 = require("../Bootstrap/img/portfolio_item_4.png");
// const portFolioItem5 = require("../Bootstrap/img/portfolio_item_5.png");
// const portFolioItem6 = require("../Bootstrap/img/portfolio_item_6.png");
// const portFolioItem7 = require("../Bootstrap/img/portfolio_item_7.png");
// const portFolioItem8 = require("../Bootstrap/img/portfolio_item_8.png");
// const portFolioItem9 = require("../Bootstrap/img/portfolio_item_9.png");

const Gallery = () => {
  const photos = [
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      src: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_1000.JPG',
      width: 1600,
      height: 900,
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      src: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/7X9A4390.JPG',
      width: 1600,
      height: 900,
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      src: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_1200.JPG',
      width: 1600,
      height: 900,
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      src: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_1304.JPG',
      width: 1600,
      height: 900,
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      src: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_1314.JPG',
      width: 1600,
      height: 900,
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      src: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_1568.JPG',
      width: 1600,
      height: 900,
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      src: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_3225.JPG',
      width: 1600,
      height: 900,
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      src: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_3432.JPG',
      width: 1600,
      height: 900,
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      src: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_4907.JPG',
      width: 1600,
      height: 900,
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      src: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_5670.JPG',
      width: 1600,
      height: 900,
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      src: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_6668.JPG',
      width: 1600,
      height: 900,
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      src: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/TEJ_3422.JPG',
      width: 1600,
      height: 900,
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      src: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/TEJ_8573.JPG',
      width: 1600,
      height: 900,
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      src: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/TEJ_9255.JPG',
      width: 1600,
      height: 900,
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      src: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/TEJ_9561.JPG',
      width: 1600,
      height: 900,
    }
  ]
  return (
    <>
    <div className="gallery__container">
      <div className="grid-portfolio" id="portfolio">
        <NavBarSpace />
        {/* <div style={{width:'80vw',margin:'auto',pointerEvents:'none'}}><iframe style={{zIndex:'-1'}} width="100%" height="538" src="https://www.youtube.com/embed/0J8LyBPddj0?autoplay=1&loop=1&mute=1&controls=0&playlist=0J8LyBPddj0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe><p style={{zIndex:'1'}}>&nbsp;</p></div> */}
        <HomeYoutube>
                    {/* <iframe src="https://www.youtube.com/embed/hRa6ILGqyok?&autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&rel=0&amp;" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hRa6ILGqyok" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </HomeYoutube>
        <NavBarSpace />
        <div className="gallery-container">
          <PhotoAlbum layout="rows" photos={photos} />
          {/* <div className="row">
            {data.map((item, index) => {
              return (
                <GalleryCard
                  key={index}
                  firstTitle={item.title}
                  subTitle={item.subTitle}
                  imgUrl={item.imgUrl}
                />
              );
            })} */}
            {/* <GalleryCard firstTitle={"Hasan"} secondTitle={"Prakash"} subTitle={"srihasanprakash"} imgUrl={portFolioItem2} />
            <GalleryCard firstTitle={"raclette"} secondTitle={"taxidermy"} subTitle={"The Subtitle"} imgUrl={portFolioItem1} />
            <GalleryCard firstTitle={"Hello"} secondTitle={"World"} subTitle={"The Subtitle"} imgUrl={portFolioItem3} />
            <GalleryCard firstTitle={"Image4"} secondTitle={"Image4"} subTitle={"The Subtitle"} imgUrl={portFolioItem4} /> */}
          {/* </div> */}
          {/* <div className="row">
            <div className="col-md-12">
              <div className="load-more-button">
                <a href="#0">Load More</a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    <SamyakFooter />
    </>
  );
};

export default Gallery;
