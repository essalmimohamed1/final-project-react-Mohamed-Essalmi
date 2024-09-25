import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoIosContact, IoIosCart } from "react-icons/io";
import logo from "../assets/images/LogoRca.jpg";
import { MyContext } from '../utils/contextProvider';

export const Header = () => {
    const contextValue = useContext(MyContext);

    // Always call hooks at the top level
    const navigate = useNavigate();
    const location = useLocation();

    if (!contextValue) {
        console.error("MyContext is not available!");
        return null; // Or handle it in a way that suits your application
    }

    const [data, setData, basket, setBasket] = contextValue;

    const handleNavigate = (path) => {
        navigate(path);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <Navbar expand="lg" className="bg-black">
            <Container className='lg:flex lg:gap-80 sm:flex sm:flex-row sm:gap-0 lg:justify-between'>
                <Navbar.Brand href="">
                    <img width={`60vw`} src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-xl flex gap-4">
                        <Nav.Link className={`text-white ${isActive('/') ? "text-green-500" : ""}`} onClick={() => handleNavigate(`/`)}>
                            <span className={isActive('/') ? "text-green-500" : "text-white"}>Home</span>
                        </Nav.Link>
                        <Nav.Link className={`text-white ${isActive('/Shop') ? "text-green-500" : ""}`} onClick={() => handleNavigate(`/Shop`)}>
                            <span className={isActive('/Shop') ? "text-green-500" : "text-white"}>Shop</span>
                        </Nav.Link>
                        <Nav.Link className={`text-white ${isActive('/About') ? "text-green-500" : ""}`} onClick={() => handleNavigate(`/About`)}>
                            <span className={isActive('/About') ? "text-green-500" : "text-white"}>About</span>
                        </Nav.Link>
                        <Nav.Link className={`text-white ${isActive('/Contact') ? "text-green-500" : ""}`} onClick={() => handleNavigate(`/Contact`)}>
                            <span className={isActive('/Contact') ? "text-green-500" : "text-white"}>Contact</span>
                        </Nav.Link>
                    </Nav>
                    <div className='d-flex gap-3'>
                        <IoIosContact
                            className='text-gray-400 cursor-pointer'
                            onClick={() => handleNavigate(`/Logain`)}
                            size={42}
                        />
                        <div className="relative">
                            <IoIosCart
                                className="border-l-2 border-gray-400 pl-2 text-gray-400 cursor-pointer"
                                onClick={() => handleNavigate(`/Addcart`)}
                                size={42}
                            />
                            {basket.length > 0 && (
                                <span className="absolute top-0 right-0 bg-green-500 text-white rounded-full px-2 text-xs">
                                    {basket.length}
                                </span>
                            )}
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
