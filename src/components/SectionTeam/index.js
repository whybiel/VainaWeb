import React from "react";
import * as S from "./style"

import Team from "./team"



export default function App(){
    return(
        <S.Container id="team">
            <S.BoxTeam>
                <Team/>
            </S.BoxTeam>
        </S.Container>
    )
}