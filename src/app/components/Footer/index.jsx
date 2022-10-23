import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaGoogle,
} from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";

import * as F from './FooterStyles';

export const Footer = () => {
    
    return (
        <F.Container>
            <F.Wrapper>
                <F.SocialMedia>
                    <F.SocialMediaWrap>
                        <F.SocialLogo >
                            <p>© 2022 Copyright: Leonan Thomaz</p>
                            <span>Design by <a href="https://www.linkedin.com/in/leonanthomaz" target="_blank">@leonan.thomaz</a></span><br/>
                        </F.SocialLogo>

                        <F.SocialIcons>
                            <F.SocialIconLink
                                href='https://api.whatsapp.com/send?phone=5521998090928'
                                target='_blank'
                                aria-label='Whatsapp - Leonan Thomaz'
                                rel='noopener noreferrer'
                            >
                                <BsWhatsapp />
                            </F.SocialIconLink>

                            <F.SocialIconLink href='https://github.com/leonanthomaz/' target='_blank' aria-label='Github'>
                                <FaGithub />
                            </F.SocialIconLink>
                            
                            <F.SocialIconLink href='https://www.linkedin.com/in/leonanthomaz' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </F.SocialIconLink>

                            <F.SocialIconLink href='mailto:leonan.thomaz@gmail.com? Subject: Olá! Gostaria de falar com você!m&body=Conteúdo da mensagem' target='_blank' aria-label='Google'>
                                <FaGoogle />
                            </F.SocialIconLink>

                        </F.SocialIcons>

                    </F.SocialMediaWrap>
                </F.SocialMedia>
            </F.Wrapper>
            
        </F.Container>
    )
}
