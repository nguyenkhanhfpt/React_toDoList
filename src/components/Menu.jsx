import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { Link } from "react-router-dom";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
        <div>
            <Navbar color="light" light expand="md">
                <Link className="navbar-brand" to="/">My App</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/toDoList">To do list</Link>
                        </NavItem>
                        <NavItem>
                        <Link className="nav-link" to="/settingColor">Setting color</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}