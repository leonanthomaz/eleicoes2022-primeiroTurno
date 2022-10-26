import React from 'react';
import Modal from 'react-bootstrap/Modal';
import * as M from './GeraisModalStyles';
import { GrClose } from "react-icons/gr";

import { FaVoteYea } from "react-icons/fa";
import { MdHowToVote } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";

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
    <M.Container>

      <M.Header>
          <GrClose 
          style={{color: '#14141498', 
          float: 'right', 
          fontSize: '20px',
          cursor: 'pointer'
          }} onClick={handleCloseGerais}
          />
        <M.Title>Estatísticas Gerais</M.Title>
      </M.Header>

      <M.Wrapper>
      <M.ContainerPrimario>
          <M.Left>
            <M.CirculoPrincipal>
                <div className='circulo-principal-container'>
                  <span>Seções Apuradas:</span>
                  <h3>{Number(infoGerais.tsecoes).toLocaleString('pt-BR')}</h3>
                  <h2>{infoGerais.psecoes}%</h2>
                </div>
            </M.CirculoPrincipal>
          </M.Left>

          <M.Right>
            <M.CirculoSecundario>
                <div className='circulo-secundario-container'>
                  <span>Abstenções:</span>
                  <h3>{Number(infoGerais.abstencoes).toLocaleString('pt-BR')}</h3>
                  <h5>{infoGerais.pabstencoes}%</h5>
                </div>
            </M.CirculoSecundario>
            <M.CirculoSecundario>
                <div className='circulo-secundario-container'>
                  <span>Brancos:</span>
                  <h3>{Number(infoGerais.branco).toLocaleString('pt-BR')}</h3>
                  <h5>{infoGerais.pbranco}%</h5>
                </div>
            </M.CirculoSecundario>
            <M.CirculoSecundario>
                <div className='circulo-secundario-container'>
                  <span>Nulos:</span>
                  <h3>{Number(infoGerais.nulos).toLocaleString('pt-BR')}</h3>
                  <h5>{infoGerais.pnulo}%</h5>
                </div>
            </M.CirculoSecundario>
          </M.Right>
        </M.ContainerPrimario>

        <M.ContainerSecundario>
          <M.CirculoTerciario>
            <div className='circulo-terciario-container'>
              <MdHowToVote/>
              <h3>{Number(infoGerais.secoes).toLocaleString('pt-BR')}</h3>
              <span>seções</span>
            </div>
          </M.CirculoTerciario>

          <M.CirculoTerciario>
            <div className='circulo-terciario-container'>
              <FaVoteYea/>
              <h3>{Number(infoGerais.tsecoes).toLocaleString('pt-BR')}</h3>
              <span>apuradas</span>
            </div>
          </M.CirculoTerciario>

          <M.CirculoTerciario>
            <div className='circulo-terciario-container'>
              <BsFillPeopleFill/>
              <h3>{Number(infoGerais.totais).toLocaleString('pt-BR')}</h3>
              <span>presentes</span>

            </div>
          </M.CirculoTerciario>
        </M.ContainerSecundario>
      </M.Wrapper>
      </M.Container>
      

      <Modal.Footer>
          Fonte: TSE
      </Modal.Footer>
    </Modal>
  )
}