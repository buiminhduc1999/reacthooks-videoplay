import React, { useState, useEffect } from "react";
import StyledLoginRegister from "../components/styles/StyledLoginRegister";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import services from "../services/CallApi";
import decode from 'jwt-decode';

const LoginScreen = () => {
    let loggedIn = true;
    const token = localStorage.getItem("token")
    if (token == null) {
        loggedIn = false;
    }
    const [msg, setMsg] = useState();
    const [user, setUser] = useState({
        id: "",
        username: "",
        password: "",
        loggedIn,
    });
    const { username, password } = user;
    //load user api
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await services.getUsers();
        setUsers(result.data.reverse());
    };

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const submitForm = e => {
        e.preventDefault()
        try {
            fetch(`${process.evn.REACT_APP_URL_API_USERSAC}/login`, {
                method: "POST",
                body: JSON.stringify(this.state)
            }).then((resp) => {
                resp.json().then((result) => {
                    console.warn("token la`: ", result);
                })
            })
            // if (password === "" || username === "") {
            //     setMsg(<h1>Login Failed</h1>);
            // }
            // let check = false;
            // let idU = null;
            // users.forEach(user => {
            //     if (username === user.username && password === user.password) {
            //         check = true;
            //         idU = user.id;
            //     }
            // });
            // if (check) {
            //     localStorage.setItem("token", "123456789")
            //     setUser({
            //         id: idU,
            //         loggedIn: true,
            //     })
            // } else {
            //     setMsg(<h1>Wrong username or password</h1>);
            // }
        } catch (error) {
            console.log(error)
            alert("Login failed");
        }
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
                                className="input"
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
                    <Link className="" to="/auths/forgotpassword">Forgot password</Link>
                    {msg}
                </div>
            </div>
        </StyledLoginRegister >
    );
}

export default LoginScreen;
