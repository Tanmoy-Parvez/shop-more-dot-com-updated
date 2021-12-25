import React from 'react';

const Services = () => {
    return (
        <div className="container my-5" id="services">
            <h2 className="fw-bold text-uppercase text-center my-5">Our <span className='purple-text'>Services
            </span> </h2>
            <div className="row g-5">
                <div className="col-md-4">
                    <div className="text-center py-5 shadow-sm service-card">
                        <i className="fas fa-hand-holding-usd fs-1 mb-3"></i>
                        <h4>MONEY BACK</h4>
                        <p>100% Money Back - 30 days</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center py-5 shadow-sm service-card">
                        <i className="fas fa-headset fs-1 mb-3"></i>
                        <h4>24H SUPPORT</h4>
                        <p>Service support fast 24/7</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center py-5 shadow-sm service-card">
                        <i className="fas fa-shipping-fast fs-1 mb-3"></i>
                        <h4>FAST DELIVERY</h4>
                        <p>Super fast product delivery</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;