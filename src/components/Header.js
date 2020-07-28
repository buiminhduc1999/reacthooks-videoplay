import React, { useState } from 'react';
import StyledHeader, { customStyles } from './styles/StyledHeader';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import LoginScreen from '../screens/LoginScreen';
import { Redirect } from 'react-router-dom'

Modal.setAppElement('#root')
const Header = props => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [checkValue, setcheckValue] = useState(true);
    const onKick = e => {
        localStorage.removeItem("jwt-1.0")
        setcheckValue(true)
        return <Redirect to={`/yATidRH0p4k`} />
    };
    const loginClick = e => {
        setcheckValue(false);
        setModalIsOpen(true)
    };

    let register;
    if (checkValue === true) {
        register = <Link className="" to="/auths/register">Register</Link>
    }
    return (
        <StyledHeader>
            <div className="header">
                <Link className="logo" to="/yATidRH0p4k">CompanyLogo</Link>
                <div className="header-right">
                    {
                        checkValue
                            ?
                            <Link className="" onClick={e => loginClick(e)}>Login</Link>
                            :
                            <Link onClick={e => onKick(e)} to="/yATidRH0p4k">Logout</Link>
                    };
                    {register}
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        style={customStyles}
                    >
                        <LoginScreen />
                    </Modal>
                </div>
            </div>
        </StyledHeader >
    );
};

export default Header;