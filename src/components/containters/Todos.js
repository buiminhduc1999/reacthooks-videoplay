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
            <div className="item">
                <h1>List Todos</h1>
                <th><Link className="link" to={`/todos/list/add`}>Add to List</Link></th>
                <table className="customers">
                    <thead className="">
                        <tr>
                            <th scope="col">#</th>

                            <th scope="col">Id</th>

                            <th scope="col">Title</th>

                            <th scope="col">Video</th>

                            <th scope="col">Duration</th>

                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {videos.map((video, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{video.id}</td>
                                <td>{video.title}</td>
                                <td>{video.video}</td>
                                <td>{video.duration}</td>
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
                                    <Link className="link" onClick={() => deleteUser(video.id)}>
                                        Delete
                                </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </StyledHomepageTodos>
    );
};

export default Todos;
