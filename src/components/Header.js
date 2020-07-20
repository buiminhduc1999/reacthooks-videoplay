import * as React from 'react';
import StyledHeader from './styles/StyledHeader';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <StyledHeader>
            <div className="header">
                <Link className="logo" to="/">CompanyLogo</Link>
                <div className="header-right">
                    <Link className="" to="/todos/list">List Todos</Link>
                    <Link className="" to="/image/view">Image</Link>
                    <Link className="" to="/image/add">Add Image</Link>
                </div>
            </div>
        </StyledHeader>
    );
};
export default Header;