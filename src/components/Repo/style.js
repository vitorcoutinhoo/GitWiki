import styled from "styled-components";

export const ItemContainer = styled.div`
    height: 100px;
    min-width: 320px;
    margin-top: 20px;
    padding: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-radius: 8px;
    background-color: #1a1a1a;

    .text {
        padding: 10px;
        width: 200px;

        a {
            font-size: 14px;
            color: #fff;
            text-decoration: none;
        }

        a:hover {
            color: #33338a;
        }
    }

    .remove {
        margin-left: auto;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: start;
`;

