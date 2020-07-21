import * as React from 'react';
import StyledHeader from './styles/StyledHeader';
import { Link } from "react-router-dom";
import { loggedIn } from '../screens/listtodos_screens/ViewTodos';

const Header = () => {
    return (
        <StyledHeader>
            <div className="header">
                <Link className="logo" to="/">CompanyLogo</Link>
                <div className="header-right">
                    {/* <Link className="" to="/todos/list">List Todos</Link> */}
                    {/* <Link className="" to="/image/view">Image</Link> */}
                    {/* <Link className="" to="/image/add">Add Image</Link> */}
                    <Link className="" to="/service/login">Login</Link>
                    <Link className="" to="/service/register">Register</Link>
                </div>
            </div>
        </StyledHeader >
    );
};
export default Header;