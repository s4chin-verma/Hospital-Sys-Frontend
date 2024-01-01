import React from "react";
import '../css/NavBar.css';

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">Hospital</div>
            <ul className="nav-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Patient-List</a></li>
                <li><a href="#">Add</a></li>
            </ul>
        </nav>
    );
}

