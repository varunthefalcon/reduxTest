import React, { Component, Fragment } from 'react';
import {
    Navbar,
    NavbarBrand,

} from 'reactstrap';

class MyNavBar extends Component {

    render() {
        return (
            <Fragment>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Redux training</NavbarBrand>
                </Navbar>
            </Fragment>
        );
    }
}

export default MyNavBar;