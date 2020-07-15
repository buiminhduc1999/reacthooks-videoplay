import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import StyledHomepageTodos from "../../styles/StyledHomepageTodos";
const ViewTodos = () => {
    const [video, setVideo] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        webiste: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadVideo();
    }, []);
    const loadVideo = async () => {
        const res = await axios.get(`http://localhost:3003/videos/${id}`);
        setVideo(res.data);
    };
    return (
        <StyledHomepageTodos>
            <Link className="link" to="/todos/list">
                Back to Home
            </Link>
            <h1 className="">Video Id: {id}</h1>
            <hr />
            <ul className="">
                <li className="">Title: {video.title}</li>
                <li className="">Video: {video.video}</li>
                <li className="">Duration: {video.duration}</li>
            </ul>
        </ StyledHomepageTodos>
    );
};

export default ViewTodos;
