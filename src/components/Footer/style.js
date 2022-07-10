import styled from "styled-components";

import bg from "./img/bgfooter.png"

export const Container = styled.section`
    width: 100%;
    height: 30em;

    padding-left: 10em;

    background-image: url(${bg});

    font-family: 'Montserrat', sans-serif;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Title = styled.h2`
    font-weight: 800;
    font-size: 2.8em;
    color: #fff;
`

export const SubContainer = styled.div`
    height: 70%;

    display: flex;
    align-items: center;
`

export const BoxText = styled.div`
    width: 20%;
    height: 5em;
`

export const Text = styled.h5`
    width: 95%;
    
    font-size: 1.1em;
    color:#fff;

`
export const BoxIcon = styled.div`
    width: 50%;

    display: flex;
    justify-content: space-evenly;
`

export const Icon = styled.img`
    width: 11%;

    cursor: pointer;
`
