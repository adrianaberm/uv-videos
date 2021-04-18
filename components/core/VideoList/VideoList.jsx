import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from '../VideoItem/VideoItem';
import Link from 'next/link';
import Text from '../Text/Text'

import {
    ListWrapper,
    List
  } from './Styled';


const VideoList = ({
    data
}) => (

    <ListWrapper>
        <List>
            {data.map(({ name, id }) => (
             <li key={id}>
                 <VideoItem description={`${name}`} id={`${id}`}></VideoItem>
                </li>
            ))}
        </List>
    </ListWrapper>
);

export default VideoList;