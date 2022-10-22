import React from 'react';
import Modal from 'react-bootstrap/Modal';

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

import { AiOutlineClose } from "react-icons/ai";

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
      <Modal.Header closeButton>
          <Modal.Title>
          <h1 style={{
          color: '#14141498', 
          textAlign: 'center', 
          marginTop: '20px',
          // borderBottom: '2px solid',
          lineHeight: '5rem',
          fontWeight: 900
          }}>{candidato.nome}</h1>
          </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{background: '#ecececce', padding: '20px'}}>
      <div className="" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
            : ''} alt={candidato.nome} width={150} />
            
      </div><br/>
      <div style={{textAlign: 'center', fontSize: '32px', fontWeight: 'bold'}}>
          <p>{candidato.numero}</p>
      </div><br/>
      <h4 style={{textAlign: 'center', fontSize: '16px'}}>{candidato.partido}</h4><br/>
      <br/>
      situação: {candidato.situacao}
      </Modal.Body>

      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  )
}