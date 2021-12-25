import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import blog1 from '../../../images/blog-img/blog1.jpg'
import blog2 from '../../../images/blog-img/blog2.jpg'
import blog3 from '../../../images/blog-img/blog3.jpg'
import Zoom from 'react-reveal/Zoom';
const Blogs = () => {
    return (
        <div className="container text-center text-uppercase" id="blogs">
            <h1 className="fw-bold">Latest <span className="purple-text">Blogs</span> </h1>
            <Row xs={1} md={3} className="my-5">
                <Zoom>
                    <Col>
                        <Card className="bg-dark border-0 text-white">
                            <Card.Img src={blog1} alt="Card image" style={{ opacity: 0.5 }} />
                            <Card.ImgOverlay>
                                <Card.Title className="mt-5">Great Explore With Sunglasses</Card.Title>
                                <Card.Text>
                                    <h6><i className="far fa-clock"></i> 25 October, 2021 <span><i className="fas fa-comments ms-2"></i> Comments(3)</span></h6>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark border-0 text-white">
                            <Card.Img src={blog2} alt="Card image" style={{ opacity: 0.5 }} />
                            <Card.ImgOverlay>
                                <Card.Title className="mt-5">Great Explore With Sunglasses</Card.Title>
                                <Card.Text>
                                    <h6><i className="far fa-clock"></i> 25 October, 2021 <span><i className="fas fa-comments ms-2"></i> Comments(3)</span></h6>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark border-0 text-white">
                            <Card.Img src={blog3} alt="Card image" style={{ opacity: 0.5 }} />
                            <Card.ImgOverlay>
                                <Card.Title className="mt-5">Great Explore With Sunglasses</Card.Title>
                                <Card.Text>
                                    <h6><i className="far fa-clock"></i> 25 October, 2021 <span><i className="fas fa-comments ms-2"></i> Comments(3)</span></h6>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Zoom>

            </Row>
        </div>
    );
};

export default Blogs;