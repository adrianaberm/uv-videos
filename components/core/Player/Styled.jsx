import styled, { css } from 'styled-components';

export const PlayerWrapper = styled.div`
    width: auto;
    height: auto;

    .react-player {
        padding-top: 56.25%;
        position: relative; 

        > * {
            position: absolute;
            top: 0;
            left: 0;
            max-width: 100%;
        }
    }
`;