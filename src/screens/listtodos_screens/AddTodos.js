import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import StyledHomepageTodos from "../../components/styles/StyledHomepageTodos";
const AddTodos = () => {
    let history = useHistory();
    const [item, setUser] = useState({
        id: "",
        title: "",
        video: "",
        duration: ""
    });

    const { id, title, video, duration } = item;
    const onInputChange = e => {
        setUser({ ...item, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/videos", item);
        history.push("/");
    };

    return (
        <StyledHomepageTodos>
            <h2 className="">Add A Video</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="">
                    <input
                        type="text"
                        className="inputext"
                        placeholder="Enter Id"
                        name="id"
                        value={id}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="">
                    <input
                        type="text"
                        className="inputext"
                        placeholder="Enter Title"
                        name="title"
                        value={title}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="">
                    <input
                        type="text"
                        className="inputext"
                        placeholder="Enter Video"
                        name="video"
                        value={video}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <div className="">
                    <input
                        type="text"
                        className="inputext"
                        placeholder="Enter Duration"
                        name="duration"
                        value={duration}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <button className="button">Add Video</button>
            </form>
        </ StyledHomepageTodos>
    );
};

export default AddTodos;
