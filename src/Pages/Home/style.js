import styled from "styled-components";

export const Container = styled.div`

    img {   
        width: 400px;
        height: 400px;
        object-fit: cover;
    }
`;

export const CardDog = styled.div`
    background-color: #1b89b9;
    width: 540px;
    height: 500px;
    margin: 40px;
    transition: 1s all;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: -5px 2px 15px 6px rgba(0,0,0,0.20);
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    };
`
export const BoxImg = styled.img`
    background-color: #a6a6a6;
    width: 100%;
    height: 400px;
    object-fit: cover;
`