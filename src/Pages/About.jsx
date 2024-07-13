
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const About = () => {
    return (
        <>
            <Card className="bg-dark text-white">
                <Card.Img src="  https://images.unsplash.com/photo-1511135232973-c3ee80040060?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height='500px' />
                <Card.ImgOverlay>

                    <center>
                        <Card.Text>
                            <Card.Title style={{ fontSize: 80, marginTop: 140, backgroundColor: 'lite' }}>About Our Company</Card.Title>
                            <Card.Text style={{ fontSize: 20, fontWeight: 'bold' }}>This is a wider card with supporting text below as a natural lead-in
                                to additional content. <br />This content is a little bit longer.</Card.Text>
                        </Card.Text>
                    </center>

                </Card.ImgOverlay>
            </Card>
            {/* -----------------------------------hero section end ----------------------------- */}
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptates eius architecto autem! Dolores voluptatem quia expedita ad dicta harum ullam suscipit ab aliquam, reprehenderit doloribus nulla provident quae iusto.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <br /><br /><br />
            {/* ------------------------------------------------------------------------ */}
            <section style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                    <div style={{ fontSize: 50, fontWeight: 'bold' }}>About Us & Our Skills</div><br />
                    <div>You are allowed to use this HexaShop HTML CSS template. <br /> You can feel free to modify or edit this layout. <br /> You can convert this template as any kind of <br /> ecommerce CMS theme as you wish.</div><br />
                    <div style={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'cursive' }}>You are not allowed to redistribute this template ZIP file <br /> on any other website.</div><br />
                    <div>There are 5 pages included in this HexaShop Template <br />and we are providing it to you for absolutely <br />free of charge at our TemplateMo website. <br />There are web development costs for us.</div><br />
                    <div>Explore Our Products</div><br />
                    <button >Discover More</button>
                </div>
                <div>
                    <img style={{ width: 500, height: 600 }} src="https://images.pexels.com/photos/7679682/pexels-photo-7679682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>
            </section>
            <br /><br />
            <center style={{fontSize:40,fontWeight:'bold'}}>Our Amazing Team</center><br /><br />
            {/* -----------------------------------------about end --------------------------- */}
            <CardGroup>
                <Card>
                    <center><Card.Img variant="top" style={{ width: 300 }} src="https://images.pexels.com/photos/7679463/pexels-photo-7679463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></center>

                    <Card.Body>
                        <Card.Title>Ragnar Lodbrok</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <center><Card.Img variant="top" style={{ width: 300 }} src="https://images.pexels.com/photos/7679732/pexels-photo-7679732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></center>
                    <Card.Body>
                        <Card.Title>Ragnar Lodbrok</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <center>  <Card.Img variant="top" style={{ width: 300 }} src="https://images.pexels.com/photos/6050421/pexels-photo-6050421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></center>
                    <Card.Body>
                        <Card.Title>Ragnar Lodbrok</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup><br /><br />
            {/* ---------------------------------team end-------------------------------------------- */}

            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel><br />
                <Button variant="primary">Submit</Button>
            </Container>
        </>
    )
}
export default About;