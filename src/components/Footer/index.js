import React from "react";
import * as S from "./style"

import face from "./img/faceicon.png"
import insta from "./img/instaicon.png"
import linkedin from "./img/linkeicon.png"
import medium from "./img/mediumicon.png"
import youtube from "./img/ytbicon.png"

export default function App(){
    return(
        <S.Container>
            <S.Title>Contato</S.Title>
            <S.SubContainer>
                <S.BoxText>
                    <S.Text>Siga nossas redes sociais e fique conectado com todas as novidades.</S.Text>
                </S.BoxText>
                <S.BoxIcon>
                    <S.Icon src={face} alt="logo facebook"/>
                    <S.Icon src={insta} alt="logo instagram"/>
                    <S.Icon src={linkedin} alt="logo linkedin"/>
                    <S.Icon src={medium} alt="logo medium"/>
                    <S.Icon src={youtube} alt="logo youtube"/>
                </S.BoxIcon>
            </S.SubContainer>
        </S.Container>
    )
}