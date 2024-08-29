import React from 'react'
function Team() {
    return (
        <div className=' container' style={{ marginTop: "4%", padding: "0 10%" }}>
            <h1 className=' text-center mb-5'>People</h1>
            <div className="row mt-5">
                <div className="col-lg-6  text-center">
                    <img src="media/images/nithinKamath.jpg" alt="nithinKamath" width="70%" className='rounded-circle' />
                    <p className='fs-5 mt-3'>Nithin Kamath</p>
                    <p>Founder, CEO</p>
                </div>
                <div className="col-lg-6 mt-5">
                    <div className="pb-3">Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</div>
                    <div className="pb-3">He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</div>
                    <div className="pb-3">Playing basketball is his zen.</div>
                    <div className="pb-3">Connect on <a href="/home">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a></div>

                </div>
            </div>
        </div >
    );
}

export default Team;