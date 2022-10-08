import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Portfolio(){

    return(
        <div className="m-4">
        <Container>
            <Row>
                <Col sm={12} lg={6}>
                    <Card className="bg-dark text-white m-1">
                        <Card.Img src="https://via.placeholder.com/250" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col sm={12} lg={6}>
                    <Card className="bg-dark text-white m-1">
                        <Card.Img src="https://via.placeholder.com/250" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            
            
            <Col sm={12} lg={6}>
                    <Card className="bg-dark text-white m-1">
                        <Card.Img src="https://via.placeholder.com/250" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col sm={12} lg={6}>
                    <Card className="bg-dark text-white m-1">
                        <Card.Img src="https://via.placeholder.com/250" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            
            
            <Col sm={12} lg={6}>
                    <Card className="bg-dark text-white m-1">
                        <Card.Img src="https://via.placeholder.com/250" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col sm={12} lg={6}>
                    <Card className="bg-dark text-white m-1">
                        <Card.Img src="https://via.placeholder.com/250" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Portfolio;