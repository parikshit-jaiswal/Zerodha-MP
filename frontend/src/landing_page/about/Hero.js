import React from 'react'
function Hero() {
    return (
        <div className=' container' style={{ marginTop: "6%", padding: "0 10%" }}>
            <div className=" bdr-btm text-center lh-lg pb-5">
                <h2>We pioneered the discount broking model in India.</h2>
                <h2>Now, we are breaking ground with our technology.</h2>
            </div>
            <div className="row pdng " style={{ marginTop: "7%", paddingBottom: "5%", paddingLeft: "5%" }}>
                <div className="col-lg-6" >
                    <div className="pb-3">We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</div>
                    <div className="pb-3">Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</div>
                    <div className="pb-3">Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</div>
                </div>
                <div className="col-lg-6">
                    <div className="pb-3">In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</div>
                    <div className="pb-3"><a href="#">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</div>
                    <div className="pb-3">And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="#">blog</a> or see what the media is <a href="#">saying about us.</a></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;