import React from "react";
import {Link} from "react-router-dom";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        }
    }


    render() {
        return (
            <div>
                <nav className="toolbar">
                    <ul className="left-items">
                        <li><Link to="/" className="link">Home</Link></li>
                        {/*/!*<span id="vertical-line"></span>*!/*/}
                        {/*<li><Link to="/newPost" className="link">New Post</Link></li>*/}
                        {/*/!*<span id="vertical-line"></span>*!/*/}
                        {/*<li><Link to="/about" className="link">About Me</Link></li>*/}
                        {/*/!*<span id="vertical-line"></span>*!/*/}
                        {/*<li><Link to="/contact" className="link">Contact Me</Link></li>*/}
                    </ul>
                    <div>
                        {this.props.logedIn && <span>Hello {this.props.user}
                            <button
                                id="logout"
                                type="submit"
                                onClick={this.props.handleLogout}
                            >Logout</button></span>}
                        {!this.props.logedIn && <ul className="right-item">
                            <li><Link to="/login" className="linkLogin">Log in</Link></li>
                            <li><Link to="/signup" className="linkLogin">Create account</Link></li>
                        </ul>
                        }
                    </div>

                </nav>
                <header className="black">
                    <h1>ART by Stav Shimko ;</h1>
                </header>
                <div className="footer">
                    <ul className="footer-center">
                        <li><Link to="/" className="link">My Blog</Link></li>
                        {/*<span id="vertical-line"></span>*/}
                        <li><Link to="/newPost" className="link">New Post</Link></li>
                        {/*<span id="vertical-line"></span>*/}
                        <li><Link to="/about" className="link">About Me</Link></li>
                        {/*<span id="vertical-line"></span>*/}
                        <li><Link to="/contact" className="link">Contact Me</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

