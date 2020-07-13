import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containters/PlaylistItems";
import NightMode from "../Nightmode";
import StyledPlaylist from "../styles/StyledPlaylist";

const Playlist = ({ videos, active, nightModeCallback, nightMode }) => (
    <StyledPlaylist>
        <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
        <PlaylistHeader active={active} total={videos.lenght} />
        <PlaylistItems videos={videos} active={active} />
    </StyledPlaylist>
);

export default Playlist;