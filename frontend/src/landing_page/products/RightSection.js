import React from "react";
import "./RightSection.css";
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container  mb-5" style={{ padding: "0 6%" }}>
      <div className="row rightSection">
        <div className="col-lg-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-lg-7">
          <img src={imageURL} width="95%" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
