import * as React from 'react';
import StyledHeader from './styles/StyledHeader';
import { Link } from "react-router-dom";

const Header = () => {
    // let loginout;
    // let register
    // let loggedIn = true;
    // const submit = e => {
    //     loggedIn = false;
    //     console.log(loggedIn)
    // };
    // if (loggedIn) {
    //     loginout = <Link className="" to="/service/login" onClick={e => submit(e)}>Login</Link>
    //     register = <Link className="" to="/service/register"> Register</Link >
    // } else {
    //     register = <Link className="" to="/service/register" onClick={e => submit(e)}>Register</Link>
    // }
    return (
        <StyledHeader>
            <div className="header">
                <Link className="logo" to="/yATidRH0p4k">CompanyLogo</Link>
                <div className="header-right">
                    {/* <Link className="" to="/todos/list">List Todos</Link> */}
                    {/* <Link className="" to="/image/view">Image</Link> */}
                    {/* <Link className="" to="/image/add">Add Image</Link> */}
                    {/* {loginout}
                    {register} */}
                    <Link className="" to="/auths/login">Login</Link>
                    <Link className="" to="/auths/register">Register</Link>

                </div>
            </div>
        </StyledHeader >
    );
};
export default Header;