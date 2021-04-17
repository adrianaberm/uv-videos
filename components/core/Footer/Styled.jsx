import styled, { css } from 'styled-components';

const Wrapper = styled.footer`
    background: #000;
    color: #ccc;
    padding: 30px 15px;
    position: relative;
    text-align: center;

    &:before {
        content: "";
        background: #ccc;
        height: 1px;
        width: 1px;
    }

`;

export default Wrapper;