import React from "react";
import * as S from "./style"

import Team from "./img/imgTeam.png"

export default function App(){
    return(
        <S.Container id="events">
            <S.Title>Eventos</S.Title>
            <S.SubContainer>
                <S.ImgTeam src={Team} alt="foto do evento Tech girls"/>
                <S.BoxText>
                    <S.Event>Tech Girls</S.Event>
                    <S.P>Com o objetivo de promover network entre mulheres de tecnologia, conectar talentos femininos com oportunidades no mercado da tecnologia, oferecer experiências de troca através de eventos com mulheres que já têm experiência no mercado da tecnologia, acelerar os talentos com ajuda para custeio de luz e internet para facilitar o processo de estudo, promover mentoria para as participantes do grupo.</S.P>
                </S.BoxText>
            </S.SubContainer>
        </S.Container>
    )

}