import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import StyledHomepageTodos from "../../styles/StyledHomepageTodos";
const ViewTodos = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        webiste: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    };
    return (
        <StyledHomepageTodos>
            <Link className="link" to="/todos/list">
                Back to Home
            </Link>
            <h1 className="">User Id: {id}</h1>
            <hr />
            <ul className="">
                <li className="">name: {user.name}</li>
                <li className="">user name: {user.username}</li>
                <li className="">email: {user.email}</li>
                <li className="">phone: {user.phone}</li>
                <li className="">website: {user.website}</li>
            </ul>
        </ StyledHomepageTodos>
    );
};

export default ViewTodos;
