import React from "react";
function CreateTicket() {
  return (
    <div className=" container" style={{ padding: "0 8%" }}>
      <div className="row mt-5 mb-5">
        <h1 className="fs-4 fw-normal mb-4 mb-5">
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-lg-4 col-md-6  mt-2 mb-2">
          <h4 className="fs-4 fw-normal mb-4 d-flex">
            <span className="fs-2 material-symbols-outlined">add_circle</span>{" "}
            &nbsp;Account Opening
          </h4>
          <div
            className="px-4"
            style={{ fontSize: "0.85rem", lineHeight: "30px" }}
          >
            <a href="#">Getting started</a>
            <br />
            <a href="">Online</a>
            <br />
            <a href="">Offline</a>
            <br />
            <a href="">Charges</a>
            <br />
            <a href="">Company, Partnership and HUF Account</a>
            <br />
            <a href="">NRI Account Opening</a>
            <br />
          </div>
          <br />
        </div>
        <div className="col-lg-4 col-md-6  mt-2 mb-2">
          <h4 className="fs-4 fw-normal mb-4 d-flex align-items-center">
            <span class="fs-1 material-symbols-outlined">person</span> Your
            Zerodha Account
          </h4>
          <div
            className="px-4"
            style={{ fontSize: "0.85rem", lineHeight: "30px" }}
          >
            <a href="">Login credentials</a>
            <br />
            <a href="">Your Profile</a>
            <br />
            <a href="">Account modification and segment addition</a>
            <br />
            <a href="">CMR & DP ID</a>
            <br />
            <a href="">Nomination</a>
            <br />
            <a href="">Transfer and conversion of shares</a>
            <br />
          </div>
        </div>
        <div className="col-lg-4 col-md-6  mt-2 mb-2">
          <h4 className=" fs-4 fw-normal mb-4 d-flex align-items-center">
            <span class="fs-2 material-symbols-outlined">bar_chart</span>
            &nbsp;Trading and Markets
          </h4>
          <div
            className="px-4"
            style={{ fontSize: "0.85rem", lineHeight: "30px" }}
          >
            <a href="">Trading FAQs</a>
            <br />
            <a href="">Kite</a>
            <br />
            <a href="">Product and order types</a>
            <br />
            <a href="">Corporate actions</a>
            <br />
            <a href="">Kite features</a>
            <br />
          </div>
        </div>
        <div className="col-lg-4 col-md-6  mt-2 mb-2">
          <h4 className="fs-4 fw-normal mb-4 d-flex align-items-center">
            <span class="fs-2 material-symbols-outlined">credit_card</span>
            &nbsp;Funds
          </h4>
          <div
            className="px-4"
            style={{ fontSize: "0.85rem", lineHeight: "30px" }}
          >
            <a href="">Fund withdrawal</a>
            <br />
            <a href="">Adding funds</a>
            <br />
            <a href="">Adding bank accounts</a>
            <br />
            <a href="">eMandates</a>
            <br />
          </div>
        </div>
        <div className="col-lg-4 col-md-6  mt-2 mb-2">
          <h4 className="fs-4 fw-normal mb-4 d-flex align-items-center">
            <span class="fs-2 material-symbols-outlined">
              radio_button_checked
            </span>
            &nbsp;Console
          </h4>
          <div
            className="px-4"
            style={{ fontSize: "0.85rem", lineHeight: "30px" }}
          >
            <a href="">IPO</a>
            <br />
            <a href="">Portfolio</a>
            <br />
            <a href="">Funds statement</a>
            <br />
            <a href="">Profile</a>
            <br />
            <a href="">Reports</a>
            <br />
            <a href="">Referral program</a>
            <br />
          </div>
        </div>
        <div className="col-lg-4 col-md-6  mt-2 mb-2">
          <h4 className="fs-4 fw-normal mb-4 d-flex align-items-center">
            <span className="fs-2 material-symbols-outlined">brightness_1</span>
            &nbsp;Coin
          </h4>
          <div
            className="px-4"
            style={{ fontSize: "0.85rem", lineHeight: "30px" }}
          >
            <a href="">Understanding mutual funds and Coin</a>
            <br />
            <a href="">Coin app</a>
            <br />
            <a href="">Coin web</a>
            <br />
            <a href="">Transactions and reports</a>
            <br />
            <a href="">National Pension Scheme (NPS)</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
