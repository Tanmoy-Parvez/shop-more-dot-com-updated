import React from 'react';
import payImg from '../../../images/bank-transfer.png'

const Pay = () => {
    return (
        <div className="text-center my-3 animate__animated animate__backInDown">
            <img src={payImg} className="img-fluid" alt="" />
            <h1 className="text-uppercase purple-text">Payment system coming soon...</h1>
        </div>
    );
};

export default Pay;