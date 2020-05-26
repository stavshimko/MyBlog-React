import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";

import './App.css';
import './Pages/NewPost/newPost.css';
import './Pages/PostPage/PostPage.css';
import './Pages/About/AboutMe.css';
import './Pages/Contact/ContactMe.css';
import './Components/Header/Header.css';
import './Components/Sidebar/AsideBar.css';
import './Components/MainSection/MainSection.css';

import Header from './Components/Header/Header';
import AboutMe from "./Pages/About/AboutMe";
import ContactMe from "./Pages/Contact/ContactMe";
import HomePage from "./Pages/Home/HomePage";
import PostPage from "./Pages/PostPage/PostPage";
import NewPost from "./Pages/NewPost/NewPost";
//import img from './photos/emptyImg.png'

// var posts = [
//     {
//         id: 1,
//         title: 'Blog post #1',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//         img: img,
//         published: '3 days ago',
//         author: 'Stav Shimko'
//     },
//     {
//         id: 2,
//         title: 'Blog post #2',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//         img: '',
//         published: '2 days ago',
//         author: 'Stav Shimko'
//     }
    // {
    //     id: 3,
    //     title: 'Blog post #3',
    //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //     img: '',
    //     published: '1 days ago',
    //     author: 'Stav Shimko'
    // }
// ]

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            "user": null,
            // "title": null,
            // "content": null,
            // "image": null,
            // "idPost": null
        }

    }

    onLoginButtonClick = () => {
        console.log("Click login");
        this.setState({user: "Stav"});

    }

    // postById = (array, id) => {
    //     let post = array.find((element) => {
    //         return element.id == id;
    //     })
    //     return post;
    //
    // }


    render() {
        return (

            <div>
                <Router>
                <Header user={this.state.user}
                        onLoginClick={this.onLoginButtonClick}
                />

                   <Switch>
                       <Redirect exact from="/" to="/home"></Redirect>
                       <Route path="/about">
                           <AboutMe/>
                       </Route>
                       <Route path="/contact">
                           <ContactMe/>
                       </Route>
                       <Route path="/post/:postId" component={PostPage}>
                       </Route>
                       <Route path="/newPost" component={NewPost}>
                       </Route>
                       <Route path="/">
                           <HomePage latest={this.state.latest}
                                     popular={this.state.popular}
                           />
                       </Route>
                    </Switch>

                </Router>
            </div>
        );
    }
}

