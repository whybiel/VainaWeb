import React, { useEffect, useState } from "react";
import * as S from "./style"

import dimitri from "./img/dimitri.jpg"
import hugo from "./img/hugo.jpg"
import karla from "./img/karla.jpg"
import paula from "./img/paula.jpg"
import thais from "./img/thais.jpg"
import aline from "./img/aline.jpg"
import alinesocio from "./img/alinesocio.jpg"
import andrea from "./img/andrea.jpg"
import cris from "./img/cris.jpg"
import karinne from "./img/karinne.jpg"
import luzia from "./img/luzia.jpg"
import mariana from "./img/mariana.jpg"
import marina from "./img/marina.jpg"
import marlon from "./img/marlon.jpg"
import priscila from "./img/priscila.jpg"


export default function App() {
    const [team , setTeam ] =useState([
        {
            nome: "Dimitri Duque",
            office: "#voluntários",
            img: <S.Img src={dimitri} alt="foto do dimitri" />
        },
        {
            nome: "Hugo Sabino",
            office: "#voluntários",
            img: <S.Img src={hugo} alt="foto do hugo" />
        },
        {
            nome: "Karla De Melo",
            office: "#voluntários",
            img: <S.Img src={karla} alt="foto da karla" />
        },
        {
            nome: "Paula Missan",
            office: "#voluntários",
            img: <S.Img src={paula} alt="foto da paula" />
        },
        {
            nome: "Thais Brait",
            office: "#voluntários",
            img: <S.Img src={thais} alt="foto da thais" />
        }, {
            nome: "Aline Fróes",
            office: "#CEO",
            img: <S.Img src={aline} alt="foto da aline" />
        },
        {
            nome: "Aline Nogueira",
            office: "#Agente Socioemocional",
            img: <S.Img src={alinesocio} alt="foto da aline" />
        },
        {
            nome: "Andrea Marinho",
            office: "#Psicóloga",
            img: <S.Img src={andrea} alt="foto da andrea" />
        },
        {
            nome: "Cris Dos Prazeres",
            office: "#Coordenadora Executiva",
            img: <S.Img src={cris} alt="foto da cris" />
        },
        {
            nome: "Karinne Moreira",
            office: "#Facilitadora Técnica",
            img: <S.Img src={karinne} alt="foto da karinne" />
        },
        {
            nome: "Luzia Merlim",
            office: "#Agente Socioemocional",
            img: <S.Img src={luzia} alt="foto da luzia" />
        },
        {
            nome: "Mariana Correia",
            office: "#Coordenadora Administrativa",
            img: <S.Img src={mariana} alt="foto da mariana" />
        },
        {
            nome: "Marina Tiago",
            office: "#Agente de Estratégia",
            img: <S.Img src={marina} alt="foto da marina" />
        },
        {
            nome: "Marlon Yuri",
            office: "#Instrutor Técnico",
            img: <S.Img src={marlon} alt="foto do marlon" />
        },
        {
            nome: "Priscila Tufani",
            office: "#Agente de Estratégia",
            img: <S.Img src={priscila} alt="foto da priscila" />
        }
    ])
    const [search, setSearch ] = useState("") 

    const FilteredTeam = team.filter((item) => {
        return item.nome.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <S.ContainerMap>
            <S.BoxInput>
                <S.Input type="text" placeholder="Pesquisar..." value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                <S.Btn></S.Btn>
            </S.BoxInput>

            {FilteredTeam.map((item) => (
                <S.MapBox>
                    <S.BoxText>
                        <h2>{item.nome}</h2>
                        <p>{item.office}</p>
                    </S.BoxText>
                    {item.img}
                </S.MapBox>
            ))}
        </S.ContainerMap>
    )

}