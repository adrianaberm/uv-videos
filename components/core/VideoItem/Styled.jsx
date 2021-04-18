import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';

export const VideoWrapper = styled.div`
    align-items: center;
    border-bottom: 1px solid #efefef;
    cursor: pointer;
    display: flex;
    padding: 12px;
`;

export const Thumbnail = styled(Image)`
    margin-right: 16px;
    display: block;
`;