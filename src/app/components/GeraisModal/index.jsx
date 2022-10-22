import React from 'react';
import Modal from 'react-bootstrap/Modal';
import * as VT from './GeraisModalStyles'
import { AiOutlineClose } from "react-icons/ai";

export const GeraisModal = ({infoGerais, handleCloseGerais, showGerais }) => {
    
  return (
    <Modal
      size="md"
      aria-labelledby={`Janela com informações Gerais`}
      centered
      show={showGerais} 
      onHide={handleCloseGerais}
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
          }}>Gerais</h1>
          </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{background: '#ecececce', padding: '20px'}}>
      <div className="" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
           
      </div><br/>

      <div className='geral'>

      <VT.VT validos={infoGerais.validos} brancos={infoGerais.branco}/>

      <h1>Validos: {infoGerais.validos}</h1><br/>
      <h1>Brancos: {infoGerais.branco}</h1><br/>
      <h1>anulados:{infoGerais.anulados}</h1><br/>
      <h1>anuladosSJ:{infoGerais.anuladosSJ}</h1><br/>
      <h1>nulos:{infoGerais.nulos}</h1><br/>
      <h1>totais:{infoGerais.totais}</h1><br/>
      </div>
      
      <div style={{textAlign: 'center', fontSize: '32px', fontWeight: 'bold'}}>
          {/* <p>{list.numero}</p> */}
      </div><br/>
      <h4 style={{textAlign: 'center', fontSize: '16px'}}>
        {/* {list.partido} */}
      </h4><br/>
      <br/>
      {/* situação: {list.situacao} */}
      </Modal.Body>

      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  )
}