import React from "react";

function AsideBar() {
    return (
        <aside className="page-right">

            <ul className="latest">
                <h1>Latest</h1>
                <li>
                    <h4>Blog post #1 <a href="">go to page</a></h4>
                </li>
                <li>
                    <h4>Blog post #2 <a href="">go to page</a></h4>
                </li>
                <li>
                    <h4>Blog post #3 <a href="">go to page</a></h4>
                </li>
            </ul>
            <hr className="horizontal-line"/>
            <ul className="popular">
                <h1>Popular</h1>
                <li>
                    <h4>Blog post #3 <a href="">go to page</a></h4>
                </li>
                <li>
                    <h4>Blog post #1 <a href="">go to page</a></h4>
                </li>
                <li>
                    <h4>Blog post #2 <a href="">go to page</a></h4>
                </li>
            </ul>
        </aside>
    );
}

export default AsideBar;