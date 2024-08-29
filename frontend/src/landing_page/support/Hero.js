import React from 'react'
import './Hero.css'
function Hero() {
    return (
        <>
            <div className='bg'>
                <div className=" container row" style={{ padding: "3% 13%" }}>
                    <div className="col-lg-8">
                        <p className='fs-5 fw-semibold mb-5'>Support Portal</p>
                        <p className='fs-4  mb-5'>Search for an answer or browse help topics to create a ticket</p>

                    </div>
                    <div className="col-lg-4"></div>

                </div>

            </div >
            <div className=' bdr-btm pdng container text-center' style={{ marginTop: "6%", padding: "0 7%" }}>
                <div className="row">
                    <div className="col-lg-4">

                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </>

    );
}

export default Hero;