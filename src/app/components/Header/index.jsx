import React from 'react'
import * as H from './HeaderStyles'

export const Header = () => {
    return (
        <H.Container>
            <H.Titulo>Eleições 2022</H.Titulo>
            <H.CardLeonan>
                <div className="card-leonan-container">
                    <div className='card-leonan-up'>
                        <h5>Desenvolvido por: Leonan Thomaz</h5>
                    </div>
                    <div className='card-leonan-down'>
                        <div>
                            <a href='https://www.linkedin.com/in/leonanthomaz/'>@leonanthomaz<H.Linkedin/></a>
                        </div>
                        <div>
                            <a href='https://github.com/leonanthomaz/'>@leonan.thomaz<H.Github/></a>
                        </div>
                    </div>
                </div>
            </H.CardLeonan> 
        </H.Container>
    )
}
