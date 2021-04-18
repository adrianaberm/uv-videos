import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link'

export const ButtonWrapper = styled.button`
    align-items: center;
    background: #9013FE;
    border: 2px solid #9013FE;
    border-radius: 12px;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    justify-content: center;
    min-width: 142px;
    padding: 4px 16px;
    text-decoration: none;
    transition: all .3s ease;

    &:hover {
        outline: none;
        background: #9335e7;
        border-color: #9335e7;
        transform: scale(1.1);
    }

    &.secondary {
        background: #fff;
        color: #9013FE;
    }
`;

export const ButtonText = styled.span`
    align-items: center;
    display: flex;
    justify-content: center;
`;