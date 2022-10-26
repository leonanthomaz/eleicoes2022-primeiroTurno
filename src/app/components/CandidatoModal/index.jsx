import React from 'react'
import Modal from 'react-bootstrap/Modal'
import * as CM from './CandidatoModalStyles'
import { GrClose } from "react-icons/gr";

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


export const CandidatoModal = ({ candidato, handleCloseCandidato, showCandidato }) => {
    
  return (
    <Modal
      size="md"
      aria-labelledby={`Janela com informações do candidato ${candidato.nome}`}
      centered
      show={showCandidato} 
      onHide={handleCloseCandidato}
      style={{background: '#14141498'}}
     >
      <CM.Container>
      <CM.Header>
          <GrClose 
          style={{color: '#14141498', 
          float: 'right', 
          fontSize: '20px',
          cursor: 'pointer'
          }} onClick={handleCloseCandidato}
          />

        <CM.Title>{candidato.nome === "LULA" ? 'LULA' 
          : candidato.nome === "JAIR BOLSONARO" ? 'JAIR BOLSONARO'
          : candidato.nome === "CIRO GOMES" ? 'CIRO GOMES' 
          : candidato.nome === "SIMONE TEBET" ? 'SIMONE TEBET' 
          : candidato.nome === "SORAYA THRONICKE" ? 'SORAYA' 
          : candidato.nome === "FELIPE D&apos;AVILA" ? "FELIPE D'ÁVILA" 
          : candidato.nome === "PADRE KELMON" ? 'PADRE KELMON'
          : candidato.nome === "LÉO PÉRICLES" ? 'LÉO PÉRICLES' 
          : candidato.nome === "SOFIA MANZANO" ? 'SOFIA MANZ' 
          : candidato.nome === "VERA" ? 'VERA LÚCIA'
          : candidato.nome === "CONSTITUINTE EYMAEL" ? 'EYMAEL' 
          : ''}</CM.Title>

      </CM.Header>
      <CM.Box>
            <div className='left'>
              <div className='left-img'>
                <img 
                src={
                  candidato.nome === "LULA" ? imgLula 
                  : candidato.nome === "JAIR BOLSONARO" ? imgBolsonaro 
                  : candidato.nome === "CIRO GOMES" ? imgCiro 
                  : candidato.nome === "SIMONE TEBET" ? imgSimone 
                  : candidato.nome === "SORAYA THRONICKE" ? imgSoraya 
                  : candidato.nome === "FELIPE D&apos;AVILA" ? imgFelipe 
                  : candidato.nome === "PADRE KELMON" ? imgPadre 
                  : candidato.nome === "LÉO PÉRICLES" ? imgLeo 
                  : candidato.nome === "SOFIA MANZANO" ? imgSofia 
                  : candidato.nome === "VERA" ? imgVera 
                  : candidato.nome === "CONSTITUINTE EYMAEL" ? imgEymael 
                  : ''} alt={`Imagem do candidato ${candidato.nome}.`} loading="lazy" width={150} 
                />
              </div>
              <h3>{candidato.numero}</h3>
              <div className='left-h'>
                  <h5>{candidato.partido}</h5>
              </div>
            </div>
            <div className='right'>
              <div className='right-h'>
                <h3>{candidato.porcentagem}%</h3>
              </div>
              <div className='right-f'>
                <span>Votos: {Number(candidato.totalvotos).toLocaleString('pt-BR')}</span>
                <span>Situação: {candidato.situacao ? candidato.situacao : 'Indefinida'}</span> 
              </div>
            </div>
          </CM.Box>
      </CM.Container>  
      <Modal.Footer>
          Fonte: TSE
      </Modal.Footer>
    </Modal>
  )
}