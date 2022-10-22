import React from 'react';
import Modal from 'react-bootstrap/Modal';

export const CandidatoModal = ({ list, handleClose, show }) => {
    
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>{list.nome}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <h4>{list.partido}</h4>
          <p>{list.numero}</p>
      </Modal.Body>

      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  )
}