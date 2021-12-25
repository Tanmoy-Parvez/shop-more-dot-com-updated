import React from 'react';

const Subscribe = () => {
    return (
        <div className="text-center mt-5 bg-light py-5">
            <h3>SIGN UP FOR NEWSLETTER</h3>
            <h5 className="w-50 mx-auto fw-normal my-4 text-secondary">You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</h5>

            <div className="d-flex justify-content-center">
                <input type="email" className="form-control w-25 py-2" placeholder="Your Email Address" />
                <button className="btn btn-dark">SUBSCRIBE</button>
            </div>

        </div >
    );
};

export default Subscribe;