import React, { Component } from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222
    }

    .navbar-brand, .navbar-nav .nav-link{
        color: #bbb;
        
        &:hover{
            color: blue;
        }
    }

`
export const NavigationBar = () => ( 
    <Styles>
        <Navbar expand="lg">
        <Navbar.Brand href="/"></Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m1-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/hospitallookup">Hospital Lookup</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/operationlookup">Operation Lookup</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

