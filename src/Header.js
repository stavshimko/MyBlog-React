import React from "react";

function Header() {
    return (
        <nav className="toolbar">
            <ul className="left-items">
                <li><a href="">Home</a></li>
                <span className="vertical-line"></span>
                <li><a href="">About Me</a></li>
                <span className="vertical-line"></span>
                <li><a href="">Contact Me</a></li>
            </ul>
            <a href="" className="right-item">Login</a>
        </nav>
    );
}

export default Header;