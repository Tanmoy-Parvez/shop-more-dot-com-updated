import React, { useState } from 'react';
import loginImg from '../../../images/signUp.png';
import logo from '../../../images/logo2.png';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import useAuth from '../../../hooks/useAuth';


const SignUp = () => {
    const { signUpUser, authError } = useAuth()
    const { register, handleSubmit } = useForm();
    const history = useHistory()
    const [error, setError] = useState('')

    const onSubmit = data => {
        signUpUser(data.email, data.password, data.name, history)
        if (data.password.length < 6) {
            setError(<h6 className="text-danger mt-3">Password must be at least 6 characters</h6>)
        }
        else if (authError) {
            setError(<h6 className="text-danger mt-3">Email already in use</h6>)
        }
        else {
            setError('')
        }
    };

    return (
        <div>
            <NavigationBar />
            <div className="container my-4 pt-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 animate__animated animate__backInRight">
                        <img src={loginImg} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-5 text-center animate__animated animate__backInLeft">
                        <div className="rounded-3 mx-auto shadow-lg py-4 mt-2">
                            <img src={logo} alt="" className="w-25" />
                            <h5 className="my-3 text-uppercase purple-text">Explore More By Sign Up</h5>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    className="form-control rounded-pill w-75 mx-auto py-2 px-3"
                                    placeholder="Full Name"
                                />
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    className="form-control rounded-pill  mt-3  w-75 mx-auto py-2 px-3"
                                    placeholder="Email"
                                />
                                <input
                                    {...register("password", { required: true })}
                                    type="password"
                                    className="form-control rounded-pill w-75 mx-auto mt-3 py-2 px-3"
                                    placeholder="Password"
                                />
                                {error}
                                <button
                                    type="submit"
                                    className="btn rounded-pill purple-bg text-white w-75 mx-auto py-2 px-3 mt-3" >Sign Up
                                </button>

                            </form>
                            <p className="my-3">Let us help you explore more.</p>
                            <p className="my-3">Already have an account? <Link to="/signIn" className="purple-text">Sign in</Link>.</p>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default SignUp;