import React from 'react'
import './Ecosystem.css'
function Ecosystem() {
    return (
        <div className='container mb-5' style={{ marginTop: "12%", padding: "0 7%" }}>
            <div className="row">
                <div className="col-lg-5">
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <div style={{ textIndent: "0" }}>
                        <h2>Customer-first always</h2>
                        <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className='mb-4'>
                        <h2>No spam or gimmicks</h2>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    </div>
                    <div className='mb-4'>
                        <h2>The Zerodha universe</h2>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className='mb-4'>
                        <h2>Do better with money</h2>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>

                </div>
                <div className="col-lg-7">
                    <img src="media/images/zerodhaEcosystem.png" alt="Ecosystem Image" width="90%" />
                    <div className=' text-center col-lg-11'>
                        <a className='m-5 ' href='#'>Explore our products <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        <a href='#' className='d-block d-sm-inline'>Try Kite demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="text-center press-logos mt-5">
                    <a href="#"><img src="media/images/press-logos.png" alt="press-logos" width="65%" /></a>
                </div>
            </div>


        </div >
    );
}

export default Ecosystem;