import React from "react";
import * as S from "./style"

import Vnw from "./img/vnw.png"

export default function App() {
    return (
        <S.Container>
            <S.BoxImg>
                <S.ImgLogo src={Vnw} alt="logo vai na web" />
            </S.BoxImg>
            <S.BoxText>
                <S.SubBoxText>
                    <S.TextH2>Sobre o Vai na Web</S.TextH2>
                    <S.P>Fundado em 2017, no Complexo do Alemão, o Vai na Web vem impactando e transformando a vida de jovens das classes C, D e E do Rio de Janeiro e de outros 18 estados do Brasil. </S.P>
                    <S.P>Muito mais do que compartilhar conhecimento de programação front-end, o programa oferece aulas de inglês e desenvolvimento de habilidades humanas e socioemocionais, que preparam os futuros desenvolvedores para o mundo do trabalho e oferecem um espaço em que é possível descobrir a riqueza de áreas que a tecnologia tem.</S.P>
                    <S.P> Com o objetivo de acentuar a potência mundial que é a juventude, o Vai na Web tem se tornado cada vez mais um lugar de transformação. Através da cultura do afeto, a equipe do programa entende que “educar não é impor informação, é trocar” e sua maior riqueza, segundo a coordenadora executiva, Cris dos Prazeres, “é respeitar a geração da juventude que está nesse processo de compartilhar”.</S.P>
                </S.SubBoxText>
            </S.BoxText>
        </S.Container>
    )
}