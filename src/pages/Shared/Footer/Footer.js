import React from 'react';
import logo from '../../../images/logo2.png'
const Footer = () => {
    return (
        <div className="bg-warning pt-5">
            <div className="row container-fluid text-white mx-auto pb-2">
                <div className="col-md-4 ps-3 mt-4">
                    <h6> <i className="fas fa-map-marker-alt fs-5"></i> H#111(5th Floor),Road #10,Mirpur-10</h6>
                    <h6 className="ms-3">Gulshan-2, Dhaka-1212, Bangladesh</h6>
                    <img src={logo} alt="" className="ps-5 w-50 mb-3" />
                </div>
                <div className="col-md-2 mt-4">
                    <h4 className="mb-4">Details</h4>
                    <h6>About</h6>
                    <h6>Our Teams</h6>
                    <h6>Our Policy</h6>
                    <h6>Terms and Conditions</h6>
                </div>
                <div className="col-md-2 mt-4">
                    <h4 className="mb-4">Quick info</h4>
                    <h6>Sales</h6>
                    <h6>Contact</h6>
                    <h6>Our Blogs</h6>
                    <h6>Reviews</h6>
                </div>
                <div className="col-md-4 mt-4">
                    <h4>About Us</h4>
                    <p className="w-75 pe-4" style={{ textAlign: 'justify' }}>We provide our customers with best of best. Their satisfaction is our main policy.We try to give them best product with good quality and in a cheap rate.</p>

                    <i className="fab fa-facebook-square fs-3"></i>
                    <i className="fab fa-instagram-square fs-3 mx-3"></i>
                    <i className="fab fa-linkedin fs-3"></i>
                    <i className="fab fa-youtube fs-3 ms-3"></i>
                </div>
            </div>
            <div className="pb-2 pt-4" style={{ backgroundColor: "black" }}>
                <p className="text-white text-center">Copyright &copy; 2022 || All rights reserved by Shop More.Com.</p>

            </div>
        </div >
    );
};

export default Footer;