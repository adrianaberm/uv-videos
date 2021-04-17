import styled, { css } from 'styled-components';

const Wrapper = styled.footer`
    background: #000;
    padding: 30px 15px 10px;
    position: relative;
    text-align: center;

    &:before {
        content: "";
        background: #5A5A5A;
        display: block;
        height: 1px;
        margin: auto;
        max-width: 960px;
        width: 90%;
    }

    p {
        color: #5A5A5A;
        font-size: 13px;
    }

`;

export default Wrapper;