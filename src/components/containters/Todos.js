import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StyledHomepageTodos from "../styles/StyledHomepageTodos";

const Todos = () => {
    const [videos, setVideo] = useState([]);

    useEffect(() => {
        loadVideos();
    }, []);

    const loadVideos = async () => {
        const result = await axios.get("http://localhost:3003/videos");
        setVideo(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/videos/${id}`);
        loadVideos();
    };

    return (
        <StyledHomepageTodos>
            <h1>List Todos</h1>
            <th><Link className="link" to={`/todos/list/add`}>Add to List</Link></th>
            <table className="">
                <thead className="">
                    <tr>
                        <th scope="col">#</th>
                        <th>|</th>
                        <th scope="col">Id</th>
                        <th>|</th>
                        <th scope="col">Title</th>
                        <th>|</th>
                        <th scope="col">Video</th>
                        <th>|</th>
                        <th scope="col">Duration</th>
                        <th>|</th>
                        <th>Action</th>
                        <th>|</th>
                    </tr>
                </thead>
                <tbody>
                    {videos.map((video, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <th>|</th>
                            <td>{video.id}</td>
                            <th>|</th>
                            <td>{video.title}</td>
                            <th>|</th>
                            <td>{video.video}</td>
                            <th>|</th>
                            <td>{video.duration}</td>
                            <th>|</th>
                            <td>
                                <Link className="link" to={`/todos/view/${video.id}`}>
                                    View
                                        </Link>
                                <Link
                                    className="link"
                                    to={`/todos/list/edit/${video.id}`}
                                >
                                    Edit
                                    </Link>
                                <Link
                                    className="link"
                                    onClick={() => deleteUser(video.id)}
                                >
                                    Delete
                                    </Link>
                            </td>
                            <th>|</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </StyledHomepageTodos>
    );
};

export default Todos;
