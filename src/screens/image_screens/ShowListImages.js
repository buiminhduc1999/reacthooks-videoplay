import React, { useEffect, useState } from 'react';
// import services from '../../../services/Api';
import PhotoItem from '../../components/PhotoItem';
import StyledFlexItem from '../../components/styles/StyledFlexItem';
import services from '../../services/CallApi';

const ShowListImages = () => {
    const [photos, setPhotos] = useState(null)
    const fetchPhotos = async () => {
        try {
            const resp = await services.getAllPhotos();
            setPhotos(resp.data)
        } catch (error) {
            alert('Failed to fetch photos')
        }
    }
    useEffect(() => {
        fetchPhotos()
    }, [])

    if (!photos) {
        return (
            <div>
                <p>Loading photos...</p>
            </div>
        )
    }

    return (
        <StyledFlexItem>
            <div className="container-3">
                {photos.splice(19, 50).map(photoItem => (
                    <PhotoItem
                        key={photoItem.id}
                        id={photoItem.id}
                        title={photoItem.title}
                        thumbnailUrl={photoItem.thumbnailUrl}
                    />
                ))}
            </div>
        </StyledFlexItem>
    );
};

export default ShowListImages;