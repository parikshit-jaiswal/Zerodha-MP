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
    <div className="container mb-5 " style={{ padding: "0 6%" }}>
      <div className="row">
        <div className="col-lg-6">
          <img src={imageURL} alt="imgage" width="50vw" />
        </div>
        <div className="col-lg-6">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={tryDemo}>Try Demo</a>
          <a href={learnMore}>Try Demo</a>
          <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" alt="googlePlay" />
          </a>
          <a href={appStore}>
            <img src="media/images/appstoreBadge.svg" alt="appstore" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
