import React, {Component,Fragment} from 'react';
import {Container,NavDropdown,Navbar,Nav} from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <Fragment>
                {/*<Container fluid={true}>*/}
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark fixed-top" >
                        <Navbar.Brand href="#home">My Restaurant</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#features">Admin</Nav.Link>


                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">SignIn</Nav.Link>
                                <Nav.Link href="#deets">Sign Out</Nav.Link>
                                {/*<Nav.Link eventKey={2} href="#memes">*/}
                                {/*    Dank memes*/}
                                {/*</Nav.Link>*/}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                {/*</Container>*/}
            </Fragment>
        );
    }
}

export default Home;