import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo2.png';

const Review = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post("https://shop-more-dotcom.herokuapp.com/reviews", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Your Review Successfully Sent😃!")
                    reset()
                };
            })
    };

    return (
        <div className="container my-3 text-center">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 animate__animated animate__backInUp">
                    <div className="pb-5 pt-3 rounded-3 mx-auto shadow-lg">
                        <img src={logo} alt="" className="w-25" />
                        <h4 className="my-4 text-uppercase purple-text">Give your valuable Review</h4>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {user?.displayName && <input
                                {...register("name")}
                                defaultValue={user?.displayName}
                                className="form-control w-75 mx-auto"
                            />}
                            {user?.email && <input
                                {...register("email")}
                                className="form-control w-75 my-4 mx-auto"
                                defaultValue={user?.email}
                            />}
                            <textarea
                                {...register("message", { required: true })}
                                className="form-control w-75 mx-auto"
                                placeholder="Message"
                            />
                            <input
                                {...register("rating", { required: true, min: 0, max: 5 })}
                                className="form-control w-75 mx-auto my-4"
                                placeholder="Rating out of 5"
                            />
                            <button
                                type="submit"
                                className="btn purple-bg text-white w-75 mx-auto py-2 px-3" >Send
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default Review;