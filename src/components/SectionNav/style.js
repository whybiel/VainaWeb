import styled from "styled-components";

import background from "./img/background.png"

export const Container = styled.div`
    width: 100%;
    height: 50em;
    background-image: url(${background});
    background-size: cover;
`

export const Navbar = styled.nav`
    width: 80%;
    height: 6em;

    margin:0 0 0 2em;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ImgLogo = styled.img`
    width: 4.2em;

    position: fixed;
    top:1em;
`

export const List = styled.ul`
    width: 60%;
    height: 3em;

    list-style: none;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Link = styled.a`
    width: 25%;
    font-size: 1.2em;
    font-family: 'Montserrat', sans-serif;
    color:#fff;
    text-align: center;
    text-decoration: none;

    cursor: pointer;
    
    &:hover{
        border:2px solid #D79434;
        border-radius: 15px;
    }

`

export const Item = styled.li`
    
`

export const SubContainer = styled.div`
    width: 100%;
    height: 60%;

    display:flex;
    flex-direction: column;
    align-items: center;
`


export const BoxMessage = styled.div`
    width: 75%;
    height: 50%;

    display:flex;
    align-items: center;
`

export const Message = styled.h2`
    width: 23em;

    font-size: 2.5em;
    font-family: 'Montserrat', sans-serif;
    color:#FFAC2D;

`

export const SpanMessage = styled.span`
    font-weight: 300;
    color:#FF611E;
`

export const BoxSubscribe = styled.div`
    width: 75%;
    height: 50%;

    font-family: 'Montserrat', sans-serif;
`

export const CardSubscribe = styled.div`
    width: 50%;
    height: 10em;

    border-radius: 10px;

    padding:0.5em 0 0 1em;

    background-color: #FFFFFF;
`

export const BoxBall = styled.div`
    width:9%;

    display: flex;
    justify-content: space-around;

    margin: 0 0 0.5em 0;
`

export const Ball = styled.div`
    width: 11px;
    height: 11px;

    border-radius: 50%;

    background-color:#00145D;
`

export const HR = styled.hr`
    width:90%;
    height: 4px;
    border: none;
    border-radius: 5px;
    background-color: #00145D;
`

export const SubscribeH2 = styled.h2`
    font-size: 2.2em;
    color: #00145D;

    margin:0.5em 0 0.5em 0;
`
export const SubscribeH3 = styled.h3`
    font-size: 1.35em;
    font-weight: 300;
    color:#272727;
`
export const LinkSubscribe = styled.h3`
    font-size: 1.15em;
    font-weight: 300;
    color:#FED5B2;

    margin: 0.5em 0 0 0;
`