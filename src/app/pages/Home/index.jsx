import React, { Fragment, useEffect, useState } from 'react'
import axios from "axios";
import * as H from './HomeStyles'

import imgLula from '../../assets/img/lula.png'
import imgBolsonaro from '../../assets/img/bolsonaro.png'
import imgCiro from '../../assets/img/ciro.png'
import imgSimone from '../../assets/img/simone.png'
import imgLeo from '../../assets/img/leo.png'
import imgPadre from '../../assets/img/padre.png'
import imgSoraya from '../../assets/img/soraya.png'
import imgSofia from '../../assets/img/sofia.png'
import imgVera from '../../assets/img/vera.png'
import imgFelipe from '../../assets/img/felipe.png'
import imgEymael from '../../assets/img/eymael.png'

import { CandidatoModal } from '../../components/CandidatoModal'
import { GeraisModal } from '../../components/GeraisModal'

import BarraDeProgresso from '../../share/utils/BarraDeProgresso'
import { Menu } from '../../components/Menu';

export const Home = () => {

    const [ data, setData ] = useState([])
    const [ estado, setEstado ] = useState("br/br")
    const [ click, setClick ] = useState(false)

    const [ candidato, setCandidato ] = useState([]);
    const [ infoGerais, setInfoGerais ] = useState([]);

    const [showCandidato, setShowCandidato] = useState(false);
    const [showGerais, setShowGerais] = useState(false);

    const handleShowCandidato = () => setShowCandidato(true);
    const handleCloseCandidato = () => setShowCandidato(false);

    const handleShowGerais = () => setShowGerais(true);
    const handleCloseGerais = () => setShowGerais(false);


    const handleClick = () => {
        setClick(!click)
    }

    const closeNavbar = () => {
        if(click === true){
          setClick(false)
        }
    }

    useEffect(()=>{
        const loadData = async () => {
        await axios.get(`https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/${estado}-c0001-e000544-r.json`).then((response)=>{
            setData([response.data])
        })
        }
        loadData()
    },[estado])

    const handleInfoGerais = (
        validos,
        pcomparecimento,
        abstencoes,
        pabstencoes,
        secoes,
        tsecoes,
        psecoes,
        anulados,
        anuladosSJ,
        nulos,
        pnulo,
        branco,
        pbranco,
        totais) => {
        setInfoGerais({
            validos,
            pcomparecimento,
            abstencoes,
            pabstencoes,
            secoes,
            tsecoes,
            psecoes,
            anulados,
            anuladosSJ,
            nulos,
            pnulo,
            branco,
            pbranco,
            totais})
        handleShowGerais()
    }

    const handleInfoCandidato = (id, nome, partido, numero, situacao, porcentagem, totalvotos) => {
        setCandidato({ id, nome, partido, numero, situacao, porcentagem, totalvotos })
        handleShowCandidato()
    }

    return (
    <H.Principal >

        {data && data.map((st, i)=>{
            return(
            <Fragment key={i}>
                <Menu setEstado={setEstado} setClick={setClick} click={click} closeNavbar={closeNavbar}/>
                <H.Titulo>
                    <div aria-label={`Seções apuradas até o momento: ${st.pst}%`} className='titulo-header'>
                        <b>{st.pst}%</b> das seções apuradas
                    </div>
                    <H.TituloUrnasApuradasContainer>
                        <H.TituloUrnasApuradas aria-label="Barra de progresso das urnas apuradas, iniciando em 0% e finalizando em 100%"><BarraDeProgresso bgcolor={'linear-gradient(to right,#3737c2, #ff0000)'} progress={parseInt(st.pst)} height={20} /></H.TituloUrnasApuradas>
                    </H.TituloUrnasApuradasContainer>
                    <div className='titulo-footer'>
                        <span aria-label={`Última atualização: dia ${st.dg} às ${st.hg} horas, horário de Brasília`}>Última atualização: {st.dg} - {st.hg} (Horário local) - Fonte: TSE</span>
                    </div>
                    <H.TopBar>
                        <span className='estados' onClick={handleClick}><H.IconVotos/> Estados</span>
                        <span><a 
                            aria-label="Botão para atualizar página" className='atualizar' onClick={()=>{window.location.reload()}}><H.IconAtualizar/> Atualizar</a></span>
                        <span><a 
                        aria-label="Botão mostrar estatísticas gerais da apuração." className='gerais' onClick={()=>{handleInfoGerais(
                        st.vnom,
                        st.pc,
                        st.a,
                        st.pa,
                        st.s,
                        st.st,
                        st.pst,
                        st.van,
                        st.vansj,
                        st.tvn,
                        st.ptvn,
                        st.vb,
                        st.pvb,
                        st.tv)}}><H.IconVotos/> Gerais</a></span>
                    </H.TopBar>
                </H.Titulo>
            
                <GeraisModal 
                infoGerais={infoGerais} 
                handleCloseGerais={handleCloseGerais}
                showGerais={showGerais}
                setShowGerais={setShowGerais}
                />

                <CandidatoModal 
                candidato={candidato} 
                handleCloseCandidato={handleCloseCandidato}
                showCandidato={showCandidato}
                setShowCandidato={setShowCandidato}
                />
                <h2>{
                    estado === "br/br" ? "Brasil" :
                    estado === "zz/zz" ? "Exterior" :
                    estado === "ac/ac" ? "Acre" :
                    estado === "al/al" ? "Alagoas" :
                    estado === "ba/ba" ? "Bahia" :
                    estado === "ce/ce" ? "Ceará" :
                    estado === "go/go" ? "Goiás" :
                    estado === "ma/ma" ? "Maranhão" :
                    estado === "mg/mg" ? "Minas Gerais" :
                    estado === "mt/mt" ? "Mato Grosso" :
                    estado === "ms/ms" ? "Mato Grosso do Sul" :
                    estado === "pa/pa" ? "Pará" :
                    estado === "pr/pr" ? "Paraná" :
                    estado === "pb/pb" ? "Paraíba" :
                    estado === "pe/pe" ? "Pernambuco" :
                    estado === "rj/rj" ? "Rio de Janeiro" :
                    estado === "rn/rn" ? "Rio Grande do Norte" :
                    estado === "rs/rs" ? "Rio Grande do Sul" :
                    estado === "ro/ro" ? "Rondônia" :
                    estado === "rr/rr" ? "Roraima" :
                    estado === "sc/sc" ? "Santa Catarina" :
                    estado === "se/se" ? "Sergipe" :
                    estado === "sp/sp" ? "São Paulo" :
                    estado === "to/to" ? "Tocantins" :                    
                    "Brasil" }</h2>
                <H.Container>
                    {st.cand.map((c, i)=>{
                        return(
                        <H.Candidato key={i} eleito={c.st === 's'} onClick={()=>handleInfoCandidato(
                            c.seq, c.nm, c.cc, c.n, c.st, c.pvap, c.vap)}>
                            <div className='candidato-header'>
                                <div className='candidato-left'>
                                    <div className='candidato-img'>
                                    <img src={
                                            c.nm === "LULA" ? imgLula 
                                            : c.nm === "JAIR BOLSONARO" ? imgBolsonaro 
                                            : c.nm === "CIRO GOMES" ? imgCiro 
                                            : c.nm === "SIMONE TEBET" ? imgSimone 
                                            : c.nm === "SORAYA THRONICKE" ? imgSoraya 
                                            : c.nm === "FELIPE D&apos;AVILA" ? imgFelipe 
                                            : c.nm === "PADRE KELMON" ? imgPadre 
                                            : c.nm === "LÉO PÉRICLES" ? imgLeo 
                                            : c.nm === "SOFIA MANZANO" ? imgSofia 
                                            : c.nm === "VERA" ? imgVera 
                                            : c.nm === "CONSTITUINTE EYMAEL" ? imgEymael 
                                            : ''} alt={`Imagem do candidato ${c.nm}.`} loading="lazy" />
                                    </div>
                                </div>
            
                                <div className='candidato-right'>
                                    <div className='candidato-votos'>
                                        <div className='candidato-porcentagem'>
                                            <h3>{c.pvap}%</h3>
                                        </div>
                                        <div className='candidato-qtd-votos'>
                                            <span>{Number(c.vap).toLocaleString('pt-BR')} votos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className='candidato-footer'>
                                <div className='candidato-nome'>
                                    <h2>
                                        {
                                            c.nm === "LULA" ? 'LULA' 
                                            : c.nm === "JAIR BOLSONARO" ? 'BOLSONARO' 
                                            : c.nm === "CIRO GOMES" ? 'CIRO GOMES' 
                                            : c.nm === "SIMONE TEBET" ? 'SIMONE TEBET' 
                                            : c.nm === "SORAYA THRONICKE" ? 'SORAYA' 
                                            : c.nm === "FELIPE D&apos;AVILA" ? "FELIPE D'ÁVILA" 
                                            : c.nm === "PADRE KELMON" ? 'PADRE KELMON' 
                                            : c.nm === "LÉO PÉRICLES" ? 'LÉO PÉRICLES' 
                                            : c.nm === "SOFIA MANZANO" ? 'SOFIA MANZ' 
                                            : c.nm === "VERA" ? 'VERA LÚCIA' 
                                            : c.nm === "CONSTITUINTE EYMAEL" ? 'EYMAEL' 
                                            : ''
                                        }
                                    </h2>
                                    <h5>Vice: {c.nv}</h5>
                                    {c.st === "s" ? 
                                        <H.EleitoInfo eleito={c.st}>
                                            <span>Eleito</span>
                                        </H.EleitoInfo>
                                    : 
                                    c.st === "n" ?
                                        <H.EleitoInfo eleito={c.st}>
                                            <span>Não eleito</span>
                                        </H.EleitoInfo> 
                                    : ""
                                    }
                                </div>
                            </div>
                        </H.Candidato>
                        )
                    })}
                </H.Container>
            </Fragment>
            )
        })}
    </H.Principal>
    )
}
