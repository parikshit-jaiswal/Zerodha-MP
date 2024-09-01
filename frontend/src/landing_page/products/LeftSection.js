import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mb-5" style={{ padding: "0 6%" }}>
      <div className="row">
        <div className="col-lg-7">
          <img src={imageURL} alt="imgage" width="85%" />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4 mt-5">
          <h1 className="mb-4 px-4 ">{productName}</h1>
          <p className="lh-lg text-muted px-4">{productDescription}</p>
          <div className="px-4 d-flex justify-content-between">
            <a className="" href={tryDemo}>
              Try Demo <i className="fa fa-arrow-right"></i>
            </a>
            <a className="px-5" href={learnMore}>
              Learn More <i className="fa fa-arrow-right"></i>
            </a>
          </div>
          <div className="px-4 mt-4 d-flex justify-content-around">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="googlePlay" />
            </a>
            <a className="mx-4" href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="appstore" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
