import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoIosContact } from "react-icons/io";
import { IoIosCart } from "react-icons/io";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()
return (
    <>
        <Navbar expand="lg" className="bg-body-text-body-tertiary p-3">
            <Container className=' lg:flex lg:gap-80 sm:flex sm:flex-row sm:gap-0 lg:justify-between'>
                <Navbar.Brand href="#home"><span className='text-4xl font-extrabold w-[25vw]'>Fashe<span className='text-orange-400'>.</span></span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-xl flex gap-4">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Shop">Shop</Nav.Link>
                        <Nav.Link href="/About"><span className='text-orange-500'>About</span></Nav.Link>
                        <Nav.Link href="/Contact">Contact</Nav.Link>
                    </Nav>
                    <div className='d-flex gap-3'>
                        <IoIosContact className='text-gray-400' onClick={() => navigate(`/Logain`)} size={42} />
                        <IoIosCart className='border-l-2 border-gray-400 pl-2 text-gray-400' size={42} />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    
  );
};
