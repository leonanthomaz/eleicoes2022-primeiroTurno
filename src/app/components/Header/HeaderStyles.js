import styled from "styled-components";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";

export const Container = styled.div`
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
background: #eeeeee;

`;

export const Titulo = styled.h1`
    margin-left: 30px;
    color: #040461;
    font-weight: 700;

    @media(max-width: 760px){
        font-size: 20px;
    }
    
`;

export const Brasao = styled.div`
margin-right: 30px;

img{
    width: 80px;
}

`;

export const CardLeonan = styled.div`

    text-align: end;
    margin-right: 30px;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    .card-leonan-container{
        .card-leonan-up{
            h5{
                font-size: 14px;
                font-weight: 700;
                margin: 5px;

                @media(max-width: 760px){
                    font-size: 12px;
                }

                @media(max-width: 500px){
                    display: none;
                }
            }
        }
        .card-leonan-down{
            a{
                text-decoration: none;
                color: gray;
                font-size: 14px;

                @media(max-width: 760px){
                    font-size: 12px;
                }
            }
        }
    }
`;

export const Github = styled(DiGithubBadge)`
font-size: 25px;
`;

export const Linkedin = styled(AiFillLinkedin)`
font-size: 20px;
`;