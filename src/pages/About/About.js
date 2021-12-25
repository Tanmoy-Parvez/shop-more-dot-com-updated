import React from 'react';
import aboutImg from '../../images/about-banner.png'

const About = () => {
    return (
        <div className="mb-5 banner-bg py-5" id="about">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <img src={aboutImg} width="700px" alt="" className="ps-5" />
                </div>
                <div className="col-md-6">
                    <h1 className="my-3">WHY CHOOSE <span className="purple-text">SHOP MORE.COM?</span> </h1>
                    <h3>Professional and Certified</h3>
                    <p className="w-75"> We provide the continual delivery of superior technical support while simultaneously providing industry leading customer.</p>

                    <h3>Get Instant Product</h3>
                    <p className="w-75">A booking is the arrangement that you make when you book something such as a hotel room, a table at a restaurant, a theatre seat, or a place on public transport.</p>
                </div>
            </div>
        </div>
    );
};

export default About;