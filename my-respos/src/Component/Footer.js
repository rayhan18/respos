import React, {Component,Fragment} from 'react';
import {Container, NavDropdown, Navbar, Nav, Button, Card} from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                {/*<Container fluid={true}>*/}
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark fixed-bottom" >

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto ml-auto">
                            <Button variant="primary lg wx-">Save</Button>{' '}
                            <Button variant="primary lg ml-3">Print</Button>{' '}
                            <Button variant="primary lg ml-3">Print</Button>{' '}
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
                {/*</Container>*/}
            </Fragment>
        );
    }
}

export default Footer;