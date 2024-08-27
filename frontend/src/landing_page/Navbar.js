import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar fixed-top'>
            <div>
                <img className='logo mx-5' src="media/images/logo.svg" alt="Zerodha.img" />
            </div>
            {/* Nav for large size */}
            <div className="navLinks fs-6">
                <a href="#">Signup</a>
                <a href="#">About</a>
                <a href="#">Products</a>
                <a href="#">Pricing</a>
                <a href="#">Support</a>
                <i className="menu-btn fa fa-bars" aria-hidden="true" onClick={handleMenuToggle}></i>
            </div>

            {/* Nav for small size */}
            <div className={`nav-sm ${isMenuOpen ? 'nav-sm-active fixed-top' : ''}`}>
                <div className="container lineHeight">
                    <div className="pri-menu p-3 row">
                        <i className="exit-btn fa fa-times" aria-hidden="true" onClick={handleMenuToggle}></i>
                        <div className="sec-1 col-6">
                            <a href="#">Signup</a>
                            <a href="#">About</a>
                            <a href="#">Products</a>
                        </div>
                        <div className="sec-2 col-6">
                            <a href="#">Pricing</a>
                            <a href="#">Support</a>
                        </div>
                    </div>
                    <div className="sec-menu pb-2 p-3 row">
                        <div className="sec-1 col-6">
                            <a className='d-flex align-items-center' href="#"><img src="media/images/kite-logo.svg" alt="" height="14px" /> &nbsp; Kite</a>
                            <a className=' kite-connect d-flex align-items-center' href="#"><img src="media/images/kite-connect.svg" alt="" height="34px" />&nbsp;Kite Connect</a>
                            <a className='d-flex align-items-center' href="#"><img src="media/images/varsity-logo.png" alt="" height="19px" /> &nbsp; Varsity</a>
                        </div>
                        <div className="sec-2 col-6">
                            <a className=' d-flex align-items-center' href="#"><img src="media/images/console.svg" alt="" height="30px" /> &nbsp; Console</a>
                            <a className='d-flex align-items-center' href="#"><img src="media/images/coin.svg" alt="" height="30px" /> &nbsp; Coin</a>
                            <a className=' tqna d-flex align-items-center' href="#"><img src="media/images/tqna.png" alt="" height="18px" /> &nbsp; &nbsp;Trading Q&A</a>
                        </div>
                    </div>
                    <div className="ter-menu p-3 pb-2 row">
                        <div className="sec-1 col-6">
                            <a className='fs-4 fw-bold' href="#">Utilities</a>
                            <a className='text-nowrap' href="#">Brokerage calculator</a>
                            <a href="#">Margin calculator</a>
                            <a href="#">Holiday calendar</a>
                            <a href="#">Markets</a>
                        </div>
                        <div className="sec-2 col-6">
                            <a className='fs-4 fw-bold' href="#">Updates</a>
                            <a href="#">Z-Connect blog</a>
                            <a href="#">Pulse News</a>
                            <a href="#">Circulars / Bulletin</a>
                            <a href="#">IPOs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
