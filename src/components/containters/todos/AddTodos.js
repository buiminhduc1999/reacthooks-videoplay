import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import StyledHomepageTodos from "../../styles/StyledHomepageTodos";
const AddTodos = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        history.push("/");
    };

    return (
        <StyledHomepageTodos>
            <h2 className="">Add A User</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="">
                    <input
                        type="text"
                        className="inputext"
                        placeholder="Enter Your Name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="">
                    <input
                        type="text"
                        className="inputext"
                        placeholder="Enter Your Username"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="">
                    <input
                        type="email"
                        className="inputext"
                        placeholder="Enter Your E-mail Address"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="">
                    <input
                        type="text"
                        className="inputext"
                        placeholder="Enter Your Phone Number"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="">
                    <input
                        type="text"
                        className="inputext"
                        placeholder="Enter Your Website Name"
                        name="website"
                        value={website}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <button className="button">Add User</button>
            </form>
        </ StyledHomepageTodos>
    );
};

export default AddTodos;
