import React from "react";



function NewPost(props) {
    // console.log("run NewPost page")
        return (

                <form className="new-post">
                    <h2>Create New Post</h2>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Post title goes here..."
                        onChange={props.handleChange}
                    ></input>
                    <textarea
                        id="content"
                        type="text"
                        name="content"
                        placeholder="Post content goes here..."
                        onChange={props.handleChange}
                    ></textarea>
                    <button
                        id="save"
                        type="submit"
                        onClick={props.handleSavePost}
                    >Save post</button>
                </form>

        );
}

export default NewPost;