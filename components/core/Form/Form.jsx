import React, { useState, useEffect } from "react";
import Button from "../Button/Button";

import {
    FormWrapper,
    FormTitle,
    FileWrapper,
    FileName,
    FileDescription,
    Message
  } from './Styled';

const UploadForm = ({formTitle, placeholder}) => {
    const [chosenFile, setChosenFile] = useState(undefined);
    const [videoInfo, setVideoInfo] = useState([]);
    const [message, setMessage] = useState("");
    const [filename, setFilename] = useState("");

    useEffect(() => {
      }, []);

    const selectFile = (event) => {
        setChosenFiles(event.target.files);
    };

    const upload = () => {
        setChosenFiles(undefined);
      };

      return (
        <FormWrapper>
            <FormTitle as="h2">{formTitle}</FormTitle>
            <FileWrapper>
                <input aria-label="File browser" name="file" type="file" onChange="" className="file__input"/>
                <label for="file">
                    <span>Choose File</span>
                </label>
                <FileName>{filename ? filename : "No file choosen"}</FileName>
            </FileWrapper>
            <FileDescription>
                <input type="text" onChange="" className="file__description" placeholder={placeholder}/>
                <Button
                    type="sumbit"
                    onClick=""
                    className="primary"
                >
                    Upload Video
                </Button>
            </FileDescription>
            <Message>{message}</Message>
        </FormWrapper>
      );
}

export default UploadForm;