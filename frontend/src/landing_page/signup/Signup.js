import React from 'react'
import "./Signup.css"
function Signup() {
    return (
        <div className='container mb-5' style={{ marginTop: "10%", paddingLeft: "10%" }}>
            <div className="row mb-5">
                <div className="col-md-7">
                    <img src="media/images/signup.png" alt="signup.png" width="95%" />
                </div>
                <div className="input-container lh-lg col-md-5">
                    <h1>Signup now</h1>
                    <p>Or track your existing application.</p>
                    <div className="input-group mt-4 mb-3 flex-nowrap">
                        <label className='label' htmlFor='mob'>Mobile number</label>
                        <span className="input-group-text" id="addon-wrapping">+91</span>
                        <input type="text" id='mob' className=" form-control" placeholder="" aria-label="" aria-describedby="addon-wrapping" />
                    </div>
                    <p>You will receive an OTP on your number</p>
                    <button type="button" className="btn mb-2 d-block btn-primary btn-sm fs-5" style={{ height: "42px", width: "8rem" }}>Continue</button>
                    <a className='small' href="#">Want to open an NRI account?</a>
                </div>
            </div>
            <div className="mt-5 endPara small text-center">
                <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit <a href="#">this article</a> to know more.</p>
                <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <a href="#">offline forms</a>. For help, <a href="#">click here.</a></p>
            </div>
        </div >
    );
}

export default Signup;