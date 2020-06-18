import React from "react";



function Login(props) {
    console.log('run Login Page')
    return (
        <div className="login">
            <form className="new-post">
                <h2 id="loginNormalFont">Login</h2>
                <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    onChange={props.handleUser}
                ></input>
                <input
                    id="pass"
                    type="text"
                    placeholder="password"
                    onChange={props.handlePass}
                ></input>
                <button
                    id="save"
                    type="submit"
                    onClick={props.handleSaveLogin}
                >Login</button>
            </form>
        </div>
    );
}

export default Login;