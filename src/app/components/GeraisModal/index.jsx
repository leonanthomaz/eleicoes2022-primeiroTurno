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
          <h2 style={{
          color: '#14141498', 
          textAlign: 'center', 
          marginTop: '20px',
          // borderBottom: '2px solid',
          lineHeight: '5rem',
          fontWeight: 900
          }}>Estatísticas Gerais</h2>
          </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{background: '#ecececce', padding: '20px'}}>


      
      <M.ContainerPrimario>
        <M.Left>
          <M.CirculoPrincipal>
              <div className='circulo-principal-container'>
                
                <span>Total Comparecimento</span>
                <h3>{Number(infoGerais.totais).toLocaleString('pt-BR')}</h3>
                <h2>{infoGerais.pcomparecimento}%</h2>
              </div>
          </M.CirculoPrincipal>
        </M.Left>

        <M.Right>
          <M.CirculoSecundario>
              <div className='circulo-secundario-container'>
                <span>Abstenções</span>
                <h3>{Number(infoGerais.abstencoes).toLocaleString('pt-BR')}</h3>
                <h5>{infoGerais.pabstencoes}%</h5>
              </div>
          </M.CirculoSecundario>
          <M.CirculoSecundario>
              <div className='circulo-secundario-container'>
                <span>Brancos</span>
                <h3>{Number(infoGerais.branco).toLocaleString('pt-BR')}</h3>
                <h5>{infoGerais.pbranco}%</h5>
              </div>
          </M.CirculoSecundario>
          <M.CirculoSecundario>
              <div className='circulo-secundario-container'>
                <span>Nulos</span>
                <h3>{Number(infoGerais.nulos).toLocaleString('pt-BR')}</h3>
                <h5>{infoGerais.pnulo}%</h5>
              </div>
          </M.CirculoSecundario>
        </M.Right>
      </M.ContainerPrimario>

      <M.ContainerSecundario>
        <M.CirculoTerciario>
          <div className='circulo-terciario-container'>
            <FaVoteYea/>
            <h3>{Number(infoGerais.secoes).toLocaleString('pt-BR')}</h3>
            <span>seções no total</span>
          </div>
        </M.CirculoTerciario>

        <M.CirculoTerciario>
          <div className='circulo-terciario-container'>
            <FaVoteYea/>
            <h3>{Number(infoGerais.tsecoes).toLocaleString('pt-BR')}</h3>
            <span>seções apuradas</span>
          </div>
        </M.CirculoTerciario>

        <M.CirculoTerciario>
          <div className='circulo-terciario-container'>
            <FaVoteYea/>
            <h3>{infoGerais.psecoes}%</h3>
            <span>das unas apuradas</span>
          </div>
        </M.CirculoTerciario>
      </M.ContainerSecundario>
      <br/>
      </Modal.Body>

      <Modal.Footer>
          Fonte: TSE
      </Modal.Footer>
    </Modal>
  )
}