import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import services from '../../../services'
import { Link } from 'react-router-dom';
import StyledFlex from '../../styles/StyledFlex';
import StyledHomepageTodos from '../../styles/StyledHomepageTodos';
const AddScreen = () => {
    const history = useHistory();
    const [photoTitle, setPhotoTitle] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    const handleSumbit = async () => {
        try {
            if (!photoTitle || !photoURL) {
                alert('Title or photo URL is required!!!')
            }
            const photo = {
                photoTitle,
                photoURL,
            };
            services.addPhoto(photo);
            alert("photo added sucessfully");
            history.replace('/');
        } catch (error) {
            console.log(error)
            alert("Add photo failed");
        }
    }
    return (
        <StyledHomepageTodos>
            <div style={{ padding: 16 }}>
                <div>Photo Title</div>
                <div>
                    <input
                        className="inputext"
                        type="text"
                        placeholder="Enter photo title ..."
                        onChange={e => setPhotoTitle(e.target.value)}
                        value={photoTitle}
                        required
                    />
                </div>
                <div>Photo URL</div>
                <div>
                    <input
                        type="text"
                        className="inputext"
                        placeholder="https://example.com/photo.jpg ..."
                        onChange={e => setPhotoURL(e.target.value)}
                        value={photoURL}
                        required
                    /></div>
                <button className="button" onClick={handleSumbit}>Add Video</button>
            </div>
        </ StyledHomepageTodos>

    );
};

export default AddScreen;
