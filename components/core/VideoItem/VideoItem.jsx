import React from 'react';
import PropTypes from 'prop-types';
import VideoThumbnail from "react-thumbnail-player";
import Text from '../Text/Text';

import {
  VideoWrapper,
} from './Styled';

const VideoItem = ({
    id,
    description,
    preview,
    videoName
  }) => {
    
    return (
      <VideoWrapper id={id}>
          <VideoThumbnail
            preview={preview}
            muted={true}
            width={80}
            title={`${videoName} thumbnail`}
            message="click to play"
            badge="video"
            classname="video__thumbnail"
          />
          <Text as="p">{description}</Text>
      </VideoWrapper>
    )
  };

    
  VideoItem.propTypes = {
    preview: PropTypes.string,
    description: PropTypes.string,
    videoName: PropTypes.string
  };
  
  VideoItem.defaultProps = {
    preview: 'https://firebasestorage.googleapis.com/v0/b/uv-videos.appspot.com/o/2-ROSA_v3.mp4?alt=media&token=f880ff57-b3c2-400c-931b-4cf93a12de7',
    description: 'Video description',
    videoName: 'Video'
  };

  export default VideoItem;