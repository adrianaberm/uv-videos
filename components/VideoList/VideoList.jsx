import VideoItem from '../core/VideoItem/VideoItem';
import useFirestore from '../hooks/useFirestore';


import {
    ListWrapper,
    ListTitle,
    List
  } from './Styled';


const VideoList = ({ setSelectedVideo }) => {

    const { docs } = useFirestore('videos');

    return (
        <ListWrapper>
            <ListTitle as="h2">Your videos list</ListTitle>
            <List>
                {docs && docs.map(doc => (
                    <li key={doc.id} onClick={() => setSelectedVideo(doc.url)}>
                        <VideoItem 
                            description={doc.name}
                            preview={doc.url}
                            videoUrl={doc.url}
                            videoName={doc.name}>
                        </VideoItem>
                    </li>
                ))}
            </List>
        </ListWrapper>
    )
};

export default VideoList;