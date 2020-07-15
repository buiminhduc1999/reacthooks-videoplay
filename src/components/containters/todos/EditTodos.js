import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import StyledHomepageTodos from "../../styles/StyledHomepageTodos";

const EditTodos = () => {
    let history = useHistory();
    const { id } = useParams();
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

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };
    return (
        <StyledHomepageTodos>
            <h2 className="">Edit A User</h2>
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
                <button className="button">Update User</button>
            </form>
        </StyledHomepageTodos >
    );
};

export default EditTodos;
