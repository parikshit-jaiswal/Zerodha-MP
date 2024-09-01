import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <>
      <div className="bg">
        <section
          className=" container white"
          id="supportHero"
          style={{ padding: "0 4%" }}
        >
          <div className="d-flex justify-content-between pt-5">
            <h4 className="head mb-4">Support Portal</h4>
            <a
              className="text-decoration-underline"
              href=""
              style={{ paddingRight: "4rem" }}
            >
              Track Tickets
            </a>
          </div>
          <div className="row p-lg-5">
            <div className="col-lg-7">
              <h1 className="fs-3 mb-5">
                Search for an answer or browse help topics to create a ticket
              </h1>
              <input placeholder="Eg. how do I activate F&O, why is my order getting rejected ..." />
              <br />
              <div className="py-3 d-flex flex-wrap justify-content-between">
                <a className="text-decoration-underline mb-2" href="">
                  Track account opening
                </a>
                <a className="text-decoration-underline mb-2" href="">
                  Track segment activation
                </a>
                <a className="text-decoration-underline mb-2" href="">
                  Intraday margins
                </a>
                <br />
                <a className="text-decoration-underline mb-2" href="">
                  Kite user manual
                </a>
              </div>
            </div>
            <div className="col-lg-5 p-3 lh-lg mt-5">
              <h1 className="fs-3">Featured</h1>
              <ol>
                <li>
                  <a className="text-decoration-underline mb-5" href="">
                    Current Takeovers and Delisting - January 2024
                  </a>
                </li>
                <li>
                  <a className="text-decoration-underline mb-5" href="">
                    Latest Intraday leverages - MIS & CO
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
