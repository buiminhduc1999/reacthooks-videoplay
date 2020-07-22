import React, { useState } from 'react';
import StyledHeader,{customStyles} from './styles/StyledHeader';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import LoginScreen from '../screens/LoginScreen';
Modal.setAppElement('#root')
const Header = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <StyledHeader>
            <div className="header">
                <Link className="logo" to="/yATidRH0p4k">CompanyLogo</Link>
                <div className="header-right">
                    <Link className="" onClick={() => setModalIsOpen(true)}>Login</Link>
                    <Modal 
                        isOpen={modalIsOpen}
                        onRequestClose={()=> setModalIsOpen(false)}
                        style={customStyles}                   
                    >
                    <LoginScreen onClick={()=> setModalIsOpen(false)} />
                    </Modal>
                    <Link className="" to="/auths/register">Register</Link>
                </div>
            </div>
        </StyledHeader >
    );
};

export default Header;