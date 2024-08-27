import React from 'react'
function Education() {
    return (
        <div className='container mb-5' style={{ marginTop: "6%", padding: "0 7%" }}>
            <div className="row">
                <div className="col-lg-6 align-self-center mb-5 "><img src="media/images/education.svg" alt="price" width="90%" /></div>
                <div className="col-lg-6 align-self-center">
                    <h4 className='mb-4'>Free and open market education</h4>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="#" className=''>Varsity<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="#" className=''>TradingQ&A<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>

        </div>
    );
}

export default Education;