import React from 'react';
import useProducts from '../../../hooks/useProducts';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();

    // remove a product from db
    const handleRemoveProduct = (id) => {
        const proceed = window.confirm('Are you sure you want to remove?')
        if (proceed) {
            fetch(`https://shop-more-dotcom.herokuapp.com/removeProducts/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product successfully removed!')
                        window.location.reload()
                    }
                })
        }
    }
    return (
        <div className='container mt-3 text-center'>
            <h2 className="fw-bold text-uppercase mb-4">Manage All<span className='purple-text'> Products</span> </h2>
            {products.length ? <Row xs={1} md={3} className="gy-5 gx-4 text-start container mx-auto mb-4">
                {
                    products.map(product => <Zoom>
                        <Col key={product?._id}>
                            <Card className="border-0 py-3 shadow-lg">
                                <Card.Img variant="top" src={product?.img} className="mx-auto p-3" height="250px" />
                                <Card.Body>
                                    <Card.Title className="text-uppercase purple-text">{product?.name.slice(0, 20)}</Card.Title>
                                    <Card.Text className="text-secondary">
                                        <h6>Category: {product?.category} <span className="ms-3">Available: {product?.stock}</span> </h6>
                                    </Card.Text>
                                    <Card.Text className="text-secondary">
                                        <h6>Ratings: {product?.star}/5 <span className="ms-3">Total ratings: {product?.starCount}</span> </h6>
                                    </Card.Text>
                                    <Card.Text>
                                        <h4 className="purple-text fs-5">Price: $ {product?.price}  Only</h4>
                                    </Card.Text>
                                    <button onClick={() => handleRemoveProduct(product?._id)} className="btn btn-danger text-white w-100">Remove</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Zoom>)
                }
            </Row> : <div className="d-flex justify-content-center">
                <Spinner className="my-5" animation="border" variant="primary" />
            </div>}
        </div>
    );
};

export default ManageProducts;