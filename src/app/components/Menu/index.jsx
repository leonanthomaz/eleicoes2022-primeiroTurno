import React from 'react'
import * as M from './MenuStyles'
import brasao from '../../assets/img/brasao.png'

export const Menu = ({ setEstado, click, closeNavbar }) => {
    
    return (
        <M.Container click={click}>
            <div className='menu-title'>
                <div className='left'>
                    <img src={brasao} alt='Brasão da República'/><h4>Regiões:</h4>
                </div>
                <div className='right'>
                    <M.Icon onClick={closeNavbar}/>
                </div>
            </div>
            <ul>
                <li onClick={()=>{setEstado("br/br")}}><span onClick={closeNavbar}>Brasil</span></li>
                <li onClick={()=>{setEstado("rj/rj")}}><span onClick={closeNavbar}>Rio de Janeiro</span></li>
                <li onClick={()=>{setEstado("zz/zz")}}><span onClick={closeNavbar}>Exterior</span></li>
                <li onClick={()=>{setEstado("sp/sp")}}><span onClick={closeNavbar}>São Paulo</span></li>
                <li onClick={()=>{setEstado("mg/mg")}}><span onClick={closeNavbar}>Minas Gerais</span></li>
                <li onClick={()=>{setEstado("ac/ac")}}><span onClick={closeNavbar}>Acre</span></li>
                <li onClick={()=>{setEstado("al/al")}}><span onClick={closeNavbar}>Alagoas</span></li>
                <li onClick={()=>{setEstado("ap/ap")}}><span onClick={closeNavbar}>Amapá</span></li>
                <li onClick={()=>{setEstado("am/am")}}><span onClick={closeNavbar}>Amazonas</span></li>
                <li onClick={()=>{setEstado("ba/ba")}}><span onClick={closeNavbar}>Bahia</span></li>
                <li onClick={()=>{setEstado("ce/ce")}}><span onClick={closeNavbar}>Ceará</span></li>
                <li onClick={()=>{setEstado("go/go")}}><span onClick={closeNavbar}>Goiás</span></li>
                <li onClick={()=>{setEstado("ma/ma")}}><span onClick={closeNavbar}>Maranhão</span></li>
                <li onClick={()=>{setEstado("mt/mt")}}><span onClick={closeNavbar}>Mato Grosso</span></li>
                <li onClick={()=>{setEstado("ms/ms")}}><span onClick={closeNavbar}>Mato Grosso Sul</span></li>
                <li onClick={()=>{setEstado("pr/pr")}}><span onClick={closeNavbar}>Paraná</span></li>
                <li onClick={()=>{setEstado("pb/pb")}}><span onClick={closeNavbar}>Paraíba</span></li>
                <li onClick={()=>{setEstado("pa/pa")}}><span onClick={closeNavbar}>Pará</span></li>
                <li onClick={()=>{setEstado("pe/pe")}}><span onClick={closeNavbar}>Pernambuco</span></li>
                <li onClick={()=>{setEstado("rn/rn")}}><span onClick={closeNavbar}>Rio Grande do Norte</span></li>
                <li onClick={()=>{setEstado("rs/rs")}}><span onClick={closeNavbar}>Rio Grande do Sul</span></li>
                <li onClick={()=>{setEstado("ro/ro")}}><span onClick={closeNavbar}>Rondônia</span></li>
                <li onClick={()=>{setEstado("rr/rr")}}><span onClick={closeNavbar}>Roraima</span></li>
                <li onClick={()=>{setEstado("sc/sc")}}><span onClick={closeNavbar}>Santa Catarina</span></li>
                <li onClick={()=>{setEstado("se/se")}}><span onClick={closeNavbar}>Sergipe</span></li>
                <li onClick={()=>{setEstado("to/to")}}><span onClick={closeNavbar}>Tocantins</span></li>
            </ul>
        </M.Container>
       
    )
}
