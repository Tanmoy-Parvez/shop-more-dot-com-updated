import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AddProduct from '../Admin/AddProduct/AddProduct';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageOrders from '../Admin/ManageOrders/ManageOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import Footer from '../Shared/Footer/Footer';
import MyOrders from '../User/MyOrders/MyOrders';
import Pay from '../User/Pay/Pay';
import Review from '../User/Review/Review';
import logo from '../../images/logo.png';
import AdminRoute from '../AdminRoute/AdminRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();
    return (
        <div style={{ height: "100%" }} className="banner-bg">
            <div className="row g-1">
                <div className="col-md-3 mb-3">
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <h5 className="text-white text-uppercase me-5 pe-3">
                                <i className="fas fa-columns"></i> Dashboard
                            </h5>
                        </div>
                    </nav>
                    <div className="show" id="navbarToggleExternalContent">
                        <div className="bg-dark p-3" style={{ height: "100vh" }}>
                            {user?.email && <h4 className="text-light fw-bold ps-4 mb-3">
                                <i className="fas fa-user-circle"></i> {user?.displayName}
                            </h4>}
                            <ul className="menu-list">
                                <li className="nav-items">
                                    <Link to="/">
                                        <i className="fas fa-home"></i> Home
                                    </Link>
                                </li>
                            </ul>
                            {!admin ? <ul className="menu-list text-start">
                                <li className="nav-items">
                                    <Link to={`${url}/myorders`}>
                                        <i className="fas fa-shopping-cart"></i>  My Orders
                                    </Link>
                                </li>
                                <li className="nav-items">
                                    <Link to={`${url}/review`}>
                                        <i className="fas fa-star"></i> Review
                                    </Link>
                                </li>
                                <li className="nav-items">
                                    <Link to={`${url}/pay`}>
                                        <i className="fas fa-dollar-sign ms-1"></i> Payment
                                    </Link>
                                </li>
                            </ul>
                                :
                                <ul className="menu-list">
                                    <li className="nav-items">
                                        <Link to={`${url}/addProduct`}>
                                            <i className="fas fa-plus-circle"></i> Add A Product
                                        </Link>
                                    </li>
                                    <li className="nav-items">
                                        <Link to={`${url}/makeAdmin`}>
                                            <i className="fas fa-user-plus"></i> Make An Admin
                                        </Link>
                                    </li>
                                    <li className="nav-items">
                                        <Link to={`${url}/manageOrders`}>
                                            <i className="fas fa-tasks"></i>  Manage All Orders
                                        </Link>
                                    </li>
                                    <li className="nav-items">
                                        <Link to={`${url}/manageProducts`}>
                                            <i className="fas fa-cart-plus"></i> Manage Products
                                        </Link>
                                    </li>
                                </ul>}
                            <button onClick={logOut} className="btn btn-outline-light ms-4">
                                <i className="fas fa-sign-out-alt"></i> Logout
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-9" style={{ height: "100%" }}>
                    <div className="bg-dark text-center text-light text-uppercase py-2">
                        <h3>Welcome Back {user?.displayName}</h3>
                    </div>
                    <Switch>
                        <Route exact path={`${path}/`}>
                            <div className="text-center my-5 pt-5" style={{ opacity: 0.2 }} >
                                <div>
                                    <img src={logo} className="img-fluid" alt="" />
                                    <h2 className="mb-5 text-uppercase purple-text mt-2">Shop More.Com</h2>
                                </div>
                            </div>
                        </Route>
                        <Route exact path={`${path}/myorders`}>
                            <MyOrders />
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <Review />
                        </Route>
                        <Route exact path={`${path}/pay`}>
                            <Pay />
                        </Route>
                        <AdminRoute exact path={`${path}/manageOrders`}>
                            <ManageOrders />
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/addProduct`}>
                            <AddProduct />
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/manageProducts`}>
                            <ManageProducts />
                        </AdminRoute>
                        <AdminRoute exact path={`${path}/makeAdmin`}>
                            <MakeAdmin />
                        </AdminRoute>
                    </Switch>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Dashboard;