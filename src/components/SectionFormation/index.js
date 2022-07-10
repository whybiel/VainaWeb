import React from "react";
import * as S from "./style"

import codeimg from "./img/codeimg.png"
import iconpc from "./img/iconpc.png"

export default function App() {
    return (
        <S.Container>
            <S.BoxText>
                <S.Text>Formação</S.Text>
                <S.SubBoxText>
                    <S.Icon src={iconpc} alt="icone de comptador" />
                    <div>
                        <S.Area>FRONT-END</S.Area>
                        <S.P>Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript.</S.P></div>

                </S.SubBoxText>
                <S.SubBoxText>
                    <S.Icon src={iconpc} alt="icone de comptador" />
                    <div>
                        <S.Area>BACK-END</S.Area>
                        <S.P>O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).</S.P>
                    </div>

                </S.SubBoxText>
            </S.BoxText>
            <S.BoxImg>
                <S.Img src={codeimg} alt="foto com codigos e lupas" />
            </S.BoxImg>
        </S.Container>
    )
}