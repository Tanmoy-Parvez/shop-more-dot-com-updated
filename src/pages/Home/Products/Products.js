import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBuy from '../../../hooks/useBuy';
import useProducts from '../../../hooks/useProducts';
import Zoom from 'react-reveal/Zoom';

const Products = () => {

    const [product, setProduct] = useProducts();
    console.log(product);

    const handleBuyNow = useBuy()

    const handlePurchase = (id) => {
        handleBuyNow(id)
    }

    return (
        <div className='container my-5 text-center'>
            <h2 className="fw-bold text-uppercase">Most Sales<span className='purple-text'> Items</span> </h2>
            {product.length ? <Row xs={1} md={3} className="gx-4 gy-5 text-start m-3">
                {
                    product.slice(0, 9).map(product => <Zoom>
                        <Col key={product?._id}>
                            <Card className="border-0 py-3 shadow-lg">
                                <Card.Img variant="top" src={product?.img} className="mx-auto p-3" height="250px" />
                                <Card.Body>
                                    <Card.Title className="text-uppercase purple-text">{product?.name.slice(0, 22)}</Card.Title>
                                    <Card.Text className="text-secondary">
                                        <h6>Category: {product?.category} <span className="ms-5">Available: {product?.stock}</span> </h6>
                                    </Card.Text>
                                    <Card.Text className="text-secondary">
                                        <h6>Ratings: {product?.star}/5 <span className="ms-5">Total ratings: {product?.starCount}</span> </h6>
                                    </Card.Text>
                                    <Card.Text>
                                        <h4 className="purple-text fs-5">Price: $ {product?.price}  Only</h4>
                                    </Card.Text>
                                    <Link to={`/purchase/${product?._id}`}>
                                        <button
                                            onClick={() => handlePurchase(product?._id)}
                                            className="btn purple-bg text-white w-100">
                                            Buy Now
                                        </button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Zoom>)
                }
            </Row> : <div className="d-flex justify-content-center">
                <Spinner className="my-5" animation="border" variant="primary" />
            </div>}
            <Link to="/allProducts">
                <button className="btn regular-btn py-2 mt-4">Explore More</button>
            </Link>
        </div>
    );
};

export default Products;