import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import Zoom from 'react-reveal/Zoom';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [cancel, setCancel] = useState(false);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        fetch("https://shop-more-dotcom.herokuapp.com/allOrders")
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [cancel, updated])

    // handle cancel order 
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

    // update status
    const [order, setOrder] = useState({});
    // handle update status
    const handleApproved = (id) => {
        fetch(`https://shop-more-dotcom.herokuapp.com/allOrders/${id}`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
        setOrder(order.status = "Shipped");

        fetch(`https://shop-more-dotcom.herokuapp.com/allOrders/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("Order Shipped successfully!");
                    setUpdated(!updated)
                }
            });
    }
    // manage all orders 
    return (
        <div className="px-2 mb-5">
            <h5 className="purple-text text-uppercase text-center pt-2">
                <i>All the orders are below</i>
            </h5>
            <h3 className="text-uppercase text-warning text-center mb-4">Manage All The Ordered Products</h3>
            <div className="row">
                {
                    allOrders.map(allOrder => <div className="col-md-4">
                        <Zoom>
                            <Card className="mb-2 text-white bg-dark">
                                <Card.Header>{allOrder?.itemName.slice(0, 50)} ({allOrder.status})</Card.Header>
                                <Card.Body>
                                    <Card.Title><i className="fas fa-user" /> {allOrder?.username}</Card.Title>
                                    <Card.Text>
                                        <h6><i className="fas fa-envelope" /> {allOrder?.email}</h6>
                                        <h6><i className="fas fa-phone-alt" /> {allOrder?.phone}</h6>
                                        <h6><i className="fas fa-map-marker-alt" /> {allOrder?.address}</h6>
                                    </Card.Text>
                                    <button
                                        onClick={() => handleApproved(allOrder?._id)}
                                        className="btn btn-outline-success text-white me-3">
                                        Shipped
                                    </button>
                                    <button
                                        onClick={() => handleCancel(allOrder?._id)}
                                        className="btn btn-outline-danger text-light">
                                        Cancel</button>
                                </Card.Body>
                            </Card>
                        </Zoom>
                    </div>
                    )
                }
            </div>
            <div className="mb-5 text-center" style={{ opacity: "0.1" }}>
                <img src={logo} />
            </div>
        </div>
    );
};

export default ManageOrders;