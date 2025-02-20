import React from 'react';
import logo from '../images/logo.png'
import './Navbar.css'
import { Button, Flex } from 'antd';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo" ></div>
            <div className="nav-btns">
                <Flex gap="small" wrap>
                        <Button>Appointment</Button>       
                        <Button>Contact</Button>       
                        <Button>About</Button>       
                        <Button>Profile</Button>       
                </Flex>
            </div>
        </div>
    );
}

export default Navbar;