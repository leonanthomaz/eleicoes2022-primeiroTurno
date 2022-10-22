import React, { Fragment, useState } from 'react'
import * as C from './CardStyles'
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
import { BiRefresh } from "react-icons/bi";

import { CandidatoModal } from '../CandidatoModal'

export const Card = ({ data }) => {

    const [ list, setList ] = useState([])
    console.log('listagem:',list)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFind = (id, nome, partido, numero) => {
        console.log(id)
        // const item = data.filter(e => e.map(i => i.seq === id))
        setList({ id, nome, partido, numero })
        handleShow()
    }

    return (
    <C.Principal >

        {data.map((st, i)=>{
            return(
            <Fragment>
                <C.Titulo>
                    <h3>Acompanhe a apuração</h3>
                    <div className='titulo-header'>
                        <b>{st.pea}%</b> das urnas apuradas
                    </div>
                    <C.TituloUrnasApuradasContainer>
                        <b className='bleft'>0%</b><C.TituloUrnasApuradas porcentagem={st.pea}/><b className='bright'>100%</b>
                    </C.TituloUrnasApuradasContainer>
                    <div className='titulo-footer'>
                        <span>Última atualização: {st.dt} - {st.ht} (Horário local) - Fonte: TSE</span>
                    </div>
                </C.Titulo>
                <C.TopBar>
                   <span><a onClick={()=>{window.location.reload()}} className='atualizar'><BiRefresh/> Atualizar</a></span>
                </C.TopBar>

                <CandidatoModal 
                list={list} 
                handleClose={handleClose}
                show={show}
                setShow={setShow}
                />
                
                <C.Container>
                    {st.cand.map((c, i)=>{
                        return(
                        <C.Candidato key={i} eleito={c.e === 's'} onClick={()=>handleFind(
                            c.seq, c.nm, c.cc, c.n)}>
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
                                            : ''} />
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
                                    {/* <h2>{c.nm.split(' ').slice(0, 1).join(' ') === 'JAIR' ? 'BOLSONARO' : c.nm.split(' ').slice(0, 1).join(' ')}</h2> */}
                                    {/* <h2>{c.nm.split(' ').slice(0, 1).join(' ')}</h2> */}
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
                                            : c.nm === "SOFIA MANZANO" ? 'SOFIA MANZANO' 
                                            : c.nm === "VERA" ? 'VERA LÚCIA' 
                                            : c.nm === "CONSTITUINTE EYMAEL" ? 'EYMAEL' 
                                            : ''
                                        }
                                    </h2>
                                    <h5>Vice: {c.nv}</h5>
                                    {c.e === 's' ? 
                                        <C.EleitoInfo eleito={c.e === 's'}>
                                        {c.e === 's' ? <span>2º Turno</span> : <span>Não Eleito</span> }
                                        </C.EleitoInfo> :
                                        ''}
                                </div>
                            </div>
                        </C.Candidato>
                        )
                    })}
                </C.Container>
            </Fragment>
            )
        })}
    </C.Principal>
    )
}
