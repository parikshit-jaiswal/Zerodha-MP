import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer mt-5'>
            <div className='container mt-5' style={{ padding: "0 7vw" }}>
                <div className="row">
                    <div className="col-lg-3">
                        <img src="media/images/logo.svg" alt="zerodha logo" height="5.5%" />
                        <p className='CCmsg mt-3 text-nowrap'>© 2010 - 2024, Zerodha Broking Ltd.  <p>All rights reserved</p></p>
                    </div>
                    <div className="col-lg-3 mb-5 lh-lg">
                        <h5>Company</h5>
                        <a href="#" className='link'>About</a>
                        <a href="#" className='link'>Products</a>
                        <a href="#" className='link'>Pricing</a>
                        <a href="#" className='link'>
                            Referral programme</a>
                        <a href="#" className='link'>Careers
                        </a>
                        <a href="#" className='link'>Zerodha.tech</a>
                        <a href="#" className='link'>Press & media</a>
                        <a href="#" className='link'>Zerodha Cares(CSR)</a>
                    </div>
                    <div className="col-lg-3 mb-5 lh-lg ">
                        <h5>Support</h5>
                        <a href="#" className='link'>Contact us</a>
                        <a href="#" className='link'>Support portal</a>
                        <a href="#" className='link'>Z-Connect blog</a>
                        <a href="#" className='link'>List of charges</a>
                        <a href="#" className='link'>Downloads & resources</a>
                        <a href="#" className='link'>Videos</a>
                        <a href="#" className='link'>Market overview</a>
                        <a href="#" className='link'>How to file a complaint?</a>
                        <a href="#" className='link'>Status of your complaints</a>
                    </div>
                    <div className="col-lg-3 mb-5 lh-lg">
                        <h5>Account</h5>
                        <a href="#" className='link'>Open an account</a>
                        <a href="#" className='link'>Fund transfer</a>
                    </div>
                </div>
                <div className="about">
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="#">complaints@zerodha.com</a>, for DP related to <a href="#">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p>Procedure to file a complaint on <a href="#">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <a href="#">Smart Online Dispute Resolution</a> | <a href="#">Grievances Redressal Mechanism</a>
                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="#">create a ticket here.</a></p>

                    <div className="footerLinks">
                        <a className='link' href="#">NSF</a>
                        <a className='link' href="#">BSE</a>
                        <a className='link' href="#">Terms & conditions </a>
                        <a className='link' href="#">Policies & procedures </a>
                        <a className='link' href="#">Privacy policy </a>
                        <a className='link' href="#">Disclosure</a>
                        <a className='link' href="#">For investor's attention</a>
                        <a className='link' href="#">Investor charter</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;