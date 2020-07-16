import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import services from '../../../services'
import StyledHomepageTodos from '../../styles/StyledHomepageTodos';

const EditScreen = ({ match: { params } }) => {
    const history = useHistory();

    const photoId = params.id;

    const [photoTitle, setPhotoTitle] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    const loadPhoto = async () => {
        try {
            const resp = await services.editPhoto(photoId);
            const photo = resp.data;
            setPhotoTitle(photo.title);
            setPhotoURL(photo.thumbnailUrl);
        } catch (error) {
            alert('Failed to get photo.')
        }
    }
    useEffect(() => {
        loadPhoto()
    }, [])

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
            alert("photo updated sucessfully");
            console.log(photo);
            history.replace('/');

        } catch (error) {
            console.log(error)
            alert("Add photo failed");
        }
    }

    if (!photoTitle || !photoURL) {
        return (
            <div>
                <p>Loading photo ...</p>
            </div>
        )
    }
    return (

        <StyledHomepageTodos>
            <div>Photo Title</div>
            <div>
                <input
                    type="text"
                    className="inputext"
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
                />
            </div>
            <button className="button" onClick={handleSumbit}>Update</button>
        </StyledHomepageTodos>

    );
};

export default EditScreen;
