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
          }}>Gerais</h2>
          </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{background: '#ecececce', padding: '20px'}}>

        <M.Teste>
          <div className='container'>
            <div className='a'>

                <h3>{Number(infoGerais.totais).toLocaleString('pt-BR')} - {infoGerais.pcomparecimento}%</h3>
                <span>Total Comparecimento</span>

                <h3>{Number(infoGerais.abstencoes).toLocaleString('pt-BR')} - {infoGerais.pabstencoes}%</h3>
                <span>Abstenções</span>

            </div>
            <div className='b'>

              <div className='right-header'>
                  <h3>{Number(infoGerais.totais).toLocaleString('pt-BR')}</h3>
                  <span>Total de votos</span>
                  <br/>
                  <h3>Total de seções (s) - {Number(infoGerais.secoes).toLocaleString('pt-BR')}</h3>
                  <br/>
                  <h3>Seções totalizadas (t) - {Number(infoGerais.tsecoes).toLocaleString('pt-BR')}</h3>
                  <br/>
                  <h3>porcentagem totalizadas (ps) - {infoGerais.psecoes}</h3>
                  <span>secoes </span>
              </div>
                  
              <div className='right-footer'>

                  <h3>Votos Válidos: {Number(infoGerais.validos).toLocaleString('pt-BR')}</h3>
                  <br/>
                  <h3>Branco - {Number(infoGerais.branco).toLocaleString('pt-BR')} - {infoGerais.pbranco}%</h3>
                  <br/>
                  <h3>Nulos - {Number(infoGerais.nulos).toLocaleString('pt-BR')} - {infoGerais.pnulo}%</h3>

                  {/* <h3>{Number(infoGerais.validos).toLocaleString('pt-BR')}</h3> */}
              </div>
            </div>
          </div>
        </M.Teste>
      
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
        </div>
      </M.Container>
      <br/>
      </Modal.Body>

      <Modal.Footer>
          Fonte: TSE
      </Modal.Footer>
    </Modal>
  )
}