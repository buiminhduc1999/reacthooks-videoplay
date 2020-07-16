import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import services from '../services';
import StyledFlex from './styles/StyledFlex';

const PhotoItem = ({ id, title, thumbnailUrl }) => {
    const deletePhoto = async () => {
        try {
            await services.deletePhoto(id);
            alert('Photo deleted')
            window.location.reload()
        } catch (error) {
            console.log(error)
            alert('Delete photo failed')
        }
    }
    return (
        <StyledFlex>
            <div className="item">
                <div className="container-3-box" style={{ width: '18rem' }}>
                    <table>
                        <tr>
                            <img src={thumbnailUrl} />
                        </tr>
                        <tr height="40">
                            {title}
                        </tr>
                        <tr>
                            <Link to={`/image/edit/${id}`}>Edit</Link>
                            <Link onClick={deletePhoto}>Delete</Link>
                        </tr>
                    </table>
                </div></div>
        </StyledFlex >
    );
};

export default PhotoItem;