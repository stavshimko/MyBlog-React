import React from "react";
import Axios from "axios";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "user": null,
            "pass": null,
            "resp":null
        };
    }

    handleNewUser = (event) => {
        this.setState({
            user: event.target.value
        });
        // console.log(this.state.user)
    }

    handleNewPass = (event) => {
        this.setState({
            pass:event.target.value
        });
        // console.log(this.state.pass)
    }

    handleSaveSignUp = (event) => {
        event.preventDefault();
        const {user,pass} = this.state;
        // console.log(user + " - " + pass);
        // const data = {
        //     user: this.state.user,
        //     pass: this.state.pass
        // }
        Axios.post('/signup', {
            username:user,
            pass:pass
        })
            .then((res) => {
                this.setState({
                    user: null,
                    pass: null,
                    resp: "Success: user signup."
                });
                alert(this.state.resp);
            }).catch((err) => {
            this.setState({
                user: null,
                pass: null,
                resp: "Error: Failed user signup."
            });
            alert(this.state.resp);
        });
    }

    render() {
        return (
            <div className="login">
                <form className="new-post">
                    <h2>SignUp</h2>
                    <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        onChange={this.handleNewUser}
                    ></input>
                    <input
                        id="pass"
                        type="text"
                        placeholder="password"
                        onChange={this.handleNewPass}
                    ></input>
                    <button
                        id="save"
                        type="submit"
                        onClick={this.handleSaveSignUp}
                    >SignUp
                    </button>
                </form>
            </div>
        );
    }
}
