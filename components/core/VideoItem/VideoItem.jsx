import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

import {
  VideoWrapper,
  Thumbnail,
} from './Styled';

const VideoItem = ({
    id,
    isActive,
    thumbnail,
    description
  }) => (

    <VideoWrapper isActive={isActive} id={id}>
        <Thumbnail src={thumbnail} alt="Video thumbnail" width="80px" height="50px"></Thumbnail>
        <Text as="p">{description}</Text>
    </VideoWrapper>
  );

    
  VideoItem.propTypes = {
    isActive: PropTypes.bool,
    thumbnail: PropTypes.string,
    description: PropTypes.string
  };
  
  VideoItem.defaultProps = {
    isActive:  false,
    thumbnail: '/assets/thumbnail.png',
    description: ''
  };

  export default VideoItem;