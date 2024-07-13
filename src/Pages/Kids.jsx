import Carousel from 'react-bootstrap/Carousel';
//------------------------------- hero section end -----------------------------------------------
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// ------------- card end -----------------------
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// ------------- grid end -----------------------
import Form from 'react-bootstrap/Form';
//------------------ Form end ------------------------

const Kids = () => {
    return (
        <>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="First slide"
                        width="100%"
                        height="550"
                    />
                    <Carousel.Caption>
                        <h5 style={{ color: 'white', fontSize: 60 }}>We Are Hexashop</h5>
                        <p style={{ color: 'white', fontSize: 20 }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1094084/pexels-photo-1094084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Second slide"
                        width="100%"
                        height="550"
                    />
                    <Carousel.Caption>
                        <h5 style={{ color: 'white', fontSize: 60 }}>Kid's Latest</h5>
                        <p style={{ color: 'white', fontSize: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1094086/pexels-photo-1094086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Third slide"
                        width="100%"
                        height="550"
                    />
                    <Carousel.Caption>
                        <h5 style={{ color: 'white', fontSize: 60 }}>Explore Our Products</h5>
                        <p style={{ color: 'white', fontSize: 20 }}>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* ------------------------------------------- hero section end -------------------------------------------------------------------- */}
            <br /><br />
            <center>
            <Container>
                <Row>
                    <Col xs><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1620758/pexels-photo-1620758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Classic Spring</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3771682/pexels-photo-3771682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Love Nona</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col xs={{ order: 12 }}><Card style={{ width: '18.5rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/2317018/pexels-photo-2317018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Air Force</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the

                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col xs={{ order: 12 }}><Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1620826/pexels-photo-1620826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Love Nana</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>


                    <Col xs={{ order: 12 }}><Card style={{ width: '17rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1620812/pexels-photo-1620812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Air Force</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col xs={{ order: 12 }}><Card style={{ width: '17.1rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/8576219/pexels-photo-8576219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        <Card.Body>
                            <Card.Title>Classic Spring</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            </center>
            {/* ------------------------------------------------ Kid's section end ------------------------------------- */}
            <br /><br /><br />
            <section style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                    <img style={{ width: 500, height: 600 }} src="https://img.freepik.com/free-photo/full-length-portrait-cute-little-girl-hat_171337-13768.jpg?w=360&t=st=1720113853~exp=1720114453~hmac=6a9642eddc2cb0ac6236dab233d5b905cb39dcf92602b01a92790c97c4917f3d" />
                </div>
                <div>
                    <div style={{ fontSize: 50, fontWeight: 'bold' }}>Explore Our Products</div><br />
                    <div>You are allowed to use this HexaShop HTML CSS template. <br /> You can feel free to modify or edit this layout. <br /> You can convert this template as any kind of <br /> ecommerce CMS theme as you wish.</div><br />
                    <div style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'cursive' }}>You are not allowed to redistribute this template ZIP file <br /> on any other website.</div><br />
                    <div>There are 5 pages included in this HexaShop Template <br />and we are providing it to you for absolutely <br />free of charge at our TemplateMo website. <br />There are web development costs for us.</div><br />
                    <div>Explore Our Products</div><br />
                    <button >Discover More</button>
                </div>

            </section>
            <br /><br /><br />
            <section style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                    <div style={{ fontSize: 50, fontWeight: 'bold' }}>Explore Our Products</div><br />
                    <div>You are allowed to use this HexaShop HTML CSS template. <br /> You can feel free to modify or edit this layout. <br /> You can convert this template as any kind of <br /> ecommerce CMS theme as you wish.</div><br />
                    <div style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'cursive' }}>You are not allowed to redistribute this template ZIP file <br /> on any other website.</div><br />
                    <div>There are 5 pages included in this HexaShop Template <br />and we are providing it to you for absolutely <br />free of charge at our TemplateMo website. <br />There are web development costs for us.</div><br />
                    <div>Explore Our Products</div><br />
                    <button >Discover More</button>
                </div>
                <div>
                    <img style={{ width: 500, height: 600 }} src="https://img.freepik.com/free-photo/full-shot-smiley-girl-posing-with-hat_23-2149853319.jpg?w=360&t=st=1720113989~exp=1720114589~hmac=f51099cb48d9b96f9cc322b48178f5da6968a16830ab2f0b275bc94a587f73b4" />
                </div>
            </section>
            {/* --------------------------------------------- Product page end ------------------------------------ */}
            <br />
            <br /><br />
            <Container style={{ backgroundColor: 'silver' }}>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
            
        </>
    )
}
export default Kids;



