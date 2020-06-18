import React from "react";
import Posts from "./Post/Posts";


function MainSection(props) {
    return (
            <section className="page-left" >
                <h5 id="mainNormalFont">WELCOME TO MY ART</h5>

                    <Posts/>

            </section>
    );
}

export default MainSection;