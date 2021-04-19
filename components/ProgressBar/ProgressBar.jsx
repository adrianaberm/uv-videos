import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile]);

    return (
        <div>
            {progress > 0 ? <progress value={progress} max="100" /> : ""}
        </div>
        
    )
}

export default ProgressBar;