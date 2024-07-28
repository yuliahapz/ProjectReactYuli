import "./Navbar.css";
import { useState } from "react";

const Navbar = ({ logo, isShowLogin }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
                {isShowLogin && <button className="navbar-btn">Login</button>}
            <button className="navbar-toggle" onClick={toggleMenu}>
                {isMenuOpen ? "X" : "☰"}
            </button>
            <a href="#Home">
                <img src={logo} alt="Logo" className="navbar-logo" />
            </a>
            <ul className={`navbar-menu ${isMenuOpen ? "active" : "hidden"}`}>
                <li><a href="#Home">Home</a></li>
                <li><a href="#ourService">Our Service</a></li>
                <li><a href="#aboutUs">About Us</a></li>
                <li><a href="#Home">Pricing</a></li>
            </ul>
            <li><button className="navbar-btn"><a href="#">Login</a></button></li>
        </nav>
    );
};

export default Navbar;
