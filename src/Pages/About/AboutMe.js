import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

function AboutMe(props) {
    console.log('run About Me')
    return (
            <div className="about-me">
                <h2>AboutMe</h2>
                <p>
                    My Instagram
                </p>
                <a className="instagram"
                   href="https://www.instagram.com/stavshimko"
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" color="black"/>
                </a>
            </div>

    );
}

export default AboutMe;