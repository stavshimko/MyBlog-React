import React from "react";

function PostPage(props){

    console.log("run PostPage Page")
    // console.log(props.post)
    return (
        <div className="post-page">
            <h2>{props.post.title}</h2>
            <p>
                {props.post.content}
            </p>
        </div>
    );
}


export default PostPage;