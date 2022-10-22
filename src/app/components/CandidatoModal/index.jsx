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

export const CandidatoModal = ({ list, handleClose, show }) => {
    
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>{list.nome}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ margin: 'auto'}}>
        <img src={
          list.nome === "LULA" ? imgLula 
          : list.nome === "JAIR BOLSONARO" ? imgBolsonaro 
          : list.nome === "CIRO GOMES" ? imgCiro 
          : list.nome === "SIMONE TEBET" ? imgSimone 
          : list.nome === "SORAYA THRONICKE" ? imgSoraya 
          : list.nome === "FELIPE D&apos;AVILA" ? imgFelipe 
          : list.nome === "PADRE KELMON" ? imgPadre 
          : list.nome === "LÉO PÉRICLES" ? imgLeo 
          : list.nome === "SOFIA MANZANO" ? imgSofia 
          : list.nome === "VERA" ? imgVera 
          : list.nome === "CONSTITUINTE EYMAEL" ? imgEymael 
          : ''} alt={list.nome} width={150} />
          <h4>{list.partido}</h4>
          <p>{list.numero}</p>
      </Modal.Body>

      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  )
}