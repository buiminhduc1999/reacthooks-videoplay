import React, { useState, useEffect } from "react";
import StyledLoginRegister from "../components/styles/StyledLoginRegister";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import axios from "axios";

export let loggedIn = true;

const LoginScreen = () => {
    let loggedIn = true;

    const token = localStorage.getItem("token")
    if (token == null) {
        loggedIn = false
    }
    const [user, setUser] = useState({
        id: "",
        username: "",
        password: "",
        loggedIn
    });
    const { username, password } = user;

    //load user api
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUsers(result.data.reverse());
    };
    //
    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const submitForm = e => {
        e.preventDefault()
        users.forEach(user => {
            if (username === user.username && password === user.password) {
                localStorage.setItem("token", "123456789")
                setUser({
                    id: user.id,
                    loggedIn: true
                })
            }
        });
    };

    if (loggedIn) {
        return <Redirect to={`/todos/view/${user.id}`} />
    };
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
                                class="input"
                                name="username"
                                value={username}
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
                    <Link className="" to="/service/forgotpassword">Forgot password</Link>
                </div>
            </div>
        </StyledLoginRegister >
    );
}

export default LoginScreen;
