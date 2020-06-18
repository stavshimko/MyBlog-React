import React from "react";
import {Link} from "react-router-dom";
import Axios from "axios";
import image from "../../../photos/emptyImg.png";
// Axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:5000'

export default class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        Axios.get('/posts').then((res) => {
            if (res.status===200) {
                this.setState({
                    posts: res.data
                });
            }
            // console.log(res.data)
        })
    }


    render() {
        // console.log(this.state.posts)
        return this.state.posts.map(function (post, index) {
            return <Post key={index}
                          title={post.titlePost}
                          content={post.bodyPost}
                          published={post.createTimeUTC}
                          author={post.author}
                          id={post.idPost}
                          image={post.img}
                          // click={props.click}
            />
        })
    }
}

    function Post(props){
        return (
            <Link to={`/post/${props.id}`}>
                <article className="post">

                    <img className="cross" src={image} alt="img"></img>
                    {/*<img src={logo} alt="Logo" />*/}

                    <h4 className="header-top">{props.title}</h4>
                    <p>{props.content}</p>
                    <div className="left-bottom">Published at {props.published} by {props.author}</div>
                </article>
            </Link>
        );
    }




