import React from "react";
import {Link} from "react-router-dom";


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
                    {props.logedIn && <span>Hello {props.user}
                    <button
                        id="logout"
                        type="submit"
                        onClick={props.handleLogout}
                    >Logout</button></span>}
                    {!props.logedIn && <ul className="right-item">
                        <li><Link to="/login" className="linkLogin">Login</Link></li>
                        <li><Link to="/signup" className="linkLogin">SignUp</Link></li>
                        </ul>
                        }
                </div>
            </header>
        </div>
    );
}



export default Header;