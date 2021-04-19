import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

import { PlayerWrapper } from './Styled';

const Player = ({
    selectedVideo, 
}) => (
    <PlayerWrapper>
        <ReactPlayer 
            className="react-player" 
            url={selectedVideo ? selectedVideo : "https://firebasestorage.googleapis.com/v0/b/uv-videos.appspot.com/o/2-ROSA_v3.mp4?alt=media&token=f880ff57-b3c2-400c-931b-4cf93a12de70"}
            width="100%"
            height="100%"
            type="video/mp4" 
            playing
            controls/>
    </PlayerWrapper>   
);

Player.propTypes = {
    url: PropTypes.string,
};
  
Player.defaultProps = {
    url: 'https://firebasestorage.googleapis.com/v0/b/uv-videos.appspot.com/o/2-ROSA_v3.mp4?alt=media&token=f880ff57-b3c2-400c-931b-4cf93a12de70',
};

export default Player;