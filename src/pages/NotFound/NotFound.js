import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../images/404-png.png'


const NotFound = () => {
    // 404 error message page
    return (
        <div className="container text-center">
            <div className="my-5">
                <img src={errorImg} alt="" className="img-fluid" />
            </div>
            {/* home button */}
            <Link to="/home">
                <button className="btn btn-dark">Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;