import React from "react";
import Axios from "axios";

export default class NewPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "title": null,
            "content": null
        };
    }

    handleTitle = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleContent = (event) => {
        this.setState({
            content:event.target.value
        })
    }



    handleSavePost = (event) => {
        event.preventDefault();
        const { title,content } = this.state;
        console.log(title + " - " + content)
        if (title && content) {
            this.handleAddPost(title,content);
            // this.props.history.go(-1);
            // // console.log(this.props.history)
        } else {
            alert("'Title' and 'Content' are required");
        }

    };
    handleAddPost = (title,content) => {
        var post = {
            "titlePost":title,
            "bodyPost":content
        }
        console.log(post)
        Axios.post('/posts',{
            titlePost:title,
            bodyPost:content
        }).then((res) => {
            if (res.status===200) {
                alert("PostPage saved successfully");
                this.setState({
                    title: null,
                    content: null
                });
            }
            // console.log(res.data)
        })
        console.log("reset params")
    };

    render() {
        console.log("run New Page")
        return (
            <form className="new-post">
                <h2>Create New Posts</h2>
                <input
                    id="title"
                    type="text"
                    placeholder="Posts title goes here..."
                    onChange={this.handleTitle}
                ></input>
                <textarea
                    id="content"
                    type="text"
                    placeholder="Posts content goes here..."
                    onChange={this.handleContent}
                ></textarea>
                <button
                    id="save"
                    type="submit"
                    onClick={this.handleSavePost}
                >Save post</button>
            </form>

        );
    }
}

