import React from 'react'
import "./Hero.css"
function Hero() {
    return (
        <div className=' bdr-btm pdng container text-center' style={{ marginTop: "6%", padding: "0 7%" }}>
            <h1 className='heading'>Pricing</h1>
            <p className='fs-5 bdr-btm pdng'>Free equity investments and flat ₹20 intraday and F&O trades</p>
            <div className="row">
                <div className="col-lg-4">
                    <img src="media/images/pricing0.svg" alt="0.svg" height="50%" />
                    <h2>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-lg-4">
                    <img src="media/images/pricing20.svg" alt="20.svg" height="50%" />
                    <h2 className='text-nowrap'>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-lg-4">
                    <img src="media/images/pricing0.svg" alt="0.svg" height="50%" />
                    <h2>Free direct MF</h2>
                    <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;