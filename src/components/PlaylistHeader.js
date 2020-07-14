import React from 'react';
import StyledPlaylistHeader from './styles/StyledPlaylistHeader';
import StyledJourney from './styles/StyledJourney';


const PlaylistHeader = ({ active, total }) => (
    <StyledPlaylistHeader>
        <p>{active.title}</p>
        <StyledJourney>
            {active.num} / {9}
        </StyledJourney>
    </StyledPlaylistHeader>
);

export default PlaylistHeader;