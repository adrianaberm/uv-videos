import React, { useState } from 'react';;
import ProgressBar from '../ProgressBar/ProgressBar';

import {
    FormWrapper,
    FormTitle,
    FormDescription,
    FileWrapper,
    FileName,
    Message
  } from './Styled';

const UploadForm = ({formTitle}) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const file = e.target.files[0];
    
        if (file) {
          const fileType = file["type"];
          const validVideoTypes = ["video/mp4"];
          if (validVideoTypes.includes(fileType)) {
            setFile(file);
            setError('');
          } else {
            setFile(null);
            setError("Error please upload a valid MP4 video file");
          }
        }
      };

      return (
        <FormWrapper>
            <FormTitle as="h2">{formTitle}</FormTitle>
            <FormDescription as="p">To upload your videos, choose a video file from your gallery by clicking in "Choose File".</FormDescription>
            <FileWrapper>
                <input 
                    aria-label="File browser" 
                    name="file" 
                    type="file" 
                    onChange={handleChange}
                    className="file__input"/>
                <label htmlFor="file">
                    <span>Choose File</span>
                </label>
                <FileName>{ file ? file.name : "No file chosen"}</FileName>
                
            </FileWrapper>
            <div>
                { file && <ProgressBar file={file} setFile={setFile} /> }
                <Message>{error}</Message>
            </div>
        </FormWrapper>
      );
}

export default UploadForm;