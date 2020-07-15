import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StyledHomepageTodos from "../styles/StyledHomepageTodos";

const Todos = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
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
                        <th scope="col">Name</th>
                        <th>|</th>
                        <th scope="col">User Name</th>
                        <th>|</th>
                        <th scope="col">Email</th>
                        <th>|</th>
                        <th>Action</th>
                        <th>|</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <th>|</th>
                            <td>{user.name}</td>
                            <th>|</th>
                            <td>{user.username}</td>
                            <th>|</th>
                            <td>{user.email}</td>
                            <th>|</th>
                            <td>
                                <Link className="link" to={`/todos/view/${user.id}`}>
                                    View
                                        </Link>
                                <Link
                                    className="link"
                                    to={`/todos/list/edit/${user.id}`}
                                >
                                    Edit
                                    </Link>
                                <Link
                                    className="link"
                                    onClick={() => deleteUser(user.id)}
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
