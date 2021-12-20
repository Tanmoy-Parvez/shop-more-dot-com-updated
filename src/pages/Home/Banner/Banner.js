import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../images/main-banner.png'

const Banner = () => {
    return (
        <div className="banner-bg py-3 mt-5">
            <div className="container py-3">
                <div className="row d-flex align-items-center ">
                    <div className="col-md-6 ps-5 mb-4 animate__animated animate__backInLeft">
                        <h4>Special offer</h4>
                        <h1 className="text-uppercase fw-bold mt-4">
                            Trendy <span className="purple-text">Hot Products</span>
                        </h1>
                        <h2 className="text-uppercase fw-bold">
                            For hot gadgets lovers
                        </h2>
                        <h5 className="text-secondary w-75 my-4">
                            We have best of best trendy items collections for both men and women.
                        </h5>
                        <Link to="/allProducts">
                            <button className="btn regular-btn py-2">Explore More</button>
                        </Link>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center animate__animated animate__backInRight">
                        <img src={bannerImg} alt="" className="w-75 bg-warning rounded-circle" height="410px" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;