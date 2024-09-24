import styled from "styled-components";

export const ButtonContainer = styled.div`
    width: 41.5%;
    min-width: 320px;
    display: flex;
    justify-content: center;

    button {
        width: 100%;
        padding: 10px;
        font-size: 18px;
        background-color: #1a1a1a;
        color: #fff;
        
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    .search:hover {
        background-color: #338a33;
    }

    .remove {
        display: flex;
        justify-content: center;
        align-items: center;
        
        max-width: 100px;
        max-height: 40px;
        border: 1px solid #8a3333;
    }

    .remove:hover {
        background-color: #8a3333;
    }

`;