import React from "react";
import Axios from "axios";

export default class PostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: []
        };
    }

    componentDidMount() {
        // console.log(this.props.match.params)
        let id = this.props.match.params.postId;
        Axios.get(`/posts/${id}`).then((res) => {
            if (res.status===200) {
                // console.log(res)
                this.setState({
                    post: res.data,
                });
            }
            // console.log(res)
        })

    }


    render () {
        console.log("run PostPage Page")
        // console.log(props.post)
        return (
            <div className="post-page">
                <h2 id="post-title">{this.state.post.titlePost}</h2>
                <p id="post-content">
                    {this.state.post.bodyPost}
                </p>
            </div>
        );
    }
}

