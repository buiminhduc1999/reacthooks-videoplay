import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StyledHomepageTodos from "../../components/styles/StyledHomepageTodos";
import services from "../../services/CallApi";
import axios from "axios";
const ViewTodos = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        phone: "",
        address: ""
    });
    const { id } = useParams();

    useEffect(() => {
        loadVideo();
    }, []);

    const loadVideo = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        // const res = services.getUserACById();
        setUser(res.data);
    };
    return (
        <StyledHomepageTodos>

            <h1 className="">User Id: {id}</h1>
            <hr />
            <ul className="">
                <li className="">User name: {user.username}</li>
                <li className="">Password: {user.password}</li>
                <li className="">Email: {user.email}</li>
                <li className="">Phone: {user.phone}</li>
                <li className="">Address: {user.address}</li>
            </ul>
        </ StyledHomepageTodos>
    );
};

export default ViewTodos;
