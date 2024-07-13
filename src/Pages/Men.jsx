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

const Men = () => {
    return (
        <>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/941572/pexels-photo-941572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                        src="https://images.pexels.com/photos/845413/pexels-photo-845413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Second slide"
                        width="100%"
                        height="550"
                    />
                    <Carousel.Caption>
                        <h5 style={{ color: 'white', fontSize: 60 }}>Men's Latest</h5>
                        <p style={{ color: 'white', fontSize: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                    <Col xs><Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?w=360&t=st=1720103969~exp=1720104569~hmac=b99dab05c418bc6830e0639c0ed21b6062c90f9195dee6ed8b248f443bd1c17b" />
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
                    <Col xs={{ order: 12 }}><Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5023.jpg?w=360&t=st=1720105565~exp=1720106165~hmac=8b09c97e5fd8e89b5639aa36faa83d5da0ce91666d1508d72fd1d9a553a91da8" />
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
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/man-portrait_1296-626.jpg?w=360&t=st=1720106216~exp=1720106816~hmac=8a9a2fc74d142d8e2ed991e804310b13bdf21a21feefda27d5af718f4f323219" />
                        <Card.Body>
                            <Card.Title>Air Force</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the

                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col xs={{ order: 12 }}><Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/portrait-handsome-bearded-man-with-straw-hat-brick-wall_23-2149705871.jpg?w=360&t=st=1720105754~exp=1720106354~hmac=144d359591d71fea978c346c58552c962c077c121add0465b981444bf06cd477" />
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


                    <Col xs={{ order: 12 }}><Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/handsome-confident-young-curly-haired-man-drinking-coffee-standing-infront-isolated-white-wall_231208-1086.jpg?w=360&t=st=1720105817~exp=1720106417~hmac=2d3d7d294679a2fe096232326e37c26d07e10412aaac9bb3191047406d4cd534" />
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

                    <Col xs={{ order: 12 }}><Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/elegant-guy-posing-while-listening-music_1153-446.jpg?t=st=1720105974~exp=1720109574~hmac=aea6380338391000cc356dd915fd3522245833f077663c33954164cf073172eb&w=360" />
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
            {/* ------------------------------------------------ Men's section end ------------------------------------- */}
            <br /><br /><br />
            <section style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                    <img style={{ width: 500 ,height:570}} src="https://images.pexels.com/photos/4012254/pexels-photo-4012254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>
                <div>
                    <div style={{ fontSize: 50, fontWeight: 'bold' }}>Explore Our Products</div><br />
                    <div>You are allowed to use this HexaShop HTML CSS template. <br /> You can feel free to modify or edit this layout. <br /> You can convert this template as any kind of <br /> ecommerce CMS theme as you wish.</div><br />
                    <div style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'cursive' }}>You are not allowed to redistribute this template ZIP file <br /> on any other website.</div><br />
                    <div>There are 5 pages included in this HexaShop Template <br />and we are providing it to you for absolutely <br />free of charge at our TemplateMo website. <br />There are web development costs for us.</div><br />
                    <div>Explore Our Products</div><br />
                    <button >Discover More</button>
                </div>
            </section><br /><br /><br />
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
                    <img style={{ width: 500 }} src="https://img.freepik.com/premium-photo/man-wearing-trendy-high-quality-checked-double-pocket-shirt-fashion-photography_758367-117657.jpg?w=740" alt="" />
                </div>
            </section>
            {/* --------------------------------------------- Product page end ------------------------------------ */}
            <br />
            <br /><br />
            <Container style={{backgroundColor:'silver'}}>
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
export default Men;



