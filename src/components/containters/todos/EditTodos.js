import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import StyledHomepageTodos from "../../styles/StyledHomepageTodos";

const EditTodos = () => {
    let history = useHistory();
    const { id } = useParams();
    const [item, setVideo] = useState({
        id: "",
        title: "",
        video: "",
        duration: ""
    });

    const { title, video, duration } = item;
    const onInputChange = e => {
        setVideo({ ...item, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/videos/${id}`, item);
        history.push("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/videos/${id}`);
        setVideo(result.data);
    };
    return (
        <StyledHomepageTodos>
            <h2 className="">Edit A User</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="">
                    <input
                        type="text"
                        className=""
                        placeholder="Enter Title"
                        name="title"
                        value={title}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="">
                    <input
                        type="text"
                        className=""
                        placeholder="Enter Video"
                        name="video"
                        value={video}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="">
                    <input
                        type="text"
                        className=""
                        placeholder="Enter Duration"
                        name="duration"
                        value={duration}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <button className="button">Update Video</button>
            </form>
        </StyledHomepageTodos >
    );
};

export default EditTodos;
