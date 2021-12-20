import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [cancel, setCancel] = useState(false);
    const { user } = useAuth();

    // load all data from data source
    useEffect(() => {
        fetch(`https://shop-more-dotcom.herokuapp.com/myOrder/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email, cancel])

    // cancel function
    const handleCancel = (id) => {
        const proceed = window.confirm("Are you sure you want to cancel?");
        if (proceed) {
            fetch(`https://shop-more-dotcom.herokuapp.com/removeOrder/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Order successfully cancelled!")
                        setCancel(!cancel)
                    };
                })
        }
    }
    // my orders section
    return (
        <div className="mt-3">
            <h1 className="text-center purple-text text-uppercase">My All Orders</h1>
            <div className="container">
                <div className="row mt-2 gx-5 gy-2">
                    {
                        !orders.length ?
                            <div className="fs-5 my-5 col-md-12 text-center">
                                <Spinner animation="border" variant="primary" />
                            </div>
                            :
                            orders.map(order => <div className="col-md-6 animate__animated animate__backInUp">
                                <div className="card mb-3">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={order?.img} className="w-100" height="100%" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body text-start rounded-3">
                                                <h6 className="card-title purple-text text-uppercase">{order?.itemName.slice(0, 55)}</h6>
                                                <h6 className="text-secondary text-uppercase">Order Date: {order?.date}</h6>
                                                <h6 className="card-text"> <span className="me-5 fw-bold purple-text"> ${order?.price}</span> Status: <span className="purple-text fw-bold">{order?.status}</span>
                                                </h6>
                                                <button onClick={() => handleCancel(order?._id)} className="btn btn-danger">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;