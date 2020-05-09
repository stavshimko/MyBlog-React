import React from "react";

function AsideBar() {
    return (
        <aside className="page-right">
            <div className="latest">
                <h1>Latest</h1>
                <h4>Blog post #1 <a href="">go to page</a></h4>
                <h4>Blog post #2 <a href="">go to page</a></h4>
                <h4>Blog post #3 <a href="">go to page</a></h4>
            </div>
            <div className="horizontal-line"></div>
            <div className="popular">
                <h1>Popular</h1>
                <h4>Blog post #3 <a href="">go to page</a></h4>
                <h4>Blog post #1 <a href="">go to page</a></h4>
                <h4>Blog post #2 <a href="">go to page</a></h4>
            </div>
        </aside>
    );
}

export default AsideBar;