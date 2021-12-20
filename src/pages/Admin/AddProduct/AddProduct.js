import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import logo from '../../../images/logo2.png';
import Zoom from 'react-reveal/Zoom';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post("https://shop-more-dotcom.herokuapp.com/products", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("New Product Successfully Added😃!")
                    reset()
                };
            })
    };


    // add new tour section
    return (
        <div className="container my-4 text-center">
            <div className="row">
                <div className="col-md-2"></div>
                <Zoom>
                    <div className="col-md-8">
                        <div className="pb-5 pt-3 rounded-3 mx-auto shadow-lg">
                            <img src={logo} alt="" className="w-25" />
                            <h3 className="my-4 text-uppercase purple-text">Add A New Product</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("name", { required: true })}
                                    className="form-control w-75 mx-auto"
                                    placeholder="Product Name"
                                />
                                <input
                                    {...register("description", { required: true })}
                                    className="form-control w-75 my-4 mx-auto"
                                    placeholder="Description"
                                />
                                <input
                                    type="number"
                                    {...register("price", { required: true })}
                                    className="form-control w-75 mx-auto"
                                    placeholder="Price"
                                />
                                <input
                                    {...register("img", { required: true })}
                                    className="form-control w-75 mx-auto my-4"
                                    placeholder="Image Url"
                                />
                                <button
                                    type="submit"
                                    className="btn purple-bg text-white w-75 mx-auto py-2 px-3" >Add
                                </button>
                            </form>
                        </div>
                    </div>
                </Zoom>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default AddProduct;