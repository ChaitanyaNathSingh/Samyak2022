// const bigPortFolioIcon = require("../Bootstrap/img/big_portfolio_item_4.png");
// const portFolioItem4 = require("../Bootstrap/img/portfolio_item_4.png");

const GalleryCard = (props) => {
  return (
    <div className="col-md-4 col-sm-6" style={{pointerEvents:'none'}}>
      <div className="portfolio-item">
        <div className="thumb">
          <a href={props.imgUrl} data-lightbox="image-1">
            <div className="hover-effect">
              <div className="hover-content">
                <h1>
                   {props.firstTitle}<em>{props.secondTitle}</em>
                </h1>
                <p>{props.subTitle}</p>
              </div>
            </div>
          </a>
          <div className="image">
            <img src={props.imgUrl} alt="pfi4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
