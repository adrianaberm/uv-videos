import PropTypes from 'prop-types';
import VideoItem from '../core/VideoItem/VideoItem';
import useFirestore from '../hooks/useFirestore';


import {
    ListWrapper,
    ListTitle,
    List
  } from './Styled';


const VideoList = ({ setSelectedVideo }) => {

    const { docs } = useFirestore('videos');
    console.log(docs);

    return (
        <ListWrapper>
            <ListTitle as="h2">Your videos list</ListTitle>
            <List>
                {docs && docs.map(doc => (
                    <li key={doc.id} onClick={() => setSelectedVideo(doc.url)}>
                        <VideoItem description={doc.name}></VideoItem>
                    </li>
                ))}
            </List>
        </ListWrapper>
    )
};

export default VideoList;