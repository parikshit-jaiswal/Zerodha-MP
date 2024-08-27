import React from 'react'
function Pricing() {
    return (
        <div className='container mb-5' style={{ marginTop: "10%", padding: "0 7%" }}>
            <div className="row">
                <div className="col-lg-4">
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" className=''>See pricing <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-lg-8 "><img src="media/images/Price.png" alt="price" width="95%" /></div>
            </div>


        </div>
    );
}

export default Pricing;