import styled, { css } from 'styled-components';
import Image from 'next/image';

export const VideoWrapper = styled.div`
    align-items: center;
    border-bottom: 1px solid #efefef;
    cursor: pointer;
    display: flex;
    padding: 12px;
    
    p {
        font-size: 12px;
        margin-left: 16px;
        text-transform: uppercase;
    }

    .video__thumbnail {
        background: #000;
        video {
            display: block;
            pointer-events: none;
            border-radius: 0;
            opacity: 0.5;

            + div {
                display: none;
            }
        }

        h4, span {
            display: none;
        }
    }
`;

export const Thumbnail = styled(Image)`
    margin-right: 16px;
    display: block;
`;