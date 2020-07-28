import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StyledHomepageTodos from "../../components/styles/StyledHomepageTodos";
import axios from "axios";
import { getJwt } from "../../utils/HandlingJwt";
import { checkRefresh } from "../../utils/CheckRefreshToken";

const ViewTodos = () => {
    const [user, setUser] = useState({
        id: "",
        address: "",
        created_at: "",
        name: "",
        phone: "",
        update_date: "",
        url: ""
    });
    const { id } = useParams();

    useEffect(() => {
        loadUser();
        checkRefresh();
    }, []);
    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${getJwt()}`;
            return config
        },
        error => {
            return Promise.reject(error);
        }
    )
    const loadUser = async () => {
        const result = await axios.get(`${process.env.REACT_APP_URL_API_USERSAC}/users/me`);
        setUser(result.data.result.user);
    };
    return (
        <StyledHomepageTodos>
            <h1 className="">User Id: {id}</h1>
            <hr />
            <ul className="">
                <li className="">Address: {user.address}</li>
                <li className="">Create_at: {user.created_at}</li>
                <li className="">Name: {user.name}</li>
                <li className="">Phone: {user.phone}</li>
                <li className="">Update_date: {user.updated_at}</li>
            </ul>
        </ StyledHomepageTodos>
    );
};

export default ViewTodos;
