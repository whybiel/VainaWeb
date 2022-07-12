import styled from "styled-components";

import lupa from "./img/lupa.png"

export const Container = styled.section`
    width: 100%;

    font-family: 'Montserrat', sans-serif;

    margin: 7em 0 4em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BoxInput = styled.div`
    width: 85%;
    height: 5em;

    padding-left: 5em;

    background-color: #0F2260;
    
    display: flex;
    align-items: center;
`

export const Input = styled.input`
    width: 20%;
    height: 2.5em;

    padding-left:10px;

    background-color: transparent;

    outline: none;
    border: 1px solid #fff;
    border-right: none;
    border-radius:2px;

    color:#fff;

    &::placeholder{
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.2em;
        font-style: italic;
    }
`

export const Btn = styled.button`
    width:30px;
    height: 2.5em;

    padding: 0.5em 0.5em;

    background-color:transparent;
    background-image:url(${lupa});
    background-size: 28px 28px;
    background-repeat: no-repeat;
    background-position: center;

    border: 1px solid #fff;
    border-left: none;
    border-radius:2px;

    cursor: pointer;
`

export const BoxTeam = styled.div`
    width: 100%;
`




// MAP

export const ContainerMap = styled.section`
    width: 100%;

    display: flex;
    flex-wrap: wrap;

    padding-left:6.8em;
`

export const MapBox = styled.div`
    width: 20.6%;
    
    margin: 10px 10px 0px 0px;

    position: relative;
`

export const BoxText = styled.div`
    width: 100%;
    height: 4em;

    text-align: center;
    color:#fff;

    background-image: linear-gradient(180deg, transparent 0%, #0F2260 100%);

    position: absolute;
    bottom: 0em;
`

export const Img = styled.img`
    width: 100%;
`