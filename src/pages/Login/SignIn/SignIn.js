import React, { useState } from 'react';
import loginImg from '../../../images/login.png';
import logo from '../../../images/logo2.png';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import useAuth from '../../../hooks/useAuth';
const SignIn = () => {
    const { signInUser, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        signInUser(data.email, data.password, location, history)
    };


    return (
        <div>
            <NavigationBar />
            <div className="container pt-5" style={{ minHeight: "620px" }}>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-7 animate__animated animate__backInLeft">
                        <img src={loginImg} alt="" className="img-fluid w-75" />
                    </div>
                    <div className="col-md-5 text-center mt-5 animate__animated animate__backInRight">
                        <div className="mx-auto shadow-lg py-4 rounded-3">
                            <img src={logo} alt="" className="w-25" />
                            <h4 className="my-3 text-uppercase purple-text">Explore More By Sign in</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    className="form-control rounded-pill w-75 mx-auto py-2 px-3"
                                    placeholder="Enter your email "
                                />

                                <input
                                    {...register("password", { required: true })}
                                    type="password"
                                    className="form-control my-4 rounded-pill w-75 mx-auto py-2 px-3"
                                    placeholder="Enter your password"
                                />

                                <button
                                    type="submit"
                                    className="btn rounded-pill purple-bg text-white w-75 mx-auto py-2 px-3" >Sign in
                                </button>
                                {authError ? <p className="text-danger">Incorrect email or password! try again</p> : <p></p>}
                            </form>
                            <p className="my-3">Let us help you explore more.</p>
                            <p className="my-3">Don't have an account? <Link to="/signUp" className="purple-text">Create an account</Link>.</p>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default SignIn;