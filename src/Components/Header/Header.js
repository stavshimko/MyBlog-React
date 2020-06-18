import React from "react";
import {Link} from "react-router-dom";
import Axios from "axios";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // user: this.props.user,
            // logedIn: this.props.logedIn
        }
    }

    // userLogin = () => {
    //     Axios.get('/user').then((res) => {
    //         if (res.status===200) {
    //             this.setState({
    //                 user: res.data,
    //                 logedIn: 1
    //             });
    //         }
    //         // console.log(res.data)
    //     }).catch((err) => {
    //         this.setState({
    //             user: null,
    //             logedIn: null
    //         });
    //     });
    // }



    // componentDidMount() {
    //     this.props.userLogin()
    // }

    render() {
        return (
            <div>
                <nav className="toolbar">
                    <ul  id="headerNormalFont" className="left-items">
                        <li id="headerIconFont">SSA;</li>
                        <li><Link to="/" className="link">Home</Link></li>
                        {/*/!*<span id="vertical-line"></span>*!/*/}
                        {/*<li><Link to="/newPost" className="link">New Post</Link></li>*/}
                        {/*/!*<span id="vertical-line"></span>*!/*/}
                        {/*<li><Link to="/about" className="link">About Me</Link></li>*/}
                        {/*/!*<span id="vertical-line"></span>*!/*/}
                        {/*<li><Link to="/contact" className="link">Contact Me</Link></li>*/}
                    </ul>
                    <div id="headerNormalFont">
                        {this.props.logedIn && <span id="headerNormalFont">Hello {this.props.user}
                            <button
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
                    <h1 id="headerFont">STAV SHIMKO ART;</h1>
                </header>
                <div className="footer">
                    <ul id="headerNormalFont" className="footer-center">
                        <li><Link to="/" className="link" >My ART</Link></li>
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

