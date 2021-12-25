import React from 'react';
import payImg from '../../../images/bank-transfer.png'

const Pay = () => {
    return (
        <div className="text-center my-3 animate__animated animate__backInDown" style={{ minHeight: "600px" }}>
            <h1 className="text-uppercase purple-text">Payment system coming soon...</h1>
            <img src={payImg} className="img-fluid" alt="" />
        </div>
    );
};

export default Pay;