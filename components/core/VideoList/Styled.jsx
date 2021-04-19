import styled, { css } from 'styled-components';
import Text from '../Text/Text';


export const ListWrapper = styled.div`
    display: flex;
    background: #fff;
    border-radius: 8px;
    flex-direction: column;
    align-items: flex-start;
    max-height: 465px;
    overflow: auto;
    padding: 15px;
`;

export const ListTitle = styled(Text)`
    font-size: 14px;
    text-transform: uppercase;
    margin: 0 16px;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
`;