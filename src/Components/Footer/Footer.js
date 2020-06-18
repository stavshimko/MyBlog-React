import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //
        }
    }

    render() {
        return (
            <div>
                {/*<footer className="footer-bottom">*/}
                {/*    <p>*/}
                {/*        <a className="instagram"*/}
                {/*           href="https://www.instagram.com/stavshimko"*/}
                {/*        >*/}
                {/*            <FontAwesomeIcon icon={faInstagram} size="1x" color="white"/>*/}
                {/*        </a>*/}
                {/*        <span className="byMe">© 2020 StavShimko; </span>*/}


                {/*    </p>*/}

                {/*</footer>*/}
                <footer className="footer-distributed">

                    <div className="footer-left">

                        {/*<h3 id="footerFont">SSA;</h3>*/}

                        <p id="footerVerySmallFont" >StavShimkoArt &copy; 2020</p>
                    </div>

                    <div className="footer-center">
                        <div><p id="footerVerySmallFont">TLV, ISRAEL</p></div>
                        <div><p id="footerVerySmallFont">+972-544-493600</p></div>
                        <div><p id="footerVerySmallFont">artbyshimko@gmail.com</p></div>
                    </div>

                    <div className="footer-right">

                        <div className="footer-icons">

                            <a className="instagram"
                               href="https://www.instagram.com/stavshimko"
                            >
                                <FontAwesomeIcon  id="footerSmallFont" icon={faInstagram} size="1x" color="white"/>
                            </a>
                            <a className="linkdin"
                               href="https://www.linkedin.com/in/stav-shimko-539aa091/"
                            >
                                <FontAwesomeIcon  id="footerSmallFont" icon={faLinkedin} size="1x" color="white"/>
                            </a>

                        </div>

                    </div>

                </footer>
            </div>
        );
    }
}

