import React from "react";
import Posts from "./Post/Posts";


function MainSection(props) {
    return (
            <section className="page-left" >
                <h1>This is my blog</h1>

                    <Posts/>

            </section>
    );
}

export default MainSection;