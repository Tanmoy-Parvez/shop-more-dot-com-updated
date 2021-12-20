import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import Rating from "react-rating";
import Zoom from 'react-reveal/Zoom';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://shop-more-dotcom.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='banner-bg my-5 p-5 text-center'>
            <h2 className="fw-bold text-uppercase mb-4">Customers <span className="purple-text">Reviews</span> </h2>
            {reviews?.length ?
                <Row xs={1} md={3} className="g-5">
                    {
                        reviews.map(review => <Zoom>
                            <Col key={review?.id}>
                                <Card className="border-0 py-3">

                                    {review?.img ? <Card.Img variant="top" src={review?.img} className="mx-auto w-25" />
                                        :
                                        <i className="fas fa-user-circle my-" style={{ fontSize: "95px" }}></i>
                                    }

                                    <Card.Body className="px-4">
                                        <Card.Title>{review?.name}</Card.Title>
                                        <Card.Text>
                                            <h6 className="pink-text">{review?.email}</h6>
                                        </Card.Text>
                                        <Card.Text>
                                            {review?.message}
                                        </Card.Text>
                                        <Rating
                                            readonly
                                            placeholderRating={review?.rating}
                                            emptySymbol={<i className="far fa-star text-warning"></i>}
                                            placeholderSymbol={<i className="fas fa-star text-warning" />}
                                            fullSymbol={<i className="fas fa-star text-warning" />}
                                        /> ({review?.rating}/5)
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Zoom>)
                    }
                </Row>
                :
                <div className="d-flex justify-content-center">
                    <Spinner className="my-5" animation="border" variant="primary" />
                </div>
            }
        </div>
    );
};

export default Reviews;