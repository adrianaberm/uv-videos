import React from 'react';
import styled, { css } from 'styled-components';
import Text from "../Text/Text"

export const FormWrapper = styled.div`
    display: flex;
    background: #fff;
    border-radius: 8px;
    flex-direction: column;
    align-items: center;
    margin: 16px 0;
    padding: 16px;

    @media (min-width: 768px) {
        align-items: flex-start;
    }
`;

export const FormTitle= styled(Text)`
    color: #000;
    font-size: 12px;
    margin: 0;
    text-transform: uppercase;
`;

export const FileWrapper = styled.div`
    align-items: center;
    display: flex;
    margin: 16px 0;
    position: relative;
    transition: all .3s ease;


    &:hover {
        outline: none;
        transform: scale(1.02);

        label {
            background: red;
        }

    }

    .file__input {
        opacity: 0;
        cursor: pointer;
        overflow: hidden;
        position: absolute;

        + label {
            align-items: center;
            background: #fff;
            border: 2px solid #9013FE;
            border-radius: 12px;
            color: #9013FE;
            cursor: pointer;
            display: flex;
            font-size: 12px;
            justify-content: center;
            margin: auto;
            width: 130px;
            padding: 4px 16px;
            text-decoration: none;
        }
    } 
`;

export const FileName= styled.p`
    color: #999;
    font-size: 12px;
    font-style: italic;
    margin: 0 4px;
`;


export const FileDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    .file__description {
        background: #FAFAFA;
        border: 1px solid #CFCFCF; 
        margin: 8px auto;
        padding: 4px 8px;
        width: 80%;

        @media (min-width: 768px) {
            margin: 8px 0;
        }

        &:focus {
            outline: none;
            border: 2px solid #9013FE;
        }
    }

    button {
        margin: 8px auto;
        max-width: 152px;

        @media (min-width: 768px) {
            margin: 8px 16px;
        }
    }
`;

export const Message = styled.p`
    color: #ccc;
    font-size: 12px;
    font-style: italic;
    margin: 0;
`;