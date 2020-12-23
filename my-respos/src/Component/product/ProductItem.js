import React, {Component, Fragment} from 'react';
import  {Nav,Container,Accordion,Card ,Row,Col,Button,Table} from "react-bootstrap";


class ProductItem extends Component {
    render() {
        return (
            <Fragment>
                <Container className="container">
                    <Row >
                        <Col sm={12} md={8} lg={5} className="tableBill">
                            <Table striped bordered hover size="sm">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col sm={12} md={4} lg={3}>

                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <Accordion defaultActiveKey="0" className="sidebarAcordion">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Click me!
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Button variant="primary">Primary</Button>{' '}
                                            <Button variant="secondary">Secondary</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Click me!
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <Button variant="primary">Primary</Button>{' '}
                                            <Button variant="secondary">Secondary</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        Click me!
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <Button variant="primary">Primary</Button>{' '}
                                            <Button variant="secondary">Secondary</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                            <Button variant="primary">Primary</Button>{' '}
                                            <Button variant="secondary">Secondary</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        Click me!
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <Button variant="primary">Primary</Button>{' '}
                                            <Button variant="secondary">Secondary</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        Click me!
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <Button variant="primary">Primary</Button>{' '}
                                            <Button variant="secondary">Secondary</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="5">
                                        Click me!
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>
                                            <Button variant="primary">Primary</Button>{' '}
                                            <Button variant="secondary">Secondary</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="6">
                                        Click me!
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="6">
                                        <Card.Body>
                                            <Button variant="primary">Primary</Button>{' '}
                                            <Button variant="secondary">Secondary</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="7">
                                        Click me!
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="7">
                                        <Card.Body>
                                            <Button variant="primary">Primary</Button>{' '}
                                            <Button variant="secondary">Secondary</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="8">
                                        Click me!
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="8">
                                        <Card.Body>
                                            <Button variant="primary">Primary</Button>{' '}
                                            <Button variant="secondary">Secondary</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="9">
                                        Click me!
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="9">
                                        <Card.Body>
                                            <Button variant="primary">Primary</Button>{' '}
                                            <Button variant="secondary">Secondary</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="10">
                                        Click me!
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="10">
                                        <Card.Body>
                                            <Button variant="primary">Primary</Button>{' '}
                                            <Button variant="secondary">Secondary</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                            <Button variant="success mt-2">Success</Button>{' '}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>

                </Container>

            </Fragment>
        );
    }
}

export default ProductItem;