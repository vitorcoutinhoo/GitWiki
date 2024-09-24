import styled from 'styled-components';
import { createGlobalStyle }from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    hr {
        width: 80%;
        margin-top: 20px;
    }
`;

export const Header = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    aligin-items: center;
    justify-content: center;
    background-color: #1a1a1a;
    position: fixed;

    img {
        width: 72px;
    }
`;

export const Content = styled.div`
    padding-top: 100px;
    width: 80%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.main {
        padding: 10px;
    }

    &.list {
        padding: 20px;
    }
`;

export default createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Poppins, sans-serif;
        background-color: #2a2a2a;
        color: #fff;
    }
`;
