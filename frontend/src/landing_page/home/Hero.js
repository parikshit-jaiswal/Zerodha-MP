import React from 'react'
function Hero() {
    return (
        <div className='container mt-5 mb-5' style={{ paddingTop: "5rem" }} >
            <div className="row text-center">
                <img className='mb-5' src="media/images/homeHero.png" alt="Hero Image" style={{ width: "50rem", margin: "auto" }} />
                <h1 className='mt-4'>Invest in everything</h1>
                <p className='fs-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button type="button" className="btn btn-primary btn-lg mt-5" style={{ width: "10rem", margin: "auto" }}>Sign up now</button>
            </div>
        </div>
    );
}

export default Hero;