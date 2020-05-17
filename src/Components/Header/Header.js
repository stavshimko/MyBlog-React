import React from "react";
import {BrowserRouter as Router,Link} from "react-router-dom";


function Header(props) {
    return (
        <div>
            <header className="toolbar">
                <ul className="left-items">
                    <li><Link to="/" className="link">Home</Link></li>
                    {/*<span id="vertical-line"></span>*/}
                    <li><Link to="/newPost" className="link">New Post</Link></li>
                    {/*<span id="vertical-line"></span>*/}
                    <li><Link to="/about" className="link">About Me</Link></li>
                    {/*<span id="vertical-line"></span>*/}
                    <li><Link to="/contact" className="link">Contact Me</Link></li>
                </ul>
                <div>
                    {/*{props.user && <span>Hello {props.user}</span>}*/}
                    {!props.user && <Link className="right-item" to="/login" onClick={props.onLoginClick}>Login</Link>}
                </div>
            </header>
        </div>
    );
}



export default Header;