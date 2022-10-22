import React from 'react';
import Modal from 'react-bootstrap/Modal';
import * as M from './GeraisModalStyles'
import { AiOutlineClose } from "react-icons/ai";
import { FaVoteYea } from "react-icons/fa";

export const GeraisModal = ({infoGerais, handleCloseGerais, showGerais }) => {
    
  return (
    <Modal
      size="lg"
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
      
      <M.Container>
        <div className='right'>
          <M.Box1>
            <M.Circulo1>
                <div className='aaa'>
                  <h3>{Number(infoGerais.totais).toLocaleString('pt-BR')}</h3>
                  <span>Totais</span>
                </div>
                numero abstencoes{infoGerais.abstencoes}
                % de abst{infoGerais.pabstencoes}
                %de comparecimento {infoGerais.pcomparecimento}
            </M.Circulo1>
          </M.Box1>
        </div>
        <div className='right'>
          <M.Box2>
            <M.Circulo2>
                <div className='bbb'>
                  <h3>{Number(infoGerais.validos).toLocaleString('pt-BR')}</h3>
                  <p>{infoGerais.pbranco}%</p>
                  <span>Válidos</span>
                </div>
            </M.Circulo2>
            <M.Circulo2>
                <div className='bbb'>
                  <h3>{Number(infoGerais.branco).toLocaleString('pt-BR')}</h3>
                  <span>Brancos</span>
                </div>
            </M.Circulo2>
            <M.Circulo2>
                <div className='bbb'>
                  <h3>{Number(infoGerais.nulos).toLocaleString('pt-BR')}</h3>
                  <p>{infoGerais.pnulo}%</p>
                  <span>Nulos</span>
                </div>
            </M.Circulo2>
          </M.Box2>

          <M.Box3>
          
          <M.Circulo3>
              <div className='ccc'>
                <h3>{Number(infoGerais.anulados).toLocaleString('pt-BR')}</h3>
                <span>Anulados</span>
              </div>
          </M.Circulo3>
          <M.Circulo3>
              <div className='ccc'>
                <h3>{Number(infoGerais.anulados).toLocaleString('pt-BR')}</h3>
                <span>Anulados</span>
              </div>
          </M.Circulo3>
          </M.Box3>
        </div>
      </M.Container>
      <br/>
      </Modal.Body>

      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  )
}