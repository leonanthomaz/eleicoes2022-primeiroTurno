import React from 'react';
import Modal from 'react-bootstrap/Modal';

import { AiOutlineClose } from "react-icons/ai";

export const GeraisModal = ({ }) => {
    
  return (
    <Modal
      size="md"
      aria-labelledby={`Janela com informações Gerais`}
      centered
      show={show} 
      onHide={handleClose}
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