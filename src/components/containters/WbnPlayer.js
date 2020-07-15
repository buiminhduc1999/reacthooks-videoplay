import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Video from '../Video';
import Playlist from '../containters/Playlist';
import StyledWbnPlayer from '../styles/StyledWbnPlayer';
import { Link } from "react-router-dom";
import StyledTodos from '../styles/StyledTodos';

const theme = {
    bgcolor: '#353535',
    bgcolorItem: '#414141',
    bgcolorItemActive: '#405c63',
    bgcolorPlayed: '#526d4e',
    border: 'none',
    borderPlayed: 'none',
    color: '#fff',
};

const themeLight = {
    bgcolor: '#fff',
    bgcolorItem: '#fff',
    bgcolorItemActive: '#80a7b1',
    bgcolorPlayed: '#7d9979',
    border: '1px solid #353535',
    borderPlayed: 'none',
    color: '#353535',
};

const WbnPlayer = props => {
    // {& quot; num & quot;: 8,& quot; title & quot;:& quot; Fetch API Introduction & quot;,& quot; id & quot;:& quot; Oive66jrwBs & quot;,& quot; duration & quot;:& quot; 30: 15 & quot;,& quot; video & quot;:& quot; https://www.youtube.com/embed/Oive66jrwBs&quot;}
    // const ahihi = [
    //     { num: 8, title: 'Fetch API Introduction', id: 'Oive66jrwBs', duration: '30:15', video: 'https://www.youtube.com/embed/Oive66jrwBs&quot;' }
    // ]
    const items = JSON.parse(document.querySelector('[name="items"]').value);
    const savedState = JSON.parse(localStorage.getItem(`${items.idPlaylist}`));
    const [state, setState] = useState({
        videos: savedState ? savedState.videos : items.playlist,
        activeVideo: savedState ? savedState.activeVideo : items.playlist[0],
        nightMode: savedState ? savedState.nightMode : true,
        idPlaylist: savedState ? savedState.idPlaylist : items.idPlaylist,
        autoplay: false,
    });
    useEffect(() => {
        localStorage.setItem(`${state.idPlaylist}`, JSON.stringify({ ...state }));
    }, [state]);

    useEffect(() => {
        const videoId = props.match.params.activeVideo;
        if (videoId !== undefined) {
            const newActiveVideo = state.videos.findIndex(
                video => video.id === videoId,
            );
            setState(prev => ({
                ...prev,
                activeVideo: prev.videos[newActiveVideo],
                autoplay: props.location.autoplay,
            }));
        } else {
            props.history.push({
                pathname: `/${state.activeVideo.id}`,
                autoplay: false,
            })
        }
    }, [
        props.history,
        props.location.autoplay,
        props.match.params.activeVideo,
        state.activeVideo.id,
        state.videos,
    ]);
    const nightModeCallback = () => {
        setState({ ...state, nightMode: !state.nightMode });
    };
    const endCallback = () => {
        const videoId = props.match.params.activeVideo;
        const currentVideoIndex = state.videos.findIndex(
            video => video.id === videoId,
        );

        const nextVideo =
            currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;

        props.history.push({
            pathname: `${state.videos[nextVideo].id}`,
            autoplay: false,
        });
    };
    const progressCallback = e => {
        if (e.playedSeconds > 10 && e.playedSeconds < 11) {
            const videos = [...state.videos];
            const playedVideo = videos.find(
                video => video.id === state.activeVideo.id,
            );
            playedVideo.played = true;

            setState(prevState => ({ ...prevState, videos }));
        }
    }
    return (
        <>
            <ThemeProvider theme={state.nightMode ? themeLight : theme}>
                {state.videos !== null ? (
                    <StyledWbnPlayer>
                        <Video
                            active={state.activeVideo}
                            autoplay={state.autoplay}
                            endCallback={endCallback}
                            progressCallback={progressCallback}
                        />
                        <Playlist
                            videos={state.videos}
                            active={state.activeVideo}
                            nightModeCallback={nightModeCallback}
                            nightMode={state.nightMode}
                        />
                    </StyledWbnPlayer>
                ) : null}
            </ThemeProvider>
            <StyledTodos>
                <Link className="" to="/todos/list">Open Todos</Link>
            </StyledTodos>
        </>
    )
}

export default WbnPlayer;