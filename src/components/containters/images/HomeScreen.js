import React, { useEffect, useState } from 'react';
import PhotoItem from '../../PhotoItem';
import StyledFlexItem from '../../styles/StyledFlexItem';
import services from '../../../services'

const HomeScreen = () => {
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

export default HomeScreen;