import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";

import './App.css';
import './Pages/NewPost/newPost.css';
import './Pages/PostPage/PostPage.css';
import './Pages/About/AboutMe.css';
import './Pages/Contact/ContactMe.css';
import './Pages/Login/Login.css';
import './Components/Header/Header.css';
import './Components/Sidebar/AsideBar.css';
import './Components/MainSection/MainSection.css';

import Header from './Components/Header/Header';
import AboutMe from "./Pages/About/AboutMe";
import ContactMe from "./Pages/Contact/ContactMe";
import HomePage from "./Pages/Home/HomePage";
import PostPage from "./Pages/PostPage/PostPage";
import NewPost from "./Pages/NewPost/NewPost";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

import Axios from "axios";
//import img from './photos/emptyImg.png'

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            "user": null,
            "pass": null,
            "resp": null,
            "logedIn": null
            // "content": null,
            // "image": null,
            // "idPost": null
        }

    }

    handleUser = (event) => {
        this.setState({
            user: event.target.value
        });
        // console.log(this.state.user)
    }

    handlePass = (event) => {
        this.setState({
            pass:event.target.value
        });
        // console.log(this.state.pass)
    }

    handleSaveLogin = (event) => {
        event.preventDefault();
        const {user,pass} = this.state;
        // console.log(user + " - " + pass);
        // const data = {
        //     user: this.state.user,
        //     pass: this.state.pass
        // }
        Axios.post('/login', {
            username:user,
            pass:pass
        })
            .then((res) => {
                this.setState({
                    pass:null,
                    resp: "Success: user loged in.",
                    logedIn: 1
                });
                alert(this.state.resp);
            }).catch((err) => {
            this.setState({
                user: null,
                pass: null,
                resp: "Error: Failed login.",
                logedIn: null
            });
            alert(this.state.resp);
        });
            // console.log(user + "-" + pass)

        // console.log("login")
    }

    handleLogout = () => {
        const {user} = this.state;
        Axios.post('/logout',{}).then((res) => {
            this.setState({
                user: null,
                logedIn: null,
                resp: "User Logout"
            });
            alert(this.state.resp);
        });

    }

    render() {
        return (

            <div>
                <Router>
                <Header logedIn={this.state.logedIn}
                        user={this.state.user}
                        handleLogout ={this.handleLogout}
                        // onLoginClick={this.onLogin}
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
                       <Route path="/login">
                           <Login handleUser={this.handleUser}
                                  handlePass={this.handlePass}
                                  handleSaveLogin={this.handleSaveLogin}
                           />
                       </Route>
                       <Route path="/signup" component={SignUp}>
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

