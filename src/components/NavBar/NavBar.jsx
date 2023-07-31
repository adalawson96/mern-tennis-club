import './NavBar.css';
import React, { useState, useRef, useEffect } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

export default function NavBar(){

    const [navbarCollapsed, setNavbarCollapsed] = useState(true);
    const navbarRef = useRef();

    const handleToggle = () => {
    setNavbarCollapsed(!navbarCollapsed);
    };

    const handleOutsideClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNavbarCollapsed(true);
    }
    };

    useEffect(() => {
    if (!navbarCollapsed) {
        document.addEventListener('click', handleOutsideClick);
    }

    return () => {
        document.removeEventListener('click', handleOutsideClick);
    };
    }, [navbarCollapsed]);

    return (
    <nav id="mainNavbar" className="navbar navbar-expand-lg bg-body-tertiary" ref={navbarRef}>
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img src="./tennisLogo.png" alt="Logo" width="50" height="55" className="d-inline-block align-text-top" />
            Moinohs do Mar
        </a>
        <button className="navbar-toggler" type="button" onClick={handleToggle} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${navbarCollapsed ? '' : 'show'} justify-content-end`} id="navbarNavAltMarkup">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/events">Events</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/restaurant">Restaurant</a>
            </li>
            <Nav.Link href="/restaurant">Restaurant</Nav.Link>
            <NavDropdown title="Escola" id="escola-dropdown">
            <NavDropdown.Item href="/escola/courses">Courses</NavDropdown.Item>
            <NavDropdown.Item href="/escola/staff">Staff</NavDropdown.Item>
            <NavDropdown.Item href="/escola/about">About</NavDropdown.Item>
            </NavDropdown>
            </ul>
        </div>
        </div>
    </nav>
    );
}




// to change the background opacity when scrolling down

    // const [isScrolled, setIsScrolled] = useState(false);

    // useEffect(() => {
    //     // Add a scroll event listener on component mount
    //     window.addEventListener('scroll', handleScroll);
    //     // Clean up the event listener on component unmount
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // const handleScroll = () => {
    //     // Update the state based on scroll position
    //     const scrollTop = window.pageYOffset;
    //     const shouldChangeColor = scrollTop > 100; 
    //     // Change this condition based on when you want the color to change
    //     setIsScrolled(shouldChangeColor);
    // };