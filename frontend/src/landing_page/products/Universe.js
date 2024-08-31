import React from "react";
function Universe() {
  return (
    <div
      className="container mb-5 text-center"
      style={{ marginTop: "10%", padding: "0 6%" }}
    >
      <h1 className="mb-4">The Zerodha Universe</h1>
      <p className="mb-5 text-muted">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row mt-5 CCmsg">
        <div className="col-md-4">
          <img src="media/images/zerodhaFundhouse.png" alt="" width="190vw" />
          <p className=" m-4 p-2 mb-4" style={{ width: "80%" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img src="media/images/streakLogo.png" alt="" width="190vw" />
          <p className="m-4 p-2" style={{ width: "80%" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-md-4 mt-3">
          <img src="media/images/sensibullLogo.svg" alt="" width="190vw" />
          <p className="m-4 p-2" style={{ width: "80%" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img src="media/images/smallcaseLogo.png" alt="" width="190vw" />
          <p className="m-4 p-2" style={{ width: "80%" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-md-4">
          <img src="media/images/tijori.svg" alt="" width="180vw" />
          <p className="m-4 p-2" style={{ width: "80%" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
          <img src="media/images/dittoLogo.png" alt="dittoLogo" width="150vw" />
          <p className="m-4 p-2" style={{ width: "80%" }}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary btn-lg mt-5 text-center"
        style={{ width: "12rem", margin: "auto" }}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default Universe;
