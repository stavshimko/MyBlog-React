import React from "react";
import {Link} from "react-router-dom";
// import image from "../../photos/emptyImg.png";


function Post(props) {
    return (
        <Link to={`/post/${props.id}`} onClick={props.click} id={props.id}>
            <article className="post" id={props.id}>

                    <img className="cross" src={props.image} id={props.id} alt="img"></img>
                {/*<img src={logo} alt="Logo" />*/}

                <h4 className="header-top" id={props.id}>{props.title}</h4>
                <p id={props.id}>{props.content}</p>
                <div className="left-bottom" id={props.id}>Published {props.published} by {props.author}</div>
            </article>
        </Link>
    );
}

function Posts(props) {
    // console.log(props.post)
    return props.posts.map(function(post,index) {
        return <Post key={index}
                     title={post.title}
                     content={post.content}
                     published={post.published}
                     author={post.author}
                     id={post.id}
                     image={post.img}
                     click={props.click}
                />
    })
}



export default Posts;