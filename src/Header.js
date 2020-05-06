import React from "react";

function Header() {
    return (
        <nav className="toolbar">
            <span className="left-items">
                <a href="">Home</a>
                <span className="vertical-line"></span>
                <a href="">About Me</a>
                <span className="vertical-line"></span>
                <a href="">Contact Me</a>
            </span>
            <a href="" className="right-item">Login</a>
        </nav>
    );
}

export default Header;