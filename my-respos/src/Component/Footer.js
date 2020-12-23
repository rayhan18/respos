import React, {Component,Fragment} from 'react';
import {Container,NavDropdown,Navbar,Nav} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                {/*<Container fluid={true}>*/}
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark fixed-bottom" >
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/*</Container>*/}
            </Fragment>
        );
    }
}

export default Footer;