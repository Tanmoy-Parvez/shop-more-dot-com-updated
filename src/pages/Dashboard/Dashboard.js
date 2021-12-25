import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';

import banner from '../../images/dashboard-banner.jpg';
import useAuth from '../../hooks/useAuth';

import AddProduct from '../Admin/AddProduct/AddProduct';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageOrders from '../Admin/ManageOrders/ManageOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import AdminRoute from '../AdminRoute/AdminRoute';

import MyOrders from '../User/MyOrders/MyOrders';
import Pay from '../User/Pay/Pay';
import Review from '../User/Review/Review';
import Footer from '../Shared/Footer/Footer';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth()
    return (
        <div>
            <Navbar className="purple-bg" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="/" className="text-white text-uppercase">
                        {user?.email && <h4>{user?.displayName}'s Dashboard</h4>}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton className="purple-bg">
                            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white">Dashboard</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="banner-bg text-center menu-item">
                            <Nav className="justify-content-end flex-grow-1 pe-3 fs-5">
                                <Link to="/home">Home</Link>
                                {!admin ? <Nav>
                                    <Link to={`${url}/myOrder`}>My Orders</Link>
                                    <Link to={`${url}/giveReview`}>Review</Link>
                                    <Link to={`${url}/payment`}>Payment</Link>
                                </Nav>
                                    :
                                    <Nav>
                                        <Link to={`${url}/manageOrders`}>Manage All Orders</Link>
                                        <Link to={`${url}/manageProducts`}>Manage Products</Link>
                                        <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                                        <Link to={`${url}/addProduct`}>Add Product</Link>
                                    </Nav>}
                                <button onClick={logOut} className="btn btn-danger mt-3 w-25 mx-auto">Log Out</button>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <div>
                <Switch>
                    <Route exact path={`${path}`}>
                        <div className="text-center">
                            <img src={banner} alt="" height="500px" />
                        </div>
                    </Route>
                    <Route exact path={`${path}`}>
                        <img src={banner} alt="" className="" height="500px" />
                    </Route>
                    <Route exact path={`${path}/myOrder`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/giveReview`}>
                        <Review></Review>
                    </Route>
                    <Route exact path={`${path}/payment`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute exact path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                </Switch>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;