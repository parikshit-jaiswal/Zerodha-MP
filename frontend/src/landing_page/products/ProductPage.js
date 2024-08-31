import React from "react";
import Hero from "./Hero";
import Universe from "./Universe";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
function ProductPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection />
      <Universe />
    </div>
  );
}

export default ProductPage;
