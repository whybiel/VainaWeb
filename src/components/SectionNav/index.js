import React from "react";
import * as S from "./style.js"

import logo from "./img/logo.png"

export default function App({pass}) {
    return (
        <S.Container>
            <S.Navbar>
                <S.Link href="https://www.vainaweb.com.br/" target="blank_"><S.ImgLogo src={logo} alt="logo vai na web" /></S.Link>
                <S.List>
                    <S.Link href="#about"><S.Item >Sobre</S.Item></S.Link>
                    <S.Link href="#formation"><S.Item >Formação</S.Item></S.Link>
                    <S.Link href="#team"><S.Item >Equipe</S.Item></S.Link>
                    <S.Link href="#events"><S.Item >Eventos</S.Item></S.Link>
                    <S.Link href="#contact"><S.Item >Contatos</S.Item></S.Link>
                </S.List>
            </S.Navbar>
            <S.SubContainer>
                <S.BoxMessage>
                    <S.Message><S.SpanMessage>//</S.SpanMessage> Quer construir uma carreira de sucesso como Desenvolvedor(a) Front-end?</S.Message>
                </S.BoxMessage>
                <S.BoxSubscribe>
                    <S.CardSubscribe>
                        <S.BoxBall>
                            <S.Ball></S.Ball>
                            <S.Ball></S.Ball>
                            <S.Ball></S.Ball>
                        </S.BoxBall>
                        <S.HR></S.HR>
                        <S.SubscribeH2>Inscreva-se no Vai na Web!</S.SubscribeH2>
                        <S.SubscribeH3><strong>Inscrições</strong> 02 a 21 de Agosto</S.SubscribeH3>
                    </S.CardSubscribe>
                    <S.LinkSubscribe><strong>Link para o formulário:</strong> bit.ly/CarreiraVaiNaWeb</S.LinkSubscribe>
                </S.BoxSubscribe>
            </S.SubContainer>
        </S.Container>
    )
}