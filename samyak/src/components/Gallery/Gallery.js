// import { Link } from 'react-router-dom';

import NavBarSpace from "../BaseComponents/NavBarSpace";
import GalleryCard from "../Cards/GalleryCard";
import './Gallery.css';

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
  let data = [
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      imgUrl: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_1000.JPG'
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      imgUrl: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/7X9A4390.JPG'
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      imgUrl: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_1200.JPG'
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      imgUrl: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_1304.JPG'
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      imgUrl: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_1314.JPG'
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      imgUrl: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_1568.JPG'
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      imgUrl: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_3225.JPG'
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      imgUrl: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_3432.JPG'
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      imgUrl: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_4907.JPG'
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      imgUrl: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_5670.JPG'
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      imgUrl: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/IMG_6668.JPG'
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      imgUrl: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/TEJ_3422.JPG'
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      imgUrl: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/TEJ_8573.JPG'
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      imgUrl: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/TEJ_9255.JPG'
    },
    {
      // title: 'Gallery',
      // subTitle: 'Gallery Subtitle',
      imgUrl: 'https://raw.githubusercontent.com/SriyaKotha/samyak22/master/Gallery/TEJ_9561.JPG'
    }
  ]
  return (
    <div className="gallery__container">
      <div className="grid-portfolio" id="portfolio">
        <NavBarSpace />
        <div style={{width:'80vw',margin:'auto',pointerEvents:'none'}}><iframe style={{zIndex:'-1'}} width="100%" height="538" src="https://www.youtube.com/embed/0J8LyBPddj0?autoplay=1&loop=1&mute=1&controls=0&playlist=0J8LyBPddj0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe><p style={{zIndex:'1'}}>&nbsp;</p></div>

        <div className="container">
          <div className="row">
            {data.map((item, index) => {
              return (
                <GalleryCard
                  key={index}
                  firstTitle={item.title}
                  subTitle={item.subTitle}
                  imgUrl={item.imgUrl}
                />
              );
            })}
            {/* <GalleryCard firstTitle={"Hasan"} secondTitle={"Prakash"} subTitle={"srihasanprakash"} imgUrl={portFolioItem2} />
            <GalleryCard firstTitle={"raclette"} secondTitle={"taxidermy"} subTitle={"The Subtitle"} imgUrl={portFolioItem1} />
            <GalleryCard firstTitle={"Hello"} secondTitle={"World"} subTitle={"The Subtitle"} imgUrl={portFolioItem3} />
            <GalleryCard firstTitle={"Image4"} secondTitle={"Image4"} subTitle={"The Subtitle"} imgUrl={portFolioItem4} /> */}
          </div>
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
  );
};

export default Gallery;
