import React, { useState, useEffect, Component } from "react";
import StyledLoginRegister from "../components/styles/StyledLoginRegister";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginScreen = () => {
    const [user, setUser] = useState({
        userName: null,
        password: null,
        login: false,
        token: null,
    });
    const { userName, password } = user;
    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const submitForm = e => {
        e.preventDefault();
        axios.post(`https://milky-auth.herokuapp.com/login`, {
            userName: userName,
            password: password
        }).then(res => {
            localStorage.setItem('jwt-1.0', res.data.result.access_token)
        });
    }

    return (
        <StyledLoginRegister>
            <div className="wrapper">
                <div className="title">
                    Login Form
            </div>
                <form onSubmit={e => submitForm(e)}>
                    <div className="form">
                        <div className="inputfield">
                            <label>Username</label>
                            <input
                                type="text"
                                className="input"
                                name="userName"
                                value={userName}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <div className="inputfield">
                            <label>Password</label>
                            <input
                                type="password"
                                className="input"
                                name="password"
                                value={password}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <div className="inputfield">
                            <input
                                type="submit"
                                value="Login"
                                className="btn"
                            />
                        </div>
                    </div>
                </form>

                <div className="forgot">
                    <Link className="" to="/auths/forgotpassword">Forgot password</Link>
                    {/* {msg} */}
                </div>
            </div>
        </StyledLoginRegister >
    )
}

export default LoginScreen;
