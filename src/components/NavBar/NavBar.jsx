import './NavBar.css';
// import React, { useState, useEffect } from 'react';

export default function NavBar(){
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

    return (
        // <nav className={isScrolled ? 'scrolled' : ''}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="./tennisLogo.png" alt="Logo" width="50" height="55" />
                        Moinohs do Mar
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="nav-link" href="/events">Events</a>
                        <a className="nav-link" href="/restaurant">Restaurant</a>
                        <a className="nav-link" href="/schedule">Escola</a>
                        {/* <a className="nav-link disabled">Schedule</a> */}
                        </div>
                    </div>
                </div>
            </nav>
        // </nav>
    )
};