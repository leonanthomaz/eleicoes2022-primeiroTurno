import React from 'react'
import * as H from './HeaderStyles'
import brasao from '../../assets/img/brasao.png'

export const Header = () => {
    return (
        <H.Container>
            <H.Titulo>Eleições 2022</H.Titulo>
            <H.Brasao><img src={brasao}/></H.Brasao>            
        </H.Container>
    )
}
